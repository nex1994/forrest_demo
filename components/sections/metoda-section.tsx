import Image from "next/image";
import { Reveal } from "@/components/reveal/reveal";

export function MetodaSection() {
  return (
    <section id="metoda" className="section">
      <Reveal className="split split--center metoda__split">
        <div className="metoda__header">
          <h2 className="section__title">Jak uczy się dziecko</h2>
        </div>
        <div className="split__portrait split__portrait--metoda">
          <Image
            src="/images/forrest/gotowe/program-swiat.jpg"
            alt="Dzieci z warzywami zebranymi podczas zajęć o świecie"
            fill
            sizes="(max-width: 430px) 360px, (max-width: 860px) 92vw, 360px"
            loading="eager"
          />
        </div>
        <div className="split__text">
          <p className="section__lede">
            Dziecko nie poznaje świata wyłącznie przy stoliku. Poznaje go całym sobą.
          </p>
          <p className="section__lede section__quote">
            Dotyka. Pyta. Biega. Buduje. Obserwuje. Popełnia błędy. Próbuje jeszcze raz.
          </p>
          <p className="section__lede">
            Właśnie z takiego spojrzenia na dziecko powstała{" "}
            <strong>Naturalna Pedagogika Rozwoju®</strong> — nasze autorskie podejście do edukacji
            przedszkolnej.
          </p>
          <p className="section__lede">
            Jej podstawą jest neurodydaktyka i wiedza o tym, jak naturalnie rozwija się dziecięcy mózg.
            Nie chcemy tego rozwoju przyspieszać ani prowadzić dziecka za rękę tam, dokąd jeszcze nie jest
            gotowe pójść. Chcemy stworzyć mu warunki, w których może zrobić kolejny krok samo.
          </p>
          <p className="section__lede">
            Inspiracji szukaliśmy tam, gdzie edukacja od lat podąża za dzieckiem. Odwiedzaliśmy duńskie i
            norweskie placówki oświatowe, przedszkola waldorfskie w Alpach oraz słynną Scuola
            dell&rsquo;Infanzia Diana w Reggio Emilia — jedną z najbardziej rozpoznawalnych placówek
            związanych z Reggio Emilia.
          </p>
          <p className="section__lede">
            Z tych doświadczeń stworzyliśmy jednak coś własnego. Forrest nie jest kopią żadnego modelu.
          </p>
          <p className="section__lede">
            To miejsce, w którym nauka nie zaczyna się wraz z zajęciami i nie kończy wraz z nimi. Jest w
            rozmowie, zabawie, ruchu, doświadczeniu i codziennych sytuacjach.
          </p>
          <p className="section__lede">
            Bo dla dziecka nauka nie jest osobnym zadaniem. Jest częścią życia.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
