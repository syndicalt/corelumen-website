export const MAP_SIZE = 500;
export const CENTER = MAP_SIZE / 2;

export const levelOrder = ['flagship', 'tools', 'applications'];

export const ringRadii = {
  flagship: 96,
  tools: 158,
  applications: 220,
};

const focusPoint = {
  x: CENTER,
  y: CENTER,
};

const connectedRadius = 158;
const perimeterRadius = 222;

const baseAngles = {
  flagship: [-94, 158, 24],
  tools: [-34, 10, 55, 90, 135, 205],
  applications: [-58, 122],
};

const bounds = {
  minX: 58,
  maxX: MAP_SIZE - 58,
  minY: 52,
  maxY: MAP_SIZE - 52,
};

export const nodeBounds = {
  halfWidth: 64,
  halfHeight: 31,
};

export const connectionGap = 7;

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function polarPoint(angle, radius) {
  const radians = (angle * Math.PI) / 180;
  return {
    x: CENTER + Math.cos(radians) * radius,
    y: CENTER + Math.sin(radians) * radius,
  };
}

function normalizeAngle(angle) {
  return ((angle % 360) + 360) % 360;
}

function shortestAngleDistance(a, b) {
  const diff = Math.abs(normalizeAngle(a) - normalizeAngle(b));
  return Math.min(diff, 360 - diff);
}

function baseAngle(level, index) {
  return baseAngles[level][index] ?? -90 + index * 42;
}

function basePosition(level, index) {
  return polarPoint(baseAngle(level, index), ringRadii[level]);
}

function groupedSystems(systems) {
  return levelOrder.flatMap((level) =>
    systems
      .filter((system) => system.level === level)
      .map((system, index) => ({ system, index, preferredAngle: baseAngle(system.level, index) }))
  );
}

function resolveConnectedAngles(connectedEntries) {
  const slotAngles = [330, 30, 90, 150, 210, 270];
  const sorted = [...connectedEntries].sort((a, b) => a.preferredAngle - b.preferredAngle);
  const resolved = new Map();
  const usedSlots = new Set();

  for (const entry of sorted) {
    const angle = slotAngles
      .filter((slot) => !usedSlots.has(slot))
      .sort(
        (a, b) =>
          shortestAngleDistance(a, entry.preferredAngle) -
          shortestAngleDistance(b, entry.preferredAngle)
      )[0];

    usedSlots.add(angle);
    resolved.set(entry.system.id, angle ?? normalizeAngle(entry.preferredAngle));
  }

  return resolved;
}

function pushNodesApart(nodes) {
  const minXGap = 126;
  const minYGap = 62;

  for (let iteration = 0; iteration < 42; iteration += 1) {
    for (let i = 0; i < nodes.length; i += 1) {
      for (let j = i + 1; j < nodes.length; j += 1) {
        const a = nodes[i];
        const b = nodes[j];

        if (a.isFocused || b.isFocused) {
          continue;
        }

        const dx = b.x - a.x;
        const dy = b.y - a.y;
        const overlapX = minXGap - Math.abs(dx);
        const overlapY = minYGap - Math.abs(dy);

        if (overlapX <= 0 || overlapY <= 0) {
          continue;
        }

        const pushX = (overlapX / 2 + 2) * (dx >= 0 ? 1 : -1);
        const pushY = (overlapY / 2 + 2) * (dy >= 0 ? 1 : -1);

        if (overlapX < overlapY) {
          a.x -= pushX;
          b.x += pushX;
        } else {
          a.y -= pushY;
          b.y += pushY;
        }

        for (const node of [a, b]) {
          node.x = clamp(node.x, bounds.minX, bounds.maxX);
          node.y = clamp(node.y, bounds.minY, bounds.maxY);
        }
      }
    }
  }

  return nodes;
}

function avoidConnectedLanes(angle, connectedAngles) {
  let resolvedAngle = angle;

  for (const connectedAngle of connectedAngles) {
    if (shortestAngleDistance(resolvedAngle, connectedAngle) < 28) {
      resolvedAngle = normalizeAngle(resolvedAngle + 36);
    }
  }

  return resolvedAngle;
}

export function getNodePositions(systems, selectedId = 'ainix') {
  const entries = groupedSystems(systems);
  const selectedEntry = entries.find(({ system }) => system.id === selectedId) || entries[0];
  const selectedConnections = new Set(selectedEntry.system.connections);
  const connectedAngles = resolveConnectedAngles(
    entries.filter(({ system }) => selectedConnections.has(system.id))
  );

  const nodes = entries.map((entry) => {
    const { system, index, preferredAngle } = entry;
    const isFocused = system.id === selectedEntry.system.id;
    const isConnected = selectedConnections.has(system.id);
    let position;

    if (isFocused) {
      position = focusPoint;
    } else if (isConnected) {
      position = polarPoint(connectedAngles.get(system.id), connectedRadius);
    } else {
      const radius = Math.max(ringRadii[system.level], perimeterRadius);
      const angle = avoidConnectedLanes(preferredAngle + index * 2, connectedAngles.values());
      position = polarPoint(angle, radius);
    }

    return {
      ...system,
      x: clamp(position.x, bounds.minX, bounds.maxX),
      y: clamp(position.y, bounds.minY, bounds.maxY),
      isFocused,
      isConnected,
    };
  });

  return pushNodesApart(nodes);
}

export function edgePoint(from, to, gap = 0) {
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  const distance = Math.hypot(dx, dy);

  if (distance === 0) {
    return { x: from.x, y: from.y };
  }

  const scale = Math.min(
    Math.abs(dx) > 0 ? nodeBounds.halfWidth / Math.abs(dx) : Number.POSITIVE_INFINITY,
    Math.abs(dy) > 0 ? nodeBounds.halfHeight / Math.abs(dy) : Number.POSITIVE_INFINITY
  );

  return {
    x: from.x + dx * scale + (dx / distance) * gap,
    y: from.y + dy * scale + (dy / distance) * gap,
  };
}

function formatNumber(value) {
  return Number(value.toFixed(2)).toString();
}

export function connectionPathD(points) {
  return points
    .map((point, index) => `${index === 0 ? 'M' : 'L'} ${formatNumber(point.x)} ${formatNumber(point.y)}`)
    .join(' ');
}

export function getConnectionPath(from, to) {
  const points = [edgePoint(from, to, connectionGap), edgePoint(to, from)];
  return { d: connectionPathD(points), points };
}
