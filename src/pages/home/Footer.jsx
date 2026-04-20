import { LockupHorizontal } from '../../brand/index.js';
import styles from './Footer.module.css';

const COLUMNS = [
  ['Products', ['Provara', 'Pathlight', 'Divita']],
  ['Studio', ['About', 'Writing', 'Principles']],
  ['Elsewhere', ['GitHub', 'X', 'RSS']],
];

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.columns}>
          <div>
            <LockupHorizontal size={18} />
            <p className={styles.blurb}>
              A small studio making software for developers, writers, and designers.
            </p>
          </div>
          {COLUMNS.map(([title, items]) => (
            <div key={title}>
              <div className={styles.colTitle}>{title}</div>
              {items.map((it) => (
                <div key={it} className={styles.colItem}>
                  {it}
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className={styles.bottom}>
          <span>© 2026 CORELUMEN · NICHOLAS BLANCHARD</span>
          <span>Small software, made carefully.</span>
        </div>
      </div>
    </footer>
  );
}
