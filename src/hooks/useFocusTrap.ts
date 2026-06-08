import { useEffect, useCallback, useRef } from "react";
import type { RefObject } from "react";

interface UseFocusTrapOptions {
  isActive?: boolean;
  onEscape?: () => void;
  returnFocusOnEscape?: boolean;
  initialFocusElement?: HTMLElement | null;
}

export function useFocusTrap(
  containerRef: RefObject<HTMLElement | null>,
  options: UseFocusTrapOptions = {},
) {
  const {
    isActive = false,
    onEscape,
    returnFocusOnEscape = true,
    initialFocusElement,
  } = options;

  const previouslyFocusedElementRef = useRef<HTMLElement | null>(null);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (!isActive || !containerRef.current) return;

      if (event.key === "Escape") {
        if (onEscape) {
          onEscape();
        }
        if (returnFocusOnEscape && previouslyFocusedElementRef.current) {
          previouslyFocusedElementRef.current.focus();
        }
        return;
      }

      if (event.key !== "Tab") return;

      const container = containerRef.current;
      const focusableSelectors = [
        "a[href]",
        "button:not([disabled])",
        'input:not([disabled]):not([type="hidden"])',
        "select:not([disabled])",
        "textarea:not([disabled])",
        '[tabindex]:not([tabindex="-1"])',
      ].join(", ");

      const focusableElements = Array.from(
        container.querySelectorAll<HTMLElement>(focusableSelectors),
      ).filter((el) => {
        const rect = el.getBoundingClientRect();
        return rect.width > 0 && rect.height > 0;
      });

      if (focusableElements.length === 0) return;

      const firstFocusable = focusableElements[0];
      const lastFocusable = focusableElements[focusableElements.length - 1];
      const activeElement = document.activeElement;

      if (event.shiftKey) {
        if (activeElement === firstFocusable) {
          event.preventDefault();
          lastFocusable.focus();
        }
      } else {
        if (activeElement === lastFocusable) {
          event.preventDefault();
          firstFocusable.focus();
        }
      }
    },
    [isActive, containerRef, onEscape, returnFocusOnEscape],
  );

  const activate = useCallback(() => {
    if (!containerRef.current) return;

    previouslyFocusedElementRef.current = document.activeElement as HTMLElement;

    if (initialFocusElement) {
      initialFocusElement.focus();
    } else {
      const firstFocusable = containerRef.current.querySelector<HTMLElement>(
        'a[href], button:not([disabled]), input:not([disabled]):not([type="hidden"]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      firstFocusable?.focus();
    }
  }, [containerRef, initialFocusElement]);

  const deactivate = useCallback(() => {
    if (returnFocusOnEscape && previouslyFocusedElementRef.current) {
      previouslyFocusedElementRef.current.focus();
    }
  }, [returnFocusOnEscape]);

  useEffect(() => {
    if (!isActive) return;

    document.addEventListener("keydown", handleKeyDown);
    activate();

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      deactivate();
    };
  }, [isActive, handleKeyDown, activate, deactivate]);

  return { activate, deactivate };
}
