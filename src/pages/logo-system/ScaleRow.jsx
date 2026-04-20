import { ObservatoryMark } from '../../brand/index.js';
import { Panel } from './Panel.jsx';
import styles from './ScaleRow.module.css';

const SIZES = [12, 16, 24, 40, 64, 96];

export function ScaleRow() {
  return (
    <Panel pad={32} minH={180} label="Scale ladder">
      <div className={styles.row}>
        {SIZES.map((s) => (
          <div key={s} className={styles.item}>
            <ObservatoryMark size={s} />
            <div className={styles.label}>{s}PX</div>
          </div>
        ))}
      </div>
    </Panel>
  );
}
