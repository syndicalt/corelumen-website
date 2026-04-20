import { ObservatoryMark } from './ObservatoryMark.jsx';
import { CorelumenWordmark } from './CorelumenWordmark.jsx';

export function LockupHorizontal({
  size = 28,
  color = 'var(--obs-text)',
  accent = 'var(--obs-accent)',
  animated = false,
}) {
  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: size * 0.55,
      }}
    >
      <ObservatoryMark size={size * 1.15} color={accent} animated={animated} />
      <CorelumenWordmark size={size * 1.3} color={color} />
    </div>
  );
}
