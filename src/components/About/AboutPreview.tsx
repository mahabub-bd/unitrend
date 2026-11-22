import Image from "next/image";
import {
  FiGlobe,
  FiHeadphones,
  FiLayers,
  FiMapPin,
  FiTruck,
} from "react-icons/fi";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ButtonLink from "@/components/ui/ButtonLink";
import Reveal from "@/components/ui/Reveal";
import team from "@/assets/Images/ourstartegy.webp";

const highlights = [
  {
    icon: FiGlobe,
    title: "Global sourcing",
    description:
      "Direct relationships with manufacturers in Turkey, China and Hong Kong.",
  },
  {
    icon: FiTruck,
    title: "Import & distribution",
    description:
      "End-to-end importing, warehousing and delivery across Bangladesh.",
  },
  {
    icon: FiHeadphones,
    title: "Technical support",
    description:
      "24/7 assistance from an experienced printing-technical team.",
  },
  {
    icon: FiLayers,
    title: "Organised orders",
    description:
      "Software-based order management from first enquiry to delivery.",
  },
];

const AboutPreview = () => (
  <section className="bg-white py-20 lg:py-28">
    <Container className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20 2xl:gap-24">
      <Reveal className="relative">
        <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-line bg-sand">
          <Image
            src={team}
            alt="The Unitrend team working together around a table"
            fill
            sizes="(min-width: 1024px) 560px, 100vw"
            className="object-cover"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-transparent to-transparent"
          />
        </div>

        <div className="absolute -bottom-7 left-6 rounded-2xl bg-primary px-6 py-5 text-white shadow-lift sm:left-8">
          <p className="font-base text-3xl font-semibold leading-none">2020</p>
          <p className="mt-2 text-[10px] uppercase tracking-[0.18em] text-white/70">
            Established in Dhaka
          </p>
        </div>

        <div className="absolute -right-4 top-6 hidden items-center gap-2 rounded-full border border-line bg-white px-4 py-2 shadow-soft lg:flex">
          <FiMapPin aria-hidden="true" className="text-primary" />
          <span className="text-xs font-semibold text-ink">
            Khilgaon, Dhaka
          </span>
        </div>
      </Reveal>

      <div>
        <Reveal>
          <SectionHeading
            eyebrow="Who we are"
            title="A local partner with a global supply network."
            description="We are a privately-owned trading and distribution company based in Dhaka. Since 2020 we have helped printers, garment makers and packaging businesses source dependable materials — without the guesswork."
          />
        </Reveal>

        <ul className="mt-8 grid gap-x-6 gap-y-5 sm:grid-cols-2">
          {highlights.map(({ icon: Icon, title, description }, index) => (
            <Reveal key={title} delay={index * 60}>
              <li className="flex gap-3.5">
                <span className="mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/5 text-primary">
                  <Icon aria-hidden="true" className="text-lg" />
                </span>
                <div>
                  <h3 className="font-base text-[15px] font-semibold text-ink">
                    {title}
                  </h3>
                  <p className="mt-1 text-[13px] leading-6 text-softgray">
                    {description}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ul>

        <Reveal>
          <ButtonLink
            href="/about"
            variant="outline"
            className="mt-9 self-start"
          >
            More about us
          </ButtonLink>
        </Reveal>
      </div>
    </Container>
  </section>
);

export default AboutPreview;
