import { RESORT_INFO, GEO, SITE_URL } from "@/lib/constants";

export function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Hotel",
    name: RESORT_INFO.fullName,
    description: RESORT_INFO.longDescription,
    url: SITE_URL,
    telephone: RESORT_INFO.phone[0],
    email: RESORT_INFO.email,
    numberOfRooms: RESORT_INFO.numberOfRooms,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: RESORT_INFO.addressStructured.streetAddress,
      addressLocality: RESORT_INFO.addressStructured.addressLocality,
      addressRegion: RESORT_INFO.addressStructured.addressRegion,
      postalCode: RESORT_INFO.addressStructured.postalCode,
      addressCountry: RESORT_INFO.addressStructured.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: GEO.latitude,
      longitude: GEO.longitude,
    },
    hasMap: `https://www.google.com/maps?q=${GEO.latitude},${GEO.longitude}`,
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Free Wi-Fi", value: true },
      { "@type": "LocationFeatureSpecification", name: "Air Conditioning", value: true },
      { "@type": "LocationFeatureSpecification", name: "Restaurant", value: true },
      { "@type": "LocationFeatureSpecification", name: "Room Service", value: true },
      { "@type": "LocationFeatureSpecification", name: "Conference Hall", value: true },
      { "@type": "LocationFeatureSpecification", name: "Banquet Hall", value: true },
      { "@type": "LocationFeatureSpecification", name: "Parking", value: true },
    ],
    checkinTime: "14:00",
    checkoutTime: "11:00",
    currenciesAccepted: "INR",
    paymentAccepted: "Cash, Credit Card, UPI",
    containsPlace: [
      {
        "@type": "HotelRoom",
        name: "Deluxe Room",
        description:
          "Thoughtfully designed room with modern amenities for a relaxing stay.",
        numberOfRooms: 13,
        amenityFeature: [
          { "@type": "LocationFeatureSpecification", name: "Air Conditioning" },
          { "@type": "LocationFeatureSpecification", name: "Free Wi-Fi" },
          { "@type": "LocationFeatureSpecification", name: "Flat Screen TV" },
        ],
      },
      {
        "@type": "Suite",
        name: "Suite Room",
        description:
          "Elegant suite with spacious interiors, premium furnishings, and separate living area.",
        numberOfRooms: 1,
        amenityFeature: [
          { "@type": "LocationFeatureSpecification", name: "Air Conditioning" },
          { "@type": "LocationFeatureSpecification", name: "Free Wi-Fi" },
          { "@type": "LocationFeatureSpecification", name: "Mini Bar" },
          { "@type": "LocationFeatureSpecification", name: "Living Area" },
        ],
      },
    ],
    potentialAction: {
      "@type": "ReserveAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/contact`,
      },
      result: {
        "@type": "LodgingReservation",
        name: "Book a Room",
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
