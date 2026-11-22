import type { Metadata } from "next";
import Principals from "@/components/Principals/Principals";

export const metadata: Metadata = {
  title: "Sign Up",
  robots: { index: false, follow: false },
};

export default function SignUpPage() {
  return (
    <>
      <div>Sign Up Here</div>
      <Principals />
    </>
  );
}
