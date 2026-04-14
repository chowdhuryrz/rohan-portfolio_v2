const NotFound = () => (
  <div
    className="min-h-screen flex items-center justify-center"
    style={{ background: "hsl(var(--background))" }}
  >
    <div className="text-center px-4">
      <p
        className="text-xs tracking-[0.3em] uppercase mb-4"
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          color: "hsl(var(--accent-green) / 0.6)",
        }}
      >
        error :: 404
      </p>
      <h1
        className="text-6xl font-bold mb-3"
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          color: "hsl(var(--text-primary))",
        }}
      >
        404
      </h1>
      <p
        className="text-sm mb-8"
        style={{ color: "hsl(var(--text-muted))" }}
      >
        Page not found.
      </p>
      <a
        href="/"
        className="text-sm transition-colors duration-200"
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          color: "hsl(var(--accent-green))",
        }}
      >
        &larr; return home
      </a>
    </div>
  </div>
);

export default NotFound;
