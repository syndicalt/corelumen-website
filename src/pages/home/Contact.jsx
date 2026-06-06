import styles from './Contact.module.css';

export function Contact() {
  return (
    <section id="contact" className={styles.section} aria-labelledby="contact-heading">
      <div className={styles.inner}>
        <p className={styles.kicker}>Contact</p>
        <h2 id="contact-heading" className={styles.title}>
          Pilots, partnerships, feedback, and serious technical conversations.
        </h2>
        <p className={styles.lede}>
          If one of these systems maps to a problem you are facing, start with a direct
          note. CoreLumen is intentionally small, so useful conversations can stay close
          to the work.
        </p>
        <div className={styles.actions}>
          <a className={styles.primary} href="mailto:nicholas@corelumen.io">
            Start a conversation
          </a>
          <a className={styles.secondary} href="https://github.com/syndicalt" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a className={styles.secondary} href="https://x.com/corelumen" target="_blank" rel="noopener noreferrer">
            X
          </a>
        </div>
      </div>
    </section>
  );
}
