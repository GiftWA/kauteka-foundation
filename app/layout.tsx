import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kauteka Foundation (KAFO)",
  description:
    "Empowering communities through palliative care, environmental protection, and access to clean water and sanitation.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-[#F6EACB] text-gray-900 antialiased text-base leading-relaxed">
        <Navbar />
        <main className="text-base">{children}</main>
        <Footer />
      </body>
    </html>
  );
}