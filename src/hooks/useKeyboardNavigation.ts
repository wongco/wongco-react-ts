import { useCallback } from "react";

interface UseKeyboardNavigationOptions {
  items: HTMLElement[];
  activeIndex?: number;
  onChange?: (index: number) => void;
  onEscape?: () => void;
}

export function useKeyboardNavigation(options: UseKeyboardNavigationOptions) {
  const { items, activeIndex = -1, onChange, onEscape } = options;

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (items.length === 0) return;

      switch (event.key) {
        case "ArrowDown":
        case "ArrowRight":
          event.preventDefault();
          const nextIndex = (activeIndex + 1) % items.length;
          onChange?.(nextIndex);
          items[nextIndex]?.focus();
          break;

        case "ArrowUp":
        case "ArrowLeft":
          event.preventDefault();
          const prevIndex = (activeIndex - 1 + items.length) % items.length;
          onChange?.(prevIndex);
          items[prevIndex]?.focus();
          break;

        case "Home":
          event.preventDefault();
          onChange?.(0);
          items[0]?.focus();
          break;

        case "End":
          event.preventDefault();
          onChange?.(items.length - 1);
          items[items.length - 1]?.focus();
          break;

        case "Escape":
          onEscape?.();
          break;
      }
    },
    [items, activeIndex, onChange, onEscape],
  );

  return { handleKeyDown };
}
