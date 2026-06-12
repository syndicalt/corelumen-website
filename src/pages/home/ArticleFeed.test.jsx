import { renderToString } from 'react-dom/server';
import { describe, expect, it } from 'vitest';
import { ArticleFeed } from './ArticleFeed.jsx';

describe('ArticleFeed', () => {
  it('renders articles from colocated markdown and header images', () => {
    const html = renderToString(<ArticleFeed />);

    expect(html).toContain('Published notes from the field.');
    expect(html).toContain('Rhizomatic engineering');
    expect(html).toContain('src="/src/content/articles/rhizomatic-engineering/header.png"');
  });
});
