"use client";

import { useState } from "react";
import { PLAN_FEATURES, PLANS, whatsappLink, type Plan } from "@/lib/site-data";
import { SectionHeading } from "@/components/section-heading";

type DeviceCount = 1 | 3;

const DEVICE_TABS: { value: DeviceCount; label: string }[] = [
  { value: 1, label: "1 dispositivo" },
  { value: 3, label: "3 dispositivos" },
];

function planLink(plan: Plan, devices: DeviceCount) {
  const deviceLabel = devices === 1 ? "1 Dispositivo" : "3 Dispositivos";
  const bonus = plan.bonus ? ` (${plan.bonus})` : "";
  return whatsappLink(
    `Hola, estoy interesado en el plan de ${deviceLabel} ${plan.period}${bonus} por $${plan.price} USD. ¿Me ayudas con el proceso para activar mi cuenta?`,
  );
}

export function Plans() {
  const [devices, setDevices] = useState<DeviceCount>(3);

  return (
    <section id="planes" className="relative py-24 sm:py-32">
      <div className="absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-brand/10 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Planes"
          title="Precios claros,"
          highlight="sin letra pequeña"
          body="Elige cuántos dispositivos quieres usar al mismo tiempo y el periodo que prefieras. Activación por WhatsApp con un distribuidor autorizado."
        />

        <div className="mt-10 flex justify-center">
          <div
            className="inline-flex rounded-full border border-white/10 bg-white/5 p-1"
            role="tablist"
            aria-label="Cantidad de dispositivos"
          >
            {DEVICE_TABS.map((tab) => (
              <button
                key={tab.value}
                type="button"
                role="tab"
                aria-selected={devices === tab.value}
                onClick={() => setDevices(tab.value)}
                className={`rounded-full px-6 py-2.5 text-sm font-semibold transition-all ${
                  devices === tab.value
                    ? "bg-brand text-ink"
                    : "text-white/60 hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PLANS[devices].map((plan) => (
            <article
              key={plan.period}
              className={`relative flex flex-col rounded-3xl p-7 transition-transform duration-300 hover:-translate-y-1 ${
                plan.featured
                  ? "border border-brand/60 bg-gradient-to-b from-brand/15 to-transparent"
                  : "surface"
              }`}
            >
              {plan.featured ? (
                <span className="absolute -top-3 left-7 rounded-full bg-brand px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.14em] text-ink">
                  Más elegido
                </span>
              ) : null}

              <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-white/50">
                {plan.period}
              </h3>

              <p className="mt-4 flex items-baseline gap-1">
                <span className="font-display text-4xl font-semibold text-white">
                  ${plan.price}
                </span>
                <span className="text-sm text-white/40">USD</span>
              </p>

              <p className="mt-1 h-5 text-sm font-medium text-brand-bright">{plan.bonus ?? ""}</p>

              <ul className="mt-6 flex flex-1 flex-col gap-3 border-t border-white/10 pt-6">
                {PLAN_FEATURES[devices].map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm text-white/65">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      className="mt-1 shrink-0 text-brand"
                      aria-hidden="true"
                    >
                      <path
                        d="M1.5 7.5l3.5 3.5L12.5 3"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href={planLink(plan, devices)}
                target="_blank"
                rel="noreferrer"
                className={`mt-7 rounded-full px-5 py-3 text-center text-sm font-semibold transition-transform hover:scale-[1.02] ${
                  plan.featured
                    ? "bg-brand text-ink"
                    : "border border-white/20 text-white hover:bg-white/10"
                }`}
              >
                Contratar
              </a>
            </article>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-white/40">
          Pagos por PSE, Nequi, Daviplata, Bancolombia, transferencia, PayPal y criptomonedas.
        </p>
      </div>
    </section>
  );
}
