import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Youtube } from "lucide-react";
import { contact, footerColumns } from "@/data/site";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LogoMark } from "@/components/common/LogoMark";

export function Footer() {
  return (
    <footer className="bg-forest-deep text-white">
      <div className="container-lux grid gap-10 py-14 lg:grid-cols-[1.2fr_2fr_1fr]">
        <div>
          <LogoMark inverse />
          <p className="mt-6 max-w-xs text-sm leading-7 text-white/68">
            Nurturing mindful, capable learners in the foothills of Siliguri.
          </p>
          <div className="mt-6 flex gap-3">
            {[Facebook, Instagram, Youtube, Linkedin].map((Icon, index) => (
              <a key={index} href="#" className="focus-ring grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white hover:bg-gold hover:text-forest-deep" aria-label="Social media">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="text-sm font-bold text-white">{column.title}</h3>
              <ul className="mt-4 space-y-3 text-sm text-white/62">
                {column.links.map((link) => (
                  <li key={link}>
                    <a className="transition hover:text-gold" href="#top">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div>
          <h3 className="text-sm font-bold text-white">Stay Connected</h3>
          <div className="mt-4 space-y-3 text-sm text-white/68">
            <p className="flex gap-3"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />{contact.address}</p>
            <p className="flex gap-3"><Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />{contact.phone}</p>
            <p className="flex gap-3"><Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" />{contact.email}</p>
          </div>
          <form className="mt-6 space-y-3">
            <label className="text-xs font-semibold text-white/72" htmlFor="newsletter">Newsletter</label>
            <Input id="newsletter" placeholder="Email address" className="border-white/15 bg-white/10 text-white placeholder:text-white/40" />
            <Button type="submit" variant="gold" className="w-full">Subscribe</Button>
          </form>
        </div>
      </div>
      <div className="border-t border-white/10 py-5">
        <div className="container-lux flex flex-col gap-3 text-xs text-white/54 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Sri Sri Academy Siliguri. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
