import styles from './Panel.module.css';

export function Panel({
  children,
  pad = 48,
  minH = 200,
  bg,
  label,
  right,
}) {
  return (
    <div
      className={styles.panel}
      style={{
        padding: pad,
        minHeight: minH,
        background: bg || 'var(--obs-panel)',
      }}
    >
      {label && <div className={styles.label}>{label}</div>}
      {right && <div className={styles.right}>{right}</div>}
      {children}
    </div>
  );
}
