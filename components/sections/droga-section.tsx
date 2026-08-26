import Image from "next/image";
import { Reveal } from "@/components/reveal/reveal";
import { Character, Pennants } from "@/components/decor/decor";

export function DrogaSection() {
  return (
    <section id="droga" className="section">
      <Reveal className="split split--center droga__split">
        <div className="split__text">
          <h2 className="section__title">
            Każde dziecko ma
            <br />
            <span className="accent-script">swoją drogę</span>
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
          <Character name="calf" className="droga__calf" width={200} />
        </div>
        <div className="droga__media">
          <Pennants className="droga__pennants" />
          <div className="split__portrait">
            <Image
              src="/images/forrest/gotowe/droga-las.jpg"
              alt="Dzieci obserwujące odbicie lasu w leśnej kałuży"
              fill
              sizes="(max-width: 430px) 360px, (max-width: 860px) 92vw, 360px"
              priority
            />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
