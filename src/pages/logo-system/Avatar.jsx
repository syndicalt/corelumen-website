import { ObservatoryMark } from '../../brand/index.js';
import styles from './Avatar.module.css';

export function Avatar({ shape = 'circle' }) {
  return (
    <div
      className={styles.avatar}
      style={{ borderRadius: shape === 'circle' ? '50%' : 14 }}
    >
      <div className={styles.aura} />
      <ObservatoryMark size={56} />
    </div>
  );
}
