import { LockupHorizontal } from '../../brand/index.js';
import styles from './Footer.module.css';

const COLUMNS = [
  [
    'Systems',
    [
      { name: 'Zaxy', link: 'https://github.com/syndicalt/zaxy' },
      { name: 'Pathlight', link: 'https://github.com/syndicalt/pathlight' },
      { name: 'Provara', link: 'https://github.com/syndicalt/provara' },
      { name: 'Divita', link: 'https://www.divita.app/' },
    ],
  ],
  [
    'Company',
    [
      { name: 'Founder', link: '#founder' },
      { name: 'Contact', link: '#contact' },
    ],
  ],
  [
    'Elsewhere',
    [
      { name: 'GitHub', link: 'https://github.com/syndicalt/' },
      { name: 'X', link: 'https://x.com/corelumen' },
    ],
  ],
];

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.columns}>
          <div>
            <LockupHorizontal size={18} />
            <p className={styles.blurb}>
              Operating systems, tools, and applications for software that can remember,
              prove, repair, and act with permission.
            </p>
          </div>
          {COLUMNS.map(([title, items]) => (
            <div key={title}>
              <div className={styles.colTitle}>{title}</div>
              {items.map((it) => (
                <div key={it.name} className={styles.colItem}>
                  <a href={it.link} target={it.link.startsWith('http') ? '_blank' : undefined} rel={it.link.startsWith('http') ? 'noopener noreferrer' : undefined}>
                    {it.name}
                  </a>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className={styles.bottom}>
          <span>© 2026 CORELUMEN · NICHOLAS BLANCHARD</span>
          <span>Founder OS for modern automation.</span>
        </div>
      </div>
    </footer>
  );
}
