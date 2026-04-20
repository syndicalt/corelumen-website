import { ObservatoryMark } from './ObservatoryMark.jsx';

export function Colophon({
  color = 'var(--obs-mute)',
  accent = 'var(--obs-accent)',
}) {
  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        fontFamily: 'var(--obs-font-mono)',
        fontSize: 10,
        letterSpacing: 2,
        color,
        textTransform: 'uppercase',
      }}
    >
      <ObservatoryMark size={12} color={accent} />
      <span>A CoreLumen Edition</span>
    </div>
  );
}
