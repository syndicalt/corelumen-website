import { ProductCard } from './ProductCard.jsx';
import { ProvaraSchematic } from './schematics/Provara.jsx';
import { PathlightSchematic } from './schematics/Pathlight.jsx';
import { DivitaSchematic } from './schematics/Divita.jsx';
import styles from './Products.module.css';

export function Products() {
  return (
    <section id="products" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <div>
            <div className={styles.kicker}>Products</div>
            <h2 className={styles.heading}>
              Three <span className={styles.italic}>live</span>.
            </h2>
          </div>
          <div className={styles.meta}>
            More in progress<br />
            2026
          </div>
        </div>
        <div className={styles.grid}>
          <ProductCard
            n="01"
            name="Provara"
            subtitle="The adaptive LLM gateway"
            href="https://www.provara.xyz"
            tag="BSL · self-host"
            blurb="Routes every request. Learns from every response. Regression detection, auto cost-migration, spend intelligence — all in one OpenAI-compatible endpoint."
          >
            <ProvaraSchematic />
          </ProductCard>
          <ProductCard
            n="02"
            name="Pathlight"
            subtitle="A debugger for AI agents"
            href="https://syndicalt.github.io/pathlight"
            tag="MIT · self-host"
            blurb="Visual traces, live breakpoints, prompt replay. pdb for agents — drop the SDK in and every LLM call becomes an editable, diffable trace."
          >
            <PathlightSchematic />
          </ProductCard>
          <ProductCard
            n="03"
            name="Divita"
            subtitle="A publishing platform for writers"
            href="https://www.divita.app"
            tag="Web · subscription"
            blurb="Collate blog posts into books and magazines. Publish as EPUB or PDF. Sell on Divita, or export with a publisher pack and take the work anywhere."
          >
            <DivitaSchematic />
          </ProductCard>
        </div>
      </div>
    </section>
  );
}
