"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FiArrowUp,
  FiArrowUpRight,
  FiCheckCircle,
  FiClock,
  FiFileText,
  FiMail,
  FiMapPin,
  FiPhoneCall,
  FiShield,
  FiTool,
  FiTruck,
} from "react-icons/fi";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import Container from "@/components/ui/Container";
import { data } from "@/constants/data";
import logoround from "@/assets/Images/logo-PNG.png";

const year = new Date().getFullYear();

const trustHighlights = [
  {
    icon: FiShield,
    title: "Authorized Distributor",
    description: "Official partner for 5 top global printing & packaging manufacturers.",
  },
  {
    icon: FiTruck,
    title: "Nationwide Supply",
    description: "Dependable, scheduled delivery across Dhaka and all Bangladesh regions.",
  },
  {
    icon: FiTool,
    title: "Technical Support",
    description: "Hands-on application guidance, sample testing, and order management.",
  },
  {
    icon: FiCheckCircle,
    title: "Certified Materials",
    description: "High-grade eco-friendly inks, ribbons, plates, and leather patches.",
  },
];

const navigationLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Product Catalog", href: "/product" },
  { label: "Service & Support", href: "/support" },
  { label: "Latest Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
  { label: "Company Profile", href: "/profile" },
];

const productLinks = [
  { label: "Textile Label Ink (PFL)", href: "/product" },
  { label: "Screen Printing Ink", href: "/product" },
  { label: "Offset Printing Ink & Chemicals", href: "/product" },
  { label: "Textile Label Ribbon", href: "/product" },
  { label: "Label Printing Machine", href: "/product" },
  { label: "Leather Patch & Lace", href: "/product" },
];

const socialLinks = [
  {
    Icon: FaFacebookF,
    label: "Facebook",
    href: "https://facebook.com",
  },
  {
    Icon: FaLinkedinIn,
    label: "LinkedIn",
    href: "https://linkedin.com",
  },
  {
    Icon: FaYoutube,
    label: "YouTube",
    href: "https://youtube.com",
  },
  {
    Icon: FaTwitter,
    label: "Twitter / X",
    href: "https://twitter.com",
  },
  {
    Icon: FaInstagram,
    label: "Instagram",
    href: "https://instagram.com",
  },
];

const Footer = () => {
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="relative overflow-hidden bg-ink text-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>

      {/* Decorative ambient gradients */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#2a0409] via-ink to-ink"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-48 top-0 h-96 w-96 rounded-full bg-primary/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-1/4 h-96 w-96 rounded-full border border-white/[0.04]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-golden/[0.03] blur-3xl"
      />

      {/* Top Value / Trust Highlight Strip */}
      <div className="relative z-10 border-b border-white/10 bg-white/[0.02]">
        <Container className="py-10">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {trustHighlights.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="flex items-start gap-4 rounded-xl border border-white/5 bg-white/[0.02] p-4 transition-colors duration-300 hover:border-golden/20 hover:bg-white/[0.04]"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/20 text-golden">
                  <Icon aria-hidden="true" className="text-xl" />
                </span>
                <div>
                  <h3 className="font-base text-sm font-semibold tracking-wide text-white">
                    {title}
                  </h3>
                  <p className="mt-1 text-xs leading-5 text-white/55">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* Main Footer Content */}
      <Container className="relative z-10 py-16 lg:py-20 2xl:py-24">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-10 2xl:gap-14">
          {/* Column 1: Brand Info & Profile (4 cols) */}
          <div className="sm:col-span-2 lg:col-span-4">
            <Link
              href="/"
              className="inline-flex items-center gap-3.5 group"
              aria-label="Unitrend International — Home"
            >
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-white p-2 shadow-md transition-transform duration-300 group-hover:scale-105">
                <Image
                  src={logoround}
                  alt="Unitrend International logo"
                  width={48}
                  height={48}
                  className="h-full w-full object-contain"
                />
              </span>
              <span className="flex flex-col leading-tight">
                <span className="font-base text-xl font-bold tracking-[0.1em] text-white">
                  UNITREND
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.26em] text-golden">
                  International
                </span>
              </span>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-white/65">
              Simply solutions of reliable and trustworthy sourcing and supply.
              Connecting Bangladesh&apos;s printing, garment, and packaging
              industries with verified global manufacturers since 2020.
            </p>

            {/* Credibility badges */}
            <div className="mt-5 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium text-white/80">
                <span className="h-1.5 w-1.5 rounded-full bg-golden" />
                Established 2020
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium text-white/80">
                Dhaka, Bangladesh
              </span>
            </div>

            {/* Company Profile PDF Link Box */}
            <div className="mt-6">
              <Link
                href="/profile"
                className="group flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.04] p-3.5 transition-all duration-300 hover:border-golden/40 hover:bg-white/[0.07]"
              >
                <div className="flex items-center gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-lg bg-golden/10 text-golden">
                    <FiFileText aria-hidden="true" className="text-base" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold text-white group-hover:text-golden">
                      Corporate Profile
                    </p>
                    <p className="text-[11px] text-white/50">
                      View company capabilities (PDF)
                    </p>
                  </div>
                </div>
                <FiArrowUpRight
                  aria-hidden="true"
                  className="text-white/50 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-golden"
                />
              </Link>
            </div>

            {/* Social Icons */}
            <div className="mt-6">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/60">
                Follow Us
              </p>
              <div className="mt-3 flex items-center gap-2.5">
                {socialLinks.map(({ Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Unitrend on ${label}`}
                    className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-sm text-white/60 transition-all duration-300 hover:-translate-y-0.5 hover:border-golden/50 hover:bg-golden/10 hover:text-golden"
                  >
                    <Icon aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2">
            <h3 className="flex items-center gap-2 font-base text-sm font-semibold uppercase tracking-[0.18em] text-white">
              <span className="h-2 w-2 rounded-full bg-golden" />
              Navigation
            </h3>
            <ul className="mt-6 space-y-3">
              {navigationLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center text-sm text-white/65 transition-colors duration-200 hover:text-white"
                  >
                    <span className="mr-2 text-golden/40 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-golden">
                      ›
                    </span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Product Categories (3 cols) */}
          <div className="lg:col-span-3">
            <h3 className="flex items-center gap-2 font-base text-sm font-semibold uppercase tracking-[0.18em] text-white">
              <span className="h-2 w-2 rounded-full bg-golden" />
              Products
            </h3>
            <ul className="mt-6 space-y-3">
              {productLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center text-sm text-white/65 transition-colors duration-200 hover:text-white"
                  >
                    <span className="mr-2 text-golden/40 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-golden">
                      ›
                    </span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Office Hours (3 cols) */}
          <div className="lg:col-span-3">
            <h3 className="flex items-center gap-2 font-base text-sm font-semibold uppercase tracking-[0.18em] text-white">
              <span className="h-2 w-2 rounded-full bg-golden" />
              Contact
            </h3>

            <address className="mt-6 not-italic space-y-4">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-white/5 text-golden">
                  <FiMapPin aria-hidden="true" className="text-sm" />
                </span>
                <span className="text-[13px] leading-6 text-white/65">
                  {data.contact.address}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-white/5 text-golden">
                  <FiPhoneCall aria-hidden="true" className="text-sm" />
                </span>
                <a
                  href={`tel:${data.contact.phone}`}
                  className="text-[13px] font-medium text-white/85 transition-colors hover:text-golden"
                >
                  {data.contact.phone}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-white/5 text-golden">
                  <FiMail aria-hidden="true" className="text-sm" />
                </span>
                <div className="flex flex-col text-[13px] leading-snug">
                  <a
                    href={`mailto:${data.contact.email1}`}
                    className="text-white/65 transition-colors hover:text-golden"
                  >
                    {data.contact.email1}
                  </a>
                  <a
                    href={`mailto:${data.contact.email2}`}
                    className="mt-1 text-white/50 transition-colors hover:text-golden"
                  >
                    {data.contact.email2}
                  </a>
                </div>
              </div>
            </address>

            {/* Working Hours Card */}
            <div className="mt-6 rounded-xl border border-white/10 bg-white/[0.03] p-4">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 text-xs font-semibold text-white">
                  <FiClock aria-hidden="true" className="text-golden" />
                  Office Hours
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold text-emerald-400">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                  Sat – Thu
                </span>
              </div>
              <p className="mt-2.5 text-xs text-white/80">
                09:00 AM – 06:00 PM (BST)
              </p>
              <p className="mt-1 text-[11px] text-white/45">
                Friday: Closed (Support via email)
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Legal, Attribution & Back to Top Bar */}
        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year}{" "}
            <span className="text-white/75 font-medium">
              Unitrend International
            </span>
            . All rights reserved.
          </p>

          <p className="hidden md:block text-[11px] tracking-wide text-white/40">
            Reliable Sourcing · Quality Guaranteed · Global Standards
          </p>

          <div className="flex items-center gap-5">
            <a
              href="http://mahabub.me"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 transition-colors duration-200 hover:text-golden"
            >
              Developed by <span className="underline decoration-white/30 hover:decoration-golden">Mahabub Hossain</span>
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Scroll back to top of page"
              className="group inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] font-medium text-white/70 transition-all duration-300 hover:border-golden/40 hover:bg-golden/10 hover:text-golden"
            >
              <span>Top</span>
              <FiArrowUp
                aria-hidden="true"
                className="text-xs transition-transform duration-300 group-hover:-translate-y-0.5"
              />
            </button>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
