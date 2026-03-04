"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { GALLERY_ITEMS } from "@/lib/constants";

const categories = ["All", "Rooms", "Restaurant", "Event Hall", "Bathroom"];

export default function GalleryPage() {
  const [selected, setSelected] = useState<(typeof GALLERY_ITEMS)[0] | null>(
    null
  );
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <>
      <Hero
        title="Gallery"
        subtitle="Glimpses of Silva Lux Resort"
        compact
        image="/images/restaurant/restaurant-03.jpg"
      />

      <section className="py-12 sm:py-16 md:py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            title="Our Gallery"
            subtitle="Explore the beauty and comfort of our resort"
          />

          <div className="mb-8 sm:mb-10 flex flex-wrap justify-center gap-1.5 sm:gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-3 sm:px-5 py-1.5 sm:py-2 text-xs sm:text-sm font-medium transition-colors min-h-[36px] sm:min-h-[40px] ${
                  activeCategory === cat
                    ? "bg-forest-600 text-cream"
                    : "bg-forest-50 text-forest-600 hover:bg-forest-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid gap-3 sm:gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((item) => (
              <button
                key={item.id}
                onClick={() => setSelected(item)}
                className="group relative aspect-[4/3] overflow-hidden rounded-lg transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-forest-900/0 transition-colors group-hover:bg-forest-900/30" />
                <div className="absolute bottom-0 left-0 right-0 translate-y-full bg-gradient-to-t from-forest-900/80 to-transparent p-2 sm:p-4 transition-transform group-hover:translate-y-0">
                  <span className="text-xs sm:text-sm font-medium text-cream">
                    {item.alt}
                  </span>
                  <span className="ml-1 sm:ml-2 text-[10px] sm:text-xs text-cream/60">
                    {item.category}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={!!selected} onOpenChange={() => setSelected(null)}>
        <DialogContent className="max-w-[95vw] sm:max-w-xl md:max-w-2xl lg:max-w-3xl border-forest-200 p-0 overflow-hidden">
          {selected && (
            <div className="relative aspect-[16/10]">
              <Image
                src={selected.src}
                alt={selected.alt}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 95vw, (max-width: 768px) 36rem, (max-width: 1024px) 42rem, 48rem"
                quality={90}
              />
            </div>
          )}
          <div className="p-3 sm:p-4">
            <h3 className="font-serif text-base sm:text-lg font-semibold text-forest-600">
              {selected?.alt}
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground">
              {selected?.category}
            </p>
          </div>
        </DialogContent>
      </Dialog>

      {/* Rooms Banner */}
      <section className="relative py-16 sm:py-20 md:py-28 overflow-hidden">
        <Image
          src="/images/rooms/room-09.jpg"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-900/85 via-forest-900/70 to-forest-900/50" />
        <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6">
          <div className="max-w-lg">
            <h2 className="mb-3 font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-cream">
              Ready to Book Your Stay?
            </h2>
            <p className="mb-6 text-sm sm:text-base text-cream/70 leading-relaxed">
              Explore our 14 well-appointed rooms and find the perfect space for
              your Wayanad getaway.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button
                asChild
                className="bg-gold-400 text-forest-800 hover:bg-gold-300 min-h-[44px]"
              >
                <Link href="/rooms">
                  Explore Rooms <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-cream/30 text-cream hover:bg-cream/10 min-h-[44px]"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
