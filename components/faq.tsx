import { FAQ as FAQ_ITEMS } from "@/lib/site-data";
import { SectionHeading } from "@/components/section-heading";

export function Faq() {
  return (
    <section id="faq" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title="Preguntas"
          highlight="frecuentes"
          body="Lo que más nos preguntan antes de contratar. Si te queda alguna duda, escríbenos por WhatsApp."
        />

        <div className="mt-14 flex flex-col gap-3">
          {FAQ_ITEMS.map((item) => (
            <details
              key={item.q}
              className="surface group rounded-2xl px-6 py-5 transition-colors open:border-brand/40 hover:border-white/20"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-medium text-white marker:hidden [&::-webkit-details-marker]:hidden">
                {item.q}
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/15 text-brand transition-transform duration-300 group-open:rotate-45">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                    <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                </span>
              </summary>
              <p className="mt-4 text-sm leading-relaxed text-white/60">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
