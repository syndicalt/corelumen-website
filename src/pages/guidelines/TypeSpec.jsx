import styles from './TypeSpec.module.css';

export function TypeSpec({ family, role, weights, sample, size }) {
  return (
    <div className={styles.spec}>
      <div className={styles.meta}>
        <span>{family}</span>
        <span>
          {role} · {weights}
        </span>
      </div>
      <div
        className={styles.sample}
        style={{
          fontFamily: family,
          fontSize: size,
          fontWeight: family.includes('Fraunces') ? 300 : 400,
        }}
      >
        {sample}
      </div>
    </div>
  );
}
