"use client";

import { useState } from "react";
import { HOTEL_INFO, FAQS } from "@/data/hotelData";
import { Navigation, ChevronDown } from "lucide-react";

export default function LocationSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <section id="location" className="py-24 bg-[#F5EFE6] text-[#1C1815] border-b border-[#E8E0D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left Column: Location & Key Distances */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] font-medium text-[#8C765C]">
                Neighborhood &amp; Surroundings
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-[#1C1815] mt-2">
                Accessible &amp; Tranquil in Kisumu
              </h2>
            </div>

            <p className="text-xs sm:text-sm text-[#574B3F] font-light leading-relaxed">
              Tucked away in a peaceful, secure residential pocket along the Kisumu - Kakamega Highway.
              Close to Kisumu&apos;s government administration offices, banking center, and the scenic shores of Lake Victoria.
            </p>

            {/* Address & Hours cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-[#FDFBF7] p-6 border border-[#E8E0D5]">
                <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#8C765C] mb-1">
                  Location / Area
                </p>
                <p className="text-xs text-[#1C1815] font-medium">{HOTEL_INFO.location}</p>
              </div>

              <div className="bg-[#FDFBF7] p-6 border border-[#E8E0D5]">
                <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#8C765C] mb-1">
                  Front Desk Hours
                </p>
                <p className="text-xs text-[#1C1815] font-medium">{HOTEL_INFO.frontDeskHours}</p>
              </div>
            </div>

            {/* Key Travel Times */}
            <div className="space-y-3 pt-2">
              <p className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#8C765C]">
                Estimated Travel Times:
              </p>

              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="bg-[#FDFBF7] p-4 border border-[#E8E0D5]">
                  <p className="font-serif text-2xl font-light text-[#1C1815]">~23m</p>
                  <p className="text-[10px] uppercase tracking-wider text-[#8C765C] mt-1">Airport</p>
                </div>

                <div className="bg-[#FDFBF7] p-4 border border-[#E8E0D5]">
                  <p className="font-serif text-2xl font-light text-[#1C1815]">~15m</p>
                  <p className="text-[10px] uppercase tracking-wider text-[#8C765C] mt-1">Kisumu CBD</p>
                </div>

                <div className="bg-[#FDFBF7] p-4 border border-[#E8E0D5]">
                  <p className="font-serif text-2xl font-light text-[#1C1815]">~31m</p>
                  <p className="text-[10px] uppercase tracking-wider text-[#8C765C] mt-1">Lake Victoria</p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={HOTEL_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#1C1815] text-[#FDFBF7] text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#A37E4C] transition-colors"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Open in Google Maps</span>
              </a>
            </div>
          </div>

          {/* Right Column: Direct Booking FAQs */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] font-medium text-[#8C765C]">
                Concierge Knowledge
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-[#1C1815] mt-2">
                Frequently Asked
              </h2>
            </div>

            <div className="space-y-3 pt-2">
              {FAQS.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div
                    key={index}
                    className="bg-[#FDFBF7] border border-[#E8E0D5] overflow-hidden transition-colors"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className="w-full p-5 text-left flex items-center justify-between gap-4 font-serif text-base sm:text-lg text-[#1C1815] hover:text-[#A37E4C]"
                    >
                      <span>{faq.question}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-[#8C765C] shrink-0 transition-transform ${
                          isOpen ? "rotate-180 text-[#A37E4C]" : ""
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-5 text-xs text-[#574B3F] font-light leading-relaxed border-t border-[#E8E0D5] pt-3">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
