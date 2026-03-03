import Link from "next/link";
import { Button } from "@/components/ui/button";

interface HeroProps {
  title: string;
  subtitle?: string;
  cta?: { label: string; href: string };
  compact?: boolean;
}

export function Hero({ title, subtitle, cta, compact }: HeroProps) {
  return (
    <section
      className={`relative flex items-center justify-center bg-forest-700 ${
        compact
          ? "h-[40vh] sm:h-[45vh] md:h-[50vh] min-h-[240px] sm:min-h-[280px]"
          : "h-[100svh] min-h-[500px] sm:min-h-[550px]"
      }`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-forest-800/80 via-forest-700/60 to-forest-600/80" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 text-center pt-16 sm:pt-20">
        <h1 className="animate-fade-in-up font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-cream">
          {title}
        </h1>
        {subtitle && (
          <p className="animate-fade-in-up animate-delay-200 mt-4 sm:mt-6 text-base sm:text-lg md:text-xl leading-relaxed text-cream/70 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
        {cta && (
          <div className="animate-fade-in-up animate-delay-300 mt-6 sm:mt-8">
            <Button
              asChild
              size="lg"
              className="bg-gold-400 text-forest-800 hover:bg-gold-300 px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base font-medium min-h-[44px]"
            >
              <Link href={cta.href}>{cta.label}</Link>
            </Button>
          </div>
        )}
      </div>

      {!compact && (
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden sm:block">
          <div className="h-8 w-5 rounded-full border-2 border-cream/40 p-1">
            <div className="h-2 w-1 rounded-full bg-cream/40 mx-auto" />
          </div>
        </div>
      )}
    </section>
  );
}
