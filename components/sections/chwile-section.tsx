import Image from "next/image";
import { Reveal } from "@/components/reveal/reveal";
import { WatercolorBlob } from "@/components/decor/decor";

const GALLERY = [
  {
    src: "/images/forrest/gotowe/chwile-balony-real.jpg",
    alt: "Dzieci w dmuchanym zamku z kolorowymi balonami",
  },
  {
    src: "/images/forrest/gotowe/chwile-halloween-real.jpg",
    alt: "Bal dyniowy — dzieci w kolorowych przebraniach",
  },
  {
    src: "/images/forrest/gotowe/chwile-stokrotki-real.jpg",
    alt: "Przedstawienie w scenografii ze stokrotkami",
  },
  {
    src: "/images/forrest/gotowe/chwile-gwiazdy-real.jpg",
    alt: "Sesja 'noc pełna gwiazd' na przedszkolnej scenie",
  },
  {
    src: "/images/forrest/gotowe/chwile-arbuzy-real.jpg",
    alt: "Słodki stół w dekoracji z arbuzami",
  },
  {
    src: "/images/forrest/gotowe/chwile-konik-real.jpg",
    alt: "Autorska scenografia balonowa z drewnianym konikiem",
  },
];

export function ChwileSection() {
  return (
    <section id="chwile" className="section section--center">
      <Reveal className="section__inner">
        <h2 className="section__title">Tworzymy wspomnienia</h2>
        <p className="section__lede section__quote">
          Dzieciństwo składa się z chwil, które zostają na długo.
        </p>
        <p className="section__lede">
          Dlatego w Forrest ważne momenty celebrujemy naprawdę wyjątkowo. Tworzymy autorskie
          scenografie, przygotowujemy bale, koncerty i filmy, wspólnie świętujemy urodziny. Czasem
          przedszkole zamienia się w noc pełną gwiazd, czasem w ogród pełen kolorów, a czasem w
          prawdziwą scenę, na której najważniejszymi bohaterami są dzieci.
        </p>
      </Reveal>

      <Reveal className="chwile__gallery mt-48">
        {GALLERY.map((photo) => (
          <div key={photo.src} className="chwile__photo">
            <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 760px) 92vw, 30vw" />
          </div>
        ))}
      </Reveal>

      <Reveal className="section__inner mt-56">
        <p className="section__lede">
          Nie robimy tego tylko po to, żeby było pięknie. Tworzymy emocje, doświadczenia i wspomnienia.
        </p>
        <p className="section__lede">
          Przedstawienia traktujemy trochę jak naturalny egzamin — nie z pamięci, ale z umiejętności
          zdobywanych każdego dnia. Scena pokazuje, czy dziecko potrafi odnaleźć się w grupie, poczekać
          na swoją kolej, współpracować, poradzić sobie z emocjami i odważyć się wystąpić przed innymi.
        </p>
        <p className="section__lede">
          Dla jednego sukcesem będzie powiedzenie całej kwestii. Dla innego — samo wyjście na scenę. Nie
          chodzi o perfekcyjny występ. Chodzi o drogę, którą dziecko przeszło, żeby znaleźć się w tym
          miejscu.
        </p>
        <p className="section__lede">
          Dlatego koncerty, spektakle i wspólne wydarzenia są dla nas częścią edukacji.
        </p>
        <div className="chwile__closing">
          <WatercolorBlob className="chwile__blob" />
          <p className="section__lede section__quote section__quote--lg">
            Są chwile, których nie da się zatrzymać. Można jednak przeżyć je razem tak, by zostały z
            nami na długo.
          </p>
        </div>
        <a className="btn--primary" href="#kontakt">
          Zobacz nasze wspólne chwile →
        </a>
      </Reveal>
    </section>
  );
}
