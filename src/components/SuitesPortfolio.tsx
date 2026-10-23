"use client";

import { useState } from "react";
import Image from "next/image";
import { ROOMS, HOTEL_INFO } from "@/data/hotelData";
import { Room } from "@/types";
import { ArrowUpRight, MessageCircle } from "lucide-react";

interface SuitesPortfolioProps {
  onSelectRoom?: (roomName: string) => void;
}

export default function SuitesPortfolio({ onSelectRoom }: SuitesPortfolioProps) {
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);

  const handleBookNow = (roomName: string) => {
    if (onSelectRoom) {
      onSelectRoom(roomName);
    }
    const element = document.getElementById("reserve");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="suites" className="py-24 bg-[#FDFBF7] text-[#1C1815] border-b border-[#E8E0D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between border-b border-[#E8E0D5] pb-6 mb-16 gap-4">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] font-medium text-[#8C765C]">
              Accommodations Portfolio
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-[#1C1815] mt-2">
              The Suites &amp; Rooms
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-[#574B3F] font-light max-w-md">
            Meticulously serviced daily with private kitchenettes, en-suite hot water, and quiet comfort for business
            and leisure in Kisumu.
          </p>
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ROOMS.map((room) => (
            <div
              key={room.id}
              className="group flex flex-col bg-[#FDFBF7] border border-[#E8E0D5] overflow-hidden hover:border-[#A37E4C] transition-colors duration-300"
            >
              {/* Image Container with Editorial Zoom */}
              <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-[#EFE7DC]">
                <Image
                  src={room.image}
                  alt={room.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />

                {room.badge && (
                  <span className="absolute top-4 left-4 bg-[#1C1815] text-[#FDFBF7] text-[10px] uppercase tracking-[0.2em] px-3 py-1 font-medium">
                    {room.badge}
                  </span>
                )}

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[#FDFBF7] text-xs">
                  <span className="bg-black/60 backdrop-blur-xs px-2.5 py-1 text-[11px] uppercase tracking-wider font-medium">
                    {room.bedType}
                  </span>
                  <span className="bg-black/60 backdrop-blur-xs px-2.5 py-1 text-[11px] uppercase tracking-wider font-medium">
                    {room.capacity}
                  </span>
                </div>
              </div>

              {/* Details */}
              <div className="p-7 flex flex-col flex-1 justify-between bg-white">
                <div>
                  <h3 className="font-serif text-2xl font-normal text-[#1C1815] group-hover:text-[#A37E4C] transition-colors">
                    {room.name}
                  </h3>
                  <p className="text-[11px] uppercase tracking-[0.18em] font-semibold text-[#8C765C] mt-1 mb-3">
                    {room.tagline}
                  </p>
                  <p className="text-xs text-[#574B3F] font-light leading-relaxed mb-6 line-clamp-3">
                    {room.description}
                  </p>

                  {/* Feature highlights */}
                  <div className="space-y-1.5 mb-6 text-xs text-[#4A4036]">
                    {room.features.slice(0, 3).map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <span className="text-[#A37E4C]">✓</span>
                        <span className="font-light">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer CTAs */}
                <div className="pt-4 border-t border-[#E8E0D5] flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setSelectedRoom(room)}
                    className="text-xs uppercase tracking-[0.15em] font-semibold text-[#1C1815] hover:text-[#A37E4C] transition-colors inline-flex items-center gap-1"
                  >
                    <span>Full Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    type="button"
                    onClick={() => handleBookNow(room.name)}
                    className="px-4 py-2 bg-[#1C1815] text-[#FDFBF7] text-[11px] uppercase tracking-[0.2em] font-medium hover:bg-[#A37E4C] transition-colors"
                  >
                    Reserve Direct
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Full Room Details */}
        {selectedRoom && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs">
            <div className="relative w-full max-w-2xl bg-[#FDFBF7] border border-[#E8E0D5] shadow-2xl p-6 sm:p-10 max-h-[90vh] overflow-y-auto">
              <button
                type="button"
                onClick={() => setSelectedRoom(null)}
                className="absolute top-6 right-6 text-zinc-500 hover:text-black p-1 text-sm font-semibold uppercase tracking-wider"
                aria-label="Close dialog"
              >
                ✕ Close
              </button>

              <div className="relative h-64 sm:h-72 w-full overflow-hidden mb-6 bg-[#EFE7DC]">
                <Image
                  src={selectedRoom.image}
                  alt={selectedRoom.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex items-center gap-3 mb-2">
                <span className="text-[10px] uppercase tracking-[0.2em] px-2.5 py-1 bg-[#F5EFE6] text-[#7F5E32] font-semibold">
                  {selectedRoom.capacity}
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] px-2.5 py-1 bg-[#F5EFE6] text-[#7F5E32] font-semibold">
                  {selectedRoom.bedType}
                </span>
              </div>

              <h3 className="font-serif text-3xl font-normal text-[#1C1815] mt-2">
                {selectedRoom.name}
              </h3>
              <p className="text-xs uppercase tracking-[0.18em] text-[#8C765C] mb-4">
                {selectedRoom.tagline}
              </p>

              <p className="text-xs sm:text-sm text-[#574B3F] font-light leading-relaxed mb-6">
                {selectedRoom.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8 text-xs">
                <div>
                  <h4 className="font-serif font-bold text-sm uppercase tracking-wider text-[#1C1815] mb-3">
                    Suite Amenities:
                  </h4>
                  <ul className="space-y-2 text-[#574B3F] font-light">
                    {selectedRoom.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#A37E4C] font-bold">✓</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-serif font-bold text-sm uppercase tracking-wider text-[#7F5E32] mb-3">
                    Included Essentials:
                  </h4>
                  <ul className="space-y-2 text-[#574B3F] font-light">
                    {selectedRoom.essentialsIncluded.map((e, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#A37E4C]">✦</span>
                        <span>{e}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-[#F5EFE6] p-5 border border-[#E8E0D5] flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#1C1815]">
                    Direct Booking Rate:
                  </p>
                  <p className="text-xs text-[#574B3F]">{selectedRoom.priceNote}</p>
                </div>

                <div className="flex gap-2">
                  <a
                    href={`https://wa.me/${HOTEL_INFO.whatsappNumber}?text=${encodeURIComponent(
                      `Hello Megg's Place! I'd like to reserve the ${selectedRoom.name}.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-semibold uppercase tracking-wider transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" /> WhatsApp
                  </a>

                  <button
                    type="button"
                    onClick={() => {
                      const name = selectedRoom.name;
                      setSelectedRoom(null);
                      handleBookNow(name);
                    }}
                    className="px-5 py-2.5 bg-[#1C1815] hover:bg-[#A37E4C] text-[#FDFBF7] text-xs font-medium uppercase tracking-[0.2em] transition-colors"
                  >
                    Reserve Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
