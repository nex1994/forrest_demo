import type { Metadata } from "next";
import { EB_Garamond, Montserrat } from "next/font/google";
import "./globals.css";

const ebGaramond = EB_Garamond({
  variable: "--font-garamond",
  subsets: ["latin", "latin-ext"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Forrest — Przedszkole Metody Krakowskiej",
  description:
    "Forrest — przedszkole w Piasecznie i Woli Gołkowskiej. Metoda Krakowska, las jako plac zabaw i program, który rośnie razem z dzieckiem.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pl"
      className={`${ebGaramond.variable} ${montserrat.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
