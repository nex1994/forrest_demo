import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header/site-header";
import { SiteFooter } from "@/components/site-footer/site-footer";
import { Reveal } from "@/components/reveal/reveal";
import { QuoteBanner } from "@/components/sections/quote-banner";

const GALLERY = [
  { src: "/images/forrest/gotowe/piaseczno-kuchnia.jpg", alt: "Kącik kuchenny w sali Forrest Piaseczno" },
  { src: "/images/forrest/gotowe/piaseczno-polka.jpg", alt: "Półka z zabawkami i grami w sali Forrest Piaseczno" },
  { src: "/images/forrest/gotowe/piaseczno-alpaka2.jpg", alt: "Dziecko podczas zajęć z alpakami" },
];

export function PiasecznoPage() {
  return (
    <>
      <a href="#main" className="skip-link">
        Przejdź do treści
      </a>
      <SiteHeader />
      <main id="main">
        <section className="subpage-hero">
          <div className="subpage-hero__image">
            <Image
              src="/images/forrest/gotowe/piaseczno-radosc.jpg"
              alt="Dzieci bawiące się bańkami mydlanymi w sali Forrest Piaseczno"
              fill
              sizes="100vw"
              priority
            />
          </div>
          <div className="subpage-hero__text">
            <p className="eyebrow">Forrest</p>
            <h1 className="section__title">Forrest Piaseczno</h1>
            <p className="section__lede">Przedszkole tak bliskie, jak dom.</p>
            <Link className="subpage-hero__back" href="/#metoda">
              ← Poznaj naszą metodę
            </Link>
          </div>
        </section>

        <section id="mala-grupa" className="section">
          <Reveal className="split">
            <div className="split__text">
              <h2 className="section__title">Mała, kameralna grupa</h2>
              <p className="section__lede">
                Przedszkole jest czynne od poniedziałku do piątku w godzinach 8:00–16:00.
              </p>
              <p className="section__lede">
                Przedszkole tworzy jedną małą, mieszaną wiekowo grupę, w której dzieci rozwijają się i
                uczą we własnym tempie.
              </p>
              <p className="section__lede">
                Każdego dnia z grupą pracują 3 nauczycielki, co pozwala na indywidualne podejście do
                każdego dziecka, pracę w małych zespołach oraz uważne wspieranie jego potrzeb i
                możliwości.
              </p>
              <p className="section__lede section__quote">
                Mała grupa • różny wiek • 3 nauczycielki • indywidualne podejście.
              </p>
            </div>
            <div className="split__media">
              <Image
                src="/images/forrest/gotowe/piaseczno-czytanie.jpg"
                alt="Dzieci czytające i układające karty z literami na dywanie"
                fill
                sizes="(max-width: 860px) 92vw, 46vw"
              />
            </div>
          </Reveal>
        </section>

        <section className="section">
          <Reveal className="split">
            <div className="split__media">
              <Image
                src="/images/forrest/gotowe/piaseczno-sala.jpg"
                alt="Sala przedszkolna z tablicą i portretami postaci Forrest"
                fill
                sizes="(max-width: 860px) 92vw, 46vw"
              />
            </div>
            <div className="split__text">
              <h2 className="section__title">Codziennie uczymy się czytać</h2>
              <p className="section__lede">Naukę czytania rozpoczynamy już od najmłodszych lat.</p>
              <p className="section__lede">
                Każdego dnia prowadzimy zajęcia z wykorzystaniem Symultaniczno-Sekwencyjnej Nauki
                Czytania®.
              </p>
              <p className="section__lede section__quote">
                Jesteśmy Pierwszym w Polsce Przedszkolem Metody Krakowskiej.
              </p>
            </div>
          </Reveal>
        </section>

        <section className="section">
          <Reveal className="tile-grid">
            <div className="tile">
              <h3>Matematyka Numicon Oxford</h3>
              <p className="section__lede">Matematyka jest częścią naszego codziennego programu.</p>
              <p className="section__lede">
                Korzystamy z Numicon Oxford — dzieci poznają liczby i działania poprzez charakterystyczne
                klocki, manipulowanie, układanie, przeliczanie, porównywanie i rozwiązywanie problemów.
              </p>
            </div>
            <div className="tile">
              <h3>Odkrywam świat — codziennie rano</h3>
              <p className="section__lede">Każdy dzień rozpoczynamy blokiem „Odkrywam Świat".</p>
              <p className="section__lede">
                To codzienne zajęcia rozwijające wiedzę o świecie, przyrodzie i człowieku poprzez
                doświadczenia, eksperymenty, obserwacje i praktyczne działanie.
              </p>
            </div>
          </Reveal>
        </section>

        <section className="section">
          <Reveal className="feature-row">
            <div className="feature-row__text">
              <h3>Każdego dnia inne zajęcia dodatkowe</h3>
              <p className="section__lede">
                Każdy dzień tygodnia to inna aktywność dodatkowa, dzięki czemu dzieci codziennie
                rozwijają inne umiejętności.
              </p>
              <p className="section__lede">
                Muzyka — śpiew, instrumenty, zabawy z dźwiękiem i pierwsze muzyczne doświadczenia.
              </p>
              <p className="section__lede">
                Rytmika — ruch przy muzyce, rytm, taniec i ćwiczenia koordynacji.
              </p>
              <p className="section__lede">
                Sensoplastyka — swobodne tworzenie, eksperymentowanie z kolorami, fakturami i naturalnymi
                materiałami.
              </p>
              <p className="section__lede">
                Zajęcia muzyczno-dramowe — teatr, muzyka, odgrywanie ról i zabawy rozwijające wyobraźnię
                oraz ekspresję.
              </p>
              <p className="section__lede">
                A w piątki — coś wyjątkowego! Alpaki, teatrzyki, koncerty, eksperymenty, warsztaty
                kreatywne, wycieczki.
              </p>
              <p className="section__lede section__quote">
                Każdy dzień jest inny. Każdy daje dzieciom nowe doświadczenia.
              </p>
            </div>
            <div className="feature-row__media">
              <Image
                src="/images/forrest/gotowe/piaseczno-sensoplastyka.jpg"
                alt="Dzieci malujące farbami podczas zajęć plastycznych"
                fill
                sizes="(max-width: 860px) 92vw, 46vw"
              />
            </div>
          </Reveal>
        </section>

        <section className="section">
          <Reveal className="split">
            <div className="split__media">
              <Image
                src="/images/forrest/gotowe/zajecia-real.jpg"
                alt="Zajęcia indywidualne przy stoliku"
                fill
                sizes="(max-width: 860px) 92vw, 46vw"
              />
            </div>
            <div className="split__text">
              <h2 className="section__title">Indywidualna terapia każdego dnia</h2>
              <p className="section__lede">
                Każde dziecko 2 razy dziennie uczestniczy w indywidualnych zajęciach terapeutycznych,
                dopasowanych do jego potrzeb i programu terapii.
              </p>
              <p className="section__lede">
                W zespole pracują specjaliści prowadzący terapię logopedyczną, psychologiczną,
                pedagogiczną, terapię miofunkcjonalną, integrację sensoryczną (SI) oraz trening słuchowy
                Neuroflow.
              </p>
              <p className="section__lede">
                W zespole znajduje się również 2 certyfikowanych terapeutów Metody Krakowskiej®.
              </p>
              <p className="section__lede section__quote">
                2 indywidualne terapie dziennie • interdyscyplinarny zespół specjalistów • terapia
                dopasowana do dziecka.
              </p>
            </div>
          </Reveal>
        </section>

        <section className="section">
          <Reveal className="split">
            <div className="split__text">
              <h2 className="section__title">Plac zabaw i natura tuż obok</h2>
              <p className="section__lede">
                Duży, kolorowy plac zabaw to tak naprawdę jedna wielka piaskownica — przestrzeń do
                kopania, budowania, przesypywania, tworzenia i swobodnej zabawy.
              </p>
              <p className="section__lede">
                Tuż obok przedszkola znajdują się stadion i las, które są naturalnym przedłużeniem
                przedszkolnej przestrzeni. To właśnie tam dzieci wyruszają na leśne wyprawy, szukają
                najciekawszych patyków, obserwują motyle i pająki, zbierają leśne skarby i odkrywają
                przyrodę z bliska.
              </p>
              <p className="section__lede section__quote">
                Dużo ruchu, dużo natury i jeszcze więcej dziecięcych odkryć.
              </p>
              <p className="section__lede">Czesne 1200 zł</p>
              <p className="section__lede">
                Dla dziecka posiadającego orzeczenie o potrzebie kształcenia specjalnego od 200 zł
              </p>
              <p className="section__lede">
                Wpisowe/rezerwacja miejsca na rok szkolny 2027/2028 500 zł
              </p>
            </div>
            <div className="split__media">
              <Image
                src="/images/forrest/gotowe/piaseczno-stadion.jpg"
                alt="Dzieci biegnące z kolorowymi parasolkami po bieżni stadionu obok przedszkola"
                fill
                sizes="(max-width: 860px) 92vw, 46vw"
              />
            </div>
          </Reveal>
        </section>

        <section className="section section--center">
          <Reveal className="section__inner">
            <h2 className="section__title">Chwile z Forrest Piaseczno</h2>
          </Reveal>
          <Reveal className="chwile__gallery mt-48">
            {GALLERY.map((photo) => (
              <div key={photo.src} className="chwile__photo">
                <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 760px) 92vw, 30vw" />
              </div>
            ))}
          </Reveal>
        </section>

        <QuoteBanner />

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
