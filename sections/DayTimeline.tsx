"use client";

import type { CSSProperties, ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { dayTimeline } from "@/data/site";
import { SectionTitle } from "@/components/common/SectionTitle";
import { cn } from "@/lib/utils";

const TIMELINE_CARD_ACTIVE_MS = 2000;
const TIMELINE_LINE_TRAVEL_MS = 900;

function TimelineIcon({ name, title, isActive }: { name: string; title: string; isActive: boolean }) {
  const icon = getTimelineIcon(name);

  return (
    <div
      aria-label={title}
      className={cn(
        "day-activity-icon group relative mx-auto grid h-[5.25rem] w-[5.25rem] place-items-center rounded-full border border-white/90 bg-white text-forest shadow-[inset_0_1px_0_rgba(255,255,255,0.96),0_22px_58px_-36px_rgba(13,79,60,0.58)] transition duration-300 hover:-translate-y-1 hover:border-gold/40 hover:bg-[#fffdf8] hover:text-forest-deep hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.98),0_28px_62px_-34px_rgba(13,79,60,0.62)] focus-visible:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/55 focus-visible:ring-offset-4 focus-visible:ring-offset-[#eaf6ff]",
        isActive && "is-active",
      )}
      role="img"
      tabIndex={0}
    >
      <span className="day-activity-icon__glow pointer-events-none absolute inset-1 rounded-full bg-[radial-gradient(circle_at_36%_22%,rgba(217,164,65,0.18),transparent_52%)] opacity-0 transition duration-300 group-hover:opacity-100" />
      <span className="day-activity-icon__ring pointer-events-none absolute -inset-1 rounded-full border border-gold/0 transition duration-300 group-hover:border-gold/24" />
      {icon}
    </div>
  );
}

function iconBase(children: ReactNode) {
  return (
    <svg aria-hidden="true" className="relative h-14 w-14 overflow-visible" fill="none" viewBox="0 0 64 64">
      {children}
    </svg>
  );
}

function getTimelineIcon(name: string) {
  if (name.includes("yoga")) {
    return iconBase(
      <>
        <circle className="day-icon__breath fill-[#f7ead1] stroke-current" cx="32" cy="19" r="7" strokeWidth="2.4" />
        <path className="day-icon__breath stroke-current" d="M32 27v13" strokeLinecap="round" strokeWidth="2.4" />
        <path className="day-icon__yoga-arm stroke-current" d="M18 35c5.2-4.2 9.8-6.2 14-6.2S40.8 30.8 46 35" strokeLinecap="round" strokeWidth="2.4" />
        <path className="day-icon__yoga-leg stroke-gold" d="M18 48c5.7-4.3 10.3-6.4 14-6.4S40.3 43.7 46 48" strokeLinecap="round" strokeWidth="2.6" />
        <path className="day-icon__yoga-leg stroke-gold" d="M24 49h16" strokeLinecap="round" strokeWidth="2.6" />
      </>,
    );
  }

  if (name.includes("fork-knife")) {
    return iconBase(
      <>
        <g className="day-icon__fork stroke-current" strokeLinecap="round" strokeWidth="2.4">
          <path d="M21 13v18" />
          <path d="M16 13v14c0 4 2.2 6 5 6s5-2 5-6V13" />
          <path d="M21 33v18" />
        </g>
        <g className="day-icon__knife stroke-gold" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.4">
          <path d="M43 13c5.2 6.2 4.8 16.8-.8 21.8" />
          <path d="M42.2 13v38" />
        </g>
        <circle className="day-icon__spark fill-gold" cx="33" cy="18" r="2" />
      </>,
    );
  }

  if (name.includes("book")) {
    return iconBase(
      <>
        <path className="day-icon__book-spine stroke-current" d="M32 18v31" strokeLinecap="round" strokeWidth="2.4" />
        <path className="day-icon__book-left fill-[#eef8f3] stroke-current" d="M32 20c-5.8-4.5-12-5.3-18-2.2v28c6-3.1 12.2-2.3 18 2.2V20Z" strokeLinejoin="round" strokeWidth="2.4" />
        <path className="day-icon__book-right fill-[#fff8e9] stroke-gold" d="M32 20c5.8-4.5 12-5.3 18-2.2v28c-6-3.1-12.2-2.3-18 2.2V20Z" strokeLinejoin="round" strokeWidth="2.4" />
        <path className="day-icon__book-line stroke-current" d="M20 25.5c2.8-.5 5.2.1 7.4 1.7" strokeLinecap="round" strokeWidth="1.8" />
        <path className="day-icon__book-line stroke-gold" d="M37 27.2c2.2-1.4 4.5-1.8 7-1.3" strokeLinecap="round" strokeWidth="1.8" />
      </>,
    );
  }

  if (name.includes("microscope")) {
    return iconBase(
      <>
        <g className="day-icon__scope-head stroke-current" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.4">
          <path d="M28 15h15v8H28z" />
          <path d="M31 23l-7 12" />
          <path d="M39 23l-8 14" />
        </g>
        <path className="stroke-gold" d="M20 49h29" strokeLinecap="round" strokeWidth="2.6" />
        <path className="stroke-current" d="M25 41c2.4 4.8 6.2 7.2 11.3 7.2 5.2 0 9-2.6 11.7-7.7" strokeLinecap="round" strokeWidth="2.4" />
        <circle className="day-icon__bubble-a fill-gold" cx="45" cy="23" r="2.2" />
        <circle className="day-icon__bubble-b fill-[#0d4f3c]" cx="50" cy="17" r="1.8" />
      </>,
    );
  }

  if (name.includes("weight") || name.includes("fitness")) {
    return iconBase(
      <>
        <g className="day-icon__dumbbell stroke-current" strokeLinecap="round" strokeWidth="2.6">
          <path d="M17 32h30" />
          <path d="M12 25v14" />
          <path d="M18 23v18" />
          <path d="M46 23v18" />
          <path d="M52 25v14" />
        </g>
        <path className="day-icon__ground stroke-gold" d="M19 48h26" strokeLinecap="round" strokeWidth="2.5" />
      </>,
    );
  }

  if (name.includes("music")) {
    return iconBase(
      <>
        <path className="day-icon__music-stem stroke-current" d="M38 16v27" strokeLinecap="round" strokeWidth="2.5" />
        <path className="day-icon__music-stem stroke-current" d="M38 16l12 4v8l-12-4" strokeLinejoin="round" strokeWidth="2.5" />
        <circle className="day-icon__music-note fill-[#eef8f3] stroke-current" cx="30" cy="44" r="6" strokeWidth="2.4" />
        <path className="day-icon__sound-a stroke-gold" d="M18 24c3 1.8 4.6 4.5 4.6 8s-1.6 6.2-4.6 8" strokeLinecap="round" strokeWidth="2.3" />
        <path className="day-icon__sound-b stroke-gold" d="M12 20c4.8 3.2 7.2 7.2 7.2 12S16.8 40.8 12 44" strokeLinecap="round" strokeWidth="2" />
      </>,
    );
  }

  return iconBase(
    <>
      <path className="day-icon__moon fill-[#fff8e9] stroke-gold" d="M40.5 15.5c-4 2-6.5 6.1-6.5 10.7 0 6.7 5.4 12.1 12.1 12.1 1.3 0 2.5-.2 3.7-.6-2.1 4.9-7 8.3-12.7 8.3C29.5 46 23.4 39.9 23.4 32.3c0-7.1 5.4-13 12.3-13.7 1.6-.2 3.2.1 4.8.9Z" strokeLinejoin="round" strokeWidth="2.4" />
      <path className="day-icon__sleep-a stroke-current" d="M16 21h7l-7 8h8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" />
      <path className="day-icon__sleep-b stroke-current" d="M14 38h6l-6 7h7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <circle className="day-icon__star fill-gold" cx="46" cy="18" r="2" />
    </>,
  );
}

export function DayTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [flowingIndex, setFlowingIndex] = useState<number | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-timeline-item]",
        { autoAlpha: 0, y: 22 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.65,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 72%",
            once: true,
          },
        },
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (reduceMotion.matches) {
      return undefined;
    }

    let advanceTimer: number | undefined;
    const flowTimer = window.setTimeout(() => {
      if (activeIndex >= dayTimeline.length - 1) {
        setActiveIndex(0);
        return;
      }

      setFlowingIndex(activeIndex);
      advanceTimer = window.setTimeout(() => {
        setFlowingIndex(null);
        setActiveIndex(activeIndex + 1);
      }, TIMELINE_LINE_TRAVEL_MS);
    }, TIMELINE_CARD_ACTIVE_MS);

    return () => {
      window.clearTimeout(flowTimer);

      if (advanceTimer) {
        window.clearTimeout(advanceTimer);
      }
    };
  }, [activeIndex]);

  return (
    <section id="day-at-sri-sri-academy" className="relative isolate overflow-hidden bg-[#eaf6ff] py-20" ref={ref}>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-20 right-0 z-0 h-[22rem] w-[13rem] bg-[url('/images/day/schoolgirl.png')] bg-contain bg-right-bottom bg-no-repeat opacity-20 sm:-bottom-28 sm:h-[28rem] sm:w-[17rem] sm:opacity-25 lg:-bottom-56 lg:h-[42rem] lg:w-[25rem] lg:opacity-35 xl:-bottom-72 xl:h-[48rem] xl:w-[29rem] xl:opacity-45"
      />
      <div className="container-lux relative z-10">
        <SectionTitle align="center" title="A Day at Sri Sri Academy" description="A calm rhythm of mindfulness, learning, play, creativity, and supervised study." />
        <div className="-mx-4 mt-9 snap-x overflow-x-auto px-4 pb-4 pt-7 [scrollbar-width:none] sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 [&::-webkit-scrollbar]:hidden">
          <div className="grid min-w-[980px] grid-cols-9 items-start gap-4">
            {dayTimeline.map((item, index) => (
              <div
                key={item.title}
                data-timeline-item
                className={cn("relative min-h-[9.75rem] snap-center text-center", activeIndex === index && "is-active")}
              >
                {index < dayTimeline.length - 1 ? (
                  <div
                    className={cn("day-timeline-connector absolute left-[64%] top-10 h-px w-[72%]", flowingIndex === index && "is-active")}
                    style={{ "--day-flow-duration": `${TIMELINE_LINE_TRAVEL_MS}ms` } as CSSProperties}
                  >
                    <span className="day-timeline-connector__track" />
                    <span className="day-timeline-connector__flow" />
                  </div>
                ) : null}
                <TimelineIcon name={item.animatedIcon} title={item.title} isActive={activeIndex === index} />
                <p className="mt-5 text-xs font-extrabold text-charcoal">{item.time}</p>
                <p className="mt-1 text-sm font-semibold leading-tight text-forest">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
