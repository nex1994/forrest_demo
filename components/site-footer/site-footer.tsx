import Image from "next/image";
import Link from "next/link";

const PLACOWKI_LOGOS = [
  { href: "/wola-golkowska", name: "Wola Gołkowska", src: "/images/forrest/logo-wola-green.png" },
  { href: "/piaseczno", name: "Piaseczno", src: "/images/forrest/logo-piaseczno-pink.png" },
];

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="footer__placowki">
        {PLACOWKI_LOGOS.map((p) => (
          <Link key={p.href} href={p.href} className="footer__placowka-link">
            <span className="footer__placowka-badge">
              <Image src={p.src} alt={`${p.name} — logo`} width={500} height={500} />
            </span>
            <span className="footer__placowka-name">{p.name}</span>
          </Link>
        ))}
      </div>

      <div className="footer__bottom">
        <a href="#" className="footer__logo-link" aria-label="Przewiń na górę strony">
          <Image
            src="/images/forrest/logo-forrest-icon_3.png"
            alt="Forrest"
            width={900}
            height={578}
            className="footer__logo-img"
          />
        </a>
        <div className="footer__links">
          <a href="#historia">Historia</a>
          <a href="#metoda">Metoda</a>
          <a href="#przestrzen">Przestrzeń</a>
          <a href="#program">Program</a>
          <a href="#rodzice">Wspólnota</a>
          <a href="#kontakt">Kontakt</a>
          <a href="https://bynexo.pl" target="_blank" rel="noopener noreferrer">
            Copyright© web studio bynexo.pl
          </a>
        </div>
      </div>
    </footer>
  );
}
