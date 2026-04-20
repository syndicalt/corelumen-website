import { ObservatoryMark } from '../../brand/index.js';
import styles from './AppIcon.module.css';

export function AppIcon() {
  return (
    <div className={styles.icon}>
      <div className={styles.aura} />
      <ObservatoryMark size={72} />
    </div>
  );
}
