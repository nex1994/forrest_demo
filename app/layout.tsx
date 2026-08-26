import type { Metadata, Viewport } from "next";
import { Abril_Fatface, Alex_Brush, Bodoni_Moda, Lora, Sacramento } from "next/font/google";
import { StructuredData } from "@/components/structured-data/structured-data";
import { CallToAction } from "@/components/call-to-action/call-to-action";
import "./globals.scss";

// TODO: potwierdzić docelową domenę przed wdrożeniem produkcyjnym.
const SITE_URL = "https://forrest.edu.pl";
const TITLE = "Forrest — Przedszkole Metody Krakowskiej";
const DESCRIPTION =
  "Forrest — przedszkole w Piasecznie i Woli Gołkowskiej. Metoda Krakowska, las jako plac zabaw i program, który rośnie razem z dzieckiem.";

// Abril Fatface — duże nagłówki displayowe (wg dokumentu fontów klientki)
const abrilFatface = Abril_Fatface({
  variable: "--font-abril",
  subsets: ["latin", "latin-ext"],
  weight: "400",
});

// Bodoni Moda — podtytuły, nawigacja, cytaty (elegancki serif o wysokim kontraście)
const bodoniModa = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin", "latin-ext"],
  style: ["normal", "italic"],
  weight: ["500", "600", "700"],
});

// Lora — tekst akapitowy (lżejszy serif tekstowy, wygodny w dłuższych akapitach)
const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin", "latin-ext"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700"],
});

// Sacramento — duży akcent skryptowy (np. powtórzenie nagłówka w hero)
const sacramento = Sacramento({
  variable: "--font-sacramento",
  subsets: ["latin", "latin-ext"],
  weight: "400",
});

// Alex Brush — mniejszy, swobodniejszy akcent skryptowy na pojedyncze słowa
const alexBrush = Alex_Brush({
  variable: "--font-alex-brush",
  subsets: ["latin", "latin-ext"],
  weight: "400",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s — Forrest",
  },
  description: DESCRIPTION,
  keywords: [
    "przedszkole Piaseczno",
    "przedszkole Wola Gołkowska",
    "metoda krakowska",
    "Naturalna Pedagogika Rozwoju",
    "przedszkole niepubliczne",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: SITE_URL,
    siteName: "Forrest — Przedszkole Metody Krakowskiej",
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: "/images/forrest/hero.jpg", width: 1200, height: 630, alt: TITLE }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/images/forrest/hero.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pl"
      className={`${abrilFatface.variable} ${bodoniModa.variable} ${lora.variable} ${sacramento.variable} ${alexBrush.variable} antialiased`}
    >
      <body>
        <StructuredData />
        {children}
        <CallToAction />
      </body>
    </html>
  );
}
