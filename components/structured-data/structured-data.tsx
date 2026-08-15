const STRUCTURED_DATA = {
  "@context": "https://schema.org",
  "@type": "Preschool",
  name: "Forrest — Przedszkole Metody Krakowskiej",
  description:
    "Przedszkole Metody Krakowskiej w Piasecznie i Woli Gołkowskiej. Naturalna Pedagogika Rozwoju®, las jako plac zabaw i program, który rośnie razem z dzieckiem.",
  // TODO: potwierdzić docelową domenę przed wdrożeniem.
  url: "https://forrest.edu.pl",
  telephone: "+48692623327",
  email: "forrest.przedszkole@gmail.com",
  sameAs: ["https://www.facebook.com/forrestprzedszkole"],
  location: [
    {
      "@type": "Place",
      name: "Forrest Piaseczno",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Al. Kalin 55",
        addressLocality: "Piaseczno",
        addressCountry: "PL",
      },
    },
    {
      "@type": "Place",
      name: "Forrest Wola Gołkowska",
      address: {
        "@type": "PostalAddress",
        streetAddress: "ul. Piesza 22",
        addressLocality: "Wola Gołkowska",
        addressCountry: "PL",
      },
    },
  ],
};

export function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(STRUCTURED_DATA) }}
    />
  );
}
