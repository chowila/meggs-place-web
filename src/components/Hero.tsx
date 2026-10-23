"use client";

import Image from "next/image";
import Link from "next/link";
import { HOTEL_INFO } from "@/data/hotelData";
import { ArrowDownRight, MessageCircle, ShieldCheck } from "lucide-react";

export default function Hero() {
  const whatsappMessage = encodeURIComponent(
    "Hi Megg's Place Kisumu! I'm interested in reserving a suite directly. Could you please share rates and availability?"
  );

  return (
    <section className="relative bg-[#FDFBF7] text-[#1C1815] pt-12 pb-24 border-b border-[#E8E0D5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Top Tagline / Category */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-[#E8E0D5] pb-6 mb-12 gap-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#A37E4C]" />
            <span className="text-xs uppercase tracking-[0.25em] font-medium text-[#8C765C]">
              Apartment Hotel &amp; Executive Accommodation • Kisumu
            </span>
          </div>
          <div className="text-xs uppercase tracking-[0.2em] font-semibold text-[#1C1815]">
            Luxury, Thrift, Creativity on a Budget
          </div>
        </div>

        {/* Hero Title & Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-16">
          <div className="lg:col-span-8">
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight text-[#1C1815] leading-[1.02]">
              Where Luxury <br />
              <span className="italic font-light text-[#A37E4C]">Meets Artistry.</span>
            </h1>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-end space-y-6">
            <p className="text-sm sm:text-base text-[#574B3F] font-light leading-relaxed">
              Step into an exclusive apartment hotel crafted for executive business travellers and vacationers in Kisumu.
              Fully equipped private kitchenettes, soothing lounges, and immaculate daily service at honest, direct rates.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="#suites"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#1C1815] text-[#FDFBF7] text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#A37E4C] transition-colors"
              >
                <span>Explore Suites</span>
                <ArrowDownRight className="w-3.5 h-3.5" />
              </Link>

              <a
                href={`https://wa.me/${HOTEL_INFO.whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 border border-[#1C1815] text-[#1C1815] text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#F5EFE6] transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                <span>WhatsApp Host</span>
              </a>
            </div>
          </div>
        </div>

        {/* Large Editorial Imagery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          {/* Main Large Image */}
          <div className="md:col-span-8 relative h-[380px] sm:h-[500px] lg:h-[580px] overflow-hidden bg-[#EFE7DC]">
            <Image
              src="https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1600&q=85"
              alt="Megg's Place Kisumu Master Suite"
              fill
              priority
              className="object-cover transition-transform duration-700 hover:scale-102"
              sizes="(max-width: 768px) 100vw, 66vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-[#FDFBF7]">
              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-[#D1B894] font-medium">
                  The Penthouse Residence
                </p>
                <p className="font-serif text-2xl sm:text-3xl font-light">
                  African Sunrise &amp; Sunset Views
                </p>
              </div>
              <span className="hidden sm:inline-block text-xs uppercase tracking-[0.2em] border border-white/30 backdrop-blur-xs px-3.5 py-1.5">
                Executive Lounge • 2 - 3 Guests
              </span>
            </div>
          </div>

          {/* Right Editorial Card */}
          <div className="md:col-span-4 bg-[#F5EFE6] border border-[#E8E0D5] p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#EFE7DC] text-[#7F5E32] text-[10px] uppercase tracking-[0.2em] font-semibold mb-6">
                <ShieldCheck className="w-3.5 h-3.5" />
                Zero OTA Middleman Fees
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl text-[#1C1815] leading-snug mb-4">
                Direct Host Reservations Only
              </h2>

              <p className="text-xs text-[#574B3F] leading-relaxed mb-6">
                We intentionally choose not to list through third-party booking aggregators.
                By reserving directly with our Kisumu desk, you save up to 20% on booking commissions,
                receive transparent direct rates, and enjoy direct personal service.
              </p>

              <div className="space-y-3 border-t border-[#E8E0D5] pt-6 text-xs text-[#4A4036]">
                <div className="flex items-center justify-between">
                  <span className="text-zinc-500">Payments:</span>
                  <span className="font-semibold text-[#1C1815]">M-PESA &amp; Cash Only</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-zinc-500">Breakfast:</span>
                  <span className="font-semibold text-[#1C1815]">At an Extra Fee</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-zinc-500">Kitchenettes:</span>
                  <span className="font-semibold text-[#1C1815]">Included in Every Room</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-zinc-500">Front Desk:</span>
                  <span className="font-semibold text-[#1C1815]">{HOTEL_INFO.frontDeskHours}</span>
                </div>
              </div>
            </div>

            <div className="pt-8 mt-6 border-t border-[#E8E0D5]">
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#8C765C] mb-1">
                Direct Inquiries &amp; Call
              </p>
              <a
                href={`tel:${HOTEL_INFO.rawPhone}`}
                className="font-serif text-xl sm:text-2xl text-[#1C1815] hover:text-[#A37E4C] transition-colors"
              >
                {HOTEL_INFO.phone}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee Ticker (Signature Elena K. Kimura Style) */}
      <div className="mt-20 border-y border-[#E8E0D5] bg-[#EFE7DC]/60 py-3.5 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap text-xs uppercase tracking-[0.3em] font-medium text-[#574B3F] flex items-center gap-8">
          <span>Executive Apartment Hotel</span>
          <span>•</span>
          <span>Fresh Breakfast (At Extra Fee)</span>
          <span>•</span>
          <span>Private In-Room Kitchenettes</span>
          <span>•</span>
          <span>Megg&apos;s Lounge &amp; The Ivy</span>
          <span>•</span>
          <span>Kisumu 50+ Gala Events</span>
          <span>•</span>
          <span>High-Speed Business Wi-Fi</span>
          <span>•</span>
          <span>Daily Housekeeping &amp; Linens</span>
          <span>•</span>
          <span>100% Direct Booking Guarantee</span>
          <span>•</span>
          <span>Executive Apartment Hotel</span>
          <span>•</span>
          <span>Fresh Breakfast (At Extra Fee)</span>
          <span>•</span>
          <span>Private In-Room Kitchenettes</span>
          <span>•</span>
          <span>Megg&apos;s Lounge &amp; The Ivy</span>
          <span>•</span>
          <span>Kisumu 50+ Gala Events</span>
          <span>•</span>
          <span>High-Speed Business Wi-Fi</span>
          <span>•</span>
        </div>
      </div>
    </section>
  );
}
