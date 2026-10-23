import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-[#FDFBF7] text-[#1C1815] border-b border-[#E8E0D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Top Minimalist Header */}
        <div className="flex items-center justify-between border-b border-[#E8E0D5] pb-4 mb-16">
          <span className="text-xs uppercase tracking-[0.25em] font-medium text-[#8C765C]">
            About • Philosophy &amp; Ethos
          </span>
          <span className="text-xs uppercase tracking-[0.2em] font-serif text-[#1C1815]">
            Megg&apos;s Place Kisumu
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Large Statement */}
          <div className="lg:col-span-7 space-y-8">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal leading-[1.15] text-[#1C1815]">
              Megg&apos;s Place is an exclusive apartment hotel specializing in{" "}
              <span className="italic text-[#A37E4C]">luxurious, culturally immersive</span>, and self-sufficient
              stays in Kisumu.
            </h2>

            <p className="text-sm sm:text-base text-[#574B3F] font-light leading-relaxed">
              From our comfortable suites to Megg&apos;s Lounge, our spaces are designed for travelers who appreciate
              space, independence, and creativity. We equip every room with a private kitchenette, high-speed fiber
              internet, and daily housekeeping—ensuring an immaculate sanctuary whether you are in Kisumu for an
              executive business assignment or a leisurely weekend along Lake Victoria.
            </p>

            <div className="p-6 bg-[#F5EFE6] border border-[#E8E0D5] text-xs text-[#4A4036] space-y-2">
              <p className="font-serif font-bold text-sm text-[#1C1815] uppercase tracking-wider">
                Our Founding Commitment:
              </p>
              <p className="leading-relaxed font-light">
                &ldquo;Luxury, Thrift, and Creativity on a Budget.&rdquo; By managing all reservations directly and
                omitting 3rd-party booking agencies, we protect our guests from inflated online rates, hidden platform
                surcharges, and impersonal communication.
              </p>
            </div>

            <div className="pt-2">
              <Link
                href="#suites"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#1C1815] hover:text-[#A37E4C] transition-colors"
              >
                <span>View Accommodations Portfolio</span>
                <ArrowUpRight className="w-4 h-4 text-[#A37E4C]" />
              </Link>
            </div>
          </div>

          {/* Right Metrics & Image Collage */}
          <div className="lg:col-span-5 space-y-8">
            <div className="relative h-96 w-full overflow-hidden bg-[#EFE7DC] border border-[#E8E0D5]">
              <Image
                src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=80"
                alt="Boutique Hotel Ambiance"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>

            {/* Editorial Stats Grid */}
            <div className="grid grid-cols-2 gap-6 pt-4 border-t border-[#E8E0D5]">
              <div>
                <p className="font-serif text-3xl sm:text-4xl font-normal text-[#1C1815]">100%</p>
                <p className="text-[11px] uppercase tracking-[0.18em] text-[#8C765C] mt-1">
                  Direct Booking (No OTA Surcharges)
                </p>
              </div>

              <div>
                <p className="font-serif text-3xl sm:text-4xl font-normal text-[#1C1815]">03</p>
                <p className="text-[11px] uppercase tracking-[0.18em] text-[#8C765C] mt-1">
                  Signature Categories (Mini Studio, Studio, Penthouse)
                </p>
              </div>

              <div>
                <p className="font-serif text-3xl sm:text-4xl font-normal text-[#1C1815]">~23m</p>
                <p className="text-[11px] uppercase tracking-[0.18em] text-[#8C765C] mt-1">
                  To Kisumu International Airport
                </p>
              </div>

              <div>
                <p className="font-serif text-3xl sm:text-4xl font-normal text-[#1C1815]">24/7</p>
                <p className="text-[11px] uppercase tracking-[0.18em] text-[#8C765C] mt-1">
                  Guarded Security &amp; Gated Parking
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
