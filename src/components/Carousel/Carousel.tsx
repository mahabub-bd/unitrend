"use client";

import { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import carousel1 from "@/assets/Images/carousel1.webp";
import carousel2 from "@/assets/Images/carousel2.webp";
import carousel3 from "@/assets/Images/carousel3.webp";

const slides: { image: StaticImageData; alt: string }[] = [
  { image: carousel1, alt: "slide 1" },
  { image: carousel2, alt: "slide 2" },
  { image: carousel3, alt: "slide 3" },
];

const CAPTION =
  "Simply Solutions Of Reliable And Trustworthy Sourcing And Supply";

const Carousel = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setActive((prev) => (prev + 1) % slides.length),
      3000
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full overflow-hidden" role="region" aria-label="Highlights carousel">
      {slides.map((slide, index) => (
        <div
          key={slide.alt}
          className={`transition-opacity duration-700 ${
            index === active ? "opacity-100 relative" : "opacity-0 absolute inset-0"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.alt}
            className="h-[320px] w-full object-cover tablet:h-[420px] laptop:h-[520px]"
            placeholder="blur"
            priority={index === 0}
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/40 p-8">
            <h1 className="max-w-4xl text-center font-base text-white text-2xl tablet:text-4xl laptop:text-5xl">
              {CAPTION}
            </h1>
          </div>
        </div>
      ))}

      <button
        type="button"
        aria-label="Previous slide"
        onClick={() => setActive((active - 1 + slides.length) % slides.length)}
        className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/50 px-3 py-2 text-white hover:bg-white/80"
      >
        ‹
      </button>
      <button
        type="button"
        aria-label="Next slide"
        onClick={() => setActive((active + 1) % slides.length)}
        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/50 px-3 py-2 text-white hover:bg-white/80"
      >
        ›
      </button>
    </div>
  );
};

export default Carousel;
