import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header/site-header";
import { SiteFooter } from "@/components/site-footer/site-footer";
import { Reveal } from "@/components/reveal/reveal";

export type PlacowkaFact = {
  label: string;
  value: string;
  toConfirm?: boolean;
};

export type PlacowkaExtraBlock = {
  title: string;
  paragraphs: string[];
};

export function PlacowkaPage({
  heroImage,
  heroAlt,
  name,
  tagline,
  facts,
  extraBlocks,
  gallery,
}: {
  heroImage: string;
  heroAlt: string;
  name: string;
  tagline: string;
  facts: PlacowkaFact[];
  extraBlocks?: PlacowkaExtraBlock[];
  gallery?: { src: string; alt: string }[];
}) {
  return (
    <>
      <a href="#main" className="skip-link">
        Przejdź do treści
      </a>
      <SiteHeader />
      <main id="main">
        <section className="subpage-hero">
          <div className="subpage-hero__image">
            <Image src={heroImage} alt={heroAlt} fill sizes="100vw" priority />
          </div>
          <div className="subpage-hero__text">
            <p className="eyebrow">Forrest</p>
            <h1 className="section__title">{name}</h1>
            <p className="section__lede">{tagline}</p>
            <Link className="subpage-hero__back" href="/#metoda">
              ← Poznaj naszą metodę
            </Link>
          </div>
        </section>

        <section className="section">
          <Reveal className="facts">
            {facts.map((fact) => (
              <div key={fact.label} className="facts__row">
                <span className="facts__label">{fact.label}</span>
                <span className="facts__value">
                  {fact.value}
                  {fact.toConfirm && <span className="facts__badge">do potwierdzenia</span>}
                </span>
              </div>
            ))}
          </Reveal>
        </section>

        {gallery && gallery.length > 0 && (
          <section className="section">
            <Reveal className="chwile__gallery">
              {gallery.map((photo) => (
                <div key={photo.src} className="chwile__photo">
                  <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 760px) 92vw, 30vw" />
                </div>
              ))}
            </Reveal>
          </section>
        )}

        {extraBlocks && extraBlocks.length > 0 && (
          <section className="section">
            <Reveal className="tile-grid subpage-extra">
              {extraBlocks.map((block) => (
                <div key={block.title} className="tile">
                  <h3>{block.title}</h3>
                  {block.paragraphs.map((p, i) => (
                    <p key={i} className="section__lede">
                      {p}
                    </p>
                  ))}
                </div>
              ))}
            </Reveal>
          </section>
        )}

        <section id="kontakt" className="section section--center">
          <Reveal className="section__inner">
            <h2 className="section__title">Umów się na spotkanie</h2>
            <p className="section__lede">
              Najlepiej poznać Forrest osobiście. Zadzwoń lub napisz — pokażemy Ci naszą placówkę i
              opowiemy, jak wygląda u nas dzień dziecka.
            </p>
            <div className="subpage-contact">
              <a className="btn--primary" href="tel:+48692623327">
                +48 692 623 327
              </a>
              <a className="subpage-contact__mail" href="mailto:forrest.przedszkole@gmail.com">
                forrest.przedszkole@gmail.com
              </a>
            </div>
          </Reveal>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
