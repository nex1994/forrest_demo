import Image from "next/image";

export function SiteFooter() {
  return (
    <footer className="footer">
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
        <a href="#droga">Historia</a>
        <a href="#metoda">Metoda</a>
        <a href="#przestrzen">Przestrzeń</a>
        <a href="#program">Program</a>
        <a href="https://bynexo.pl" target="_blank" rel="noopener noreferrer">
          Copyright© web studio bynexo.pl
        </a>
      </div>
    </footer>
  );
}
