const GLYPHS = [
  { text: "0xA3F2",   left: 3,  top: 8,  delay: 0,   duration: 7  },
  { text: "> INIT",   left: 6,  top: 32, delay: 1.5, duration: 9  },
  { text: "FF:00:AC", left: 2,  top: 58, delay: 3,   duration: 11 },
  { text: "0x4D2E",   left: 7,  top: 78, delay: 0.8, duration: 8  },
  { text: "> SCAN",   left: 4,  top: 92, delay: 2.2, duration: 10 },
  { text: "0xFF3A",   left: 88, top: 12, delay: 1,   duration: 8  },
  { text: "FF:AC:00", left: 92, top: 38, delay: 2.5, duration: 7  },
  { text: "> AUTH",   left: 90, top: 62, delay: 0.3, duration: 12 },
  { text: "0xF2B1",   left: 94, top: 82, delay: 3.5, duration: 9  },
  { text: "> NULL",   left: 87, top: 95, delay: 1.8, duration: 8  },
  { text: "0x00FF",   left: 15, top: 48, delay: 4,   duration: 10 },
  { text: "> EXEC",   left: 80, top: 50, delay: 2,   duration: 11 },
  { text: "FF:3A:01", left: 18, top: 88, delay: 0.5, duration: 7  },
  { text: "0xC0DE",   left: 76, top: 22, delay: 3.2, duration: 9  },
];

export const HexBackground = () => (
  <div
    style={{
      position: "fixed",
      inset: 0,
      zIndex: -1,
      pointerEvents: "none",
      overflow: "hidden",
    }}
  >
    {GLYPHS.map((g, i) => (
      <span
        key={i}
        className="hex-glyph"
        style={{
          left: `${g.left}%`,
          top: `${g.top}%`,
          animationDelay: `${g.delay}s`,
          animationDuration: `${g.duration}s`,
        }}
      >
        {g.text}
      </span>
    ))}
  </div>
);
