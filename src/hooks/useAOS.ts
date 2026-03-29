import AOS from "aos";
import { useEffect } from "react";

let initialized = false;

export const useAOS = (options = { duration: 400 }) => {
  useEffect(() => {
    if (!initialized) {
      AOS.init(options);
      initialized = true;
    }

    const handleResize = () => AOS.refresh();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [options]);
};
