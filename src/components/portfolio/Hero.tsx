import { Github, Linkedin, FileText } from "lucide-react";
import { CONTACT, SOCIAL_LINKS } from "@/config/constants";
import { useTypewriter } from "@/hooks/useTypewriter";

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  github: Github,
  linkedin: Linkedin,
  resume: FileText,
};

export const Hero = () => {
  const { displayed: tagline, done: taglineDone } = useTypewriter(
    CONTACT.tagline,
    28,
    750
  );

  return (
    <section className="pt-20 pb-16 md:pt-28 md:pb-20 relative z-10">
      {/* Boot label */}
      <p
        className="hero-line hero-line-1 text-xs tracking-[0.3em] uppercase mb-6"
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          color: "hsl(var(--accent-green) / 0.6)",
        }}
      >
        sys.init :: portfolio v2.0
      </p>

      {/* Name */}
      <h1 className="hero-line hero-line-2 hero-name text-4xl sm:text-5xl md:text-6xl mb-5">
        {CONTACT.name}
        <span className="cursor-blink" />
      </h1>

      {/* Title */}
      <h2
        className="hero-line hero-line-3 text-base md:text-lg font-medium mb-8"
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          color: "hsl(var(--accent-green))",
        }}
      >
        &gt;_ {CONTACT.title}
      </h2>

      {/* Tagline: typewriter */}
      <div className="hero-line hero-line-4 mb-10 h-7 md:h-8">
        <p
          className="text-base md:text-lg font-light"
          style={{ color: "hsl(var(--text-secondary))" }}
        >
          {tagline}
          {!taglineDone && (
            <span
              className="inline-block w-[2px] h-[1em] ml-[2px] align-middle animate-[blink_0.9s_step-end_infinite]"
              style={{ background: "hsl(var(--text-muted))" }}
            />
          )}
        </p>
      </div>

      {/* Social links */}
      <div className="hero-line hero-line-5 flex gap-5">
        {SOCIAL_LINKS.map(({ name, href, label }) => {
          const Icon = ICON_MAP[name] ?? FileText;
          return (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label={label}
            >
              <Icon className="w-5 h-5" />
            </a>
          );
        })}
      </div>
    </section>
  );
};
