export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-[#1C1815] text-[#FDFBF7] border-b border-[#2C241E] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-8 text-center space-y-8">
        <span className="text-xs uppercase tracking-[0.3em] font-medium text-[#D1B894] block">
          Guest Impressions • Direct Testimonials
        </span>

        <blockquote className="font-serif text-3xl sm:text-4xl md:text-5xl font-light leading-[1.25] text-[#FDFBF7]">
          &ldquo;Megg&apos;s Place transformed our stay in Kisumu into a serene, executive sanctuary.
          The private kitchenette, immaculate daily servicing, and soothing atmosphere in Megg&apos;s Lounge
          redefine what hospitality on a budget truly means.&rdquo;
        </blockquote>

        <div className="pt-4 flex flex-col items-center justify-center space-y-1">
          <p className="text-xs uppercase tracking-[0.25em] font-semibold text-[#D1B894]">
            Dr. A. Omondi &amp; Associates
          </p>
          <p className="text-[11px] text-zinc-400 font-light tracking-wider">
            Executive Conference Delegates • Nairobi &amp; Kisumu
          </p>
        </div>
      </div>
    </section>
  );
}
