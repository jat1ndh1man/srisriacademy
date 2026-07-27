import { AdmissionsCTA } from "@/sections/AdmissionsCTA";
import { CampusMasonry } from "@/sections/CampusMasonry";
import { DayTimeline } from "@/sections/DayTimeline";
import { Hero } from "@/sections/Hero";
import { ParentCommunityStrip } from "@/sections/ParentCommunityStrip";
import { Recognitions } from "@/sections/Recognitions";
import { WhySriSri } from "@/sections/WhySriSri";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "School",
  name: "Sri Sri Academy Siliguri",
  url: "https://srisriacademy.in",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Matigara",
    addressLocality: "Siliguri",
    addressRegion: "West Bengal",
    postalCode: "734010",
    addressCountry: "IN",
  },
  educationalCredentialAwarded: "CBSE",
  areaServed: "Siliguri",
};

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Hero />
      <WhySriSri />
      <DayTimeline />
      <CampusMasonry />
      <Recognitions />
      <ParentCommunityStrip />
      <AdmissionsCTA />
    </main>
  );
}
