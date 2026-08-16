import Image from "next/image";
import { CONTACT, DEVICES, INSTALL_STEPS } from "@/lib/site-data";
import { SectionHeading } from "@/components/section-heading";

export function Devices() {
  return (
    <section id="descargas" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Descargas"
          title="Instálalo en"
          highlight="cualquier pantalla"
          body="Descarga el instalador oficial para tu dispositivo. Compatible con Smart TV, TV Box Android, Fire TV Stick, celulares, tablets y PC."
        />

        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {DEVICES.map((device) => (
            <a
              key={device.title}
              href={device.href}
              className="surface group flex flex-col items-center gap-4 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand/50 hover:bg-brand/5"
            >
              <Image
                src={device.image}
                alt={device.title}
                width={120}
                height={120}
                className="h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-110"
              />
              <span className="text-sm font-semibold text-white/80 group-hover:text-white">
                {device.title}
              </span>
              <span className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-brand opacity-0 transition-opacity group-hover:opacity-100">
                Descargar
              </span>
            </a>
          ))}
        </div>

        <div className="surface mt-6 grid gap-8 rounded-3xl p-8 sm:p-12 lg:grid-cols-[1fr_auto] lg:items-center">
          <ol className="grid gap-8 sm:grid-cols-3">
            {INSTALL_STEPS.map((step, index) => (
              <li key={step.title} className="relative">
                <span className="font-display text-4xl font-semibold text-white/10">
                  0{index + 1}
                </span>
                <h3 className="mt-2 text-base font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/55">{step.body}</p>
              </li>
            ))}
          </ol>

          <a
            href={CONTACT.tutorial}
            target="_blank"
            rel="noreferrer"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:border-brand hover:bg-brand/10"
          >
            <svg width="14" height="16" viewBox="0 0 14 16" fill="none" aria-hidden="true">
              <path d="M1 1.5v13l12-6.5-12-6.5z" fill="currentColor" />
            </svg>
            Ver tutorial en video
          </a>
        </div>
      </div>
    </section>
  );
}
