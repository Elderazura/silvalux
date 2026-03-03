import type { Metadata } from "next";
import Link from "next/link";
import {
  Bed,
  UtensilsCrossed,
  TreePine,
  Wifi,
  CalendarDays,
  Heart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { FEATURES, ROOMS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Silva Lux Resort — Luxury Resort in Wayanad, Kerala",
  description:
    "Welcome to Silva Lux Resort in Kenichira, Panamaram, Wayanad. Enjoy 14 luxury rooms, a multi-cuisine restaurant, event halls, and serene nature views. Book your stay today.",
  openGraph: {
    title: "Silva Lux Resort — Luxury Resort in Wayanad, Kerala",
    description:
      "A serene getaway in the heart of Wayanad with 14 well-appointed rooms, multi-cuisine dining, and warm Kerala hospitality.",
  },
};

const iconMap: Record<string, React.ReactNode> = {
  bed: <Bed className="h-6 w-6 sm:h-8 sm:w-8" />,
  utensils: <UtensilsCrossed className="h-6 w-6 sm:h-8 sm:w-8" />,
  trees: <TreePine className="h-6 w-6 sm:h-8 sm:w-8" />,
  wifi: <Wifi className="h-6 w-6 sm:h-8 sm:w-8" />,
  calendar: <CalendarDays className="h-6 w-6 sm:h-8 sm:w-8" />,
  heart: <Heart className="h-6 w-6 sm:h-8 sm:w-8" />,
};

export default function Home() {
  return (
    <>
      <Hero
        title="Welcome to Silva Lux"
        subtitle="A serene getaway in the heart of Wayanad, where comfort meets nature's embrace."
        cta={{ label: "Explore Rooms", href: "/rooms" }}
      />

      <section aria-label="Welcome" className="py-12 sm:py-16 md:py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <SectionHeading
            title="A Perfect Blend of Comfort & Nature"
            subtitle="Surrounded by lush greenery and the calm charm of nature, Silva Lux Resort offers a perfect blend of comfort, luxury, and warm hospitality in the beautiful district of Wayanad."
          />
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            Our resort features 14 well-appointed rooms, including 13 Deluxe
            Rooms and 1 elegant Suite Room, thoughtfully designed to provide
            guests with a relaxing and comfortable stay. Each room is equipped
            with modern amenities to ensure convenience while maintaining a cozy
            and peaceful ambiance.
          </p>
        </div>
      </section>

      <section aria-label="Features" className="bg-forest-600 py-12 sm:py-16 md:py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            title="What We Offer"
            subtitle="Everything you need for an unforgettable stay"
            light
          />
          <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((feature) => (
              <Card
                key={feature.title}
                className="border-forest-500 bg-forest-500/30 backdrop-blur-sm"
              >
                <CardContent className="p-4 sm:p-6">
                  <div className="mb-3 sm:mb-4 text-gold-400">
                    {iconMap[feature.icon]}
                  </div>
                  <h3 className="mb-2 font-serif text-base sm:text-lg font-semibold text-cream">
                    {feature.title}
                  </h3>
                  <p className="text-xs sm:text-sm leading-relaxed text-cream/60">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section aria-label="Rooms" className="py-12 sm:py-16 md:py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            title="Our Rooms"
            subtitle="Choose from our carefully designed rooms for a memorable stay"
          />
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
            {ROOMS.map((room) => (
              <Card
                key={room.id}
                className="overflow-hidden border-border/50 transition-shadow hover:shadow-lg"
              >
                <div className="aspect-[16/10] bg-forest-100 flex items-center justify-center">
                  <span className="font-serif text-xl sm:text-2xl text-forest-400">
                    {room.name}
                  </span>
                </div>
                <CardContent className="p-4 sm:p-6">
                  <h3 className="mb-2 font-serif text-lg sm:text-xl font-semibold text-forest-600">
                    {room.name}
                  </h3>
                  <p className="mb-4 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                    {room.description}
                  </p>
                  <Button
                    asChild
                    variant="outline"
                    className="border-forest-600 text-forest-600 hover:bg-forest-600 hover:text-cream min-h-[44px]"
                  >
                    <Link href="/rooms">View Details</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section aria-label="Restaurant" className="bg-cream-dark py-12 sm:py-16 md:py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <SectionHeading
            title="Multi-Cuisine Restaurant"
            subtitle="Whether you prefer traditional Kerala flavors or international cuisine, our restaurant promises a delightful dining experience."
          />
          <p className="mb-6 sm:mb-8 text-sm sm:text-base text-muted-foreground leading-relaxed">
            Silva Lux Resort houses a multi-cuisine restaurant, serving a
            variety of delicious dishes prepared with fresh ingredients to
            satisfy diverse tastes.
          </p>
          <Button
            asChild
            className="bg-forest-600 text-cream hover:bg-forest-700 px-6 sm:px-8 min-h-[44px]"
          >
            <Link href="/contact">Reserve a Table</Link>
          </Button>
        </div>
      </section>

      <section aria-label="Book your stay" className="relative bg-forest-700 py-12 sm:py-16 md:py-20 lg:py-28">
        <div className="absolute inset-0 bg-gradient-to-r from-forest-800/90 to-forest-600/90" />
        <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <h2 className="mb-3 sm:mb-4 font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-cream">
            Plan Your Perfect Getaway
          </h2>
          <p className="mb-6 sm:mb-8 text-base sm:text-lg text-cream/70">
            Ideal for family vacations, romantic getaways, and leisure travelers.
          </p>
          <div className="flex flex-col items-center gap-3 sm:gap-4 sm:flex-row sm:justify-center">
            <Button
              asChild
              size="lg"
              className="bg-gold-400 text-forest-800 hover:bg-gold-300 px-6 sm:px-8 min-h-[44px] w-full sm:w-auto"
            >
              <Link href="/contact">Book Your Stay</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-cream/30 text-cream hover:bg-cream/10 px-6 sm:px-8 min-h-[44px] w-full sm:w-auto"
            >
              <Link href="/gallery">View Gallery</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
