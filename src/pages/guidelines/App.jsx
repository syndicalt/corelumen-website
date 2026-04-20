import { Colophon, LockupHorizontal } from '../../brand/index.js';
import { Nav } from '../../shared/Nav.jsx';
import { TOC } from './TOC.jsx';
import { Heading } from './Heading.jsx';
import { P } from './P.jsx';
import { Divider } from './Divider.jsx';
import { Callout } from './Callout.jsx';
import { SwatchBlock } from './SwatchBlock.jsx';
import { TypeSpec } from './TypeSpec.jsx';
import styles from './App.module.css';

const OBS = {
  ink: '#08090c',
  panel: '#101217',
  surface: '#171a21',
  line: '#242832',
  text: '#eeeae0',
  mute: '#888778',
  muteSoft: '#5e5d55',
  accent: '#ffe6a8',
};

export function App() {
  return (
    <div>
      <Nav active="guidelines" />

      <section className={styles.cover}>
        <div className={styles.coverInner}>
          <div className={styles.kicker}>Brand guidelines · v0.1 · Observatory</div>
          <h1 className={styles.title}>
            How to <span className={styles.italic}>hold</span> the CoreLumen brand.
          </h1>
          <p className={styles.lede}>
            A short manual. Principles first, rules second. When the two disagree, the principle wins.
          </p>
          <div className={styles.meta}>
            <div>
              <div className={styles.metaLabel}>Author</div>
              <div className={styles.metaValue}>CoreLumen Studio</div>
            </div>
            <div>
              <div className={styles.metaLabel}>Revision</div>
              <div className={styles.metaValue}>0.1</div>
            </div>
            <div>
              <div className={styles.metaLabel}>Date</div>
              <div className={styles.metaValue}>April 2026</div>
            </div>
            <div>
              <div className={styles.metaLabel}>Stewards</div>
              <div className={styles.metaValue}>Nicholas Blanchard</div>
            </div>
          </div>
        </div>
      </section>

      <div className={styles.body}>
        <TOC />
        <div>
          <Heading
            n="01"
            title="The story in one paragraph"
            sub="If someone asks what CoreLumen is, this is the answer. Memorize it. Vary the wording, never the shape."
          />
          <div className={styles.storyBox}>
            CoreLumen is a small studio making software for developers, writers, and designers. Each
            product stands on its own — carefully made, carefully maintained, and built to last. The
            work is the point.
          </div>

          <Divider />

          <Heading
            n="02"
            title="Voice"
            sub="Calm and confident. Patient on long sentences; short when it matters. Second person, never first-person-plural-as-corporate-we."
          />
          <P>
            <strong className={styles.accentStrong}>Declarative.</strong> Sentences end. They do not
            trail off. They do not ask questions when they can assert.
          </P>
          <P>
            <strong className={styles.accentStrong}>Specific.</strong> Name the thing. "Publisher
            pack" beats "AI-powered export." "Replay bank" beats "regression testing." If you can't
            name it, you haven't finished building it.
          </P>
          <P>
            <strong className={styles.accentStrong}>Considered.</strong> Every sentence has a reason
            to exist. Prefer the verb over the adjective; prefer the reader over the stakeholder.
          </P>
          <div className={styles.calloutPair}>
            <Callout kind="do">
              "Every trace carries the commit SHA that produced it."
            </Callout>
            <Callout kind="dont">
              "Powerful tracing with AI-native observability out of the box."
            </Callout>
          </div>

          <Divider />

          <Heading
            n="03"
            title="Naming"
            sub="One word, camelCase in running text, no space. The mark writes it lowercase. Don't hyphenate, don't separate."
          />
          <div className={styles.calloutPair}>
            <Callout kind="do">
              CoreLumen (body copy, headlines)
              <br />
              Corelumen (wordmark only)
              <br />
              corelumen.com
            </Callout>
            <Callout kind="dont">
              Core Lumen · Core-Lumen
              <br />
              CORELUMEN (except uppercase display use)
              <br />
              CoreLumens (plural: use "products")
            </Callout>
          </div>
          <P style={{ marginTop: 32 }}>
            Products are never prefixed with the studio name. It is <em>Provara</em>, not{' '}
            <em>CoreLumen Provara</em>. The relationship appears as a signature line:
          </P>
          <div className={styles.signatureBox}>
            <Colophon />
          </div>

          <Divider />

          <Heading
            n="04"
            title="Color"
            sub="Dark-mode first. Deep ink ground. One warm starlight accent, used sparingly — for emphasis, for interaction, never for decoration."
          />
          <div className={styles.swatchRow}>
            <SwatchBlock name="Ink" hex={OBS.ink} role="Ground" on={OBS.text} />
            <SwatchBlock name="Panel" hex={OBS.panel} role="Cards" on={OBS.text} />
            <SwatchBlock name="Surface" hex={OBS.surface} role="Raised" on={OBS.text} />
            <SwatchBlock name="Line" hex={OBS.line} role="Borders" on={OBS.text} />
          </div>
          <div className={styles.swatchRow} style={{ marginTop: 16 }}>
            <SwatchBlock name="Text" hex={OBS.text} role="Primary" on={OBS.ink} />
            <SwatchBlock name="Mute" hex={OBS.mute} role="Secondary" on={OBS.ink} />
            <SwatchBlock name="Mute / soft" hex={OBS.muteSoft} role="Tertiary" on={OBS.ink} />
            <SwatchBlock name="Luminance" hex={OBS.accent} role="Accent" on={OBS.ink} />
          </div>
          <P style={{ marginTop: 32 }}>
            The accent — Luminance (#FFE6A8) — is the only non-neutral hue in the system. A page may
            have none of it. No page should have much of it. When in doubt, use less.
          </P>

          <Divider />

          <Heading
            n="05"
            title="Type"
            sub="Fraunces for display and long-form headings. Inter for UI and body. JetBrains Mono for code, metadata, and labels. Three families, assigned roles."
          />
          <div className={styles.typeStack}>
            <TypeSpec
              family="Fraunces"
              role="Display · italics available"
              weights="300 / 400"
              sample="See what your systems do."
              size={52}
            />
            <TypeSpec
              family="Inter"
              role="Body · UI"
              weights="300 / 400 / 500"
              sample="Tools, considered."
              size={36}
            />
            <TypeSpec
              family='"JetBrains Mono"'
              role="Code · Labels · Metadata"
              weights="400 / 500"
              sample="trace.replay --from edit"
              size={28}
            />
          </div>

          <Divider />

          <Heading
            n="06"
            title="Logo usage"
            sub="See the logo system document for construction and lockups. A few rules live here, because they are easy to break."
          />
          <div className={styles.calloutPair}>
            <Callout kind="do">
              Use the mark alone only where CoreLumen is already implied — avatars, app icons, the
              end of a signature.
            </Callout>
            <Callout kind="dont">
              Never use the mark alone in a context where a new reader would not recognize it.
            </Callout>
            <Callout kind="do">
              Maintain clear space equal to the radius of the outermost ring on every side.
            </Callout>
            <Callout kind="dont">
              Never place the mark inside a rule, shape, or border — the concentric rings <em>are</em>{' '}
              the container.
            </Callout>
            <Callout kind="do">Use Luminance for the accent, on deep ink ground.</Callout>
            <Callout kind="dont">
              Never recolor the accent to match a product, a campaign, or a season.
            </Callout>
          </div>

          <Divider />

          <Heading
            n="07"
            title="Imagery"
            sub="The brand avoids pictorial illustration. It prefers diagrams, schematics, and data. A good image in the CoreLumen visual language looks like something you could read."
          />
          <div className={styles.imageryPair}>
            <div className={styles.imageryPanel}>
              <svg viewBox="0 0 200 100" width="100%" style={{ maxWidth: 260 }}>
                <g fill="none" stroke="var(--obs-mute)" strokeWidth="0.6">
                  <path d="M10 50 L60 50" />
                  <path d="M80 20 L130 20" />
                  <path d="M80 50 L130 50" />
                  <path d="M80 80 L130 80" />
                  <path d="M60 50 Q70 20 80 20" />
                  <path d="M60 50 L80 50" />
                  <path d="M60 50 Q70 80 80 80" />
                  <path d="M150 20 L190 20" />
                  <path d="M150 50 L190 50" />
                  <path d="M150 80 L190 80" />
                </g>
                <circle cx="10" cy="50" r="2" fill="var(--obs-accent)" />
                <circle cx="60" cy="50" r="2" fill="var(--obs-text)" />
                <circle cx="80" cy="20" r="2" fill="var(--obs-text)" />
                <circle cx="80" cy="50" r="2" fill="var(--obs-text)" />
                <circle cx="80" cy="80" r="2" fill="var(--obs-text)" />
                <circle cx="130" cy="20" r="2" fill="var(--obs-text)" />
                <circle cx="130" cy="50" r="2" fill="var(--obs-accent)" />
                <circle cx="130" cy="80" r="2" fill="var(--obs-text)" />
              </svg>
            </div>
            <div className={styles.imageryCode}>
              <div className={styles.codeComment}>// routing cell</div>
              <div>
                task<span className={styles.codeMute}>  =</span> "qa"
              </div>
              <div>
                complexity<span className={styles.codeMute}>  =</span> "medium"
              </div>
              <div>
                winner<span className={styles.codeMute}>  =</span> haiku-4.5
              </div>
              <div>
                score<span className={styles.codeMute}>  =</span>{' '}
                <span className={styles.codeAccent}>4.82</span>
              </div>
            </div>
          </div>

          <Divider />

          <Heading
            n="08"
            title="Copy patterns"
            sub="Three forms that appear often enough to be worth standardizing."
          />

          <div className={styles.patternLabel}>PRODUCT ANNOUNCEMENT</div>
          <div className={styles.patternBox}>
            <div className={styles.patternHeadline}>
              Divita <span className={styles.italic}>1.2</span> — publisher packs.
            </div>
            <div className={styles.patternBody}>
              Export any Divita piece as a printer-ready PDF and an EPUB, together, with metadata
              already set. Ship to a publisher, or send it straight to your reader. Out today.
            </div>
          </div>

          <div className={styles.patternLabel}>README HEADER</div>
          <div className={`${styles.patternBox} ${styles.patternMono}`}>
            <div className={styles.readmeMute}># provara</div>
            <div className={styles.readmeBody}>the adaptive llm gateway.</div>
            <div className={styles.readmeMute}>
              a corelumen product · bsl-1.1 · self-hostable
            </div>
          </div>

          <div className={styles.patternLabel}>SOCIAL BIO</div>
          <div className={styles.socialBox}>
            Small studio. Software for developers, writers, and designers.{' '}
            <span className={styles.italic}>Made to last.</span>
          </div>

          <Divider />

          <Heading
            n="09"
            title="Signature"
            sub="The one line that appears at the foot of product pages, READMEs, and email signatures — making the studio ↔ product relationship legible without overpowering it."
          />
          <div className={styles.signatureCenter}>
            <Colophon />
            <div className={styles.signatureTag}>Provara — a Corelumen product.</div>
          </div>
        </div>
      </div>

      <footer className={styles.footer}>
        <LockupHorizontal size={14} />
        <div className={styles.footerMeta}>BRAND GUIDELINES · v0.1 · END OF DOCUMENT</div>
      </footer>
    </div>
  );
}
