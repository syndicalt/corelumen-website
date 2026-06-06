import styles from './FounderNote.module.css';

const PRINCIPLES = [
  ['Memory', 'Systems should retain useful context with provenance instead of pretending every session starts clean.'],
  ['Authority', 'Agentic software needs exact permission for exact actions, not ambient trust.'],
  ['Relation', 'The work compounds when products, traces, contracts, and tools can inform each other without collapsing into one platform.'],
  ['Repair', 'Durable blueprints and traces should make software easier to understand and improve after it breaks.'],
];

export function FounderNote() {
  return (
    <section id="founder" className={styles.section} aria-labelledby="founder-heading">
      <div className={styles.inner}>
        <div>
          <p className={styles.kicker}>Founder</p>
          <h2 id="founder-heading" className={styles.title}>
            A one-person company, deliberately building across the stack.
          </h2>
        </div>

        <div className={styles.copy}>
          <p>
            CoreLumen is the work of Nicholas Blanchard. The company is small by design:
            less surface area, tighter taste, and fewer layers between a hard problem and a
            shipped system.
          </p>
          <p>
            The work spans infrastructure and applications because the same operating
            problems keep appearing in both places: context goes missing, actions need
            authority, failures need provenance, and useful tools need to stay legible.
            Rhizomatic engineering gives that spread a discipline: build from the
            relations between problems, not from a single top-down product plan.
          </p>

          <div className={styles.principles}>
            {PRINCIPLES.map(([title, body]) => (
              <div key={title} className={styles.principle}>
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
