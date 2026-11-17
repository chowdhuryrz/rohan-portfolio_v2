import { cleanup } from "@testing-library/react";
import { afterEach, beforeEach } from "vitest";

// jsdom has no matchMedia or IntersectionObserver. These stand-ins let tests
// choose the reduced-motion preference and drive intersection changes.

export const media = { reducedMotion: false };

export class MockIntersectionObserver {
  static instances: MockIntersectionObserver[] = [];
  readonly targets = new Set<Element>();
  disconnected = false;

  constructor(private readonly callback: IntersectionObserverCallback) {
    MockIntersectionObserver.instances.push(this);
  }

  observe(target: Element) {
    this.targets.add(target);
  }

  unobserve(target: Element) {
    this.targets.delete(target);
  }

  disconnect() {
    this.disconnected = true;
    this.targets.clear();
  }

  takeRecords(): IntersectionObserverEntry[] {
    return [];
  }

  /** Report every observed target as entering or leaving the viewport. */
  trigger(isIntersecting: boolean) {
    const entries = [...this.targets].map(
      (target) => ({ target, isIntersecting }) as IntersectionObserverEntry,
    );
    this.callback(entries, this as unknown as IntersectionObserver);
  }

  /** Report intersection on every live observer. */
  static triggerAll(isIntersecting: boolean) {
    for (const observer of MockIntersectionObserver.instances) {
      if (!observer.disconnected) observer.trigger(isIntersecting);
    }
  }
}

// Build tests run in the node environment, where there is no window.
const hasDom = typeof window !== "undefined";

if (hasDom) {
  window.IntersectionObserver =
    MockIntersectionObserver as unknown as typeof IntersectionObserver;

  window.matchMedia = (query: string) =>
    ({
      matches: query.includes("prefers-reduced-motion: reduce") && media.reducedMotion,
      media: query,
      onchange: null,
      addEventListener: () => {},
      removeEventListener: () => {},
      addListener: () => {},
      removeListener: () => {},
      dispatchEvent: () => false,
    }) as MediaQueryList;
}

beforeEach(() => {
  media.reducedMotion = false;
  MockIntersectionObserver.instances = [];
});

afterEach(() => {
  if (!hasDom) return;
  cleanup();
  window.history.replaceState(null, "", "/");
});
