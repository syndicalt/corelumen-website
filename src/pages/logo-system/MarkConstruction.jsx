import { Panel } from './Panel.jsx';

export function MarkConstruction() {
  return (
    <Panel pad={48} minH={360} label="Construction" right="24× grid">
      <svg viewBox="0 0 240 240" width={340} height={340} style={{ overflow: 'visible' }}>
        <defs>
          <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M20 0H0V20" fill="none" stroke="var(--obs-line-soft)" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="240" height="240" fill="url(#grid)" />
        <rect x="0" y="0" width="240" height="240" fill="none" stroke="var(--obs-line)" strokeWidth="1" />
        <line x1="120" y1="0" x2="120" y2="240" stroke="var(--obs-mute-soft)" strokeWidth="0.5" strokeDasharray="2 4" />
        <line x1="0" y1="120" x2="240" y2="120" stroke="var(--obs-mute-soft)" strokeWidth="0.5" strokeDasharray="2 4" />
        <g transform="translate(120 120)">
          <circle r="115" fill="none" stroke="var(--obs-accent)" strokeWidth="5" opacity="0.22" />
          <circle r="60" fill="none" stroke="var(--obs-accent)" strokeWidth="5" opacity="0.55" />
          <circle r="14" fill="var(--obs-accent)" />
        </g>
        <g fill="var(--obs-mute)" fontFamily="JetBrains Mono, monospace" fontSize="8" opacity="0.7">
          <text x="120" y="8" textAnchor="middle">r₂ · 11.5</text>
          <text x="120" y="68" textAnchor="middle">r₁ · 6.0</text>
          <text x="120" y="116" textAnchor="middle">r₀ · 1.4</text>
        </g>
      </svg>
    </Panel>
  );
}
