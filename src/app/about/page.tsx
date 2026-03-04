import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Bed, UtensilsCrossed, TreePine, Wifi, CalendarDays, Heart, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { FEATURES, RESORT_INFO, ROOMS } from "@/lib/constants";

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
        image="/images/exterior/exterior-02.jpg"
      />

      {/* Our Story */}
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

      {/* Exterior Strip */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            title="The Resort"
            subtitle="Elegant architecture surrounded by nature"
          />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
            {[
              { src: "/images/exterior/exterior-01.jpg", alt: "Resort exterior view" },
              { src: "/images/exterior/exterior-04.jpg", alt: "Resort entrance" },
              { src: "/images/exterior/exterior-07.jpg", alt: "Resort surrounded by greenery" },
              { src: "/images/exterior/exterior-09.jpg", alt: "Resort evening view" },
              { src: "/images/exterior/exterior-10.jpg", alt: "Resort landscape" },
              { src: "/images/exterior/exterior-12.jpg", alt: "Resort frontage" },
            ].map((img) => (
              <Link
                key={img.src}
                href="/gallery"
                className="group relative aspect-[4/3] overflow-hidden rounded-lg shadow-md"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-forest-900/0 transition-colors group-hover:bg-forest-900/20" />
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button
              asChild
              variant="outline"
              className="border-forest-600 text-forest-600 hover:bg-forest-600 hover:text-cream min-h-[44px] px-8"
            >
              <Link href="/gallery">
                View Full Gallery <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
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

      {/* Rooms Preview Banner */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            title="Our Accommodation"
            subtitle="14 rooms designed for comfort and relaxation"
          />
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
            {ROOMS.map((room) => (
              <Link
                key={room.id}
                href="/rooms"
                className="group relative aspect-[16/10] rounded-xl overflow-hidden shadow-lg"
              >
                <Image
                  src={room.images[0]}
                  alt={room.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-900/70 to-transparent" />
                <div className="absolute bottom-4 left-5 right-5 sm:bottom-6 sm:left-6">
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-cream mb-1">
                    {room.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-cream/70">
                    {room.count} {room.count > 1 ? "rooms" : "room"} available
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8 sm:mt-10">
            <Button
              asChild
              className="bg-forest-600 text-cream hover:bg-forest-700 min-h-[44px] px-8"
            >
              <Link href="/rooms">
                Explore Rooms & Amenities <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Gallery Banner */}
      <section className="relative py-16 sm:py-20 md:py-28 overflow-hidden">
        <Image
          src="/images/restaurant/restaurant-03.jpg"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-forest-900/70" />
        <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <h2 className="mb-3 font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-cream">
            See It for Yourself
          </h2>
          <p className="mb-6 text-sm sm:text-base text-cream/70">
            Browse photos of our rooms, restaurant, event halls, and lush surroundings.
          </p>
          <Button
            asChild
            className="bg-gold-400 text-forest-800 hover:bg-gold-300 min-h-[44px] px-8"
          >
            <Link href="/gallery">
              View Gallery <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Location */}
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

      {/* CTA */}
      <section className="bg-forest-600 py-12 sm:py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <h2 className="mb-3 font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-cream">
            Ready to Experience Silva Lux?
          </h2>
          <p className="mb-6 text-cream/70 text-sm sm:text-base">
            Get in touch with us for bookings and inquiries.
          </p>
          <Button
            asChild
            className="bg-gold-400 text-forest-800 hover:bg-gold-300 min-h-[44px] px-8"
          >
            <Link href="/contact">
              Contact Us <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
