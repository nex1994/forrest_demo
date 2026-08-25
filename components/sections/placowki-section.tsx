import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/reveal/reveal";
import { Leaf, Pennants } from "@/components/decor/decor";

const PLACOWKI = [
  {
    href: "/piaseczno",
    src: "/images/forrest/gotowe/cicha-polka.jpg",
    alt: "Sala przedszkolna w placówce Piaseczno",
    name: "Piaseczno",
    profil: "Przedszkole terapeutyczne",
    dzieci: "12 dzieci",
  },
  {
    href: "/wola-golkowska",
    src: "/images/forrest/gotowe/las-ktory-uczy.jpg",
    alt: "Leśny plac zabaw w placówce Wola Gołkowska",
    name: "Wola Gołkowska",
    profil: "Przedszkole ogólnodostępne",
    dzieci: "50 dzieci",
  },
];

export function PlacowkiSection() {
  return (
    <section id="placowki" className="section section--flush-top section--center">
      <Reveal className="section__inner">
        <Pennants className="placowki__pennants" />
        <p className="eyebrow">
          <Leaf className="placowki__leaf" /> Dwie placówki, jedna filozofia
        </p>
        <h2 className="section__title">Wybierz swoją placówkę</h2>
      </Reveal>

      <Reveal className="placowki mt-48">
        {PLACOWKI.map((p) => (
          <Link key={p.href} href={p.href} className="placowka-card">
            <div className="placowka-card__image">
              <Image src={p.src} alt={p.alt} fill sizes="(max-width: 760px) 92vw, 46vw" />
            </div>
            <div className="placowka-card__body">
              <h3>{p.name}</h3>
              <p className="placowka-card__meta">
                {p.profil} · {p.dzieci}
              </p>
              <span className="placowka-card__link">Zobacz →</span>
            </div>
          </Link>
        ))}
      </Reveal>
    </section>
  );
}
