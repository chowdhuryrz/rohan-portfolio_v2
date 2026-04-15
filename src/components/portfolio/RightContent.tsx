import { useState } from "react";
import { ExternalLink, ArrowUpRight, Github } from "lucide-react";
import { EXPERIENCES, PROJECTS, ABOUT_SECTIONS } from "@/config/data";
import { RESUME_URL, SOCIAL_LINKS, CONTACT } from "@/config/constants";
import { Certifications } from "./Certifications";
import { useInView } from "@/hooks/useInView";

const SectionWrapper = ({
  id,
  children,
  delay = 0,
}: {
  id: string;
  children: React.ReactNode;
  delay?: number;
}) => {
  const [ref, inView] = useInView<HTMLElement>(0.08);
  return (
    <section
      id={id}
      ref={ref}
      className={`reveal ${inView ? "visible" : ""}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </section>
  );
};

export const RightContent = () => {
  const [hoveredBullet, setHoveredBullet] = useState<{ expIndex: number; pointIndex: number } | null>(null);

  return (
    <main className="relative z-10 space-y-24 pb-24">

      {/* About */}
      <SectionWrapper id="about">
        <h2 className="section-heading">About</h2>
        <div className="space-y-4">
          {ABOUT_SECTIONS.map((paragraph, i) => (
            <p
              key={i}
              className="leading-relaxed text-sm md:text-base font-light"
              style={{ color: "hsl(var(--text-secondary))" }}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </SectionWrapper>

      {/* Experience */}
      <SectionWrapper id="experience">
        <h2 className="section-heading">Experience</h2>
        <div className="space-y-6">
          {EXPERIENCES.map((exp, i) => (
            <div key={i} className="group experience-card">
              <div className="flex flex-col sm:flex-row sm:gap-8">
                <div className="sm:w-36 flex-shrink-0 mb-2 sm:mb-0">
                  <span
                    className="text-xs uppercase tracking-wide leading-relaxed"
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      color: "hsl(var(--text-muted))",
                    }}
                  >
                    {exp.period}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="experience-title-link">
                    {exp.title}
                    <span style={{ color: "hsl(var(--text-muted))" }}>·</span>
                    {exp.company}
                  </h3>
                  <ul className="space-y-1.5 mb-3 list-none">
                    {exp.points.map((point, j) => {
                      const isHovered = hoveredBullet?.expIndex === i && hoveredBullet?.pointIndex === j;
                      return (
                        <li
                          key={j}
                          className="flex gap-2 text-sm font-light leading-relaxed bullet-fade-in"
                          style={{
                            color: isHovered ? "hsl(var(--text-primary))" : "hsl(var(--text-secondary))",
                            animationDelay: `${j * 60}ms`,
                          }}
                          onMouseEnter={() => setHoveredBullet({ expIndex: i, pointIndex: j })}
                          onMouseLeave={() => setHoveredBullet(null)}
                        >
                          <span
                            style={{
                              color: "hsl(var(--accent-green))",
                              flexShrink: 0,
                              marginTop: "2px",
                              transform: isHovered ? "translateX(2px)" : "translateX(0)",
                              transition: "transform 0.15s ease",
                            }}
                          >
                            ▸
                          </span>
                          {point}
                        </li>
                      );
                    })}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span key={tech} className="tech-pill">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}

          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm transition-colors duration-200"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              color: "hsl(var(--text-muted))",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "hsl(var(--accent-green))")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "hsl(var(--text-muted))")
            }
          >
            View Full Résumé <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </SectionWrapper>

      {/* Projects */}
      <SectionWrapper id="projects">
        <h2 className="section-heading">Projects</h2>
        <div className="space-y-3">
          {PROJECTS.map((project, i) => (
            <div key={i} className="project-card group">
              {/* Case ID header */}
              <div className="project-card-header">
                <span className="project-case-id">
                  [CASE-{String(i + 1).padStart(3, "0")}]
                </span>
                <span className="project-category">{project.technologies[0]}</span>
              </div>

              {/* Body */}
              <div className="project-card-body">
                {/* Title + links */}
                <div className="project-title-row">
                  <span className="project-title">{project.title}</span>
                  <div className="project-links">
                    {project.links.external && (
                      <a
                        href={project.links.external}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors duration-200"
                        style={{ color: "hsl(var(--text-muted))" }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.color = "hsl(var(--accent-green))")
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.color = "hsl(var(--text-muted))")
                        }
                        aria-label="Live demo"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors duration-200"
                        style={{ color: "hsl(var(--text-muted))" }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.color = "hsl(var(--accent-green))")
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.color = "hsl(var(--text-muted))")
                        }
                        aria-label="GitHub repository"
                      >
                        <Github className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="project-description">{project.description}</p>

                {/* Tech flags */}
                <div className="project-flags">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="project-flag">
                      --{tech.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "")}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}

          <a
            href={SOCIAL_LINKS.find((l) => l.name === "github")?.href ?? "https://github.com/chowdhuryrz"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm transition-colors duration-200"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              color: "hsl(var(--text-muted))",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "hsl(var(--accent-green))")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "hsl(var(--text-muted))")
            }
          >
            View GitHub Profile <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </SectionWrapper>

      {/* Certifications */}
      <SectionWrapper id="certifications">
        <h2 className="section-heading">Certifications</h2>
        <Certifications />
      </SectionWrapper>

      {/* Contact */}
      <SectionWrapper id="contact">
        <h2 className="section-heading">Contact</h2>
        <p
          className="text-sm md:text-base font-light leading-relaxed mb-6"
          style={{ color: "hsl(var(--text-secondary))" }}
        >
          Open to new opportunities in cybersecurity. Feel free to reach out if
          you'd like to connect or collaborate.
        </p>
        <a
          href={`mailto:${CONTACT.email}`}
          className="inline-flex items-center gap-2 px-4 py-2 rounded text-sm transition-all duration-200"
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            background: "hsl(var(--accent-green-dim))",
            color: "hsl(var(--accent-green))",
            border: "1px solid hsl(var(--accent-green-border))",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "hsl(var(--accent-green) / 0.2)";
            e.currentTarget.style.boxShadow = "0 0 16px hsl(var(--accent-green-glow))";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "hsl(var(--accent-green-dim))";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          {CONTACT.email}
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </SectionWrapper>

      {/* Footer */}
      <footer className="pt-4 pb-16">
        <p
          className="text-xs"
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            color: "hsl(var(--text-muted) / 0.5)",
          }}
        >
          © {new Date().getFullYear()} {CONTACT.name}
        </p>
      </footer>
    </main>
  );
};
