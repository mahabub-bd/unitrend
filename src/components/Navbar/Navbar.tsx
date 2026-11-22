"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FiArrowUpRight,
  FiMail,
  FiMenu,
  FiPhone,
  FiX,
} from "react-icons/fi";
import logo from "@/assets/Images/logo_adobe_express.svg";
import Container from "@/components/ui/Container";
import { data } from "@/constants/data";
import { cn } from "@/lib/utils";

const navItems = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "About", link: "/about" },
  { id: 3, name: "Product", link: "/product" },
  { id: 4, name: "Support", link: "/support" },
  { id: 5, name: "Blog", link: "/blog" },
  { id: 6, name: "Contact", link: "/contact" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  const isActive = (link: string) =>
    link === "/" ? pathname === "/" : pathname.startsWith(link);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-all duration-300",
        scrolled
          ? "border-line/80 bg-white/90 shadow-[0_6px_28px_rgba(12,12,12,0.07)]"
          : "border-transparent bg-white/80"
      )}
    >
      {/* Blur lives on its own layer so the header does not become the
          containing block for the fixed mobile drawer. */}
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-0 -z-10 transition-all duration-300",
          scrolled ? "backdrop-blur-md" : "backdrop-blur-sm"
        )}
      />
      <Container className="flex h-[76px] items-center justify-between gap-6">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-3"
          aria-label="Unitrend International — home"
        >
          <Image
            src={logo}
            alt=""
            width={48}
            height={48}
            priority
            className="h-11 w-11 object-contain"
          />
          <span className="flex flex-col leading-none">
            <span className="font-base text-base font-bold tracking-[0.14em] text-primary 2xl:text-lg">
              UNITREND
            </span>
            <span className="mt-1 text-[9px] font-semibold uppercase tracking-[0.28em] text-softgray 2xl:text-[10px]">
              International
            </span>
          </span>
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-1 lg:flex"
        >
          {navItems.map((item) => {
            const active = isActive(item.link);

            return (
              <Link
                key={item.id}
                href={item.link}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "relative rounded-full px-3.5 py-2 text-[13px] font-semibold uppercase tracking-[0.12em] transition-colors duration-300 xl:px-4 2xl:text-[14px]",
                  active
                    ? "text-primary"
                    : "text-softgray hover:text-primary"
                )}
              >
                {item.name}
                <span
                  aria-hidden="true"
                  className={cn(
                    "absolute inset-x-4 -bottom-0.5 h-px origin-left bg-primary transition-transform duration-300",
                    active ? "scale-x-100" : "scale-x-0"
                  )}
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={`tel:${data.contact.phone}`}
            className="hidden items-center gap-2 text-xs font-semibold tracking-[0.02em] text-softgray transition-colors hover:text-primary xl:flex 2xl:text-[13px]"
          >
            <FiPhone aria-hidden="true" className="text-primary text-sm" />
            {data.contact.phone}
          </a>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.12em] text-white transition-all duration-300 hover:bg-secondary 2xl:px-6 2xl:py-3 2xl:text-[13px]"
          >
            Get a quote
            <FiArrowUpRight
              aria-hidden="true"
              className="text-sm transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          className="grid h-11 w-11 place-items-center rounded-full border border-line text-xl text-primary transition-colors hover:border-primary/30 hover:bg-primary/5 lg:hidden"
        >
          <FiMenu aria-hidden="true" />
        </button>
      </Container>

      {open && (
        <div className="fixed inset-0 z-[100] lg:hidden">
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="absolute inset-0 h-full w-full cursor-default bg-ink/50 backdrop-blur-sm animate-fade-in"
          />

          <div
            id="mobile-navigation"
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            className="absolute right-0 top-0 flex h-full w-full max-w-sm flex-col overflow-y-auto bg-porcelain p-6 shadow-2xl animate-slide-in-right"
          >
            <div className="flex items-center justify-between">
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className="flex items-center gap-3"
                aria-label="Unitrend International — home"
              >
                <Image
                  src={logo}
                  alt=""
                  width={44}
                  height={44}
                  className="h-10 w-10 object-contain"
                />
                <span className="font-base text-sm font-bold tracking-[0.16em] text-primary">
                  UNITREND
                </span>
              </Link>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="grid h-10 w-10 place-items-center rounded-full border border-line text-lg text-primary transition-colors hover:bg-primary hover:text-white"
              >
                <FiX aria-hidden="true" />
              </button>
            </div>

            <nav aria-label="Mobile" className="mt-10 flex flex-col">
              {navItems.map((item, index) => (
                <Link
                  key={item.id}
                  href={item.link}
                  onClick={() => setOpen(false)}
                  aria-current={isActive(item.link) ? "page" : undefined}
                  className={cn(
                    "group flex items-center justify-between border-b border-line py-4 font-base text-2xl font-semibold transition-colors",
                    isActive(item.link)
                      ? "text-primary"
                      : "text-ink hover:text-primary"
                  )}
                >
                  <span className="flex items-baseline gap-3">
                    <span className="text-[10px] font-semibold tracking-[0.2em] text-muted">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {item.name}
                  </span>
                  <FiArrowUpRight
                    aria-hidden="true"
                    className="text-lg text-primary/50 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>
              ))}
            </nav>

            <div className="mt-auto space-y-3 pt-8">
              <a
                href={`tel:${data.contact.phone}`}
                className="flex items-center gap-3 text-sm text-softgray transition-colors hover:text-primary"
              >
                <span className="grid h-9 w-9 place-items-center rounded-full bg-white text-primary shadow-sm">
                  <FiPhone aria-hidden="true" />
                </span>
                {data.contact.phone}
              </a>
              <a
                href={`mailto:${data.contact.email1}`}
                className="flex items-center gap-3 break-all text-sm text-softgray transition-colors hover:text-primary"
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white text-primary shadow-sm">
                  <FiMail aria-hidden="true" />
                </span>
                {data.contact.email1}
              </a>
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-3.5 text-sm font-semibold text-white"
              >
                Get a quote
                <FiArrowUpRight aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
