import styles from './ProductCard.module.css';

export function ProductCard({ n, name, subtitle, blurb, href, tag, children }) {
  return (
    <a href={href} target="_blank" rel="noopener" className={styles.card}>
      <div className={styles.meta}>
        <span>{n}</span>
        <span className={styles.tag}>◆ {tag}</span>
      </div>
      <div className={styles.name}>{name}</div>
      <div className={styles.subtitle}>{subtitle}</div>
      <div className={styles.schematic}>{children}</div>
      <div className={styles.blurb}>{blurb}</div>
      <div className={styles.cta}>
        {href.replace(/https?:\/\//, '').replace(/\/$/, '')} →
      </div>
    </a>
  );
}
