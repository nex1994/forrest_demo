import type { Metadata } from "next";
import { PlacowkaPage } from "@/components/sections/placowka-page";

export const metadata: Metadata = {
  title: "Piaseczno — Przedszkole terapeutyczne",
  description:
    "Forrest Piaseczno — kameralne przedszkole terapeutyczne dla 12 dzieci. Metoda Krakowska, logopeda, psycholog i pedagog specjalny na miejscu.",
};

export default function PiasecznoPage() {
  return (
    <PlacowkaPage
      heroImage="/images/forrest/gotowe/piaseczno-hero-real.jpg"
      heroAlt="Sala przedszkolna w placówce Piaseczno"
      name="Forrest Piaseczno"
      tagline="Kameralne przedszkole terapeutyczne, w którym każde dziecko ma swój indywidualny plan rozwoju."
      gallery={[
        { src: "/images/forrest/gotowe/alpaka-real.jpg", alt: "Dziecko głaszczące osiołka podczas zajęć ze zwierzętami" },
        { src: "/images/forrest/gotowe/zajecia-real.jpg", alt: "Zajęcia indywidualne przy stoliku" },
      ]}
      facts={[
        { label: "Profil", value: "Przedszkole terapeutyczne" },
        { label: "Liczba dzieci", value: "12 dzieci" },
        { label: "Plac zabaw", value: "Kameralny ogród — szczegóły wkrótce", toConfirm: true },
        { label: "Adres", value: "Al. Kalin 55, Piaseczno" },
        { label: "Godziny pracy", value: "do potwierdzenia", toConfirm: true },
        { label: "Grupy wiekowe", value: "do potwierdzenia", toConfirm: true },
        { label: "Czesne, wpisowe, wyżywienie", value: "do potwierdzenia", toConfirm: true },
        {
          label: "Kadra",
          value: "Zespół poznasz podczas wizyty — nie publikujemy imiennych profili nauczycieli.",
        },
      ]}
      extraBlocks={[
        {
          title: "Metoda Krakowska",
          paragraphs: [
            "Jako pierwsze przedszkole w Polsce pracujemy w oparciu o Metodę Krakowską — neurobiologiczną terapię, która pozwala dzieciom uczyć się czytać naturalnie i wcześnie, poprzez rozumienie, a nie mechaniczne powtarzanie. To metoda o potwierdzonej skuteczności, na co dzień prowadzona przez certyfikowanego terapeutę.",
          ],
        },
        {
          title: "Wsparcie na miejscu",
          paragraphs: [
            "W Forrest logopeda, psycholog i pedagog specjalny to nie zewnętrzni konsultanci, tylko część codziennego życia przedszkola. Obserwujemy dzieci na bieżąco i reagujemy, zanim mała trudność stanie się dużym problemem — a integracja sensoryczna jest naturalną częścią naszych zajęć, nie dodatkiem.",
          ],
        },
        {
          title: "Codzienność pełna odkryć",
          paragraphs: [
            "Alpaki, rytmika, sensoplastyka, koncerty, imprezy integracyjne — u nas to nie dodatki, tylko część codzienności. Każdy występ na scenie jest dla dziecka małym egzaminem z odwagi: uczy radzenia sobie z tremą, współpracy i wiary we własne możliwości. Nie oczekujemy perfekcji — liczy się radość i doświadczenie.",
          ],
        },
      ]}
    />
  );
}
