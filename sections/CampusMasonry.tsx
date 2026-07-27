import Image from "next/image";
import { Camera } from "lucide-react";
import { campusGallery } from "@/data/site";
import { Button } from "@/components/ui/button";
import { SectionTitle } from "@/components/common/SectionTitle";
import { cn } from "@/lib/utils";

export function CampusMasonry() {
  return (
    <section className="py-24">
      <div className="container-lux">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionTitle
            eyebrow="Campus experience"
            title="Spaces designed for focus, movement, and belonging."
            description="From sunlit classrooms to quiet libraries and lively fields, every space supports a distinct part of growing up."
          />
          <Button variant="outline">
            <Camera className="h-4 w-4" />
            View Campus Gallery
          </Button>
        </div>
        <div className="mt-10 grid auto-rows-[220px] gap-4 md:grid-cols-4">
          {campusGallery.map((item) => (
            <figure
              key={item.title}
              className={cn("reveal-up group relative overflow-hidden rounded-[24px] bg-cream shadow-[0_24px_70px_-42px_rgba(13,79,60,0.55)]", item.span)}
              data-reveal
            >
              <Image src={item.image} alt={item.title} fill sizes="(min-width:1024px) 25vw, 100vw" className="object-cover transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/76 via-forest-deep/8 to-transparent opacity-80" />
              <figcaption className="absolute bottom-4 left-4 rounded-full bg-white/90 px-4 py-2 text-sm font-bold text-forest backdrop-blur">
                {item.title}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
