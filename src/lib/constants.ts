export const SITE_URL = "https://silva-fef4a8c6d-saliths-projects-dc972f64.vercel.app";

export const GEO = {
  latitude: 11.7365,
  longitude: 76.0765,
};

export const RESORT_INFO = {
  name: "Silva Lux",
  tagline: "Resort",
  fullName: "Silva Lux Resort",
  description:
    "A serene getaway located in Kenichira, Panamaram, in the beautiful district of Wayanad.",
  longDescription:
    "Silva Lux Resort is a luxury resort in Kenichira, Panamaram, Wayanad, Kerala. Featuring 14 well-appointed rooms including 13 Deluxe Rooms and 1 Suite, a multi-cuisine restaurant, conference halls, and warm hospitality surrounded by lush greenery.",
  address:
    "Panamaram – Nadavayal – Beenachi Rd, Kenichira, Wayanad, Kerala 673596",
  addressStructured: {
    streetAddress: "Panamaram – Nadavayal – Beenachi Rd",
    addressLocality: "Kenichira, Panamaram",
    addressRegion: "Kerala",
    postalCode: "673596",
    addressCountry: "IN",
  },
  phone: ["+91 0493 6213333", "+91 7592 049000"],
  email: "silvalux@vghotels.in",
  mapUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.123!2d76.0765!3d11.7365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDQ0JzExLjQiTiA3NsKwMDQnMzUuNCJF!5e0!3m2!1sen!2sin!4v1700000000000",
  numberOfRooms: 14,
};

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Rooms", href: "/rooms" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const ROOMS = [
  {
    id: "deluxe",
    name: "Deluxe Room",
    count: 13,
    description:
      "Thoughtfully designed to provide guests with a relaxing and comfortable stay. Each room is equipped with modern amenities to ensure convenience while maintaining a cozy and peaceful ambiance.",
    amenities: [
      "Air Conditioning",
      "Free Wi-Fi",
      "Flat Screen TV",
      "Hot Water",
      "Room Service",
      "Daily Housekeeping",
    ],
  },
  {
    id: "suite",
    name: "Suite Room",
    count: 1,
    description:
      "Our elegant Suite Room offers an elevated experience with spacious interiors, premium furnishings, and a separate living area — perfect for those seeking an extra touch of luxury.",
    amenities: [
      "Air Conditioning",
      "Free Wi-Fi",
      "Flat Screen TV",
      "Hot Water",
      "Mini Bar",
      "Living Area",
      "Room Service",
      "Premium Toiletries",
    ],
  },
];

export const FEATURES = [
  {
    title: "14 Well-Appointed Rooms",
    description:
      "13 Deluxe Rooms and 1 elegant Suite Room designed for comfort and relaxation.",
    icon: "bed",
  },
  {
    title: "Multi-Cuisine Restaurant",
    description:
      "Serving a variety of delicious dishes from traditional Kerala flavors to international cuisine.",
    icon: "utensils",
  },
  {
    title: "Lush Greenery",
    description:
      "Surrounded by the natural beauty and calm charm of Wayanad's landscapes.",
    icon: "trees",
  },
  {
    title: "Modern Amenities",
    description:
      "Every room equipped with modern amenities ensuring a convenient and comfortable stay.",
    icon: "wifi",
  },
  {
    title: "Event Spaces",
    description:
      "Spacious conference and banquet halls for meetings, celebrations, and gatherings.",
    icon: "calendar",
  },
  {
    title: "Warm Hospitality",
    description:
      "Committed to delivering exceptional service and memorable stays in the heart of Wayanad.",
    icon: "heart",
  },
];

export const BLOG_POSTS = [
  {
    id: "1",
    title: "Discovering Wayanad: A Hidden Gem of Kerala",
    excerpt:
      "Explore the lush landscapes, wildlife sanctuaries, and ancient caves that make Wayanad one of Kerala's most enchanting destinations.",
    date: "February 15, 2026",
    category: "Travel",
  },
  {
    id: "2",
    title: "Top 5 Things to Do Near Silva Lux Resort",
    excerpt:
      "From Edakkal Caves to Banasura Sagar Dam, discover the must-visit attractions just a short drive from our resort.",
    date: "January 28, 2026",
    category: "Activities",
  },
  {
    id: "3",
    title: "A Taste of Kerala: Our Restaurant's Signature Dishes",
    excerpt:
      "Dive into the flavors of traditional Kerala cuisine with our chef's specially curated menu featuring local ingredients.",
    date: "January 10, 2026",
    category: "Dining",
  },
];
