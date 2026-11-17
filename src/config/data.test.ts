import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { ABOUT_SECTIONS, CERTIFICATIONS, EDUCATION, EXPERIENCES, PROJECTS } from "./data";
import { CONTACT, RESUME_URL, SOCIAL_LINKS } from "./constants";

// Content checks for edits to data.ts and constants.ts.

const publicFile = (href: string) => path.join(import.meta.dirname, "../../public", href);

const allLinks = [
  ...SOCIAL_LINKS.map((l) => l.href),
  RESUME_URL,
  ...EXPERIENCES.map((e) => e.companyUrl),
  ...PROJECTS.flatMap((p) => [p.links.external, p.links.github]),
  ...CERTIFICATIONS.map((c) => c.credentialUrl),
].filter((href): href is string => Boolean(href));

describe("portfolio content", () => {
  it("links only to https URLs or files that exist in public/", () => {
    for (const href of allLinks) {
      if (href.startsWith("/")) {
        expect(fs.existsSync(publicFile(href)), `${href} is missing from public/`).toBe(true);
      } else {
        expect(href, href).toMatch(/^https:\/\//);
      }
    }
  });

  it("has no duplicate technology tags within an entry (they are React keys)", () => {
    for (const item of [...EXPERIENCES, ...PROJECTS]) {
      expect(new Set(item.technologies).size, item.title).toBe(item.technologies.length);
    }
  });

  it("gives every project a category tag and a readable --flag for each technology", () => {
    for (const project of PROJECTS) {
      expect(project.technologies.length, project.title).toBeGreaterThan(0);
      for (const tech of project.technologies) {
        const flag = tech.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
        expect(flag, `${project.title}: ${tech}`).toMatch(/^[a-z0-9]/);
      }
    }
  });

  it("has the required text fields filled in", () => {
    expect(CONTACT.email).toMatch(/^[^@\s]+@[^@\s]+\.[^@\s]+$/);
    expect(ABOUT_SECTIONS.length).toBeGreaterThan(0);
    for (const exp of EXPERIENCES) {
      expect(exp.points.length, exp.title).toBeGreaterThan(0);
    }
    for (const entry of [...CERTIFICATIONS, ...EDUCATION]) {
      expect(["active", "in-progress"]).toContain(entry.status);
    }
  });
});
