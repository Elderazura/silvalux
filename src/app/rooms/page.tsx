import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { ROOMS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Rooms & Suites",
  description:
    "Browse 14 well-appointed rooms at Silva Lux Resort, Wayanad — 13 Deluxe Rooms and 1 Suite with AC, Wi-Fi, TV, room service, and more. Book your ideal room today.",
  openGraph: {
    title: "Rooms & Suites — Silva Lux Resort, Wayanad",
    description:
      "13 Deluxe Rooms and 1 elegant Suite at Silva Lux Resort, Kenichira. Modern amenities, cozy ambiance, and views of Wayanad's lush greenery.",
  },
};

export default function RoomsPage() {
  return (
    <>
      <Hero
        title="Our Rooms"
        subtitle="Comfort and elegance in every detail"
        compact
      />

      <section className="py-12 sm:py-16 md:py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            title="Accommodation"
            subtitle="Choose from 14 well-appointed rooms designed for your comfort"
          />

          <div className="space-y-10 sm:space-y-12 md:space-y-16">
            {ROOMS.map((room, index) => (
              <div
                key={room.id}
                className={`flex flex-col gap-6 sm:gap-8 md:flex-row md:items-center ${
                  index % 2 !== 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="w-full md:flex-1">
                  <div className="aspect-[4/3] rounded-lg bg-forest-100 flex items-center justify-center">
                    <span className="font-serif text-xl sm:text-2xl md:text-3xl text-forest-400">
                      {room.name}
                    </span>
                  </div>
                </div>
                <div className="w-full md:flex-1 space-y-3 sm:space-y-4">
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                    <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-forest-600">
                      {room.name}
                    </h3>
                    <Badge
                      variant="secondary"
                      className="bg-gold-100 text-gold-700 border-gold-200 text-xs"
                    >
                      {room.count} {room.count > 1 ? "Rooms" : "Room"}
                    </Badge>
                  </div>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {room.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {room.amenities.map((amenity) => (
                      <Badge
                        key={amenity}
                        variant="outline"
                        className="border-forest-200 text-forest-600 text-xs"
                      >
                        {amenity}
                      </Badge>
                    ))}
                  </div>
                  <Button
                    asChild
                    className="bg-forest-600 text-cream hover:bg-forest-700 mt-2 min-h-[44px] w-full sm:w-auto"
                  >
                    <Link href="/contact">Book This Room</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Restaurant Section */}
      <section className="bg-forest-600 py-12 sm:py-16 md:py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <SectionHeading
            title="Multi-Cuisine Restaurant"
            subtitle="A culinary journey through Kerala and beyond"
            light
          />
          <div className="mx-auto max-w-xl">
            <div className="aspect-[16/10] rounded-lg bg-forest-500/40 flex items-center justify-center mb-6 sm:mb-8">
              <span className="font-serif text-xl sm:text-2xl text-cream/50">
                Restaurant
              </span>
            </div>
          </div>
          <p className="text-sm sm:text-base text-cream/70 leading-relaxed mb-6 sm:mb-8">
            Our restaurant serves a variety of delicious dishes prepared with
            fresh ingredients. From traditional Kerala flavors to international
            cuisine, we promise a delightful dining experience for every palate.
          </p>
          <Button
            asChild
            className="bg-gold-400 text-forest-800 hover:bg-gold-300 min-h-[44px]"
          >
            <Link href="/contact">Reserve a Table</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
