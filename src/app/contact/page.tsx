import Contacts from "@/components/Contacts/Contacts";
import Principals from "@/components/Principals/Principals";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Unitrend International for printing supplies, garment materials, sourcing support and technical service in Bangladesh.",
  alternates: { canonical: "/contact" },
};

export default function ContactusPage() {
  return (
    <>
      <Contacts />
      <Principals />
    </>
  );
}
