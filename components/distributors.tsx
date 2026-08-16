import Image from "next/image";
import { COUNTRIES, DISTRIBUTORS, distributorWhatsapp } from "@/lib/site-data";
import { SectionHeading } from "@/components/section-heading";

function WhatsappIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.5 14.4c-.3-.2-1.7-.9-2-1-.3-.1-.5-.2-.7.1l-1 1.2c-.2.2-.3.3-.6.1-1.7-.8-2.8-1.5-3.9-3.4-.3-.5.3-.5.8-1.5.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-1 1-1.2 2.3-.7 3.7.9 2.4 2.6 4.4 5 5.6 2.2 1.1 3.2 1 4.1.8.6-.1 1.7-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.4zM12 2a10 10 0 00-8.6 15L2 22l5.2-1.4A10 10 0 1012 2zm0 18.2c-1.6 0-3.1-.4-4.4-1.2l-.3-.2-3.1.8.8-3-.2-.3A8.2 8.2 0 1112 20.2z" />
    </svg>
  );
}

function TelegramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M21.9 4.3l-3.3 15.6c-.2 1.1-.9 1.4-1.8.9l-5-3.7-2.4 2.3c-.3.3-.5.5-1 .5l.4-5.1L18.1 6c.4-.3-.1-.5-.6-.2L6.1 12.9l-5-1.6c-1.1-.3-1.1-1 .2-1.5l19.5-7.5c.9-.3 1.7.2 1.4 1.2z" />
    </svg>
  );
}

export function Distributors() {
  return (
    <section id="distribuidores" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 grid-bg opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Distribuidores"
          title="Busca un distribuidor autorizado"
          highlight="en tu país"
          body="Contacta directamente al distribuidor de tu país para activar tu cuenta, pedir una prueba o resolver cualquier duda. Todos son distribuidores verificados de Oleada TV."
        />

        <div className="mt-16 grid items-start gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {COUNTRIES.map((country) => (
            <article
              key={country.name}
              className="surface rounded-3xl p-6 transition-colors duration-300 hover:border-brand/40"
            >
              <div className="flex items-center gap-3 border-b border-white/10 pb-5">
                <Image
                  src={country.flag}
                  alt=""
                  width={36}
                  height={27}
                  className="h-7 w-10 rounded-[3px] object-cover"
                />
                <h3 className="font-display text-lg font-semibold text-white">{country.name}</h3>
              </div>

              <ul className="mt-5 flex flex-col gap-4">
                {country.distributors.map((id) => {
                  const distributor = DISTRIBUTORS[id];

                  return (
                    <li key={`${country.name}-${id}`}>
                      <p className="text-sm font-semibold text-white">{distributor.name}</p>
                      <p className="mt-0.5 font-mono text-xs text-white/40">{distributor.phone}</p>

                      <div className="mt-3 flex flex-wrap gap-2">
                        <a
                          href={distributorWhatsapp(distributor, country.name)}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 rounded-full bg-brand/15 px-4 py-2 text-xs font-semibold text-brand-bright transition-colors hover:bg-brand hover:text-ink"
                        >
                          <WhatsappIcon />
                          WhatsApp
                          <span className="sr-only">
                            de {distributor.name} en {country.name}
                          </span>
                        </a>

                        {distributor.telegram ? (
                          <a
                            href={distributor.telegram}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-xs font-semibold text-white/70 transition-colors hover:border-violet hover:bg-violet/15 hover:text-white"
                          >
                            <TelegramIcon />
                            Telegram
                            <span className="sr-only">
                              de {distributor.name} en {country.name}
                            </span>
                          </a>
                        ) : null}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </article>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-white/40">
          ¿Tu país no aparece en la lista? Oleada TV funciona en cualquier lugar con conexión
          estable.{" "}
          <a
            href={DISTRIBUTORS.oleadatvprocol.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="font-medium text-brand-bright underline-offset-4 hover:underline"
          >
            Escríbenos y te asignamos uno.
          </a>
        </p>
      </div>
    </section>
  );
}
