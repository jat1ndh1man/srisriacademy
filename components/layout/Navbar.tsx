"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Download, Mail, MapPin, Menu, Phone, Search, UserRound, X } from "lucide-react";
import { navItems } from "@/data/site";
import { Button } from "@/components/ui/button";
import { LogoMark } from "@/components/common/LogoMark";

export function Navbar() {
  const [active, setActive] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

  return (
    <header
      className="fixed inset-x-0 top-0 z-40 bg-white shadow-[0_18px_55px_-42px_rgba(13,79,60,0.72)]"
      onMouseLeave={() => setActive(null)}
    >
      <div className="hidden h-9 bg-forest-deep text-white lg:block">
        <div className="container-lux flex h-full items-center justify-between text-[11px] font-semibold">
          <div className="flex items-center gap-6 text-white/78">
            <span className="inline-flex items-center gap-2 text-gold">
              <MapPin className="h-3.5 w-3.5" strokeWidth={1.8} />
              NH-27, Near Himlayan Foothills, Siliguri
            </span>
            <span className="inline-flex items-center gap-2">
              <Mail className="h-3.5 w-3.5" strokeWidth={1.8} />
              info@srisriacademy.in
            </span>
          </div>
          <div className="flex h-full items-center">
            {[
              { label: "Careers", icon: UserRound },
              { label: "Blogs", icon: null },
              { label: "News & Events", icon: null },
              { label: "Downloads", icon: Download },
            ].map((item) => (
              <a key={item.label} href="#" className="inline-flex h-full items-center gap-2 border-l border-white/12 px-4 text-white/76 transition hover:text-white">
                {item.icon ? <item.icon className="h-3.5 w-3.5" strokeWidth={1.8} /> : null}
                {item.label}
              </a>
            ))}
            <a href="#admissions" className="relative ml-4 inline-flex h-full min-w-36 items-center justify-center bg-gold px-8 font-bold text-forest-deep [clip-path:polygon(14%_0,100%_0,86%_100%,0_100%)]">
              Apply Tour
            </a>
          </div>
        </div>
      </div>

      <div className="bg-forest-deep px-4 py-2 text-xs font-semibold text-white/78 lg:hidden">
        <div className="flex items-center justify-center gap-2">
          <Phone className="h-3.5 w-3.5 text-gold" />
          Admissions open for 2026-27
        </div>
      </div>

      <nav className="container-lux flex h-20 items-center justify-between bg-white">
        <a href="#top" className="focus-ring rounded-[18px]">
          <LogoMark />
        </a>
        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <button
              key={item.label}
              className="focus-ring flex items-center gap-1 rounded-full px-3 py-2 text-sm font-semibold text-charcoal transition hover:bg-forest/5 hover:text-forest"
              onMouseEnter={() => setActive(item.label)}
              aria-expanded={active === item.label}
            >
              {item.label}
              <ChevronDown className="h-3.5 w-3.5" strokeWidth={2} />
            </button>
          ))}
        </div>
        <div className="hidden items-center gap-3 lg:flex">
          <button className="focus-ring grid h-11 w-11 place-items-center rounded-full text-charcoal hover:bg-forest/5" aria-label="Search">
            <Search className="h-5 w-5" strokeWidth={1.8} />
          </button>
          <Button variant="gold">Apply Now</Button>
        </div>
        <button
          className="focus-ring grid h-11 w-11 place-items-center rounded-full bg-cream text-forest lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {active ? (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22 }}
            className="hidden border-y border-forest/8 bg-white/94 backdrop-blur-2xl lg:block"
          >
            <div className="container-lux grid grid-cols-[0.8fr_1.2fr] gap-10 py-8">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-gold">Explore {active}</p>
                <p className="mt-3 max-w-md font-serif text-4xl font-semibold leading-none text-forest">
                  A thoughtful pathway for every learner.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {navItems
                  .find((item) => item.label === active)
                  ?.items.map((link) => (
                    <a
                      key={link}
                      href="#admissions"
                      className="focus-ring rounded-[18px] border border-forest/8 bg-cream/60 px-4 py-4 text-sm font-semibold text-charcoal transition hover:border-gold/40 hover:bg-white hover:text-forest"
                    >
                      {link}
                    </a>
                  ))}
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-forest/8 bg-white/96 backdrop-blur-xl lg:hidden"
          >
            <div className="container-lux py-4">
              <div className="grid gap-2">
                {navItems.map((item) => (
                  <a key={item.label} href="#admissions" className="rounded-[18px] px-4 py-3 font-semibold text-forest hover:bg-cream">
                    {item.label}
                  </a>
                ))}
              </div>
              <div className="mt-4 grid grid-cols-2 gap-3">
                <Button variant="outline">Search</Button>
                <Button variant="gold">Apply Now</Button>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

    </header>
  );
}
