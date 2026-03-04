import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { BLOG_POSTS, GALLERY_ITEMS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Read travel tips, Wayanad guides, and stories from Silva Lux Resort. Discover hidden gems, local cuisine, and things to do near Kenichira, Panamaram.",
  openGraph: {
    title: "Blog — Silva Lux Resort, Wayanad",
    description:
      "Travel stories, Wayanad guides, and dining highlights from Silva Lux Resort in Kerala.",
  },
};

export default function BlogPage() {
  return (
    <>
      <Hero
        title="Blog"
        subtitle="Stories, tips, and guides from Wayanad"
        compact
        image="/images/rooms/room-11.jpg"
      />

      <section className="py-12 sm:py-16 md:py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            title="Latest Posts"
            subtitle="Discover Wayanad through our stories and travel guides"
          />

          <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {BLOG_POSTS.map((post) => (
              <Card
                key={post.id}
                className="overflow-hidden border-border/50 transition-shadow hover:shadow-lg group cursor-pointer"
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
                  <div className="mb-2 sm:mb-3 flex flex-wrap items-center gap-2">
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
                  <h3 className="mb-2 font-serif text-base sm:text-lg font-semibold text-forest-600 leading-snug group-hover:text-gold-500 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground">
                    {post.excerpt}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <p className="mt-10 sm:mt-16 text-center text-xs sm:text-sm text-muted-foreground">
            More posts coming soon. Check back for travel tips, events, and
            updates from Silva Lux Resort.
          </p>
        </div>
      </section>

      {/* Gallery Banner */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-28 bg-cream-dark">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            title="Explore Our Gallery"
            subtitle="Photos of our rooms, restaurant, event halls, and surroundings"
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

      {/* Rooms CTA */}
      <section className="relative py-16 sm:py-20 md:py-28 overflow-hidden">
        <Image
          src="/images/event-hall/event-hall-01.jpg"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-forest-900/75" />
        <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <h2 className="mb-3 font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-cream">
            Experience Silva Lux
          </h2>
          <p className="mb-6 text-sm sm:text-base text-cream/70">
            14 well-appointed rooms, multi-cuisine dining, and the beauty of
            Wayanad await you.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Button
              asChild
              className="bg-gold-400 text-forest-800 hover:bg-gold-300 min-h-[44px] w-full sm:w-auto"
            >
              <Link href="/rooms">
                Explore Rooms <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-cream/30 text-cream hover:bg-cream/10 min-h-[44px] w-full sm:w-auto"
            >
              <Link href="/contact">Book Now</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
