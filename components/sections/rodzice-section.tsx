import Image from "next/image";
import { Reveal } from "@/components/reveal/reveal";
import { Expandable } from "@/components/expandable/expandable";

export function RodziceSection() {
  return (
    <section id="rodzice" className="section">
      <Reveal className="split">
        <div className="split__text">
          <h2 className="section__title">
            Forrest tworzymy <span className="accent-script-alt">razem</span>
          </h2>
          <p className="section__lede">
            Przedszkole to nie tylko dzieci i nauczyciele. Forrest tworzymy razem — dzieci, rodzice,
            nauczyciele.
          </p>
        </div>
        <div className="split__media split__media--rodzice">
          <Image
            src="/images/forrest/gotowe/tworzymy-razem-real.jpg"
            alt="Dzieci i rodzice na wspólnym wydarzeniu Forrest"
            fill
            sizes="(max-width: 860px) 92vw, 46vw"
          />
        </div>
      </Reveal>

      <Reveal className="mt-56">
        <Expandable openLabel="Czytaj więcej o wspólnocie Forrest">
          <div className="tile-grid">
            <div className="tile">
              <h3>Rodzice są częścią Forrest</h3>
              <p className="section__lede">
                Rodzice naprawdę uczestniczą w naszym przedszkolnym życiu. Występują podczas koncertów,
                przygotowują przedstawienia dla dzieci, przychodzą czytać książki, opowiadają o swoich
                zawodach i dzielą się tym, co potrafią i czym się interesują.
              </p>
              <p className="section__lede">
                Ale wspólnota Forrest powstaje przede wszystkim każdego dnia.
              </p>
              <p className="section__lede">
                Rozmawiamy. Dużo. O dzieciach, ich emocjach, sukcesach i trudnościach, ale też o
                zupełnie zwyczajnych rzeczach. O podróżach, książkach, planach, a czasem nawet o
                zakupach. Bo kiedy dom i przedszkole patrzą w tym samym kierunku, dziecko może iść swoją
                drogą znacznie pewniej.
              </p>
            </div>

            <div className="tile">
              <h3>Nauczyciel — blisko, ale nie zamiast dziecka</h3>
              <p className="section__lede">
                Podstawą naszej pracy jest dobra relacja — zarówno z dzieckiem, jak i z jego rodzicem.
              </p>
              <p className="section__lede">
                Nauczyciel w Forrest jest przede wszystkim uważnym obserwatorem. Widzi emocje dziecka,
                zauważa jego potrzeby i wie, kiedy być obok, kiedy wskazać drogę, a kiedy pozwolić
                spróbować samodzielnie.
              </p>
              <p className="section__lede">
                Jest towarzyszem i przewodnikiem, ale nie kolegą. Pokazuje świat, ale go nie narzuca.
                Daje wybór, ale wyznacza jasne granice i zasady. Bo to właśnie w bezpiecznych,
                czytelnych ramach dziecko może uczyć się podejmowania własnych decyzji.
              </p>
            </div>
          </div>

          <div className="section__inner section__inner--wide section--center subsection mt-56">
            <h3>Jeden zespół. Jeden język.</h3>
            <p className="section__lede">
              Wszyscy nauczyciele Forrest przechodzą tę samą ścieżkę szkoleń. Dzięki temu niezależnie od
              tego, z którym dorosłym spotyka się dziecko, spotyka się z tym samym sposobem myślenia o
              jego rozwoju, emocjach i edukacji.
            </p>
            <p className="section__lede section__quote section__quote--lg">
              Uczymy się razem, wymieniamy obserwacjami i wspólnie szukamy najlepszych rozwiązań. Mówimy
              jednym, wspólnym językiem pedagogicznym.
            </p>
          </div>
        </Expandable>
      </Reveal>
    </section>
  );
}
