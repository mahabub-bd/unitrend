import Image from "next/image";
import type { IconType } from "react-icons";
import {
  FiAward,
  FiPieChart,
  FiShield,
  FiTag,
  FiTrendingUp,
} from "react-icons/fi";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { data } from "@/constants/data";
import texture from "@/assets/Images/carousel1.webp";

const strategyIcons: Record<string, IconType> = {
  Market: FiTrendingUp,
  Value: FiAward,
  Trust: FiShield,
  Cost: FiTag,
  Margins: FiPieChart,
};

const OurStrategies = () => (
  <section className="relative overflow-hidden bg-ink py-20 lg:py-28">
    <Image
      src={texture}
      alt=""
      fill
      sizes="100vw"
      aria-hidden="true"
      className="object-cover opacity-25"
    />
    <div
      aria-hidden="true"
      className="absolute inset-0 bg-gradient-to-br from-primary/95 via-[#210205]/95 to-ink/95"
    />
    <div
      aria-hidden="true"
      className="absolute -right-24 -top-24 h-80 w-80 rounded-full border border-white/10"
    />
    <div
      aria-hidden="true"
      className="absolute -bottom-40 -left-24 h-96 w-96 rounded-full border border-golden/10"
    />

    <Container className="relative z-10">
      <Reveal>
        <SectionHeading
          tone="light"
          eyebrow="How we work"
          title="Five principles. One dependable partner."
          description="Our approach is simple: understand what the market needs, then deliver it with quality, honesty and support at every step."
        />
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-3 xs:grid-cols-2 sm:gap-4 lg:grid-cols-5 2xl:gap-5">
        {data.ourStrategies.map((item, index) => {
          const Icon = strategyIcons[item.title] ?? FiAward;
          const isLast = index === data.ourStrategies.length - 1;

          return (
            <Reveal
              key={item.title}
              delay={index * 70}
              className={isLast ? "xs:col-span-2 lg:col-span-1" : ""}
            >
              <article className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-golden/30 hover:bg-white/[0.07] sm:p-6">
                <span className="font-base text-[11px] tracking-[0.28em] text-golden/70">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="mt-4 grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-golden transition-colors duration-300 group-hover:bg-golden group-hover:text-primary sm:mt-6 sm:h-11 sm:w-11">
                  <Icon aria-hidden="true" className="text-xl" />
                </span>
                <h3 className="mt-4 font-base text-lg font-semibold text-white sm:mt-6 sm:text-xl">
                  {item.title}
                </h3>
                <p className="mt-2 text-[12px] leading-5 text-white/60 sm:text-[13px] sm:leading-6">
                  {item.subtitle}
                </p>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Container>
  </section>
);

export default OurStrategies;
