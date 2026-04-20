import styles from './DontBox.module.css';

export function DontBox({ children, note }) {
  return (
    <div>
      <div className={styles.box}>
        {children}
        <div className={styles.badge}>✕ DON'T</div>
      </div>
      <div className={styles.note}>{note}</div>
    </div>
  );
}
