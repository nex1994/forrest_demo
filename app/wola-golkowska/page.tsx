import type { Metadata } from "next";
import { WolaGolkowskaPage } from "@/components/sections/wola-golkowska-page";

export const metadata: Metadata = {
  title: "Wola Gołkowska — Przedszkole ogólnodostępne",
  description:
    "Forrest Wola Gołkowska — przedszkole ogólnodostępne i integracyjne, z leśnym placem zabaw jako codziennym miejscem nauki i zabawy.",
};

export default function Page() {
  return <WolaGolkowskaPage />;
}
