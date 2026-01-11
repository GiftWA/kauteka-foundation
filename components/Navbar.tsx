"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full bg-[#F6EACB] shadow-sm">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
 <div className="flex items-center gap-3">
  <img
    src="/logo.png"
    alt="Kauteka Foundation Logo"
    className="h-13 md:h-13 w-auto rounded-lg bg-white p-1"
  />
 <span className="hidden sm:block text-lg font-semibold text-emerald-700">
  Kauteka Foundation (KAFO)
</span>
   </div>
        <div className="hidden md:flex gap-8 text-gray-700 font-medium">
          <Link href="/" className="hover:text-emerald-700 transition">
            Home
          </Link>
          <Link href="/about" className="hover:text-emerald-700 transition">
            About Us
          </Link>
          <Link href="/services" className="hover:text-emerald-700 transition">
            Services
          </Link>
          <Link href="/contact" className="hover:text-emerald-700 transition">
            Contact
          </Link>
        </div>
        <Link href="/contact">
  <button className="bg-black text-white px-5 py-2 rounded-lg hover:bg-teal-700 transition duration-300">
    Donate
  </button>
</Link>
      </nav>
    </header>
  );
}
