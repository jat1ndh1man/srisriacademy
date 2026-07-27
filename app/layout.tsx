import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { LenisProvider } from "@/components/layout/LenisProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { GSAPScrollEffects } from "@/components/common/GSAPScrollEffects";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://srisriacademy.in"),
  title: {
    default: "Sri Sri Academy Siliguri | Premium CBSE School",
    template: "%s | Sri Sri Academy Siliguri",
  },
  description:
    "Sri Sri Academy Siliguri is a premium CBSE school blending academic excellence, human values, sports, arts, technology, and residential care.",
  keywords: ["Sri Sri Academy", "Siliguri school", "CBSE school", "boarding school", "international school"],
  openGraph: {
    title: "Sri Sri Academy Siliguri",
    description: "Nurturing minds with academic excellence, human values, and future-ready learning.",
    url: "https://srisriacademy.in",
    siteName: "Sri Sri Academy Siliguri",
    images: [{ url: "/images/og-image.svg", width: 1200, height: 630, alt: "Sri Sri Academy Siliguri campus" }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sri Sri Academy Siliguri",
    description: "A premium CBSE school for academics, values, sports, arts, and boarding.",
    images: ["/images/og-image.svg"],
  },
  alternates: {
    canonical: "https://srisriacademy.in",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN" className={`${outfit.variable} ${cormorant.variable}`}>
      <body>
        <Script src="https://cdn.lordicon.com/lordicon.js" strategy="afterInteractive" />
        <LenisProvider>
          <Navbar />
          {children}
          <Footer />
          <GSAPScrollEffects />
        </LenisProvider>
      </body>
    </html>
  );
}
