const kappa = 0.5523;

function ellipsePath(cx: number, cy: number, rx: number, ry: number, tilt: number): string {
  const cos = Math.cos(tilt);
  const sin = Math.sin(tilt);
  const pt = (lx: number, ly: number) =>
    `${(cx + lx * cos - ly * sin).toFixed(2)},${(cy + lx * sin + ly * cos).toFixed(2)}`;
  return [
    `M ${pt(0, -ry)}`,
    `C ${pt(kappa * rx, -ry)} ${pt(rx, -kappa * ry)} ${pt(rx, 0)}`,
    `C ${pt(rx, kappa * ry)} ${pt(kappa * rx, ry)} ${pt(0, ry)}`,
    `C ${pt(-kappa * rx, ry)} ${pt(-rx, kappa * ry)} ${pt(-rx, 0)}`,
    `C ${pt(-rx, -kappa * ry)} ${pt(-kappa * rx, -ry)} ${pt(0, -ry)}`,
    'Z',
  ].join(' ');
}

const CX = 320;
const CY = 360;
const COUNT = 26;

const RIDGES = Array.from({ length: COUNT }, (_, i) => ({
  d: ellipsePath(
    CX + Math.sin(i * 0.55) * 6,
    CY + Math.cos(i * 0.48) * 5,
    22 + i * 13,
    15 + i * 10,
    (i % 5 - 2) * 0.05,
  ),
  drawDelay: i * 0.18,
  glowDelay: i * 0.18 + 1.8,
}));

export const FingerprintBackground = () => (
  <svg
    style={{
      position: 'fixed',
      bottom: '-200px',
      left: '-180px',
      width: '720px',
      height: '800px',
      transform: 'rotate(-20deg)',
      zIndex: 1,
      pointerEvents: 'none',
    }}
  >
    {RIDGES.map((ridge, i) => (
      <path
        key={i}
        d={ridge.d}
        pathLength="1000"
        className="fingerprint-ridge"
        style={{
          animationDelay: `${ridge.drawDelay}s, ${ridge.glowDelay}s`,
        }}
      />
    ))}
  </svg>
);
