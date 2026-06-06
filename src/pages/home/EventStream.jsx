import { events, systems } from './data.js';
import styles from './EventStream.module.css';

const systemNames = new Map(systems.map((system) => [system.id, system.name]));

function isExternalHref(href) {
  return href.startsWith('http');
}

export function EventStream() {
  return (
    <section id="proof" className={styles.section} aria-labelledby="proof-heading">
      <div className={styles.inner}>
        <div className={styles.header}>
          <p className={styles.kicker}>Field notes</p>
          <h2 id="proof-heading" className={styles.title}>
            Recent movement through the field.
          </h2>
          <p className={styles.lede}>
            Public artifacts, active build notes, and near-term focus areas
            where one system creates pressure or proof for another.
          </p>
        </div>

        <div className={styles.stream}>
          {events.map((event) => {
            const externalProps = isExternalHref(event.href)
              ? { target: '_blank', rel: 'noopener noreferrer' }
              : {};

            return (
              <a key={event.id} className={styles.event} href={event.href} {...externalProps}>
                <span className={styles.date}>{event.date}</span>
                <span className={styles.type}>{event.type}</span>
                <span className={styles.system}>{systemNames.get(event.systemId)}</span>
                <span className={styles.eventBody}>
                  <strong>{event.title}</strong>
                  <span>{event.summary}</span>
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
