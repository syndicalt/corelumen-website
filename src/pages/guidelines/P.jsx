import styles from './P.module.css';

export function P({ children, style }) {
  return (
    <p className={styles.p} style={style}>
      {children}
    </p>
  );
}
