"use client";

import { handleHashLinkClick } from "@/lib/scroll-to-section";

export function CallToAction() {
  return (
    <section className="cta-bar">
      <div className="cta-bar__row">
        <div className="cta-bar__title">Rekrutacja na rok szkolny 2026/27</div>
        <div className="cta-bar__actions">
          <div className="cta-bar__phone">
            <a href="tel:+48692623327">+48 692 623 327</a>
          </div>
          <div className="cta-bar__button">
            <a href="#kontakt" onClick={(e) => handleHashLinkClick(e, "#kontakt")}>
              Dołącz do nas!
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
