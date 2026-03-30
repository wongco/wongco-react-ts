import AOS from "aos";
import * as React from "react";

// Module-level flag for tracking initialization (client-side only)
let initialized = false;

export const useAOS = (options: AOS.AosOptions = {}): void => {
  const isMounted = React.useRef(true);
  const debounceTimer = React.useRef<number | null>(null);

  // Merge with defaults
  const mergedOptions = React.useMemo(
    () => ({
      duration: 400,
      debounceDelay: 200,
      ...options,
    }),
    [options],
  );

  React.useEffect(() => {
    if (!initialized) {
      AOS.init(mergedOptions);
      initialized = true;
    }

    const handleResize = () => {
      if (debounceTimer.current) {
        clearTimeout(debounceTimer.current);
      }
      debounceTimer.current = window.setTimeout(() => {
        if (isMounted.current) {
          AOS.refresh();
        }
      }, mergedOptions.debounceDelay);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      isMounted.current = false;
      window.removeEventListener("resize", handleResize);
      if (debounceTimer.current) {
        clearTimeout(debounceTimer.current);
      }
    };
  }, [mergedOptions]);
};
