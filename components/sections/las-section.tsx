import Image from "next/image";
import { Reveal } from "@/components/reveal/reveal";

export function LasSection() {
  return (
    <section id="las" className="section panel--sage panel--sage--bottom">
      <Reveal className="split split--center">
        <div className="split__text">
          <h2 className="section__title section__title--offset">
            Las, który uczy.
          </h2>
          <p className="section__lede section__lede--narrow">
            Nasz plac zabaw bardziej przypomina fragment lasu niż tradycyjne przedszkolne podwórko.
            Górka, kamienie, drzewa, patyki, piasek, tor wodny z pompą, liny, hamaki i równoważnie
            tworzą przestrzeń do swobodnej zabawy.
          </p>
          <p className="section__lede section__lede--narrow">
            Tutaj dzieci codziennie wspinają się, eksperymentują, budują, obserwują, planują i
            współpracują.
            <br />
            Dla nich to zabawa.
            <br />
            Dla nas – najlepsza lekcja samodzielności, odwagi i odkrywania świata.
          </p>
        </div>
        <div className="split__media">
          <Image
            src="/images/forrest/gotowe/las-ktory-uczy.jpg"
            alt="Dzieci na placu zabaw wśród drzew"
            fill
            sizes="(max-width: 860px) 92vw, 46vw"
          />
        </div>
      </Reveal>
    </section>
  );
}
