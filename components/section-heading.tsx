type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  highlight?: string;
  body?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  highlight,
  body,
  align = "center",
}: SectionHeadingProps) {
  const isCentered = align === "center";

  return (
    <div className={`max-w-3xl ${isCentered ? "mx-auto text-center" : ""}`}>
      <span className="text-xs font-semibold uppercase tracking-[0.22em] text-brand">
        {eyebrow}
      </span>
      <h2 className="mt-4 font-display text-[clamp(1.9rem,4.2vw,3.1rem)] font-semibold leading-[1.1] tracking-tight text-white">
        {title} {highlight ? <span className="text-gradient">{highlight}</span> : null}
      </h2>
      {body ? <p className="mt-5 text-base leading-relaxed text-white/60">{body}</p> : null}
    </div>
  );
}
