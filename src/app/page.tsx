"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import PillarsSection from "@/components/PillarsSection";
import SuitesPortfolio from "@/components/SuitesPortfolio";
import TestimonialsSection from "@/components/TestimonialsSection";
import DiningAndLounge from "@/components/DiningAndLounge";
import EventsSection from "@/components/EventsSection";
import LocationSection from "@/components/LocationSection";
import BookingInquiryForm from "@/components/BookingInquiryForm";
import Footer from "@/components/Footer";

export default function Home() {
  const [selectedRoom, setSelectedRoom] = useState<string | undefined>(undefined);

  return (
    <div className="min-h-screen flex flex-col bg-[#FDFBF7] text-[#1C1815] font-sans antialiased">
      <Header />
      <main className="flex-1">
        <Hero />
        <AboutSection />
        <PillarsSection />
        <SuitesPortfolio onSelectRoom={(roomName) => setSelectedRoom(roomName)} />
        <TestimonialsSection />
        <DiningAndLounge />
        <EventsSection />
        <LocationSection />
        <BookingInquiryForm selectedRoomDefault={selectedRoom} />
      </main>
      <Footer />
    </div>
  );
}
