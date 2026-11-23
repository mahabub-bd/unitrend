import type { IconType } from "react-icons";
import {
  FiArrowRight,
  FiArrowUpRight,
  FiCheckCircle,
  FiClipboard,
  FiHeadphones,
  FiMail,
  FiMonitor,
  FiPhone,
  FiPlus,
  FiTruck,
  FiUsers,
} from "react-icons/fi";
import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import ButtonLink from "@/components/ui/ButtonLink";
import { data } from "@/constants/data";

const serviceMeta: { icon: IconType; tags: string[] }[] = [
  { icon: FiHeadphones, tags: ["24/7", "Ink & machinery"] },
  { icon: FiTruck, tags: ["Doorstep", "Nationwide"] },
  { icon: FiUsers, tags: ["Hands-on", "Product training"] },
  { icon: FiMonitor, tags: ["Order tracking", "Software-based"] },
];

const processSteps: {
  icon: IconType;
  number: string;
  title: string;
  description: string;
}[] = [
  {
    icon: FiClipboard,
    number: "01",
    title: "Share your requirement",
    description:
      "Tell us the product, quantity and application you have in mind.",
  },
  {
    icon: FiCheckCircle,
    number: "02",
    title: "Confirm the solution",
    description:
      "We recommend specifications, answer technical questions and provide a quote.",
  },
  {
    icon: FiHeadphones,
    number: "03",
    title: "Receive ongoing support",
    description:
      "We coordinate delivery, follow up on the order and assist after installation.",
  },
];

const faqs = [
  {
    question: "Which areas do you deliver to?",
    answer:
      "We deliver from our Dhaka warehouse across Dhaka and all regions of Bangladesh, straight to your doorstep.",
  },
  {
    question: "Can I get technical help after purchasing?",
    answer:
      "Yes. Our technical service team works on printing inks and machinery and is available 24/7 to assist with knowledge and hands-on guidance.",
  },
  {
    question: "Do you train our team on the products?",
    answer:
      "We work with your team to make sure you get full value from every solution, and our specialists train you on the products we supply.",
  },
  {
    question: "How do you manage orders?",
    answer:
      "Orders are managed through our software-based order management system, so requirements, confirmations and delivery updates stay organised.",
  },
  {
    question: "Can I request a sample before ordering?",
    answer:
      "We source products to order and can arrange samples for evaluation. Share your specification and our team will recommend the best option.",
  },
];

const supportStats = [
  { value: "24/7", label: "Technical help" },
  { value: "4", label: "Support services" },
  { value: "Nationwide", label: "Delivery" },
];

const ContactLine = ({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: IconType;
  label: string;
  value: string;
  href: string;
}) => (
  <a
    href={href}
    className="group flex items-center gap-3 rounded-xl border border-line px-3 py-2.5 transition-colors duration-200 hover:border-primary/25 hover:bg-porcelain"
  >
    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-primary/5 text-[13px] text-primary">
      <Icon aria-hidden="true" />
    </span>
    <span className="min-w-0">
      <span className="block text-[9px] font-semibold uppercase tracking-[0.14em] text-muted">
        {label}
      </span>
      <span className="mt-0.5 block break-words text-[12px] font-semibold text-ink">
        {value}
      </span>
    </span>
    <FiArrowUpRight
      aria-hidden="true"
      className="ml-auto shrink-0 text-sm text-primary opacity-0 transition-opacity duration-200 group-hover:opacity-100"
    />
  </a>
);

const SupportSnapshot = () => (
  <div className="relative overflow-hidden rounded-[1.75rem] border border-line bg-white p-6 shadow-soft sm:p-7">
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full border border-line"
    />
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full border border-golden/50"
    />

    <div className="relative flex items-start justify-between gap-4">
      <div>
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted">
          Support at a glance
        </p>
        <p className="mt-2 font-base text-[15px] font-semibold leading-6 text-ink">
          Always within reach
        </p>
      </div>
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/5 text-lg text-primary">
        <FiHeadphones aria-hidden="true" />
      </span>
    </div>

    <dl className="relative mt-6 grid grid-cols-3 divide-x divide-line border-y border-line py-5">
      {supportStats.map((stat) => (
        <div
          key={stat.label}
          className="flex flex-col-reverse gap-1.5 px-1.5 text-center sm:px-2"
        >
          <dt className="text-[9px] font-semibold uppercase tracking-[0.12em] text-muted">
            {stat.label}
          </dt>
          <dd className="font-base text-[15px] font-semibold leading-5 tabular-nums text-ink sm:text-xl">
            {stat.value}
          </dd>
        </div>
      ))}
    </dl>

    <div className="relative mt-5 space-y-2">
      <ContactLine
        icon={FiPhone}
        label="Call support"
        value={data.contact.phone}
        href={`tel:${data.contact.phone}`}
      />
      <ContactLine
        icon={FiMail}
        label="Email support"
        value={data.contact.email1}
        href={`mailto:${data.contact.email1}`}
      />
    </div>
  </div>
);

const Support = () => (
  <>
    <section className="relative overflow-hidden border-b border-line bg-porcelain">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-28 -top-28 h-80 w-80 rounded-full border border-primary/10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-8 -top-8 h-52 w-52 rounded-full border border-golden/40"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 left-1/2 h-48 w-[36rem] -translate-x-1/2 rounded-full bg-white/60 blur-3xl"
      />

      <Container className="relative grid items-end gap-10 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:py-20">
        <Reveal>
          <SectionHeading
            eyebrow="Service & support"
            title="Help from enquiry to after-sales."
            description="Our experienced team supports you with product selection, technical guidance, delivery and organised order management."
          />
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/contact">Contact support</ButtonLink>
            <ButtonLink href="/product" variant="outline">
              Browse products
            </ButtonLink>
          </div>
          <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.16em] text-muted">
            Technical service · Delivery · Training · Order management
          </p>
        </Reveal>

        <Reveal delay={100}>
          <SupportSnapshot />
        </Reveal>
      </Container>
    </section>

    <section className="bg-white py-16 lg:py-24">
      <Container>
        <Reveal>
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="How we support you"
              title="Practical support at every stage."
              description="A dependable response before, during and after your order."
            />
            <p className="shrink-0 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
              Dhaka · Nationwide
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {data.support.map((item, index) => {
            const meta = serviceMeta[index] ?? {
              icon: FiCheckCircle,
              tags: [],
            };
            const Icon = meta.icon;

            return (
              <Reveal key={item.title} delay={index * 70}>
                <article className="group flex h-full flex-col rounded-2xl border border-line bg-porcelain/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/15 hover:bg-white hover:shadow-soft sm:p-7">
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
                  <p className="mt-3 flex-1 text-[13px] leading-7 text-softgray">
                    {item.details}
                  </p>

                  {meta.tags.length > 0 && (
                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {meta.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-line bg-white px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.08em] text-muted"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  <Link
                    href="/contact"
                    className="mt-5 inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-primary"
                  >
                    Ask about this
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

    <section className="border-y border-line/70 bg-porcelain py-16 lg:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Our process"
            title="From first enquiry to final delivery."
            description="Three clear steps — with one team staying involved from the first message to after-sales support."
          />
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-10 overflow-hidden rounded-[2rem] border border-line bg-white">
            <div className="grid lg:grid-cols-[0.72fr_1.28fr]">
              <div className="relative overflow-hidden bg-gradient-to-br from-primary to-secondary px-6 py-10 text-white sm:px-8 lg:px-10 lg:py-12">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-16 -top-20 h-48 w-48 rounded-full border border-white/10"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -bottom-16 -left-12 h-40 w-40 rounded-full bg-secondary/40 blur-3xl"
                />

                <div className="relative">
                  <span className="inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-golden">
                    <span className="h-px w-6 bg-golden/70" />
                    Working together
                  </span>
                  <h3 className="mt-4 font-base text-2xl font-semibold leading-9">
                    One team from requirement to after-sales.
                  </h3>
                  <p className="mt-3 max-w-sm text-[12px] leading-6 text-white/70">
                    Clear recommendations, organised delivery and technical help
                    when you need it.
                  </p>
                  <ButtonLink href="/contact" variant="gold" className="mt-6">
                    Start with an enquiry
                  </ButtonLink>
                </div>
              </div>

              <ol className="grid divide-y divide-line sm:grid-cols-3 sm:divide-x sm:divide-y-0">
                {processSteps.map(({ icon: Icon, number, title, description }) => (
                  <li
                    key={number}
                    className="group flex flex-col justify-center p-6 sm:p-7 lg:p-8"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary/5 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                        <Icon aria-hidden="true" />
                      </span>
                      <span className="font-base text-[10px] font-semibold uppercase tracking-[0.16em] text-muted">
                        Step {number}
                      </span>
                    </div>
                    <h3 className="mt-5 font-base text-[15px] font-semibold leading-6 text-ink">
                      {title}
                    </h3>
                    <p className="mt-2 text-[12px] leading-6 text-softgray">
                      {description}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>

    <section className="bg-white py-16 lg:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <Reveal>
            <SectionHeading
              eyebrow="Common questions"
              title="Answers before you ask."
              description="The details customers ask us most — from delivery coverage to technical help and samples."
            />

            <div className="mt-8 rounded-2xl border border-line bg-porcelain/60 p-6">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-primary text-white">
                <FiHeadphones aria-hidden="true" />
              </span>
              <p className="mt-4 font-base text-base font-semibold text-ink">
                Still need a hand?
              </p>
              <p className="mt-1.5 text-[12px] leading-6 text-softgray">
                Reach our team directly and we will give you a clear answer.
              </p>

              <div className="mt-4 space-y-2">
                <ContactLine
                  icon={FiPhone}
                  label="Call us"
                  value={data.contact.phone}
                  href={`tel:${data.contact.phone}`}
                />
                <ContactLine
                  icon={FiMail}
                  label="Email us"
                  value={data.contact.email1}
                  href={`mailto:${data.contact.email1}`}
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="overflow-hidden rounded-2xl border border-line bg-white">
              {faqs.map((item, index) => (
                <details
                  key={item.question}
                  open={index === 0}
                  className="group border-b border-line/70 transition-colors last:border-b-0 open:bg-porcelain/40"
                >
                  <summary className="flex cursor-pointer list-none items-center gap-3 px-4 py-4 [&::-webkit-details-marker]:hidden sm:px-5 sm:py-5">
                    <span className="font-base text-[10px] font-semibold tabular-nums tracking-[0.08em] text-lightgray">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="flex-1 font-base text-[14px] font-semibold leading-5 text-ink sm:text-[15px] sm:leading-6">
                      {item.question}
                    </span>
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-line text-[13px] text-primary transition-all duration-300 group-open:rotate-45 group-open:border-primary group-open:bg-primary group-open:text-white">
                      <FiPlus aria-hidden="true" />
                    </span>
                  </summary>
                  <div className="px-4 pb-5 sm:pl-14 sm:pr-14 sm:pb-6">
                    <p className="text-[13px] leading-6 text-softgray">
                      {item.answer}
                    </p>
                  </div>
                </details>
              ))}
            </div>
            <p className="mt-4 text-[11px] text-muted">
              Can&apos;t find your answer?{" "}
              <Link
                href="/contact"
                className="font-semibold text-primary underline-offset-4 hover:underline"
              >
                Ask us directly
              </Link>
            </p>
          </Reveal>
        </div>
      </Container>
    </section>

    <section className="bg-porcelain pb-16 lg:pb-24">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-primary via-primary to-secondary px-6 py-10 sm:px-10 lg:px-14 lg:py-14">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 -top-32 h-96 w-96 rounded-full border border-white/10"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-10 -top-16 h-64 w-64 rounded-full border border-golden/20"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-32 left-1/3 h-72 w-72 rounded-full bg-secondary/40 blur-3xl"
            />

            <div className="relative z-10 grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-center">
              <div>
                <span className="inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-golden">
                  <span className="h-px w-6 bg-golden/70" />
                  Still need help?
                </span>
                <h2 className="mt-4 max-w-xl font-base text-[clamp(1.75rem,2.8vw,2.6rem)] font-semibold leading-[1.15] tracking-[-0.01em] text-white">
                  Talk to a team that knows the product.
                </h2>
                <p className="mt-3 max-w-lg text-sm leading-7 text-white/70">
                  Share a requirement, a technical issue or a delivery question —
                  we will point you to the right solution.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
                <ButtonLink href="/contact" variant="gold">
                  Send an enquiry
                </ButtonLink>
                <ButtonLink
                  href={`tel:${data.contact.phone}`}
                  variant="light"
                  withIcon={false}
                >
                  <FiPhone aria-hidden="true" />
                  Call support
                </ButtonLink>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  </>
);

export default Support;
