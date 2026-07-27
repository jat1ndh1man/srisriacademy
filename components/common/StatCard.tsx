"use client";

import Image from "next/image";
import CountUp from "react-countup";

type StatCardProps = {
  value?: number;
  suffix?: string;
  text?: string;
  label: string;
  animatedIcon: string;
};

const LORDICON_BASE = "https://media.lordicon.com/icons/wired/outline";
const LORDICON_COLORS = "primary:#0d4f3c,secondary:#c99a3b";

function AnimatedStatIcon({ name, label }: { name: string; label: string }) {
  const iconBase = `${LORDICON_BASE}/${name}`;

  return (
    <div className="group/icon relative grid h-10 w-10 shrink-0 place-items-center overflow-hidden rounded-[14px] border border-forest/10 bg-white shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_14px_28px_-22px_rgba(13,79,60,0.72)]">
      <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_35%_20%,rgba(215,166,70,0.18),transparent_56%)] opacity-90" />
      <lord-icon
        aria-hidden="true"
        className="relative block h-7 w-7"
        colors={LORDICON_COLORS}
        loading="lazy"
        src={`${iconBase}.li`}
        speed="0.56"
        stroke="light"
        trigger="loop"
        style={{ width: 28, height: 28 }}
      >
        <Image
          alt=""
          className="h-7 w-7 object-contain opacity-90"
          height={28}
          loading="lazy"
          src={`${iconBase}.svg`}
          unoptimized
          width={28}
        />
      </lord-icon>
      <span className="sr-only">{label}</span>
    </div>
  );
}

export function StatCard({ value, suffix = "", text, label, animatedIcon }: StatCardProps) {
  return (
    <div className="flex min-h-15 items-center gap-3 border-forest/10 px-3 py-2 transition duration-300 hover:bg-cream/40 md:border-r last:md:border-r-0">
      <AnimatedStatIcon name={animatedIcon} label={label} />
      <div className="min-w-0">
        <p className="whitespace-nowrap text-sm font-extrabold leading-tight text-charcoal md:text-base">
          {text ?? (typeof value === "number" ? <CountUp end={value} duration={2.2} enableScrollSpy scrollSpyOnce /> : null)}
          {suffix}
        </p>
        <p className="mt-0.5 whitespace-nowrap text-[10px] font-semibold leading-tight text-charcoal/58 md:text-[11px]">{label}</p>
      </div>
    </div>
  );
}
