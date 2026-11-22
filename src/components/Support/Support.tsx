import type { IconType } from "react-icons";
import {
  FiCheckCircle,
  FiHeadphones,
  FiPackage,
  FiTruck,
} from "react-icons/fi";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import ButtonLink from "@/components/ui/ButtonLink";
import { data } from "@/constants/data";

const supportIcons: IconType[] = [
  FiHeadphones,
  FiTruck,
  FiCheckCircle,
  FiPackage,
];

const Support = () => (
  <>
    <section className="border-b border-line bg-porcelain">
      <Container className="grid items-end gap-10 py-16 lg:grid-cols-[1fr_0.55fr] lg:py-24">
        <Reveal>
          <SectionHeading
            eyebrow="Service & support"
            title="Help from enquiry to after-sales."
            description="Our experienced team supports you with product selection, technical guidance, delivery and organised order management."
          />
        </Reveal>
        <Reveal delay={80}>
          <div className="grid grid-cols-2 overflow-hidden rounded-2xl border border-line bg-white">
            <div className="border-r border-line p-5 sm:p-6">
              <p className="font-base text-3xl font-semibold text-primary">24/7</p>
              <p className="mt-2 text-[10px] uppercase tracking-[0.16em] text-muted">
                Technical assistance
              </p>
            </div>
            <div className="p-5 sm:p-6">
              <p className="font-base text-3xl font-semibold text-primary">4</p>
              <p className="mt-2 text-[10px] uppercase tracking-[0.16em] text-muted">
                Support services
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>

    <section className="bg-white py-16 lg:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="How we support you"
            title="Practical support at every stage."
            description="A dependable response before, during and after your order."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {data.support.map((item, index) => {
            const Icon = supportIcons[index] ?? FiCheckCircle;

            return (
              <Reveal key={item.title} delay={index * 70}>
                <article className="group h-full rounded-2xl border border-line bg-porcelain/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/15 hover:bg-white hover:shadow-soft">
                  <div className="flex items-start justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/5 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                      <Icon aria-hidden="true" className="text-xl" />
                    </span>
                    <span className="font-base text-[11px] tracking-[0.18em] text-muted">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h2 className="mt-6 font-base text-lg font-semibold leading-7 text-ink">
                    {item.title}
                  </h2>
                  <p className="mt-3 text-[13px] leading-7 text-softgray">
                    {item.details}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>

    <section className="bg-porcelain pb-16 lg:pb-24">
      <Container>
        <Reveal>
          <div className="overflow-hidden rounded-[2rem] border border-line bg-white">
            <div className="grid lg:grid-cols-[0.72fr_1.28fr]">
              <div className="bg-primary px-6 py-10 text-white sm:px-8 lg:px-10 lg:py-12">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-golden">
                  Our process
                </p>
                <h2 className="mt-4 font-base text-2xl font-semibold leading-9">
                  From first enquiry to final delivery.
                </h2>
              </div>

              <ol className="grid divide-y divide-line sm:grid-cols-3 sm:divide-x sm:divide-y-0">
                {[
                  ["01", "Share your requirement", "Tell us the product, quantity and application."],
                  ["02", "Confirm the solution", "We recommend specifications and provide a quote."],
                  ["03", "Receive ongoing support", "We coordinate delivery and assist after installation."],
                ].map(([number, title, description]) => (
                  <li key={number} className="p-6 sm:p-7 lg:p-8">
                    <span className="font-base text-xs font-semibold text-primary">{number}</span>
                    <h3 className="mt-4 font-base text-[15px] font-semibold text-ink">
                      {title}
                    </h3>
                    <p className="mt-2 text-[12px] leading-6 text-softgray">{description}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-12 flex flex-col items-start justify-between gap-6 rounded-2xl bg-ink px-6 py-8 text-white sm:flex-row sm:items-center sm:px-8">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-golden">
                Need assistance?
              </p>
              <p className="mt-2 font-base text-xl font-semibold">
                Speak directly with our team.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact" variant="gold">
                Send an enquiry
              </ButtonLink>
              <ButtonLink href={`tel:${data.contact.phone}`} variant="light" withIcon={false}>
                Call us
              </ButtonLink>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  </>
);

export default Support;
