"use client";

import { HiOutlineMap, HiOutlineAdjustments, HiOutlinePaperAirplane } from "react-icons/hi";
import { howItWorks } from "@/config/content";

const iconMap: Record<string, React.ReactNode> = {
  map: <HiOutlineMap className="h-8 w-8" />,
  settings: <HiOutlineAdjustments className="h-8 w-8" />,
  plane: <HiOutlinePaperAirplane className="h-8 w-8" />,
};

export function HowItWorks() {
  return (
    <section className="bg-[#F7FAFC] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center lg:mb-16">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-[#0B7A75]">
            Simple Process
          </span>
          <h2 className="mb-4 text-3xl font-bold text-[#0F172A] sm:text-4xl lg:text-5xl">
            How It Works
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Book your dream trip in three simple steps
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 top-16 hidden h-0.5 w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#0B7A75]/30 to-transparent lg:block" />

          <div className="grid gap-8 sm:grid-cols-3">
            {howItWorks.map((step, index) => (
              <div key={step.step} className="relative text-center">
                <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-lg">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#0B7A75] text-white">
                    {iconMap[step.icon]}
                  </div>
                </div>
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 rounded-full bg-[#FF7A59] px-3 py-1 text-sm font-bold text-white">
                  {step.step}
                </div>
                <h3 className="mb-3 text-xl font-bold text-[#0F172A]">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

