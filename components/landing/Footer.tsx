"use client";

import { useState } from "react";
import Image from "next/image";
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from "react-icons/hi";
import { FaInstagram, FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import { siteConfig } from "@/config/site";
import { footerLinks } from "@/config/content";

export function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail("");
  };

  return (
    <footer id="contact" className="bg-[#0F172A] pt-20 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 rounded-2xl bg-gradient-to-r from-[#0B7A75] to-[#0B7A75]/80 p-8 lg:p-12">
          <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">
            <div>
              <h3 className="mb-2 text-2xl font-bold text-white lg:text-3xl">
                Ready for Your Next Adventure?
              </h3>
              <p className="text-white/80">
                Get exclusive deals and travel tips delivered to your inbox.
              </p>
            </div>
            <form onSubmit={handleSubmit} className="flex w-full max-w-md gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 rounded-xl bg-white/20 px-5 py-3 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                required
              />
              <button
                type="submit"
                className="rounded-xl bg-[#FF7A59] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#e86847]"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="grid gap-12 pb-12 lg:grid-cols-4">
          <div>
            <div className="mb-6">
              <Image
                src="/logo.png"
                alt="Aarambh Escapes"
                width={160}
                height={50}
                className="h-12 w-auto"
              />
            </div>
            <p className="mb-6 text-gray-400">{siteConfig.description}</p>
            <div className="flex gap-4">
              <a
                href={siteConfig.links.instagram}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#FF7A59]"
                aria-label="Instagram"
              >
                <FaInstagram className="h-5 w-5" />
              </a>
              <a
                href={siteConfig.links.facebook}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#FF7A59]"
                aria-label="Facebook"
              >
                <FaFacebookF className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.links.twitter}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#FF7A59]"
                aria-label="Twitter"
              >
                <FaTwitter className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.links.youtube}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#FF7A59]"
                aria-label="YouTube"
              >
                <FaYoutube className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-6 font-semibold">Destinations</h4>
            <ul className="space-y-3">
              {footerLinks.destinations.map((link) => (
                <li key={link.title}>
                  <a href={link.href} className="text-gray-400 transition-colors hover:text-white">
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-6 font-semibold">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.title}>
                  <a href={link.href} className="text-gray-400 transition-colors hover:text-white">
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-6 font-semibold">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-400">
                <HiOutlineMail className="h-5 w-5 text-[#0B7A75]" />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-white">
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <HiOutlinePhone className="h-5 w-5 text-[#0B7A75]" />
                <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-white">
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <HiOutlineLocationMarker className="mt-1 h-5 w-5 flex-shrink-0 text-[#0B7A75]" />
                <span>{siteConfig.contact.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              {footerLinks.support.map((link) => (
                <a key={link.title} href={link.href} className="hover:text-white">
                  {link.title}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

