import { renderHook } from "@testing-library/react";
import { afterEach, beforeEach, vi } from "vitest";

const initMock = vi.fn();
const refreshMock = vi.fn();
const addEventListenerMock = vi.fn();
const removeEventListenerMock = vi.fn();

vi.mock("aos", () => ({
  default: {
    init: initMock,
    refresh: refreshMock,
  },
}));

describe("useAOS", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    vi.resetModules();
    // Mock window event listeners
    Object.defineProperty(global.window, "addEventListener", {
      writable: true,
      value: addEventListenerMock,
    });
    Object.defineProperty(global.window, "removeEventListener", {
      writable: true,
      value: removeEventListenerMock,
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("initializes AOS on first mount", async () => {
    const mod = await import("./useAOS");
    renderHook(() => mod.useAOS());

    expect(initMock).toHaveBeenCalledTimes(1);
    expect(initMock).toHaveBeenCalledWith({
      duration: 400,
      debounceDelay: 200,
    });
  });

  it("does not reinitialize AOS when re-rendered", async () => {
    const mod = await import("./useAOS");
    const { rerender } = renderHook(() => mod.useAOS());

    rerender();

    expect(initMock).toHaveBeenCalledTimes(1);
  });

  it("adds resize listener for AOS refresh", async () => {
    const mod = await import("./useAOS");
    renderHook(() => mod.useAOS());

    expect(addEventListenerMock).toHaveBeenCalledWith(
      "resize",
      expect.any(Function),
    );
  });

  it("cleans up resize listener on unmount", async () => {
    const mod = await import("./useAOS");
    const { unmount } = renderHook(() => mod.useAOS());

    unmount();
    expect(removeEventListenerMock).toHaveBeenCalledWith(
      "resize",
      expect.any(Function),
    );
  });

  it("uses custom options when provided", async () => {
    const mod = await import("./useAOS");
    renderHook(() => mod.useAOS({ duration: 600 }));

    expect(initMock).toHaveBeenCalledWith({
      duration: 600,
      debounceDelay: 200,
    });
  });

  it("uses default debounceDelay when not provided", async () => {
    const mod = await import("./useAOS");
    renderHook(() => mod.useAOS({ duration: 600 }));

    expect(initMock).toHaveBeenCalledWith({
      duration: 600,
      debounceDelay: 200,
    });
  });
});
