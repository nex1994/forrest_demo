import { Reveal } from "@/components/reveal/reveal";

export function HistoriaSection() {
  return (
    <section id="historia" className="section">
      <Reveal className="split">
        <div className="split__text">
          <h2 className="section__title">
            Wszystko zaczęło się
            <br />
            od jednego chłopca
          </h2>
          <p className="section__lede">
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
        <div className="split__text">
          <p className="eyebrow">Kim jestem</p>
          <p className="section__lede">
            Jestem logopedą, pedagogiem specjalnym i neurodydaktykiem. Posiadam certyfikat terapeuty
            Metody Krakowskiej®, jestem diagnostą ADOS-2, trenerem FamilyLab Jespera Juula,
            certyfikowanym terapeutą ESDM oraz metodykiem nauczania języków obcych. Ukończyłam studia
            pedagogiczne na Uniwersytecie Warmińsko-Mazurskim oraz studia kierunkowe na Uniwersytecie
            Warszawskim.
          </p>
          <p className="section__lede">
            Od dwudziestu lat pracuję z dziećmi w wieku przedszkolnym i wczesnoszkolnym. Od dziesięciu
            lat razem z partnerem Darkiem oraz synami Gabrielem i Mieszkiem tworzymy Przedszkola
            Forrest.
          </p>
          <p className="section__lede">
            Najlepiej czuję się tam, gdzie nikt by mnie się nie spodziewał — na dywanie, siedząc razem z
            dziećmi w trakcie zabawy, bo właśnie stamtąd widać najwięcej. Uwielbiam też podróże — i to
            nie tylko te dalekie. Czasem najciekawsza wyprawa to ta do lasu, tuż za oknem przedszkola.
          </p>
          <p className="section__lede section__quote">
            Forrest — stworzony z marzeń, by spełniać marzenia.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
