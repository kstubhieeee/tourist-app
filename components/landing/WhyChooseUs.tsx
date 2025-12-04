"use client";

import { HiOutlineLocationMarker, HiOutlineOfficeBuilding, HiOutlineCalendar, HiOutlineSupport } from "react-icons/hi";
import { whyChooseUs } from "@/config/content";

const iconMap: Record<string, React.ReactNode> = {
  compass: <HiOutlineLocationMarker className="h-8 w-8" />,
  building: <HiOutlineOfficeBuilding className="h-8 w-8" />,
  calendar: <HiOutlineCalendar className="h-8 w-8" />,
  headphones: <HiOutlineSupport className="h-8 w-8" />,
};

export function WhyChooseUs() {
  return (
    <section id="why-us" className="bg-[#0B7A75] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center lg:mb-16">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-white/70">
            Why Choose Us
          </span>
          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Travel with Confidence
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-white/80">
            We go beyond booking to create seamless, memorable journeys that exceed expectations.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {whyChooseUs.map((item, index) => (
            <div
              key={item.id}
              className="group rounded-2xl bg-white/10 p-8 backdrop-blur-sm transition-all duration-300 hover:bg-white/20"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-white/20 text-white transition-colors group-hover:bg-[#FF7A59]">
                {iconMap[item.icon]}
              </div>
              <h3 className="mb-3 text-xl font-bold text-white">{item.title}</h3>
              <p className="text-white/70">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

