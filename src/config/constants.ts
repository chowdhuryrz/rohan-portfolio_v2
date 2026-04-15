export const SOCIAL_LINKS = [
  {
    name: "github",
    href: "https://github.com/chowdhuryrz",
    label: "GitHub",
  },
  {
    name: "linkedin",
    href: "https://www.linkedin.com/in/rohancho/",
    label: "LinkedIn",
  },
  {
    name: "resume",
    href: "/Baseline_Resume.pdf",
    label: "Resume",
  },
] as const;

export const CONTACT = {
  email: "rmc.2917@gmail.com",
  name: "Rohan Chowdhury",
  title: "Cybersecurity Engineer",
  tagline: "Threat Hunting. Vulnerability Management. Detection Engineering.",
} as const;

export const RESUME_URL = "/Baseline_Resume.pdf";

export type SocialLink = (typeof SOCIAL_LINKS)[number];
