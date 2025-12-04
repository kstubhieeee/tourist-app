"use client";

import { useState } from "react";
import { HiOutlineLocationMarker, HiOutlineCalendar, HiSearch, HiChevronDown } from "react-icons/hi";
import { heroContent } from "@/config/content";

const cities = ["Mumbai", "Delhi", "Bangalore", "Chennai", "Kolkata", "Hyderabad", "Pune", "Ahmedabad"];
const destinationsList = ["Ladakh", "Kerala", "Rajasthan", "Himachal Pradesh", "Goa", "Andaman", "Kashmir", "Uttarakhand"];

export function Hero() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [dates, setDates] = useState("");
  const [showFromDropdown, setShowFromDropdown] = useState(false);
  const [showToDropdown, setShowToDropdown] = useState(false);

  return (
    <section className="relative min-h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroContent.backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      <div className="relative flex min-h-screen flex-col items-center justify-center px-4 pt-20 text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm">
          <span className="h-2 w-2 rounded-full bg-[#FF7A59]" />
          <span className="text-sm font-medium text-white">Trusted by 15,000+ travelers</span>
        </div>

        <h1 className="mb-4 max-w-4xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          {heroContent.headline}
        </h1>
        <p className="mb-2 text-xl font-medium text-white/90 sm:text-2xl">
          {heroContent.subheadline}
        </p>
        <p className="mb-10 max-w-xl text-base text-white/70 sm:text-lg">
          {heroContent.description}
        </p>

        <div className="w-full max-w-4xl rounded-2xl bg-white p-3 shadow-2xl sm:p-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <div className="relative flex-1">
              <div className="flex items-center gap-3 rounded-xl bg-gray-50 px-4 py-3">
                <HiOutlineLocationMarker className="h-5 w-5 flex-shrink-0 text-[#0B7A75]" />
                <div className="flex-1">
                  <label className="block text-xs font-medium text-gray-500">From</label>
                  <button
                    onClick={() => {
                      setShowFromDropdown(!showFromDropdown);
                      setShowToDropdown(false);
                    }}
                    className="flex w-full items-center justify-between text-left"
                  >
                    <span className={from ? "text-[#0F172A]" : "text-gray-400"}>
                      {from || heroContent.searchPlaceholders.from}
                    </span>
                    <HiChevronDown className="h-4 w-4 text-gray-400" />
                  </button>
                </div>
              </div>
              {showFromDropdown && (
                <div className="absolute left-0 right-0 top-full z-10 mt-2 max-h-48 overflow-y-auto rounded-xl bg-white py-2 shadow-xl">
                  {cities.map((city) => (
                    <button
                      key={city}
                      onClick={() => {
                        setFrom(city);
                        setShowFromDropdown(false);
                      }}
                      className="block w-full px-4 py-2 text-left text-sm hover:bg-gray-50"
                    >
                      {city}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="relative flex-1">
              <div className="flex items-center gap-3 rounded-xl bg-gray-50 px-4 py-3">
                <HiOutlineLocationMarker className="h-5 w-5 flex-shrink-0 text-[#0B7A75]" />
                <div className="flex-1">
                  <label className="block text-xs font-medium text-gray-500">To</label>
                  <button
                    onClick={() => {
                      setShowToDropdown(!showToDropdown);
                      setShowFromDropdown(false);
                    }}
                    className="flex w-full items-center justify-between text-left"
                  >
                    <span className={to ? "text-[#0F172A]" : "text-gray-400"}>
                      {to || heroContent.searchPlaceholders.to}
                    </span>
                    <HiChevronDown className="h-4 w-4 text-gray-400" />
                  </button>
                </div>
              </div>
              {showToDropdown && (
                <div className="absolute left-0 right-0 top-full z-10 mt-2 max-h-48 overflow-y-auto rounded-xl bg-white py-2 shadow-xl">
                  {destinationsList.map((dest) => (
                    <button
                      key={dest}
                      onClick={() => {
                        setTo(dest);
                        setShowToDropdown(false);
                      }}
                      className="block w-full px-4 py-2 text-left text-sm hover:bg-gray-50"
                    >
                      {dest}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="flex-1">
              <div className="flex items-center gap-3 rounded-xl bg-gray-50 px-4 py-3">
                <HiOutlineCalendar className="h-5 w-5 flex-shrink-0 text-[#0B7A75]" />
                <div className="flex-1">
                  <label className="block text-xs font-medium text-gray-500">Dates</label>
                  <input
                    type="date"
                    value={dates}
                    onChange={(e) => setDates(e.target.value)}
                    className="w-full bg-transparent text-sm text-[#0F172A] outline-none placeholder:text-gray-400"
                    placeholder={heroContent.searchPlaceholders.dates}
                  />
                </div>
              </div>
            </div>

            <button className="flex items-center justify-center gap-2 rounded-xl bg-[#FF7A59] px-8 py-4 font-semibold text-white transition-all hover:bg-[#e86847] hover:shadow-lg sm:py-6">
              <HiSearch className="h-5 w-5" />
              <span>Search</span>
            </button>
          </div>
        </div>

        <a
          href="#packages"
          className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-white/80 transition-colors hover:text-white"
        >
          Explore Popular Packages
          <HiChevronDown className="h-4 w-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
}

