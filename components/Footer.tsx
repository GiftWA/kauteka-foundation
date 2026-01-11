import Image from "next/image";
import Link from "next/link";
import { Facebook, Youtube, Mail, Phone, MapPin, X, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-emerald-900 text-emerald-50 mt-24">
      <div className="max-w-7xl mx-auto px-6 py-16 grid gap-12 md:grid-cols-3">

        {/* Logo & Intro */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Kauteka Foundation Logo"
              width={48}
              height={48}
              className="rounded-lg bg-white p-1"
            />
            <span className="text-lg font-semibold text-emerald-100">
              Kauteka Foundation (KAFO)
            </span>
          </div>

          <p className="text-sm text-emerald-100 leading-relaxed">
            Empowering communities through compassionate care,
            environmental protection, and access to clean water and sanitation.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide mb-4">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm text-emerald-100">
            <li><Link href="/" className="hover:text-teal-400">Home</Link></li>
            <li><Link href="/about" className="hover:text-teal-400">About Us</Link></li>
            <li><Link href="/services" className="hover:text-teal-400">Services</Link></li>
            <li><Link href="/contact" className="hover:text-teal-400">Contact</Link></li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide mb-4">
            Connect With Us
          </h4>

          <ul className="space-y-3 text-sm text-emerald-100 mb-6">
            <li className="flex items-center gap-3">
              <MapPin size={16} />
              <span>Enukweni & Mzuzu, Malawi</span>
            </li>

            <li className="flex items-center gap-3">
              <Phone size={16} />
              <a href="tel:+265884115462" className="hover:text-white transition">
                +265 884 11 54 62
              </a>
            </li>

            <li className="flex items-center gap-3">
              <Mail size={16} />
              <a
                href="mailto:kauteka.kafo@gmail.com"
                className="hover:text-white transition"
              >
                kauteka.kafo@gmail.com
              </a>
            </li>
          </ul>

          {/* Social Icons */}
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/61550532083655"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-emerald-800 hover:bg-emerald-700 transition"
            >
              <Facebook size={18} />
            </a>

            <a
              href="https://www.youtube.com/@KautekaFoundation"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-emerald-800 hover:bg-emerald-700 transition"
            >
              <Youtube size={18} />
            </a>

            {/* Placeholder icons (to activate later) */}
            <div className="p-2 rounded-full bg-emerald-800 opacity-50 cursor-not-allowed">
              <X size={18} />
            </div>

            <div className="p-2 rounded-full bg-emerald-800 opacity-50 cursor-not-allowed">
              <Instagram size={18} />
            </div>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-emerald-800 py-4 text-center text-xs text-emerald-300">
        © {new Date().getFullYear()} Kauteka Foundation (KAFO). All rights reserved.
      </div>
    </footer>
  );
}
