import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ButtonLink from "@/components/ui/ButtonLink";
import Reveal from "@/components/ui/Reveal";
import { prisma } from "@/lib/prisma";

import product1 from "@/assets/Images/product1.webp";
import product2 from "@/assets/Images/product2.webp";
import product3 from "@/assets/Images/product3.webp";
import product4 from "@/assets/Images/product4.webp";
import product5 from "@/assets/Images/product5.webp";
import product6 from "@/assets/Images/product6.webp";
import product7 from "@/assets/Images/product7.webp";
import product8 from "@/assets/Images/product8.webp";
import product9 from "@/assets/Images/product9.webp";
import product10 from "@/assets/Images/product10.png";
import product11 from "@/assets/Images/product11.webp";
import product12 from "@/assets/Images/product12.webp";
import product13 from "@/assets/Images/product13.webp";
import product14 from "@/assets/Images/product14.webp";
import product15 from "@/assets/Images/product15.webp";
import product16 from "@/assets/Images/product16.webp";

const productImages: Record<string, StaticImageData> = {
  product1,
  product2,
  product3,
  product4,
  product5,
  product6,
  product7,
  product8,
  product9,
  product10,
  product11,
  product12,
  product13,
  product14,
  product15,
  product16,
};

const FeatureProductsCard = ({
  image,
  title,
}: {
  image: StaticImageData;
  title: string;
}) => (
  <Link
    href="/product"
    className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-white transition-all duration-300 hover:-translate-y-1 hover:border-primary/15 hover:shadow-soft"
  >
    <div className="relative aspect-[4/3] overflow-hidden bg-sand">
      <Image
        src={image}
        alt={title}
        fill
        loading="lazy"
        sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />
      <span className="absolute inset-0 bg-primary/0 transition-colors duration-300 group-hover:bg-primary/5" />
    </div>
    <div className="flex flex-1 items-center justify-between gap-3 p-4 sm:gap-4 sm:p-5">
      <h3 className="font-base text-[13px] font-semibold leading-5 text-ink sm:text-[15px] sm:leading-6">
        {title.trim()}
      </h3>
      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-line text-primary transition-colors duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-white sm:h-9 sm:w-9">
        <FiArrowUpRight aria-hidden="true" />
      </span>
    </div>
  </Link>
);

const FeatureProducts = async () => {
  const products = await prisma.featuredProduct.findMany({
    where: { active: true },
    orderBy: [{ sortOrder: "asc" }, { title: "asc" }],
  });
  return (
    <section className="bg-porcelain py-20 lg:py-28">
      <Container>
        <Reveal>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Product range"
              title="Featured products."
              description="Inks, ribbons, plates, labels and leather patches — a practical range built around what the printing and garment industry uses every day."
            />
            <ButtonLink
              href="/product"
              variant="outline"
              className="shrink-0 self-start lg:self-auto"
            >
              View all products
            </ButtonLink>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-4 xs:grid-cols-2 sm:gap-5 lg:grid-cols-4 2xl:gap-6">
          {products.map((product, index) => {
            const image = productImages[product.imageUrl];
            if (!image) return null;

            return (
              <Reveal key={`${product.id}-${index}`} delay={(index % 4) * 60}>
                <FeatureProductsCard
                  image={image}
                  title={product.title}
                />
              </Reveal>
            );
          })}
        </div>

        <Reveal>
          <div className="mt-10 flex flex-col items-start justify-between gap-4 rounded-2xl border border-line bg-white px-6 py-5 sm:flex-row sm:items-center">
            <p className="text-sm leading-6 text-softgray">
              <span className="font-semibold text-ink">
                Looking for something specific?
              </span>{" "}
              We source products to order.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-primary"
            >
              Talk to our team
              <FiArrowRight
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
};

export default FeatureProducts;
