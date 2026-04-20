import styles from './Section.module.css';

export function Section({ n, title, sub, children, tight = false }) {
  return (
    <section className={`${styles.section} ${tight ? styles.tight : ''}`}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <div className={styles.number}>{String(n).padStart(2, '0')}</div>
          <div className={styles.headBlock}>
            <div className={styles.title}>{title}</div>
            {sub && <div className={styles.sub}>{sub}</div>}
          </div>
        </div>
        {children}
      </div>
    </section>
  );
}
