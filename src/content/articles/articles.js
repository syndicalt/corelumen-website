const markdownModules = import.meta.glob('./*/article.md', {
  eager: true,
  query: '?raw',
  import: 'default',
});

const headerModules = import.meta.glob('./*/header.{png,jpg,jpeg,webp,avif}', {
  eager: true,
  query: '?url',
  import: 'default',
});

function stripQuotes(value) {
  const trimmed = value.trim();
  if (
    (trimmed.startsWith('"') && trimmed.endsWith('"')) ||
    (trimmed.startsWith("'") && trimmed.endsWith("'"))
  ) {
    return trimmed.slice(1, -1);
  }

  return trimmed;
}

function parseFrontmatterValue(value) {
  const trimmed = value.trim();

  if (trimmed.startsWith('[') && trimmed.endsWith(']')) {
    const inner = trimmed.slice(1, -1).trim();
    if (!inner) {
      return [];
    }

    return inner.split(',').map((item) => stripQuotes(item));
  }

  return stripQuotes(trimmed);
}

function parseFrontmatter(rawFrontmatter) {
  return rawFrontmatter
    .split('\n')
    .filter((line) => line.trim())
    .reduce((metadata, line) => {
      const separator = line.indexOf(':');
      if (separator === -1) {
        return metadata;
      }

      const key = line.slice(0, separator).trim();
      const value = line.slice(separator + 1);

      return {
        ...metadata,
        [key]: parseFrontmatterValue(value),
      };
    }, {});
}

function requireMetadata(article, field) {
  if (!article[field]) {
    throw new Error(`Article ${article.slug} missing ${field}`);
  }
}

export function parseArticleMarkdown(slug, rawMarkdown) {
  const match = rawMarkdown.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!match) {
    throw new Error(`Article ${slug} missing frontmatter`);
  }

  const metadata = parseFrontmatter(match[1]);
  const article = {
    slug,
    title: metadata.title,
    date: metadata.date,
    source: metadata.source || 'X',
    url: metadata.url,
    tags: metadata.tags || [],
    summary: metadata.summary,
    body: match[2].trim(),
  };

  for (const field of ['title', 'date', 'url', 'summary']) {
    requireMetadata(article, field);
  }

  return article;
}

function slugFromPath(path) {
  return path.split('/').at(-2);
}

function headerForSlug(slug) {
  const entry = Object.entries(headerModules).find(([path]) => slugFromPath(path) === slug);
  return entry?.[1] || null;
}

export const articles = Object.entries(markdownModules)
  .map(([path, rawMarkdown]) => {
    const slug = slugFromPath(path);
    return {
      ...parseArticleMarkdown(slug, rawMarkdown),
      header: headerForSlug(slug),
    };
  })
  .sort((a, b) => b.date.localeCompare(a.date));
