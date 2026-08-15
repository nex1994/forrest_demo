import Image from "next/image";
import { Reveal } from "@/components/reveal/reveal";

const FEATURE_CARDS = [
  {
    src: "/images/forrest/gotowe/zmienna-polka.jpg",
    alt: "Zmienna półka w sali Forrest",
    title: "Zmienna półka",
    paragraphs: [
      "Dzieci potrzebują nowości, ale nie potrzebują nadmiaru. Dlatego zamiast udostępniać wszystkie zabawki jednocześnie, regularnie zmieniamy zawartość półek.",
      "To, co pojawia się w sali, współgra również z tym, czym dzieci zajmują się w danym tygodniu. Gdy odkrywamy matematykę — pojawiają się materiały do liczenia, klasyfikowania i porównywania. Gdy poznajemy przyrodę — przestrzeń zmienia się razem z tematem.",
      "Dzięki temu dzieci wciąż są ciekawe tego, co je otacza, a zabawa naturalnie łączy się z nauką.",
    ],
  },
  {
    src: "/images/forrest/gotowe/cicha-polka.jpg",
    alt: "Cicha Półka — dzieci przy zabawce",
    title: "Cicha półka",
    paragraphs: [
      "W ciągu dnia jest czas na ruch, rozmowę i wspólną zabawę. Ale potrzebna jest też cisza.",
      "Cicha Półka to miejsce z materiałami rozwijającymi motorykę małą, koncentrację, cierpliwość i precyzję. Dziecko może zatrzymać się przy niej na dłużej, pracować we własnym tempie i skupić się na jednej czynności.",
      "Bez pośpiechu. Bez nadmiaru bodźców. Bo rozwój potrzebuje zarówno ruchu, jak i chwil skupienia.",
    ],
  },
  {
    src: "/images/forrest/gotowe/domek.jpg",
    alt: "Kącik domku — wspólne czytanie",
    title: "Domek — mały świat społeczny",
    paragraphs: [
      "W każdej sali znajduje się również strefa domku. Tutaj dzieci gotują, opiekują się lalkami, zapraszają gości, robią zakupy i wymyślają własne historie.",
      "To zabawa, ale jednocześnie jeden z najbardziej naturalnych sposobów uczenia się ról społecznych, komunikacji, współpracy i relacji z drugim człowiekiem.",
    ],
  },
  {
    src: "/images/forrest/gotowe/biblioteczka.jpg",
    alt: "Biblioteczka z regałem i tipi",
    title: "Biblioteczka, w której wszystko ma swoje miejsce",
    paragraphs: [
      "Każda sala ma własną biblioteczkę. Półki oznaczone są literami, a takie same oznaczenia znajdują się na książkach.",
      "Dziecko nie musi więc pytać dorosłego, gdzie odłożyć książkę. Potrafi zrobić to samo.",
      "To prosty system, który uczy porządku, odpowiedzialności i samodzielności — bez ciągłego przypominania.",
    ],
  },
];

export function PrzestrzenSection() {
  return (
    <section id="przestrzen" className="section">
      <Reveal className="section__inner section__inner--wide section--center">
        <h2 className="section__title">Przestrzeń jest nauczycielem</h2>
        <p className="section__lede">
          W Forrest przestrzeń nie jest tylko tłem dla edukacji. Ona również uczy.
        </p>
        <p className="section__lede">
          Dlatego każdy element naszych sal ma swoje miejsce i znaczenie. Nie znajdziesz tu
          przypadkowych zabawek, przeładowanych półek ani nadmiaru bodźców. Są za to naturalne
          materiały, książki, światło i przestrzeń, która zaprasza dziecko do działania.
        </p>
      </Reveal>

      <Reveal className="mt-48">
        <div className="grid--2col">
          {FEATURE_CARDS.map((card) => (
            <div key={card.src} className="card--feature">
              <div className="card--feature__image">
                <Image src={card.src} alt={card.alt} fill sizes="(max-width: 760px) 92vw, 46vw" />
              </div>
              <div className="card--feature__body">
                <h3>{card.title}</h3>
                {card.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal className="feature-row mt-56">
        <div className="feature-row__text">
          <h3>Przestrzeń do tworzenia</h3>
          <p className="section__lede">Nie wszystko, czym bawi się dziecko, musi być gotową zabawką.</p>
          <p className="section__lede">
            Dlatego zawsze dostępne są kartony, papiery, fragmenty tapet, taśmy i inne materiały, z
            których można budować, konstruować i tworzyć własny świat.
          </p>
          <p className="section__lede">
            Karton może zostać domem, statkiem albo sklepem. To dziecko decyduje, czym stanie się za
            chwilę.
          </p>
        </div>
        <div className="feature-row__media">
          <Image
            src="/images/forrest/gotowe/przestrzen-tworzenia.jpg"
            alt="Dzieci tworzące z papieru i farb"
            fill
            sizes="(max-width: 860px) 92vw, 46vw"
          />
        </div>
      </Reveal>

      <Reveal className="section__inner section__inner--wide section--center subsection mt-56">
        <h3>Samodzielność zaczyna się od codzienności</h3>
        <p className="section__lede">
          W naszych salach są również rzeczy, których często nie kojarzymy z dziecięcą przestrzenią:
          szczotki, szufelki i ściereczki.
        </p>
        <p className="section__lede">Są na wysokości dzieci i są po to, żeby z nich korzystać.</p>
        <p className="section__lede">
          Po posiłku czy zajęciach dzieci porządkują swoje miejsce i pomagają zadbać o wspólną
          przestrzeń. Nie robimy wszystkiego za nie, jeśli potrafią zrobić to samodzielnie.
        </p>
        <p className="section__lede">
          Bo samodzielności nie uczymy podczas specjalnych zajęć. Uczymy jej każdego dnia.
        </p>
        <p className="section__lede section__quote section__quote--lg">
          W Forrest przestrzeń ma pomagać dziecku działać, myśleć, tworzyć, współpracować i stawać się
          coraz bardziej samodzielnym.
          <br />
          Dlatego nic nie znajduje się tutaj przypadkiem.
        </p>
      </Reveal>
    </section>
  );
}
