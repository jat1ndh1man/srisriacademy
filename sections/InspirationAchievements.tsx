import Image from "next/image";
import { ArrowRight, Sparkles, Trophy } from "lucide-react";
import { achievements } from "@/data/site";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function InspirationAchievements() {
  return (
    <section className="py-20">
      <div className="container-lux space-y-6">
        <div className="grid gap-6 lg:grid-cols-2">
          <article className="reveal-up relative min-h-[360px] overflow-hidden rounded-[24px] bg-forest p-8 text-white" data-reveal>
            <Image src="/images/gurudev.svg" alt="Gurudev Sri Sri Ravi Shankar" fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover opacity-82" />
            <div className="absolute inset-0 bg-gradient-to-r from-forest-deep/90 via-forest/48 to-transparent" />
            <div className="relative max-w-sm">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-gold">Our Inspiration</p>
              <h2 className="mt-4 font-serif text-5xl font-semibold leading-none">Guided by a vision of holistic education.</h2>
              <p className="mt-5 text-sm leading-7 text-white/72">A school culture shaped by wisdom, compassion, inquiry, and joyful discipline.</p>
              <Button variant="light" className="mt-7">Read More</Button>
            </div>
          </article>
          <article className="reveal-up relative min-h-[360px] overflow-hidden rounded-[24px] bg-forest-deep p-8 text-white" data-reveal>
            <Image src="/images/hall-of-fame.svg" alt="Award-winning Sri Sri Academy student" fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover opacity-88" />
            <div className="absolute inset-0 bg-gradient-to-r from-forest-deep/92 via-forest-deep/44 to-transparent" />
            <div className="relative max-w-sm">
              <div className="grid h-13 w-13 place-items-center rounded-[18px] bg-gold/18 text-gold shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]">
                <Trophy className="h-6 w-6" strokeWidth={1.7} />
              </div>
              <h2 className="mt-5 font-serif text-5xl font-semibold leading-none">Hall of Fame</h2>
              <p className="mt-5 text-sm leading-7 text-white/72">Celebrating students who bring honor to the school through steady effort and grace.</p>
              <Button variant="light" className="mt-7">View Achievements</Button>
            </div>
          </article>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {achievements.map((item) => (
            <Card key={item.title} className={`reveal-up overflow-hidden bg-gradient-to-br ${item.accent} p-6`} data-reveal>
              <div className="grid gap-6 sm:grid-cols-[0.9fr_1.1fr] lg:grid-cols-1 xl:grid-cols-[0.85fr_1.15fr]">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">{item.kicker}</p>
                  <h3 className="mt-3 text-2xl font-bold tracking-tight text-forest">{item.title}</h3>
                  <Image src={item.image} alt={item.title} width={360} height={420} className="mt-5 aspect-[0.86] w-full rounded-[20px] object-cover" />
                </div>
                <div className="self-end rounded-[22px] border border-white/60 bg-white/62 p-5 backdrop-blur-xl">
                  <ul className="space-y-3">
                    {item.points.map((point) => (
                      <li key={point} className="flex items-start gap-3 text-sm font-semibold leading-5 text-charcoal/78">
                        <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={1.8} />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <Button className="mt-5 w-full" size="sm">
                    Explore
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
