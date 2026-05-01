"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Why Choose Us", href: "#why-choose-us" },
  { label: "FAQs", href: "#faq" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth", block: "center" });
    setMobileOpen(false);
  };

  return (
    <header
      className="w-full sticky top-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(248,246,241,0.96)" : "#F8F6F1",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid #E2DDD4" : "1px solid transparent",
        boxShadow: scrolled ? "0 2px 12px rgba(28,42,58,0.06)" : "none",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 py-2 flex items-center justify-between">
        {/* Logo */}
        <a href="/" aria-label="FailedInspectionFix.com Home" className="shrink-0">
          <Image
            src="/logo.png"
            alt="Failed Inspection Fix"
            width={220}
            height={73}
            className="h-14 sm:h-[4.5rem] w-auto"
            priority
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold transition-colors"
              style={{ color: "#1C2A3A" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#5B8A8A")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#1C2A3A")}
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={scrollToForm}
            className="text-sm font-bold text-white rounded-lg px-5 py-2.5 transition-all duration-200"
            style={{ background: "#E8621A" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#D4571A")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#E8621A")}
          >
            Get Clearance Quotes
          </button>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="p-1.5 rounded-lg lg:hidden"
          style={{ color: "#1C2A3A" }}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="lg:hidden" style={{ borderTop: "1px solid #E2DDD4", background: "rgba(248,246,241,0.98)" }}>
          <nav className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-semibold py-2"
                style={{ color: "#1C2A3A" }}
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={scrollToForm}
              className="text-sm font-bold text-white rounded-lg px-5 py-2.5 mt-2"
              style={{ background: "#E8621A" }}
            >
              Get Clearance Quotes
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
