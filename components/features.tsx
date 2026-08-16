import Image from "next/image";
import { FEATURES } from "@/lib/site-data";
import { SectionHeading } from "@/components/section-heading";

export function Features() {
  return (
    <section id="servicio" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="El servicio"
          title="Streaming premium,"
          highlight="sin complicaciones"
          body="Oleada TV reúne canales en vivo, deportes y un catálogo enorme de películas y series en una app que funciona en el dispositivo que ya tienes."
        />

        <div className="mt-16 grid gap-4 lg:grid-cols-4 lg:grid-rows-2">
          {FEATURES.map((feature) => (
            <article
              key={feature.title}
              className={`group surface relative isolate overflow-hidden rounded-3xl p-7 sm:p-9 ${feature.span}`}
            >
              <Image
                src={feature.image}
                alt={feature.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="-z-10 object-cover opacity-25 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/85 to-ink/40" />

              <div className="flex h-full min-h-52 flex-col justify-end">
                <h3 className="font-display text-xl font-semibold text-white sm:text-2xl">
                  {feature.title}
                </h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-white/60">
                  {feature.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
