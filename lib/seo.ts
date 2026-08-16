/** 1200x630 — the size Google, WhatsApp and X all crop cleanly. */
export const OG_IMAGE = {
  url: "/assets/img/og-oleada.jpg",
  width: 1200,
  height: 630,
  alt: "Oleada TV, streaming IPTV con canales en vivo, películas y series",
};

/**
 * Next replaces the parent `openGraph` object wholesale instead of merging field by field.
 * Any route that declares its own `openGraph` must spread these defaults, or it silently
 * drops og:image, og:site_name, og:locale and og:type from that page only.
 *
 * Deliberately not `as const`: Next types `openGraph.images` as a mutable array, so a
 * readonly tuple fails to assign.
 */
export const OPEN_GRAPH_DEFAULTS = {
  siteName: "Oleada TV",
  /** Region-wide Spanish, not es_CO: the service and its distributors span Latin America. */
  locale: "es_LA",
  type: "website" as const,
  images: [OG_IMAGE],
};
