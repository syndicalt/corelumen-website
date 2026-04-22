import { LockupHorizontal } from '../../brand/index.js';
import styles from './Footer.module.css';

const COLUMNS = [
  ['Products', [{'name': 'Provara', 'link': 'https://www.provara.xyz/'}, {'name': 'Pathlight', 'link': 'https://syndicalt.github.io/pathlight/'}, {'name': 'Divita', 'link': 'https://www.divita.app/'}]],
  //['Studio', ['About', 'Writing', 'Principles']],
  ['Elsewhere', [{ 'name': 'GitHub', 'link': 'https://github.com/syndicalt/' }, { 'name': 'X', 'link': 'https://x.com/corelumen' }]],
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
                <div key={it.name} className={styles.colItem}>
                  <a href={it.link} target='_blank'>{it.name}</a>
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
