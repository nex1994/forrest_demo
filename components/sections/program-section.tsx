import Image from "next/image";
import { Reveal } from "@/components/reveal/reveal";
import { Character, TreeMark } from "@/components/decor/decor";
import { Expandable } from "@/components/expandable/expandable";

const WORLDS = [
  { name: "Język", slug: "jezyk" },
  { name: "Dom", slug: "dom" },
  { name: "Świat", slug: "swiat" },
  { name: "Matematyka", slug: "matematyka" },
];

export function ProgramSection() {
  return (
    <section id="program" className="section">
      <Reveal className="split">
        <div className="split__portrait split__portrait--program">
          <Image
            src="/images/forrest/gotowe/program-glowne-real.jpg"
            alt="Nauczycielka i dziecko układające litery przy oknie"
            fill
            sizes="(max-width: 430px) 360px, (max-width: 860px) 92vw, 360px"
          />
        </div>
        <div className="split__text">
          <h2 className="section__title">Program, który rośnie razem z dzieckiem</h2>
          <p className="section__lede">
            Stworzyliśmy własny program nauczania, który rozwija się razem z dziećmi — ich pytaniami,
            zainteresowaniami i tym, co dzieje się wokół nich.
          </p>
          <p className="section__lede">
            Program zbudowaliśmy wokół czterech obszarów dziecięcego poznania:
          </p>
          <div className="worlds__header">
            <TreeMark />
            <span className="worlds__label">Język. Dom. Świat. Matematyka.</span>
          </div>
          <div className="worlds worlds--with-character">
            {WORLDS.map((world) => (
              <div key={world.name} className={`card--world card--world--${world.slug}`}>
                <TreeMark className="card--world__tree" />
                <h3>{world.name}</h3>
              </div>
            ))}
            <Character name="giraffe" className="worlds__character" width={110} />
          </div>
          <p className="section__lede mt-36">
            Każdy tydzień ma swój temat. Czasem zaczynamy od liczby, czasem od miejsca, zjawiska,
            zawodu, wydarzenia albo pytania, które pojawiło się w grupie. Wokół niego budujemy kolejne
            doświadczenia — czytamy, liczymy, konstruujemy, rozmawiamy, eksperymentujemy i wychodzimy
            poza przedszkole.
          </p>
        </div>
      </Reveal>

      <Reveal className="tile-grid mt-56">
        <div className="tile">
          <h3>Język od pierwszego dnia</h3>
          <p className="section__lede">
            Od pierwszych dni w Forrest dzieci rozpoczynają naukę czytania Metodą
            Symultaniczno-Sekwencyjną®. Język jest obecny w całej przestrzeni — rzeczy mają swoje
            nazwy, miejsca są oznaczone, a imię dziecka od początku staje się dla niego jednym z
            najważniejszych słów.
          </p>
          <p className="section__lede">
            Podpisujemy jego szufladkę, miejsce i należące do niego rzeczy. Litery i słowa nie są więc
            abstrakcyjnym zadaniem z kartki. Dziecko spotyka je w swoim prawdziwym świecie.
          </p>
        </div>

        <div className="tile">
          <h3>Matematyka, której można dotknąć</h3>
          <p className="section__lede">
            Od pierwszych dni dzieci poznają ją poprzez Numicon — system matematyczny Oxford University
            Press. Liczby można zobaczyć, wziąć do ręki, porównać, połączyć i wykorzystać podczas
            zabawy.
          </p>
          <p className="section__lede">
            Zanim matematyka stanie się zapisem na kartce, staje się doświadczeniem.
          </p>
        </div>
      </Reveal>

      <Reveal className="mt-56">
        <Expandable openLabel="Czytaj więcej o programie">
          <div className="feature-row">
            <div className="feature-row__text">
              <h3>Uczymy się projektowo</h3>
              <p className="section__lede">Jeden temat może zaprowadzić nas w wiele miejsc.</p>
              <p className="section__lede">
                Jeśli rozmawiamy o domu, możemy mierzyć jego elementy, projektować własny budynek,
                poznawać nazwy pomieszczeń, konstruować z kartonów, liczyć potrzebne materiały i
                zastanawiać się, kto właściwie buduje dom.
              </p>
              <p className="section__lede">
                Dziecko nie dostaje więc kilkunastu niepowiązanych zadań. Odkrywa temat z różnych stron
                i zaczyna dostrzegać związki pomiędzy tym, czego się uczy.
              </p>
              <p className="section__lede">
                A czasem to właśnie dzieci decydują, dokąd zaprowadzi nas projekt.
              </p>
            </div>
            <div className="feature-row__media">
              <Image
                src="/images/forrest/gotowe/z-natura-real.jpg"
                alt="Dzieci poznające świat przyrody podczas projektu"
                fill
                sizes="(max-width: 860px) 92vw, 46vw"
              />
            </div>
          </div>

          <div className="section__inner section__inner--wide section--center subsection mt-56">
            <h3>Demokratycznie</h3>
            <p className="section__lede section__quote">
              Mamy dużo jasnych zasad, dzięki czemu dajemy dzieciom dużo wolności.
            </p>
            <p className="section__lede">
              Dzieci wiedzą, co jest dozwolone, czego nie robimy i dlaczego. To właśnie te ramy dają im
              poczucie bezpieczeństwa i przestrzeń do samodzielnego działania.
            </p>
            <p className="section__lede">
              W ich obrębie dziecko może wybierać. Decydować. Próbować. Zmieniać zdanie. Szukać
              własnego rozwiązania.
            </p>
            <p className="section__lede">
              Nauczyciel nie podejmuje każdej decyzji za dziecko. Tworzy bezpieczne warunki, w których
              dziecko stopniowo uczy się podejmować je samo.
            </p>
          </div>
        </Expandable>
      </Reveal>
    </section>
  );
}
