import { ExternalLink } from "lucide-react";
import { CERTIFICATIONS, EDUCATION } from "@/config/data";
import {
  GoogleLogo,
  NvidiaLogo,
  ComptiaLogo,
  LpiLogo,
  WguLogo,
} from "@/components/logos/CertLogos";

type LogoComponent = React.ComponentType<{ className?: string }>;

const CERT_LOGOS: Record<string, LogoComponent> = {
  "CompTIA Security+": ComptiaLogo,
  "Google Cybersecurity Professional Certificate": GoogleLogo,
  "NVIDIA-Certified Associate: AI Infrastructure and Operations": NvidiaLogo,
  "Linux Essentials Certificate": LpiLogo,
};

const SubHeading = ({ label }: { label: string }) => (
  <p
    className="text-xs uppercase tracking-widest mb-3"
    style={{
      fontFamily: "'JetBrains Mono', monospace",
      color: "hsl(var(--text-muted))",
    }}
  >
    {label}
  </p>
);

export const Certifications = () => {
  return (
    <div className="space-y-10">
      {/* Education */}
      <div>
        <SubHeading label="Education" />
        <div className="space-y-3">
          {EDUCATION.map((edu, index) => (
            <div key={index} className="group experience-card">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
                  <WguLogo className="w-6 h-6" />
                </div>
                <div>
                  <p
                    className="text-sm font-medium"
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      color: "hsl(var(--text-primary))",
                    }}
                  >
                    {edu.degree}
                  </p>
                  <p className="text-xs mt-0.5" style={{ color: "hsl(var(--text-muted))" }}>
                    {edu.school} · {edu.date}
                    <span
                      className="ml-2 text-xs"
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        color: "hsl(var(--accent-green))",
                      }}
                    >
                      [in progress]
                    </span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certifications */}
      <div>
        <SubHeading label="Certifications" />
        <div className="space-y-3">
          {CERTIFICATIONS.map((cert, index) => {
            const Logo = CERT_LOGOS[cert.name];
            return (
              <div key={index} className="group experience-card">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
                    {Logo ? (
                      <Logo className="w-6 h-6" />
                    ) : (
                      <span style={{ color: "hsl(var(--accent-green))" }}>✓</span>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <p
                        className="text-sm font-medium"
                        style={{
                          fontFamily: "'JetBrains Mono', monospace",
                          color: "hsl(var(--text-primary))",
                        }}
                      >
                        {cert.name}
                      </p>
                      {cert.credentialUrl && (
                        <a
                          href={cert.credentialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-shrink-0 transition-colors duration-200"
                          style={{ color: "hsl(var(--text-muted))" }}
                          aria-label="View credential"
                          onMouseEnter={(e) => (e.currentTarget.style.color = "hsl(var(--accent-green))")}
                          onMouseLeave={(e) => (e.currentTarget.style.color = "hsl(var(--text-muted))")}
                        >
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                    <p className="text-xs mt-0.5" style={{ color: "hsl(var(--text-muted))" }}>
                      {cert.issuer}
                      {cert.date && ` · ${cert.date}`}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
};
