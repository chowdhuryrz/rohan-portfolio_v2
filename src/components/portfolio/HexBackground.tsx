const R = 36;
const COL_SPACING = R * 1.5;
const ROW_SPACING = R * Math.sqrt(3);
const ROWS = 25;
const SVG_W = 160;

function hexPoints(cx: number, cy: number): string {
  return Array.from({ length: 6 }, (_, i) => {
    const angle = (Math.PI / 3) * i;
    return `${(cx + R * Math.cos(angle)).toFixed(1)},${(cy + R * Math.sin(angle)).toFixed(1)}`;
  }).join(' ');
}

type HexData = { points: string; delay: string; duration: string };

function buildColumn(cx: number, yOffset: boolean, startIdx: number): HexData[] {
  return Array.from({ length: ROWS }, (_, row) => {
    const cy = R + row * ROW_SPACING + (yOffset ? ROW_SPACING / 2 : 0);
    const idx = startIdx + row;
    return {
      points: hexPoints(cx, cy),
      delay: `${((idx * 1.618) % 9).toFixed(2)}s`,
      duration: `${(5 + (idx * 2.3) % 9).toFixed(1)}s`,
    };
  });
}

const LEFT_HEXES: HexData[] = [
  ...buildColumn(R / 2, false, 0),
  ...buildColumn(R / 2 + COL_SPACING, true, ROWS),
];

const RIGHT_HEXES: HexData[] = [
  ...buildColumn(SVG_W - R / 2 - COL_SPACING, true, 0),
  ...buildColumn(SVG_W - R / 2, false, ROWS),
];

const Panel = ({ hexes, side }: { hexes: HexData[]; side: "left" | "right" }) => (
  <svg
    style={{
      position: "fixed",
      [side]: 0,
      top: 0,
      width: `${SVG_W}px`,
      height: "100vh",
      zIndex: 1,
      pointerEvents: "none",
    }}
  >
    {hexes.map((hex, i) => (
      <polygon
        key={i}
        points={hex.points}
        className="hex-shape"
        style={{ animationDelay: hex.delay, animationDuration: hex.duration }}
      />
    ))}
  </svg>
);

export const HexBackground = () => (
  <>
    <Panel hexes={LEFT_HEXES} side="left" />
    <Panel hexes={RIGHT_HEXES} side="right" />
  </>
);
