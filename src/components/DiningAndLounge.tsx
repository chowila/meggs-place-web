import Image from "next/image";
import { DINING_HIGHLIGHTS, HOTEL_INFO } from "@/data/hotelData";
import { MessageCircle, Clock } from "lucide-react";

export default function DiningAndLounge() {
  return (
    <section id="lounge" className="py-24 bg-[#F5EFE6] text-[#1C1815] border-b border-[#E8E0D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between border-b border-[#E8E0D5] pb-6 mb-16 gap-4">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] font-medium text-[#8C765C]">
              Social &amp; Culinary Sanctuary
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-[#1C1815] mt-2">
              Megg&apos;s Lounge &amp; The Ivy
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-[#574B3F] font-light max-w-md">
            Artisanal Kenyan teas, single-origin coffee, peaceful reading nooks, and fresh market culinary dining.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Images Grid */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="relative h-80 sm:h-96 bg-[#EFE7DC] border border-[#E8E0D5] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80"
                alt="Kenyan afternoon tea in Megg's Lounge"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 30vw"
              />
            </div>
            <div className="relative h-80 sm:h-96 bg-[#EFE7DC] border border-[#E8E0D5] overflow-hidden mt-8">
              <Image
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80"
                alt="The Ivy dining atmosphere"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 30vw"
              />
            </div>
          </div>

          {/* Editorial Content */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#1C1815]">
              {DINING_HIGHLIGHTS.subtitle}
            </h3>

            <p className="text-xs sm:text-sm text-[#574B3F] font-light leading-relaxed">
              {DINING_HIGHLIGHTS.description}
            </p>

            <div className="space-y-3 pt-3 border-t border-[#E8E0D5]">
              {DINING_HIGHLIGHTS.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <span className="text-[#A37E4C] text-sm mt-0.5">✦</span>
                  <span className="text-xs sm:text-sm text-[#4A4036] font-light">{feature}</span>
                </div>
              ))}
            </div>

            <div className="pt-6 flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#574B3F] bg-[#EFE7DC] px-4 py-2.5">
                <Clock className="w-3.5 h-3.5 text-[#A37E4C]" />
                <span>Afternoon Tea &amp; Dining Daily</span>
              </div>

              <a
                href={`https://wa.me/${HOTEL_INFO.whatsappNumber}?text=${encodeURIComponent(
                  "Hello Megg's Place! I would like to inquire about Megg's Lounge, Afternoon Tea, and dining options."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1C1815] text-[#FDFBF7] text-xs uppercase tracking-[0.18em] font-medium hover:bg-[#A37E4C] transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                <span>Inquire on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
