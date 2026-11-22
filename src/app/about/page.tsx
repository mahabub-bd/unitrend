import type { Metadata } from "next";
import AboutUs from "@/components/About/AboutUs";
import Principals from "@/components/Principals/Principals";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Unitrend International, our mission, customers, supply chain and market strategy.",
  alternates: { canonical: "/about" },
};

export default function AboutusPage() {
  return (
    <>
      <AboutUs />
      <Principals />
    </>
  );
}
