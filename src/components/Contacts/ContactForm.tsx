"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FiArrowUpRight } from "react-icons/fi";

const inputClass =
  "mt-2 block w-full rounded-xl border border-line bg-porcelain/40 px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-lightgray focus:border-primary/40 focus:bg-white";

const labelClass =
  "block text-[11px] font-semibold uppercase tracking-[0.12em] text-softgray";

const ContactForm = () => {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    setStatus("sending");
    emailjs
      .sendForm(
        "service_3huoy9b",
        "template_14funly",
        form.current,
        "Y0ctQCIaa4xYv1jKG"
      )
      .then(
        () => {
          setStatus("success");
          form.current?.reset();
        },
        () => {
          setStatus("error");
        }
      );
  };

  return (
    <div>
      <h2 className="font-base text-xl font-semibold text-ink">Send us a message</h2>
      <p className="mt-2 text-sm leading-6 text-softgray">
        Tell us what you need and our team will get back to you.
      </p>
      <form ref={form} onSubmit={sendEmail}>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <label htmlFor="from_name" className={labelClass}>
            Name
            <input
              type="text"
              id="from_name"
              required
              placeholder="Your Name"
              name="from_name"
              className={inputClass}
            />
          </label>
          <label htmlFor="from_phone" className={labelClass}>
            Phone
            <input
              type="tel"
              id="from_phone"
              required
              placeholder="+8801234567"
              name="from_phone"
              className={inputClass}
            />
          </label>
        </div>
        <div className="mt-4">
          <label htmlFor="from_email" className={labelClass}>
            Email
            <input
              type="email"
              id="from_email"
              required
              placeholder="email@unitrendinternational.com"
              name="from_email"
              className={inputClass}
            />
          </label>
        </div>
        <div className="mt-4">
          <label htmlFor="message" className={labelClass}>
            Message
            <textarea
              id="message"
              required
              placeholder="Write Message Us"
              name="message"
              className={`${inputClass} h-28 resize-y`}
            />
          </label>
        </div>

        <button
          type="submit"
          disabled={status === "sending"}
          className="group mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-secondary disabled:cursor-wait disabled:opacity-70"
        >
          {status === "sending" ? "Sending…" : "Send message"}
          <FiArrowUpRight aria-hidden="true" className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </button>
        {status === "success" && (
          <p role="status" className="mt-4 text-sm font-semibold text-primary">
            Message sent successfully. We&apos;ll be in touch soon.
          </p>
        )}
        {status === "error" && (
          <p role="alert" className="mt-4 text-sm font-semibold text-secondary">
            We couldn&apos;t send your message. Please call or email us directly.
          </p>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
