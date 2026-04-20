import { useState } from 'react';
import { ObservatoryMark } from '../../brand/index.js';
import styles from './Hero.module.css';

export function Hero() {
  const [replay, setReplay] = useState(0);

  return (
    <div className={styles.hero}>
      <div className={styles.kicker}>CoreLumen / Identity / Observatory</div>
      <div className={styles.grid}>
        <div>
          <h1 className={styles.title}>
            A mark you
            <br />
            <span className={styles.italic}>can't unsee.</span>
          </h1>
          <p className={styles.lede}>
            Two concentric rings and one point of light. Concentric because
            visibility deepens with attention. A point of light because that's the
            job of the work.
          </p>
          <button onClick={() => setReplay((r) => r + 1)} className={styles.replay}>
            ↻ Replay animation
          </button>
        </div>
        <div className={styles.markFrame}>
          <div className={styles.aura} />
          <div key={replay}>
            <ObservatoryMark size={260} animated={true} />
          </div>
        </div>
      </div>
    </div>
  );
}
