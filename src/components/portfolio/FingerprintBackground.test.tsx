import { act, render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { MockIntersectionObserver } from "@/test/setup";
import { FingerprintBackground } from "./FingerprintBackground";

const setup = () => {
  const utils = render(<FingerprintBackground />);
  const svg = utils.container.querySelector("svg");
  const path = utils.container.querySelector<SVGPathElement>(".fingerprint-draw");
  const observer = MockIntersectionObserver.instances[0];
  if (!svg || !path || !observer) throw new Error("fingerprint did not render");
  return { ...utils, svg, path, observer };
};

describe("FingerprintBackground", () => {
  it("pauses the draw animation while off screen and resumes it on screen", () => {
    const { svg, path, observer } = setup();
    expect(observer.targets.has(svg)).toBe(true);

    act(() => observer.trigger(false));
    expect(path.style.animationPlayState).toBe("paused");

    act(() => observer.trigger(true));
    expect(path.style.animationPlayState).toBe("running");
  });

  it("is hidden from assistive technology and disconnects on unmount", () => {
    const { svg, observer, unmount } = setup();
    expect(svg.getAttribute("aria-hidden")).toBe("true");
    unmount();
    expect(observer.disconnected).toBe(true);
  });
});
