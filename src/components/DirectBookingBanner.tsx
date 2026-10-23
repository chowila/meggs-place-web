import { ShieldCheck, Tag, Sparkles, MessageCircle, Phone, Ban } from "lucide-react";
import { HOTEL_INFO } from "@/data/hotelData";

export default function DirectBookingBanner() {
  return (
    <section id="direct-perks" className="py-16 bg-amber-50/70 border-y border-amber-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-200/60 text-amber-900 text-xs font-semibold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-4 h-4 text-amber-800" /> Direct Booking Advantages
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-black text-amber-950 tracking-tight">
            Independent Hospitality, Zero Middleman Fees
          </h2>
          <p className="mt-3 text-zinc-600 text-sm sm:text-base leading-relaxed">
            Megg&apos;s Place operates independently. We do not list inflated rates through third-party
            online booking intermediaries. When you book directly with us, you deal straight with our local Kisumu team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl p-6 sm:p-7 border border-amber-200/80 shadow-xs hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center mb-5">
              <Ban className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-zinc-900 mb-2">No 3rd-Party Markups or Hidden Fees</h3>
            <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">
              Online travel agencies (OTAs) charge 15%–20% commissions and tack on platform fees. By booking direct via
              phone or WhatsApp, you get our purest, most honest room rates in KES, USD, or GBP.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl p-6 sm:p-7 border border-amber-200/80 shadow-xs hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center mb-5">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-zinc-900 mb-2">Personalized Host Service</h3>
            <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">
              Speak with real staff who can customize your check-in time, arrange dietary needs for breakfast,
              prepare romantic decorations for the Bridal Suite, or provide business support.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl p-6 sm:p-7 border border-amber-200/80 shadow-xs hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center mb-5">
              <Tag className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-zinc-900 mb-2">M-PESA &amp; Cash Only</h3>
            <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">
              Pay securely via Safaricom M-PESA or direct cash at check-in. No complicated foreign billing
              or sudden cancellation surprises.
            </p>
          </div>
        </div>

        {/* Action quote bar */}
        <div className="mt-10 bg-white rounded-2xl p-6 border border-amber-300/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-xs">
          <div>
            <p className="font-serif font-bold text-amber-950 text-base">
              Ready to reserve your room or plan your Kisumu stay?
            </p>
            <p className="text-xs text-zinc-600">
              Front Desk is open by appointment 7:30 AM – 7:30 PM. Call or message us directly.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`tel:${HOTEL_INFO.rawPhone}`}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-semibold transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              {HOTEL_INFO.localPhone}
            </a>
            <a
              href={`https://wa.me/${HOTEL_INFO.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
