"use client";

import { useState } from "react";
import Image from "next/image";
import { ROOMS, HOTEL_INFO } from "@/data/hotelData";
import { Room } from "@/types";
import {
  Users,
  Bed,
  Check,
  Sparkles,
  MessageCircle,
} from "lucide-react";

interface RoomsSectionProps {
  onSelectRoom?: (roomName: string) => void;
}

export default function RoomsSection({ onSelectRoom }: RoomsSectionProps) {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [selectedRoomModal, setSelectedRoomModal] = useState<Room | null>(null);

  const filteredRooms = ROOMS.filter((room) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "suites") return room.id.includes("suite");
    if (activeFilter === "executive") return room.id.includes("double") || room.id.includes("queen");
    if (activeFilter === "solo") return room.id.includes("single");
    return true;
  });

  const handleBookRoom = (roomName: string) => {
    if (onSelectRoom) {
      onSelectRoom(roomName);
    }
    const element = document.getElementById("book-direct");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="rooms" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-800 bg-amber-100/70 px-3 py-1 rounded-full">
            Suites &amp; Accommodations
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-amber-950 tracking-tight mt-3">
            Our Rooms &amp; Suites
          </h2>
          <p className="mt-4 text-zinc-600 text-sm sm:text-base leading-relaxed">
            See for yourself what makes our executive rooms second-to-none. Every space is serviced daily to a high
            standard of cleanliness and equipped with a private kitchenette, hot shower, and business support.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {[
              { id: "all", label: "All Rooms & Suites" },
              { id: "suites", label: "Executive Suites" },
              { id: "executive", label: "Double & Queen Rooms" },
              { id: "solo", label: "Solo & Studio" },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                  activeFilter === tab.id
                    ? "bg-amber-900 text-white shadow-xs"
                    : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Room Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRooms.map((room) => (
            <div
              key={room.id}
              className="group flex flex-col bg-white rounded-2xl border border-zinc-200 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Room Image */}
              <div className="relative h-64 w-full overflow-hidden bg-zinc-100">
                <Image
                  src={room.image}
                  alt={room.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {room.badge && (
                  <span className="absolute top-4 left-4 bg-amber-500 text-zinc-950 text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-xs">
                    {room.badge}
                  </span>
                )}

                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white text-xs">
                  <span className="flex items-center gap-1 font-medium bg-black/40 backdrop-blur-xs px-2.5 py-1 rounded-md">
                    <Bed className="w-3.5 h-3.5 text-amber-300" /> {room.bedType}
                  </span>
                  <span className="flex items-center gap-1 font-medium bg-black/40 backdrop-blur-xs px-2.5 py-1 rounded-md">
                    <Users className="w-3.5 h-3.5 text-amber-300" /> {room.capacity}
                  </span>
                </div>
              </div>

              {/* Room Content */}
              <div className="flex flex-col flex-1 p-6">
                <div className="mb-3">
                  <h3 className="text-xl font-serif font-bold text-zinc-900 group-hover:text-amber-900 transition-colors">
                    {room.name}
                  </h3>
                  <p className="text-xs font-medium text-amber-800 mt-0.5">{room.tagline}</p>
                </div>

                <p className="text-zinc-600 text-xs leading-relaxed mb-4 line-clamp-3">
                  {room.description}
                </p>

                {/* Key Features List */}
                <div className="space-y-1.5 mb-5 text-xs text-zinc-700">
                  {room.features.slice(0, 4).map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Included Highlights */}
                {room.essentialsIncluded.length > 0 && (
                  <div className="mt-auto pt-4 border-t border-zinc-100 bg-amber-50/50 -mx-6 -mb-6 p-6">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-amber-950 mb-2 flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-amber-700" /> Included Essentials:
                    </p>
                    <ul className="text-xs text-zinc-600 space-y-1 mb-4">
                      {room.essentialsIncluded.slice(0, 3).map((ess, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <span className="text-amber-800 font-bold">•</span>
                          <span>{ess}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex items-center justify-between gap-2 pt-2 border-t border-amber-200/50">
                      <button
                        type="button"
                        onClick={() => setSelectedRoomModal(room)}
                        className="text-xs font-semibold text-zinc-700 hover:text-amber-900 underline"
                      >
                        View Full Details
                      </button>

                      <button
                        type="button"
                        onClick={() => handleBookRoom(room.name)}
                        className="px-4 py-2 rounded-lg bg-amber-800 hover:bg-amber-900 text-white text-xs font-semibold transition-colors"
                      >
                        Book Direct
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Full Room Details */}
        {selectedRoomModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
            <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
              <button
                type="button"
                onClick={() => setSelectedRoomModal(null)}
                className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-700 text-lg font-bold p-2"
                aria-label="Close dialog"
              >
                ✕
              </button>

              <div className="relative h-60 w-full rounded-xl overflow-hidden mb-6">
                <Image
                  src={selectedRoomModal.image}
                  alt={selectedRoomModal.name}
                  fill
                  className="object-cover"
                />
              </div>

              <span className="text-xs font-bold uppercase text-amber-800 bg-amber-100 px-2.5 py-1 rounded-md">
                {selectedRoomModal.capacity} • {selectedRoomModal.bedType}
              </span>

              <h3 className="text-2xl font-serif font-black text-amber-950 mt-2">
                {selectedRoomModal.name}
              </h3>
              <p className="text-sm font-medium text-amber-800 mb-4">{selectedRoomModal.tagline}</p>

              <p className="text-sm text-zinc-600 mb-6 leading-relaxed">
                {selectedRoomModal.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900 mb-3">
                    Suite Amenities &amp; Features:
                  </h4>
                  <ul className="space-y-2 text-xs text-zinc-600">
                    {selectedRoomModal.features.map((feat, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-amber-900 mb-3">
                    Special Essentials Included:
                  </h4>
                  <ul className="space-y-2 text-xs text-zinc-600">
                    {selectedRoomModal.essentialsIncluded.map((ess, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Sparkles className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                        <span>{ess}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-amber-50 rounded-xl p-4 border border-amber-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-bold text-amber-950">Direct Booking Rates</p>
                  <p className="text-xs text-zinc-600">{selectedRoomModal.priceNote}</p>
                </div>
                <div className="flex gap-2">
                  <a
                    href={`https://wa.me/${HOTEL_INFO.whatsappNumber}?text=${encodeURIComponent(
                      `Hello! I would like to reserve the ${selectedRoomModal.name} at Megg's Place Kisumu.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-emerald-600 text-white text-xs font-semibold"
                  >
                    <MessageCircle className="w-3.5 h-3.5" /> WhatsApp Host
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      const name = selectedRoomModal.name;
                      setSelectedRoomModal(null);
                      handleBookRoom(name);
                    }}
                    className="px-4 py-2 rounded-lg bg-amber-900 text-white text-xs font-semibold"
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
