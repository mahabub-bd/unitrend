import type { Metadata } from "next";
import Principals from "@/components/Principals/Principals";

export const metadata: Metadata = {
  title: "Login",
  robots: { index: false, follow: false },
};

export default function LoginPage() {
  return <Principals />;
}
