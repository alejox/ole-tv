"use client";

import { useEffect } from "react";

/**
 * Guarantees deep links to landing sections (`/#planes`, `/#faq`, …) land on the section.
 *
 * The browser's own scroll-to-fragment races the hero images: it fires before they decode,
 * and the layout shift leaves the reader short of the target. That path matters now that the
 * header renders on /revendedores too, so every nav link there is a cross-page `/#id`.
 *
 * Re-issues the jump after mount and again after `load`. `behavior` must be `"instant"` — the
 * default `"auto"` defers to the CSS `scroll-behavior` value, so it would silently start
 * animating again if smooth scrolling ever comes back to globals.css.
 * `scroll-padding-top` in globals.css keeps the fixed header clear.
 */
export function HashScroll() {
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1));
    if (!id) return;

    const jump = () => {
      document.getElementById(id)?.scrollIntoView({ behavior: "instant", block: "start" });
    };

    jump();

    if (document.readyState === "complete") return;
    window.addEventListener("load", jump, { once: true });
    return () => window.removeEventListener("load", jump);
  }, []);

  return null;
}
