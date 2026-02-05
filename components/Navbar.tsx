"use client";

import DonateModal from "./DonateModal";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [donateOpen, setDonateOpen] = useState(false);
  const pathname = usePathname();

  const linkClass = (path: string) =>
    pathname === path
      ? "text-emerald-700 font-semibold"
      : "text-gray-700 hover:text-emerald-700";

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* Donate Modal */}
      <DonateModal open={donateOpen} onClose={() => setDonateOpen(false)} />

      <header className="w-full bg-[#F6EACB] shadow-sm sticky top-0 z-40">
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Kauteka Foundation Logo"
              className="h-12 w-auto rounded-lg bg-white p-1"
            />
            <span className="hidden sm:block text-lg font-semibold text-emerald-700">
              Kauteka Foundation (KAFO)
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-8 font-medium">
            <Link href="/" className={linkClass("/")}>Home</Link>
            <Link href="/about" className={linkClass("/about")}>About Us</Link>
            <Link href="/services" className={linkClass("/services")}>Services</Link>
            <Link href="/contact" className={linkClass("/contact")}>Contact</Link>
          </div>

          {/* Desktop Donate */}
          <div className="hidden md:block">
            <button
              onClick={() => setDonateOpen(true)}
              className="bg-black text-white px-5 py-2 rounded-lg hover:bg-teal-700 transition"
            >
              Donate
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden text-2xl text-gray-800"
            aria-label="Open menu"
          >
            ☰
          </button>
        </nav>
      </header>

      {/* ===== MOBILE SLIDE-IN MENU ===== */}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-black/40"
          onClick={closeMenu}
        />

        {/* Sliding Panel */}
        <div
          className={`absolute right-0 top-0 h-full w-4/5 max-w-sm bg-[#F6EACB] px-6 py-6 transform transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <span className="text-lg font-semibold text-emerald-700">
              Menu
            </span>
            <button
              onClick={closeMenu}
              className="text-3xl text-gray-700"
              aria-label="Close menu"
            >
              ✕
            </button>
          </div>

          {/* Links */}
          <div className="flex flex-col space-y-6 text-lg font-medium">
            <Link href="/" onClick={closeMenu}>Home</Link>
            <Link href="/about" onClick={closeMenu}>About Us</Link>
            <Link href="/services" onClick={closeMenu}>Services</Link>
            <Link href="/contact" onClick={closeMenu}>Contact</Link>

            <button
              onClick={() => {
                closeMenu();
                setDonateOpen(true);
              }}
              className="mt-6 bg-black text-white py-3 rounded-lg hover:bg-teal-700 transition"
            >
              Donate
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
