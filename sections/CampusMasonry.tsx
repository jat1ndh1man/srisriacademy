import Image from "next/image";
import { ArrowRight, Camera, CheckCircle2 } from "lucide-react";
import { achievements, campusGallery } from "@/data/site";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const achievementThemes = [
  {
    card: "border-[#ead7d2] bg-[#fff8f5]",
    title: "text-[#9c2947]",
    icon: "text-[#d79a28]",
    button: "bg-[#9c2947] text-white hover:bg-[#7f1f39]",
    imageFirst: true,
  },
  {
    card: "border-[#d7e7ca] bg-[#f5faef]",
    title: "text-[#27488f]",
    icon: "text-[#4e79c8]",
    button: "bg-[#3157a4] text-white hover:bg-[#254481]",
    imageFirst: true,
  },
  {
    card: "border-[#f0d9dc] bg-[#fff7f4]",
    title: "text-[#a11f4b]",
    icon: "text-[#cf6e80]",
    button: "bg-[#c51f50] text-white hover:bg-[#9f173f]",
    imageFirst: false,
  },
];

export function CampusMasonry() {
  return (
    <section className="overflow-hidden bg-[#fbf8f0] py-16 sm:py-20 lg:py-24" aria-labelledby="campus-experience-title">
      <div className="container-lux space-y-4 sm:space-y-5">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-[1.38fr_repeat(6,minmax(0,1fr))] lg:gap-3">
          <div className="flex min-h-[150px] flex-col items-start justify-center py-2 pr-4 sm:col-span-2 lg:col-span-1 lg:min-h-0">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">Campus experience</p>
            <h2 id="campus-experience-title" className="mt-3 max-w-[230px] text-[1.75rem] font-bold leading-[1.03] tracking-[-0.035em] text-forest-deep">
              Experience Our World-Class Campus
            </h2>
            <Button variant="outline" size="sm" className="mt-5 border-forest/30 bg-transparent">
              <Camera className="h-3.5 w-3.5" />
              View Campus Gallery
            </Button>
          </div>

          {campusGallery.map((item) => (
            <figure
              key={item.title}
              className="reveal-up group overflow-hidden rounded-[18px] border border-forest/10 bg-white shadow-[0_18px_42px_-34px_rgba(7,56,44,0.55)]"
              data-reveal
            >
              <div className="relative aspect-[1.24] overflow-hidden bg-cream sm:aspect-[1.38] lg:aspect-[1.08]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(min-width:1024px) 13vw, (min-width:640px) 50vw, 100vw"
                  className="object-cover transition duration-700 ease-out group-hover:scale-[1.045]"
                />
              </div>
              <figcaption className="flex min-h-11 items-center justify-center px-2 py-2 text-center text-[0.7rem] font-bold leading-tight text-forest-deep lg:text-[0.66rem] xl:text-[0.72rem]">
                {item.title}
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          <article className="reveal-up group relative min-h-[300px] overflow-hidden rounded-[22px] bg-forest-deep text-white shadow-[0_28px_70px_-46px_rgba(7,56,44,0.8)]" data-reveal>
            <Image
              src="/images/home-fourth-section/our-inspiration-gurudev.png"
              alt="Gurudev Sri Sri Ravi Shankar"
              fill
              sizes="(min-width:1024px) 50vw, 100vw"
              className="origin-top object-cover object-top transition duration-1000 ease-out group-hover:scale-[1.025]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-forest-deep/95 via-forest-deep/56 to-transparent" />
            <div className="relative flex min-h-[300px] max-w-[52%] flex-col items-start justify-center p-6 sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">Our Inspiration</p>
              <h3 className="mt-3 font-serif text-3xl font-semibold leading-none sm:text-4xl">Guided by wisdom.</h3>
              <p className="mt-4 max-w-[18rem] text-sm leading-6 text-white/76">
                Gurudev&apos;s vision of holistic education shapes a culture of compassion, curiosity, and joy.
              </p>
              <Button variant="light" size="sm" className="mt-6">
                Read More
                <ArrowRight className="h-3.5 w-3.5" />
              </Button>
            </div>
          </article>

          <article className="reveal-up group relative min-h-[300px] overflow-hidden rounded-[22px] bg-[#091b17] text-white shadow-[0_28px_70px_-46px_rgba(7,56,44,0.8)]" data-reveal>
            <Image
              src="/images/home-fourth-section/hall-of-fame-student.png"
              alt="Award-winning Sri Sri Academy student holding a trophy"
              fill
              sizes="(min-width:1024px) 50vw, 100vw"
              className="origin-top object-cover object-top transition duration-1000 ease-out group-hover:scale-[1.025]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#071d18]/98 via-[#071d18]/58 to-transparent" />
            <div className="relative flex min-h-[300px] max-w-[52%] flex-col items-start justify-center p-6 sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">Hall of Fame</p>
              <h3 className="mt-3 font-serif text-3xl font-semibold leading-none sm:text-4xl">Celebrating excellence.</h3>
              <p className="mt-4 max-w-[18rem] text-sm leading-6 text-white/76">
                Meet the achievers whose discipline, talent, and character make our community proud.
              </p>
              <Button variant="light" size="sm" className="mt-6">
                View Achievements
                <ArrowRight className="h-3.5 w-3.5" />
              </Button>
            </div>
          </article>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {achievements.map((item, index) => {
            const theme = achievementThemes[index];

            return (
              <article
                key={item.title}
                className={cn(
                  "reveal-up overflow-hidden rounded-[22px] border shadow-[0_24px_60px_-46px_rgba(7,56,44,0.55)]",
                  theme.card,
                )}
                data-reveal
              >
                <div className="p-5 pb-3">
                  <p className="text-[0.66rem] font-bold uppercase tracking-[0.18em] text-gold">{item.kicker}</p>
                  <h3 className={cn("mt-2 text-[1.35rem] font-bold tracking-[-0.025em]", theme.title)}>{item.title}</h3>
                </div>

                <div className={cn("grid min-h-[260px] grid-cols-[0.9fr_1.1fr]", !theme.imageFirst && "grid-cols-[1.1fr_0.9fr]")}>
                  <div className={cn("relative min-h-[260px]", !theme.imageFirst && "order-2")}>
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(min-width:1024px) 16vw, 45vw"
                      className="object-cover object-top"
                    />
                  </div>

                  <div className={cn("flex flex-col justify-center px-4 py-5", !theme.imageFirst && "order-1 pl-5 pr-2")}>
                    <ul className="space-y-2.5">
                      {item.points.map((point) => (
                        <li key={point} className="flex items-start gap-2 text-[0.72rem] font-semibold leading-4 text-charcoal/72">
                          <CheckCircle2 className={cn("mt-px h-3.5 w-3.5 shrink-0", theme.icon)} strokeWidth={2} />
                          {point}
                        </li>
                      ))}
                    </ul>
                    <Button size="sm" className={cn("mt-5 h-9 self-start px-3.5 text-[0.68rem]", theme.button)}>
                      Explore
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
