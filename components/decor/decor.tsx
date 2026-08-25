import Image from "next/image";

/// Autorskie akcenty graficzne Forrest — subtelne, niskie krycie, nigdy pełnoekranowe.
/// Patrz specyfikacja klienta, sekcja 5 "Autorskie elementy graficzne".

export function Bow({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`decor decor--bow ${className}`.trim()}
      width="46"
      height="30"
      viewBox="0 0 46 30"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M23 15C23 15 19 4 10 4C4.5 4 2 8 2 11.5C2 16 6.5 18.5 12 17C17 15.6 23 15 23 15Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M23 15C23 15 27 4 36 4C41.5 4 44 8 44 11.5C44 16 39.5 18.5 34 17C29 15.6 23 15 23 15Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <circle cx="23" cy="15" r="3" fill="currentColor" />
      <path d="M20 17L16 27M26 17L30 27" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function TreeMark({
  className = "",
  color,
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg
      className={`decor decor--tree ${className}`.trim()}
      style={color ? { color } : undefined}
      width="30"
      height="34"
      viewBox="0 0 30 34"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M15 2L23 13H19L26 22H20.5L15 30M15 2L7 13H11L4 22H9.5L15 30M15 30V33"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
}

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

/// Cienki pasek w romby — separator na przejściu między zakładkami.
export function DiamondDivider({ className = "" }: { className?: string }) {
  return <div className={`decor-divider ${className}`.trim()} role="presentation" />;
}

/// Miękka plama akwareli w tle — czysty CSS, bez pliku graficznego.
export function WatercolorBlob({ className = "" }: { className?: string }) {
  return <div className={`decor-blob ${className}`.trim()} aria-hidden="true" />;
}
