import { AMENITIES } from "@/data/hotelData";
import {
  Utensils,
  Coffee,
  Wifi,
  Bath,
  BookOpen,
  Briefcase,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const ICON_MAP: Record<string, React.ElementType> = {
  Utensils,
  Coffee,
  Wifi,
  Bath,
  BookOpen,
  Briefcase,
  ShieldCheck,
  Sparkles,
};

export default function AmenitiesSection() {
  return (
    <section id="amenities" className="py-20 bg-zinc-50 border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-800 bg-amber-100/70 px-3 py-1 rounded-full">
            Comfort &amp; Convenience
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-amber-950 tracking-tight mt-3">
            Hotel Amenities &amp; Services
          </h2>
          <p className="mt-4 text-zinc-600 text-sm sm:text-base leading-relaxed">
            Whether you are staying in Kisumu for a corporate assignment, a conference, or a leisure getaway,
            we provide the essentials to make your stay effortless, productive, and comfortable.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {AMENITIES.map((amenity, index) => {
            const IconComponent = ICON_MAP[amenity.iconName] || Sparkles;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 border border-zinc-200/80 shadow-xs hover:shadow-md hover:border-amber-300 transition-all duration-200"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-100/80 text-amber-900 flex items-center justify-center mb-4">
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-zinc-900 mb-2">{amenity.title}</h3>
                <p className="text-xs text-zinc-600 leading-relaxed">{amenity.description}</p>
              </div>
            );
          })}
        </div>

        {/* 100% Satisfaction Guarantee Callout directly from meggsplace.com */}
        <div className="mt-12 bg-white rounded-2xl p-8 border border-amber-200 shadow-xs flex flex-col md:flex-row items-center gap-6">
          <div className="w-16 h-16 rounded-2xl bg-amber-500/10 text-amber-700 flex items-center justify-center shrink-0">
            <ShieldCheck className="w-8 h-8" />
          </div>
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg font-serif font-bold text-amber-950">
              100% Satisfaction &amp; Cleanliness Guaranteed
            </h4>
            <p className="text-xs sm:text-sm text-zinc-600 max-w-3xl leading-relaxed">
              &quot;Whether this is your first visit, or you have been a guest many times, we want your experience
              to be excellent. Our staff is always available to help with any questions or concerns you may have.&quot;
              Rooms are cleaned and refreshed daily with immaculate care.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
