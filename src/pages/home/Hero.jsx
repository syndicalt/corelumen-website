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
    <section className={styles.hero}>
      <Starfield />
      <div className={styles.aura} />
      <div className={styles.inner}>
        <div key={replay} className={styles.markWrap}>
          <ObservatoryMark size={120} animated={true} />
        </div>
        <div className={styles.kicker}>A product studio · est. 2026</div>
        <h1 className={styles.title}>
          A <span className={styles.italic}>small</span> software studio.
        </h1>
        <p className={styles.lede}>
          CoreLumen is a small studio making software for that makes life easier for creators, consumers, and enterprise. Each product stands on its own — carefully made, carefully
          maintained, and built to last.
        </p>
        {/* <div className={styles.cta}>
          <a href="#products" className={`${styles.btn} ${styles.btnPrimary}`}>
            See the products
          </a>
          <a href="#studio" className={`${styles.btn} ${styles.btnGhost}`}>
            About the studio
          </a>
        </div> */}
      </div>
    </section>
  );
}
