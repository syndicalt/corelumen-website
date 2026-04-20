import { ObservatoryMark } from './ObservatoryMark.jsx';
import { CorelumenWordmark } from './CorelumenWordmark.jsx';

export function LockupStacked({
  size = 44,
  color = 'var(--obs-text)',
  accent = 'var(--obs-accent)',
  animated = false,
}) {
  return (
    <div
      style={{
        display: 'inline-flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: size * 0.35,
      }}
    >
      <ObservatoryMark size={size * 1.4} color={accent} animated={animated} />
      <CorelumenWordmark size={size} color={color} />
    </div>
  );
}
