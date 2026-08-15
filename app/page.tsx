import { SiteHeader } from "@/components/site-header/site-header";
import { HeroVideo } from "@/components/hero-video/hero-video";
import { DrogaSection } from "@/components/sections/droga-section";
import { HistoriaSection } from "@/components/sections/historia-section";
import { MetodaSection } from "@/components/sections/metoda-section";
import { DziecinstwoSection } from "@/components/sections/dziecinstwo-section";
import { PrzestrzenSection } from "@/components/sections/przestrzen-section";
import { ProgramSection } from "@/components/sections/program-section";
import { RodziceSection } from "@/components/sections/rodzice-section";
import { DlaczegoSection } from "@/components/sections/dlaczego-section";
import { LasSection } from "@/components/sections/las-section";
import { KontaktSection } from "@/components/sections/kontakt-section";
import { SiteFooter } from "@/components/site-footer/site-footer";

export default function Home() {
  return (
    <>
      <a href="#main" className="skip-link">
        Przejdź do treści
      </a>
      <SiteHeader />
      <HeroVideo />
      <main id="main">
        <DrogaSection />
        <HistoriaSection />
        <MetodaSection />
        <DziecinstwoSection />
        <PrzestrzenSection />
        <ProgramSection />
        <RodziceSection />
        <DlaczegoSection />
        <LasSection />
        <KontaktSection />
      </main>
      <SiteFooter />
    </>
  );
}
