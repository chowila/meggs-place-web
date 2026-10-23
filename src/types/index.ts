export interface Room {
  id: string;
  name: string;
  tagline: string;
  description: string;
  priceNote: string;
  capacity: string;
  bedType: string;
  image: string;
  features: string[];
  essentialsIncluded: string[];
  badge?: string;
}

export interface Amenity {
  title: string;
  description: string;
  iconName: string;
}

export interface BookingInquiry {
  fullName: string;
  email: string;
  phone: string;
  roomType: string;
  checkInDate: string;
  checkOutDate: string;
  guests: number;
  specialRequests?: string;
}
