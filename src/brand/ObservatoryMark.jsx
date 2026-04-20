import { useEffect, useState } from 'react';

const ease = (x) => 1 - Math.pow(1 - x, 3);
const ringOpacity = [0.22, 0.55, 0.7, 0.85, 0.95];

export function ObservatoryMark({
  size = 64,
  color = 'var(--obs-accent)',
  animated = false,
  rings = 2,
}) {
  const [t, setT] = useState(animated ? 0 : 1);

  useEffect(() => {
    if (!animated) return;
    const start = performance.now();
    let raf;
    const tick = (now) => {
      const p = Math.min(1, (now - start) / 1600);
      setT(p);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [animated]);

  const outer = 11.5;
  const inner = 6;
  const step = rings > 1 ? (outer - inner) / (rings - 1) : 0;
  const ringRadii = Array.from({ length: rings }, (_, i) => outer - i * step);

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      style={{ display: 'block', overflow: 'visible' }}
      aria-hidden
    >
      {ringRadii.map((r, i) => {
        const circ = 2 * Math.PI * r;
        const stagger = (i / rings) * 0.5;
        const localT = Math.max(0, Math.min(1, (t - stagger) / (1 - stagger)));
        const drawn = ease(localT);
        return (
          <circle
            key={i}
            cx="12"
            cy="12"
            r={r}
            fill="none"
            stroke={color}
            strokeWidth="0.5"
            opacity={ringOpacity[i] || 0.2}
            strokeDasharray={circ}
            strokeDashoffset={circ * (1 - drawn)}
            transform="rotate(-90 12 12)"
          />
        );
      })}
      <circle cx="12" cy="12" r={1.4 * ease(t)} fill={color}>
        {animated && (
          <animate
            attributeName="r"
            values="1.4;1.7;1.4"
            dur="3s"
            repeatCount="indefinite"
            begin="1.6s"
          />
        )}
      </circle>
    </svg>
  );
}
