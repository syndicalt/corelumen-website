const SPANS = [
  { label: 'classify', type: 'llm', w: 15, off: 0 },
  { label: 'search', type: 'tool', w: 35, off: 12 },
  { label: 'synthesize', type: 'llm', w: 40, off: 45 },
  { label: 'check', type: 'llm', w: 14, off: 84 },
];

export function PathlightSchematic() {
  return (
    <div style={{ fontFamily: 'var(--obs-font-mono)', fontSize: 10, color: 'var(--obs-mute)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
        <span>research-agent</span>
        <span>8.4s</span>
      </div>
      {SPANS.map((s, i) => (
        <div
          key={i}
          style={{
            position: 'relative',
            height: 14,
            marginBottom: 6,
            background: 'var(--obs-surface)',
            borderRadius: 2,
          }}
        >
          <div
            style={{
              position: 'absolute',
              left: `${s.off}%`,
              width: `${s.w}%`,
              top: 0,
              bottom: 0,
              background: s.type === 'llm' ? 'var(--obs-accent)' : 'var(--obs-mute)',
              opacity: s.type === 'llm' ? 0.9 : 0.5,
              borderRadius: 2,
            }}
          />
          <div
            style={{
              position: 'absolute',
              left: `${s.off + s.w + 1}%`,
              top: 0,
              fontSize: 9,
              lineHeight: '14px',
              whiteSpace: 'nowrap',
              color: 'var(--obs-mute)',
            }}
          >
            {s.label}
          </div>
        </div>
      ))}
    </div>
  );
}
