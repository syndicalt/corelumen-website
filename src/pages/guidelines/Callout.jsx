import styles from './Callout.module.css';

export function Callout({ kind = 'do', children }) {
  const isDo = kind === 'do';
  const label = isDo ? '✓ DO' : "✕ DON'T";
  return (
    <div className={`${styles.callout} ${isDo ? styles.doKind : styles.dontKind}`}>
      <div className={styles.label}>{label}</div>
      {children}
    </div>
  );
}
