import { recognitions } from "@/data/site";
import { SectionTitle } from "@/components/common/SectionTitle";

export function Recognitions() {
  const repeated = [...recognitions, ...recognitions];

  return (
    <section className="py-16">
      <div className="container-lux">
        <div className="rounded-[24px] border border-forest/10 bg-white px-4 py-8 shadow-[0_24px_70px_-48px_rgba(13,79,60,0.5)]">
          <SectionTitle align="center" title="Recognitions & Affiliations" />
          <div className="mt-8 overflow-hidden">
            <div className="flex min-w-max animate-[logo-scroll_28s_linear_infinite] gap-4">
              {repeated.map((item, index) => (
                <div key={`${item.label}-${index}`} className="flex min-w-56 items-center gap-4 rounded-[20px] border border-forest/10 bg-cream/60 px-5 py-4">
                  <div className="grid h-12 w-12 place-items-center rounded-full bg-white text-forest">
                    <item.icon className="h-6 w-6" strokeWidth={1.7} />
                  </div>
                  <p className="text-sm font-bold leading-tight text-forest">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
