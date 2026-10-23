import { Room, Amenity } from "@/types";

export const HOTEL_INFO = {
  name: "Megg's Place Kisumu",
  subtitle: "Executive Apartment Hotel & Business Suites",
  tagline: "Luxury, Thrift, Creativity on a Budget",
  location: "Kisumu, Kisumu County, Kenya (Kisumu - Kakamega Highway)",
  phone: "+254 722 210 190",
  rawPhone: "+254722210190",
  localPhone: "0722 210 190",
  email: "EaglenestLive@gmail.com",
  whatsappNumber: "254722210190",
  googleMapsUrl: "https://www.google.co.uk/maps/place/Megg's+Place+Kisumu./@-0.0533726,34.7700572,17z/data=!3m1!4b1!4m8!3m7!1s0x182aa7b609871b65:0x21acf78bf191a5d7!5m2!4m1!1i2!8m2!3d-0.053378!4d34.7722459",
  frontDeskHours: "By Appointment: 7:30 AM – 7:30 PM",
  paymentMethods: ["M-PESA", "Cash"],
  directBookingPerks: [
    "No middleman OTA booking fees or commission markups",
    "Best Rate Guarantee direct from the management",
    "Personalized VIP check-in & tailored guest requests",
    "Fresh breakfast & afternoon tea dining access",
    "Free room service & car valet on select reservations",
    "Direct WhatsApp communication with your host",
  ],
};

export const ROOMS: Room[] = [
  {
    id: "mini-studio",
    name: "Mini Studio",
    tagline: "Intimate, Efficient & Self-Contained",
    description:
      "Designed specifically for solo business travellers, visiting consultants, and independent guests. Compact yet fully appointed with a private kitchenette, invigorating hot shower, dedicated workstation, and high-speed fiber Wi-Fi at our most accessible direct rate.",
    priceNote: "Direct quote in KES / USD / GBP per night",
    capacity: "1 Guest",
    bedType: "Comfort Single Bed",
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1200&q=80",
    badge: "Solo Executive",
    features: [
      "Private fully equipped kitchenette corner",
      "En-suite invigorating private hot shower",
      "Ergonomic work desk & multi-standard outlets",
      "High-speed business fiber Wi-Fi",
      "High-definition cable television",
      "Personal check-in & key handoff",
      "Room service at no extra cost",
      "Daily executive housekeeping & room refresh",
    ],
    essentialsIncluded: [
      "Fresh morning continental breakfast available (at an extra fee)",
      "Fresh daily linens & plush towels",
      "Hot beverage station & bottled water",
      "Quiet working lounge access at Megg's Lounge",
      "Free secure on-site gated parking",
    ],
  },
  {
    id: "studio",
    name: "Studio",
    tagline: "Spacious Executive Living for Couples & Colleagues",
    description:
      "Our signature open-plan studio suite offers generous living space, self-catering independence, and refined comfort for up to 2 guests. Features a plush king bed, private kitchenette, cozy sitting area, and full executive amenities.",
    priceNote: "Direct quote in KES / USD / GBP per night",
    capacity: "2 Guests",
    bedType: "King Sized Bed",
    image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80",
    badge: "Most Popular",
    features: [
      "King size bed with posture-support mattress",
      "Private kitchenette with cookware, kettle & fridge",
      "Cozy sitting & dining space",
      "En-suite hot shower with steady pressure",
      "Dedicated ergonomic work desk & task lighting",
      "High-definition cable television",
      "High-speed business Wi-Fi access",
      "Daily executive housekeeping & linen service",
    ],
    essentialsIncluded: [
      "Fresh morning continental breakfast available (at an extra fee)",
      "Artisanal Kenyan tea & coffee station",
      "Full access to Megg's Lounge & The Ivy",
      "Complimentary room service at zero surcharge",
      "Complimentary car wash & valet service",
    ],
  },
  {
    id: "penthouse",
    name: "Penthouse",
    tagline: "Top-Floor Luxury & Panoramic Sunset Views",
    description:
      "Our crowning residential suite offering breathtaking views of the African sun as it rises and sets over Kisumu city. Perfectly designed for 2 to 3 guests seeking expansive space, featuring a grand king bedroom, private kitchenette, lavish lounge, and an en-suite bathroom with invigorating hot shower.",
    priceNote: "Premier quote in KES / USD / GBP per night",
    capacity: "2 - 3 Guests",
    bedType: "King Sized Bed",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
    badge: "Premier Residence",
    features: [
      "Luxury king sized bed",
      "Expansive furnished private lounge & sitting room",
      "Private bathroom with invigorating hot shower",
      "Private chef's kitchenette with full appliances",
      "Panoramic African sunrise & sunset city vistas",
      "High-definition cable TV in lounge & bedroom",
      "High-speed complimentary fiber Wi-Fi",
      "Daily executive servicing & evening turndown",
    ],
    essentialsIncluded: [
      "Complimentary snacks & fine beverage bar",
      "Luxury bathrobes & authentic Kenyan Maasai Shukas",
      "Airport transportation on request (at an extra fee)",
      "Complimentary car wash & concierge valet service",
      "VIP concierge & dedicated host assistance",
    ],
  },
];

export const AMENITIES: Amenity[] = [
  {
    title: "Private In-Room Kitchenettes",
    description: "Every room features a private kitchenette with refrigerator, kettle, and cookware for self-catering convenience.",
    iconName: "Utensils",
  },
  {
    title: "Fresh Continental Breakfast (Extra Fee)",
    description: "Available on order: fresh pastries, seasonal fruits, cereals, and hot artisanal Kenyan tea and fresh coffee.",
    iconName: "Coffee",
  },
  {
    title: "High-Speed Business Wi-Fi",
    description: "Reliable fiber internet across all suites, rooms, and garden lounge spaces for video calls and remote work.",
    iconName: "Wifi",
  },
  {
    title: "Daily Housekeeping & Fresh Linens",
    description: "Immaculate room cleaning, crisp cotton linens, plush towels, and authentic Kenyan Maasai Shukas.",
    iconName: "Sparkles",
  },
  {
    title: "Megg's Lounge & The Ivy",
    description: "Quiet, relaxing afternoon tea lounge with a curated book collection, light snacks, and executive coffee service.",
    iconName: "BookOpen",
  },
  {
    title: "Business Support Services",
    description: "Printing, document scanning, secretarial assistance, and quiet conference desks for business travellers.",
    iconName: "Briefcase",
  },
  {
    title: "Valet & Secure Gated Parking",
    description: "Complimentary car wash/valet on select packages and 24-hour guarded perimeter with CCTV security.",
    iconName: "ShieldCheck",
  },
  {
    title: "Gala Events & Outside Catering",
    description: "Host private dinners, Kisumu 50+ Gala Events, bridal showers, or order bespoke catering on a budget.",
    iconName: "Sparkles",
  },
];

export const DINING_HIGHLIGHTS = {
  title: "Megg's Lounge & The Ivy",
  subtitle: "Artisanal Kenyan Teas, Fresh Coffee & Soulful Dining",
  description:
    "At Megg's Place, we believe dining should feel intimate, comforting, and authentic. Whether you are starting your morning with a fresh continental breakfast of warm pastries and hot beverages (available at an extra fee), or enjoying an afternoon with a book in Megg's Lounge, our kitchen is ready to treat you.",
  features: [
    "Fresh continental breakfast prepared daily on request (at an extra fee)",
    "Afternoon Tea service with fresh pastries, herbal infusions & Kenyan chai",
    "Lunch and dinner prepared on-demand with fresh ingredients from Kisumu markets",
    "In-room dining and room service delivered directly at no extra surcharge",
    "Outside catering packages tailored for budget-conscious celebrations & meetings",
  ],
};

export const EVENTS_INFO = {
  title: "Kisumu 50+ Gala Events & Catering",
  subtitle: "Macro & Micro Event Hosting on a Budget",
  description:
    "Powered by Megg's Place, we cater to memorable gatherings in Kisumu County. From golden jubilee birthdays and executive retreats to bridal showers and family getaways, we provide personalized setups, authentic food, and warm Kenyan hospitality.",
  eventTypes: [
    { title: "Bridal Showers & Honeymoons", desc: "Private decorated suites, welcome flowers, intimate dinners, and concierge coordination." },
    { title: "Corporate Business Retreats", desc: "Executive lodging, high-speed Wi-Fi, business support, and quiet lounge breakout spaces." },
    { title: "Kisumu 50+ Gala & Birthdays", desc: "Milestone celebrations with customized catering menus, decor, and welcoming atmosphere." },
    { title: "Outside Catering on a Budget", desc: "Quality catering delivered to your venue or hosted in our tranquil outdoor courtyard." },
  ],
};

export const FAQS = [
  {
    question: "What are the room categories at Megg's Place?",
    answer:
      "We offer three signature room categories: the Mini Studio (for 1 guest), the Studio (for 2 guests), and the Penthouse (for 2–3 guests). Each suite is fully self-contained with a private kitchenette, hot shower, work desk, and high-speed Wi-Fi.",
  },
  {
    question: "How do I book directly with Megg's Place?",
    answer:
      "Because we intentionally do not rely on 3rd-party booking websites (which charge high traveler and host fees), you can reserve directly by calling us at +254 722 210 190, messaging us on WhatsApp, or sending a direct inquiry through this website.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept Safaricom M-PESA and Cash only. Payment details and confirmation are provided directly when reserving.",
  },
  {
    question: "What are your check-in and front desk hours?",
    answer:
      "Our front desk operates by appointment between 7:30 AM and 7:30 PM. We provide personal check-in and flexible arrival arrangements with advance notice.",
  },
  {
    question: "Is breakfast included in the room rate?",
    answer:
      "Breakfast is available daily at an extra fee. Guests can enjoy a fresh continental breakfast featuring pastries, cereals, seasonal fruits, and hot Kenyan tea or coffee.",
  },
  {
    question: "Do you offer airport transportation from Kisumu International Airport?",
    answer:
      "Yes, airport transportation to and from Kisumu International Airport is available for all guests upon advance request at an extra fee.",
  },
  {
    question: "Are rooms equipped for business and remote work?",
    answer:
      "Yes! Every room is equipped with an ergonomic work desk, high-speed Wi-Fi, power outlets, and access to on-site business support (printing, scanning, telephone).",
  },
];
