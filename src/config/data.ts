export const EXPERIENCES = [
  {
    period: "JAN 2026 - PRESENT",
    title: "Cyber Security Engineer",
    company: "LOG(N) Pacific",
    companyUrl: "https://lognpacific.com",
    description:
      "Conduct vulnerability scanning and remediation across Windows and Linux servers using Tenable, delivering risk-prioritized reports that drive patching and hardening efforts. Automated remediation workflows with PowerShell, eliminating 100% of critical findings and reducing high/medium vulnerabilities by 90% and 76% respectively. Perform threat hunting and incident investigation using EDR tools, identifying indicators of compromise associated with brute force attempts, ransomware behaviors, and data exfiltration. Build custom KQL detection rules in Microsoft Sentinel and develop dashboards tracking logon failures and suspicious network traffic.",
    technologies: [
      "Microsoft Sentinel",
      "Tenable",
      "KQL",
      "EDR",
      "PowerShell",
      "Threat Hunting",
      "DISA STIG",
    ],
  },
  {
    period: "JAN 2023 - SEP 2025",
    title: "Software Engineer",
    company: "ASG",
    companyUrl: null as string | null,
    description:
      "Built and maintained an Employee Self-Service platform used by 500+ employees to manage HR records and requests. Developed internal admin tools that reduced access and record management effort by 65%. Integrated 12+ internal and external APIs to synchronize employee and operational data. Built geolocation and address verification features processing 10,000+ records per month, and improved platform reliability to 99.8% uptime via staging pipelines and replica database infrastructure.",
    technologies: [
      "TypeScript",
      "React",
      "Node.js",
      "PostgreSQL",
      "AWS",
      "Docker",
      ".NET",
      "Azure",
    ],
  },
] as const;

export const PROJECTS = [
  {
    title: "STIG Hardening Scripts",
    description:
      "PowerShell scripts to automate Windows 11 DISA STIG remediation. 10 scripts covering audit policy, Group Policy, and registry hardening. Each script reads back the registry value after writing to confirm the change stuck. No more manual compliance checks for DoD requirements.",
    technologies: ["PowerShell", "Windows", "DISA STIG", "Compliance", "Hardening"],
    image: null as string | null,
    links: {
      external: null as string | null,
      github: "https://github.com/chowdhuryrz/stig-hardening-scripts",
    },
  },
  {
    title: "Threat Hunt Reports",
    description:
      "KQL investigation documentation and threat hunt reports using Microsoft Sentinel. Covers a Business Email Compromise attributed to Scattered Spider: a £24,500 wire fraud carried out through MFA fatigue. Each report includes MITRE ATT&CK mappings, IOC lists, an attack chain timeline, and containment steps.",
    technologies: ["KQL", "Microsoft Sentinel", "MITRE ATT&CK", "Blue Team", "SOC"],
    image: null as string | null,
    links: {
      external: null as string | null,
      github: "https://github.com/chowdhuryrz/threat-hunts",
    },
  },
  {
    title: "Threat Hunt: TOR Detection",
    description:
      "Threat hunting scenario using Microsoft Defender for Endpoint to detect unauthorized TOR browser usage. Four KQL queries across endpoint data tables reconstruct a full 13-minute incident timeline, from download and silent install through network connections and file drops. Includes an IOC list and management report.",
    technologies: ["KQL", "Microsoft Defender", "EDR", "Threat Hunting", "Incident Response"],
    image: null as string | null,
    links: {
      external: null as string | null,
      github: "https://github.com/chowdhuryrz/threat-hunting-scenario-tor",
    },
  },
];

export const ABOUT_SECTIONS = [
  "I'm a cybersecurity engineer working in blue team operations, threat detection, and vulnerability management. At LOG(N) Pacific I hunt threats using Microsoft Sentinel and EDR tools, write KQL detection rules, and automate remediation with PowerShell. We've knocked out 100% of critical findings across Windows and Linux environments.",
  "My background in software engineering shapes how I think about security. Building enterprise systems taught me how applications break under pressure, where data leaks, and what attackers are actually looking for. That context helps a lot on the defensive side.",
  "When I'm not at a computer, I'm at the gym or working on a car. Both keep me grounded and remind me that good solutions come from understanding how things actually work, not just how they're supposed to.",
] as const;

export const CERTIFICATIONS = [
  {
    name: "CompTIA Security+",
    issuer: "CompTIA",
    date: "",
    status: "active" as const,
    credentialUrl: null as string | null,
  },
  {
    name: "Google Cybersecurity Professional Certificate",
    issuer: "Google",
    date: "",
    status: "active" as const,
    credentialUrl: "https://www.coursera.org/account/accomplishments/professional-cert/certificate/AJZNXHK5C18V" as string | null,
  },
  {
    name: "NVIDIA-Certified Associate: AI Infrastructure and Operations",
    issuer: "NVIDIA",
    date: "Apr 2026",
    status: "active" as const,
    credentialUrl: "https://www.credly.com/badges/3990d304-4fd1-4d25-baac-0037067f56ec/linked_in_profile" as string | null,
  },
  {
    name: "Linux Essentials Certificate",
    issuer: "Linux Professional Institute",
    date: "Mar 2026",
    status: "active" as const,
    credentialUrl: "https://www.credly.com/badges/cda56bfd-5bd8-4a75-b3e5-65472a5a8a54/linked_in_profile" as string | null,
  },
];

export const EDUCATION = [
  {
    degree: "B.S. Cybersecurity & Information Assurance",
    school: "Western Governors University",
    date: "Expected Dec 2026",
    status: "in-progress" as const,
  },
];

export type Experience = (typeof EXPERIENCES)[number];
export type Project = (typeof PROJECTS)[number];
export type Certification = (typeof CERTIFICATIONS)[number];
export type Education = (typeof EDUCATION)[number];
