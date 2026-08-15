import Image from "next/image";
import { Reveal } from "@/components/reveal/reveal";

export function DlaczegoSection() {
  return (
    <section id="nazwa" className="section panel--sage panel--sage--top">
      <Reveal className="dlaczego__header" id="dlaczego-misona">
        <h2 className="section__title">Dlaczego Forrest?</h2>
      </Reveal>
      <Reveal className="dlaczego__row">
        <div className="dlaczego__text dlaczego__text--left">
          <p className="section__lede">
            Większość osób myśli, że nazwa pochodzi od lasu.
            <br />
            To piękne skojarzenie.
            <br />
            Ale prawda jest zupełnie inna.
            <br />
            Forrest został nazwany na cześć Forresta Gumpa.
            <br />
            Bohatera, który pokazał światu, że nie trzeba być takim jak wszyscy, aby osiągnąć rzeczy
            niezwykłe.
          </p>
        </div>
        <div className="dlaczego__media">
          <Image
            src="/images/forrest/gotowe/dlaczego-forrest-1.jpg"
            alt="Wydarzenie w Forrest"
            fill
            sizes="(max-width: 760px) 220px, 300px"
          />
        </div>
      </Reveal>
      <Reveal className="dlaczego__row">
        <div className="dlaczego__media">
          <Image
            src="/images/forrest/gotowe/dlaczego-forrest-2.jpg"
            alt="Radość dzieci w Forrest"
            fill
            sizes="(max-width: 760px) 220px, 300px"
          />
        </div>
        <div className="dlaczego__text">
          <p className="section__lede section__quote">
            „Nie wygrywał dlatego, że był najlepszy.
            <br />
            Wygrywał dlatego, że nigdy nie przestał być sobą.”
          </p>
          <p className="section__lede">
            To właśnie chcemy przekazać dzieciom.
            <br />
            Nie uczymy ich, jak być najlepszymi.
            <br />
            Uczymy je odkrywać, kim są.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
