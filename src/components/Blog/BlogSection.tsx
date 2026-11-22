import Image, { StaticImageData } from "next/image";
import { FiArrowUpRight, FiCalendar } from "react-icons/fi";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import ButtonLink from "@/components/ui/ButtonLink";
import productInks from "@/assets/Images/product11.webp";
import productLabels from "@/assets/Images/product1.webp";
import productLeather from "@/assets/Images/hero.webp";
import { prisma } from "@/lib/prisma";
import Link from "next/link";

interface Article {
  slug: string;
  image: StaticImageData;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
}

const articleImages: Record<string, StaticImageData> = {
  "product11.webp": productInks,
  "product1.webp": productLabels,
  "hero.webp": productLeather,
};

const BlogSection = async () => {
  const posts = await prisma.blogPost.findMany({
    where: { published: true },
    orderBy: { publishedAt: "desc" },
  });
  const articles: Article[] = posts.map((post) => ({
    slug: post.slug,
    image: articleImages[post.imageUrl] ?? productLabels,
    category: post.category,
    title: post.title,
    excerpt: post.excerpt,
    date: post.publishedAt.toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" }),
    readTime: post.readTime ?? "4 min read",
  }));

  return (
  <>
    <section className="border-b border-line bg-porcelain">
      <Container className="py-16 lg:py-24">
        <Reveal>
          <SectionHeading
            eyebrow="Industry notes"
            title="Ideas and guidance for better printing."
            description="Read practical updates on materials, production methods and sourcing from the Unitrend team."
          />
        </Reveal>
      </Container>
    </section>

    <section className="bg-white py-16 lg:py-24">
      <Container>
        <div className="grid gap-6 lg:grid-cols-3">
          {articles.map((article, index) => (
            <Reveal key={article.slug} delay={index * 70}>
              <Link href={`/blog/${article.slug}`} className="group block h-full overflow-hidden rounded-2xl border border-line bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-soft">
              <article className="h-full">
                <div className="relative aspect-[16/10] overflow-hidden bg-sand">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-primary">
                      {article.category}
                    </span>
                    <span className="grid h-9 w-9 place-items-center rounded-full border border-line text-primary transition-colors group-hover:border-primary group-hover:bg-primary group-hover:text-white">
                      <FiArrowUpRight aria-hidden="true" />
                    </span>
                  </div>
                  <h2 className="mt-5 font-base text-xl font-semibold leading-7 text-ink">
                    {article.title}
                  </h2>
                  <p className="mt-3 text-[13px] leading-6 text-softgray">
                    {article.excerpt}
                  </p>
                  <div className="mt-5 flex items-center gap-2 border-t border-line pt-4 text-[11px] text-muted">
                    <FiCalendar aria-hidden="true" />
                    <span>{article.date}</span>
                    <span aria-hidden="true">·</span>
                    <span>{article.readTime}</span>
                  </div>
                </div>
              </article>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-12 flex flex-col items-start justify-between gap-6 rounded-2xl bg-primary px-6 py-8 text-white sm:flex-row sm:items-center sm:px-8">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-golden">
                Need product advice?
              </p>
              <p className="mt-2 font-base text-xl font-semibold">
                Talk with our technical team.
              </p>
            </div>
            <ButtonLink href="/contact" variant="gold" className="shrink-0">
              Contact Unitrend
            </ButtonLink>
          </div>
        </Reveal>
      </Container>
    </section>
  </>
  );
};

export default BlogSection;
