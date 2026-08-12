"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const nav = document.getElementById("nav");
    const onScroll = () => {
      nav?.classList.toggle("scrolled", window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll);

    const revealEls = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.12 }
    );
    revealEls.forEach((el) => io.observe(el));

    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, []);

  return (
    <>
      <nav id="nav">
        <div className="logo-mark">
          <img src="/images/forrest/logo-forrest-icon_3.png" alt="Forrest" className="nav-logo-img" />
          <img src="/images/forrest/przedszkole.png" alt="Przedszkole Metody Krakowskiej" className="nav-metoda-logo-img" />
        </div>
        <div className="nav-links">
          <a href="#historia">Historia</a>
          <a href="#metoda">Metoda</a>
          <a href="#przestrzen">Przestrzeń</a>
          <a href="#program">Program</a>
          <a href="#kontakt">Kontakt</a>
        </div>
        <a className="nav-cta" href="#kontakt">Umów spotkanie</a>
      </nav>

      {/* HERO — miejsce docelowo na teledysk startowy */}
      <section className="hero">
        <img
          src="/images/forrest/logo-forrest-full.png"
          alt="Forrest — język, przestrzeń, działanie"
          className="hero-logo-img"
        />
        <a
          href="#kontakt"
          className="btn-primary"
          style={{ background: "var(--sage)", boxShadow: "0 16px 32px -12px rgba(0,0,0,0.25)" }}
        >
          Umów spotkanie
        </a>
      </section>

      {/* 1. HERO (tekst) */}
      <section id="droga">
        <div className="split reveal">
          <div className="text-col">
            <h2 className="big">
              Każde dziecko
              <br />
              ma swoją drogę
            </h2>
            <p className="body-lg">
              Nie wszystkie dzieci biegną w tym samym tempie. Jedne odważnie ruszają przed siebie. Inne
              najpierw się zatrzymują, obserwują i dopiero wtedy stawiają pierwszy krok. Jedne od
              pierwszych dni zadają setki pytań. Inne wolą słuchać. Jedne budują z klocków niezwykłe
              konstrukcje. Inne godzinami potrafią obserwować mrówki, układać kamienie albo wymyślać
              historie zapisane patykiem na piasku.
            </p>
            <p className="body-lg" style={{ marginTop: 24 }}>
              W Forrest wierzymy, że każde dziecko ma w sobie wyjątkowy potencjał.
              <br />
              Tworzymy miejsce, w którym może rozwijać się w swoim tempie, odkrywać swoje możliwości i
              przede wszystkim — być sobą.
              <br />
              To tutaj zaczyna się jego własna historia.
            </p>
          </div>
          <div className="video-col">
            <div className="video-frame">
              <div className="play-btn"></div>
              <div className="video-caption">Poznaj Forrest — film wkrótce</div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Wszystko zaczęło się od jednego chłopca + Kim jestem */}
      <section id="historia">
        <div className="split reveal">
          <div className="hist-header">
            <h2 className="big">
              Wszystko zaczęło się
              <br />
              od jednego chłopca
            </h2>
          </div>
          <div className="img-col">
            <img src="/images/forrest/one_boy.jpg" alt="Balonowa brama przy wejściu do Forrest" />
          </div>
          <div className="hist-body">
            <p className="body-lg">
              Dziesięć lat temu nie planowałam otworzyć przedszkola. Szukałam miejsca dla mojego syna.
              <br />
              Miejsca, w którym dziecko nie będzie oceniane przez pryzmat trudności. Miejsca, które
              zamiast pytać: <em>„Dlaczego jeszcze tego nie potrafi?”</em>, zapyta:{" "}
              <em>„Czego potrzebuje, żeby mogło rozwinąć swoje skrzydła?”</em>.
              <br />
              Takiego miejsca nie znalazłam. Postanowiłam więc je stworzyć.
              <br />
              Tak powstał Forrest. Najpierw dla jednego chłopca. Dziś dla setek dzieci i ich rodzin. Bo
              wierzę, że każde dziecko zasługuje na dorosłych, którzy najpierw je poznają, a dopiero
              później zaczynają uczyć.
            </p>
          </div>
        </div>

        <div className="bio-card reveal">
          <p className="eyebrow" style={{ marginBottom: 10 }}>
            Kim jestem
          </p>
          <p className="body-lg" style={{ fontSize: "1.05rem" }}>
            Jestem logopedą, pedagogiem specjalnym i neurodydaktykiem. Posiadam certyfikat terapeuty
            Metody Krakowskiej®, jestem diagnostą ADOS-2, trenerem FamilyLab Jespera Juula, certyfikowanym
            terapeutą ESDM oraz metodykiem nauczania języków obcych. Ukończyłam studia pedagogiczne na
            Uniwersytecie Warmińsko-Mazurskim oraz studia kierunkowe na Uniwersytecie Warszawskim.
          </p>
          <p className="body-lg" style={{ marginTop: 14, fontSize: "1.05rem" }}>
            Od dwudziestu lat pracuję z dziećmi w wieku przedszkolnym i wczesnoszkolnym. Od dziesięciu lat
            razem z partnerem Darkiem oraz synami Gabrielem i Mieszkiem tworzymy Przedszkola Forrest.
          </p>
          <p className="body-lg" style={{ marginTop: 14, fontSize: "1.05rem" }}>
            Najlepiej czuję się tam, gdzie nikt by mnie się nie spodziewał — na dywanie, siedząc razem z
            dziećmi w trakcie zabawy, bo właśnie stamtąd widać najwięcej. Uwielbiam też podróże — i to nie
            tylko te dalekie. Czasem najciekawsza wyprawa to ta do lasu, tuż za oknem przedszkola.
          </p>
          <p
            className="body-lg"
            style={{
              marginTop: 18,
              fontFamily: "var(--font-garamond), serif",
              fontStyle: "italic",
              fontSize: "1.15rem",
              color: "var(--ink)",
            }}
          >
            Forrest — stworzony z marzeń, by spełniać marzenia.
          </p>
        </div>
      </section>

      {/* 3. Jak uczy się dziecko */}
      <section id="metoda">
        <div className="section-inner wide center reveal">
          <h2 className="big">Jak uczy się dziecko</h2>
          <p className="body-lg">
            Dziecko nie poznaje świata wyłącznie przy stoliku. Poznaje go całym sobą.
          </p>
          <p
            className="body-lg"
            style={{ marginTop: 14, fontFamily: "var(--font-garamond), serif", fontStyle: "italic" }}
          >
            Dotyka. Pyta. Biega. Buduje. Obserwuj. Popełnia błędy. Próbuje jeszcze raz.
          </p>
          <div className="method-infinity-wrap">
            <img
              src="/images/forrest/infinity-path.svg"
              alt="Pyta, biega, próbuje jeszcze raz, dotyka, przewraca się, buduje"
              className="method-infinity"
            />
          </div>
          <p className="body-lg">
            Właśnie z takiego spojrzenia na dziecko powstała{" "}
            <strong>Naturalna Pedagogika Rozwoju®</strong> — nasze autorskie podejście do edukacji
            przedszkolnej.
          </p>
          <p className="body-lg" style={{ marginTop: 20 }}>
            Jej podstawą jest neurodydaktyka i wiedza o tym, jak naturalnie rozwija się dziecięcy mózg.
            Nie chcemy tego rozwoju przyspieszać ani prowadzić dziecka za rękę tam, dokąd jeszcze nie jest
            gotowe pójść. Chcemy stworzyć mu warunki, w których może zrobić kolejny krok samo.
          </p>
          <p className="body-lg" style={{ marginTop: 20 }}>
            Inspiracji szukaliśmy tam, gdzie edukacja od lat podąża za dzieckiem. Odwiedzaliśmy duńskie i
            norweskie placówki oświatowe, przedszkola waldorfskie w Alpach oraz słynną Scuola
            dell&rsquo;Infanzia Diana w Reggio Emilia — jedną z najbardziej rozpoznawalnych placówek
            związanych z Reggio Emilia.
          </p>
          <p className="body-lg" style={{ marginTop: 20 }}>
            Z tych doświadczeń stworzyliśmy jednak coś własnego. Forrest nie jest kopią żadnego modelu.
          </p>
          <p className="body-lg" style={{ marginTop: 20 }}>
            To miejsce, w którym nauka nie zaczyna się wraz z zajęciami i nie kończy wraz z nimi. Jest w
            rozmowie, zabawie, ruchu, doświadczeniu i codziennych sytuacjach.
          </p>
          <p className="body-lg" style={{ marginTop: 20 }}>
            Bo dla dziecka nauka nie jest osobnym zadaniem. Jest częścią życia.
          </p>
        </div>
        <div className="section-inner wide reveal" style={{ marginTop: 48 }}>
          <img
            src="/images/forrest/gotowe/metoda-litery.jpg"
            alt="Nauka liter metodą Krakowską"
            style={{
              borderRadius: 20,
              boxShadow: "0 24px 50px -20px rgba(90,58,30,0.24)",
              maxHeight: 480,
              objectFit: "cover",
              width: "100%",
            }}
          />
        </div>
      </section>

      {/* 4. Nie budujemy idealnego przedszkola / Budujemy dzieciństwo + Dziennik + Bohaterowie */}
      <section id="dziecinstwo">
        <div className="section-inner center reveal">
          <h2 className="big">
            Nie budujemy idealnego przedszkola.
            <br />
            Budujemy dzieciństwo.
          </h2>
          <p className="body-lg">
            Dzieciństwo nie składa się z podręczników.
            <br />
            Zamiast nich każde dziecko prowadzi własny Dziennik — zapis tego, co naprawdę przeżyło,
            zobaczyło i odkryło danego dnia.
          </p>
        </div>

        <div className="trio-row reveal">
          <div className="trio-frame">
            <img src="/images/forrest/childhood1.jpg" alt="Podwieczorek z misiami" />
          </div>
          <div className="trio-frame">
            <img src="/images/forrest/childhood2.jpg" alt="Zabawa przy stole wodnym" />
          </div>
          <div className="trio-frame">
            <img src="/images/forrest/childhood3.jpg" alt="Dzieci na drewnianym koniku" />
          </div>
        </div>

        <div className="section-inner wide reveal subsection" style={{ marginTop: 56, textAlign: "center" }}>
          <h3>Czym jest Dziennik?</h3>
          <p className="body-lg">
            To nie zeszyt ćwiczeń. To Dziennik Wydarzeń — miejsce, w którym spotyka się nauka,
            codzienność i pamięć.
          </p>
          <p className="body-lg" style={{ marginTop: 18 }}>
            Znajdują się w nim karty pracy dopasowane nie tylko do tematu tygodnia, ale przede wszystkim
            do możliwości rozwojowych konkretnego dziecka — bo w Forrest nie ma jednego, uniwersalnego
            tempa nauki. Obok kart pracy, nauczycielki wklejają też informacje ważne dla rodziców:
            jadłospis, zapowiedź wycieczki, ogłoszenia. Wszystko w jednym miejscu.
          </p>

          <h3 style={{ marginTop: 40 }}>Dlaczego to działa</h3>
          <p className="body-lg">
            Prawdziwe wydarzenia stają się naturalnym materiałem do nauki. Dziecko, które opowiada o tym,
            co się wydarzyło, uczy się budować wypowiedzi, porządkować zdarzenia w czasie i dostrzegać
            związki przyczynowo-skutkowe. Dziennik jest też mostem między przedszkolem a domem. Każdego
            popołudnia wraca do szatni, gdzie czeka na rodzica. To moment, w którym dziecko może
            opowiedzieć, co robiło, rodzic — dopisać coś od siebie, a wspólna rozmowa zaczyna się
            naturalnie, zamiast standardowego pytania: <em>„no i jak było?”</em>.
          </p>

          <h3 style={{ marginTop: 40 }}>Pamiątka na lata</h3>
          <p className="body-lg">
            Dziennik zostaje w domu. Nie jest oddawany, nie znika po roku szkolnym.
          </p>
          <p className="body-lg" style={{ marginTop: 18 }}>
            Po kilku latach staje się czymś więcej niż zbiorem kart pracy — to książka o dziecku, napisana
            i narysowana przez nie samo. Widać w niej proces-progres, który trudno zauważyć na bieżąco:
            pierwsze bazgroły, pierwsze litery, pierwsze zdania…
          </p>

          <h3 style={{ marginTop: 40 }}>Bohaterowie, którzy uczą razem z dziećmi</h3>
          <p className="body-lg">
            Karty pracy w dzienniku nie są anonimowe. Każdą tworzą nasze autorskie postacie — Miś Omi,
            Króliczek Ami, Gąska Agat, Zajączek Papu i inni mieszkańcy Forrest.
          </p>
          <p className="body-lg" style={{ marginTop: 18 }}>
            Same postacie zaprojektowałyśmy z myślą o cieple i naturze, ale ich imiona wymyśliły dzieci.
            To one, nie my, zdecydowały, jak ma się nazywać miś czy króliczek, który codziennie towarzyszy
            im w nauce liter i liczb.
          </p>
          <p className="body-lg" style={{ marginTop: 18 }}>
            Nauczycielki dobierają, która postać pojawi się na karcie pracy, zależnie od tematu tygodnia i
            tego, co akurat jest potrzebne konkretnemu dziecku — czasem to powtórka liter, czasem
            ćwiczenie grafomotoryki, czasem prosta łamigłówka. Dzięki temu nauka nie wygląda tak samo dla
            każdego dziecka, ale zawsze wygląda znajomo — bo bohaterowie są ci sami od pierwszego dnia w
            przedszkolu.
          </p>
          <div className="postacie-grid">
            <span className="postac-badge">Miś Omi</span>
            <span className="postac-badge">Króliczek Ami</span>
            <span className="postac-badge">Gąska Agat</span>
            <span className="postac-badge">Zajączek Papu</span>
          </div>
          <div style={{ marginTop: 32, maxWidth: 560, marginLeft: "auto", marginRight: "auto" }}>
            <img
              src="/images/forrest/gotowe/bohaterowie-karty.jpg"
              alt="Dziecko pracuje z kartami bohaterów Forrest"
              style={{
                borderRadius: 20,
                boxShadow: "0 24px 50px -20px rgba(90,58,30,0.24)",
                width: "100%",
                display: "block",
              }}
            />
          </div>
        </div>
      </section>

      {/* 5. Przestrzeń jest nauczycielem */}
      <section id="przestrzen">
        <div className="section-inner wide center reveal">
          <h2 className="big">Przestrzeń jest nauczycielem</h2>
          <p className="body-lg">
            W Forrest przestrzeń nie jest tylko tłem dla edukacji. Ona również uczy.
          </p>
          <p className="body-lg" style={{ marginTop: 20 }}>
            Dlatego każdy element naszych sal ma swoje miejsce i znaczenie. Nie znajdziesz tu
            przypadkowych zabawek, przeładowanych półek ani nadmiaru bodźców. Są za to naturalne
            materiały, książki, światło i przestrzeń, która zaprasza dziecko do działania.
          </p>
        </div>

        <div className="section-inner wide reveal" style={{ marginTop: 48 }}>
          <div className="two-cards" style={{ marginTop: 0 }}>
            <div className="feature-card">
              <img src="/images/forrest/gotowe/zmienna-polka.jpg" alt="Zmienna półka w sali Forrest" />
              <div className="fc-body">
                <h3>Zmienna półka</h3>
                <p>
                  Dzieci potrzebują nowości, ale nie potrzebują nadmiaru. Dlatego zamiast udostępniać
                  wszystkie zabawki jednocześnie, regularnie zmieniamy zawartość półek.
                </p>
                <p style={{ marginTop: 12 }}>
                  To, co pojawia się w sali, współgra również z tym, czym dzieci zajmują się w danym
                  tygodniu. Gdy odkrywamy matematykę — pojawiają się materiały do liczenia, klasyfikowania
                  i porównywania. Gdy poznajemy przyrodę — przestrzeń zmienia się razem z tematem.
                </p>
                <p style={{ marginTop: 12 }}>
                  Dzięki temu dzieci wciąż są ciekawe tego, co je otacza, a zabawa naturalnie łączy się z
                  nauką.
                </p>
              </div>
            </div>
            <div className="feature-card">
              <img src="/images/forrest/gotowe/cicha-polka.jpg" alt="Cicha Półka — dzieci przy zabawce" />
              <div className="fc-body">
                <h3>Cicha półka</h3>
                <p>
                  W ciągu dnia jest czas na ruch, rozmowę i wspólną zabawę. Ale potrzebna jest też cisza.
                </p>
                <p style={{ marginTop: 12 }}>
                  Cicha Półka to miejsce z materiałami rozwijającymi motorykę małą, koncentrację,
                  cierpliwość i precyzję. Dziecko może zatrzymać się przy niej na dłużej, pracować we
                  własnym tempie i skupić się na jednej czynności.
                </p>
                <p style={{ marginTop: 12 }}>
                  Bez pośpiechu. Bez nadmiaru bodźców. Bo rozwój potrzebuje zarówno ruchu, jak i chwil
                  skupienia.
                </p>
              </div>
            </div>
            <div className="feature-card">
              <img src="/images/forrest/gotowe/domek.jpg" alt="Kącik domku — wspólne czytanie" />
              <div className="fc-body">
                <h3>Domek — mały świat społeczny</h3>
                <p>
                  W każdej sali znajduje się również strefa domku. Tutaj dzieci gotują, opiekują się
                  lalkami, zapraszają gości, robią zakupy i wymyślają własne historie.
                </p>
                <p style={{ marginTop: 12 }}>
                  To zabawa, ale jednocześnie jeden z najbardziej naturalnych sposobów uczenia się ról
                  społecznych, komunikacji, współpracy i relacji z drugim człowiekiem.
                </p>
              </div>
            </div>
            <div className="feature-card">
              <img src="/images/forrest/gotowe/biblioteczka.jpg" alt="Biblioteczka z regałem i tipi" />
              <div className="fc-body">
                <h3>Biblioteczka, w której wszystko ma swoje miejsce</h3>
                <p>
                  Każda sala ma własną biblioteczkę. Półki oznaczone są literami, a takie same oznaczenia
                  znajdują się na książkach.
                </p>
                <p style={{ marginTop: 12 }}>
                  Dziecko nie musi więc pytać dorosłego, gdzie odłożyć książkę. Potrafi zrobić to samo.
                </p>
                <p style={{ marginTop: 12 }}>
                  To prosty system, który uczy porządku, odpowiedzialności i samodzielności — bez
                  ciągłego przypominania.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="element-row reveal" style={{ marginTop: 56 }}>
          <div className="element-text">
            <h3 style={{ fontSize: "1.4rem", marginBottom: 14 }}>Przestrzeń do tworzenia</h3>
            <p className="body-lg">Nie wszystko, czym bawi się dziecko, musi być gotową zabawką.</p>
            <p className="body-lg" style={{ marginTop: 16 }}>
              Dlatego zawsze dostępne są kartony, papiery, fragmenty tapet, taśmy i inne materiały, z
              których można budować, konstruować i tworzyć własny świat.
            </p>
            <p className="body-lg" style={{ marginTop: 16 }}>
              Karton może zostać domem, statkiem albo sklepem. To dziecko decyduje, czym stanie się za
              chwilę.
            </p>
          </div>
          <div className="element-img">
            <img src="/images/forrest/gotowe/przestrzen-tworzenia.jpg" alt="Dzieci tworzące z papieru i farb" />
          </div>
        </div>

        <div className="section-inner wide center reveal subsection" style={{ marginTop: 56 }}>
          <h3>Samodzielność zaczyna się od codzienności</h3>
          <p className="body-lg">
            W naszych salach są również rzeczy, których często nie kojarzymy z dziecięcą przestrzenią:
            szczotki, szufelki i ściereczki.
          </p>
          <p className="body-lg" style={{ marginTop: 18 }}>
            Są na wysokości dzieci i są po to, żeby z nich korzystać.
          </p>
          <p className="body-lg" style={{ marginTop: 18 }}>
            Po posiłku czy zajęciach dzieci porządkują swoje miejsce i pomagają zadbać o wspólną
            przestrzeń. Nie robimy wszystkiego za nie, jeśli potrafią zrobić to samodzielnie.
          </p>
          <p className="body-lg" style={{ marginTop: 18 }}>
            Bo samodzielności nie uczymy podczas specjalnych zajęć. Uczymy jej każdego dnia.
          </p>
          <p
            className="body-lg"
            style={{
              marginTop: 32,
              fontFamily: "var(--font-garamond), serif",
              fontStyle: "italic",
              fontSize: "1.2rem",
              color: "var(--ink)",
            }}
          >
            W Forrest przestrzeń ma pomagać dziecku działać, myśleć, tworzyć, współpracować i stawać się
            coraz bardziej samodzielnym.
            <br />
            Dlatego nic nie znajduje się tutaj przypadkiem.
          </p>
        </div>
      </section>

      {/* 6. Program, który rośnie razem z dzieckiem */}
      <section id="program" style={{ paddingBottom: 65 }}>
        <div className="section-inner wide center reveal">
          <h2 className="big">Program, który rośnie razem z dzieckiem</h2>
          <p className="body-lg">
            Nie pracujemy z gotowymi podręcznikami. Stworzyliśmy własny program nauczania.
          </p>
          <p className="body-lg" style={{ marginTop: 12 }}>
            Jego fundament stanowią cztery światy:
          </p>
        </div>
        <div className="worlds reveal">
          <div className="world-card" style={{ background: "var(--clay)" }}>
            <h3>Język</h3>
          </div>
          <div className="world-card" style={{ background: "var(--cream-deep)" }}>
            <h3>Dom</h3>
          </div>
          <div
            className="world-card"
            style={{
              background: `linear-gradient(0deg, rgba(78,65,36,0.55), rgba(78,65,36,0.1)), url('/images/forrest/gotowe/program-swiat.jpg') center/cover`,
            }}
          >
            <h3 style={{ color: "var(--cream)" }}>Świat</h3>
          </div>
          <div className="world-card" style={{ background: "var(--green-light)" }}>
            <h3>Matematyka</h3>
          </div>
        </div>
        <div className="section-inner wide center reveal" style={{ marginTop: 36 }}>
          <p className="body-lg">Każdy tydzień poświęcony jest jednemu tematowi.</p>
        </div>
      </section>

      {/* 7. Forrest tworzymy razem */}
      <section id="rodzice">
        <div className="bunting-divider">
          <img src="/images/forrest/decor/bunting.png" alt="" />
        </div>
        <div className="split reveal">
          <div className="text-col">
            <h2 className="big">Forrest tworzymy razem</h2>
            <p className="body-lg">
              Dziecko nie przestaje być częścią swojej rodziny, kiedy przekracza próg przedszkola.
              Dlatego chcemy, żeby rodzice byli blisko tego, co dzieje się w Forrest.
            </p>
            <p className="body-lg" style={{ marginTop: 20 }}>
              Rozmawiamy. Pokazujemy postępy. Dzielimy się tym, co nas cieszy, ale również tym, co wymaga
              wspólnego działania.
            </p>
            <p className="body-lg" style={{ marginTop: 20 }}>
              Rodzice pojawiają się też w życiu przedszkola — podczas wydarzeń, koncertów i naszych
              wspólnych projektów.
            </p>
            <p className="body-lg" style={{ marginTop: 20 }}>
              Bo kiedy dom i przedszkole patrzą w tym samym kierunku, dziecko może iść swoją drogą
              znacznie pewniej.
            </p>
          </div>
          <div className="img-col">
            <img src="/images/forrest/gotowe/rodzice-razem.jpg" alt="Rodzice i dzieci na wspólnym wydarzeniu Forrest" />
          </div>
        </div>
      </section>

      {/* Dlaczego Forrest — sekcja dodatkowa, poza tekstem z briefu */}
      <section
        id="nazwa"
        style={{
          background: "var(--sage)",
          border: "2px solid var(--sage-deep)",
          borderRadius: 32,
          margin: "0 6vw 64px",
          maxWidth: "none",
          padding: "min(10vw,90px) 6vw",
        }}
      >
        <div className="dlaczego-row reveal" id="dlaczego-misona">
          <div className="dlaczego-text-header">
            <h2 className="big">Dlaczego Forrest?</h2>
          </div>
          <div className="dlaczego-img">
            <img
              src="/images/forrest/gotowe/dlaczego-forrest-1.jpg"
              alt="Wydarzenie w Forrest"
              style={{ borderRadius: 18, objectFit: "cover", height: 320, width: "100%" }}
            />
          </div>
          <div className="dlaczego-text-body">
            <p className="body-lg">
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
        </div>
        <div className="dlaczego-row reveal" style={{ marginTop: 56 }}>
          <div className="dlaczego-img">
            <img
              src="/images/forrest/gotowe/dlaczego-forrest-2.jpg"
              alt="Radość dzieci w Forrest"
              style={{ borderRadius: 18, objectFit: "cover", height: 320, width: "100%" }}
            />
          </div>
          <div className="dlaczego-text">
            <p
              className="body-lg"
              style={{ fontFamily: "var(--font-garamond), serif", fontStyle: "italic", fontSize: "1.3rem" }}
            >
              „Nie wygrywał dlatego, że był najlepszy.
              <br />
              Wygrywał dlatego, że nigdy nie przestał być sobą.”
            </p>
            <p className="body-lg" style={{ marginTop: 20 }}>
              To właśnie chcemy przekazać dzieciom.
              <br />
              Nie uczymy ich, jak być najlepszymi.
              <br />
              Uczymy je odkrywać, kim są.
            </p>
          </div>
        </div>
      </section>

      {/* Las, który uczy — sekcja dodatkowa, poza tekstem z briefu */}
      <section id="las" className="forest-section reveal">
        <div className="split" style={{ alignItems: "center" }}>
          <div>
            <h2 className="big" style={{ marginTop: 14 }}>
              Las, który uczy.
            </h2>
            <p className="body-lg" style={{ maxWidth: 640 }}>
              Nasz plac zabaw bardziej przypomina fragment lasu niż tradycyjne przedszkolne podwórko.
              Górka, kamienie, drzewa, patyki, piasek, tor wodny z pompą, liny, hamaki i równoważnie
              tworzą przestrzeń do swobodnej zabawy.
            </p>
            <p className="body-lg" style={{ maxWidth: 640, marginTop: 28 }}>
              Tutaj dzieci codziennie wspinają się, eksperymentują, budują, obserwują, planują i
              współpracują.
              <br />
              Dla nich to zabawa.
              <br />
              Dla nas – najlepsza lekcja samodzielności, odwagi i odkrywania świata.
            </p>
          </div>
          <div className="img-col">
            <img src="/images/forrest/gotowe/las-ktory-uczy.jpg" alt="Dzieci na placu zabaw wśród drzew" />
          </div>
        </div>
      </section>

      {/* CTA / KONTAKT */}
      <section id="kontakt" className="cta-section reveal">
        <div className="two-cards" style={{ alignItems: "stretch" }}>
          <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
            <h2 className="big">
              Każda wielka historia
              <br />
              zaczyna się od
              <br />
              pierwszego kroku.
            </h2>
            <p
              className="body-lg"
              style={{
                marginTop: 8,
                fontFamily: "var(--font-garamond), serif",
                fontStyle: "italic",
                fontSize: "1.3rem",
                color: "var(--ink)",
              }}
            >
              Być może kolejna zacznie się właśnie tutaj. Poznajmy się.
            </p>
            <div
              className="body-lg"
              style={{ marginTop: 32, display: "flex", flexDirection: "column", fontSize: "1.05rem" }}
            >
              <p style={{ margin: 0, padding: "24px 0" }}>
                <strong>Telefon:</strong>{" "}
                <a href="tel:+48692623327" style={{ color: "inherit" }}>
                  +48 692 623 327
                </a>
              </p>
              <p style={{ margin: 0, padding: "24px 0" }}>
                <strong>Email:</strong>{" "}
                <a href="mailto:forrest.przedszkole@gmail.com" style={{ color: "inherit" }}>
                  forrest.przedszkole@gmail.com
                </a>
              </p>
              <p style={{ margin: 0, padding: "24px 0" }}>
                <strong>Facebook:</strong>{" "}
                <a
                  href="https://www.facebook.com/forrestprzedszkole"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "inherit" }}
                >
                  facebook.com/forrestprzedszkole
                </a>
              </p>
            </div>
          </div>
          <div>
            <p style={{ margin: "0 0 18px", fontSize: "1.05rem" }}>
              <strong>Znajdziesz nas:</strong>
            </p>
            <p style={{ margin: "0 0 10px", fontSize: "1.02rem" }}>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Piaseczno,+Al.+Kalin+55"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "inherit" }}
              >
                Piaseczno, Al. Kalin 55
              </a>
            </p>
            <div style={{ borderRadius: 16, overflow: "hidden", boxShadow: "0 12px 32px rgba(0,0,0,0.12)" }}>
              <iframe
                src="https://www.google.com/maps?q=Piaseczno+Aleja+Kalin+55&output=embed"
                width="100%"
                height={220}
                style={{ border: 0, display: "block" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa – Piaseczno, Al. Kalin 55"
              ></iframe>
            </div>
            <p style={{ margin: "24px 0 10px", fontSize: "1.02rem" }}>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Wola+Go%C5%82kowska,+ul.+Piesza+22"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "inherit" }}
              >
                Wola Gołkowska, ul. Piesza 22
              </a>
            </p>
            <div style={{ borderRadius: 16, overflow: "hidden", boxShadow: "0 12px 32px rgba(0,0,0,0.12)" }}>
              <iframe
                src="https://www.google.com/maps?q=Wola+Go%C5%82kowska+Piesza+22&output=embed"
                width="100%"
                height={220}
                style={{ border: 0, display: "block" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa – Wola Gołkowska, ul. Piesza 22"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="logo-mark">
          <img src="/images/forrest/logo-forrest-icon_3.png" alt="Forrest" className="nav-logo-img" />
        </div>
        <div className="contact-links">
          <a href="#metoda">Metoda</a>
          <a href="#przestrzen">Przestrzeń</a>
          <a href="#program">Program</a>
          <a href="#">Copyright© web studio bynexo.pl</a>
        </div>
      </footer>
    </>
  );
}
