const PROVIDERS = ['openai', 'anthropic', 'google', 'mistral'];

export function ProvaraSchematic() {
  return (
    <div
      style={{
        fontFamily: 'var(--obs-font-mono)',
        fontSize: 11,
        color: 'var(--obs-mute)',
        lineHeight: 1.8,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <span style={{ color: 'var(--obs-accent)' }}>→</span>
        <span style={{ color: 'var(--obs-text)' }}>request</span>
        <span style={{ flex: 1, height: 1, background: 'var(--obs-line)' }} />
        <span>provara</span>
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 4,
          marginTop: 10,
          paddingLeft: 24,
        }}
      >
        {PROVIDERS.map((p, i) => (
          <div
            key={p}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              color: i === 1 ? 'var(--obs-accent)' : 'var(--obs-mute)',
            }}
          >
            <span
              style={{
                width: 4,
                height: 4,
                borderRadius: 99,
                background: 'currentColor',
              }}
            />
            {p}
            {i === 1 && <span style={{ marginLeft: 'auto', fontSize: 9 }}>↑ 4.8</span>}
          </div>
        ))}
      </div>
    </div>
  );
}
