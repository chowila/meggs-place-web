import Link from "next/link";
import { HOTEL_INFO } from "@/data/hotelData";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1C1815] text-[#A69B8F] text-xs border-t border-[#2C241E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-zinc-800 pb-16">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-6">
            <div>
              <span className="font-serif text-3xl font-normal tracking-[0.15em] text-[#FDFBF7] uppercase">
                Megg&apos;s Place
              </span>
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#D1B894] font-medium mt-1">
                Kisumu, Kenya
              </p>
            </div>

            <p className="text-xs text-zinc-400 font-light leading-relaxed max-w-sm">
              An exclusive apartment hotel and executive accommodation. Luxury, Thrift, Creativity on a Budget.
              Suites with private kitchenettes, soothing lounges, and dedicated business support.
            </p>

            <div className="pt-2">
              <span className="inline-block text-[10px] uppercase tracking-[0.2em] px-3 py-1 bg-zinc-900 border border-zinc-800 text-[#D1B894]">
                100% Direct Booking Platform
              </span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-3 space-y-4">
            <h5 className="font-serif text-sm font-normal uppercase tracking-[0.2em] text-[#FDFBF7]">
              Navigation
            </h5>
            <ul className="space-y-2.5 text-xs font-light">
              <li>
                <Link href="#about" className="hover:text-white transition-colors">
                  About The Hotel
                </Link>
              </li>
              <li>
                <Link href="#suites" className="hover:text-white transition-colors">
                  Suites &amp; Room Portfolio
                </Link>
              </li>
              <li>
                <Link href="#pillars" className="hover:text-white transition-colors">
                  Signature Pillars
                </Link>
              </li>
              <li>
                <Link href="#lounge" className="hover:text-white transition-colors">
                  Megg&apos;s Lounge &amp; Dining
                </Link>
              </li>
              <li>
                <Link href="#events" className="hover:text-white transition-colors">
                  Kisumu 50+ Gala Events
                </Link>
              </li>
              <li>
                <Link href="#location" className="hover:text-white transition-colors">
                  Location &amp; Directions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Hours */}
          <div className="md:col-span-4 space-y-4">
            <h5 className="font-serif text-sm font-normal uppercase tracking-[0.2em] text-[#FDFBF7]">
              Front Desk &amp; Inquiries
            </h5>

            <ul className="space-y-3 text-xs font-light">
              <li className="flex items-start gap-2.5">
                <Phone className="w-3.5 h-3.5 text-[#D1B894] shrink-0 mt-0.5" />
                <div>
                  <a href={`tel:${HOTEL_INFO.rawPhone}`} className="text-white hover:text-[#D1B894] transition-colors">
                    {HOTEL_INFO.phone}
                  </a>
                  <p className="text-[10px] text-zinc-500">Call for immediate reservations</p>
                </div>
              </li>

              <li className="flex items-start gap-2.5">
                <Mail className="w-3.5 h-3.5 text-[#D1B894] shrink-0 mt-0.5" />
                <a href={`mailto:${HOTEL_INFO.email}`} className="text-white hover:text-[#D1B894] transition-colors">
                  {HOTEL_INFO.email}
                </a>
              </li>

              <li className="flex items-start gap-2.5">
                <MapPin className="w-3.5 h-3.5 text-[#D1B894] shrink-0 mt-0.5" />
                <span className="text-zinc-300">{HOTEL_INFO.location}</span>
              </li>
            </ul>

            <div className="pt-3 border-t border-zinc-800">
              <p className="text-[10px] uppercase tracking-[0.18em] text-zinc-500 mb-2">
                Accepted Direct Payments:
              </p>
              <div className="flex items-center gap-2 text-[10px] uppercase font-mono tracking-wider">
                <span className="px-2.5 py-0.5 bg-zinc-900 border border-zinc-800 text-[#25D366]">M-PESA</span>
                <span className="px-2.5 py-0.5 bg-zinc-900 border border-zinc-800 text-zinc-300">Cash</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-500">
          <p>
            &copy; {new Date().getFullYear()} MEGG&apos;S PLACE KISUMU. KENYA - All Rights Reserved.
          </p>

          <div className="flex items-center gap-6">
            <a href={HOTEL_INFO.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              Google Maps
            </a>
            <span>•</span>
            <a href={`tel:${HOTEL_INFO.rawPhone}`} className="hover:text-white transition-colors">
              {HOTEL_INFO.localPhone}
            </a>
            <span>•</span>
            <span className="text-[#D1B894]">meggsplace.com</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
