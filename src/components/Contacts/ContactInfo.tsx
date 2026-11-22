import { FiClock, FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { data } from "@/constants/data";

const ContactInfo = () => (
  <div className="divide-y divide-line">
    <a
      href={`tel:${data.contact.phone}`}
      className="group flex items-start gap-4 py-5 first:pt-0"
    >
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-primary/5 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
        <FiPhone aria-hidden="true" />
      </span>
      <span>
        <span className="block text-[10px] font-semibold uppercase tracking-[0.16em] text-muted">Call us</span>
        <span className="mt-2 block font-base text-base font-semibold text-ink">{data.contact.phone}</span>
      </span>
    </a>

    <div className="py-5">
      <div className="flex items-start gap-4">
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-primary/5 text-primary">
          <FiMail aria-hidden="true" />
        </span>
        <div className="min-w-0">
          <span className="block text-[10px] font-semibold uppercase tracking-[0.16em] text-muted">Email us</span>
          {[data.contact.email1, data.contact.email2].map((email) => (
            <a
              key={email}
              href={`mailto:${email}`}
              className="mt-2 block break-all text-sm text-ink transition-colors hover:text-primary"
            >
              {email}
            </a>
          ))}
        </div>
      </div>
    </div>

    <div className="flex items-start gap-4 py-5">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-primary/5 text-primary">
        <FiMapPin aria-hidden="true" />
      </span>
      <div>
        <span className="block text-[10px] font-semibold uppercase tracking-[0.16em] text-muted">Visit us</span>
        <p className="mt-2 text-sm leading-6 text-ink">{data.contact.address}</p>
      </div>
    </div>

    <div className="flex items-start gap-4 py-5 pb-0">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-primary/5 text-primary">
        <FiClock aria-hidden="true" />
      </span>
      <div>
        <span className="block text-[10px] font-semibold uppercase tracking-[0.16em] text-muted">Office hours</span>
        <p className="mt-2 text-sm leading-6 text-ink">Saturday – Thursday<br />9:00 AM – 6:00 PM</p>
      </div>
    </div>
  </div>
);

export default ContactInfo;
