import Image from "next/image";
import { CONTACT, DOWNLOADS } from "@/lib/site-data";

export function FinalCta() {
  return (
    <section className="relative px-5 pb-24 sm:px-8 sm:pb-32">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-white/10 px-7 py-16 sm:px-16 sm:py-24">
        <Image
          src="/assets/img/bg-oleada7.webp"
          alt=""
          fill
          sizes="100vw"
          className="-z-10 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/90 to-ink/50" />
        <div className="absolute -bottom-24 left-1/3 -z-10 h-72 w-72 rounded-full bg-brand/25 blur-[120px]" />

        <div className="max-w-xl">
          <h2 className="font-display text-[clamp(2rem,4.5vw,3.4rem)] font-semibold leading-[1.08] tracking-tight text-white">
            Empieza a ver hoy <span className="text-gradient">desde $3.5 USD</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/65">
            Activación en minutos con un distribuidor autorizado. Soporte técnico 24/7 y prueba
            disponible antes de pagar.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-gradient-to-r from-brand-bright to-brand px-7 py-3.5 text-sm font-semibold text-ink shadow-[0_10px_40px_-10px_var(--color-brand)] transition-transform hover:scale-[1.03]"
            >
              Hablar por WhatsApp
            </a>
            <a
              href={DOWNLOADS.tv}
              className="rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/10"
            >
              Descargar la app
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
