import type { Metadata } from "next";
import Hero from "@/components/Hero/Hero";
import Principals from "@/components/Principals/Principals";
import AboutPreview from "@/components/About/AboutPreview";
import OurStrategies from "@/components/OurStrategies/OurStrategies";
import FeatureProducts from "@/components/FeatureProducts/FeatureProducts";
import SupportPreview from "@/components/Support/SupportPreview";
import CtaBanner from "@/components/Cta/CtaBanner";

export const metadata: Metadata = {
  title: "Unitrend International | Printing & Packaging Supply, Bangladesh",
  description:
    "Unitrend International connects Bangladesh's printing and packaging industry with trusted global manufacturers — printing inks, ribbons, plates, machinery, leather patches and technical support.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    title: "Printing & Packaging Supply in Bangladesh",
    description: "Printing inks, labels, ribbons, machinery and technical support for Bangladesh industry.",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Principals />
      <AboutPreview />
      <OurStrategies />
      <FeatureProducts />
      <SupportPreview />
      <CtaBanner />
    </>
  );
}
