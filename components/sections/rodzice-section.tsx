import Image from "next/image";
import { Reveal } from "@/components/reveal/reveal";

export function RodziceSection() {
  return (
    <section id="rodzice" className="section">
      <Reveal className="split">
        <div className="split__text">
          <h2 className="section__title">Forrest tworzymy razem</h2>
          <p className="section__lede">
            Dziecko nie przestaje być częścią swojej rodziny, kiedy przekracza próg przedszkola.
            Dlatego chcemy, żeby rodzice byli blisko tego, co dzieje się w Forrest.
          </p>
          <p className="section__lede">
            Rozmawiamy. Pokazujemy postępy. Dzielimy się tym, co nas cieszy, ale również tym, co wymaga
            wspólnego działania.
          </p>
          <p className="section__lede">
            Rodzice pojawiają się też w życiu przedszkola — podczas wydarzeń, koncertów i naszych
            wspólnych projektów.
          </p>
          <p className="section__lede">
            Bo kiedy dom i przedszkole patrzą w tym samym kierunku, dziecko może iść swoją drogą
            znacznie pewniej.
          </p>
        </div>
        <div className="split__media split__media--rodzice">
          <Image
            src="/images/forrest/gotowe/rodzice-razem.jpg"
            alt="Rodzice i dzieci na wspólnym wydarzeniu Forrest"
            fill
            sizes="(max-width: 860px) 92vw, 46vw"
          />
        </div>
      </Reveal>
    </section>
  );
}
