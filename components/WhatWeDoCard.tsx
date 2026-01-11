"use client";

import Image from "next/image";

interface Props {
  title: string;
  description: string;
  image: string;
}

export default function WhatWeDoCard({ title, description, image }: Props) {
  return (
    <div
      className="
        min-w-[320px]
        md:min-w-[420px]
        bg-white
        rounded-2xl
        shadow-lg
        overflow-hidden
        snap-center
        transition-all
        duration-300
        hover:-translate-y-2
        hover:shadow-2xl
        group
      "
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-emerald-700 mb-3">
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
