"use client";

import styles from "../styles/FlipCard.module.css";

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
    <div className={styles.flipCard}>
      <div className={styles.flipCardInner}>
        {/* FRONT */}
        <div className={`${styles.flipFace} ${styles.flipFront}`}>
          <h3 className="text-xl font-bold text-emerald-700">
            {title}
          </h3>
          <p className="text-gray-600 leading-relaxed">
            {frontText}
          </p>
          Tap to learn more...
        </div>

        {/* BACK */}
        <div className={`${styles.flipFace} ${styles.flipBack}`}>
          <h3 className="text-xl font-bold">
            {title}
          </h3>
          <p className="text-emerald-100 leading-relaxed text-sm md:text-base">
            {backText}
          </p>
          Tap to go back
        </div>
        
      </div>
    </div>
  );
}
