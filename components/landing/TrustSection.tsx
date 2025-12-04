"use client";

import { HiStar } from "react-icons/hi";
import { trustBadges, partnerLogos } from "@/config/content";

export function TrustSection() {
  return (
    <section className="border-y border-gray-100 bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {trustBadges.map((badge) => (
            <div key={badge.id} className="text-center">
              <p className="text-4xl font-bold text-[#0B7A75]">{badge.value}</p>
              <p className="text-gray-600">{badge.label}</p>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-100 pt-12">
          <p className="mb-8 text-center text-sm font-medium uppercase tracking-wider text-gray-500">
            Trusted Partners
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16">
            {partnerLogos.map((partner) => (
              <div
                key={partner.id}
                className="flex h-12 items-center justify-center rounded-lg bg-gray-100 px-6 text-lg font-semibold text-gray-400 transition-colors hover:text-gray-600"
              >
                {partner.name}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex items-center justify-center gap-2 rounded-xl bg-[#F7FAFC] p-6">
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <HiStar key={i} className="h-5 w-5 text-amber-500" />
            ))}
          </div>
          <span className="font-bold text-[#0F172A]">4.8/5</span>
          <span className="text-gray-500">based on 1,200+ reviews</span>
        </div>
      </div>
    </section>
  );
}

