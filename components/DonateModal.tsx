"use client";

import { useEffect } from "react";

interface DonateModalProps {
  open: boolean;
  onClose: () => void;
}

export default function DonateModal({ open, onClose }: DonateModalProps) {
  // Close on ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (open) document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div
        className="bg-white rounded-2xl max-w-md w-full p-6 animate-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-2xl font-bold text-emerald-700 mb-4">
          Support Our Work
        </h2>

        <p className="text-gray-600 mb-6 leading-relaxed">
          Your donation helps us empower communities through health,
          environment, and social support initiatives.
        </p>

        <div className="space-y-3 text-sm text-gray-700">
          <p><strong>Bank:</strong> ABC Bank</p>
          <p><strong>Account Name:</strong> Kauteka Foundation</p>
          <p><strong>Account Number:</strong> 123456789</p>
        </div>

        <button
          onClick={onClose}
          className="mt-6 w-full bg-emerald-700 text-white py-2 rounded-lg hover:bg-emerald-800 transition"
        >
          Close
        </button>
      </div>
    </div>
  );
}
