import { useEffect, useRef, useState } from 'react';

/**
 * Lightweight scroll reveal — disconnects after first intersection (performance-friendly).
 */
export function useInView(options = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(() => {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return true;
    }
    return false;
  });

  const { root, rootMargin, threshold } = options;

  useEffect(() => {
    if (inView) return;
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: threshold ?? 0.12,
        rootMargin: rootMargin ?? '0px 0px -48px 0px',
        root,
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [inView, root, rootMargin, threshold]);

  return [ref, inView];
}
