"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  BookOpen,
  CirclePlay,
  FileText,
  Leaf,
  Quote,
} from "lucide-react";

const parentStories = [
  {
    name: "Ananya Sharma",
    role: "Parent of Class VII student",
    quote:
      "The perfect blend of academics, values, and care. Our daughter has become confident and genuinely happy.",
    image: "/images/parent-hub/parent-ananya.jpg",
  },
  {
    name: "Ritwick Sen",
    role: "Parent of a boarding student",
    quote:
      "The school communicates with warmth and precision. The daily rhythm has helped our son grow independent.",
    image: "/images/parent-hub/parent-ritwick.jpg",
  },
  {
    name: "Meera Agarwal",
    role: "Parent of Class XI student",
    quote:
      "Teachers know the children deeply. They expect sincere effort while always protecting their wellbeing.",
    image: "/images/parent-hub/parent-meera.jpg",
  },
];

const newsItems = [
  {
    title: "Annual Day celebrations",
    date: "12 Jan 2026",
    image: "/images/parent-hub/news-annual-day.jpg",
  },
  {
    title: "Inter-school sports meet",
    date: "04 Feb 2026",
    image: "/images/parent-hub/news-football.jpg",
  },
  {
    title: "Science exhibition",
    date: "18 Mar 2026",
    image: "/images/parent-hub/news-science.jpg",
  },
];

const parentResources = [
  "Why boarding school?",
  "AI in education",
  "Benefits of sports",
  "Building confidence",
];

export function ParentCommunityStrip() {
  const [selectedStory, setSelectedStory] = useState(0);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const timer = reducedMotion
      ? undefined
      : window.setInterval(
          () => setSelectedStory((current) => (current + 1) % parentStories.length),
          4300,
        );

    return () => {
      if (timer) window.clearInterval(timer);
    };
  }, []);

  const activeStory = parentStories[selectedStory];

  return (
    <section
      aria-label="Parent stories, principal message, school news, and parent resources"
      className="relative z-[1] overflow-hidden border-y border-forest/[0.08] bg-[#fffdf8] pt-5 pb-[74px]"
    >
      <div className="container-lux">
        <div className="grid overflow-hidden rounded-[14px] border border-forest/[0.08] bg-white shadow-[0_20px_60px_-50px_rgba(13,79,60,0.38)] md:grid-cols-2 lg:grid-cols-[1.02fr_1.1fr_1.58fr_0.94fr]">
          <article className="min-w-0 p-4 md:border-r md:border-forest/[0.08]">
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-forest/64">
              What parents say
            </p>

            <div
              key={activeStory.name}
              className="mt-2 grid min-h-[118px] grid-cols-[1fr_64px] items-center gap-3"
            >
              <div>
                <Quote
                  className="h-4 w-4 fill-gold/15 text-gold"
                  strokeWidth={1.7}
                  aria-hidden="true"
                />
                <blockquote className="mt-1.5 text-[10px] leading-[1.55] text-charcoal/68">
                  “{activeStory.quote}”
                </blockquote>
                <p className="mt-2 text-[9px] font-bold text-forest">{activeStory.name}</p>
                <p className="mt-0.5 text-[8px] text-charcoal/45">{activeStory.role}</p>
              </div>
              <Image
                src={activeStory.image}
                alt={activeStory.name}
                width={128}
                height={164}
                sizes="64px"
                className="h-[82px] w-16 rounded-[30px_30px_10px_10px] object-cover"
              />
            </div>

            <div className="mt-0.5 flex gap-1.5" aria-label="Parent story position">
              {parentStories.map((story, index) => (
                <span
                  key={story.name}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    selectedStory === index ? "w-5 bg-gold" : "w-1.5 bg-forest/15"
                  }`}
                />
              ))}
            </div>
          </article>

          <article className="relative min-h-[190px] overflow-hidden p-4 lg:border-r lg:border-forest/[0.08]">
            <Image
              src="/images/parent-hub/principal-message.jpg"
              alt="Principal of Sri Sri Academy"
              fill
              sizes="(min-width: 1024px) 27vw, 100vw"
              className="object-cover object-[62%_center]"
            />
            <div
              className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,253,248,.98)_0%,rgba(255,253,248,.93)_42%,rgba(255,253,248,.12)_78%)]"
              aria-hidden="true"
            />
            <div className="relative flex h-full min-h-[158px] max-w-[57%] flex-col">
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-forest/64">
                From our principal
              </p>
              <h2 className="mt-2.5 font-serif text-[1.3rem] font-semibold leading-[1.02] text-forest">
                A journey of discovery.
              </h2>
              <p className="mt-2.5 text-[9px] leading-[1.7] text-charcoal/60">
                Curiosity, discipline, and kindness belong in the same classroom.
              </p>
              <button
                type="button"
                className="focus-ring mt-auto inline-flex w-fit items-center gap-1.5 whitespace-nowrap rounded-[8px] bg-forest px-2.5 py-1.5 text-[9px] font-semibold text-white transition hover:bg-forest-deep"
              >
                <CirclePlay className="h-3 w-3" aria-hidden="true" />
                Watch message
              </button>
            </div>
          </article>

          <article className="p-4 md:border-r md:border-forest/[0.08]">
            <div className="flex items-center justify-between gap-3">
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-forest/64">
                Latest news &amp; events
              </p>
              <a
                href="#top"
                className="focus-ring inline-flex items-center gap-1 text-[9px] font-bold text-forest/55 transition hover:text-forest"
              >
                View all
                <ArrowRight className="h-3 w-3" aria-hidden="true" />
              </a>
            </div>

            <div className="mt-3 grid grid-cols-3 gap-2.5">
              {newsItems.map((item) => (
                <a key={item.title} href="#top" className="group focus-ring min-w-0">
                  <span className="relative block aspect-[1.34] overflow-hidden rounded-[8px] bg-cream">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(min-width: 1024px) 10vw, 30vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  </span>
                  <span className="mt-1.5 block text-[8px] font-semibold leading-[1.35] text-forest">
                    {item.title}
                  </span>
                  <time className="mt-0.5 block text-[7px] text-charcoal/42">{item.date}</time>
                </a>
              ))}
            </div>

            <a
              href="#top"
              className="focus-ring mt-3 inline-flex items-center gap-1.5 rounded-[8px] border border-forest/12 px-2.5 py-1.5 text-[8px] font-bold text-forest transition hover:bg-forest hover:text-white"
            >
              See school calendar
              <ArrowRight className="h-3 w-3" aria-hidden="true" />
            </a>
          </article>

          <article className="relative overflow-hidden bg-[#f3f8e9] p-4">
            <Leaf
              className="pointer-events-none absolute -right-6 top-4 h-28 w-28 rotate-[-18deg] text-[#a9c77b]/25"
              strokeWidth={1}
              aria-hidden="true"
            />
            <div className="relative">
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-forest/64">
                Parent resource centre
              </p>
              <ul className="mt-3 space-y-2">
                {parentResources.map((resource) => (
                  <li key={resource}>
                    <a
                      href="#top"
                      className="focus-ring group flex items-center gap-2 text-[9px] font-medium text-charcoal/64 transition hover:text-forest"
                    >
                      <FileText className="h-3 w-3 shrink-0 text-gold" aria-hidden="true" />
                      {resource}
                    </a>
                  </li>
                ))}
              </ul>
              <a
                href="#top"
                className="focus-ring mt-4 inline-flex items-center gap-2 rounded-[8px] bg-forest px-2.5 py-1.5 text-[8px] font-bold text-white transition hover:bg-forest-deep"
              >
                <BookOpen className="h-3.5 w-3.5" aria-hidden="true" />
                View all articles
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
