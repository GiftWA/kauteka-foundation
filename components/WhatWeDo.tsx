"use client";

import WhatWeDoCard from "./WhatWeDoCard";

const items = [
  {
    title: "Palliative Care",
    description:
      "We identify, support, and link palliative care patients to central hospitals and specialized care organizations.",
    image: "/whatwedo/palliative.jpg",
  },
  {
    title: "Environmental Management",
    description:
      "We provide environmental management services, impact assessments, and sustainable environmental tools.",
    image: "/whatwedo/environment.jpg",
  },
  {
    title: "WASH",
    description:
      "We promote access to clean water, sanitation, and hygienic practices.",
    image: "/whatwedo/wash.jpg",
  },
  {
    title: "Afforestation",
    description:
      "Community-driven tree planting to restore ecosystems.",
    image: "/whatwedo/afforestation.jpg",
  },
  {
    title: "Counselling",
    description:
      "Emotional, social, and psychological support for vulnerable groups.",
    image: "/whatwedo/counselling.jpg",
  },
  {
    title: "Advocacy",
    description:
      "Advocating for policies that promote health and environmental justice.",
    image: "/whatwedo/advocacy.jpg",
  },
];
import { useRef, useEffect } from "react";

export default function WhatWeDo() {
  const scrollRef = useRef<HTMLDivElement>(null);
useEffect(() => {
  const container = scrollRef.current;
  if (!container) return;

  let isPaused = false;

  const pause = () => (isPaused = true);
  const resume = () => (isPaused = false);

  container.addEventListener("mouseenter", pause);
  container.addEventListener("mouseleave", resume);
  container.addEventListener("touchstart", pause);
  container.addEventListener("touchend", resume);

  const interval = setInterval(() => {
    if (isPaused) return;

    container.scrollBy({
      left: 420,
      behavior: "smooth",
    });

    if (
      container.scrollLeft + container.clientWidth >=
      container.scrollWidth
    ) {
      container.scrollTo({ left: 0, behavior: "smooth" });
    }
  }, 3500);

  return () => {
    clearInterval(interval);
    container.removeEventListener("mouseenter", pause);
    container.removeEventListener("mouseleave", resume);
    container.removeEventListener("touchstart", pause);
    container.removeEventListener("touchend", resume);
  };
}, []);


  return (
    <section className="bg-[#F6EACB] py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-900 mb-10">
          What We Do
        </h2>

        <div
  ref={scrollRef}
  className="flex gap-8 overflow-x-auto snap-x snap-mandatory pb-6 scrollbar-hide cursor-grab"
>
          {items.map((item, i) => (
            <WhatWeDoCard key={i} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}