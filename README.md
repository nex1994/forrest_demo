# Forrest — strona przedszkoli

Strona wizytówka dwóch przedszkoli Forrest — **Piaseczno** (przedszkole terapeutyczne)
i **Wola Gołkowska** (przedszkole ogólnodostępne i integracyjne). Statyczna strona
marketingowa: jedna strona główna złożona z sekcji + dwie podstrony placówek.

**Bez bazy danych, bez API, bez CMS-a i bez formularzy** — cała treść jest w repozytorium,
w komponentach React i w plikach danych w `lib/`. Zmiana treści = zmiana w kodzie i wdrożenie.

Język strony: polski (`<html lang="pl">`). Cały kod, nazwy plików i komentarze też są po polsku.

---

## Spis treści

- [Stack technologiczny](#stack-technologiczny)
- [Wymagania](#wymagania)
- [Uruchomienie](#uruchomienie)
- [Skrypty](#skrypty)
- [Struktura projektu](#struktura-projektu)
- [Trasy i sekcje](#trasy-i-sekcje)
- [Dane — jedno źródło prawdy](#dane--jedno-źródło-prawdy)
- [Style i system designu](#style-i-system-designu)
- [Komponenty](#komponenty)
- [SEO i dane strukturalne](#seo-i-dane-strukturalne)
- [Dostępność](#dostępność)
- [Gdzie co zmienić](#gdzie-co-zmienić)
- [Konwencje](#konwencje)
- [Przed wdrożeniem](#przed-wdrożeniem)
- [Wdrożenie](#wdrożenie)
- [Typowe problemy](#typowe-problemy)

---

## Stack technologiczny

| Warstwa | Technologia | Wersja | Uwagi |
|---|---|---|---|
| Framework | [Next.js](https://nextjs.org) — App Router | `16.3.0` | Server Components domyślnie, `"use client"` tylko tam, gdzie potrzeba |
| UI | React / React DOM | `19.2.8` | |
| Język | TypeScript | `^5` | `strict: true`, alias `@/*` → katalog główny |
| Style | [Sass](https://sass-lang.com) (SCSS, składnia `@use`) | `^1.102` | Zwykłe klasy CSS w duchu BEM — **bez** CSS Modules, Tailwinda i CSS-in-JS |
| Fonty | `next/font/google` | — | Abril Fatface, Bodoni Moda, Lora, Sacramento, Alex Brush |
| Obrazy | `next/image` | — | `sharp` w buildzie (`ignoredBuiltDependencies` w `pnpm-workspace.yaml`) |
| Lint | ESLint 9 + `eslint-config-next` (flat config) | `^9` | `core-web-vitals` + `typescript` |
| Menedżer pakietów | pnpm | `10.23.0` | wymuszony polem `packageManager` |

Czego **nie ma** w projekcie (świadomie): bazy danych, backendu, route handlerów, biblioteki
stanu, biblioteki komponentów, biblioteki animacji, testów, i18n, analityki.
Animacje są w czystym CSS, wyzwalane jednym `IntersectionObserver`.

---

## Wymagania

- **Node.js 20+** (projekt rozwijany na 20.18)
- **pnpm 10** — `corepack enable && corepack prepare pnpm@10.23.0 --activate`

---

## Uruchomienie

```bash
git clone <repo>
cd forrest_demo
pnpm install
pnpm dev            # http://localhost:3000
```

Build produkcyjny lokalnie:

```bash
pnpm build          # kompilacja + sprawdzenie typów
pnpm start          # serwer produkcyjny na :3000
```

Inny port: `pnpm dev --port 4000`.

---

## Skrypty

| Skrypt | Co robi |
|---|---|
| `pnpm dev` | serwer deweloperski z hot reloadem |
| `pnpm build` | build produkcyjny; uruchamia też sprawdzenie typów TypeScript |
| `pnpm start` | serwuje wynik `pnpm build` (wymaga wcześniejszego builda) |
| `pnpm lint` | ESLint (flat config z `eslint.config.mjs`) |

Testów nie ma — weryfikacja to `pnpm build` + `pnpm lint` + przegląd strony w przeglądarce.

---

## Struktura projektu

```
app/                          trasy (App Router)
  layout.tsx                  <html>, fonty, metadane, powłoka: nagłówek + <main> + stopka
  page.tsx                    strona główna — wyłącznie składanie sekcji, zero treści
  piaseczno/page.tsx          podstrona placówki Piaseczno
  wola-golkowska/page.tsx     podstrona placówki Wola Gołkowska
  globals.scss                jedyny punkt wejścia stylów (same @use)
  favicon.ico

components/
  sections/                   sekcje strony głównej — jedna sekcja = jeden plik
  placowka/                   części podstron wspólne dla obu placówek
    placowka-hero.tsx         hero podstrony (zdjęcie + tagline z lib/placowki.ts)
    czesne-list.tsx           lista opłat
    wspolne-sekcje.tsx        sekcje o identycznej treści w obu placówkach
  site-header/                nagłówek: nawigacja + logotypy placówek
  site-footer/                stopka: nawigacja, kontakt, pasek placówek
  hero-video/                 wideo w hero z przełącznikiem dźwięku
  expandable/                 zwijana treść („Czytaj więcej")
  reveal/                     wjazd elementu w viewport (IntersectionObserver)
  decor/                      bohaterowie i elementy dekoracyjne
  structured-data/            JSON-LD (schema.org Preschool)

lib/
  navigation.ts               zakładki nawigacji + logika przewijania do sekcji
  placowki.ts                 dane obu placówek (adres, godziny, czesne, metadane, mapy)
  site.ts                     domena, nazwa, opisy, dane kontaktowe

styles/
  abstracts/_variables.scss   paleta, fonty, breakpointy, cienie
  abstracts/_mixins.scss      mixiny (m.in. media queries)
  base/_reset.scss            reset + eksport palety do :root jako custom properties
  base/_typography.scss       skala typograficzna
  components/                 _nav _hero _cards _page _decor _placowki _expandable
  layout/_section.scss        wspólny rytm i odstępy sekcji

public/
  images/forrest/             logotypy, hero, tekstura papieru
  images/forrest/gotowe/      zdjęcia z placówek (25 plików)
  images/forrest/characters/  bohaterowie Dziennika (4 postacie)
  videos/hero.mp4             wideo w hero (~48 MB)
```

Uwaga na wagę repozytorium: `public/videos` ma ok. 48 MB, `public/images` ok. 18 MB.

---

## Trasy i sekcje

| Trasa | Plik | Opis |
|---|---|---|
| `/` | `app/page.tsx` | strona główna — wszystkie sekcje |
| `/piaseczno` | `app/piaseczno/page.tsx` | placówka terapeutyczna |
| `/wola-golkowska` | `app/wola-golkowska/page.tsx` | placówka ogólnodostępna |

Sekcje strony głównej, w kolejności renderowania (`id` = kotwica nawigacji):

| Komponent | `id` | Zakładka w nawigacji |
|---|---|---|
| `HeroVideo` | — | — |
| `DrogaSection` | `o-nas` | O nas |
| `HistoriaSection` | `historia` | (bez zakładki) |
| `MetodaSection` | `metoda` | Metoda |
| `PrzestrzenSection` | `przestrzen` | Przestrzeń |
| `DziecinstwoSection` | `bohaterowie` | Bohaterowie |
| `ProgramSection` | `program` | Program |
| `RodziceSection` | `zespol` | Zespół |
| `ChwileSection` | `chwile` | Chwile |
| `KontaktSection` | `kontakt` | Kontakt |

**Nawigacja.** Wszystkie sekcje są na stronie głównej, więc z podstrony placówki zakładka
musi prowadzić do `/#id`, a nie do gołej kotwicy — wylicza to `navHref()` z `lib/navigation.ts`.
Przewijanie robimy jawnie (`scrollIntoView`), bo natywne skakanie do fragmentu bywa zawodne
przy długim layoucie, wideo w hero i leniwie ładowanych obrazach. Klik przejmujemy **tylko**
wtedy, gdy sekcja faktycznie istnieje na bieżącej stronie.

---

## Dane — jedno źródło prawdy

Fakty, które powtarzają się w wielu miejscach, są wpisane dokładnie raz:

- **`lib/site.ts`** — `SITE_URL`, `SITE_NAME`, opisy, `OG_IMAGE`, `KONTAKT`
  (telefon w trzech postaciach: do wyświetlenia, do `tel:`, do JSON-LD w E.164).
  Zasila metadane w `layout.tsx`, sekcję Kontakt i dane strukturalne.
- **`lib/placowki.ts`** — typ `Placowka` i dwa obiekty (`piaseczno`, `wolaGolkowska`):
  slug, nazwa, logo, adres, godziny, czesne, metadane podstrony, hero, tagline.
  Eksportuje też `PLACOWKI` (kolejność kanoniczna), `PLACOWKI_W_NAWIGACJI` (odwrotna,
  zastana kolejność logotypów) oraz helpery `adresLabel()`, `mapEmbedSrc()`,
  `mapDirectionsHref()`, `placowkaHref()` — mapa i trasa pytają o dokładnie ten sam adres,
  który widać na stronie.
- **`lib/navigation.ts`** — `NAV_LINKS` (nagłówek i stopka naraz) + logika przewijania.

---

## Style i system designu

Wszystkie style są globalne i importowane w jednym miejscu — `app/globals.scss`.
Nie dodajemy CSS Modules ani stylów inline; nowy blok = nowy plik częściowy w `styles/`
plus jedna linia `@use` w `globals.scss`.

**Paleta** (`styles/abstracts/_variables.scss`) jest mapą Sass; `styles/base/_reset.scss`
przepisuje każdy wpis na custom property w `:root` (`--cream`, `--ink`, …), więc kolor da
się użyć zarówno w SCSS (`color("ink")`), jak i w czystym CSS.

- Tła: `cream` `#FAF2E7`, `cream-deep`, `cream-translucent`, `cream-cool`
- Tekst: `ink` `#4E4124`, `ink-soft`, `sage-deep`, `line`
- Akcenty: `green-light` `#A8D89A`, `green-deep` `#4A7530` (przyciemniona do WCAG AA 4.88:1
  na kremie), `pink` `#F498C1` (zaznaczenie tekstu, obrys fokusu)

**Fonty** ładuje `next/font/google` w `layout.tsx` i wystawia jako custom properties:

| Rola | Krój | Zmienna |
|---|---|---|
| Duże nagłówki (H1/H2, hero) | Abril Fatface | `--font-abril` |
| Podtytuły (H3), nawigacja, cytaty | Bodoni Moda | `--font-bodoni` |
| Akapity | Lora | `--font-lora` |
| Duży akcent skryptowy | Sacramento | `--font-sacramento` |
| Mniejszy akcent skryptowy | Alex Brush | `--font-alex-brush` |

Jedyne miejsce bez szeryfów to imiona bohaterów — celowo krój systemowy, żeby nie dokładać
pobierania fontu dla czterech podpisów.

---

## Komponenty

- **`Reveal`** (klient) — dodaje klasę `is-visible`, gdy element wjedzie w viewport
  (`IntersectionObserver`, próg 0.12). Sama animacja jest w CSS, więc bez JS treść i tak
  jest w pełni widoczna.
- **`HeroVideo`** (klient) — wideo w hero, domyślnie wyciszone i autoodtwarzane,
  z przełącznikiem dźwięku zsynchronizowanym ze stanem elementu `<video>`.
- **`Expandable`** (klient) — zwija dodatkową treść za CTA „Czytaj więcej”.
- **`Character` / dekory** (serwer) — bohaterowie Dziennika; mapowanie postać↔imię jest
  potwierdzone przez klientkę i **nie należy go zgadywać** z wyglądu grafiki.
- **`StructuredData`** (serwer) — JSON-LD wyliczane z `lib/placowki.ts` i `lib/site.ts`.

Reszta to komponenty serwerowe. `"use client"` dodajemy wyłącznie tam, gdzie potrzebny jest
stan lub API przeglądarki.

---

## SEO i dane strukturalne

- Metadane w `app/layout.tsx`: `metadataBase`, tytuł z szablonem `%s — Forrest`, opis,
  słowa kluczowe, `canonical`, `robots`, Open Graph (`pl_PL`, obraz 1200×630)
  i Twitter Card. Podstrony placówek nadpisują `title`/`description` z `lib/placowki.ts`.
- `components/structured-data/structured-data.tsx` renderuje JSON-LD typu
  `schema.org/Preschool` z telefonem, e-mailem, Facebookiem i obiema lokalizacjami —
  z tych samych danych, które widać na stronie, więc adresy nie mogą się rozjechać.

---

## Dostępność

- Link „Przejdź do treści” (`.skip-link`) jako pierwszy element `<body>`.
- Kolory tekstu dobrane pod WCAG AA na kremowym tle (`green-deep` przyciemniona celowo).
- Obrazy dekoracyjne mają puste `alt`, zdjęcia treściowe — opisowe.
- Animacje `Reveal` są wyłącznie wizualne; brak JS nie ukrywa treści.
- `viewport` z `viewportFit: "cover"` — układ respektuje safe-area na urządzeniach z wcięciem.

---

## Gdzie co zmienić

| Zmiana | Plik |
|---|---|
| Adres, godziny, czesne, metadane, hero podstrony placówki | `lib/placowki.ts` |
| Telefon, e-mail, Facebook, domena, opis strony, obraz OG | `lib/site.ts` |
| Zakładki w nawigacji (nagłówek i stopka naraz) | `lib/navigation.ts` |
| Treść sekcji strony głównej | `components/sections/<nazwa>-section.tsx` |
| Kolejność sekcji na stronie głównej | `app/page.tsx` |
| Treść podstrony placówki | `app/<slug>/page.tsx` |
| Treść wspólna dla obu placówek | `components/placowka/wspolne-sekcje.tsx` |
| Kolory, fonty, cienie, breakpointy | `styles/abstracts/_variables.scss` |
| Odstępy i rytm sekcji | `styles/layout/_section.scss` |
| Zdjęcia, logotypy, wideo | `public/images/forrest/`, `public/videos/` |

### Dodanie nowej sekcji na stronie głównej

1. Nowy plik `components/sections/<nazwa>-section.tsx` z `<section id="…" className="section">`.
2. Wstawienie komponentu w `app/page.tsx` we właściwym miejscu kolejności.
3. Jeśli sekcja ma mieć zakładkę — wpis `{ id, label }` w `NAV_LINKS` (`lib/navigation.ts`);
   `id` musi być identyczne z `id` sekcji.

---

## Konwencje

- Kotwica sekcji (`id`) jest zarazem celem zakładki z `NAV_LINKS` — zmiana `id` wymaga
  zmiany w obu miejscach.
- Odstępy sekcji ustawia się klasą (`section--spaced-top`, `section--center`,
  `section--after-subpage-hero`), **nigdy** regułą na `#id`.
- Fakt wpisujemy raz — do `lib/`; komponent go tylko czyta.
- `app/page.tsx` składa sekcje i nie zawiera treści.
- Komentarze wyjaśniają *dlaczego*, nie *co* — zwłaszcza tam, gdzie rozwiązanie jest
  nieoczywiste (przewijanie, kolejność logotypów, mapowanie bohaterów).
- Commity w konwencji Conventional Commits.
- `AGENTS.md` w katalogu głównym jest generowany przez `next dev` — jeśli pojawi się
  w diffie, commitujemy go razem ze zmianą, zamiast kasować.

---

## Przed wdrożeniem

1. **Ustawić docelową domenę** w `lib/site.ts` (`SITE_URL`) — teraz jest
   `https://forrest.edu.pl` z komentarzem `TODO`. Wpływa na metadane Open Graph,
   adres kanoniczny i dane strukturalne JSON-LD.
2. **Podmieniając logo, zmienić nazwę pliku**, nie tylko jego zawartość — Next serwuje
   `/_next/image` z nagłówkiem `immutable`, więc przeglądarki zatrzymają starą wersję.
3. Sprawdzić aktualność czesnego i godzin w `lib/placowki.ts` (obecne wpisy odnoszą się
   do roku szkolnego 2027/2028).
4. `pnpm build && pnpm lint` — bez błędów.

---

## Wdrożenie

Zwykła aplikacja Next.js w trybie Node (`pnpm build` → `pnpm start`), bez zmiennych
środowiskowych i bez usług zewnętrznych. Domyślny cel to Vercel (wykrywa pnpm z
`packageManager`); każdy host z Node 20+ też zadziała — wystarczy uruchomić `pnpm start`
za reverse proxy.

`next.config.ts` jest pusty — konfiguracji domyślnych nie nadpisujemy.

Jedyne wywołanie zewnętrzne na stronie to osadzona mapa Google (`<iframe>` z
`mapEmbedSrc()`) — bez klucza API.

---

## Typowe problemy

| Objaw | Przyczyna / rozwiązanie |
|---|---|
| „Unsupported engine” albo dziwne błędy instalacji | inna wersja pnpm — `corepack prepare pnpm@10.23.0 --activate` |
| Zakładki nie działają na `/piaseczno` | link musi iść przez `navHref()`, nie przez gołe `#id` |
| Zmiana logo niewidoczna po wdrożeniu | cache `/_next/image` — trzeba zmienić nazwę pliku |
| Nowa sekcja nie ma odstępu od poprzedniej | brak klasy modyfikatora (`section--spaced-top`) |
| Nowy plik SCSS nie działa | brak `@use` w `app/globals.scss` |
