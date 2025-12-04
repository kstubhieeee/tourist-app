"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { HiOutlineMenuAlt3, HiX, HiOutlineUser, HiOutlineLogout, HiOutlineViewGrid } from "react-icons/hi";
import { navConfig } from "@/config/site";

interface User {
  id: string;
  name: string;
  email: string;
}

export function Header() {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    async function checkAuth() {
      try {
        const res = await fetch("/api/auth/me");
        if (res.ok) {
          const data = await res.json();
          setUser(data.user);
        }
      } catch {
        setUser(null);
      }
    }
    checkAuth();
  }, []);

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    setUser(null);
    setDropdownOpen(false);
    router.refresh();
  };

  const initials = user?.name
    ?.split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          <a href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Aarambh Escapes"
              width={200}
              height={70}
              className="h-14 w-auto lg:h-16"
              priority
            />
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {navConfig.mainNav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-[#0B7A75] ${
                  isScrolled ? "text-[#0F172A]" : "text-white"
                }`}
              >
                {item.title}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className={`flex items-center gap-3 rounded-full p-1 pr-4 transition-colors ${
                    isScrolled 
                      ? "bg-gray-100 hover:bg-gray-200" 
                      : "bg-white/20 hover:bg-white/30"
                  }`}
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0B7A75] text-sm font-semibold text-white">
                    {initials}
                  </div>
                  <span className={`text-sm font-medium ${isScrolled ? "text-gray-700" : "text-white"}`}>
                    {user.name.split(" ")[0]}
                  </span>
                </button>

                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-56 rounded-xl bg-white py-2 shadow-xl ring-1 ring-black/5">
                    <div className="border-b border-gray-100 px-4 py-3">
                      <p className="text-sm font-medium text-gray-900">{user.name}</p>
                      <p className="text-xs text-gray-500">{user.email}</p>
                    </div>
                    <div className="py-2">
                      <a
                        href="/u/dashboard"
                        className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                        onClick={() => setDropdownOpen(false)}
                      >
                        <HiOutlineViewGrid className="h-5 w-5" />
                        Dashboard
                      </a>
                      <a
                        href="/u/settings"
                        className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                        onClick={() => setDropdownOpen(false)}
                      >
                        <HiOutlineUser className="h-5 w-5" />
                        Profile Settings
                      </a>
                    </div>
                    <div className="border-t border-gray-100 pt-2">
                      <button
                        onClick={handleLogout}
                        className="flex w-full items-center gap-3 px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                      >
                        <HiOutlineLogout className="h-5 w-5" />
                        Sign Out
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <>
                <a
                  href="/login"
                  className={`text-sm font-medium transition-colors hover:text-[#0B7A75] ${
                    isScrolled ? "text-[#0F172A]" : "text-white"
                  }`}
                >
                  Login
                </a>
                <a 
                  href="/signup"
                  className="rounded-full bg-[#FF7A59] px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-[#e86847] hover:shadow-lg"
                >
                  Sign Up
                </a>
              </>
            )}
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden ${isScrolled ? "text-[#0F172A]" : "text-white"}`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <HiX className="h-6 w-6" />
            ) : (
              <HiOutlineMenuAlt3 className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="border-t border-gray-100 bg-white lg:hidden">
          <div className="space-y-1 px-4 py-4">
            {navConfig.mainNav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block rounded-lg px-3 py-2 text-base font-medium text-[#0F172A] hover:bg-gray-50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.title}
              </a>
            ))}
            <div className="mt-4 flex flex-col gap-2 border-t border-gray-100 pt-4">
              {user ? (
                <>
                  <div className="flex items-center gap-3 px-3 py-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0B7A75] text-sm font-semibold text-white">
                      {initials}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">{user.name}</p>
                      <p className="text-xs text-gray-500">{user.email}</p>
                    </div>
                  </div>
                  <a
                    href="/u/dashboard"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-base font-medium text-[#0F172A] hover:bg-gray-50"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <HiOutlineViewGrid className="h-5 w-5" />
                    Dashboard
                  </a>
                  <button
                    onClick={() => {
                      handleLogout();
                      setIsMobileMenuOpen(false);
                    }}
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-base font-medium text-red-600 hover:bg-red-50"
                  >
                    <HiOutlineLogout className="h-5 w-5" />
                    Sign Out
                  </button>
                </>
              ) : (
                <>
                  <a href="/login" className="rounded-lg px-3 py-2 text-left text-base font-medium text-[#0F172A] hover:bg-gray-50">
                    Login
                  </a>
                  <a href="/signup" className="rounded-full bg-[#FF7A59] px-5 py-2.5 text-center text-sm font-medium text-white">
                    Sign Up
                  </a>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
