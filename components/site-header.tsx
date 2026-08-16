"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { CONTACT, NAV_LINKS } from "@/lib/site-data";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? "border-b border-white/10 bg-ink/80 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-5 sm:px-8">
          <a href="#top" className="shrink-0" aria-label="Oleada TV, ir al inicio">
            <Image
              src="/assets/img/oleada.png"
              alt="Oleada TV"
              width={132}
              height={56}
              priority
              className="h-9 w-auto sm:h-10"
            />
          </a>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Navegación principal">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-white/70 transition-colors hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="hidden rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-ink transition-transform hover:scale-[1.03] sm:inline-flex"
            >
              Contratar ahora
            </a>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Abrir menú"
              aria-expanded={open}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:bg-white/5 lg:hidden"
            >
              <span className="sr-only">Menú</span>
              <svg width="18" height="14" viewBox="0 0 18 14" fill="none" aria-hidden="true">
                <path d="M0 1h18M0 7h18M0 13h12" stroke="currentColor" strokeWidth="1.6" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-50 lg:hidden ${open ? "" : "pointer-events-none"}`}
        aria-hidden={!open}
      >
        <button
          type="button"
          tabIndex={open ? 0 : -1}
          aria-label="Cerrar menú"
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-ink/80 backdrop-blur-sm transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />
        <div
          className={`absolute right-0 top-0 flex h-full w-[86%] max-w-sm flex-col gap-8 border-l border-white/10 bg-ink-soft p-7 transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between">
            <Image
              src="/assets/img/oleada.png"
              alt="Oleada TV"
              width={110}
              height={46}
              className="h-8 w-auto"
            />
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Cerrar menú"
              tabIndex={open ? 0 : -1}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.6" />
              </svg>
            </button>
          </div>

          <nav className="flex flex-col gap-1" aria-label="Navegación móvil">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                tabIndex={open ? 0 : -1}
                className="rounded-xl px-3 py-3 font-display text-2xl font-medium text-white/80 transition-colors hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="mt-auto flex flex-col gap-3">
            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noreferrer"
              tabIndex={open ? 0 : -1}
              className="rounded-full bg-brand px-5 py-3.5 text-center font-semibold text-ink"
            >
              WhatsApp {CONTACT.phoneLabel}
            </a>
            <a
              href={CONTACT.telegram}
              target="_blank"
              rel="noreferrer"
              tabIndex={open ? 0 : -1}
              className="rounded-full border border-white/15 px-5 py-3.5 text-center font-semibold text-white"
            >
              Telegram
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
