import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, ConciergeBell, CreditCard } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { ROOMS, AMENITIES, GALLERY_ITEMS } from "@/lib/constants";

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
        image="/images/rooms/room-01.jpg"
      />

      {/* Room Listings */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            title="Accommodation"
            subtitle="Choose from 14 well-appointed rooms designed for your comfort"
          />

          <div className="space-y-16 sm:space-y-20 md:space-y-24">
            {ROOMS.map((room, index) => (
              <div key={room.id} className="space-y-6 sm:space-y-8">
                <div
                  className={`flex flex-col gap-6 sm:gap-8 md:flex-row md:items-center ${
                    index % 2 !== 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className="w-full md:flex-1">
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                      <Image
                        src={room.images[0]}
                        alt={room.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
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

                <div className="grid grid-cols-3 gap-3 sm:gap-4">
                  {room.images.slice(1).map((img, i) => (
                    <div
                      key={i}
                      className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-md"
                    >
                      <Image
                        src={img}
                        alt={`${room.name} view ${i + 2}`}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-105"
                        sizes="(max-width: 768px) 33vw, 20vw"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities & Amenities */}
      <section className="bg-cream-dark py-12 sm:py-16 md:py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            title="Facilities & Amenities"
            subtitle="Everything you need for a comfortable and memorable stay"
          />

          <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-3">
            <Card className="border-forest-100 bg-white">
              <CardContent className="p-5 sm:p-6">
                <div className="flex items-center gap-3 mb-4 sm:mb-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-forest-600">
                    <Check className="h-5 w-5 text-cream" />
                  </div>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-forest-600">
                    Complimentary
                  </h3>
                </div>
                <ul className="space-y-2">
                  {AMENITIES.complimentary.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-xs sm:text-sm text-muted-foreground"
                    >
                      <Check className="h-3.5 w-3.5 mt-0.5 shrink-0 text-gold-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-forest-100 bg-white">
              <CardContent className="p-5 sm:p-6">
                <div className="flex items-center gap-3 mb-4 sm:mb-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-forest-600">
                    <ConciergeBell className="h-5 w-5 text-cream" />
                  </div>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-forest-600">
                    On Request
                  </h3>
                </div>
                <p className="text-[10px] sm:text-xs text-muted-foreground/60 uppercase tracking-wider mb-3">
                  Complimentary
                </p>
                <ul className="space-y-2">
                  {AMENITIES.onRequest.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-xs sm:text-sm text-muted-foreground"
                    >
                      <Check className="h-3.5 w-3.5 mt-0.5 shrink-0 text-gold-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-forest-100 bg-white">
              <CardContent className="p-5 sm:p-6">
                <div className="flex items-center gap-3 mb-4 sm:mb-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-forest-600">
                    <CreditCard className="h-5 w-5 text-cream" />
                  </div>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-forest-600">
                    Chargeable
                  </h3>
                </div>
                <p className="text-[10px] sm:text-xs text-muted-foreground/60 uppercase tracking-wider mb-3">
                  Available on request
                </p>
                <ul className="space-y-2">
                  {AMENITIES.chargeable.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-xs sm:text-sm text-muted-foreground"
                    >
                      <Check className="h-3.5 w-3.5 mt-0.5 shrink-0 text-gold-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Restaurant */}
      <section className="bg-forest-600 py-12 sm:py-16 md:py-20 lg:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <SectionHeading
            title="Multi-Cuisine Restaurant"
            subtitle="A culinary journey through Kerala and beyond"
            light
          />
          <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-12">
            <div className="w-full md:flex-1">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/restaurant/restaurant-01.jpg"
                  alt="Restaurant table setting"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
            <div className="w-full md:flex-1 text-center md:text-left">
              <p className="text-sm sm:text-base text-cream/70 leading-relaxed mb-6 sm:mb-8">
                Our restaurant serves a variety of delicious dishes prepared with
                fresh ingredients. From traditional Kerala flavors to
                international cuisine, we promise a delightful dining experience
                for every palate.
              </p>
              <Button
                asChild
                className="bg-gold-400 text-forest-800 hover:bg-gold-300 min-h-[44px]"
              >
                <Link href="/contact">Reserve a Table</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            title="Gallery"
            subtitle="See more of our resort"
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
            {GALLERY_ITEMS.slice(0, 4).map((item) => (
              <Link
                key={item.id}
                href="/gallery"
                className="group relative aspect-[4/3] overflow-hidden rounded-lg"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-forest-900/0 transition-colors group-hover:bg-forest-900/30" />
              </Link>
            ))}
          </div>
          <div className="text-center mt-8 sm:mt-10">
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

      {/* Bathroom Banner */}
      <section className="relative py-12 sm:py-16 md:py-20 overflow-hidden">
        <Image
          src="/images/bathroom/bathroom-06.jpg"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-forest-900/70" />
        <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <h2 className="mb-3 font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-cream">
            Modern Amenities in Every Room
          </h2>
          <p className="mb-6 text-cream/70 text-sm sm:text-base">
            Each room features a modern bathroom with LED-lit mirrors, premium
            toiletries, hot water, and thoughtful touches for your comfort.
          </p>
          <Button
            asChild
            className="bg-gold-400 text-forest-800 hover:bg-gold-300 min-h-[44px]"
          >
            <Link href="/contact">Book Your Stay</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
