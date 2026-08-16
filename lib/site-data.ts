/**
 * Single source of truth for the landing page content.
 * Values are ported from the original Oleada TV site — do not invent new prices or claims.
 */

/** Canonical origin. Every absolute URL in metadata and JSON-LD derives from this. */
export const SITE_URL = "https://oleada.lat";

export const CONTACT = {
  whatsappNumber: "573145763378",
  telegram: "https://t.me/oleadatvpro",
  youtube: "https://www.youtube.com/@mtvpcol",
  tutorial: "https://youtu.be/0Httruhlu74?si=FSLUMcWgaSUYKn3v",

} as const;

export const DOWNLOADS = {
  tv: "https://www.oleadatv.best/app/Ola_OLA-INFO.apk",
  mobile: "https://www.oleadatv.best/app/Olamob_OLA-INFO.apk",
} as const;

export function whatsappLink(message: string): string {
  return `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/**
 * Opener used by every generic WhatsApp CTA (header, hero, footer, floating button, final CTA).
 * Sections with their own context — plans, reseller, distributors — build a more specific message.
 */
export const DEFAULT_WHATSAPP_MESSAGE =
  "Hola, te contacto desde la web de Oleada TV. Quiero información sobre los planes y la activación.";

/** Prebuilt link for the generic CTAs, so no entry point ever opens a blank chat. */
export const CONTACT_WHATSAPP_LINK = whatsappLink(DEFAULT_WHATSAPP_MESSAGE);

/**
 * Landing anchors. Hrefs are root-relative (`/#id`, not `#id`) so they still resolve
 * from routes other than the landing — the header and footer render on every page.
 */
export const NAV_LINKS = [
  { href: "/#servicio", label: "Servicio" },
  { href: "/#descargas", label: "Descargas" },
  { href: "/#planes", label: "Planes" },
  { href: "/#distribuidores", label: "Distribuidores" },
  { href: "/#faq", label: "FAQ" },
] as const;

/** Reselling targets a separate audience, so it lives on its own route with its own header button. */
export const RESELLER_LINK = { href: "/revendedores", label: "Revendedores" } as const;

export const HERO_SLIDES = [
  {
    image: "/assets/img/bg-oleada1.webp",
    alt: "Oleada TV, servicio de streaming IPTV en Latinoamérica",
    eyebrow: "Calidad al instante",
    title: "Todo el entretenimiento",
    highlight: "en una sola app",
    body: "+1.600 canales en vivo, 20.000 películas y series en HD, FHD y 4K. Sin cortes, sin contratos.",
  },
  {
    image: "/assets/img/bg-oleada2.webp",
    alt: "Zona deportiva de Oleada TV con fútbol en vivo",
    eyebrow: "Zona deportiva",
    title: "El fútbol en vivo",
    highlight: "como nunca antes",
    body: "Champions, LaLiga, Premier, NBA, NFL, UFC y F1. Mira varios partidos a la vez con la nueva función multipantalla.",
  },
  {
    image: "/assets/img/bg-oleada6.webp",
    alt: "Catálogo de canales, películas y series de Oleada TV",
    eyebrow: "Contenidos exclusivos",
    title: "300.000 horas",
    highlight: "de series y películas",
    body: "Estrenos, contenido kids, documentales y catálogo +18 disponibles on-demand cuando quieras.",
  },
  {
    image: "/assets/img/bg-oleada5.webp",
    alt: "Soporte técnico 24/7 de Oleada TV",
    eyebrow: "Soporte 24/7",
    title: "Nunca te quedas",
    highlight: "sin señal",
    body: "Un equipo profesional de apoyo técnico resuelve cualquier falla con eficiencia, todos los días del año.",
  },
] as const;

export const STATS = [
  { value: "1.600+", label: "Canales en vivo" },
  { value: "20.000+", label: "Películas y series" },
  { value: "480+", label: "Canales deportivos" },
  { value: "4.8/5", label: "2.483 valoraciones" },
] as const;

export const FEATURES = [
  {
    title: "Streaming estable en toda Latinoamérica",
    body: "Servidores optimizados para toda la región: México, Colombia, Argentina, Chile, Perú, Ecuador, Brasil, Venezuela y más. Conexión fluida en HD, FHD y 4K las 24 horas.",
    image: "/assets/img/bg-oleada4.webp",
    alt: "Oleada TV en pantalla grande",
    span: "lg:col-span-2 lg:row-span-2",
  },
  {
    title: "Deportes en vivo sin cortes",
    body: "DIRECTV Sports, ESPN, Fox Sports, Win Sports y Movistar. Más de 480 canales dedicados al deporte.",
    image: "/assets/img/wtch-tv.webp",
    alt: "Deportes en vivo en Oleada TV",
    span: "lg:col-span-2",
  },
  {
    title: "Calidad SD, HD, FHD y 4K",
    body: "Ajusta la calidad según tu conexión y aprovecha cada pulgada de tu pantalla.",
    image: "/assets/img/control-tv.webp",
    alt: "Control remoto usando Oleada TV",
    span: "lg:col-span-2",
  },
] as const;

export const DEVICES = [
  { title: "TV Box", image: "/assets/img/TVBOX.png", href: DOWNLOADS.tv },
  { title: "TV Stick", image: "/assets/img/TVStick.png", href: DOWNLOADS.tv },
  { title: "Smart TV", image: "/assets/img/SmartTV.png", href: DOWNLOADS.tv },
  { title: "Tablet", image: "/assets/img/Tablet.png", href: DOWNLOADS.mobile },
  { title: "Celular", image: "/assets/img/Celular.png", href: DOWNLOADS.mobile },
  { title: "PC", image: "/assets/img/PC.png", href: DOWNLOADS.tv },
] as const;

export const INSTALL_STEPS = [
  {
    title: "Descarga la APK",
    body: "Elige tu dispositivo y descarga el instalador oficial de Oleada TV desde esta página.",
  },
  {
    title: "Permite orígenes desconocidos",
    body: "Activa la opción en los ajustes de tu Smart TV o Android para instalar apps fuera de la tienda.",
  },
  {
    title: "Instala y activa",
    body: "Abre el archivo, sigue las instrucciones y activa tu cuenta con un distribuidor autorizado.",
  },
] as const;

export type Plan = {
  period: string;
  price: string;
  bonus?: string;
  featured?: boolean;
};

export const PLAN_FEATURES = {
  1: [
    "1.300+ canales en vivo",
    "1 dispositivo",
    "480+ canales de deportes",
    "300.000+ horas de películas y series",
    "Contenido kids",
    "Contenido +18 adultos",
  ],
  3: [
    "1.300+ canales en vivo",
    "3 dispositivos simultáneos",
    "480+ canales de deportes",
    "300.000+ horas de películas y series",
    "Contenido kids",
    "Contenido +18 adultos",
  ],
} as const;

export const PLANS: Record<1 | 3, readonly Plan[]> = {
  1: [
    { period: "Mensual", price: "3.5" },
    { period: "Trimestral", price: "10.5" },
    { period: "Semestral", price: "21", bonus: "+ 1 mes gratis" },
    { period: "Anual", price: "35", bonus: "+ 2 meses gratis", featured: true },
  ],
  3: [
    { period: "Mensual", price: "7" },
    { period: "Trimestral", price: "21" },
    { period: "Semestral", price: "42", bonus: "+ 1 mes gratis" },
    { period: "Anual", price: "70", bonus: "+ 2 meses gratis", featured: true },
  ],
};

export type ResellerPlan = {
  title: string;
  credits: string;
  price: string;
  credit: string;
};

export const RESELLER_PLANS: Record<1 | 3, Record<"mensual" | "anual", readonly ResellerPlan[]>> = {
  1: {
    mensual: [
      { title: "Bronce", credits: "30 créditos", price: "52.5", credit: "$1.75" },
      { title: "Plata", credits: "50 créditos", price: "80", credit: "$1.60" },
      { title: "Oro", credits: "100 créditos", price: "140", credit: "$1.40" },
      { title: "Platino", credits: "300 créditos", price: "360", credit: "$1.20" },
      { title: "Diamante", credits: "500 créditos", price: "500", credit: "$1.00" },
      { title: "Black Panel", credits: "1000 créditos", price: "900", credit: "$0.90" },
    ],
    anual: [
      { title: "Bronce", credits: "5 créditos", price: "80", credit: "$16" },
      { title: "Plata", credits: "10 créditos", price: "140", credit: "$14" },
      { title: "Oro", credits: "25 créditos", price: "300", credit: "$12" },
      { title: "Platino", credits: "50 créditos", price: "500", credit: "$10" },
      { title: "Diamante", credits: "100 créditos", price: "900", credit: "$9" },
    ],
  },
  3: {
    mensual: [
      { title: "Bronce", credits: "30 créditos", price: "105", credit: "$3.50" },
      { title: "Plata", credits: "50 créditos", price: "160", credit: "$3.20" },
      { title: "Oro", credits: "100 créditos", price: "280", credit: "$2.80" },
      { title: "Platino", credits: "300 créditos", price: "720", credit: "$2.40" },
      { title: "Diamante", credits: "500 créditos", price: "1000", credit: "$2.00" },
      { title: "Black Panel", credits: "1000 créditos", price: "1800", credit: "$1.80" },
    ],
    anual: [
      { title: "Bronce", credits: "5 créditos", price: "160", credit: "$32" },
      { title: "Plata", credits: "10 créditos", price: "280", credit: "$28" },
      { title: "Oro", credits: "25 créditos", price: "600", credit: "$24" },
      { title: "Platino", credits: "50 créditos", price: "1000", credit: "$20" },
      { title: "Black Panel", credits: "100 créditos", price: "1800", credit: "$18" },
    ],
  },
};

export const RESELLER_BENEFITS = [
  "Los créditos no expiran",
  "Vender cuentas y sub-paneles",
] as const;

export type Distributor = {
  name: string;
  whatsapp: string;
  telegram?: string;
};

/**
 * Authorized distributors, keyed by id. Several of them cover more than one country.
 * Phone numbers are never rendered: customers reach a distributor through the chat links only.
 */
export const DISTRIBUTORS: Record<string, Distributor> = {
  oleadatvprocol: {
    name: "OLEADATV COLOMBIA",
    whatsapp: "https://wa.me/573145763378",
    telegram: "https://t.me/oleadatvpro",
  },
  mgsprotv: {
    name: "OLEADATV-JUAN",
    whatsapp: "https://wa.me/573132531929",
    telegram: "https://t.me/magprotv",
  },
  mgsproCintia: {
    name: "OLEADATV-CINTIA",
    whatsapp: "https://wa.me/573113523221",
    telegram: "https://t.me/oleadatvpro",
  },
  carlosValbuena: {
    name: "Carlos Valbuena",
    whatsapp: "https://wa.me/584143688614",
    telegram: "https://t.me/cvalbuena",
  },
  danielTv: {
    name: "DanielTV",
    whatsapp: "https://wa.me/5547991822685",
    telegram: "https://t.me/jorgedaniel92",
  },
  drSystemSolutions: {
    name: "Dr System SolutionsPC",
    whatsapp: "https://wa.me/593985859472",
    telegram: "https://t.me/SOPORTEDEMAGISTVPRO",
  },
  ivan: {
    name: "Ivan",
    whatsapp: "https://wa.me/593983013302",
  },
  accesoriosmix:{
    name:"Accesorios Mix",
    whatsapp: "https://wa.me/593969380656",
  },
    javiertech:{
    name:"JavierTech",
    whatsapp: "https://wa.me/593967110242",
  }
};

export const COUNTRIES = [
  { name: "Colombia", flag: "/assets/img/icons/Colombia-SVG.svg", distributors: [ "oleadatvprocol", "mgsproCintia","mgsprotv"] },
  { name: "Ecuador", flag: "/assets/img/icons/Ecuador-SVG.svg", distributors: ["accesoriosmix","javiertech","drSystemSolutions", "ivan"] },
  { name: "Venezuela", flag: "/assets/img/icons/Venezuela-SVG.svg", distributors: ["carlosValbuena","oleadatvprocol", "mgsproCintia"] },
  { name: "Perú", flag: "/assets/img/icons/Peru-SVG.svg", distributors: ["carlosValbuena"] },
  { name: "Chile", flag: "/assets/img/icons/Chile-SVG.svg", distributors: ["carlosValbuena"] },
  { name: "Brasil", flag: "/assets/img/icons/Brazil-SVG.svg", distributors: ["danielTv","oleadatvprocol", "mgsproCintia"] },
  { name: "Cuba", flag: "/assets/img/icons/Cuba-SVG.svg", distributors: ["danielTv"] },
  { name: "Panamá", flag: "/assets/img/icons/Panama-SVG.svg", distributors: ["carlosValbuena"] },
  { name: "República Dominicana", flag: "/assets/img/icons/DominicanRepublic-SVG.svg", distributors: ["carlosValbuena"] },
  { name: "Estados Unidos", flag: "/assets/img/icons/USA-SVG.svg", distributors: ["carlosValbuena"] },
] as const;

/** Prefilled WhatsApp link for a distributor, so the customer does not start from a blank chat. */
export function distributorWhatsapp(distributor: Distributor): string {
  return `${distributor.whatsapp}?text=${encodeURIComponent(DEFAULT_WHATSAPP_MESSAGE)}`;
}

export const FAQ = [
  {
    q: "¿Qué es Oleada TV y por qué es la mejor opción de streaming IPTV?",
    a: "Oleada TV es un servicio premium de streaming IPTV con más de 1.600 canales en vivo, 20.000 películas y series en calidad HD, FHD y 4K. Destaca por su estabilidad, catálogo amplio, app intuitiva, soporte 24/7 y servidores optimizados para toda Latinoamérica.",
  },
  {
    q: "¿Puedo probar Oleada TV gratis?",
    a: "Sí. Puedes descargar la aplicación desde la sección de descargas y solicitar una prueba a nuestros distribuidores autorizados antes de pagar la suscripción.",
  },
  {
    q: "¿Funciona Oleada TV en iPhone, iPad y Apple TV?",
    a: "Oleada TV cuenta con una versión web optimizada. Los usuarios de iPhone, iPad y Apple TV pueden acceder y disfrutar todo el contenido directamente desde el navegador Safari sin instalar nada.",
  },
  {
    q: "¿Cómo descargo e instalo la APK en mi Smart TV o Fire Stick?",
    a: "Descarga la APK desde la sección de descargas y sigue el tutorial paso a paso para Smart TV, TV Box, Fire Stick, Android y PC. También tenemos una guía en video en YouTube.",
  },
  {
    q: "¿Por qué me indica que son «aplicaciones desconocidas» al instalar?",
    a: "Por seguridad, la mayoría de fabricantes no permiten por defecto la instalación de software de fuentes externas. Activa la opción «Permitir aplicaciones de orígenes desconocidos» en los ajustes de tu Smart TV o dispositivo Android antes de instalar Oleada TV.",
  },
  {
    q: "¿Por qué no puedo instalar Oleada TV en mi televisor?",
    a: "Comprueba el sistema operativo de tu televisor. Actualmente WebOS (LG) y Tizen (Samsung antiguos) no son compatibles. Para esos casos recomendamos usar un TV Box Android o un Fire Stick. Si tienes dudas, contáctanos por WhatsApp.",
  },
  {
    q: "¿Qué canales incluye Oleada TV?",
    a: "Más de 1.600 canales en vivo: deportes (DIRECTV Sports, ESPN, Fox Sports, Win Sports, Movistar), películas (HBO, Cinemax, Movistar Cines), series (Universal, FX, AXN), kids (Disney, Cartoon, Nickelodeon), documentales, noticias y contenido +18.",
  },
  {
    q: "¿En qué países funciona Oleada TV?",
    a: "Funciona en México, Colombia, Argentina, Chile, Perú, Ecuador, Brasil, Venezuela, Bolivia, Panamá, República Dominicana, Estados Unidos y prácticamente cualquier país con conexión estable a internet.",
  },
  {
    q: "¿Cómo puedo pagar por el servicio?",
    a: "Aceptamos transferencias bancarias, PayPal, criptomonedas y los métodos de pago electrónicos locales de cada país (en Colombia, además, PSE, Nequi, Daviplata y Bancolombia). Contacta al distribuidor autorizado de tu país por WhatsApp y él te indica las opciones disponibles en tu zona.",
  },
  {
    q: "¿Cómo me convierto en distribuidor o revendedor?",
    a: "Ve a la sección de reventa, elige el panel de créditos que mejor se ajuste a tu volumen de ventas y contáctanos por WhatsApp. Tenemos planes desde $0.90 USD por crédito de activación.",
  },
] as const;
