import { ObservatoryMark } from '../../brand/index.js';
import styles from './Favicon.module.css';

export function Favicon() {
  return (
    <div className={styles.favicon}>
      <ObservatoryMark size={26} />
    </div>
  );
}
