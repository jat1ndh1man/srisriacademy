import Image from "next/image";
import {
  ArrowRight,
  BadgeCheck,
  CalendarDays,
  ClipboardCheck,
  MessageCircle,
  Phone,
  School,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const admissionSteps = [
  { label: "Enquire", detail: "Tell us about your child", icon: ClipboardCheck },
  { label: "Campus visit", detail: "Experience the school", icon: School },
  { label: "Interaction", detail: "Meet our academic team", icon: CalendarDays },
  { label: "Admission", detail: "Welcome to the family", icon: BadgeCheck },
];

export function AdmissionsCTA() {
  return (
    <section
      id="admissions"
      aria-labelledby="admissions-heading"
      className="relative isolate z-[2] overflow-visible bg-[#d8aa2e] text-white"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-40"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(circle at 16% 10%, rgba(255,255,255,.28), transparent 24rem), radial-gradient(circle at 76% 110%, rgba(105,67,4,.25), transparent 32rem)",
        }}
      />

      <div className="container-lux grid min-h-[370px] min-w-0 items-stretch lg:grid-cols-[230px_minmax(0,1fr)_440px] lg:gap-7 xl:grid-cols-[250px_minmax(0,1fr)_470px] xl:gap-10">
        <div className="relative z-10 hidden min-h-[370px] lg:block">
          <div className="absolute -top-[105px] bottom-0 left-1/2 w-[300px] -translate-x-1/2 xl:w-[320px]">
            <Image
              src="/images/admissions/student-girl-cutout-v2.png"
              alt="Smiling Sri Sri Academy student holding books"
              fill
              priority={false}
              sizes="320px"
              className="object-contain object-bottom drop-shadow-[0_18px_18px_rgba(72,48,5,0.18)]"
            />
          </div>
        </div>

        <div className="min-w-0 py-12 lg:flex lg:flex-col lg:justify-center lg:py-10">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#173f32]/70">
            Admissions open for 2026–27
          </p>
          <h2
            id="admissions-heading"
            className="mt-3 max-w-[650px] font-serif text-[2.65rem] font-semibold leading-[0.98] tracking-[-0.035em] text-white sm:text-5xl"
          >
            Begin your child&apos;s journey with Sri Sri Academy
          </h2>

          <ol className="mt-8 grid grid-cols-2 gap-x-3 gap-y-5 sm:grid-cols-4 lg:max-w-[680px]">
            {admissionSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <li key={step.label} className="group relative flex items-start gap-2.5">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white text-[#17483a] shadow-[0_10px_24px_-12px_rgba(63,42,2,.45)] transition-transform duration-300 group-hover:-translate-y-0.5">
                    <Icon className="h-[17px] w-[17px]" strokeWidth={1.9} aria-hidden="true" />
                  </span>
                  <span className="pt-0.5">
                    <span className="block text-[10px] font-bold uppercase tracking-[0.14em] text-[#17483a]/55">
                      0{index + 1}
                    </span>
                    <span className="mt-0.5 block text-xs font-semibold leading-tight text-white">
                      {step.label}
                    </span>
                    <span className="sr-only">{step.detail}</span>
                  </span>
                  {index < admissionSteps.length - 1 && (
                    <ArrowRight
                      className="absolute -right-1 top-3 hidden h-3.5 w-3.5 text-white/40 sm:block"
                      aria-hidden="true"
                    />
                  )}
                </li>
              );
            })}
          </ol>
        </div>

        <div className="flex min-w-0 items-center pb-10 lg:pb-0">
          <form className="min-w-0 w-full rounded-[18px] border border-white/45 bg-[#fffdf8]/94 p-4 text-charcoal shadow-[0_24px_60px_-32px_rgba(57,39,4,.65)] backdrop-blur-xl sm:p-5">
            <div className="grid gap-3 sm:grid-cols-2">
              <label className="sr-only" htmlFor="admission-parent-name">
                Parent name
              </label>
              <Input id="admission-parent-name" name="parentName" placeholder="Parent name" required />

              <label className="sr-only" htmlFor="admission-phone">
                Phone number
              </label>
              <Input id="admission-phone" name="phone" placeholder="Phone number" type="tel" required />

              <label className="sr-only" htmlFor="admission-email">
                Email address
              </label>
              <Input id="admission-email" name="email" placeholder="Email address" type="email" required />

              <label className="sr-only" htmlFor="admission-class">
                Class applying for
              </label>
              <select
                id="admission-class"
                name="classApplyingFor"
                defaultValue=""
                required
                className="focus-ring h-12 w-full rounded-[16px] border border-forest/12 bg-white px-4 text-sm text-charcoal/70 shadow-[0_12px_34px_-28px_rgba(13,79,60,0.55)]"
              >
                <option value="" disabled>
                  Class applying for
                </option>
                <option>Early Years</option>
                <option>Primary School</option>
                <option>Middle School</option>
                <option>Senior School</option>
              </select>
            </div>

            <Button type="submit" className="mt-3 h-11 w-full rounded-[12px]">
              Submit enquiry
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>

            <div className="mt-3 grid gap-2 min-[440px]:grid-cols-2">
              <Button type="button" variant="outline" className="h-10 rounded-[12px] px-3 text-xs">
                <Phone className="h-3.5 w-3.5" aria-hidden="true" />
                Call us now
              </Button>
              <Button
                type="button"
                className="h-10 rounded-[12px] bg-[#258d4b] px-3 text-xs shadow-none hover:bg-[#1f7b41]"
              >
                <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />
                WhatsApp us
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
