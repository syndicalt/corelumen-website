import styles from './Principles.module.css';

const ITEMS = [
  [
    '01',
    'One thing, done well',
    'Each product has a single clear job and does it carefully. No suites, no bundles, no feature creep disguised as a platform.',
  ],
  [
    '02',
    'Legible by design',
    "You should be able to open the tool — source, settings, or page — and understand why it works. If we can't explain it in a sentence, we haven't finished.",
  ],
  [
    '03',
    'Small, slow, and yours',
    "We'd rather make one honest product than a suite. The work is made to outlast the trend that made it possible.",
  ],
];

export function Principles() {
  return (
    <section id="studio" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.kicker}>The studio</div>
        <h2 className={styles.heading}>
          A studio is the <span className={styles.italic}>choice</span> of which
          problems to take seriously — and who to take them seriously for.
        </h2>
        <div className={styles.grid}>
          {ITEMS.map(([n, t, d]) => (
            <div key={n}>
              <div className={styles.number}>{n}</div>
              <div className={styles.title}>{t}</div>
              <div className={styles.body}>{d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
