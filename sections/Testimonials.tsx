"use client";

import Image from "next/image";
import { useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Quote, Star } from "lucide-react";
import { testimonials } from "@/data/site";
import { SectionTitle } from "@/components/common/SectionTitle";

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });

  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const timer = window.setInterval(scrollNext, 5200);
    return () => window.clearInterval(timer);
  }, [emblaApi, scrollNext]);

  return (
    <section className="py-20">
      <div className="container-lux grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
        <SectionTitle
          eyebrow="What parents say"
          title="Confidence you can hear in their voices."
          description="Families value the blend of academic seriousness, kindness, and daily structure."
        />
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-5">
            {testimonials.map((item) => (
              <article key={item.name} className="min-w-0 flex-[0_0_92%] rounded-[24px] border border-forest/10 bg-white p-6 shadow-[0_24px_70px_-44px_rgba(13,79,60,0.48)] md:flex-[0_0_48%]">
                <div className="flex items-center gap-4">
                  <Image src={item.image} alt={item.name} width={72} height={72} className="h-18 w-18 rounded-full object-cover" />
                  <div>
                    <h3 className="font-bold text-forest">{item.name}</h3>
                    <p className="text-xs font-semibold text-charcoal/54">{item.role}</p>
                  </div>
                </div>
                <Quote className="mt-8 h-8 w-8 text-gold" strokeWidth={1.6} />
                <p className="mt-4 text-base leading-7 text-charcoal/72">{item.quote}</p>
                <div className="mt-6 flex gap-1 text-gold" aria-label="Five star rating">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className="h-4 w-4 fill-current" strokeWidth={1.6} />
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
