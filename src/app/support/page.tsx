import type { Metadata } from "next";
import Support from "@/components/Support/Support";
import Principals from "@/components/Principals/Principals";

export const metadata: Metadata = {
  title: "Service & Support",
  description:
    "Get technical service, delivery support, product training and software-based order management from Unitrend International.",
  alternates: { canonical: "/support" },
};

export default function SupportPage() {
  return (
    <>
      <Support />
      <Principals />
    </>
  );
}
