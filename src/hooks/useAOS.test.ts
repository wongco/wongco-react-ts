import { renderHook } from "@testing-library/react";
import AOS from "aos";
import { afterEach, beforeEach, vi } from "vitest";

vi.mock("aos", () => ({
  default: {
    init: vi.fn(),
    refresh: vi.fn(),
  },
}));

describe("useAOS", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    vi.resetModules();
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("initializes AOS on first mount", async () => {
    const { useAOS } = await import("./useAOS");
    renderHook(() => useAOS());

    expect(AOS.init).toHaveBeenCalledTimes(1);
    expect(AOS.init).toHaveBeenCalledWith({ duration: 400 });
  });

  it("does not reinitialize AOS on subsequent renders", async () => {
    const { useAOS } = await import("./useAOS");
    renderHook(() => useAOS());

    renderHook(() => useAOS());

    expect(AOS.init).toHaveBeenCalledTimes(1);
  });

  it("adds resize listener for AOS refresh", async () => {
    const { useAOS } = await import("./useAOS");
    const { unmount } = renderHook(() => useAOS());

    expect(window.addEventListener).toHaveBeenCalledWith(
      "resize",
      expect.any(Function),
    );

    unmount();
    expect(window.removeEventListener).toHaveBeenCalledWith(
      "resize",
      expect.any(Function),
    );
  });

  it("uses custom options when provided", async () => {
    const { useAOS } = await import("./useAOS");
    renderHook(() => useAOS({ duration: 600 }));

    expect(AOS.init).toHaveBeenCalledWith({ duration: 600 });
  });
});
