import { CONTACT } from "@/lib/site-data";

export function ContactFab() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <a
        href={CONTACT.telegram}
        target="_blank"
        rel="noreferrer"
        aria-label="Contactar por Telegram"
        className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-ink-card/90 text-white backdrop-blur transition-transform hover:scale-110"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M21.9 4.3l-3.3 15.6c-.2 1.1-.9 1.4-1.8.9l-5-3.7-2.4 2.3c-.3.3-.5.5-1 .5l.4-5.1L18.1 6c.4-.3-.1-.5-.6-.2L6.1 12.9l-5-1.6c-1.1-.3-1.1-1 .2-1.5l19.5-7.5c.9-.3 1.7.2 1.4 1.2z" />
        </svg>
      </a>
      <a
        href={CONTACT.whatsapp}
        target="_blank"
        rel="noreferrer"
        aria-label="Contactar por WhatsApp"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-brand text-ink shadow-[0_10px_30px_-8px_var(--color-brand)] transition-transform hover:scale-110"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M17.5 14.4c-.3-.2-1.7-.9-2-1-.3-.1-.5-.2-.7.1l-1 1.2c-.2.2-.3.3-.6.1-1.7-.8-2.8-1.5-3.9-3.4-.3-.5.3-.5.8-1.5.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-1 1-1.2 2.3-.7 3.7.9 2.4 2.6 4.4 5 5.6 2.2 1.1 3.2 1 4.1.8.6-.1 1.7-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.4zM12 2a10 10 0 00-8.6 15L2 22l5.2-1.4A10 10 0 1012 2zm0 18.2c-1.6 0-3.1-.4-4.4-1.2l-.3-.2-3.1.8.8-3-.2-.3A8.2 8.2 0 1112 20.2z" />
        </svg>
      </a>
    </div>
  );
}
