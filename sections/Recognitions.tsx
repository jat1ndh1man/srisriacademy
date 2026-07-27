import { recognitions } from "@/data/site";
import { RecognitionSeal } from "@/components/common/RecognitionSeal";

export function Recognitions() {
  return (
    <section
      className="border-y border-forest/[0.08] bg-white/88 py-10 sm:py-12"
      aria-labelledby="recognitions-heading"
    >
      <div className="container-lux">
        <h2
          id="recognitions-heading"
          className="text-center font-serif text-[1.7rem] font-semibold leading-none tracking-[-0.02em] text-forest sm:text-[2rem]"
        >
          Recognitions &amp; Affiliations
        </h2>

        <div className="recognition-marquee mt-8 overflow-hidden lg:mt-9">
          <div className="recognition-track">
            {[false, true].map((isDuplicate) => (
              <div
                key={isDuplicate ? "duplicate" : "primary"}
                className="recognition-group grid grid-cols-6"
                aria-hidden={isDuplicate || undefined}
              >
                {recognitions.map((item) => (
                  <article
                    key={`${isDuplicate ? "duplicate-" : ""}${item.label}`}
                    className="recognition-item flex min-h-40 flex-col items-center justify-center px-3 py-5 text-center sm:px-5 lg:min-h-36 lg:py-2"
                  >
                    <div className="h-[5.15rem] w-[5.15rem] shrink-0 transition-transform duration-500 ease-out hover:scale-[1.04] lg:h-[5.5rem] lg:w-[5.5rem]">
                      <RecognitionSeal kind={item.mark} />
                    </div>
                    <p className="mt-3 max-w-[9.5rem] text-[0.82rem] font-semibold leading-[1.25] tracking-[-0.01em] text-charcoal/88 sm:text-sm">
                      {item.label}
                    </p>
                  </article>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
