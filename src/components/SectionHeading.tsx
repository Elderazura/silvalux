import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  light?: boolean;
}

export function SectionHeading({
  title,
  subtitle,
  className,
  light,
}: SectionHeadingProps) {
  return (
    <div className={cn("text-center mb-8 sm:mb-10 md:mb-12", className)}>
      <h2
        className={cn(
          "font-serif text-2xl sm:text-3xl md:text-4xl font-bold mb-3",
          light ? "text-cream" : "text-forest-600"
        )}
      >
        {title}
      </h2>
      <div className="mx-auto mb-4 h-0.5 w-12 sm:w-16 bg-gold-400" />
      {subtitle && (
        <p
          className={cn(
            "mx-auto max-w-2xl text-sm sm:text-base leading-relaxed px-2",
            light ? "text-cream/70" : "text-muted-foreground"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
