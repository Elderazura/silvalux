import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Browse photos of Silva Lux Resort, Wayanad — rooms, restaurant, conference halls, garden views, and the resort entrance. See what awaits you in Kenichira.",
  openGraph: {
    title: "Gallery — Silva Lux Resort, Wayanad",
    description:
      "Explore photos of our rooms, dining areas, event spaces, and lush surroundings at Silva Lux Resort, Kerala.",
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
