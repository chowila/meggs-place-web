"use client";

import { useState } from "react";
import { HOTEL_INFO, ROOMS } from "@/data/hotelData";
import { MessageCircle, Mail, CheckCircle2 } from "lucide-react";

interface BookingInquiryFormProps {
  selectedRoomDefault?: string;
}

export default function BookingInquiryForm({ selectedRoomDefault }: BookingInquiryFormProps) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [userSelectedRoom, setUserSelectedRoom] = useState<string | null>(null);
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [guests, setGuests] = useState("1 - 2 Guests");
  const [specialRequests, setSpecialRequests] = useState("");
  const [submittedMessage, setSubmittedMessage] = useState(false);

  const roomType = userSelectedRoom ?? selectedRoomDefault ?? ROOMS[0].name;

  const generateInquiryText = () => {
    return (
      `*DIRECT RESERVATION INQUIRY - MEGG'S PLACE KISUMU*\n\n` +
      `• *Name:* ${fullName || "Guest"}\n` +
      `• *Phone/WhatsApp:* ${phone || "N/A"}\n` +
      `• *Email:* ${email || "N/A"}\n` +
      `• *Requested Suite/Room:* ${roomType}\n` +
      `• *Check-in Date:* ${checkInDate || "To be confirmed"}\n` +
      `• *Check-out Date:* ${checkOutDate || "To be confirmed"}\n` +
      `• *Number of Guests:* ${guests}\n` +
      `• *Special Requests:* ${specialRequests || "None"}\n\n` +
      `_Sent directly via meggsplace.com direct reservation system._`
    );
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const encoded = encodeURIComponent(generateInquiryText());
    window.open(`https://wa.me/${HOTEL_INFO.whatsappNumber}?text=${encoded}`, "_blank");
    setSubmittedMessage(true);
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Reservation Request: ${roomType} - ${fullName || "Guest"}`);
    const body = encodeURIComponent(generateInquiryText());
    window.location.href = `mailto:${HOTEL_INFO.email}?subject=${subject}&body=${body}`;
    setSubmittedMessage(true);
  };

  return (
    <section id="reserve" className="py-24 bg-[#1C1815] text-[#FDFBF7] border-b border-[#2C241E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Column: Editorial Concierge Note */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] font-medium text-[#D1B894]">
                Direct Reservation Concierge
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-[#FDFBF7] mt-3">
                Begin Your Stay in Kisumu
              </h2>
            </div>

            <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
              Have your travel dates in mind or a special requirement for your visit? Contact our front desk directly.
              By booking straight with us, you enjoy guaranteed direct pricing, transparent host communication, and flexible stay arrangements.
            </p>

            <div className="border-t border-zinc-800 pt-6 space-y-4">
              <div className="flex items-start gap-4">
                <span className="text-xs font-mono text-[#D1B894] mt-0.5">01</span>
                <div>
                  <h4 className="text-sm font-serif font-normal text-white">Instant WhatsApp Confirmation</h4>
                  <p className="text-xs text-zinc-400 font-light mt-0.5">
                    Fastest response. Our host confirms availability and provides direct booking assistance.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-xs font-mono text-[#D1B894] mt-0.5">02</span>
                <div>
                  <h4 className="text-sm font-serif font-normal text-white">Direct Phone Call</h4>
                  <p className="text-xs text-zinc-400 font-light mt-0.5">
                    Speak directly with reception at <span className="text-[#D1B894] font-medium">{HOTEL_INFO.phone}</span>.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-xs font-mono text-[#D1B894] mt-0.5">03</span>
                <div>
                  <h4 className="text-sm font-serif font-normal text-white">Transparent Payments</h4>
                  <p className="text-xs text-zinc-400 font-light mt-0.5">
                    Safaricom M-PESA and Cash only. Official receipts provided upon check-in.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Minimalist Form */}
          <div className="lg:col-span-7 bg-[#FDFBF7] text-[#1C1815] p-8 sm:p-12 border border-[#E8E0D5]">
            <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#1C1815] mb-2">
              Direct Reservation Inquiry
            </h3>
            <p className="text-xs text-[#574B3F] font-light mb-8">
              No credit card required upfront. Tell us about your planned stay.
            </p>

            {submittedMessage && (
              <div className="mb-6 p-4 bg-[#F5EFE6] border border-[#A37E4C]/40 text-[#7F5E32] text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#A37E4C] shrink-0" />
                <span>
                  Inquiry prepared! If WhatsApp did not open automatically, message us directly at{" "}
                  <strong>{HOTEL_INFO.phone}</strong>.
                </span>
              </div>
            )}

            <form onSubmit={handleWhatsAppSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[11px] uppercase tracking-[0.2em] font-medium text-[#4A4036] mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Grace Otieno"
                    className="w-full px-4 py-3 bg-white border border-[#E8E0D5] text-xs text-[#1C1815] focus:outline-hidden focus:border-[#A37E4C]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-[0.2em] font-medium text-[#4A4036] mb-2">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. +254 700 000 000"
                    className="w-full px-4 py-3 bg-white border border-[#E8E0D5] text-xs text-[#1C1815] focus:outline-hidden focus:border-[#A37E4C]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[11px] uppercase tracking-[0.2em] font-medium text-[#4A4036] mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. yourname@example.com"
                    className="w-full px-4 py-3 bg-white border border-[#E8E0D5] text-xs text-[#1C1815] focus:outline-hidden focus:border-[#A37E4C]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-[0.2em] font-medium text-[#4A4036] mb-2">
                    Suite / Room *
                  </label>
                  <select
                    value={roomType}
                    onChange={(e) => setUserSelectedRoom(e.target.value)}
                    className="w-full px-4 py-3 bg-white border border-[#E8E0D5] text-xs text-[#1C1815] focus:outline-hidden focus:border-[#A37E4C]"
                  >
                    {ROOMS.map((r) => (
                      <option key={r.id} value={r.name}>
                        {r.name} ({r.bedType})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <label className="block text-[11px] uppercase tracking-[0.2em] font-medium text-[#4A4036] mb-2">
                    Check-in
                  </label>
                  <input
                    type="date"
                    value={checkInDate}
                    onChange={(e) => setCheckInDate(e.target.value)}
                    className="w-full px-4 py-3 bg-white border border-[#E8E0D5] text-xs text-[#1C1815] focus:outline-hidden focus:border-[#A37E4C]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-[0.2em] font-medium text-[#4A4036] mb-2">
                    Check-out
                  </label>
                  <input
                    type="date"
                    value={checkOutDate}
                    onChange={(e) => setCheckOutDate(e.target.value)}
                    className="w-full px-4 py-3 bg-white border border-[#E8E0D5] text-xs text-[#1C1815] focus:outline-hidden focus:border-[#A37E4C]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-[0.2em] font-medium text-[#4A4036] mb-2">
                    Guests
                  </label>
                  <select
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="w-full px-4 py-3 bg-white border border-[#E8E0D5] text-xs text-[#1C1815] focus:outline-hidden focus:border-[#A37E4C]"
                  >
                    <option value="1 Guest (Mini Studio)">1 Guest (Mini Studio)</option>
                    <option value="2 Guests (Studio / Penthouse)">2 Guests (Studio / Penthouse)</option>
                    <option value="3 Guests (Penthouse)">3 Guests (Penthouse)</option>
                    <option value="Group / Event Inquiry">Group / Event Inquiry</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-[0.2em] font-medium text-[#4A4036] mb-2">
                  Special Inquiries or Requests (Optional)
                </label>
                <textarea
                  rows={3}
                  value={specialRequests}
                  onChange={(e) => setSpecialRequests(e.target.value)}
                  placeholder="e.g. Airport pick-up arrangement (at an extra fee), romantic Bridal Suite setup, late check-in..."
                  className="w-full px-4 py-3 bg-white border border-[#E8E0D5] text-xs text-[#1C1815] focus:outline-hidden focus:border-[#A37E4C]"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-4">
                <button
                  type="submit"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-4 px-6 bg-[#1C1815] hover:bg-[#A37E4C] text-[#FDFBF7] text-xs uppercase tracking-[0.2em] font-medium transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span>Send via WhatsApp</span>
                </button>

                <button
                  type="button"
                  onClick={handleEmailSubmit}
                  className="inline-flex items-center justify-center gap-2 py-4 px-6 border border-[#1C1815] text-[#1C1815] hover:bg-[#F5EFE6] text-xs uppercase tracking-[0.2em] font-medium transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>Email Form</span>
                </button>
              </div>

              <p className="text-[10px] uppercase tracking-[0.15em] text-[#8C765C] text-center pt-2">
                🔒 Direct reservation pledge • No 3rd-party processing fees
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
