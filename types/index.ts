export type PropertyType = "Plot" | "Flat" | "Villa" | "Commercial";
export type ProjectStatus = "Ready to Move" | "Under Construction" | "New Launch" | "Sold Out";

export interface Project {
  slug: string;
  name: string;
  location: string;
  city: string;
  type: PropertyType;
  status: ProjectStatus;
  priceLabel: string;
  priceValue: number; // for sorting, in INR lakh
  areaLabel: string;
  areaSqft: number;
  image: string;
  gallery: string[];
  description: string;
  amenities: string[];
  nearby: { name: string; distance: string }[];
  lat: number;
  lng: number;
  featured?: boolean;
  possession: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  category: "Sites" | "Interiors" | "Events" | "Construction" | "Aerial" | "Completed";
  caption: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  project: string;
  quote: string;
  rating: number;
  avatar: string;
}

export interface Lead {
  name: string;
  mobile: string;
  email: string;
  propertyInterest: string;
  message: string;
  createdAt?: string;
}
