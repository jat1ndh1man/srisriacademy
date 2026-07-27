import { cn } from "@/lib/utils";

type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionTitle({ eyebrow, title, description, align = "left", className }: SectionTitleProps) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow ? (
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-gold">{eyebrow}</p>
      ) : null}
      <h2 className="font-serif text-4xl font-semibold leading-[0.96] tracking-tight text-forest md:text-6xl">
        {title}
      </h2>
      {description ? (
        <p className={cn("mt-5 text-base leading-7 text-charcoal/68 md:text-lg", align === "center" && "mx-auto")}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
