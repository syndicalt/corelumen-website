import { useEffect, useState } from 'react';
import { ObservatoryMark } from '../../brand/index.js';
import { Starfield } from './Starfield.jsx';
import styles from './Hero.module.css';

export function Hero() {
  const [replay, setReplay] = useState(0);

  useEffect(() => {
    const i = setInterval(() => setReplay((r) => r + 1), 18000);
    return () => clearInterval(i);
  }, []);

  return (
    <section id="thesis" className={styles.hero}>
      <Starfield />
      <div className={styles.aura} />
      <div className={styles.inner}>
        <div key={replay} className={styles.markWrap}>
          <ObservatoryMark size={120} animated={true} />
        </div>
        <div className={styles.kicker}>CoreLumen · Rhizomatic Engineering</div>
        <h1 className={styles.title}>
          Software that can remember, prove, repair, and act with permission.
        </h1>
        <p className={styles.lede}>
          CoreLumen builds operating systems, tools, and applications as a
          connected field of work. One founder is building deliberately across
          related systems where memory, provenance, repair, and authority matter.
        </p>
        <div className={styles.cta}>
          <a href="#systems" className={`${styles.btn} ${styles.btnPrimary}`}>
            Explore the systems
          </a>
          <a href="#contact" className={`${styles.btn} ${styles.btnGhost}`}>
            Start a conversation
          </a>
        </div>
        <div className={styles.proofStrip} aria-label="CoreLumen proof points">
          <span>One founder</span>
          <span>11 systems</span>
          <span>2026 active build</span>
        </div>
      </div>
    </section>
  );
}
