"use client";

import { useEffect } from "react";

interface DeleteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
  isDeletingAll?: boolean;
}

export default function DeleteModal({
  isOpen,
  onClose,
  onConfirm,
  title,
  message,
  isDeletingAll = false,
}: DeleteModalProps) {
  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        {/* Modal */}
        <div
          className="bg-white rounded-2xl shadow-2xl max-w-md w-full border border-green-100 overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className={`px-6 py-4 ${isDeletingAll ? 'bg-red-600' : 'bg-green-700'}`}>
            <h3 className="text-xl font-bold text-white">
              {isDeletingAll ? '⚠️ Delete All Messages' : 'Delete Message'}
            </h3>
          </div>

          {/* Body */}
          <div className="p-6">
            <p className="text-gray-700 text-lg mb-2">{title}</p>
            <p className="text-gray-500">{message}</p>
            
            {isDeletingAll && (
              <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-xl">
                <p className="text-red-600 text-sm font-medium">
                  ⚠️ This action cannot be undone!
                </p>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex gap-3 justify-end">
            <button
              onClick={onClose}
              className="px-5 py-2.5 text-gray-600 hover:bg-gray-200 rounded-xl transition-colors font-medium"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                onConfirm();
                onClose();
              }}
              className={`px-5 py-2.5 text-white rounded-xl transition-colors font-medium ${
                isDeletingAll
                  ? 'bg-red-600 hover:bg-red-700'
                  : 'bg-green-700 hover:bg-green-800'
              }`}
            >
              {isDeletingAll ? 'Delete All' : 'Delete'}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}