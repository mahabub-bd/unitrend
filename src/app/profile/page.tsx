import type { Metadata } from "next";
import PdfViewer from "@/components/Pdf/PdfViewer";

export const metadata: Metadata = {
  title: "Company Profile",
  description:
    "View and download the Unitrend International company profile.",
  alternates: { canonical: "/profile" },
  robots: { index: true, follow: true },
};

export default function ProfilePage() {
  return <PdfViewer />;
}
