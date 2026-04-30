"use client";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const NAV_LINKS = ["About", "Services", "Projects", "News", "Contact"];

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock body scroll while menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const overlay = isOpen ? (
    <div className="fixed inset-0 bg-black z-[9999] flex flex-col px-6 py-6">
      <div className="flex items-center justify-between mb-16">
        <span className="font-semibold text-[16px] tracking-[-0.04em] capitalize text-white">
          H.Studio
        </span>
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          className="flex items-center justify-center size-6 cursor-pointer"
          aria-label="Close menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M6 6l12 12M18 6L6 18"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      <nav className="flex flex-col gap-8">
        {NAV_LINKS.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            onClick={() => setIsOpen(false)}
            className="font-medium text-[40px] tracking-[-0.04em] capitalize text-white hover:opacity-60 transition-opacity"
          >
            {link}
          </a>
        ))}
      </nav>

      <div className="mt-auto">
        <button
          type="button"
          className="border border-white text-white text-[14px] font-medium tracking-[-0.04em] px-4 py-3 rounded-full cursor-pointer"
        >
          Let&apos;s talk
        </button>
      </div>
    </div>
  ) : null;

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="md:hidden flex items-center justify-center size-6 cursor-pointer"
        aria-label="Open menu"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M3 6h18M3 12h18M3 18h18"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </button>

      {mounted && createPortal(overlay, document.body)}
    </>
  );
}
