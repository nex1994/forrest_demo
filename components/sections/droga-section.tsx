import Image from "next/image";
import { Reveal } from "@/components/reveal/reveal";

export function DrogaSection() {
  return (
    <section id="droga" className="section section--flush-top">
      <Reveal className="split split--center">
        <div className="split__text">
          <h2 className="section__title">
            Każde dziecko
            <br />
            ma swoją drogę
          </h2>
          <p className="section__lede">
            Nie wszystkie dzieci biegną w tym samym tempie. Jedne odważnie ruszają przed siebie. Inne
            najpierw się zatrzymują, obserwują i dopiero wtedy stawiają pierwszy krok. Jedne od
            pierwszych dni zadają setki pytań. Inne wolą słuchać. Jedne budują z klocków niezwykłe
            konstrukcje. Inne godzinami potrafią obserwować mrówki, układać kamienie albo wymyślać
            historie zapisane patykiem na piasku.
          </p>
          <p className="section__lede">
            W Forrest wierzymy, że każde dziecko ma w sobie wyjątkowy potencjał.
            <br />
            Tworzymy miejsce, w którym może rozwijać się w swoim tempie, odkrywać swoje możliwości i
            przede wszystkim — być sobą.
            <br />
            To tutaj zaczyna się jego własna historia.
          </p>
        </div>
        <div className="split__portrait">
          <Image
            src="/images/forrest/gotowe/droga-las.jpg"
            alt="Dzieci bawiące się bańkami mydlanymi w sali Forrest"
            fill
            sizes="(max-width: 430px) 360px, (max-width: 860px) 92vw, 360px"
            priority
          />
        </div>
      </Reveal>
    </section>
  );
}
