"use client";

interface FlipCardProps {
  title: string;
  frontText: string;
  backText: string;
}

export default function FlipCard({
  title,
  frontText,
  backText,
}: FlipCardProps) {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        {/* FRONT */}
        <div className="flip-face flip-front">
          <h3 className="text-xl font-bold text-emerald-700 mb-4">
            {title}
          </h3>
          <p className="text-gray-600 leading-relaxed">{frontText}</p>
          <span className="mt-6 text-sm text-gray-400">
          </span>
        </div>

        {/* BACK */}
        <div className="flip-face flip-back">
          <h3 className="text-xl font-bold mb-4">
            {title}
          </h3>
          <p className="text-emerald-100 leading-relaxed text-sm md:text-base">{backText}</p>
        </div>
      </div>
    </div>
  );
}
