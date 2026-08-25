import Image from "next/image";
import { Reveal } from "@/components/reveal/reveal";

export function QuoteBanner() {
  return (
    <section className="quote-banner">
      <Reveal className="quote-banner__inner">
        <p className="quote-banner__text">
          „Nie budujemy idealnego przedszkola.
          <br />
          Budujemy dzieciństwo.”
        </p>
        <Image
          src="/images/forrest/logo-forrest-icon_3.png"
          alt="Forrest"
          width={900}
          height={578}
          className="quote-banner__logo"
        />
      </Reveal>
    </section>
  );
}
