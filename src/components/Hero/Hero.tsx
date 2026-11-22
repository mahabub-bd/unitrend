"use client";

import { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import {
  FiCalendar,
  FiCheckCircle,
  FiChevronLeft,
  FiChevronRight,
  FiGlobe,
  FiHeadphones,
  FiMapPin,
  FiPackage,
  FiPause,
  FiPlay,
} from "react-icons/fi";
import Container from "@/components/ui/Container";
import ButtonLink from "@/components/ui/ButtonLink";
import { cn } from "@/lib/utils";
import heroPatch from "@/assets/Images/hero.webp";
import productPlates from "@/assets/Images/product11.webp";
import productLabels from "@/assets/Images/product1.webp";

interface Slide {
  image: StaticImageData;
  alt: string;
  label: string;
  meta: string;
}

const slides: Slide[] = [
  {
    image: heroPatch,
    alt: "Certified leather patch on a denim garment",
    label: "Certified leather patches",
    meta: "Deri Desen · Turkey",
  },
  {
    image: productPlates,
    alt: "Flexographic printing plates in assorted colours",
    label: "Flexographic printing plates",
    meta: "Prepress · Precision made",
  },
  {
    image: productLabels,
    alt: "Woven brand labels for garments",
    label: "Sustainable label solutions",
    meta: "Labels · Trims · Tapes",
  },
];

const stats = [
  { icon: FiCalendar, value: "2020", label: "Established" },
  { icon: FiGlobe, value: "5", label: "Global principals" },
  { icon: FiPackage, value: "16+", label: "Product lines" },
  { icon: FiHeadphones, value: "24/7", label: "Technical support" },
];

const Hero = () => {
  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [userPaused, setUserPaused] = useState(false);
  const isPaused = hovered || userPaused;

  useEffect(() => {
    if (isPaused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, 5500);

    return () => window.clearInterval(timer);
  }, [isPaused]);

  const step = (direction: number) => {
    setActive(
      (current) => (current + direction + slides.length) % slides.length
    );
  };

  return (
    <section className="relative overflow-hidden bg-porcelain">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(105,1,14,0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(105,1,14,0.045) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage:
            "radial-gradient(ellipse at top left, black, transparent 68%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at top left, black, transparent 68%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-48 -top-48 h-[34rem] w-[34rem] rounded-full bg-primary/[0.06] blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-24 h-[28rem] w-[28rem] rounded-full bg-golden/20 blur-3xl"
      />

      <Container className="relative z-10 grid items-center gap-14 pb-16 pt-12 sm:pb-20 sm:pt-16 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16 lg:pb-24 lg:pt-20 2xl:gap-24 2xl:pb-28">
        <div className="max-w-xl 2xl:max-w-2xl">
          <span className="inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Trading &amp; distribution · Since 2020
          </span>

          <h1 className="mt-6 text-[clamp(2.6rem,4.6vw,4.5rem)] 2xl:text-[4.75rem] font-base font-semibold leading-[1.04] tracking-[-0.03em] text-ink">
            Printing supplies,
            <br className="hidden sm:block" /> sourced with{" "}
            <span className="text-primary">certainty.</span>
          </h1>

          <p className="mt-6 max-w-lg text-[15px] leading-7 text-softgray sm:text-base 2xl:max-w-xl 2xl:text-lg">
            Unitrend International connects Bangladesh&apos;s printing and
            packaging industry with trusted global manufacturers — from inks,
            ribbons and plates to machinery, leather patches and hands-on
            technical support.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <ButtonLink href="/product">Explore products</ButtonLink>
            <ButtonLink href="/contact" variant="outline">
              Talk to our team
            </ButtonLink>
          </div>

          <p className="mt-8 flex items-start gap-2 text-xs leading-6 text-muted">
            <FiCheckCircle
              aria-hidden="true"
              className="mt-1 shrink-0 text-base text-primary"
            />
            Authorized distributor for five leading manufacturers across
            Turkey, China and Hong Kong.
          </p>
        </div>

        <div
          className="relative mx-auto w-full max-w-[520px] lg:max-w-none"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onFocus={() => setHovered(true)}
          onBlur={() => setHovered(false)}
        >
          <div
            aria-hidden="true"
            className="absolute -right-7 -top-7 hidden h-24 w-24 rounded-full border-[10px] border-golden/30 lg:block"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-6 -left-6 hidden h-32 w-32 rounded-3xl bg-primary/[0.06] lg:block"
          />

          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-line bg-sand shadow-[0_36px_80px_-44px_rgba(12,12,12,0.55)] sm:aspect-[5/4] lg:aspect-[4/5] 2xl:aspect-[1/1] 2xl:max-h-[620px]">
            {slides.map((slide, index) => (
              <Image
                key={slide.label}
                src={slide.image}
                alt={slide.alt}
                fill
                priority={index === 0}
                sizes="(min-width: 1024px) 520px, 100vw"
                aria-hidden={index !== active}
                className={cn(
                  "object-cover transition-[opacity,transform] duration-[1200ms] ease-out",
                  index === active
                    ? "scale-100 opacity-100"
                    : "scale-105 opacity-0"
                )}
              />
            ))}

            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/10 to-transparent"
            />

            <div className="absolute inset-x-0 bottom-0 z-10 flex items-end justify-between gap-4 p-5 sm:p-6">
              <div>
                <p className="text-[10px] uppercase tracking-[0.22em] text-golden">
                  {slides[active].meta}
                </p>
                <p className="mt-1.5 font-base text-lg text-white sm:text-xl">
                  {slides[active].label}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => step(-1)}
                  aria-label="Previous slide"
                  className="grid h-9 w-9 place-items-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur transition-colors hover:bg-white hover:text-primary"
                >
                  <FiChevronLeft aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={() => setUserPaused((current) => !current)}
                  aria-label={userPaused ? "Play slideshow" : "Pause slideshow"}
                  aria-pressed={userPaused}
                  className="hidden h-9 w-9 place-items-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur transition-colors hover:bg-white hover:text-primary sm:grid"
                >
                  {userPaused ? (
                    <FiPlay aria-hidden="true" />
                  ) : (
                    <FiPause aria-hidden="true" />
                  )}
                </button>
                <button
                  type="button"
                  onClick={() => step(1)}
                  aria-label="Next slide"
                  className="grid h-9 w-9 place-items-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur transition-colors hover:bg-white hover:text-primary"
                >
                  <FiChevronRight aria-hidden="true" />
                </button>
              </div>
            </div>

            <div className="absolute right-4 top-4 z-10 flex items-center gap-1.5 sm:right-6 sm:top-6">
              {slides.map((slide, index) => (
                <button
                  key={slide.label}
                  type="button"
                  onClick={() => setActive(index)}
                  aria-label={`Show slide ${index + 1}: ${slide.label}`}
                  aria-current={index === active}
                  className={cn(
                    "h-1.5 rounded-full transition-all duration-300",
                    index === active
                      ? "w-6 bg-golden"
                      : "w-1.5 bg-white/50 hover:bg-white"
                  )}
                />
              ))}
            </div>

            <p className="sr-only" aria-live="polite">
              {slides[active].label}
            </p>
          </div>

          <div className="absolute -left-4 top-8 z-20 hidden items-center gap-3 rounded-2xl border border-line bg-white/95 px-4 py-3 shadow-soft backdrop-blur lg:flex">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-primary/5 text-primary">
              <FiMapPin aria-hidden="true" />
            </span>
            <span>
              <span className="block text-[10px] uppercase tracking-[0.18em] text-muted">
                Based in
              </span>
              <span className="block text-sm font-semibold text-ink">
                Dhaka, Bangladesh
              </span>
            </span>
          </div>

          <div className="absolute -right-5 bottom-16 z-20 hidden w-[178px] rounded-2xl border border-line bg-white/95 p-4 shadow-soft backdrop-blur lg:block">
            <p className="text-[10px] uppercase tracking-[0.18em] text-muted">
              After-sales
            </p>
            <p className="mt-1 font-base text-2xl font-semibold text-primary">
              24/7
            </p>
            <p className="mt-1 text-xs leading-5 text-softgray">
              Technical service and on-ground support.
            </p>
          </div>
        </div>
      </Container>

      <div className="relative z-10 border-t border-line/80 bg-white/50">
        <Container>
          <div className="grid grid-cols-2 gap-y-6 py-7 sm:grid-cols-4 sm:gap-0 sm:divide-x sm:divide-line">
            {stats.map(({ icon: Icon, value, label }) => (
              <div
                key={label}
                className="flex items-center gap-3 sm:justify-center sm:px-4"
              >
                <Icon
                  aria-hidden="true"
                  className="text-xl text-primary/80"
                />
                <div>
                  <p className="font-base text-lg font-semibold leading-none text-ink">
                    {value}
                  </p>
                  <p className="mt-1.5 text-[10px] uppercase tracking-[0.16em] text-muted">
                    {label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Hero;
