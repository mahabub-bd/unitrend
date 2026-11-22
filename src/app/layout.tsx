import PublicChrome from "@/components/layout/PublicChrome";
import type { Metadata } from "next";
import { Comfortaa, Montserrat } from "next/font/google";
import Link from "next/link";
import "./globals.css";

// The site is database-driven; render on demand instead of prerendering at
// build time (no DB is available during the Docker build).
export const dynamic = "force-dynamic";

const comfortaa = Comfortaa({
  subsets: ["latin"],
  variable: "--font-comfortaa",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://unitrendinternational.com"),
  title: {
    default: "Unitrend International | Printing & Packaging Supply",
    template: "%s | Unitrend International",
  },
  description:
    "Printing inks, textile labels, ribbons, machinery, leather patches and technical supply support in Bangladesh.",
  applicationName: "Unitrend International",
  authors: [{ name: "Unitrend International" }],
  creator: "Unitrend International",
  publisher: "Unitrend International",
  category: "Printing and Packaging",
  keywords: [
    "printing ink Bangladesh",
    "textile labels Bangladesh",
    "printing machinery",
    "leather patches",
    "Unitrend International",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Unitrend International",
    title: "Unitrend International | Printing & Packaging Supply",
    description: "Trusted printing, packaging and garment supply solutions in Bangladesh.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Unitrend International",
    description: "Printing, packaging and garment supply solutions in Bangladesh.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${comfortaa.variable} ${montserrat.variable}`}>
      <body className="font-alt bg-porcelain text-ink antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Unitrend International",
              url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://unitrendinternational.com",
              logo: `${process.env.NEXT_PUBLIC_SITE_URL ?? "https://unitrendinternational.com"}/favicon.svg`,
              description: "Printing, packaging and garment industry supply company in Bangladesh.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "178, Uttar Guran, Khilgaon",
                addressLocality: "Dhaka",
                postalCode: "1219",
                addressCountry: "BD",
              },
            }),
          }}
        />
        <Link
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-200 focus:rounded-full focus:bg-primary focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to content
        </Link>
        <PublicChrome>{children}</PublicChrome>
      </body>
    </html>
  );
}
