# Experience Section: Bullet Point Redesign

**Date:** 2026-04-14
**Status:** Approved

## Problem

Experience descriptions are stored as single dense paragraphs in `data.ts` and rendered as `<p>` tags. They are hard to scan and are lossy compressions of the resume — several bullets present in the resume PDF are missing from the portfolio entirely.

## Goal

Make the experience section recruiter-scannable. Match the resume's bullet structure exactly.

## Approach

Flat bullet list, resume-parity. Each bullet is a discrete accomplishment. A green `▸` marker ties into the existing accent color system.

## Data Changes

**File:** `src/config/data.ts`

Replace `description: string` with `points: string[]` on each experience entry. Bullets sourced verbatim from `Baseline_Resume.docx.pdf`.

### LOG(N) Pacific (6 bullets)
1. Conducted vulnerability scans with Tenable and implemented remediations using PowerShell, reducing critical vulnerabilities by 100%, high by 90%, and medium by 76% for the server team.
2. Performed vulnerability assessments and risk prioritization using Tenable across Windows and Linux environments, executing DISA STIG compliance audits to meet industry standards.
3. Automated remediation workflows and STIG implementations using PowerShell to systematically address critical vulnerabilities at scale.
4. Developed custom detection rules in Microsoft Defender for Endpoint to automate isolation and investigation of compromised systems.
5. Performed threat hunting using EDR to detect IoCs from brute force attacks, data exfiltration, and ransomware; designed and published scenarios for incident response tabletop exercises.
6. Built Microsoft Sentinel dashboards using KQL to monitor logon failures and malicious traffic, and eliminated brute force incidents by implementing inbound NSG/firewall rules to restrict internet exposure.

### ASG (4 bullets)
1. Built and maintained internal HR software for 500+ employees, managing access controls, API integrations, and data validation to keep company systems secure and accurate.
2. Developed role-based access controls within internal admin tools by scoping permissions to user roles, reducing unauthorized access risk and cutting record management overhead by 65%.
3. Integrated 12+ internal and external APIs using secure authentication and data validation logic to synchronize employee records, ensuring data integrity across operational systems.
4. Implemented staging pipelines and replica database infrastructure to isolate production environments and improve fault tolerance, increasing platform uptime to 99.8%.

## Component Changes

**File:** `src/components/portfolio/RightContent.tsx`

Replace `<p>{exp.description}</p>` with a `<ul>` of `<li>` elements. Each `<li>` uses a flex layout with a green `▸` marker (inline style using `--accent-green`) and the existing `text-sm font-light leading-relaxed` typography.

No new CSS classes. No new files.

## Out of Scope

- No changes to the Projects section
- No changes to typography, spacing, or card layout beyond the description replacement
- No grouping, categories, or impact sub-bullets
