import { act, renderHook } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { media } from "@/test/setup";
import { useTypewriter } from "./useTypewriter";

describe("useTypewriter", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("types the text one character per tick after the start delay", () => {
    const { result } = renderHook(() => useTypewriter("abc", 10, 100));
    expect(result.current).toEqual({ displayed: "", done: false });

    act(() => vi.advanceTimersByTime(100));
    expect(result.current.displayed).toBe("");

    act(() => vi.advanceTimersByTime(10));
    expect(result.current.displayed).toBe("a");

    act(() => vi.advanceTimersByTime(20));
    expect(result.current).toEqual({ displayed: "abc", done: false });

    act(() => vi.advanceTimersByTime(10));
    expect(result.current).toEqual({ displayed: "abc", done: true });
    expect(vi.getTimerCount()).toBe(0);
  });

  it("shows the whole text at once when the user prefers reduced motion", () => {
    media.reducedMotion = true;
    const { result } = renderHook(() => useTypewriter("abc", 10, 100));
    expect(result.current).toEqual({ displayed: "abc", done: true });
    expect(vi.getTimerCount()).toBe(0);
  });

  it("clears its timers on unmount", () => {
    const { unmount } = renderHook(() => useTypewriter("abcdef", 10, 100));
    act(() => vi.advanceTimersByTime(130));
    expect(vi.getTimerCount()).toBe(1);
    unmount();
    expect(vi.getTimerCount()).toBe(0);
  });
});
