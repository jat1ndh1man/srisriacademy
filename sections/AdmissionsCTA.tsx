import Image from "next/image";
import { MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function AdmissionsCTA() {
  return (
    <section id="admissions" className="bg-[linear-gradient(135deg,#0d4f3c_0%,#d9a441_100%)] py-16 text-white">
      <div className="container-lux grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="grid gap-8 md:grid-cols-[0.45fr_0.55fr] lg:grid-cols-1 xl:grid-cols-[0.42fr_0.58fr]">
          <Image src="/images/admission-student.svg" alt="Sri Sri Academy student holding books" width={420} height={520} className="self-end rounded-[24px] object-cover" />
          <div className="self-center">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/72">Admissions open for 2026-27</p>
            <h2 className="mt-4 font-serif text-5xl font-semibold leading-none md:text-6xl">
              Begin your child’s journey with Sri Sri Academy.
            </h2>
            <div className="mt-8 grid grid-cols-4 gap-3 text-center text-sm font-semibold">
              {["Enquire", "Visit", "Interact", "Admit"].map((step, index) => (
                <div key={step} className="rounded-[18px] bg-white/12 p-3 backdrop-blur">
                  <p className="mx-auto grid h-8 w-8 place-items-center rounded-full bg-white text-forest">{index + 1}</p>
                  <p className="mt-2 text-xs">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <form className="rounded-[24px] border border-white/24 bg-white/84 p-4 text-charcoal shadow-[0_28px_90px_-44px_rgba(7,56,44,0.85)] backdrop-blur-xl sm:p-6">
          <div className="grid gap-4 md:grid-cols-2">
            <label className="space-y-2 text-xs font-bold text-forest">
              Parent Name
              <Input placeholder="Parent name" required />
            </label>
            <label className="space-y-2 text-xs font-bold text-forest">
              Phone Number
              <Input placeholder="Phone number" type="tel" required />
            </label>
            <label className="space-y-2 text-xs font-bold text-forest">
              Email Address
              <Input placeholder="Email address" type="email" required />
            </label>
            <label className="space-y-2 text-xs font-bold text-forest">
              Class Applying For
              <Input placeholder="Class applying for" required />
            </label>
            <label className="space-y-2 text-xs font-bold text-forest md:col-span-2">
              Message
              <Textarea placeholder="Tell us what you would like to know" />
            </label>
          </div>
          <div className="mt-5 grid gap-3 md:grid-cols-[1fr_auto_auto]">
            <Button type="submit" className="w-full">Submit Enquiry</Button>
            <Button type="button" variant="outline">
              <Phone className="h-4 w-4" />
              Call Now
            </Button>
            <Button type="button" variant="gold">
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
