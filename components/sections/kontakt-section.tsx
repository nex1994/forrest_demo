import { Reveal } from "@/components/reveal/reveal";

const LOCATIONS = [
  {
    label: "Piaseczno, Al. Kalin 55",
    href: "https://www.google.com/maps/dir/?api=1&destination=Piaseczno,+Al.+Kalin+55",
    mapSrc: "https://www.google.com/maps?q=Piaseczno+Aleja+Kalin+55&output=embed",
    title: "Mapa – Piaseczno, Al. Kalin 55",
  },
  {
    label: "Wola Gołkowska, ul. Piesza 22",
    href: "https://www.google.com/maps/dir/?api=1&destination=Wola+Go%C5%82kowska,+ul.+Piesza+22",
    mapSrc: "https://www.google.com/maps?q=Wola+Go%C5%82kowska+Piesza+22&output=embed",
    title: "Mapa – Wola Gołkowska, ul. Piesza 22",
  },
];

export function KontaktSection() {
  return (
    <section id="kontakt" className="section">
      <Reveal className="grid--2col">
        <div>
          <h2 className="section__title">
            Każda wielka historia
            <br />
            zaczyna się od
            <br />
            pierwszego kroku.
          </h2>
          <p className="section__lede section__quote contact__quote">
            Być może kolejna zacznie się właśnie tutaj. Poznajmy się.
          </p>
          <ul className="contact__methods">
            <li className="contact__method">
              <strong>Telefon:</strong> <a href="tel:+48692623327">+48 692 623 327</a>
            </li>
            <li className="contact__method">
              <strong>Email:</strong>{" "}
              <a href="mailto:forrest.przedszkole@gmail.com">forrest.przedszkole@gmail.com</a>
            </li>
            <li className="contact__method">
              <strong>Facebook:</strong>{" "}
              <a
                href="https://www.facebook.com/forrestprzedszkole"
                target="_blank"
                rel="noopener noreferrer"
              >
                facebook.com/forrestprzedszkole
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="contact__locations-label">
            <strong>Znajdziesz nas:</strong>
          </p>
          {LOCATIONS.map((loc) => (
            <div key={loc.label} className="contact__location">
              <a
                className="contact__address"
                href={loc.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {loc.label}
              </a>
              <div className="contact__map">
                <iframe
                  src={loc.mapSrc}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={loc.title}
                />
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
