"use client";

import Image from "next/image";
import { HiArrowRight } from "react-icons/hi";
import { destinations } from "@/config/content";

export function Destinations() {
  return (
    <section id="destinations" className="bg-[#F7FAFC] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center lg:mb-16">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-[#0B7A75]">
            Popular Destinations
          </span>
          <h2 className="mb-4 text-3xl font-bold text-[#0F172A] sm:text-4xl lg:text-5xl">
            Where Will Your Journey Take You?
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Explore our handpicked destinations across India, each offering unique experiences and unforgettable memories.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((destination, index) => (
            <div
              key={destination.id}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={destination.image}
                  alt={destination.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="mb-1 text-2xl font-bold text-white">
                    {destination.name}
                  </h3>
                  <p className="text-sm text-white/80">{destination.tripCount} Trips Available</p>
                </div>
              </div>
              <div className="p-6">
                <p className="mb-4 text-gray-600">{destination.highlight}</p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-sm text-gray-500">Starting from</span>
                    <p className="text-xl font-bold text-[#0B7A75]">
                      &#8377;{destination.startingPrice.toLocaleString("en-IN")}
                    </p>
                  </div>
                  <button className="flex items-center gap-2 rounded-full bg-[#0B7A75]/10 px-4 py-2 text-sm font-semibold text-[#0B7A75] transition-all hover:bg-[#0B7A75] hover:text-white">
                    View Trips
                    <HiArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

