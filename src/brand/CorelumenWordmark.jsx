export function CorelumenWordmark({ size = 28, color = 'var(--obs-text)' }) {
  return (
    <span
      style={{
        fontFamily: 'var(--obs-font-display)',
        fontWeight: 300,
        fontSize: size,
        letterSpacing: -size * 0.028,
        color,
        lineHeight: 1,
      }}
    >
      CoreLumen
    </span>
  );
}
