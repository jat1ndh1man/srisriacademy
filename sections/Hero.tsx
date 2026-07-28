"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowDownToLine, ChevronLeft, ChevronRight, Leaf, MapPinned } from "lucide-react";
import { heroSlides, stats } from "@/data/site";
import { Button } from "@/components/ui/button";
import { StatCard } from "@/components/common/StatCard";
import { cn } from "@/lib/utils";

const AUTOPLAY_MS = 6000;

const highlightedHeroTitles: Record<string, { lead: string; accent: string }> = {
  campus: { lead: "Every Child Carries", accent: "Infinite Potential." },
  boarding: { lead: "A Calm Home for", accent: "Growing Up" },
  sports: { lead: "Strength With", accent: "Grace" },
  arts: { lead: "Music, Dance, and", accent: "Expression" },
  learning: { lead: "Inquiry, Nature, and", accent: "Imagination" },
  videos: { lead: "Learning Comes Alive", accent: "Across Campus" },
};

const topperCards = [
  {
    name: "Garvit Singhal",
    position: "left",
    delay: 0.08,
  },
  {
    name: "Sanchita Ghosh",
    position: "center",
    delay: 0.18,
  },
  {
    name: "Baibhav Dhamala",
    position: "right",
    delay: 0.28,
  },
];

export function Hero() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [railOpen, setRailOpen] = useState(false);
  const startX = useRef<number | null>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 80, damping: 24 });
  const springY = useSpring(mouseY, { stiffness: 80, damping: 24 });
  const leafX = useTransform(springX, [-0.5, 0.5], [-18, 18]);
  const leafY = useTransform(springY, [-0.5, 0.5], [-12, 12]);

  const slide = heroSlides[active];
  const isToppers = slide.id === "toppers";
  const isCampus = slide.id === "campus";
  const isVideo = slide.mediaType === "video";
  const highlightedTitle = highlightedHeroTitles[slide.id];

  const next = useCallback(() => setActive((value) => (value + 1) % heroSlides.length), []);
  const previous = useCallback(() => setActive((value) => (value - 1 + heroSlides.length) % heroSlides.length), []);

  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(next, AUTOPLAY_MS);
    return () => window.clearInterval(timer);
  }, [next, paused]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") next();
      if (event.key === "ArrowLeft") previous();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, previous]);

  return (
    <section
      id="top"
      className="relative min-h-[100dvh] overflow-hidden bg-ivory text-forest"
      onPointerMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        mouseX.set((event.clientX - rect.left) / rect.width - 0.5);
        mouseY.set((event.clientY - rect.top) / rect.height - 0.5);
      }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onPointerDown={(event) => {
        startX.current = event.clientX;
      }}
      onPointerUp={(event) => {
        if (startX.current === null) return;
        const delta = event.clientX - startX.current;
        if (Math.abs(delta) > 48) {
          if (delta < 0) next();
          else previous();
        }
        startX.current = null;
      }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.title}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0"
        >
          {isVideo && slide.video ? (
            <video
              key={slide.video}
              className="absolute inset-0 h-full w-full object-cover"
              poster={slide.poster}
              muted
              autoPlay
              loop
              playsInline
              preload={active === 0 ? "metadata" : "none"}
              aria-hidden
            >
              <source src={slide.video} type="video/mp4" />
            </video>
          ) : (
            <Image
              src={isToppers ? "/images/hero/campus.png" : slide.image}
              alt=""
              fill
              priority={active === 0}
              sizes="100vw"
              className={cn(isCampus ? "object-contain" : "object-cover")}
              style={isCampus ? { objectPosition: "center 104px", transform: "scale(1.12)", transformOrigin: "center top" } : undefined}
            />
          )}
          {isToppers ? (
            <>
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,250,237,0.88)_0%,rgba(255,247,225,0.66)_34%,rgba(255,220,121,0.24)_62%,rgba(8,45,82,0.36)_100%)]" />
              <div className="absolute inset-x-0 bottom-0 h-[34%] bg-[linear-gradient(0deg,rgba(6,39,76,0.86)_0%,rgba(6,39,76,0.48)_28%,rgba(6,39,76,0)_100%)]" />
            </>
          ) : null}
          <div
            className={cn(
              "absolute inset-0",
              isVideo
                ? "bg-[linear-gradient(90deg,rgba(255,253,248,0.74)_0%,rgba(255,253,248,0.52)_32%,rgba(255,253,248,0.08)_60%,rgba(255,244,219,0.22)_100%)]"
                : isCampus
                  ? "bg-[linear-gradient(90deg,rgba(255,253,248,0.66)_0%,rgba(255,253,248,0.36)_34%,rgba(255,253,248,0.04)_60%,rgba(255,244,219,0.16)_100%)]"
                  : isToppers
                    ? "bg-transparent"
                  : "bg-[linear-gradient(90deg,rgba(255,253,248,0.74)_0%,rgba(255,253,248,0.52)_32%,rgba(255,253,248,0.08)_60%,rgba(255,244,219,0.22)_100%)]",
            )}
          />
          <div
            className={cn(
              "absolute inset-0",
              isCampus
                ? "bg-[linear-gradient(0deg,rgba(255,253,248,0.18)_0%,rgba(255,253,248,0)_18%)]"
                : isToppers
                  ? "bg-[linear-gradient(0deg,rgba(255,189,35,0.28)_0%,rgba(255,253,248,0)_28%)]"
                : "bg-[linear-gradient(0deg,rgba(255,253,248,0.52)_0%,rgba(255,253,248,0)_22%)]",
            )}
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_16%,rgba(217,164,65,0.1),transparent_30rem)]" />
        </motion.div>
      </AnimatePresence>

      <motion.div
        style={{ x: leafX, y: leafY }}
        className="pointer-events-none absolute right-[8vw] top-32 hidden text-gold/30 lg:block"
        aria-hidden
      >
        <Leaf className="h-28 w-28" strokeWidth={0.7} />
      </motion.div>
      <motion.div
        style={{ x: leafY, y: leafX }}
        className="pointer-events-none absolute -left-8 top-28 text-gold/28"
        aria-hidden
      >
        <Leaf className="h-32 w-32 rotate-45" strokeWidth={0.7} />
      </motion.div>

      <div className="container-lux relative flex min-h-[100dvh] flex-col justify-end pb-8 pt-32 lg:pb-10">
        <div className="grid flex-1 items-center gap-10 lg:grid-cols-[1fr]">
          <AnimatePresence mode="wait">
            {isToppers ? (
              <motion.div
                key={slide.title}
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="grid items-center gap-7 pt-8 sm:pt-10 lg:grid-cols-[0.36fr_minmax(0,0.64fr)] lg:gap-10 lg:pr-52"
              >
                <div className="max-w-[34rem]">
                  <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#0b3264]">Sri Sri Academy</p>
                  <div className="mt-4 h-[3px] w-16 rounded-full bg-gold" />
                  <h1 className="mt-5 text-balance font-serif text-5xl font-semibold leading-[0.92] tracking-tight text-[#082a55] sm:text-6xl lg:text-[5.35rem]">
                    Excellence in Every Step
                  </h1>
                  <div className="mt-5 h-[3px] w-20 rounded-full bg-gold" />
                  <p className="mt-6 max-w-[28rem] text-base font-medium leading-7 text-charcoal/78 sm:text-lg sm:leading-8">
                    Our students continue to raise the bar with their dedication, discipline and academic brilliance.
                  </p>
                </div>

                <div className="relative">
                  <div className="pointer-events-none absolute left-1/2 top-1/2 hidden h-[26rem] w-[44rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/15 blur-3xl lg:block" />
                  <div className="-mx-4 flex items-start gap-4 overflow-x-auto px-4 pb-2 sm:mx-0 sm:grid sm:grid-cols-3 sm:gap-5 sm:overflow-visible sm:px-0 sm:pb-0">
                    {topperCards.map((student) => (
                      <motion.div
                        key={student.name}
                        role="img"
                        aria-label={student.name}
                        initial={{ opacity: 0, y: 22, rotate: student.position === "center" ? 0 : student.position === "left" ? -1.5 : 1.5 }}
                        animate={{ opacity: 1, y: student.position === "center" ? -10 : 0, rotate: student.position === "center" ? 0 : student.position === "left" ? -1.5 : 1.5 }}
                        transition={{ duration: 0.65, delay: student.delay, ease: [0.16, 1, 0.3, 1] }}
                        className="relative mx-auto h-[clamp(260px,36vw,366px)] w-[clamp(140px,19.4vw,196px)] rounded-[18px] border-[3px] border-white bg-white bg-[url('/images/toppers.png')] bg-[length:323%_auto] bg-no-repeat shadow-[0_28px_72px_-38px_rgba(7,50,100,0.84)] ring-1 ring-[#0b3264]/8 sm:rounded-[20px]"
                        style={{ backgroundPosition: `${student.position} top` }}
                      />
                    ))}
                  </div>
                  <div className="mt-7 flex justify-center">
                    <Button variant="gold" size="lg" className="h-[3.25rem] rounded-[16px] px-7 text-base font-extrabold text-[#092b55] shadow-[0_20px_44px_-24px_rgba(184,126,16,0.85)]">
                      Apply for Admission
                    </Button>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key={slide.title}
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="max-w-4xl pt-10"
              >
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.32em] text-forest/78">{slide.eyebrow}</p>
                  <h1
                    className={cn(
                      "mt-5 max-w-4xl font-serif text-5xl font-semibold leading-[0.95] tracking-tight text-forest sm:text-6xl lg:text-8xl",
                    )}
                  >
                    {highlightedTitle ? (
                      <>
                        {highlightedTitle.lead} <span className="text-gold">{highlightedTitle.accent}</span>
                      </>
                    ) : (
                      slide.title
                    )}
                  </h1>
                  <p className="mt-6 max-w-2xl text-base font-medium leading-8 text-charcoal/72 md:text-lg">
                    {slide.description}
                  </p>
                  <div className={cn("mt-8 flex flex-col gap-3 sm:flex-row", isCampus && "lg:mt-6")}>
                    <Button size="lg">
                      <MapPinned className="h-4 w-4" />
                      Find a Campus Near You
                    </Button>
                    <Button variant="outline" size="lg">
                      <ArrowDownToLine className="h-4 w-4" />
                      Download Prospectus
                    </Button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="pointer-events-none absolute right-[calc((100vw-100%)/-2)] top-1/2 z-20 hidden h-[420px] w-[228px] -translate-y-1/2 lg:block xl:w-[242px]">
            <button
              type="button"
              onClick={() => setRailOpen((value) => !value)}
              className={cn(
                "focus-ring pointer-events-auto absolute right-0 top-1/2 grid h-24 w-10 -translate-y-1/2 place-items-center rounded-l-[18px] border border-r-0 border-white/70 bg-white/82 text-forest shadow-[0_18px_44px_-32px_rgba(13,79,60,0.7)] backdrop-blur-xl transition-colors duration-200 hover:bg-white active:scale-[0.98]",
                railOpen && "-translate-x-[188px] xl:-translate-x-[202px]",
              )}
              aria-label={railOpen ? "Collapse hero navigation" : "Expand hero navigation"}
              aria-expanded={railOpen}
            >
              {railOpen ? <ChevronRight className="h-5 w-5" /> : <ChevronLeft className="h-5 w-5" />}
            </button>

            <AnimatePresence initial={false}>
              {railOpen && (
                <motion.div
                  initial={{ x: 18, y: "-50%", opacity: 0 }}
                  animate={{ x: 0, y: "-50%", opacity: 1 }}
                  exit={{ x: 18, y: "-50%", opacity: 0 }}
                  transition={{ type: "spring", stiffness: 140, damping: 24 }}
                  className="pointer-events-auto glass-panel absolute right-0 top-1/2 w-[188px] rounded-l-[24px] rounded-r-none border-r-0 p-1.5 xl:w-[202px]"
                >
                  <p className="px-3 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-forest/54">Explore</p>
                  <div className="grid gap-1.5">
                    {heroSlides.map((item, index) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setActive(index)}
                        className={cn(
                          "focus-ring group flex min-h-11 items-center justify-between rounded-[15px] px-3 py-2 text-left text-xs font-bold transition duration-300 active:translate-y-[1px] lg:min-h-10",
                          active === index
                            ? "bg-forest text-white shadow-[0_18px_42px_-28px_rgba(13,79,60,0.75)]"
                            : "bg-white/62 text-forest hover:bg-white",
                        )}
                        aria-pressed={active === index}
                      >
                        <span>{item.navLabel}</span>
                        <span
                          className={cn(
                            "grid h-6 w-6 place-items-center rounded-full border text-[10px] transition",
                            active === index ? "border-white/28 bg-white/14" : "border-forest/10 bg-cream text-forest/70",
                          )}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="mt-8 w-full lg:hidden">
            <div className="glass-panel w-full rounded-[22px] p-1.5">
              <p className="px-3 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-forest/54">Explore</p>
              <div className="grid gap-1.5 sm:grid-cols-3">
                {heroSlides.map((item, index) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActive(index)}
                    className={cn(
                      "focus-ring group flex min-h-11 items-center justify-between rounded-[15px] px-3 py-2 text-left text-xs font-bold transition duration-300 active:translate-y-[1px]",
                      active === index ? "bg-forest text-white" : "bg-white/62 text-forest",
                    )}
                    aria-pressed={active === index}
                  >
                    <span>{item.navLabel}</span>
                    <span className="grid h-6 w-6 place-items-center rounded-full border border-forest/10 bg-cream text-[10px] text-forest/70">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 overflow-x-auto rounded-[20px] border border-white/82 bg-white/94 shadow-[0_20px_60px_-42px_rgba(13,79,60,0.48)] backdrop-blur-xl">
          <div className="grid min-w-[900px] grid-cols-7">
            {stats.map((stat) => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
