"use client";

import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";

const galleryItems = [
  { id: 1, label: "Resort Entrance", category: "Exterior" },
  { id: 2, label: "Deluxe Room", category: "Rooms" },
  { id: 3, label: "Suite Room", category: "Rooms" },
  { id: 4, label: "Restaurant", category: "Dining" },
  { id: 5, label: "Conference Hall", category: "Events" },
  { id: 6, label: "Garden View", category: "Exterior" },
  { id: 7, label: "Banquet Hall", category: "Events" },
  { id: 8, label: "Dining Area", category: "Dining" },
  { id: 9, label: "Lobby", category: "Interior" },
];

const categories = [
  "All",
  "Exterior",
  "Rooms",
  "Dining",
  "Events",
  "Interior",
];

export default function GalleryPage() {
  const [selected, setSelected] = useState<(typeof galleryItems)[0] | null>(
    null
  );
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <>
      <Hero title="Gallery" subtitle="Glimpses of Silva Lux Resort" compact />

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
                className="group relative aspect-[4/3] overflow-hidden rounded-lg bg-forest-100 transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                <div className="flex h-full w-full items-center justify-center p-2">
                  <span className="font-serif text-sm sm:text-lg md:text-xl text-forest-400 text-center">
                    {item.label}
                  </span>
                </div>
                <div className="absolute inset-0 bg-forest-800/0 transition-colors group-hover:bg-forest-800/30" />
                <div className="absolute bottom-0 left-0 right-0 translate-y-full bg-gradient-to-t from-forest-800/80 to-transparent p-2 sm:p-4 transition-transform group-hover:translate-y-0">
                  <span className="text-xs sm:text-sm font-medium text-cream">
                    {item.label}
                  </span>
                  <span className="ml-1 sm:ml-2 text-[10px] sm:text-xs text-cream/60">
                    {item.category}
                  </span>
                </div>
              </button>
            ))}
          </div>

          <p className="mt-8 sm:mt-12 text-center text-xs sm:text-sm text-muted-foreground">
            Images will be updated soon. Stay tuned for more photos of our
            resort.
          </p>
        </div>
      </section>

      <Dialog open={!!selected} onOpenChange={() => setSelected(null)}>
        <DialogContent className="max-w-[95vw] sm:max-w-xl md:max-w-2xl lg:max-w-3xl border-forest-200 p-0 overflow-hidden">
          <div className="aspect-[16/10] bg-forest-100 flex items-center justify-center">
            <span className="font-serif text-xl sm:text-2xl md:text-3xl text-forest-400">
              {selected?.label}
            </span>
          </div>
          <div className="p-3 sm:p-4">
            <h3 className="font-serif text-base sm:text-lg font-semibold text-forest-600">
              {selected?.label}
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground">
              {selected?.category}
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
