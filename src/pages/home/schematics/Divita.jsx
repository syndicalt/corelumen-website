const SPINES = [
  { title: 'Essays on Craft', sub: 'draft', w: 62 },
  { title: 'Field Notes', sub: 'published', w: 38 },
  { title: 'The Long Form', sub: 'queued', w: 78 },
];

export function DivitaSchematic() {
  return (
    <div style={{ fontFamily: 'var(--obs-font-mono)', fontSize: 10, color: 'var(--obs-mute)' }}>
      <div
        style={{
          marginBottom: 10,
          letterSpacing: 1,
          color: 'var(--obs-mute-soft)',
        }}
      >
        workspace · 3 pieces
      </div>
      {SPINES.map((s, i) => (
        <div
          key={i}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            marginBottom: 6,
            padding: '6px 0',
            borderBottom: '1px solid var(--obs-line-soft)',
          }}
        >
          <div
            style={{
              width: `${s.w}%`,
              height: 2,
              background: i === 1 ? 'var(--obs-accent)' : 'var(--obs-mute)',
              opacity: i === 1 ? 0.9 : 0.5,
            }}
          />
          <span style={{ color: i === 1 ? 'var(--obs-text)' : 'var(--obs-mute)', flex: 1 }}>
            {s.title}
          </span>
          <span style={{ color: 'var(--obs-mute-soft)' }}>{s.sub}</span>
        </div>
      ))}
      <div style={{ marginTop: 8, color: 'var(--obs-accent)' }}>→ export .epub · .pdf</div>
    </div>
  );
}
