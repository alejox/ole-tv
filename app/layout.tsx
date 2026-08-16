import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import { ContactFab } from "@/components/contact-fab";
import { HashScroll } from "@/components/hash-scroll";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { FAQ, SITE_URL } from "@/lib/site-data";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Oleada TV | Streaming IPTV en Colombia y Latinoamérica",
  description:
    "Oleada TV: streaming IPTV premium con más de 1.600 canales en vivo, 20.000 películas y series en HD, FHD y 4K. Planes desde $3.5 USD y soporte 24/7.",
  keywords: [
    "oleada tv",
    "oleadatv",
    "streaming colombia",
    "iptv colombia",
    "tv en vivo",
    "planes iptv",
    "reventa iptv",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Oleada TV | Streaming IPTV",
    description: "Streaming IPTV premium en Colombia y Latinoamérica desde $3.5 USD.",
    url: "/",
    siteName: "Oleada TV",
    locale: "es_CO",
    type: "website",
    images: [
      { url: "/assets/img/oleada.png", width: 512, height: 512, alt: "Logo Oleada TV" },
    ],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#05070c",
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Product",
      name: "Oleada TV - Suscripción IPTV",
      image: `${SITE_URL}/assets/img/oleada.png`,
      description:
        "Suscripción Oleada TV: streaming IPTV con +1600 canales en vivo, +20.000 películas y series en HD/FHD/4K. Planes para 1 o 3 dispositivos en Colombia y Latinoamérica.",
      brand: { "@type": "Brand", name: "Oleada TV" },
      sku: "OLEADA-TV-PRO",
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "USD",
        lowPrice: "3.5",
        highPrice: "70",
        offerCount: 8,
        availability: "https://schema.org/InStock",
        url: `${SITE_URL}/`,
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
      mainEntity: FAQ.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${inter.variable} ${outfit.variable}`}>
      <body>
        <HashScroll />
        <SiteHeader />
        {children}
        <SiteFooter />
        <ContactFab />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
