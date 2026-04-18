export const EXPERIENCES = [
  {
    period: "JAN 2026 - PRESENT",
    title: "Cyber Security Engineer",
    company: "LOG(N) Pacific",
    companyUrl: "https://lognpacific.com",
    points: [
      "Conducted vulnerability scans with Tenable and implemented remediations using PowerShell, reducing critical vulnerabilities by 100%, high by 90%, and medium by 76% for the server team.",
      "Developed custom detection rules in Microsoft Defender for Endpoint to automate isolation and investigation of compromised systems.",
      "Performed threat hunting using EDR to detect IoCs from brute force attacks, data exfiltration, and ransomware; designed and published scenarios for incident response tabletop exercises.",
      "Built Microsoft Sentinel dashboards using KQL to monitor logon failures and malicious traffic, and eliminated brute force incidents by implementing inbound NSG/firewall rules to restrict internet exposure.",
    ],
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
    company: "Allstate Sales Group",
    companyUrl: null as string | null,
    points: [
      "Developed role-based access controls within internal admin tools by scoping permissions to user roles, reducing unauthorized access risk and cutting record management overhead by 65%.",
      "Integrated 12+ internal and external APIs using secure authentication and data validation logic to synchronize employee records, ensuring data integrity across operational systems.",
      "Implemented staging pipelines and replica database infrastructure to isolate production environments and improve fault tolerance, increasing platform uptime to 99.8%.",
    ],
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
    title: "Vulnerability Management Program",
    description:
      "Simulated a full vulnerability management lifecycle from policy creation to remediation. Ran credentialed scans with Tenable on Azure VMs, prioritized findings, and remediated across four rounds. Reduced total vulnerabilities by 80% in the first cycle.",
    technologies: ["Tenable", "Azure", "PowerShell", "Bash", "Vulnerability Management"],
    image: null as string | null,
    links: {
      external: null as string | null,
      github: "https://github.com/chowdhuryrz/vulnerability-management-program",
    },
  },
  {
    title: "Linux SSH Threat Analysis",
    description:
      "Python script that parses real Linux auth logs, detects brute force attacks, and exports structured data into a Splunk SIEM dashboard. Flagged 40 attacker IPs across 852 suspicious events from a real-world dataset.",
    technologies: ["Python", "Splunk", "SIEM", "Log Analysis", "Threat Detection"],
    image: null as string | null,
    links: {
      external: null as string | null,
      github: "https://github.com/chowdhuryrz/linux-log-analysis",
    },
  },
  {
    title: "STIG Hardening Scripts",
    description:
      "10 PowerShell scripts that automate Windows 11 DISA STIG compliance. Covers audit policy, Group Policy, and registry hardening with built-in verification after each change.",
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
      "Threat hunt reports built in Microsoft Sentinel using KQL. Covers a Business Email Compromise linked to Scattered Spider that resulted in a wire fraud through MFA fatigue. Each report includes MITRE ATT&CK mappings, IOCs, and containment steps.",
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
      "Threat hunt using Microsoft Defender for Endpoint to detect unauthorized TOR browser usage. KQL queries reconstruct the full incident timeline from download through network activity. Includes an IOC list and management report.",
    technologies: ["KQL", "Microsoft Defender", "EDR", "Threat Hunting", "Incident Response"],
    image: null as string | null,
    links: {
      external: null as string | null,
      github: "https://github.com/chowdhuryrz/threat-hunting-scenario-tor",
    },
  },
];

export const ABOUT_SECTIONS = [
  "I'm a cybersecurity engineer based in the US. I started out in software development building internal tools and integrating APIs, which gave me a strong foundation for understanding how systems get built and how they get broken.",
  "These days I work on the defensive side: detecting threats, hunting for indicators of compromise, tightening up vulnerabilities, and building tooling to make security operations faster. My primary tools are Microsoft Sentinel, Defender for Endpoint, KQL, and PowerShell.",
  "Outside of work I'm at the gym, keeping up with AI, biohacking, or building something new.",
] as const;

export const CERTIFICATIONS = [
  {
    name: "CompTIA Security+",
    issuer: "CompTIA",
    date: "",
    status: "in-progress" as const,
    credentialUrl: null as string | null,
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
  {
    name: "Google Cybersecurity Professional Certificate",
    issuer: "Google",
    date: "Feb 2026",
    status: "active" as const,
    credentialUrl: "https://www.coursera.org/account/accomplishments/professional-cert/certificate/AJZNXHK5C18V" as string | null,
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
