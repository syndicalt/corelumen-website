import { ObservatoryMark } from '../../brand/index.js';
import styles from './BrowserTab.module.css';

export function BrowserTab() {
  return (
    <div className={styles.tab}>
      <ObservatoryMark size={14} />
      <span>CoreLumen</span>
      <span className={styles.close}>×</span>
    </div>
  );
}
