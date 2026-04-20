import styles from './Heading.module.css';

export function Heading({ n, title, sub }) {
  return (
    <div id={`s${n}`} className={styles.wrap}>
      <div className={styles.section}>§ {n}</div>
      <h2 className={styles.title}>{title}</h2>
      {sub && <div className={styles.sub}>{sub}</div>}
    </div>
  );
}
