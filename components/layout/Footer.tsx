import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Youtube,
} from "lucide-react";
import { contact, footerColumns } from "@/data/site";
import { LogoMark } from "@/components/common/LogoMark";

const socialLinks = [
  { label: "Facebook", icon: Facebook },
  { label: "Instagram", icon: Instagram },
  { label: "YouTube", icon: Youtube },
  { label: "LinkedIn", icon: Linkedin },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#063d31] text-white">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d8aa2e]/70 to-transparent"
        aria-hidden="true"
      />

      <div className="container-lux grid gap-10 py-11 lg:grid-cols-[1.05fr_2.25fr_1fr] lg:gap-12">
        <div>
          <LogoMark inverse />
          <p className="mt-5 max-w-[19rem] text-sm leading-6 text-white/58">
            A caring CBSE school where academic excellence, human values, and confidence grow together.
          </p>
          <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.17em] text-[#e3bd5d]">
            Nurturing intellect · Inspiring hearts
          </p>
        </div>

        <nav aria-label="Footer navigation" className="grid grid-cols-2 gap-x-7 gap-y-8 sm:grid-cols-4">
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="text-xs font-semibold tracking-[0.06em] text-white">{column.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      className="focus-ring text-xs leading-5 text-white/52 transition-colors duration-200 hover:text-[#e3bd5d]"
                      href={link === "Enquire Now" ? "#admissions" : "#top"}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        <div>
          <h3 className="text-xs font-semibold tracking-[0.06em] text-white">Contact us</h3>
          <address className="mt-4 space-y-3 not-italic">
            <p className="flex gap-2.5 text-xs leading-5 text-white/58">
              <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#e3bd5d]" aria-hidden="true" />
              {contact.address}
            </p>
            <a
              href={`tel:${contact.phone.replace(/\s/g, "")}`}
              className="focus-ring flex gap-2.5 text-xs text-white/58 transition hover:text-white"
            >
              <Phone className="h-3.5 w-3.5 shrink-0 text-[#e3bd5d]" aria-hidden="true" />
              {contact.phone}
            </a>
            <a
              href={`mailto:${contact.email}`}
              className="focus-ring flex gap-2.5 text-xs text-white/58 transition hover:text-white"
            >
              <Mail className="h-3.5 w-3.5 shrink-0 text-[#e3bd5d]" aria-hidden="true" />
              {contact.email}
            </a>
          </address>

          <div className="mt-6 flex gap-2.5">
            {socialLinks.map(({ label, icon: Icon }) => (
              <a
                key={label}
                href="#top"
                className="focus-ring grid h-8 w-8 place-items-center rounded-full border border-white/10 bg-white/[0.06] text-white/72 transition duration-200 hover:-translate-y-0.5 hover:border-[#e3bd5d]/40 hover:bg-[#e3bd5d] hover:text-[#063d31]"
                aria-label={label}
              >
                <Icon className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/[0.08]">
        <div className="container-lux flex flex-col gap-3 py-4 text-[11px] text-white/42 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Sri Sri Academy Siliguri. All rights reserved.</p>
          <div className="flex gap-5">
            <a className="transition hover:text-white/75" href="#top">
              Privacy policy
            </a>
            <a className="transition hover:text-white/75" href="#top">
              Terms &amp; conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
