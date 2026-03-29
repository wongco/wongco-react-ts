import AOS from "aos";
import * as React from "react";

// Module-level state for tracking initialization (client-side only)
const initialized = new WeakSet<object>();

export const useAOS = (options: AOS.AosOptions = { duration: 400 }) => {
  const instanceRef = React.useRef<object>({});
  const debounceTimer = React.useRef<number | null>(null);

  React.useEffect(() => {
    if (!initialized.has(instanceRef.current)) {
      AOS.init(options);
      initialized.add(instanceRef.current);
    }

    const handleResize = () => {
      if (debounceTimer.current) {
        clearTimeout(debounceTimer.current);
      }
      debounceTimer.current = window.setTimeout(() => {
        AOS.refresh();
      }, 200);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (debounceTimer.current) {
        clearTimeout(debounceTimer.current);
      }
    };
  }, [options]);
};
