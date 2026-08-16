import type { Metadata } from "next";
import { Devices } from "@/components/devices";
import { Distributors } from "@/components/distributors";
import { Faq } from "@/components/faq";
import { Features } from "@/components/features";
import { FinalCta } from "@/components/final-cta";
import { Hero } from "@/components/hero";
import { Plans } from "@/components/plans";
import { OPEN_GRAPH_DEFAULTS } from "@/lib/seo";
import { FAQ, PLANS, SITE_URL } from "@/lib/site-data";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: {
    ...OPEN_GRAPH_DEFAULTS,
    title: "Oleada TV | Streaming IPTV en vivo para Latinoamérica",
    description:
      "+1.600 canales en vivo, 20.000 películas y series en HD, FHD y 4K. Planes desde $3.5 USD, activación con distribuidor autorizado.",
    url: "/",
  },
};

/** Derived from PLANS so the rich result can never drift away from the published prices. */
const planPrices = [...PLANS[1], ...PLANS[3]].map((plan) => Number(plan.price));

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Product",
      "@id": `${SITE_URL}/#product`,
      name: "Oleada TV - Suscripción IPTV",
      image: `${SITE_URL}/assets/img/og-oleada.jpg`,
      description:
        "Suscripción Oleada TV: streaming IPTV con +1600 canales en vivo, +20.000 películas y series en HD/FHD/4K. Planes para 1 o 3 dispositivos, disponibles en toda Latinoamérica.",
      brand: { "@type": "Brand", name: "Oleada TV" },
      sku: "OLEADA-TV-PRO",
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "USD",
        lowPrice: Math.min(...planPrices).toString(),
        highPrice: Math.max(...planPrices).toString(),
        offerCount: planPrices.length,
        availability: "https://schema.org/InStock",
        url: `${SITE_URL}/#planes`,
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        reviewCount: "2483",
        bestRating: "5",
        worstRating: "1",
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#faq`,
      mainEntity: FAQ.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
  ],
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Devices />
      <Plans />
      <Distributors />
      <Faq />
      <FinalCta />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </main>
  );
}
