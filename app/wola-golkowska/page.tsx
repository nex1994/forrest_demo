import type { Metadata } from "next";
import { PlacowkaPage } from "@/components/sections/placowka-page";

export const metadata: Metadata = {
  title: "Wola Gołkowska — Przedszkole ogólnodostępne",
  description:
    "Forrest Wola Gołkowska — przedszkole ogólnodostępne i integracyjne dla 50 dzieci, z leśnym placem zabaw jako codziennym miejscem nauki i zabawy.",
};

export default function WolaGolkowskaPage() {
  return (
    <PlacowkaPage
      heroImage="/images/forrest/gotowe/wola-1-real.jpg"
      heroAlt="Leśny plac zabaw w placówce Wola Gołkowska"
      name="Forrest Wola Gołkowska"
      tagline="Przedszkole ogólnodostępne i integracyjne, w którym plac zabaw to prawdziwy kawałek lasu."
      gallery={[
        { src: "/images/forrest/gotowe/wola-2-real.jpg", alt: "Zajęcia plastyczne na dywanie" },
        { src: "/images/forrest/gotowe/wola-3-real.jpg", alt: "Przedstawienie na scenie w kolorowych strojach" },
        { src: "/images/forrest/gotowe/wola-4-real.jpg", alt: "Dzieci na zajęciach z pieczywa" },
      ]}
      facts={[
        { label: "Profil", value: "Przedszkole ogólnodostępne / integracyjne" },
        { label: "Liczba dzieci", value: "50 dzieci" },
        { label: "Plac zabaw", value: "Leśny plac zabaw" },
        { label: "Adres", value: "ul. Piesza 22, Wola Gołkowska" },
        { label: "Godziny pracy", value: "do potwierdzenia", toConfirm: true },
        { label: "Grupy wiekowe", value: "do potwierdzenia", toConfirm: true },
        { label: "Czesne, wpisowe, wyżywienie", value: "do potwierdzenia", toConfirm: true },
        {
          label: "Kadra",
          value: "Zespół poznasz podczas wizyty — nie publikujemy imiennych profili nauczycieli.",
        },
      ]}
    />
  );
}
