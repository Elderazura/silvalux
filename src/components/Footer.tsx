import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { NAV_LINKS, RESORT_INFO } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-forest-600 text-cream/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10 sm:py-12 md:py-16">
        <div className="grid gap-8 sm:gap-10 md:gap-12 sm:grid-cols-2 md:grid-cols-3">
          <div className="sm:col-span-2 md:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/assets/logo/logo_sl.png"
                alt="Silva Lux Resort"
                width={120}
                height={120}
                className="h-16 sm:h-20 w-auto"
              />
            </Link>
            <p className="text-sm leading-relaxed text-cream/60 max-w-xs">
              {RESORT_INFO.description}
            </p>
          </div>

          <div>
            <h4 className="mb-3 sm:mb-4 text-sm font-semibold uppercase tracking-wider text-gold-400">
              Quick Links
            </h4>
            <nav aria-label="Footer navigation" className="grid grid-cols-2 gap-x-4 gap-y-2 sm:flex sm:flex-col sm:gap-2">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm transition-colors hover:text-gold-400 py-0.5 min-h-[36px] flex items-center sm:min-h-0"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="mb-3 sm:mb-4 text-sm font-semibold uppercase tracking-wider text-gold-400">
              Contact Us
            </h4>
            <div className="flex flex-col gap-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                <span className="break-words">{RESORT_INFO.address}</span>
              </div>
              {RESORT_INFO.phone.map((p) => (
                <div key={p} className="flex items-center gap-3">
                  <Phone className="h-4 w-4 shrink-0 text-gold-400" />
                  <a
                    href={`tel:${p.replace(/\s/g, "")}`}
                    className="hover:text-gold-400 transition-colors min-h-[44px] flex items-center"
                  >
                    {p}
                  </a>
                </div>
              ))}
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-gold-400" />
                <a
                  href={`mailto:${RESORT_INFO.email}`}
                  className="hover:text-gold-400 transition-colors break-all"
                >
                  {RESORT_INFO.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-6 sm:my-8 bg-cream/10" />

        <p className="text-center text-xs text-cream/40">
          &copy; {new Date().getFullYear()} Silva Lux Resort. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
