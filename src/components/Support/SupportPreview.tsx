import type { IconType } from "react-icons";
import {
  FiArrowRight,
  FiHeadphones,
  FiMonitor,
  FiTruck,
  FiUsers,
} from "react-icons/fi";
import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ButtonLink from "@/components/ui/ButtonLink";
import Reveal from "@/components/ui/Reveal";
import { data } from "@/constants/data";

const serviceMeta: { icon: IconType }[] = [
  { icon: FiHeadphones },
  { icon: FiTruck },
  { icon: FiUsers },
  { icon: FiMonitor },
];

const SupportPreview = () => (
  <section className="bg-white py-16 lg:py-24">
    <Container>
      <Reveal>
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Service & support"
            title="Support that doesn't stop at delivery."
            description="Technical service, doorstep delivery, product training and organised order management — one team, ready 24/7."
          />
          <ButtonLink href="/support" variant="outline" className="shrink-0">
            All support services
          </ButtonLink>
        </div>
      </Reveal>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {data.support.map((item, index) => {
          const Icon = serviceMeta[index]?.icon ?? FiHeadphones;

          return (
            <Reveal key={item.title} delay={index * 70}>
              <article className="group flex h-full flex-col rounded-2xl border border-line bg-porcelain/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/15 hover:bg-white hover:shadow-soft">
                <div className="flex items-start justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/5 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                    <Icon aria-hidden="true" className="text-xl" />
                  </span>
                  <span className="font-base text-[11px] tracking-[0.18em] text-muted">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="mt-6 font-base text-lg font-semibold leading-7 text-ink">
                  {item.title}
                </h3>
                <p className="mt-3 flex-1 text-[13px] leading-6 text-softgray line-clamp-4">
                  {item.details}
                </p>

                <Link
                  href="/support"
                  className="mt-5 inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-primary"
                >
                  Learn more
                  <FiArrowRight
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-0.5"
                  />
                </Link>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Container>
  </section>
);

export default SupportPreview;
