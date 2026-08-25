"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const NAV_LINKS = [
  { href: "#historia", label: "Historia" },
  { href: "#metoda", label: "Metoda" },
  { href: "#przestrzen", label: "Przestrzeń" },
  { href: "#program", label: "Program" },
  { href: "#rodzice", label: "Wspólnota" },
  { href: "#kontakt", label: "Kontakt" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav
      className={`nav${scrolled ? " nav--scrolled" : ""}${menuOpen ? " nav--open" : ""}`}
      aria-label="Główna nawigacja"
    >
      <a href="/" className="nav__brand nav__brand-link" aria-label="Forrest — strona główna">
        <div className="nav__logo-badge">
          <Image
            src="/images/forrest/logo-forrest-icon_3.png"
            alt="Forrest"
            width={900}
            height={578}
            className="nav__logo-img"
            priority
          />
        </div>
        <Image
          src="/images/forrest/przedszkole.png"
          alt="Przedszkole Metody Krakowskiej"
          width={1221}
          height={296}
          className="nav__metoda-img"
          priority
        />
      </a>

      <div className="nav__links">
        {NAV_LINKS.map((link) => (
          <a key={link.href} className="nav__link" href={link.href}>
            {link.label}
          </a>
        ))}
      </div>

      <a className="nav__cta" href="#kontakt">
        Dołącz do nas!
      </a>

      <button
        type="button"
        className="nav__burger"
        aria-label={menuOpen ? "Zamknij menu" : "Otwórz menu"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span />
        <span />
        <span />
      </button>

      <div className="nav__mobile" hidden={!menuOpen}>
        {NAV_LINKS.map((link) => (
          <a key={link.href} className="nav__mobile-link" href={link.href} onClick={closeMenu}>
            {link.label}
          </a>
        ))}
        <a className="nav__mobile-cta" href="#kontakt" onClick={closeMenu}>
          Dołącz do nas!
        </a>
      </div>
    </nav>
  );
}
