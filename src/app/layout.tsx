import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Megg's Place Kisumu | Luxury Boutique Apartment Hotel & Executive Suites",
  description:
    "Luxury, Thrift, and Creativity on a Budget. Executive boutique apartment hotel in Kisumu, Kenya featuring suites with private kitchenettes, Megg's Lounge, and direct reservation guarantee without third-party fees.",
  keywords: [
    "Megg's Place",
    "Megg's Place Kisumu",
    "Boutique Hotel Kisumu",
    "Executive Accommodation Kisumu",
    "Apartment Hotel Kisumu",
    "Kisumu 50+ Gala Events",
    "The Ivy Kisumu",
    "Direct Booking Hotel Kisumu",
  ],
  authors: [{ name: "Megg's Place Kisumu" }],
  openGraph: {
    title: "Megg's Place Kisumu | Boutique Apartment Hotel & Suites",
    description:
      "Where luxury meets artistry in Kisumu. Executive suites, private kitchenettes, Megg's Lounge, and direct host bookings.",
    url: "https://meggsplace.com",
    siteName: "Megg's Place Kisumu",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${jakarta.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-[#FDFBF7] text-zinc-900 font-sans selection:bg-[#C5A880]/20 selection:text-[#2B231D]">
        {children}
      </body>
    </html>
  );
}
