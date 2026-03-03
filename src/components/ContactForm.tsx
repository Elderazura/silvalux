"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-lg border border-forest-200 bg-forest-50 p-6 sm:p-8 text-center">
        <h3 className="mb-2 font-serif text-lg sm:text-xl font-semibold text-forest-600">
          Thank You!
        </h3>
        <p className="text-sm sm:text-base text-muted-foreground">
          We&apos;ve received your message and will get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
      <div className="grid gap-4 sm:gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="mb-1.5 block text-xs sm:text-sm font-medium text-forest-600"
          >
            Full Name
          </label>
          <Input
            id="name"
            placeholder="Your name"
            required
            className="border-forest-200 focus-visible:ring-gold-400 min-h-[44px]"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="mb-1.5 block text-xs sm:text-sm font-medium text-forest-600"
          >
            Email
          </label>
          <Input
            id="email"
            type="email"
            placeholder="your@email.com"
            required
            className="border-forest-200 focus-visible:ring-gold-400 min-h-[44px]"
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="phone"
          className="mb-1.5 block text-xs sm:text-sm font-medium text-forest-600"
        >
          Phone Number
        </label>
        <Input
          id="phone"
          type="tel"
          placeholder="+91 XXXXX XXXXX"
          className="border-forest-200 focus-visible:ring-gold-400 min-h-[44px]"
        />
      </div>
      <div>
        <label
          htmlFor="message"
          className="mb-1.5 block text-xs sm:text-sm font-medium text-forest-600"
        >
          Message
        </label>
        <Textarea
          id="message"
          placeholder="Tell us about your plans or any questions you have..."
          rows={4}
          required
          className="border-forest-200 focus-visible:ring-gold-400 min-h-[100px] sm:min-h-[120px]"
        />
      </div>
      <Button
        type="submit"
        className="w-full sm:w-auto bg-forest-600 text-cream hover:bg-forest-700 px-6 sm:px-8 min-h-[44px]"
      >
        Send Message
      </Button>
    </form>
  );
}
