import type { Metadata } from "next";
import Image from "next/image";
import {
  Bed,
  UtensilsCrossed,
  TreePine,
  Wifi,
  CalendarDays,
  Heart,
  MapPin,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { FEATURES, RESORT_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Silva Lux Resort — our story, amenities, and commitment to warm hospitality in Kenichira, Wayanad. 14 rooms, multi-cuisine restaurant, and lush green surroundings.",
  openGraph: {
    title: "About Us — Silva Lux Resort, Wayanad",
    description:
      "Discover the story behind Silva Lux Resort in Wayanad, Kerala. Comfort, luxury, and nature come together in the heart of Kenichira.",
  },
};

const iconMap: Record<string, React.ReactNode> = {
  bed: <Bed className="h-6 w-6 sm:h-7 sm:w-7" />,
  utensils: <UtensilsCrossed className="h-6 w-6 sm:h-7 sm:w-7" />,
  trees: <TreePine className="h-6 w-6 sm:h-7 sm:w-7" />,
  wifi: <Wifi className="h-6 w-6 sm:h-7 sm:w-7" />,
  calendar: <CalendarDays className="h-6 w-6 sm:h-7 sm:w-7" />,
  heart: <Heart className="h-6 w-6 sm:h-7 sm:w-7" />,
};

export default function AboutPage() {
  return (
    <>
      <Hero
        title="About Us"
        subtitle="Our story, our passion"
        compact
        image="/images/restaurant/restaurant-05.jpg"
      />

      <section className="py-12 sm:py-16 md:py-20 lg:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <SectionHeading title="Our Story" />
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
            <div className="w-full md:flex-1">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/rooms/room-12.jpg"
                  alt="Deluxe room at Silva Lux Resort"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
            <div className="w-full md:flex-1 space-y-4 sm:space-y-6 text-sm sm:text-base text-muted-foreground leading-relaxed">
              <p>
                Welcome to Silva Lux Resort, a serene getaway located in
                Kenichira, Panamaram, in the beautiful district of Wayanad.
                Surrounded by lush greenery and the calm charm of nature, Silva
                Lux Resort offers a perfect blend of comfort, luxury, and warm
                hospitality.
              </p>
              <p>
                Our resort features 14 well-appointed rooms, including 13 Deluxe
                Rooms and 1 elegant Suite Room, thoughtfully designed to provide
                guests with a relaxing and comfortable stay.
              </p>
              <p>
                Silva Lux Resort also houses a multi-cuisine restaurant, serving
                a variety of delicious dishes prepared with fresh ingredients to
                satisfy diverse tastes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream-dark py-12 sm:py-16 md:py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            title="What Makes Us Special"
            subtitle="The amenities and experiences that set us apart"
          />
          <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((feature) => (
              <Card
                key={feature.title}
                className="border-border/30 bg-white transition-shadow hover:shadow-md"
              >
                <CardContent className="p-4 sm:p-6">
                  <div className="mb-3 sm:mb-4 text-gold-500">
                    {iconMap[feature.icon]}
                  </div>
                  <h3 className="mb-2 font-serif text-base sm:text-lg font-semibold text-forest-600">
                    {feature.title}
                  </h3>
                  <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <SectionHeading
            title="Our Location"
            subtitle="Nestled in the heart of Wayanad"
          />
          <div className="flex items-start sm:items-center justify-center gap-2 text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8 px-2">
            <MapPin className="h-4 w-4 sm:h-5 sm:w-5 shrink-0 text-gold-500 mt-0.5 sm:mt-0" />
            <span className="text-left sm:text-center break-words">
              {RESORT_INFO.address}
            </span>
          </div>
          <div className="aspect-video sm:aspect-video overflow-hidden rounded-lg border">
            <iframe
              src={RESORT_INFO.mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Silva Lux Resort Location"
            />
          </div>
        </div>
      </section>
    </>
  );
}
