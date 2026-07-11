"use client";

import { useEffect, useState } from "react";

export function useIntersection<T extends Element>(options?: IntersectionObserverInit) {
  const [ref, setRef] = useState<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref) return;
    const observer = new IntersectionObserver(([entry]) => {
      setVisible(entry.isIntersecting);
    }, options);

    observer.observe(ref);
    return () => observer.disconnect();
  }, [ref, options]);

  return { ref: setRef, visible };
}