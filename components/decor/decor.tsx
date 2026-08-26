import Image from "next/image";

/// Autorskie akcenty graficzne Forrest — subtelne, niskie krycie, nigdy pełnoekranowe.
/// Patrz specyfikacja klienta, sekcja 5 "Autorskie elementy graficzne".

/// Listek — mikro-ornament, obok mniejszych nagłówków/etykiet.
export function Leaf({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`decor decor--leaf ${className}`.trim()}
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 18C4 9 9 4 18 4C18 13 13 18 4 18Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M4 18L14 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

/// Proporczyki — wykadrowane z key visual klientki (jedyne dozwolone proporczyki wg jej instrukcji).
export function Pennants({ className = "" }: { className?: string }) {
  return (
    <Image
      src="/images/forrest/decor/pennants-full.png"
      alt=""
      width={1588}
      height={518}
      className={`decor-pennants ${className}`.trim()}
      aria-hidden="true"
    />
  );
}

const CHARACTERS = {
  calf: { src: "/images/forrest/characters/calf-full.png", w: 565, h: 686 },
  mouse: { src: "/images/forrest/characters/mouse.png", w: 400, h: 470 },
  teddy_bear: { src: "/images/forrest/characters/teddy_bear.png", w: 471, h: 627 },
  bunny_denim: { src: "/images/forrest/characters/bunny_denim.png", w: 404, h: 657 },
  deer: { src: "/images/forrest/characters/deer.png", w: 427, h: 671 },
  giraffe: { src: "/images/forrest/characters/giraffe.png", w: 528, h: 872 },
  bear_ballerina: { src: "/images/forrest/characters/bear_ballerina.png", w: 432, h: 551 },
} as const;

/// Postać z key visual klientki — wykadrowana, niskie krycie, tylko jako akcent.
export function Character({
  name,
  className = "",
  width = 140,
}: {
  name: keyof typeof CHARACTERS;
  className?: string;
  width?: number;
}) {
  const c = CHARACTERS[name];
  const height = Math.round((c.h / c.w) * width);
  return (
    <Image
      src={c.src}
      alt=""
      width={width}
      height={height}
      className={`decor-character ${className}`.trim()}
      aria-hidden="true"
    />
  );
}

/// Miękka plama akwareli w tle — czysty CSS, bez pliku graficznego.
export function WatercolorBlob({ className = "" }: { className?: string }) {
  return <div className={`decor-blob ${className}`.trim()} aria-hidden="true" />;
}
