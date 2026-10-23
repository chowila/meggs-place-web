import { EVENTS_INFO, HOTEL_INFO } from "@/data/hotelData";
import { MessageCircle } from "lucide-react";

export default function EventsSection() {
  return (
    <section id="events" className="py-24 bg-[#FDFBF7] text-[#1C1815] border-b border-[#E8E0D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between border-b border-[#E8E0D5] pb-6 mb-16 gap-4">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] font-medium text-[#8C765C]">
              Boutique Event Curation
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-[#1C1815] mt-2">
              Kisumu 50+ Gala Events
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-[#574B3F] font-light max-w-md">
            Memorable gatherings, anniversary milestones, bridal showers, and outside catering on a budget.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {EVENTS_INFO.eventTypes.map((event, index) => (
            <div
              key={index}
              className="bg-[#F5EFE6] p-8 border border-[#E8E0D5] flex flex-col justify-between hover:border-[#A37E4C] transition-colors group"
            >
              <div>
                <span className="text-xs font-mono font-medium text-[#A37E4C] mb-4 block">
                  0{index + 1}
                </span>

                <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#1C1815] mb-3">
                  {event.title}
                </h3>

                <p className="text-xs text-[#574B3F] font-light leading-relaxed">
                  {event.desc}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#E8E0D5] flex items-center justify-between text-[11px] uppercase tracking-[0.18em] text-[#8C765C]">
                <span>Custom Curation</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          ))}
        </div>

        {/* Catering Callout Strip */}
        <div className="mt-12 bg-[#1C1815] text-[#FDFBF7] p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center md:text-left">
            <h4 className="font-serif text-2xl sm:text-3xl font-light text-[#FDFBF7]">
              Need Outside Catering or Venue Support on a Budget?
            </h4>
            <p className="text-xs sm:text-sm text-zinc-400 font-light max-w-2xl leading-relaxed">
              We provide tailored catering menus, table decor, hot beverage stations, and private lodging packages
              for celebrations across Kisumu County.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <a
              href={`tel:${HOTEL_INFO.rawPhone}`}
              className="px-6 py-3 border border-[#E8E0D5]/30 text-white text-xs uppercase tracking-[0.2em] font-medium hover:border-white transition-colors"
            >
              Call {HOTEL_INFO.localPhone}
            </a>

            <a
              href={`https://wa.me/${HOTEL_INFO.whatsappNumber}?text=${encodeURIComponent(
                "Hello Megg's Place! I would like to inquire about hosting an event / outside catering in Kisumu."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#A37E4C] hover:bg-[#8F6C3E] text-white text-xs uppercase tracking-[0.2em] font-medium transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Event Concierge</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
