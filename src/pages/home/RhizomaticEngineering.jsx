import styles from './RhizomaticEngineering.module.css';

const PRINCIPLES = [
  [
    'Connection over hierarchy',
    'The work is organized by relations between hard problems: memory, authority, repair, provenance, and useful interfaces.',
  ],
  [
    'Multiplicity over monoculture',
    'CoreLumen is not one platform pretending to solve every problem. It is a field of systems that can stand alone and strengthen each other.',
  ],
  [
    'Maps over roadmaps',
    'Progress is tracked through working artifacts, proof, and new paths between systems rather than a top-down product ladder.',
  ],
  [
    'Useful growth over scale theater',
    'New work appears where the network has pressure, evidence, and a concrete reason to exist.',
  ],
];

export function RhizomaticEngineering() {
  return (
    <section className={styles.section} aria-labelledby="rhizomatic-heading">
      <div className={styles.inner}>
        <div className={styles.copy}>
          <p className={styles.kicker}>Rhizomatic engineering</p>
          <h2 id="rhizomatic-heading" className={styles.title}>
            A company built as a field of relations, not a product ladder.
          </h2>
          <p className={styles.lede}>
            CoreLumen borrows from the rhizome: growth through connection,
            reuse, local pressure, and multiple entry points. Each system can be
            understood on its own, but the deeper thesis appears in the links
            between them.
          </p>
        </div>

        <div className={styles.panel} aria-label="Rhizomatic engineering principles">
          <div className={styles.trace} aria-hidden="true">
            <span className={styles.nodeA} />
            <span className={styles.nodeB} />
            <span className={styles.nodeC} />
            <span className={styles.nodeD} />
          </div>
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
