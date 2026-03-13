"use client";

import { useState } from "react";
import { Sparkles } from "lucide-react";
import { Container } from "@/components/layout/container";
import { FadeIn } from "@/components/animations/fade-in";
import { Input } from "@/components/ui/input";

const auditItems = [
  {
    title: "Brand Perception Score",
    description:
      "A data-driven assessment of how investors and stakeholders currently perceive your brand across key channels.",
  },
  {
    title: "Competitor Visibility Map",
    description:
      "See how your digital presence compares to peers in your sector and identify gaps and opportunities.",
  },
  {
    title: "Digital Presence Assessment",
    description:
      "A comprehensive review of your website, social channels, and investor materials with actionable recommendations.",
  },
  {
    title: "Custom Recommendations",
    description:
      "Prioritized next steps tailored to your goals, timeline, and resources.",
  },
];

export default function VisibilityAuditPage() {
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic can be added here
  };

  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-background-strong" />
        <div className="absolute inset-0 grid-pattern-fade opacity-40" />
        <Container className="relative z-10">
          <FadeIn>
            <p className="label-caps text-accent mb-4">Free Visibility Audit</p>
            <h1 className="heading-xl text-foreground mb-6">
              Discover How the Market Really Sees You
            </h1>
            <p className="text-lg text-foreground-muted max-w-2xl">
              Get a personalized audit of your brand&apos;s visibility and
              perception. We&apos;ll analyze your digital presence and deliver
              actionable insights—no obligation.
            </p>
          </FadeIn>
        </Container>
      </section>

      {/* What You'll Receive */}
      <section className="section bg-background">
        <Container>
          <FadeIn className="text-center mb-16">
            <h2 className="heading-lg text-foreground mb-4">
              What You&apos;ll Receive
            </h2>
            <p className="text-foreground-muted max-w-2xl mx-auto">
              A comprehensive visibility assessment delivered to your inbox.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {auditItems.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.08}>
                <div className="premium-panel p-8 h-full">
                  <h3 className="heading-sm text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-foreground-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Form */}
      <section className="section bg-background-elevated">
        <Container>
          <FadeIn>
            <div className="premium-panel p-8 md:p-12 max-w-xl mx-auto">
              <h2 className="heading-md text-foreground mb-6 text-center">
                Request Your Free Audit
              </h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Company name
                  </label>
                  <Input
                    id="company"
                    type="text"
                    placeholder="Your company name"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    className="h-11"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-11"
                  />
                </div>
                <div>
                  <label
                    htmlFor="website"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Website URL
                  </label>
                  <Input
                    id="website"
                    type="url"
                    placeholder="https://yourcompany.com"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                    className="h-11"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 text-sm font-semibold rounded-lg hover:opacity-90 transition-all"
                >
                  Request My Free Audit
                  <Sparkles className="w-4 h-4" />
                </button>
              </form>
            </div>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
