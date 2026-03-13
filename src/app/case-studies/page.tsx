"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { FadeIn } from "@/components/animations/fade-in";

const stats = [
  { value: "340%", label: "Avg visibility increase" },
  { value: "150+", label: "Companies served" },
  { value: "$2.5B", label: "Market cap supported" },
  { value: "98%", label: "Retention" },
];

export default function CaseStudiesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-background-strong" />
        <div className="absolute inset-0 grid-pattern-fade opacity-40" />
        <Container className="relative z-10">
          <FadeIn>
            <p className="label-caps text-accent mb-4">Case Studies</p>
            <h1 className="heading-xl text-foreground mb-6">
              Proof of Strategic Impact
            </h1>
            <p className="text-lg text-foreground-muted max-w-2xl">
              Real outcomes from companies we&apos;ve advised. See how we help
              public issuers and growth-stage businesses build market presence
              that earns trust.
            </p>
          </FadeIn>
        </Container>
      </section>

      {/* Stats bar */}
      <section className="py-14 bg-background-elevated border-y border-border">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <FadeIn key={stat.label} delay={i * 0.08}>
                <div className="text-center">
                  <p className="heading-md text-accent mb-1">{stat.value}</p>
                  <p className="label-caps text-foreground-muted">{stat.label}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* Featured case study */}
      <section className="section bg-background">
        <Container>
          <FadeIn>
            <div className="premium-panel rounded-xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative aspect-4/3 lg:aspect-auto min-h-[280px]">
                  <Image
                    src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=900&q=80"
                    alt="PTX Metals mining operations"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <p className="label-caps text-foreground-muted mb-3">
                    PTX Metals · TSXV Mining Explorer
                  </p>
                  <h2 className="heading-md text-foreground mb-4">
                    Marketing plan and complete website redesign
                  </h2>
                  <p className="text-foreground-muted leading-relaxed mb-6">
                    PTX Metals needed to reposition as a credible TSXV-listed
                    explorer. We delivered a full narrative refresh, stronger
                    investor-facing architecture, and an authority-first digital
                    platform built for institutional credibility.
                  </p>
                  <blockquote className="border-l-4 border-accent pl-6 py-2 mb-6 text-foreground-muted italic">
                    &ldquo;Pro Impact Intel transformed how we present ourselves
                    to the market. The clarity and professionalism of our messaging
                    has made a measurable difference in investor engagement.&rdquo;
                  </blockquote>
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <p className="heading-sm text-accent">3.2x</p>
                      <p className="text-sm text-foreground-muted">
                        Website engagement
                      </p>
                    </div>
                    <div>
                      <p className="heading-sm text-accent">+180%</p>
                      <p className="text-sm text-foreground-muted">
                        Investor page views
                      </p>
                    </div>
                    <div>
                      <p className="heading-sm text-accent">12 weeks</p>
                      <p className="text-sm text-foreground-muted">
                        Launch to live
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-24 bg-background-strong text-white relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern-fade opacity-15" />
        <Container className="relative text-center max-w-3xl">
          <FadeIn>
            <h2 className="heading-lg mb-6 text-white">
              Ready to see similar outcomes?
            </h2>
            <p className="text-lg text-white/70 mb-10 leading-relaxed">
              Let&apos;s discuss how we can help your company build a market
              presence that earns trust from investors and stakeholders.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 bg-white text-background-strong px-8 py-4 text-sm font-semibold rounded-lg hover:bg-accent hover:text-white transition-all"
            >
              Start a conversation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
