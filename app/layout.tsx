import type { Metadata, Viewport } from "next";
import { EB_Garamond, Montserrat } from "next/font/google";
import { StructuredData } from "@/components/structured-data/structured-data";
import { CallToAction } from "@/components/call-to-action/call-to-action";
import "./globals.scss";

// TODO: potwierdzić docelową domenę przed wdrożeniem produkcyjnym.
const SITE_URL = "https://forrest.edu.pl";
const TITLE = "Forrest — Przedszkole Metody Krakowskiej";
const DESCRIPTION =
  "Forrest — przedszkole w Piasecznie i Woli Gołkowskiej. Metoda Krakowska, las jako plac zabaw i program, który rośnie razem z dzieckiem.";

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
      className={`${ebGaramond.variable} ${montserrat.variable} antialiased`}
    >
      <body>
        <StructuredData />
        {children}
        <CallToAction />
      </body>
    </html>
  );
}
