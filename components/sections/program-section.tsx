import Image from "next/image";
import { Reveal } from "@/components/reveal/reveal";

const WORLDS = [
  { name: "Język", slug: "jezyk" },
  { name: "Dom", slug: "dom" },
  { name: "Świat", slug: "swiat" },
  { name: "Matematyka", slug: "matematyka" },
];

export function ProgramSection() {
  return (
    <section id="program" className="section section--pb-sm">
      <Reveal className="split">
        <div className="split__portrait split__portrait--program">
          <Image
            src="/images/forrest/gotowe/program-swiat.jpg"
            alt="Dzieci poznające świat poprzez zabawę"
            fill
            sizes="(max-width: 430px) 360px, (max-width: 860px) 92vw, 360px"
          />
        </div>
        <div className="split__text">
          <h2 className="section__title">Program, który rośnie razem z dzieckiem</h2>
          <p className="section__lede">
            Nie pracujemy z gotowymi podręcznikami. Stworzyliśmy własny program nauczania.
          </p>
          <p className="section__lede">Jego fundament stanowią cztery światy:</p>
          <div className="worlds">
            {WORLDS.map((world) => (
              <div key={world.name} className={`card--world card--world--${world.slug}`}>
                <h3>{world.name}</h3>
              </div>
            ))}
          </div>
          <p className="section__lede mt-36">Każdy tydzień poświęcony jest jednemu tematowi.</p>
        </div>
      </Reveal>
    </section>
  );
}
