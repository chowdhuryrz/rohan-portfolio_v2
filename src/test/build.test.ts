// @vitest-environment node
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { build } from "vite";
import { afterAll, beforeAll, describe, expect, it } from "vitest";

const root = path.resolve(import.meta.dirname, "../..");
let outDir = "";

describe("production build", () => {
  beforeAll(async () => {
    outDir = fs.mkdtempSync(path.join(os.tmpdir(), "portfolio-build-"));
    await build({ root, mode: "production", logLevel: "silent", build: { outDir, emptyOutDir: true } });
  }, 60_000);

  afterAll(() => {
    fs.rmSync(outDir, { recursive: true, force: true });
  });

  const read = (file: string) => fs.readFileSync(path.join(outDir, file), "utf8");

  it("ships 404.html as a copy of index.html so the host serves the app's 404 page", () => {
    expect(read("404.html")).toBe(read("index.html"));
  });

  it("links the web fonts from the HTML instead of @importing them from CSS", () => {
    expect(read("index.html")).toContain('<link rel="stylesheet" href="https://fonts.googleapis.com/css2');
    const css = fs.readdirSync(path.join(outDir, "assets")).filter((f) => f.endsWith(".css"));
    expect(css.length).toBe(1);
    expect(read(`assets/${css[0]}`)).not.toContain("@import");
  });
});
