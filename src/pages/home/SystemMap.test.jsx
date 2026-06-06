import { renderToString } from 'react-dom/server';
import { describe, expect, it } from 'vitest';
import { SystemMap } from './SystemMap.jsx';
import { CENTER, nodeBounds } from './systemMapLayout.js';

describe('SystemMap', () => {
  it('renders without free-variable runtime errors', () => {
    const html = renderToString(<SystemMap />);

    expect(html).toContain('CoreLumen');
    expect(html).toContain('Ainix');
    expect(html).toContain('aria-pressed="true"');
  });

  it('renders selected-node edge connections without the old center label', () => {
    const html = renderToString(<SystemMap />);
    const paths = html.match(/<path[^>]+>/g) || [];

    expect(html).not.toContain('>CoreLumen</text>');
    expect(html).not.toContain('>thesis</text>');
    expect(paths.length).toBeGreaterThan(0);

    for (const path of paths) {
      const match = path.match(/d="M ([0-9.]+) ([0-9.]+)/);
      expect(match).not.toBeNull();

      const [, rawX, rawY] = match;
      const x = Number(rawX);
      const y = Number(rawY);

      const startsOutsideSelectedCard =
        Math.abs(x - CENTER) >= nodeBounds.halfWidth ||
        Math.abs(y - CENTER) >= nodeBounds.halfHeight;

      expect(startsOutsideSelectedCard).toBe(true);
    }
  });
});
