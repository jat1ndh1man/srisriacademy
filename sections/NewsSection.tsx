"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Keyboard } from "swiper/modules";
import { news } from "@/data/site";
import { Button } from "@/components/ui/button";
import { SectionTitle } from "@/components/common/SectionTitle";
import "swiper/css";

export function NewsSection() {
  return (
    <section className="bg-cream/62 py-20">
      <div className="container-lux">
        <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <SectionTitle eyebrow="Latest news & events" title="The campus calendar is full of purposeful moments." />
          <Button variant="outline">View All News</Button>
        </div>
        <Swiper
          modules={[A11y, Keyboard]}
          keyboard={{ enabled: true }}
          spaceBetween={20}
          slidesPerView={1.08}
          breakpoints={{
            768: { slidesPerView: 2.25 },
            1024: { slidesPerView: 3.2 },
          }}
        >
          {news.map((item) => (
            <SwiperSlide key={item.title}>
              <article className="overflow-hidden rounded-[24px] border border-forest/10 bg-white shadow-[0_24px_70px_-46px_rgba(13,79,60,0.48)]">
                <div className="relative aspect-[1.55] overflow-hidden bg-cream">
                  <Image src={item.image} alt={item.title} fill sizes="(min-width:1024px) 32vw, 90vw" className="object-cover transition duration-700 hover:scale-105" />
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between text-xs font-bold uppercase tracking-[0.14em] text-gold">
                    <span>{item.category}</span>
                    <time>{item.date}</time>
                  </div>
                  <h3 className="mt-4 text-xl font-bold leading-tight text-forest">{item.title}</h3>
                  <a href="#" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-forest">
                    Read More
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
