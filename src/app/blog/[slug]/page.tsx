import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
import { prisma } from "@/lib/prisma";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await prisma.blogPost.findUnique({ where: { slug, published: true } });
  if (!post) return { title: "Article not found", robots: { index: false, follow: false } };

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      url: `/blog/${post.slug}`,
      title: post.title,
      description: post.excerpt,
      publishedTime: post.publishedAt.toISOString(),
      modifiedTime: post.updatedAt.toISOString(),
      section: post.category,
    },
    twitter: { card: "summary_large_image", title: post.title, description: post.excerpt },
  };
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = await prisma.blogPost.findUnique({ where: { slug, published: true } });
  if (!post) notFound();

  return (
    <article className="bg-white">
      <Container className="max-w-3xl py-16 lg:py-24">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              headline: post.title,
              description: post.excerpt,
              articleSection: post.category,
              datePublished: post.publishedAt.toISOString(),
              dateModified: post.updatedAt.toISOString(),
              author: { "@type": "Organization", name: "Unitrend International" },
              publisher: { "@type": "Organization", name: "Unitrend International" },
            }),
          }}
        />
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">{post.category}</p>
        <h1 className="mt-5 font-base text-4xl font-semibold leading-tight text-ink sm:text-5xl">{post.title}</h1>
        <p className="mt-6 text-lg leading-8 text-softgray">{post.excerpt}</p>
        <div className="mt-10 border-t border-line pt-8 prose prose-slate max-w-none">
          {post.content}
        </div>
      </Container>
    </article>
  );
}
