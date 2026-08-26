import type { Metadata } from "next";
import { PiasecznoPage } from "@/components/sections/piaseczno-page";

export const metadata: Metadata = {
  title: "Piaseczno — Przedszkole terapeutyczne",
  description:
    "Forrest Piaseczno — kameralne przedszkole terapeutyczne dla 12 dzieci. Metoda Krakowska, logopeda, psycholog i pedagog specjalny na miejscu.",
};

export default function Page() {
  return <PiasecznoPage />;
}
