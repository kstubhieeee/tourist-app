"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { HiChevronLeft, HiChevronRight, HiStar } from "react-icons/hi";
import { testimonials } from "@/config/content";

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center lg:mb-16">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-[#0B7A75]">
            Testimonials
          </span>
          <h2 className="mb-4 text-3xl font-bold text-[#0F172A] sm:text-4xl lg:text-5xl">
            What Our Travelers Say
          </h2>
        </div>

        <div className="relative mx-auto max-w-4xl">
          <div className="overflow-hidden rounded-3xl bg-[#F7FAFC] p-8 lg:p-12">
            <div className="flex flex-col items-center text-center">
              <div className="relative mb-6 h-20 w-20 overflow-hidden rounded-full ring-4 ring-white">
                <Image
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].alt}
                  fill
                  className="object-cover"
                  loading="lazy"
                />
              </div>

              <div className="mb-4 flex items-center gap-1">
                {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
                  <HiStar key={i} className="h-5 w-5 text-amber-500" />
                ))}
              </div>

              <blockquote className="mb-6 text-lg text-gray-700 lg:text-xl">
                &ldquo;{testimonials[currentIndex].review}&rdquo;
              </blockquote>

              <div>
                <p className="font-bold text-[#0F172A]">{testimonials[currentIndex].name}</p>
                <p className="text-sm text-gray-500">
                  {testimonials[currentIndex].location} | {testimonials[currentIndex].tripType}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={prevSlide}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-600 transition-all hover:border-[#0B7A75] hover:bg-[#0B7A75] hover:text-white"
              aria-label="Previous testimonial"
            >
              <HiChevronLeft className="h-5 w-5" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex ? "w-8 bg-[#0B7A75]" : "w-2 bg-gray-300"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-600 transition-all hover:border-[#0B7A75] hover:bg-[#0B7A75] hover:text-white"
              aria-label="Next testimonial"
            >
              <HiChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

