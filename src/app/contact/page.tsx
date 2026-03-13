"use client";

import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/layout/container";
import { FadeIn } from "@/components/animations/fade-in";
import { SITE_CONFIG } from "@/lib/constants";

const SERVICE_OPTIONS = [
  "Investor Relations",
  "Media & PR",
  "Corporate Communications",
  "Digital & Brand Strategy",
  "Website Redesign",
  "Other",
] as const;

export default function ContactPage() {
  const fullAddress = `${SITE_CONFIG.address.street}, ${SITE_CONFIG.address.city}, ${SITE_CONFIG.address.province} ${SITE_CONFIG.address.postalCode}, ${SITE_CONFIG.address.country}`;

  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-20 bg-background">
        <Container>
          <FadeIn className="text-center max-w-2xl mx-auto">
            <p className="label-caps text-accent mb-4">Contact</p>
            <h1 className="heading-xl text-foreground mb-6">
              Let&apos;s start a conversation
            </h1>
            <p className="text-lg text-foreground-muted leading-relaxed">
              We respond to all inquiries within one business day. Reach out to discuss
              your communications goals or schedule a strategy call.
            </p>
          </FadeIn>
        </Container>
      </section>

      {/* 2-section layout */}
      <section className="section bg-background-elevated">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Left column — contact info */}
            <div className="space-y-8">
              <FadeIn direction="right">
                <div className="space-y-6">
                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="flex items-start gap-4 text-foreground-muted hover:text-accent transition-colors"
                  >
                    <Mail className="w-5 h-5 shrink-0 mt-0.5 text-accent" />
                    <span>{SITE_CONFIG.email}</span>
                  </a>
                  <a
                    href={`tel:${SITE_CONFIG.phone.replace(/\s/g, "")}`}
                    className="flex items-start gap-4 text-foreground-muted hover:text-accent transition-colors"
                  >
                    <Phone className="w-5 h-5 shrink-0 mt-0.5 text-accent" />
                    <span>{SITE_CONFIG.phone}</span>
                  </a>
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(fullAddress)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 text-foreground-muted hover:text-accent transition-colors"
                  >
                    <MapPin className="w-5 h-5 shrink-0 mt-0.5 text-accent" />
                    <span>{fullAddress}</span>
                  </a>
                </div>
              </FadeIn>

              <FadeIn direction="right" delay={0.1}>
                <div className="premium-panel p-6">
                  <h3 className="heading-sm text-foreground mb-4">Office Hours</h3>
                  <p className="text-foreground-muted">
                    Monday – Friday
                    <br />
                    9:00 AM – 6:00 PM EST
                  </p>
                </div>
              </FadeIn>
            </div>

            {/* Right column — form (lg:col-span-2) */}
            <FadeIn className="lg:col-span-2">
              <div className="premium-panel p-8 md:p-10">
                <h2 className="heading-md text-foreground mb-8">Send Us a Message</h2>
                <form className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        First Name
                      </label>
                      <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        required
                        className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:border-accent focus:ring-1 focus:ring-accent/30 focus:outline-none transition-colors"
                        placeholder="First name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Last Name
                      </label>
                      <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        required
                        className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:border-accent focus:ring-1 focus:ring-accent/30 focus:outline-none transition-colors"
                        placeholder="Last name"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:border-accent focus:ring-1 focus:ring-accent/30 focus:outline-none transition-colors"
                      placeholder="you@company.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Company
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:border-accent focus:ring-1 focus:ring-accent/30 focus:outline-none transition-colors"
                      placeholder="Company name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Service
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:border-accent focus:ring-1 focus:ring-accent/30 focus:outline-none transition-colors"
                    >
                      {SERVICE_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:border-accent focus:ring-1 focus:ring-accent/30 focus:outline-none transition-colors resize-y"
                      placeholder="Tell us about your project or inquiry..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-all"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>
    </>
  );
}
