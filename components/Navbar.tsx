"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-[#F6EACB] shadow-sm">
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
        <div className="hidden md:flex gap-8 text-gray-700 font-medium">
          <Link href="/" className="hover:text-emerald-700">Home</Link>
          <Link href="/about" className="hover:text-emerald-700">About Us</Link>
          <Link href="/services" className="hover:text-emerald-700">Services</Link>
          <Link href="/contact" className="hover:text-emerald-700">Contact</Link>
        </div>

        {/* Donate Button (Desktop) */}
        <div className="hidden md:block">
          <button className="bg-black text-white px-5 py-2 rounded-lg hover:bg-teal-700 transition">
            Donate
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-800 text-2xl"
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#F6EACB] border-t border-emerald-200 px-6 py-4 space-y-4">
          <Link href="/" onClick={() => setOpen(false)} className="block text-gray-700">
            Home
          </Link>
          <Link href="/about" onClick={() => setOpen(false)} className="block text-gray-700">
            About Us
          </Link>
          <Link href="/services" onClick={() => setOpen(false)} className="block text-gray-700">
            Services
          </Link>
          <Link href="/contact" onClick={() => setOpen(false)} className="block text-gray-700">
            Contact
          </Link>

          <button className="w-full bg-black text-white py-2 rounded-lg hover:bg-teal-700 transition">
            Donate
          </button>
        </div>
      )}
    </header>
  );
}
