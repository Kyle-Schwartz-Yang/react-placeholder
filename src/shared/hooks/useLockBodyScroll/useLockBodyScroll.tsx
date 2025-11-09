// import { useEffect } from "react";

import { useEffect } from "react";

export function useLockBodyScroll(enabled: boolean) {
  useEffect(() => {
    if (!enabled) return;

    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    const defaultOverlayBody = document.body.style.overflow;
    const defaultPaddingBody = document.body.style.paddingRight;

    if (scrollbarWidth) {
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    return () => {
      document.body.style.overflow = defaultOverlayBody;
      document.body.style.paddingRight = defaultPaddingBody;
    };
  }, [enabled]);
}
