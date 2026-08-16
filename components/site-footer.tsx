import Image from "next/image";
import { CONTACT, CONTACT_WHATSAPP_LINK, NAV_LINKS, RESELLER_LINK } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-ink-soft">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Image
              src="/assets/img/oleada.png"
              alt="Oleada TV"
              width={140}
              height={60}
              className="h-10 w-auto"
            />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/50">
              Streaming IPTV premium con más de 1.600 canales en vivo, películas y series en HD, FHD
              y 4K para Colombia y toda Latinoamérica.
            </p>
          </div>

          <nav aria-label="Enlaces del sitio">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
              Navegación
            </h3>
            <ul className="mt-5 flex flex-col gap-3">
              {[...NAV_LINKS, RESELLER_LINK].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/65 transition-colors hover:text-brand-bright"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
              Contacto
            </h3>
            <ul className="mt-5 flex flex-col gap-3">
              <li>
                <a
                  href={CONTACT_WHATSAPP_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-white/65 transition-colors hover:text-brand-bright"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.telegram}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-white/65 transition-colors hover:text-brand-bright"
                >
                  Telegram
                </a>
              </li>

              <li>
                <a
                  href={CONTACT.youtube}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-white/65 transition-colors hover:text-brand-bright"
                >
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-7 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Oleada TV. Todos los derechos reservados.</span>
          <span>Soporte técnico 24/7</span>
        </div>
      </div>
    </footer>
  );
}
