import type { Metadata } from "next";
import BlogSection from "@/components/Blog/BlogSection";
import Principals from "@/components/Principals/Principals";

export const metadata: Metadata = {
  title: "Blog",
  description: "Practical guidance on printing technology, textile labels, ribbons, leather patches and sustainable materials.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <>
      <BlogSection />
      <Principals />
    </>
  );
}
