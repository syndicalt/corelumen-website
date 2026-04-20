import { useMemo } from 'react';

export function Starfield() {
  const stars = useMemo(() => {
    const out = [];
    for (let i = 0; i < 60; i++) {
      out.push({
        x: Math.random() * 100,
        y: Math.random() * 100,
        r: Math.random() * 1.1 + 0.3,
        o: Math.random() * 0.5 + 0.2,
        d: Math.random() * 4 + 3,
        delay: Math.random() * 4,
      });
    }
    return out;
  }, []);

  return (
    <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
      {stars.map((s, i) => (
        <circle
          key={i}
          cx={`${s.x}%`}
          cy={`${s.y}%`}
          r={s.r}
          fill="var(--obs-text)"
          opacity={s.o}
          style={{ animation: `twinkle ${s.d}s ease-in-out ${s.delay}s infinite` }}
        />
      ))}
    </svg>
  );
}
