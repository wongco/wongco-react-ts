import { useEffect, useRef, useState } from "react";

/**
 * Tracks whether the referenced element is focused via keyboard (tab)
 * rather than mouse/touch click.
 *
 * Returns true when the element has focus AND that focus was triggered
 * by a keyboard navigation event (Tab key).
 */
export function useFocusVisible(ref: React.RefObject<HTMLElement | null>) {
  const isFocusedByKeyboardRef = useRef(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handlePointerDown = () => {
      isFocusedByKeyboardRef.current = false;
    };

    const handleFocus = (e: FocusEvent) => {
      if (isFocusedByKeyboardRef.current && e.target === ref.current) {
        setIsVisible(true);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Tab") {
        isFocusedByKeyboardRef.current = true;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("focus", handleFocus, true);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("focus", handleFocus, true);
    };
  }, [ref]);

  return isVisible;
}

/**
 * Simple focus state tracker. Returns [isFocused, onFocus, onBlur].
 * Useful for conditionally applying styles on focus.
 */
export function useOnFocus(): [
  boolean,
  React.FocusEventHandler,
  React.FocusEventHandler,
] {
  const [isFocused, setIsFocused] = useState(false);
  return [isFocused, () => setIsFocused(true), () => setIsFocused(false)];
}
