import Image from "next/image";

const NAV_LINKS = [
  { href: "#droga", label: "Historia" },
  { href: "#metoda", label: "Metoda" },
  { href: "#przestrzen", label: "Przestrzeń" },
  { href: "#program", label: "Program" },
  { href: "#kontakt", label: "Kontakt" },
];

export function SiteHeader() {
  return (
    <nav className="nav" aria-label="Główna nawigacja">
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
    </nav>
  );
}
