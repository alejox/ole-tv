"use client";

import { useState } from "react";
import {
  RESELLER_BENEFITS,
  RESELLER_PLANS,
  whatsappLink,
  type ResellerPlan,
} from "@/lib/site-data";
import { SectionHeading } from "@/components/section-heading";

type DeviceCount = 1 | 3;
type Period = "mensual" | "anual";

const DEVICE_TABS: { value: DeviceCount; label: string }[] = [
  { value: 1, label: "1 dispositivo" },
  { value: 3, label: "3 dispositivos" },
];

const PERIOD_TABS: { value: Period; label: string }[] = [
  { value: "mensual", label: "Mensual" },
  { value: "anual", label: "Anual" },
];

function resellerLink(plan: ResellerPlan, devices: DeviceCount, period: Period) {
  const deviceLabel = devices === 1 ? "1 Dispositivo" : "3 Dispositivos";
  const periodLabel = period === "mensual" ? "Mensual" : "Anual";
  return whatsappLink(
    `Hola, estoy interesado en el plan de ${deviceLabel} ${periodLabel} - PLAN ${plan.title.toUpperCase()} (${plan.credits}) por $${plan.price} USD. ¿Me ayudas con el proceso para activar mi panel?`,
  );
}

export function Reseller() {
  const [devices, setDevices] = useState<DeviceCount>(3);
  const [period, setPeriod] = useState<Period>("mensual");

  const plans = RESELLER_PLANS[devices][period];

  return (
    <section id="paneles" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Paneles"
          title="Elige el panel según"
          highlight="tu volumen de ventas"
          body="Cada panel define cuántos créditos de activación recibes y a qué precio te queda cada uno. Puedes subir de panel cuando tus ventas lo justifiquen."
        />

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <div
            className="inline-flex rounded-full border border-white/10 bg-white/5 p-1"
            role="tablist"
            aria-label="Cantidad de dispositivos por crédito"
          >
            {DEVICE_TABS.map((tab) => (
              <button
                key={tab.value}
                type="button"
                role="tab"
                aria-selected={devices === tab.value}
                onClick={() => setDevices(tab.value)}
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
                  devices === tab.value ? "bg-brand text-ink" : "text-white/60 hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div
            className="inline-flex rounded-full border border-white/10 bg-white/5 p-1"
            role="tablist"
            aria-label="Periodo del crédito"
          >
            {PERIOD_TABS.map((tab) => (
              <button
                key={tab.value}
                type="button"
                role="tab"
                aria-selected={period === tab.value}
                onClick={() => setPeriod(tab.value)}
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
                  period === tab.value ? "bg-violet text-white" : "text-white/60 hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
          {plans.map((plan) => (
            <article
              key={plan.title}
              className="surface flex flex-col rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1 hover:border-violet/50"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-display text-xl font-semibold text-white">
                    Plan {plan.title}
                  </h3>
                  <p className="mt-1 text-sm text-white/45">{plan.credits}</p>
                </div>
                <span className="rounded-full border border-violet/40 bg-violet/10 px-3 py-1 text-xs font-semibold text-violet">
                  {plan.credit} c/u
                </span>
              </div>

              <p className="mt-6 flex items-baseline gap-1">
                <span className="font-display text-3xl font-semibold text-white">
                  ${plan.price}
                </span>
                <span className="text-sm text-white/40">USD</span>
              </p>

              <ul className="mt-6 flex flex-1 flex-col gap-2.5 border-t border-white/10 pt-6">
                {RESELLER_BENEFITS.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-2.5 text-sm text-white/60">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      className="mt-1 shrink-0 text-violet"
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
                    {benefit}
                  </li>
                ))}
              </ul>

              <a
                href={resellerLink(plan, devices, period)}
                target="_blank"
                rel="noreferrer"
                className="mt-7 rounded-full border border-white/20 px-5 py-3 text-center text-sm font-semibold text-white transition-colors hover:border-violet hover:bg-violet/15"
              >
                Solicitar por WhatsApp
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
