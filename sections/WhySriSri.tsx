import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { whyCards } from "@/data/site";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SectionTitle } from "@/components/common/SectionTitle";

export function WhySriSri() {
  return (
    <section className="py-24">
      <div className="container-lux grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
        <div className="reveal-up self-start lg:sticky lg:top-28" data-reveal>
          <SectionTitle
            eyebrow="Why families choose us"
            title="Sri Sri Academy blends excellence with character."
            description="Small moments matter here: a teacher's question, a morning breath, a match won with dignity, and a child learning to think clearly."
          />
          <Button className="mt-8">
            Know More
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {whyCards.map((card, index) => (
            <Card
              key={card.title}
              className="reveal-up group overflow-hidden p-3 transition duration-500 hover:-translate-y-1 hover:border-gold/40"
              data-reveal
              style={{ transitionDelay: `${index * 40}ms` }}
            >
              <div className="relative aspect-[1.32] overflow-hidden rounded-[18px] bg-cream">
                <Image src={card.image} alt={card.title} fill sizes="(min-width:1280px) 280px, 50vw" className="object-cover transition duration-700 group-hover:scale-105" />
              </div>
              <div className="p-4">
                <div className="grid h-11 w-11 place-items-center rounded-[15px] bg-gold/16 text-forest">
                  <card.icon className="h-5 w-5" strokeWidth={1.8} />
                </div>
                <h3 className="mt-5 text-lg font-bold text-forest">{card.title}</h3>
                <p className="mt-3 text-sm leading-6 text-charcoal/65">{card.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
