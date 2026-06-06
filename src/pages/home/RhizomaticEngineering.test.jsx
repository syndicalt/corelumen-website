import { renderToString } from 'react-dom/server';
import { describe, expect, it } from 'vitest';
import { RhizomaticEngineering } from './RhizomaticEngineering.jsx';

describe('RhizomaticEngineering', () => {
  it('renders the philosophy section and principles', () => {
    const html = renderToString(<RhizomaticEngineering />);

    expect(html).toContain('Rhizomatic engineering');
    expect(html).toContain('Connection over hierarchy');
    expect(html).toContain('Multiplicity over monoculture');
    expect(html).toContain('Maps over roadmaps');
    expect(html).toContain('Useful growth over scale theater');
  });
});
