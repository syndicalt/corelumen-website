import { articles } from '../../content/articles/articles.js';
import styles from './ArticleFeed.module.css';

const visibleArticles = articles.slice(0, 3);

export function ArticleFeed() {
  if (visibleArticles.length === 0) {
    return null;
  }

  return (
    <section id="articles" className={styles.section} aria-labelledby="articles-heading">
      <div className={styles.inner}>
        <div className={styles.header}>
          <p className={styles.kicker}>Articles</p>
          <h2 id="articles-heading" className={styles.title}>
            Published notes from the field.
          </h2>
          <p className={styles.lede}>
            Longer notes can start on X and still live here as a durable archive:
            image, summary, source link, and enough context to stay useful later.
          </p>
        </div>

        <div className={styles.grid}>
          {visibleArticles.map((article) => (
            <a
              key={article.slug}
              className={styles.card}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {article.header ? (
                <img className={styles.image} src={article.header} alt="" loading="lazy" />
              ) : (
                <div className={styles.imageFallback} aria-hidden="true" />
              )}
              <div className={styles.cardBody}>
                <div className={styles.meta}>
                  <span>{article.date}</span>
                  <span>{article.source}</span>
                </div>
                <h3>{article.title}</h3>
                <p>{article.summary}</p>
                {article.tags.length > 0 ? (
                  <div className={styles.tags}>
                    {article.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                ) : null}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
