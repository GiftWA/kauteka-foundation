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


  return (
    <>
    <DonateModal
  open={donateOpen}
  onClose={() => setDonateOpen(false)}
     />
      <header className="w-full bg-[#F6EACB] shadow-sm sticky top-0 z-40">
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Kauteka Foundation Logo"
              className="h-19 w-auto rounded-lg bg-white p-1"
            />
            <span className="hidden sm:block text-lg font-semibold text-emerald-700">
              Kauteka Foundation (KAFO)
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-8 text-gray-700 font-medium">
            <Link href="/" className={linkClass("/")}>Home</Link>
            <Link href="/about" className={linkClass("/about")}>About Us</Link>
            <Link href="/services" className={linkClass("/services")}>Services</Link>
            <Link href="/contact" className={linkClass("/contact")}>Contact</Link>
          </div>
          {/* Desktop Donate */}
          <div className="hidden md:block">
 <button
  onClick={() => setDonateOpen(true)}
  className="bg-black text-white px-5 py-2 rounded-lg hover:bg-teal-700 transition">
    Donate
</button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-2xl text-gray-800"
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </nav>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-[#F6EACB] border-t border-emerald-200 px-6 py-4 space-y-4">
            <Link href="/" onClick={() => setMenuOpen(false)} className="block">
              Home
            </Link>
            <Link href="/about" onClick={() => setMenuOpen(false)} className="block">
              About Us
            </Link>
            <Link href="/services" onClick={() => setMenuOpen(false)} className="block">
              Services
            </Link>
            <Link href="/contact" onClick={() => setMenuOpen(false)} className="block">
              Contact
            </Link>
<button
  onClick={() => setDonateOpen(true)}
  className="bg-black text-white px-5 py-2 rounded-lg hover:bg-teal-700 transition">
  Donate
</button>
          </div>
        )}
      </header>
    </>
  );
}
