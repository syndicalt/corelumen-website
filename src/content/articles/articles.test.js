import { describe, expect, it } from 'vitest';
import { articles, parseArticleMarkdown } from './articles.js';

describe('article content loader', () => {
  it('parses article frontmatter and markdown body', () => {
    const article = parseArticleMarkdown(
      'rhizomatic-engineering',
      `---
title: "Rhizomatic Engineering"
date: "2026-06-11"
source: "X"
url: "https://x.com/corelumen/status/123"
tags: ["CoreLumen", "Engineering"]
summary: "Why CoreLumen is a field of related systems."
---

The article body.
`
    );

    expect(article).toEqual({
      slug: 'rhizomatic-engineering',
      title: 'Rhizomatic Engineering',
      date: '2026-06-11',
      source: 'X',
      url: 'https://x.com/corelumen/status/123',
      tags: ['CoreLumen', 'Engineering'],
      summary: 'Why CoreLumen is a field of related systems.',
      body: 'The article body.',
    });
  });

  it('rejects articles missing required metadata', () => {
    expect(() =>
      parseArticleMarkdown(
        'missing-title',
        `---
date: "2026-06-11"
url: "https://x.com/corelumen/status/123"
summary: "Missing a title."
---

Body.
`
      )
    ).toThrow('missing title');
  });

  it('loads colocated article folders with header image URLs', () => {
    const article = articles.find((item) => item.slug === 'rhizomatic-engineering');

    expect(article.title).toBe('Rhizomatic engineering');
    expect(article.header).toMatch(/header\.png/);
    expect(article.body).toContain('CoreLumen is built as a field of relations');
  });
});
