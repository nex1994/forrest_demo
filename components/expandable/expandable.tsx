"use client";

import { useState, type ReactNode } from "react";

/// Zwija dodatkową treść za CTA "Czytaj więcej" — dla sekcji z dużą ilością tekstu.
export function Expandable({
  children,
  openLabel = "Czytaj więcej",
  closeLabel = "Zwiń",
  className = "",
}: {
  children: ReactNode;
  openLabel?: string;
  closeLabel?: string;
  className?: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`expandable ${open ? "expandable--open" : ""} ${className}`.trim()}>
      <div className="expandable__panel">
        <div className="expandable__panel-inner" aria-hidden={!open}>
          {children}
        </div>
      </div>
      <button
        type="button"
        className="expandable__toggle"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        {open ? closeLabel : openLabel}
        <span className="expandable__arrow" aria-hidden="true">
          {open ? "↑" : "→"}
        </span>
      </button>
    </div>
  );
}
