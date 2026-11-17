import { act, render, screen, within } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { MockIntersectionObserver } from "@/test/setup";
import { CERTIFICATIONS, PROJECTS } from "@/config/data";
import { CONTACT } from "@/config/constants";
import App from "./App";

const renderAt = (path: string) => {
  window.history.replaceState(null, "", path);
  return render(<App />);
};

describe("App", () => {
  it("renders the portfolio at /", () => {
    renderAt("/");
    expect(screen.getByRole("heading", { level: 1, name: CONTACT.name })).toBeTruthy();
    for (const name of ["About", "Experience", "Projects", "Education & Certifications", "Contact"]) {
      expect(screen.getByRole("heading", { level: 2, name })).toBeTruthy();
    }
    expect(screen.queryByText("Page not found.")).toBeNull();
  });

  it("renders the 404 page for any other path", () => {
    renderAt("/no/such/page");
    expect(screen.getByRole("heading", { level: 1, name: "404" })).toBeTruthy();
    expect(screen.getByRole("link", { name: /return home/ }).getAttribute("href")).toBe("/");
    expect(screen.queryByRole("heading", { name: CONTACT.name })).toBeNull();
  });

  it("reveals each section once it scrolls into view", () => {
    const { container } = renderAt("/");
    const sections = [...container.querySelectorAll("section.reveal")];
    expect(sections.length).toBe(5);
    expect(sections.every((s) => !s.classList.contains("visible"))).toBe(true);

    act(() => MockIntersectionObserver.triggerAll(true));
    expect(sections.every((s) => s.classList.contains("visible"))).toBe(true);
  });

  it("gives screen readers the full tagline and a clean job title", () => {
    vi.useFakeTimers();
    try {
      renderAt("/");
      expect(screen.getByRole("heading", { level: 2, name: CONTACT.title })).toBeTruthy();

      // While typing: one screen-reader copy, and the animated copy is hidden.
      const srCopy = screen.getByText(CONTACT.tagline);
      expect(srCopy.className).toContain("sr-only");
      expect(srCopy.nextElementSibling?.getAttribute("aria-hidden")).toBe("true");

      // Once typed: a single plain text node, so copy and find-in-page see it once.
      act(() => vi.runAllTimers());
      const typed = screen.getByText(CONTACT.tagline);
      expect(typed.tagName).toBe("P");
      expect(typed.textContent).toBe(CONTACT.tagline);
    } finally {
      vi.useRealTimers();
    }
  });

  it("names every icon-only link after what it points to", () => {
    renderAt("/");
    for (const project of PROJECTS) {
      if (project.links.github) {
        const link = screen.getByRole("link", { name: `${project.title} GitHub repository` });
        expect(link.getAttribute("href")).toBe(project.links.github);
      }
    }
    for (const cert of CERTIFICATIONS) {
      if (cert.credentialUrl) {
        const link = screen.getByRole("link", { name: `${cert.name} credential` });
        expect(link.getAttribute("href")).toBe(cert.credentialUrl);
      }
    }
  });

  it("shows a logo for every certification", () => {
    renderAt("/");
    const certs = screen.getByText("Certifications").parentElement;
    if (!certs) throw new Error("certifications list not found");
    for (const cert of CERTIFICATIONS) {
      const row = within(certs).getByText(cert.name).closest(".experience-card");
      // The first column holds the logo; the credential link icon is elsewhere.
      expect(row?.querySelector(":scope > div > div:first-child > svg"), cert.name).toBeTruthy();
    }
  });
});
