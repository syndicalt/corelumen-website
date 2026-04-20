import styles from './Writing.module.css';

const POSTS = [
  {
    date: 'Apr 2026',
    tag: 'Notes',
    title: 'Why adaptive routing needs a quality envelope',
    read: '6 min',
  },
  {
    date: 'Mar 2026',
    tag: 'Essay',
    title: "Observability is a failure of imagination, until it isn't",
    read: '11 min',
  },
  {
    date: 'Feb 2026',
    tag: 'Release',
    title: 'Pathlight v0.2 — live breakpoints and trace diff',
    read: '4 min',
  },
];

export function Writing() {
  return (
    <section id="writing" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <h2 className={styles.heading}>From the studio</h2>
          <a href="#" className={styles.all}>
            All writing →
          </a>
        </div>
        <div>
          {POSTS.map((p, i) => (
            <a href="#" key={i} className={styles.row}>
              <span className={styles.date}>{p.date}</span>
              <span className={styles.tag}>{p.tag}</span>
              <span className={styles.title}>{p.title}</span>
              <span className={styles.read}>{p.read}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
