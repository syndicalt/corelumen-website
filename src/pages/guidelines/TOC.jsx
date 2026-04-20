import styles from './TOC.module.css';

const ITEMS = [
  ['01', 'Story'],
  ['02', 'Voice'],
  ['03', 'Naming'],
  ['04', 'Color'],
  ['05', 'Type'],
  ['06', 'Logo usage'],
  ['07', 'Imagery'],
  ['08', 'Copy patterns'],
  ['09', 'Signature'],
];

export function TOC() {
  return (
    <aside className={styles.toc}>
      <div className={styles.label}>Contents</div>
      {ITEMS.map(([n, t]) => (
        <a key={n} href={`#s${n}`} className={styles.item}>
          <span className={styles.number}>{n}</span>
          {t}
        </a>
      ))}
    </aside>
  );
}
