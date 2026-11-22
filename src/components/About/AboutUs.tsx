import Image from "next/image";
import { FiCalendar, FiGlobe, FiMapPin, FiTarget } from "react-icons/fi";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import ButtonLink from "@/components/ui/ButtonLink";
import { data } from "@/constants/data";
import hero from "@/assets/Images/hero.webp";

const facts = [
  { icon: FiCalendar, value: "2020", label: "Established" },
  { icon: FiGlobe, value: "5", label: "Global partners" },
  { icon: FiMapPin, value: "Bangladesh", label: "Authorized region" },
  { icon: FiTarget, value: "Nationwide", label: "Distribution" },
];

const AboutUs = () => (
  <>
    <section className="relative overflow-hidden border-b border-line bg-porcelain">
      <Container className="grid items-center gap-12 py-16 lg:grid-cols-[1fr_0.92fr] lg:gap-16 lg:py-24">
        <Reveal>
          <SectionHeading
            eyebrow="Company background"
            title="Built around quality, trust and dependable service."
            description="Unitrend International is a privately-owned importer, indenting, distribution and supply company serving Bangladesh's printing and packaging industry."
          />
          <ButtonLink href="/contact" className="mt-8">
            Start a conversation
          </ButtonLink>
        </Reveal>
        <Reveal delay={100} className="relative">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-line bg-sand shadow-soft">
            <Image
              src={hero}
              alt="Unitrend leather and printing supply solutions"
              fill
              priority
              sizes="(min-width: 1024px) 560px, 100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-5 left-5 rounded-2xl border border-line bg-white px-5 py-4 shadow-soft sm:left-8">
            <p className="text-[10px] uppercase tracking-[0.18em] text-muted">
              Business type
            </p>
            <p className="mt-1.5 font-base text-sm font-semibold text-primary">
              Import · Indent · Distribute
            </p>
          </div>
        </Reveal>
      </Container>
    </section>

    <section className="border-b border-line/70 bg-white">
      <Container className="grid grid-cols-2 divide-x divide-line sm:grid-cols-4">
        {facts.map(({ icon: Icon, value, label }) => (
          <div key={label} className="flex items-center gap-3 px-3 py-7 sm:justify-center sm:px-5">
            <Icon aria-hidden="true" className="hidden text-xl text-primary sm:block" />
            <div>
              <p className="font-base text-base font-semibold text-ink sm:text-lg">{value}</p>
              <p className="mt-1 text-[9px] uppercase tracking-[0.16em] text-muted">{label}</p>
            </div>
          </div>
        ))}
      </Container>
    </section>

    <section className="bg-porcelain py-20 lg:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="How we work"
            title="A clear approach from sourcing to support."
            description="Our relationships, systems and sales team are designed to make local supply simpler and more dependable."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {data.aboutData.map((item, index) => (
            <Reveal key={item.title} delay={index * 70}>
              <article className="h-full rounded-2xl border border-line bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft sm:p-8">
                <div className="flex items-start gap-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary/5 font-base text-sm font-semibold text-primary">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-base text-xl font-semibold text-ink">{item.title}</h3>
                    {item.subtitle && (
                      <p className="mt-2 text-xs font-semibold uppercase tracking-[0.12em] text-primary">
                        {item.subtitle}
                      </p>
                    )}
                  </div>
                </div>
                <p className="mt-5 text-[13px] leading-7 text-softgray">
                  {item.details}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  </>
);

export default AboutUs;
