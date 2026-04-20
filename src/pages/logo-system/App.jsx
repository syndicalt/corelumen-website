import { Colophon, LockupHorizontal, LockupStacked, ObservatoryMark } from '../../brand/index.js';
import { Nav } from '../../shared/Nav.jsx';
import { Hero } from './Hero.jsx';
import { Section } from './Section.jsx';
import { Panel } from './Panel.jsx';
import { MarkConstruction } from './MarkConstruction.jsx';
import { ScaleRow } from './ScaleRow.jsx';
import { Favicon } from './Favicon.jsx';
import { BrowserTab } from './BrowserTab.jsx';
import { Avatar } from './Avatar.jsx';
import { AppIcon } from './AppIcon.jsx';
import { DontBox } from './DontBox.jsx';
import styles from './App.module.css';

export function App() {
  return (
    <div>
      <Nav active="logo-system" />
      <Hero />

      <Section
        n={1}
        title="Primary lockups"
        sub="Horizontal for navs and signatures; stacked for centerpieces, keynote slides, and printed work. The mark may appear alone when context makes the name obvious."
      >
        <div className={styles.lockupsGrid}>
          <Panel pad={64} minH={280} label="Horizontal">
            <LockupHorizontal size={36} />
          </Panel>
          <Panel pad={48} minH={280} label="Stacked">
            <LockupStacked size={40} />
          </Panel>
          <Panel pad={48} minH={280} label="Mark only">
            <ObservatoryMark size={120} />
          </Panel>
        </div>
      </Section>

      <Section
        n={2}
        title="Construction & clear space"
        sub="The mark is built on a 24-unit grid. Rings at r=6 and r=11.5; a core point at r=1.4. Clear space equals the radius of the outermost ring."
      >
        <div className={styles.twoCol}>
          <MarkConstruction />
          <Panel pad={48} minH={360} label="Clear space">
            <svg viewBox="0 0 320 200" width="100%" style={{ maxWidth: 420 }}>
              <rect
                x="20"
                y="20"
                width="280"
                height="160"
                fill="none"
                stroke="var(--obs-line)"
                strokeWidth="1"
                strokeDasharray="3 4"
              />
              <g transform="translate(60 60)">
                <circle cx="50" cy="40" r="30" fill="none" stroke="var(--obs-accent)" strokeWidth="1.2" opacity="0.32" />
                <circle cx="50" cy="40" r="16" fill="none" stroke="var(--obs-accent)" strokeWidth="1.2" opacity="0.55" />
                <circle cx="50" cy="40" r="3" fill="var(--obs-accent)" />
                <text
                  x="110"
                  y="44"
                  fill="var(--obs-text)"
                  fontFamily="Fraunces"
                  fontWeight="300"
                  fontSize="22"
                  letterSpacing="-0.5"
                >
                  Corelumen
                </text>
              </g>
              <line x1="20" y1="100" x2="60" y2="100" stroke="var(--obs-mute)" strokeWidth="0.5" />
              <text
                x="38"
                y="94"
                fill="var(--obs-mute)"
                fontFamily="JetBrains Mono, monospace"
                fontSize="8"
                textAnchor="middle"
              >
                = R
              </text>
            </svg>
          </Panel>
        </div>
      </Section>

      <Section
        n={3}
        title="Scale & favicon"
        sub="Down to 12px the rings collapse into a single dot — which is still the mark. Readability across sizes is the point."
      >
        <ScaleRow />
        <div className={styles.threeCol} style={{ marginTop: 20 }}>
          <Panel pad={40} minH={180} label="Favicon · 48px">
            <div className={styles.faviconRow}>
              <Favicon />
              <BrowserTab />
            </div>
          </Panel>
          <Panel pad={40} minH={180} label="Avatar · circle">
            <Avatar shape="circle" />
          </Panel>
          <Panel pad={40} minH={180} label="Avatar · square">
            <Avatar shape="square" />
          </Panel>
        </div>
      </Section>

      <Section
        n={4}
        title="App icon"
        sub="For Mac menu bars, iOS home screens, and the GitHub org avatar. A soft radial aura replaces the flat ground — the only place the mark gets warmth."
      >
        <div className={styles.appIconRow}>
          <AppIcon />
          <div className={styles.appIconSpec}>
            <div className={styles.specLabel}>SPEC</div>
            Squircle · 28 radius · 120×120 base grid.
            <br />
            Background: linear-gradient(145°, #141822, #08090C).
            <br />
            Aura: radial-gradient starlight · 25% opacity.
            <br />
            Mark: 60% of icon width.
          </div>
        </div>
      </Section>

      <Section
        n={5}
        title="Don't"
        sub="A short list. The mark is restrained by design; stretching, recoloring, or loading ornament defeats the point."
      >
        <div className={styles.dontsGrid}>
          <DontBox note="Don't stretch.">
            <div style={{ transform: 'scaleX(1.8)' }}>
              <ObservatoryMark size={60} />
            </div>
          </DontBox>
          <DontBox note="Don't recolor the accent.">
            <ObservatoryMark size={60} color="#FF4477" />
          </DontBox>
          <DontBox note="Don't box it.">
            <div style={{ padding: 10, border: '2px solid #FFE6A8' }}>
              <ObservatoryMark size={50} />
            </div>
          </DontBox>
          <DontBox note="Don't place on high-contrast color.">
            <div style={{ background: '#FFE6A8', padding: 18 }}>
              <ObservatoryMark size={50} color="#08090C" />
            </div>
          </DontBox>
        </div>
      </Section>

      <footer className={styles.footer}>
        <Colophon />
        <div className={styles.footerMeta}>LOGO SYSTEM · v0.1 · OBSERVATORY</div>
      </footer>
    </div>
  );
}
