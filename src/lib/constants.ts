export const SITE_URL = "https://silvalux.in";

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
    images: [
      "/images/rooms/room-01.jpg",
      "/images/rooms/room-03.jpg",
      "/images/rooms/room-12.jpg",
      "/images/rooms/room-04.jpg",
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
    images: [
      "/images/rooms/room-02.jpg",
      "/images/rooms/room-05.jpg",
      "/images/rooms/room-06.jpg",
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
    image: "/images/rooms/room-09.jpg",
  },
  {
    id: "2",
    title: "Top 5 Things to Do Near Silva Lux Resort",
    excerpt:
      "From Edakkal Caves to Banasura Sagar Dam, discover the must-visit attractions just a short drive from our resort.",
    date: "January 28, 2026",
    category: "Activities",
    image: "/images/event-hall/event-hall-04.jpg",
  },
  {
    id: "3",
    title: "A Taste of Kerala: Our Restaurant's Signature Dishes",
    excerpt:
      "Dive into the flavors of traditional Kerala cuisine with our chef's specially curated menu featuring local ingredients.",
    date: "January 10, 2026",
    category: "Dining",
    image: "/images/restaurant/restaurant-08.jpg",
  },
];

export const GALLERY_ITEMS = [
  { id: "1", src: "/images/rooms/room-01.jpg", alt: "Deluxe Room with carved wooden bed", category: "Rooms" },
  { id: "2", src: "/images/rooms/room-03.jpg", alt: "Deluxe Room with cove lighting", category: "Rooms" },
  { id: "3", src: "/images/rooms/room-12.jpg", alt: "Deluxe Room with nature view", category: "Rooms" },
  { id: "4", src: "/images/rooms/room-02.jpg", alt: "Suite Room with premium furnishings", category: "Rooms" },
  { id: "5", src: "/images/rooms/room-05.jpg", alt: "Suite Room front view", category: "Rooms" },
  { id: "6", src: "/images/rooms/room-09.jpg", alt: "Room with bamboo garden view", category: "Rooms" },
  { id: "7", src: "/images/rooms/room-04.jpg", alt: "Deluxe Room bed detail", category: "Rooms" },
  { id: "8", src: "/images/restaurant/restaurant-01.jpg", alt: "Restaurant table setting", category: "Restaurant" },
  { id: "9", src: "/images/restaurant/restaurant-05.jpg", alt: "Restaurant seating area", category: "Restaurant" },
  { id: "10", src: "/images/restaurant/restaurant-03.jpg", alt: "Restaurant with tufted banquette", category: "Restaurant" },
  { id: "11", src: "/images/restaurant/restaurant-08.jpg", alt: "Multi-cuisine dining spread", category: "Restaurant" },
  { id: "12", src: "/images/restaurant/restaurant-10.jpg", alt: "Family dining in the atrium", category: "Restaurant" },
  { id: "13", src: "/images/event-hall/event-hall-01.jpg", alt: "Conference hall with chandeliers", category: "Event Hall" },
  { id: "14", src: "/images/event-hall/event-hall-04.jpg", alt: "Event hall with natural light", category: "Event Hall" },
  { id: "15", src: "/images/event-hall/event-hall-05.jpg", alt: "Banquet hall wide view", category: "Event Hall" },
  { id: "16", src: "/images/bathroom/bathroom-06.jpg", alt: "Modern bathroom vanity", category: "Bathroom" },
  { id: "17", src: "/images/bathroom/bathroom-03.jpg", alt: "Bathroom with LED mirror", category: "Bathroom" },
  { id: "18", src: "/images/bathroom/bathroom-09.jpg", alt: "Bathroom amenities", category: "Bathroom" },
];
