import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import Container from "@/components/ui/Container";
import ButtonLink from "@/components/ui/ButtonLink";
import { data } from "@/constants/data";

const contactRows = [
  {
    icon: FiPhone,
    label: "Call us",
    value: data.contact.phone,
    href: `tel:${data.contact.phone}`,
  },
  {
    icon: FiMail,
    label: "Email us",
    value: data.contact.email1,
    href: `mailto:${data.contact.email1}`,
  },
  {
    icon: FiMapPin,
    label: "Visit us",
    value: data.contact.address,
  },
];

const CtaBanner = () => (
  <section className="bg-porcelain pb-20 lg:pb-28">
    <Container>
      <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-primary via-primary to-secondary px-6 py-12 sm:px-10 lg:px-14 lg:py-16 2xl:px-16 2xl:py-20">
        <div
          aria-hidden="true"
          className="absolute -right-24 -top-32 h-96 w-96 rounded-full border border-white/10"
        />
        <div
          aria-hidden="true"
          className="absolute -right-10 -top-16 h-64 w-64 rounded-full border border-golden/20"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-32 left-1/3 h-72 w-72 rounded-full bg-secondary/40 blur-3xl"
        />

        <div className="relative z-10 grid gap-8 lg:grid-cols-[1.35fr_1fr] lg:items-end">
          <div>
            <span className="inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-golden">
              <span className="h-px w-7 bg-golden/70" />
              Let&apos;s work together
            </span>
            <h2 className="mt-5 max-w-xl font-base text-[clamp(1.9rem,3vw,2.8rem)] font-semibold leading-[1.15] tracking-[-0.02em] text-white">
              Looking for a supply partner who delivers?
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-7 text-white/70">
              Tell us what you need. Our team will help you source the right
              product at the right price — with dependable delivery and
              after-sales support.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
            <ButtonLink href="/contact" variant="gold">
              Request a quote
            </ButtonLink>
            <ButtonLink href={`tel:${data.contact.phone}`} variant="light" withIcon={false}>
              <FiPhone aria-hidden="true" />
              Call us
            </ButtonLink>
          </div>
        </div>

        <div className="relative z-10 mt-10 grid gap-5 border-t border-white/15 pt-6 sm:grid-cols-3">
          {contactRows.map(({ icon: Icon, label, value, href }) => {
            const content = (
              <>
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white/10 text-golden">
                  <Icon aria-hidden="true" />
                </span>
                <span className="min-w-0">
                  <span className="block text-[10px] uppercase tracking-[0.18em] text-white/50">
                    {label}
                  </span>
                  <span className="mt-1 block break-words text-[13px] leading-5 text-white/85">
                    {value}
                  </span>
                </span>
              </>
            );

            return href ? (
              <a
                key={label}
                href={href}
                className="flex items-start gap-3 transition-opacity hover:opacity-80"
              >
                {content}
              </a>
            ) : (
              <div key={label} className="flex items-start gap-3">
                {content}
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  </section>
);

export default CtaBanner;
