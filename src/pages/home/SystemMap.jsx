import { useMemo, useState } from 'react';
import { levels, systems } from './data.js';
import {
  CENTER,
  MAP_SIZE,
  getConnectionPath,
  getNodePositions,
  levelOrder,
  ringRadii,
} from './systemMapLayout.js';
import styles from './SystemMap.module.css';

function isExternalHref(href) {
  return href.startsWith('http');
}

function ActionLink({ action, variant }) {
  if (!action) {
    return null;
  }

  const externalProps = isExternalHref(action.href)
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {};

  return (
    <a className={`${styles.action} ${styles[variant]}`} href={action.href} {...externalProps}>
      {action.label}
    </a>
  );
}

export function SystemMap() {
  const [selectedId, setSelectedId] = useState('ainix');
  const positionedSystems = useMemo(() => getNodePositions(systems, selectedId), [selectedId]);
  const selectedSystem =
    positionedSystems.find((system) => system.id === selectedId) || positionedSystems[0];
  const selectedConnections = new Set(selectedSystem.connections);

  return (
    <section id="systems" className={styles.section} aria-labelledby="systems-heading">
      <div className={styles.header}>
        <p className={styles.kicker}>Field map</p>
        <h2 id="systems-heading" className={styles.title}>
          One connected body of work.
        </h2>
        <p className={styles.lede}>
          Select any system and it becomes the temporary center. The map shows
          how each node connects to the wider field, what problem it addresses,
          and what public proof exists today.
        </p>
      </div>

      <div className={styles.layout}>
        <div className={styles.mapPanel} aria-label="Interactive CoreLumen field map">
          <div className={styles.mapFrame}>
            <svg
              className={styles.instrument}
              viewBox={`0 0 ${MAP_SIZE} ${MAP_SIZE}`}
              role="img"
              aria-label="Rhizomatic field map of CoreLumen systems"
            >
              <defs>
                <radialGradient id="system-map-glow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="rgba(255, 230, 168, 0.18)" />
                  <stop offset="58%" stopColor="rgba(255, 230, 168, 0.05)" />
                  <stop offset="100%" stopColor="rgba(255, 230, 168, 0)" />
                </radialGradient>
              </defs>
              <rect width={MAP_SIZE} height={MAP_SIZE} fill="url(#system-map-glow)" />
              <line className={styles.axis} x1={CENTER} y1="32" x2={CENTER} y2="468" />
              <line className={styles.axis} x1="32" y1={CENTER} x2="468" y2={CENTER} />
              {levelOrder.map((level) => (
                <circle
                  key={level}
                  className={styles.ring}
                  cx={CENTER}
                  cy={CENTER}
                  r={ringRadii[level]}
                />
              ))}
              {positionedSystems
                .filter((system) => selectedConnections.has(system.id))
                .map((system) => {
                  const path = getConnectionPath(selectedSystem, system, positionedSystems);

                  if (!path) {
                    return null;
                  }

                  return (
                    <path
                      key={`${selectedSystem.id}-${system.id}`}
                      className={styles.connection}
                      d={path.d}
                      pathLength="1"
                    />
                  );
                })}
            </svg>

            <div className={styles.nodes} aria-label="System selectors">
              {positionedSystems.map((system) => {
                const isSelected = system.id === selectedSystem.id;
                const isConnected = selectedConnections.has(system.id);

                return (
                  <button
                    key={system.id}
                    type="button"
                    className={styles.node}
                    style={{
                      left: `${(system.x / MAP_SIZE) * 100}%`,
                      top: `${(system.y / MAP_SIZE) * 100}%`,
                    }}
                    aria-pressed={isSelected}
                    data-level={system.level}
                    data-selected={isSelected ? 'true' : 'false'}
                    data-connected={isConnected ? 'true' : 'false'}
                    onClick={() => setSelectedId(system.id)}
                  >
                    <span className={styles.nodeName}>{system.name}</span>
                    <span className={styles.nodeRole}>{levels[system.level].shortLabel}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className={styles.levels} aria-label="System level summaries">
            {levelOrder.map((level) => (
              <div key={level} className={styles.level}>
                <div className={styles.levelLabel}>{levels[level].label}</div>
                <p>{levels[level].summary}</p>
              </div>
            ))}
          </div>
        </div>

        <aside
          key={selectedSystem.id}
          className={styles.dossier}
          aria-live="polite"
          aria-label={`${selectedSystem.name} dossier`}
        >
          <div className={styles.dossierHeader}>
            <p className={styles.dossierLevel}>{levels[selectedSystem.level].shortLabel}</p>
            <h3>{selectedSystem.name}</h3>
            <p className={styles.tagline}>{selectedSystem.tagline}</p>
          </div>

          <dl className={styles.readouts}>
            <div>
              <dt>Status</dt>
              <dd>{selectedSystem.status}</dd>
            </div>
            <div>
              <dt>Maturity</dt>
              <dd>{selectedSystem.maturity}</dd>
            </div>
          </dl>

          <div className={styles.detailBlock}>
            <h4>Problem</h4>
            <p>{selectedSystem.summary}</p>
          </div>
          <div className={styles.detailBlock}>
            <h4>Role in the OS</h4>
            <p>{selectedSystem.thesisRole}</p>
          </div>
          <div className={styles.detailBlock}>
            <h4>Current focus</h4>
            <p>{selectedSystem.currentFocus}</p>
          </div>

          <div className={styles.proofBlock}>
            <h4>Proof</h4>
            <div className={styles.proofLinks}>
              {selectedSystem.proofLinks.map((link) => {
                const externalProps = isExternalHref(link.href)
                  ? { target: '_blank', rel: 'noopener noreferrer' }
                  : {};

                return (
                  <a key={link.label} href={link.href} {...externalProps}>
                    {link.label}
                  </a>
                );
              })}
            </div>
          </div>

          <div className={styles.actions}>
            <ActionLink action={selectedSystem.primaryCta} variant="primaryAction" />
            <ActionLink action={selectedSystem.secondaryCta} variant="secondaryAction" />
          </div>
        </aside>
      </div>
    </section>
  );
}
