import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { ContactForm } from "@/components/ContactForm";
import { RESORT_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Silva Lux Resort, Wayanad — call +91 0493 6213333, email silvalux@vghotels.in, or fill out our form. Located at Panamaram–Nadavayal–Beenachi Rd, Kenichira, Kerala 673596.",
  openGraph: {
    title: "Contact Us — Silva Lux Resort, Wayanad",
    description:
      "Get in touch with Silva Lux Resort for bookings and inquiries. Phone, email, and directions to our Kenichira location.",
  },
};

const contactDetails = [
  {
    icon: <MapPin className="h-5 w-5" />,
    label: "Address",
    value: RESORT_INFO.address,
  },
  {
    icon: <Phone className="h-5 w-5" />,
    label: "Phone",
    value: RESORT_INFO.phone.join("\n"),
    href: `tel:${RESORT_INFO.phone[0].replace(/\s/g, "")}`,
  },
  {
    icon: <Mail className="h-5 w-5" />,
    label: "Email",
    value: RESORT_INFO.email,
    href: `mailto:${RESORT_INFO.email}`,
  },
  {
    icon: <Clock className="h-5 w-5" />,
    label: "Reception",
    value: "24/7 Front Desk",
  },
];

export default function ContactPage() {
  return (
    <>
      <Hero title="Contact Us" subtitle="We'd love to hear from you" compact />

      <section className="py-12 sm:py-16 md:py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            title="Get In Touch"
            subtitle="Have a question or want to make a reservation? Reach out to us."
          />

          <div className="grid gap-8 sm:gap-10 md:gap-12 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
            <div className="lg:col-span-2 grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-1">
              {contactDetails.map((detail) => (
                <Card key={detail.label} className="border-border/50">
                  <CardContent className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5">
                    <div className="mt-0.5 text-gold-500 shrink-0">
                      {detail.icon}
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] sm:text-xs font-medium uppercase tracking-wider text-muted-foreground mb-1">
                        {detail.label}
                      </p>
                      {detail.href ? (
                        <a
                          href={detail.href}
                          className="text-xs sm:text-sm text-forest-600 hover:text-gold-500 transition-colors break-words whitespace-pre-line"
                        >
                          {detail.value}
                        </a>
                      ) : (
                        <p className="text-xs sm:text-sm text-forest-600 break-words">
                          {detail.value}
                        </p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-12 sm:pb-16 md:pb-20 lg:pb-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="aspect-[16/9] sm:aspect-[21/9] overflow-hidden rounded-lg border">
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
    </>
  );
}
