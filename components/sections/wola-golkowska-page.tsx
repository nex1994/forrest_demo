import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header/site-header";
import { SiteFooter } from "@/components/site-footer/site-footer";
import { Reveal } from "@/components/reveal/reveal";
import { QuoteBanner } from "@/components/sections/quote-banner";

const GALLERY = [
  { src: "/images/forrest/gotowe/wola-osiolek.jpg", alt: "Dziecko głaszczące osiołka przy ogrodzeniu" },
  { src: "/images/forrest/gotowe/wola-taniec.jpg", alt: "Dziewczynki w baletowych tutu przy oknie" },
  { src: "/images/forrest/gotowe/wola-schody.jpg", alt: "Dziecko na drewnianych schodach przy zjeżdżalni i basenie z piłeczkami" },
];

export function WolaGolkowskaPage() {
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
              src="/images/forrest/gotowe/wola-radosc.jpg"
              alt="Dziecko bawiące się klockami w jasnej sali z widokiem na las"
              fill
              sizes="100vw"
              priority
            />
          </div>
          <div className="subpage-hero__text">
            <p className="eyebrow">Forrest</p>
            <h1 className="section__title">Forrest Wola Gołkowska</h1>
            <p className="section__lede">
              Przedszkole ogólnodostępne i integracyjne, w którym plac zabaw to prawdziwy kawałek lasu.
            </p>
            <Link className="subpage-hero__back" href="/#metoda">
              ← Poznaj naszą metodę
            </Link>
          </div>
        </section>

        <section id="jezykowe-marzen" className="section">
          <Reveal className="split">
            <div className="split__text">
              <h2 className="section__title">Językowe przedszkole marzeń</h2>
              <p className="section__lede">
                Przedszkole jest czynne od poniedziałku do piątku w godzinach 8:00–17:00.
              </p>
              <p className="section__lede">Prowadzimy dwie grupy:</p>
              <p className="section__lede">3–4 lata</p>
              <p className="section__lede">5–6 lat – zerówka</p>
              <p className="section__lede section__quote">
                W każdej grupie z dziećmi pracują 3 nauczycielki, dzięki czemu możemy zapewnić dzieciom
                dużą ilość indywidualnej uwagi.
              </p>
            </div>
            <div className="split__media">
              <Image
                src="/images/forrest/gotowe/wola-szatnia.jpg"
                alt="Jasny hol z szatnią i widokiem na ogród"
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
                src="/images/forrest/gotowe/wola-czytanie.jpg"
                alt="Dzieci czytające książki razem na dywanie"
                fill
                sizes="(max-width: 860px) 92vw, 46vw"
              />
            </div>
            <div className="split__text">
              <h2 className="section__title">Codziennie uczymy się czytać</h2>
              <p className="section__lede">Naukę czytania rozpoczynamy już w najmłodszej grupie.</p>
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
          <Reveal className="split">
            <div className="split__text">
              <h2 className="section__title">English every day — pełna immersja językowa</h2>
              <p className="section__lede">Native speaker jest z dziećmi codziennie, przez cały dzień.</p>
              <p className="section__lede">
                Angielski towarzyszy dzieciom podczas zabawy, posiłków, zajęć, spacerów, czynności
                samoobsługowych i codziennych rozmów.
              </p>
              <p className="section__lede">
                Program językowy realizujemy w oparciu o Cookie and Friends — Oxford University Press,
                łącząc naukę poprzez zabawę, piosenki, historyjki, ruch i codzienne sytuacje
                komunikacyjne.
              </p>
              <p className="section__lede section__quote">
                Pracujemy metodą pełnej immersji językowej — dziecko przyswaja drugi język w naturalnych
                sytuacjach, podobnie jak uczy się języka ojczystego.
              </p>
            </div>
            <div className="split__media">
              <Image
                src="/images/forrest/gotowe/wola-jezyk.jpg"
                alt="Zajęcia z dopasowywania słów na kolorowych talerzykach"
                fill
                sizes="(max-width: 860px) 92vw, 46vw"
              />
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
              <p className="section__lede">A w piątki — coś wyjątkowego!</p>
              <p className="section__lede">
                Alpaki, teatrzyki, koncerty, eksperymenty, warsztaty kreatywne, wycieczki.
              </p>
              <p className="section__lede section__quote">
                Każdy dzień jest inny. Każdy daje dzieciom nowe doświadczenia.
              </p>
            </div>
            <div className="feature-row__media">
              <Image
                src="/images/forrest/gotowe/wola-zabawa.jpg"
                alt="Kolorowa sala zabaw z huśtawką i zjeżdżalnią"
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
              <h2 className="section__title">Indywidualna terapia</h2>
              <p className="section__lede">
                Każde dziecko 3-5 razy w tygodniu uczestniczy w indywidualnych zajęciach terapeutycznych,
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
                • interdyscyplinarny zespół specjalistów • terapia dopasowana do dziecka
              </p>
            </div>
          </Reveal>
        </section>

        <section className="section">
          <Reveal className="split">
            <div className="split__text">
              <h2 className="section__title">Prawdziwy leśny plac zabaw</h2>
              <p className="section__lede">
                To nie jest zwykły plac zabaw. To kawałek prawdziwego dzieciństwa.
              </p>
              <p className="section__lede">
                Miejsce, w którym można wejść na górkę, wspinać się po linach, puszczać wodę
                własnoręcznie uruchomioną pompą, budować strumyki i tamy, gotować najlepszą zupę z błota
                i wracać z kieszeniami pełnymi kamyków.
              </p>
              <p className="section__lede">
                Są tu tory wodne, piasek, patyki, liście, błoto i wszystko to, co podpowiada dziecięca
                wyobraźnia.
              </p>
              <p className="section__lede">
                Nie brakuje też najmniejszych mieszkańców naszego ogrodu — ślimaków, owadów i innych
                małych odkryć, przy których warto zatrzymać się na chwilę.
              </p>
              <p className="section__lede">
                Bo najlepszy plac zabaw nie mówi dziecku, jak ma się bawić.
              </p>
              <p className="section__lede">Daje mu przestrzeń, żeby samo mogło to wymyślić.</p>
              <p className="section__lede section__quote">
                Trochę błota na kaloszach. Kamyk w kieszeni. Patyk znaleziony po drodze. Tak właśnie
                wygląda dzieciństwo.
              </p>
              <p className="section__lede">Czesne 1400 zł</p>
              <p className="section__lede">
                Dla dziecka posiadającego orzeczenie o potrzebie kształcenia specjalnego 800 zł
              </p>
              <p className="section__lede">
                Wpisowe/rezerwacja miejsca na rok szkolny 2027/2028 500 zł
              </p>
            </div>
            <div className="split__media">
              <Image
                src="/images/forrest/gotowe/wola-las-okno.jpg"
                alt="Jasna sala z ogromnymi oknami z widokiem na las"
                fill
                sizes="(max-width: 860px) 92vw, 46vw"
              />
            </div>
          </Reveal>
        </section>

        <section className="section section--center">
          <Reveal className="section__inner">
            <h2 className="section__title">Chwile z Forrest Wola Gołkowska</h2>
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
