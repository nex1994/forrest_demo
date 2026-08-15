import Image from "next/image";
import { Reveal } from "@/components/reveal/reveal";

const BOHATEROWIE = ["Miś Omi", "Króliczek Ami", "Gąska Agat", "Zajączek Papu"];

export function DziecinstwoSection() {
  return (
    <section id="dziecinstwo" className="section">
      <Reveal className="section__inner section--center">
        <h2 className="section__title">
          Nie budujemy idealnego przedszkola.
          <br />
          Budujemy dzieciństwo.
        </h2>
        <p className="section__lede">
          Dzieciństwo nie składa się z podręczników.
          <br />
          Zamiast nich każde dziecko prowadzi własny Dziennik — zapis tego, co naprawdę przeżyło,
          zobaczyło i odkryło danego dnia.
        </p>
      </Reveal>

      <Reveal className="tile-grid tile-grid--3 mt-48">
        <div className="tile">
          <h3>Czym jest Dziennik?</h3>
          <p className="section__lede">
            To nie zeszyt ćwiczeń. To Dziennik Wydarzeń — miejsce, w którym spotyka się nauka,
            codzienność i pamięć.
          </p>
          <p className="section__lede">
            Znajdują się w nim karty pracy dopasowane nie tylko do tematu tygodnia, ale przede
            wszystkim do możliwości rozwojowych konkretnego dziecka — bo w Forrest nie ma jednego,
            uniwersalnego tempa nauki. Obok kart pracy, nauczycielki wklejają też informacje ważne dla
            rodziców: jadłospis, zapowiedź wycieczki, ogłoszenia. Wszystko w jednym miejscu.
          </p>
        </div>

        <div className="tile">
          <h3>Dlaczego to działa</h3>
          <p className="section__lede">
            Prawdziwe wydarzenia stają się naturalnym materiałem do nauki. Dziecko, które opowiada o
            tym, co się wydarzyło, uczy się budować wypowiedzi, porządkować zdarzenia w czasie i
            dostrzegać związki przyczynowo-skutkowe. Dziennik jest też mostem między przedszkolem a
            domem. Każdego popołudnia wraca do szatni, gdzie czeka na rodzica. To moment, w którym
            dziecko może opowiedzieć, co robiło, rodzic — dopisać coś od siebie, a wspólna rozmowa
            zaczyna się naturalnie, zamiast standardowego pytania: <em>„no i jak było?”</em>.
          </p>
        </div>

        <div className="tile">
          <h3>Pamiątka na lata</h3>
          <p className="section__lede">
            Dziennik zostaje w domu. Nie jest oddawany, nie znika po roku szkolnym.
          </p>
          <p className="section__lede">
            Po kilku latach staje się czymś więcej niż zbiorem kart pracy — to książka o dziecku,
            napisana i narysowana przez nie samo. Widać w niej proces-progres, który trudno zauważyć
            na bieżąco: pierwsze bazgroły, pierwsze litery, pierwsze zdania…
          </p>
        </div>
      </Reveal>

      <Reveal className="split split--center mt-56">
        <div className="split__portrait">
          <Image
            src="/images/forrest/gotowe/bohaterowie-karty.jpg"
            alt="Dziecko pracuje z kartami bohaterów Forrest"
            fill
            sizes="(max-width: 430px) 360px, (max-width: 860px) 92vw, 360px"
          />
        </div>
        <div className="split__text">
          <h3>Bohaterowie, którzy uczą razem z dziećmi</h3>
          <p className="section__lede">
            Karty pracy w dzienniku nie są anonimowe. Każdą tworzą nasze autorskie postacie — Miś Omi,
            Króliczek Ami, Gąska Agat, Zajączek Papu i inni mieszkańcy Forrest.
          </p>
          <p className="section__lede">
            Same postacie zaprojektowałyśmy z myślą o cieple i naturze, ale ich imiona wymyśliły
            dzieci. To one, nie my, zdecydowały, jak ma się nazywać miś czy króliczek, który codziennie
            towarzyszy im w nauce liter i liczb.
          </p>
          <p className="section__lede">
            Nauczycielki dobierają, która postać pojawi się na karcie pracy, zależnie od tematu
            tygodnia i tego, co akurat jest potrzebne konkretnemu dziecku — czasem to powtórka liter,
            czasem ćwiczenie grafomotoryki, czasem prosta łamigłówka. Dzięki temu nauka nie wygląda tak
            samo dla każdego dziecka, ale zawsze wygląda znajomo — bo bohaterowie są ci sami od
            pierwszego dnia w przedszkolu.
          </p>
          <div className="badges">
            {BOHATEROWIE.map((name) => (
              <span key={name} className="badge">
                {name}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
