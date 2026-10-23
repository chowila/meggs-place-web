const PILLARS = [
  {
    number: "01",
    title: "Executive Suite Living",
    tagline: "Private Kitchenettes, Workstations & Daily Servicing",
    description:
      "Self-contained luxury tailored for both short executive visits and extended residencies in Kisumu. Our Penthouse, Studio, and Mini Studio suites feature private kitchenettes, dedicated workstations, plush bathrobes, authentic Kenyan Maasai Shukas, and daily housekeeping at no extra surcharge.",
  },
  {
    number: "02",
    title: "Megg's Lounge & The Ivy",
    tagline: "Artisanal Afternoon Teas, Library & Fresh Dining",
    description:
      "A serene culinary sanctuary where guests unwind with a book, herbal infusions, and fresh Kenyan coffee. Enjoy a fresh continental breakfast of warm pastries and fruit (available at an extra fee), alongside customized lunches, dinners, and complimentary room service.",
  },
  {
    number: "03",
    title: "Business Support Hub",
    tagline: "High-Speed Wi-Fi, Workstations & Secretarial Services",
    description:
      "Engineered for corporate executives, visiting consultants, and NGO teams working in Kisumu County. Every room includes an ergonomic work desk, high-speed fiber internet, multi-standard power outlets, guest room phones, and front-desk printing and scanning assistance.",
  },
  {
    number: "04",
    title: "Kisumu 50+ Gala Events",
    tagline: "Intimate Celebrations & Outside Catering on a Budget",
    description:
      "Powered by Megg's Place, we orchestrate memorable milestones—from golden jubilee birthdays and bridal showers to executive dinners. We provide customized menus, table setups, and outside catering tailored for discerning hosts on a sensible budget.",
  },
];

export default function PillarsSection() {
  return (
    <section id="pillars" className="py-24 bg-[#F5EFE6] text-[#1C1815] border-b border-[#E8E0D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between border-b border-[#E8E0D5] pb-6 mb-16 gap-4">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] font-medium text-[#8C765C]">
              Signature Offerings
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-[#1C1815] mt-2">
              Our Pillars of Hospitality
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-[#574B3F] font-light max-w-md">
            Four foundational elements that make Megg&apos;s Place the premier choice for executive comfort,
            thrift, and personalized care in Kisumu.
          </p>
        </div>

        {/* 4 Numbered Columns / Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PILLARS.map((pillar) => (
            <div
              key={pillar.number}
              className="bg-[#FDFBF7] p-8 border border-[#E8E0D5] flex flex-col justify-between group hover:border-[#A37E4C] transition-colors duration-300 shadow-xs"
            >
              <div>
                {/* Big Editorial Number */}
                <span className="font-serif text-4xl sm:text-5xl font-light text-[#A37E4C] block mb-4 group-hover:translate-x-1 transition-transform">
                  {pillar.number}
                </span>

                <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#1C1815] mb-2 leading-snug">
                  {pillar.title}
                </h3>

                <p className="text-[11px] uppercase tracking-[0.18em] font-semibold text-[#8C765C] mb-4">
                  {pillar.tagline}
                </p>

                <p className="text-xs text-[#574B3F] font-light leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#E8E0D5] flex items-center justify-between text-xs text-[#1C1815] font-medium">
                <span className="uppercase tracking-[0.18em] text-[10px] text-[#8C765C]">
                  Included with Stay
                </span>
                <span className="text-[#A37E4C] text-sm">✦</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
