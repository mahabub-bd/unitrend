import Image, { StaticImageData } from "next/image";
import { FiArrowUpRight } from "react-icons/fi";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { prisma } from "@/lib/prisma";
import { cn } from "@/lib/utils";
import principal1 from "@/assets/Images/principal1.png";
import principal2 from "@/assets/Images/principal2.webp";
import principal3 from "@/assets/Images/principal3.webp";
import principal4 from "@/assets/Images/principal4.webp";
import principal5 from "@/assets/Images/principal5.webp";

interface Principal {
  image: StaticImageData;
  title: string;
  address: string;
  className?: string;
}

const principalImages: Record<string, StaticImageData> = {
  principal1,
  principal2,
  principal3,
  principal4,
  principal5,
};

const PrincipalCard = ({ image, title, address, className }: Principal) => (
  <a
    href={address}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={`Visit ${title.trim()} website`}
    className={cn(
      "group relative flex h-36 items-center justify-center rounded-2xl border border-line bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:bg-white hover:shadow-soft sm:h-44",
      className
    )}
  >
    <Image
      src={image}
      alt={title.trim()}
      width={280}
      height={140}
      className="h-20 w-full object-contain transition-all duration-300 group-hover:scale-[1.06] sm:h-24"
    />
    <FiArrowUpRight
      aria-hidden="true"
      className="absolute right-3 top-3 text-sm text-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100"
    />
  </a>
);

const Principals = async () => {
  const principals = await prisma.principal.findMany({
    where: { active: true },
    orderBy: [{ sortOrder: "asc" }, { name: "asc" }],
  });

  return (
  <section className="border-y border-line/70 bg-white py-16 lg:py-20">
    <Container>
      <Reveal>
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Our principals"
            title="Backed by manufacturers you can trust."
            description="We represent global producers of printing inks, labels, ribbons and machinery — and bring their products to Bangladesh with local service."
          />
          <p className="shrink-0 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
            Turkey · China · Hong Kong
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5 2xl:gap-5">
          {principals.map((item, index) => (
            <PrincipalCard
              key={item.id}
              image={principalImages[item.imageUrl] ?? principal1}
              title={item.name}
              address={item.website}
              className={
                index === principals.length - 1
                  ? "col-span-2 sm:col-span-1"
                  : undefined
              }
            />
          ))}
        </div>
      </Reveal>
    </Container>
  </section>
  );
};

export default Principals;
