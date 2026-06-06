import { describe, expect, it } from 'vitest';
import { systems } from './data.js';
import {
  CENTER,
  MAP_SIZE,
  edgePoint,
  getConnectionPath,
  getNodePositions,
  nodeBounds,
} from './systemMapLayout.js';

function boxesOverlap(a, b) {
  const minXGap = 118;
  const minYGap = 58;
  return Math.abs(a.x - b.x) < minXGap && Math.abs(a.y - b.y) < minYGap;
}

function nodeBox(node) {
  return {
    minX: node.x - nodeBounds.halfWidth,
    maxX: node.x + nodeBounds.halfWidth,
    minY: node.y - nodeBounds.halfHeight,
    maxY: node.y + nodeBounds.halfHeight,
  };
}

function pointInsideBox(point, box) {
  return point.x > box.minX && point.x < box.maxX && point.y > box.minY && point.y < box.maxY;
}

function segmentIntersectsBox(a, b, box) {
  if (pointInsideBox(a, box) || pointInsideBox(b, box)) {
    return true;
  }

  const dx = b.x - a.x;
  const dy = b.y - a.y;
  let tMin = 0;
  let tMax = 1;

  for (const [p, q] of [
    [-dx, a.x - box.minX],
    [dx, box.maxX - a.x],
    [-dy, a.y - box.minY],
    [dy, box.maxY - a.y],
  ]) {
    if (p === 0) {
      if (q < 0) {
        return false;
      }
      continue;
    }

    const t = q / p;
    if (p < 0) {
      tMin = Math.max(tMin, t);
    } else {
      tMax = Math.min(tMax, t);
    }

    if (tMin > tMax) {
      return false;
    }
  }

  const t = (Math.max(tMin, 0) + Math.min(tMax, 1)) / 2;
  if (t <= 0 || t >= 1) {
    return false;
  }

  return pointInsideBox({ x: a.x + dx * t, y: a.y + dy * t }, box);
}

const diagnosticBlockedConnections = [
  ['ainix', 'rava', ['specora-core']],
  ['ainix', 'eventloom', ['zaxy']],
  ['pathlight', 'eventloom', ['zaxy']],
  ['llmff', 'provara', ['ainix', 'pathlight']],
  ['rava', 'eventloom', ['zaxy']],
  ['aiegis', 'rava', ['specora-core']],
  ['aiegis', 'provara', ['ainix', 'pathlight']],
  ['eventloom', 'rava', ['specora-core']],
];

describe('system map layout', () => {
  it('moves the selected system into the focus position', () => {
    const positioned = getNodePositions(systems, 'rava');
    const selected = positioned.find((system) => system.id === 'rava');

    expect(selected.x).toBe(CENTER);
    expect(selected.y).toBe(CENTER);
    expect(selected.isFocused).toBe(true);
  });

  it('keeps approximate label boxes from overlapping after push layout', () => {
    for (const selected of systems) {
      const positioned = getNodePositions(systems, selected.id);

      for (const system of positioned) {
        expect(system.x).toBeGreaterThanOrEqual(52);
        expect(system.x).toBeLessThanOrEqual(MAP_SIZE - 52);
        expect(system.y).toBeGreaterThanOrEqual(46);
        expect(system.y).toBeLessThanOrEqual(MAP_SIZE - 46);
      }

      for (let i = 0; i < positioned.length; i += 1) {
        for (let j = i + 1; j < positioned.length; j += 1) {
          expect(boxesOverlap(positioned[i], positioned[j])).toBe(false);
        }
      }
    }
  });

  it('finds connected-node edge endpoints for center-radiating connections', () => {
    const positioned = getNodePositions(systems, 'specora-core');
    const zaxy = positioned.find((system) => system.id === 'zaxy');
    const end = edgePoint(zaxy, { x: CENTER, y: CENTER });

    expect(Math.abs(end.x - zaxy.x)).toBeLessThanOrEqual(nodeBounds.halfWidth);
    expect(Math.abs(end.y - zaxy.y)).toBeLessThanOrEqual(nodeBounds.halfHeight);
    expect(Math.hypot(end.x - zaxy.x, end.y - zaxy.y)).toBeGreaterThan(20);
  });

  it('routes rendered connection paths outside non-endpoint node boxes for every selected system', () => {
    for (const selectedSystem of systems) {
      const positioned = getNodePositions(systems, selectedSystem.id);
      const selected = positioned.find((system) => system.id === selectedSystem.id);

      for (const connectedId of selected.connections) {
        const connected = positioned.find((system) => system.id === connectedId);
        const path = getConnectionPath(selected, connected, positioned);
        const selectedBox = nodeBox(selected);
        const connectedBox = nodeBox(connected);

        expect(pointInsideBox(path.points[0], selectedBox)).toBe(false);
        expect(pointInsideBox(path.points.at(-1), connectedBox)).toBe(false);

        for (const unrelated of positioned) {
          if (unrelated.id === selected.id || unrelated.id === connected.id) {
            continue;
          }

          const unrelatedBox = nodeBox(unrelated);
          for (let index = 0; index < path.points.length - 1; index += 1) {
            expect(
              segmentIntersectsBox(path.points[index], path.points[index + 1], unrelatedBox)
            ).toBe(false);
          }
        }
      }
    }
  });

  it('keeps the diagnosed blocked connection pairs out of their blocking cards', () => {
    for (const [selectedId, connectedId, blockerIds] of diagnosticBlockedConnections) {
      const positioned = getNodePositions(systems, selectedId);
      const selected = positioned.find((system) => system.id === selectedId);
      const connected = positioned.find((system) => system.id === connectedId);
      const path = getConnectionPath(selected, connected, positioned);

      expect(path).not.toBeNull();

      for (const blockerId of blockerIds) {
        const blocker = positioned.find((system) => system.id === blockerId);
        const blockerBox = nodeBox(blocker);

        for (let index = 0; index < path.points.length - 1; index += 1) {
          expect(
            segmentIntersectsBox(path.points[index], path.points[index + 1], blockerBox)
          ).toBe(false);
        }
      }
    }
  });
});
