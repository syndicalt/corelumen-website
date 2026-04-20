import styles from './SwatchBlock.module.css';

export function SwatchBlock({ name, hex, role, on = 'var(--obs-ink)' }) {
  return (
    <div>
      <div
        className={styles.swatch}
        style={{ background: hex, color: on }}
      >
        {name.toUpperCase()}
      </div>
      <div className={styles.meta}>
        <span>{hex.toUpperCase()}</span>
        <span className={styles.role}>{role}</span>
      </div>
    </div>
  );
}
