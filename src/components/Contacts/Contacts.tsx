import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import ContactInfo from "@/components/Contacts/ContactInfo";
import ContactForm from "@/components/Contacts/ContactForm";
import MapEmbed from "@/components/Contacts/MapEmbed";

const Contacts = () => (
  <>
    <section className="border-b border-line bg-porcelain">
      <Container className="py-16 lg:py-24">
        <Reveal>
          <SectionHeading
            eyebrow="Contact us"
            title="Let’s start something dependable."
            description="Have a product requirement, technical question or sourcing request? Share the details and our team will respond."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-[0.78fr_1.22fr]">
          <Reveal>
            <aside className="h-full rounded-2xl border border-line bg-white p-6 sm:p-8">
              <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">
                Direct contact
              </p>
              <ContactInfo />
            </aside>
          </Reveal>
          <Reveal delay={80}>
            <div className="h-full rounded-2xl border border-line bg-white p-6 shadow-soft sm:p-8 lg:p-10">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
    <MapEmbed />
  </>
);

export default Contacts;
