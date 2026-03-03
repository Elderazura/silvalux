"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navBg =
    isHome && !scrolled
      ? "bg-transparent"
      : "bg-forest-600/95 backdrop-blur-md shadow-sm";

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        navBg
      )}
    >
      <div className="mx-auto flex h-16 sm:h-18 md:h-20 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex flex-col leading-tight">
          <span className="font-serif text-xl sm:text-2xl font-bold tracking-wide text-cream">
            Silva Lux
          </span>
          <span className="text-[9px] sm:text-[10px] font-medium uppercase tracking-[0.3em] text-gold-400">
            Resort
          </span>
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-6 lg:gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium tracking-wide transition-colors hover:text-gold-400",
                pathname === link.href ? "text-gold-400" : "text-cream/80"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button
            asChild
            className="bg-gold-400 text-forest-800 hover:bg-gold-300 font-medium"
          >
            <Link href="/contact">Book Now</Link>
          </Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <button
              aria-label="Open navigation menu"
              className="text-cream p-2 -mr-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
            >
              <Menu className="h-6 w-6" />
            </button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-[280px] sm:w-72 bg-forest-600 border-forest-500 p-0"
          >
            <div className="flex flex-col gap-5 px-6 pt-12 pb-8">
              <Link
                href="/"
                className="flex flex-col leading-tight mb-4"
                onClick={() => setOpen(false)}
              >
                <span className="font-serif text-2xl font-bold tracking-wide text-cream">
                  Silva Lux
                </span>
                <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-gold-400">
                  Resort
                </span>
              </Link>
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "text-base font-medium tracking-wide transition-colors hover:text-gold-400 py-1 min-h-[44px] flex items-center",
                    pathname === link.href ? "text-gold-400" : "text-cream/80"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Button
                asChild
                className="bg-gold-400 text-forest-800 hover:bg-gold-300 font-medium mt-4 w-full min-h-[44px]"
              >
                <Link href="/contact" onClick={() => setOpen(false)}>
                  Book Now
                </Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
