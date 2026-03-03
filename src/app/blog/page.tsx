import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { BLOG_POSTS } from "@/lib/constants";

export default function BlogPage() {
  return (
    <>
      <Hero
        title="Blog"
        subtitle="Stories, tips, and guides from Wayanad"
        compact
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
                <div className="aspect-[16/10] bg-forest-100 flex items-center justify-center transition-colors group-hover:bg-forest-200">
                  <span className="font-serif text-base sm:text-lg text-forest-400">
                    Blog
                  </span>
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
    </>
  );
}
