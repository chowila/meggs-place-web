"use client";

import { useState } from "react";
import Link from "next/link";
import { HOTEL_INFO } from "@/data/hotelData";
import { Phone, MessageCircle, Menu, X, ArrowUpRight } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const whatsappMessage = encodeURIComponent(
    "Hello Megg's Place Kisumu! I would like to inquire about suite availability and direct booking."
  );

  return (
    <header className="sticky top-0 z-50 bg-[#FDFBF7]/90 backdrop-blur-md border-b border-[#E8E0D5]">
      {/* Top Editorial Ticker Bar */}
      <div className="bg-[#1C1815] text-[#E5DCD0] text-[11px] uppercase tracking-[0.2em] py-2 px-4 sm:px-8 border-b border-[#2C241E]">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="font-light text-[#D1B894]">
              Direct Host Booking • Zero 3rd-Party Middleman Fees
            </span>
            <span className="hidden md:inline text-zinc-400">
              Kisumu, Kenya (Kisumu - Kakamega Highway)
            </span>
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <a
              href={`tel:${HOTEL_INFO.rawPhone}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3 h-3 text-[#D1B894]" />
              <span>{HOTEL_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Luxury Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo / Brand Name in Luxury Serif */}
          <Link href="/" className="flex flex-col group">
            <span className="font-serif text-2xl sm:text-3xl font-normal tracking-[0.15em] text-[#1C1815] uppercase transition-colors group-hover:text-[#A37E4C]">
              Megg&apos;s Place
            </span>
            <span className="text-[9px] uppercase tracking-[0.3em] text-[#8C765C] font-sans font-medium -mt-0.5">
              Boutique Apartment Hotel • Kisumu
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-xs uppercase tracking-[0.18em] font-medium text-[#4A4036]">
            <Link href="#about" className="hover:text-[#A37E4C] transition-colors">
              About
            </Link>
            <Link href="#suites" className="hover:text-[#A37E4C] transition-colors">
              Suites
            </Link>
            <Link href="#pillars" className="hover:text-[#A37E4C] transition-colors">
              Pillars
            </Link>
            <Link href="#lounge" className="hover:text-[#A37E4C] transition-colors">
              Lounge &amp; Dining
            </Link>
            <Link href="#events" className="hover:text-[#A37E4C] transition-colors">
              Gala Events
            </Link>
            <Link href="#location" className="hover:text-[#A37E4C] transition-colors">
              Location
            </Link>
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href={`https://wa.me/${HOTEL_INFO.whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-[#1C1815] hover:text-[#A37E4C] transition-colors py-2"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>WhatsApp</span>
            </a>

            <Link
              href="#reserve"
              className="inline-flex items-center gap-1.5 px-6 py-3 rounded-none bg-[#1C1815] text-[#FDFBF7] text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#A37E4C] transition-all duration-300 shadow-sm"
            >
              <span>Book Direct</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={`https://wa.me/${HOTEL_INFO.whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-[#1C1815] hover:text-[#A37E4C]"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-5 h-5 text-[#25D366]" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2 text-[#1C1815] hover:text-[#A37E4C]"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Full-width Luxury Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#E8E0D5] bg-[#FDFBF7] px-6 py-8 shadow-2xl">
          <div className="flex flex-col space-y-5 text-sm uppercase tracking-[0.2em] font-medium text-[#1C1815]">
            <Link
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#A37E4C] py-1 border-b border-[#EFE7DC]"
            >
              About The Property
            </Link>
            <Link
              href="#suites"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#A37E4C] py-1 border-b border-[#EFE7DC]"
            >
              Suites &amp; Accommodations
            </Link>
            <Link
              href="#pillars"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#A37E4C] py-1 border-b border-[#EFE7DC]"
            >
              Signature Pillars (01 - 04)
            </Link>
            <Link
              href="#lounge"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#A37E4C] py-1 border-b border-[#EFE7DC]"
            >
              Megg&apos;s Lounge &amp; The Ivy
            </Link>
            <Link
              href="#events"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#A37E4C] py-1 border-b border-[#EFE7DC]"
            >
              Kisumu 50+ Gala Events
            </Link>
            <Link
              href="#location"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#A37E4C] py-1 border-b border-[#EFE7DC]"
            >
              Location &amp; Neighborhood
            </Link>

            <div className="pt-4 flex flex-col gap-3">
              <a
                href={`tel:${HOTEL_INFO.rawPhone}`}
                className="w-full text-center py-3 border border-[#1C1815] text-[#1C1815] text-xs uppercase tracking-[0.2em]"
              >
                Call {HOTEL_INFO.localPhone}
              </a>
              <Link
                href="#reserve"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3 bg-[#1C1815] text-[#FDFBF7] text-xs uppercase tracking-[0.2em]"
              >
                Reserve Directly
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
