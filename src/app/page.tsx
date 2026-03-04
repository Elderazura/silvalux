import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Bed, UtensilsCrossed, TreePine, Wifi, CalendarDays, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { FEATURES, ROOMS, GALLERY_ITEMS, BLOG_POSTS } from "@/lib/constants";

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
        image="/images/rooms/room-09.jpg"
      />

      {/* Welcome */}
      <section aria-label="Welcome" className="py-12 sm:py-16 md:py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <SectionHeading
            title="A Perfect Blend of Comfort & Nature"
            subtitle="Surrounded by lush greenery and the calm charm of nature, Silva Lux Resort offers a perfect blend of comfort, luxury, and warm hospitality in the beautiful district of Wayanad."
          />
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6 sm:mb-8">
            Our resort features 14 well-appointed rooms, including 13 Deluxe
            Rooms and 1 elegant Suite Room, thoughtfully designed to provide
            guests with a relaxing and comfortable stay. Each room is equipped
            with modern amenities to ensure convenience while maintaining a cozy
            and peaceful ambiance.
          </p>
          <Button
            asChild
            variant="outline"
            className="border-forest-600 text-forest-600 hover:bg-forest-600 hover:text-cream min-h-[44px]"
          >
            <Link href="/about">
              Learn Our Story <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Rooms Preview */}
      <section aria-label="Rooms" className="py-12 sm:py-16 md:py-20 lg:py-28 bg-cream-dark">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            title="Our Rooms"
            subtitle="Choose from our carefully designed rooms for a memorable stay"
          />
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
            {ROOMS.map((room) => (
              <Card
                key={room.id}
                className="overflow-hidden border-border/50 transition-shadow hover:shadow-lg group"
              >
                <Link href="/rooms">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={room.images[0]}
                      alt={room.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-forest-900/60 to-transparent" />
                    <div className="absolute bottom-3 left-4 right-4 sm:bottom-4 sm:left-5">
                      <Badge className="bg-gold-400 text-forest-800 text-[10px] sm:text-xs mb-1.5">
                        {room.count} {room.count > 1 ? "Rooms" : "Room"}
                      </Badge>
                      <h3 className="font-serif text-lg sm:text-xl font-bold text-cream">
                        {room.name}
                      </h3>
                    </div>
                  </div>
                </Link>
                <CardContent className="p-4 sm:p-6">
                  <p className="mb-4 text-xs sm:text-sm leading-relaxed text-muted-foreground line-clamp-2">
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
          <div className="text-center mt-8 sm:mt-10">
            <Button
              asChild
              className="bg-forest-600 text-cream hover:bg-forest-700 min-h-[44px] px-8"
            >
              <Link href="/rooms">
                View All Rooms & Amenities <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
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

      {/* Restaurant */}
      <section aria-label="Restaurant" className="py-12 sm:py-16 md:py-20 lg:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-12">
            <div className="w-full md:flex-1">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/restaurant/restaurant-05.jpg"
                  alt="Silva Lux multi-cuisine restaurant"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
            <div className="w-full md:flex-1 text-center md:text-left">
              <h2 className="mb-3 font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-forest-600">
                Multi-Cuisine Restaurant
              </h2>
              <p className="mb-6 text-sm sm:text-base text-muted-foreground leading-relaxed">
                Whether you prefer traditional Kerala flavors or international
                cuisine, our restaurant promises a delightful dining experience.
                Serving a variety of delicious dishes prepared with fresh
                ingredients to satisfy diverse tastes.
              </p>
              <Button
                asChild
                className="bg-forest-600 text-cream hover:bg-forest-700 px-6 sm:px-8 min-h-[44px]"
              >
                <Link href="/contact">Reserve a Table</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Event Hall Banner */}
      <section aria-label="Event spaces" className="relative py-16 sm:py-20 md:py-28 overflow-hidden">
        <Image
          src="/images/event-hall/event-hall-04.jpg"
          alt="Event hall at Silva Lux Resort"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-900/85 via-forest-900/70 to-forest-900/50" />
        <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6">
          <div className="max-w-lg">
            <h2 className="mb-3 font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-cream">
              Conference & Event Spaces
            </h2>
            <p className="mb-6 text-sm sm:text-base text-cream/70 leading-relaxed">
              Host your conferences, celebrations, and gatherings in our
              spacious banquet halls, complete with chandeliers, modern AV
              equipment, and full catering support.
            </p>
            <Button
              asChild
              className="bg-gold-400 text-forest-800 hover:bg-gold-300 min-h-[44px]"
            >
              <Link href="/contact">Enquire Now</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section aria-label="Gallery preview" className="py-12 sm:py-16 md:py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            title="Gallery"
            subtitle="A glimpse into the Silva Lux experience"
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {GALLERY_ITEMS.slice(0, 8).map((item, i) => (
              <Link
                key={item.id}
                href="/gallery"
                className={`group relative overflow-hidden rounded-lg ${
                  i === 0 ? "col-span-2 row-span-2" : ""
                }`}
              >
                <div className={`relative ${i === 0 ? "aspect-square" : "aspect-[4/3]"}`}>
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes={i === 0 ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 50vw, 25vw"}
                  />
                  <div className="absolute inset-0 bg-forest-900/0 transition-colors group-hover:bg-forest-900/30" />
                </div>
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

      {/* Blog Preview */}
      <section aria-label="Blog preview" className="bg-cream-dark py-12 sm:py-16 md:py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            title="From Our Blog"
            subtitle="Stories, tips, and guides from Wayanad"
          />
          <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {BLOG_POSTS.map((post) => (
              <Card
                key={post.id}
                className="overflow-hidden border-border/50 transition-shadow hover:shadow-lg group"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <CardContent className="p-4 sm:p-6">
                  <div className="mb-2 flex flex-wrap items-center gap-2">
                    <Badge
                      variant="secondary"
                      className="bg-gold-50 text-gold-600 border-gold-200 text-[10px] sm:text-xs"
                    >
                      {post.category}
                    </Badge>
                    <span className="text-[10px] sm:text-xs text-muted-foreground">
                      {post.date}
                    </span>
                  </div>
                  <h3 className="font-serif text-base sm:text-lg font-semibold text-forest-600 leading-snug">
                    {post.title}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8 sm:mt-10">
            <Button
              asChild
              variant="outline"
              className="border-forest-600 text-forest-600 hover:bg-forest-600 hover:text-cream min-h-[44px] px-8"
            >
              <Link href="/blog">
                Read More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section aria-label="Book your stay" className="relative py-16 sm:py-20 md:py-28 overflow-hidden">
        <Image
          src="/images/rooms/room-12.jpg"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-forest-900/75" />
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
