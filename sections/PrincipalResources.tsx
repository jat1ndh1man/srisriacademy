import Image from "next/image";
import { ArrowRight, BookOpen, CirclePlay, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

export function PrincipalResources() {
  return (
    <section className="py-20">
      <div className="container-lux grid gap-6 lg:grid-cols-[1fr_1.1fr_0.8fr]">
        <article className="rounded-[24px] border border-forest/10 bg-white p-6 shadow-[0_24px_70px_-46px_rgba(13,79,60,0.46)]">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">Parent resource centre</p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-forest">Helpful reading for families.</h2>
          <ul className="mt-6 space-y-4">
            {["Why boarding schools shape independence", "AI in education with wise boundaries", "Benefits of sports in adolescence", "Building confidence in children"].map((item) => (
              <li key={item}>
                <a href="#" className="group flex items-center justify-between gap-4 rounded-[18px] bg-cream/70 px-4 py-3 text-sm font-semibold text-charcoal transition hover:bg-white">
                  <span className="flex items-center gap-3">
                    <FileText className="h-4 w-4 text-gold" />
                    {item}
                  </span>
                  <ArrowRight className="h-4 w-4 text-forest transition group-hover:translate-x-1" />
                </a>
              </li>
            ))}
          </ul>
        </article>

        <article className="relative min-h-[360px] overflow-hidden rounded-[24px] bg-forest-deep text-white shadow-[0_24px_70px_-46px_rgba(13,79,60,0.62)]">
          <Image src="/images/principal.svg" alt="Principal of Sri Sri Academy" fill sizes="(min-width:1024px) 42vw, 100vw" className="object-cover opacity-90" />
          <div className="absolute inset-0 bg-gradient-to-r from-forest-deep/86 via-forest-deep/48 to-transparent" />
          <div className="relative flex h-full min-h-[360px] flex-col justify-between p-7">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">From our principal</p>
              <h2 className="mt-4 max-w-md font-serif text-5xl font-semibold leading-none">Education is a journey of discovery.</h2>
              <p className="mt-5 max-w-sm text-sm leading-7 text-white/72">
                We welcome you to a school where discipline, curiosity, and kindness sit in the same classroom.
              </p>
            </div>
            <Button variant="light" className="w-fit">
              <CirclePlay className="h-4 w-4" />
              Watch Message
            </Button>
          </div>
        </article>

        <article className="rounded-[24px] border border-forest/10 bg-white p-6 shadow-[0_24px_70px_-46px_rgba(13,79,60,0.46)]">
          <div className="grid h-14 w-14 place-items-center rounded-[18px] bg-gold/16 text-forest">
            <BookOpen className="h-7 w-7" strokeWidth={1.7} />
          </div>
          <h2 className="mt-6 text-2xl font-bold tracking-tight text-forest">Admissions Guide</h2>
          <p className="mt-4 text-sm leading-7 text-charcoal/68">
            Download the latest prospectus, fee structure, school calendar, and transport information.
          </p>
          <Button className="mt-8 w-full">View All Articles</Button>
        </article>
      </div>
    </section>
  );
}
