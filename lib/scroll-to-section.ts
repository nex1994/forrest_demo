import type { MouseEvent } from "react";

/// Klik w link kotwicowy (#id) często nie przewijał strony wcale — natywne
/// przewijanie do fragmentu na tej stronie jest zawodne (długi layout, wideo
/// w hero, obrazy ładowane leniwie). Przewijamy więc jawnie przez JS zamiast
/// polegać na domyślnym zachowaniu przeglądarki.
export function scrollToHashTarget(hash: string, behavior: ScrollBehavior = "smooth") {
  const id = hash.slice(1);
  if (!id) {
    window.scrollTo({ top: 0, behavior });
    return;
  }
  document.getElementById(id)?.scrollIntoView({ behavior, block: "start" });
}

export function handleHashLinkClick(event: MouseEvent<HTMLAnchorElement>, hash: string) {
  if (!hash.startsWith("#")) return;
  event.preventDefault();
  scrollToHashTarget(hash, "smooth");
  history.pushState(null, "", hash);
}
