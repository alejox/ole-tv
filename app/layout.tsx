import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import { ContactFab } from "@/components/contact-fab";
import { HashScroll } from "@/components/hash-scroll";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { OG_IMAGE, OPEN_GRAPH_DEFAULTS } from "@/lib/seo";
import { CONTACT, SITE_URL } from "@/lib/site-data";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Oleada TV | Streaming IPTV en vivo para Latinoamérica",
    /** Child routes supply the distinctive half; the brand is appended here. */
    template: "%s | Oleada TV",
  },
  description:
    "Oleada TV: +1.600 canales en vivo, 20.000 películas y series en HD, FHD y 4K. Planes desde $3.5 USD, soporte 24/7 y distribuidores en toda Latinoamérica.",
  applicationName: "Oleada TV",
  keywords: [
    "oleada tv",
    "oleadatv",
    "iptv latinoamérica",
    "iptv en español",
    "streaming iptv",
    "canales en vivo",
    "tv en vivo",
    "planes iptv",
    "revendedor iptv",
    "créditos iptv",
  ],
  openGraph: { ...OPEN_GRAPH_DEFAULTS },
  twitter: {
    card: "summary_large_image",
    title: "Oleada TV | Streaming IPTV en vivo para Latinoamérica",
    description:
      "+1.600 canales en vivo, 20.000 películas y series en HD, FHD y 4K. Planes desde $3.5 USD.",
    images: [OG_IMAGE.url],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      /** Lets Google show the full-size image and an untruncated snippet in results. */
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#05070c",
};

/**
 * Site-wide entities only. Page-specific graphs (the subscription Product, the FAQ, the
 * reseller panels) live in their own route, so a crawler never sees markup for content
 * that is not on the page it is reading.
 */
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Oleada TV",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/assets/img/oleada.png`,
        width: 345,
        height: 169,
      },
      sameAs: [CONTACT.youtube, CONTACT.telegram],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Oleada TV",
      inLanguage: "es",
      publisher: { "@id": `${SITE_URL}/#organization` },
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
