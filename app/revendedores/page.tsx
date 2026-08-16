import type { Metadata } from "next";
import Link from "next/link";
import { Reseller } from "@/components/reseller";
import { OG_IMAGE, OPEN_GRAPH_DEFAULTS } from "@/lib/seo";
import { RESELLER_BENEFITS, RESELLER_PLANS, SITE_URL, whatsappLink } from "@/lib/site-data";

export const metadata: Metadata = {
  /** The layout template appends "| Oleada TV", so this half stays distinctive. */
  title: "Ser revendedor: créditos IPTV al por mayor",
  description:
    "Compra créditos de activación de Oleada TV al por mayor, vende cuentas y crea tus sub-paneles. Paneles desde $0.90 USD por crédito.",
  alternates: { canonical: "/revendedores" },
  openGraph: {
    ...OPEN_GRAPH_DEFAULTS,
    title: "Ser revendedor de Oleada TV",
    description:
      "Créditos de activación al por mayor, panel propio y sub-paneles. Paneles desde $0.90 USD por crédito.",
    url: "/revendedores",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ser revendedor de Oleada TV",
    description:
      "Créditos de activación al por mayor, panel propio y sub-paneles. Paneles desde $0.90 USD por crédito.",
    images: [OG_IMAGE.url],
  },
};

/** Derived from RESELLER_PLANS so the rich result tracks the published panel prices. */
const panelPrices = [
  ...RESELLER_PLANS[1].mensual,
  ...RESELLER_PLANS[1].anual,
  ...RESELLER_PLANS[3].mensual,
  ...RESELLER_PLANS[3].anual,
].map((plan) => Number(plan.price));

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio", item: `${SITE_URL}/` },
        {
          "@type": "ListItem",
          position: 2,
          name: "Revendedores",
          item: `${SITE_URL}/revendedores`,
        },
      ],
    },
    {
      "@type": "Product",
      "@id": `${SITE_URL}/revendedores#product`,
      name: "Panel de revendedor Oleada TV",
      image: `${SITE_URL}/assets/img/og-oleada.jpg`,
      description:
        "Panel de revendedor de Oleada TV: créditos de activación al por mayor que no expiran, venta de cuentas y creación de sub-paneles, con soporte técnico dedicado.",
      brand: { "@type": "Brand", name: "Oleada TV" },
      sku: "OLEADA-TV-PANEL",
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "USD",
        lowPrice: Math.min(...panelPrices).toString(),
        highPrice: Math.max(...panelPrices).toString(),
        offerCount: panelPrices.length,
        availability: "https://schema.org/InStock",
        url: `${SITE_URL}/revendedores#paneles`,
      },
    },
  ],
};

const RESELLER_WHATSAPP = whatsappLink(
  "Hola, quiero información para ser revendedor de Oleada TV y comprar créditos al por mayor.",
);

function CheckIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 14 14"
      fill="none"
      className="shrink-0 text-violet"
      aria-hidden="true"
    >
      <path
        d="M1.5 7.5l3.5 3.5L12.5 3"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ResellerPage() {
  return (
    <main>
      <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-24">
        <div className="absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-violet/10 blur-[150px]" />

        <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-white/50 transition-colors hover:text-brand-bright"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path
                d="M8.5 2L3.5 7l5 5"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Volver al inicio
          </Link>

          <h1 className="mt-8 font-display text-[clamp(2.1rem,5vw,3.6rem)] font-semibold leading-[1.08] tracking-tight text-white">
            Conviértete en revendedor de{" "}
            <span className="text-gradient">Oleada TV</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/60">
            Compra créditos de activación al por mayor, vende cuentas y crea tus propios
            sub-paneles. Los créditos no expiran y tienes soporte técnico dedicado.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <a
              href="#paneles"
              className="rounded-full bg-gradient-to-r from-brand-bright to-brand px-7 py-3.5 text-sm font-semibold text-ink shadow-[0_10px_40px_-10px_var(--color-brand)] transition-transform hover:scale-[1.03]"
            >
              Ver planes de paneles
            </a>
            <a
              href={RESELLER_WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/15 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:border-brand hover:bg-brand/10"
            >
              Hablar por WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="relative pb-4">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
            {RESELLER_BENEFITS.map((benefit) => (
              <div key={benefit} className="surface flex items-center gap-3 rounded-2xl p-6">
                <CheckIcon />
                <p className="text-sm font-medium text-white/80">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Reseller />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </main>
  );
}
