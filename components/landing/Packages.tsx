"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { HiChevronLeft, HiChevronRight, HiStar } from "react-icons/hi";
import { packages } from "@/config/content";

export function Packages() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % packages.length);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + packages.length) % packages.length);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  const getVisiblePackages = () => {
    const result = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % packages.length;
      result.push({ ...packages[index], displayIndex: i });
    }
    return result;
  };

  return (
    <section id="packages" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col items-center justify-between gap-4 sm:flex-row lg:mb-16">
          <div>
            <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-[#0B7A75]">
              Featured Packages
            </span>
            <h2 className="text-3xl font-bold text-[#0F172A] sm:text-4xl">
              Handcrafted Experiences
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={prevSlide}
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 text-gray-600 transition-all hover:border-[#0B7A75] hover:bg-[#0B7A75] hover:text-white"
              aria-label="Previous package"
            >
              <HiChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextSlide}
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 text-gray-600 transition-all hover:border-[#0B7A75] hover:bg-[#0B7A75] hover:text-white"
              aria-label="Next package"
            >
              <HiChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <div className="hidden gap-6 lg:grid lg:grid-cols-3">
            {getVisiblePackages().map((pkg) => (
              <PackageCard key={`${pkg.id}-${pkg.displayIndex}`} pkg={pkg} />
            ))}
          </div>

          <div className="lg:hidden">
            <PackageCard pkg={packages[currentIndex]} />
          </div>
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {packages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex ? "w-8 bg-[#0B7A75]" : "w-2 bg-gray-300"
              }`}
              aria-label={`Go to package ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function PackageCard({ pkg }: { pkg: (typeof packages)[0] & { displayIndex?: number } }) {
  return (
    <div className="group overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
      <div className="relative h-56 overflow-hidden">
        <Image
          src={pkg.image}
          alt={pkg.alt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
          sizes="(max-width: 1024px) 100vw, 33vw"
        />
        <div className="absolute left-4 top-4 flex gap-2">
          {pkg.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-[#0F172A] backdrop-blur-sm"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="absolute bottom-4 right-4 flex items-center gap-1 rounded-full bg-white/90 px-3 py-1 backdrop-blur-sm">
          <HiStar className="h-4 w-4 text-amber-500" />
          <span className="text-sm font-medium text-[#0F172A]">{pkg.rating}</span>
          <span className="text-xs text-gray-500">({pkg.reviewCount})</span>
        </div>
      </div>
      <div className="p-6">
        <div className="mb-2 text-sm font-medium text-[#0B7A75]">{pkg.duration}</div>
        <h3 className="mb-2 text-xl font-bold text-[#0F172A]">{pkg.title}</h3>
        <p className="mb-4 text-sm text-gray-600">{pkg.summary}</p>
        <div className="flex items-center justify-between border-t border-gray-100 pt-4">
          <div>
            <span className="text-sm text-gray-500 line-through">
              &#8377;{pkg.originalPrice.toLocaleString("en-IN")}
            </span>
            <p className="text-2xl font-bold text-[#0B7A75]">
              &#8377;{pkg.price.toLocaleString("en-IN")}
            </p>
            <span className="text-xs text-gray-500">per person</span>
          </div>
          <button className="rounded-full bg-[#FF7A59] px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-[#e86847] hover:shadow-lg">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}

