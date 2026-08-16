"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { CONTACT_WHATSAPP_LINK, DOWNLOADS, HERO_SLIDES, STATS } from "@/lib/site-data";

const ROTATE_MS = 6500;

export function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(
      () => setActive((current) => (current + 1) % HERO_SLIDES.length),
      ROTATE_MS,
    );
    return () => window.clearInterval(timer);
  }, []);

  const slide = HERO_SLIDES[active];

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-16"
      aria-label="Oleada TV"
    >
      <div className="absolute inset-0">
        {HERO_SLIDES.map((item, index) => (
          <Image
            key={item.image}
            src={item.image}
            alt={item.alt}
            fill
            priority={index === 0}
            sizes="100vw"
            className={`object-cover object-right transition-opacity duration-1000 ${
              index === active ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/75 to-ink/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
        <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-ink/90 to-transparent" />
        <div className="absolute -left-40 top-1/4 h-[520px] w-[520px] rounded-full bg-brand/20 blur-[140px]" />
        <div className="absolute -right-32 bottom-0 h-[420px] w-[420px] rounded-full bg-violet/15 blur-[130px]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand/40 bg-brand/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand-bright">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-bright opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-bright" />
            </span>
            {slide.eyebrow}
          </span>

          <h1 className="mt-6 font-display text-[clamp(2.6rem,7vw,5rem)] font-semibold leading-[1.03] tracking-tight text-white">
            {slide.title}
            <span className="text-gradient block">{slide.highlight}</span>
          </h1>

          <p className="mt-6 max-w-lg text-base leading-relaxed text-white/70 sm:text-lg">
            {slide.body}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#planes"
              className="rounded-full bg-gradient-to-r from-brand-bright to-brand px-7 py-3.5 text-sm font-semibold text-ink shadow-[0_10px_40px_-10px_var(--color-brand)] transition-transform hover:scale-[1.03]"
            >
              Ver planes desde $3.5 USD
            </a>
            <a
              href={DOWNLOADS.tv}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/10"
            >
              <svg width="15" height="16" viewBox="0 0 15 16" fill="none" aria-hidden="true">
                <path
                  d="M7.5 1v9m0 0L4 6.5M7.5 10L11 6.5M1 12v2h13v-2"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Descargar app
            </a>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <div className="flex gap-2" role="tablist" aria-label="Diapositivas">
              {HERO_SLIDES.map((item, index) => (
                <button
                  key={item.image}
                  type="button"
                  role="tab"
                  aria-selected={index === active}
                  aria-label={`Ver ${item.eyebrow}`}
                  onClick={() => setActive(index)}
                  className={`h-1 rounded-full transition-all duration-500 ${
                    index === active ? "w-10 bg-brand-bright" : "w-5 bg-white/25 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>
            <a
              href={CONTACT_WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium text-white/60 underline-offset-4 transition-colors hover:text-brand-bright hover:underline"
            >
              ¿Dudas? Escríbenos
            </a>
          </div>
        </div>

        <dl className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:mt-20 lg:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label} className="bg-ink/70 px-5 py-6 backdrop-blur-sm sm:px-7">
              <dt className="font-display text-2xl font-semibold text-white sm:text-3xl">
                {stat.value}
              </dt>
              <dd className="mt-1 text-xs uppercase tracking-[0.14em] text-white/45 sm:text-[0.7rem]">
                {stat.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
