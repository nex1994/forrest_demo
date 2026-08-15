"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

/// Klient-wyspa: dodaje klasę "is-visible" gdy element wjedzie w viewport.
/// Właściwa animacja (opacity/transform) jest w CSS (.reveal), więc bez JS
/// treść i tak jest w pełni widoczna i dostępna.
export function Reveal({
  children,
  className = "",
  id,
  style,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  style?: CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} id={id} className={`reveal ${className}`.trim()} style={style}>
      {children}
    </div>
  );
}
