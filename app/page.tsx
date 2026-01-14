import Link from "next/link";
import WhatWeDo from "@/components/WhatWeDo";
import FlipCard from "../components/FlipCard";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-[#F6EACB] min-h-screen">
      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 pt-20 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Empowering Communities Through Care, Environment & Water
            </h1>

            <p className="mt-6 text-lg text-gray-700 max-w-xl">
              Kauteka Foundation (KAFO) is dedicated to improving lives by promoting
              palliative care, environmental protection, and access to clean
              water and sanitation for underserved communities.
            </p>

          <div className="mt-8 flex gap-4">
  <Link href="/contact">
    <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition">
      Support Our Work
    </button>
  </Link>

  <Link href="/about">
    <button className="border border-black px-6 py-3 rounded-lg hover:bg-black hover:text-white transition">
      Learn More
    </button>
  </Link>
</div>

          </div>
<div className="relative flex gap-4">
  <div className="relative w-full h-[380px] rounded-3xl overflow-hidden shadow-lg">
  <Image
    src="/hero.jpg"
    alt="Community support and wellbeing"
    fill
    className="object-cover"
    priority
    />
  </div>
  </div>
    </div>
</section>
      {/* MISSION SECTION */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-10">
          Our Mission
        </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
  <FlipCard
    title="Palliative Care"
    frontText="Compassionate support for patients and families."
    backText="We provide holistic palliative care that prioritizes dignity, comfort, and emotional wellbeing."
  />

  <FlipCard
    title="Environmental Protection"
    frontText="Safeguarding nature for future generations."
    backText="Our initiatives empower communities to adopt sustainable practices and protect ecosystems."
  />

  <FlipCard
    title="Clean Water & Sanitation"
    frontText="Access to safe water for every community."
    backText="We implement sustainable water solutions and hygien."
  />
</div>
</section>
  <WhatWeDo />
    </main>
  );
}
