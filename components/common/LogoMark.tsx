import Image from "next/image";

export function LogoMark({ inverse = false }: { inverse?: boolean }) {
  return (
    <div className="flex items-center gap-3" aria-label="Sri Sri Academy Siliguri">
      <div className="grid h-14 w-14 place-items-center rounded-full border border-forest/10 bg-white shadow-[0_16px_40px_-30px_rgba(13,79,60,0.7)]">
        <Image src="/images/academy-logo.png" alt="" width={42} height={42} className="h-10 w-10 object-contain" />
      </div>
      <div className="leading-none">
        <p className={inverse ? "text-sm font-bold tracking-[0.16em] text-white" : "text-lg font-bold tracking-[0.12em] text-forest"}>
          SRI SRI ACADEMY
        </p>
        <p className={inverse ? "mt-1 text-[10px] font-semibold tracking-[0.42em] text-white/62" : "mt-1 text-xs font-medium tracking-[0.01em] text-charcoal/52"}>
          Nurturing Intellect. Inspiring Hearts.
        </p>
      </div>
    </div>
  );
}
