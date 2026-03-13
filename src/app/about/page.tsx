"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { FadeIn } from "@/components/animations/fade-in";
import { ANIMATION } from "@/lib/constants";

const values = [
  {
    number: "01",
    title: "Integrity First",
    description:
      "We hold ourselves to the highest standards of transparency and honesty. Every recommendation and execution reflects our commitment to doing what is right for our clients and their stakeholders.",
  },
  {
    number: "02",
    title: "Client Partnership",
    description:
      "We work alongside leadership teams as true partners, not vendors. Deep collaboration ensures strategies are rooted in your goals and executed with precision.",
  },
  {
    number: "03",
    title: "Precision Execution",
    description:
      "From messaging frameworks to campaign delivery, we bring institutional-grade discipline. Details matter, and we ensure nothing falls through the cracks.",
  },
  {
    number: "04",
    title: "Measurable Impact",
    description:
      "We define success in clear metrics. Our programs are built to generate tangible outcomes—visibility, credibility, and stakeholder confidence.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ── HERO ────────────────────────────────────── */}
      <section className="section bg-background">
        <Container>
          <FadeIn className="max-w-3xl">
            <p className="label-caps text-accent mb-4">About Us</p>
            <h1 className="heading-xl text-foreground mb-6">
              Building trust through clarity
            </h1>
            <p className="text-lg text-foreground-muted leading-relaxed">
              Pro Impact Intel was founded on a simple belief: public issuers and growth
              companies deserve communications that match their ambition. We combine
              institutional expertise with modern execution to help leadership teams
              build lasting stakeholder confidence.
            </p>
          </FadeIn>
        </Container>
      </section>

      {/* ── STORY ───────────────────────────────────── */}
      <section className="section bg-background-elevated">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="right">
              <div className="aspect-4/5 relative overflow-hidden rounded-xl premium-panel">
                <Image
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
                  alt="Professional team collaboration"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>

            <FadeIn direction="left">
              <p className="label-caps text-accent mb-4">Our Story</p>
              <h2 className="heading-lg text-foreground mb-8">A Clear Mission</h2>
              <div className="space-y-6 text-foreground-muted text-lg leading-relaxed">
                <p>
                  We started with a singular focus: to serve public issuers and growth
                  companies with communications that earn trust. Too often, companies
                  with strong fundamentals were under-represented in the market because
                  their narratives lacked the clarity and credibility required by
                  institutional audiences.
                </p>
                <p>
                  Over the years, we have grown alongside our clients—helping them
                  navigate IPOs, secondary offerings, M&A cycles, and sustained market
                  presence. Our approach has remained consistent: strategic rigor,
                  senior-led execution, and a commitment to measurable outcomes.
                </p>
                <p>
                  Today, we serve public issuers across North America, from TSXV and
                  CSE explorers to NASDAQ-listed growth companies. We exist to amplify
                  your presence with integrity and precision.
                </p>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* ── VALUES ─────────────────────────────────── */}
      <section className="section bg-background">
        <Container>
          <FadeIn className="text-center mb-16">
            <p className="label-caps text-accent mb-4">What We Stand For</p>
            <h2 className="heading-lg text-foreground">Values That Guide Us</h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, i) => (
              <FadeIn key={value.title} delay={i * ANIMATION.stagger}>
                <div className="premium-panel p-8 h-full">
                  <span className="text-accent font-display text-2xl font-medium mb-4 block">
                    {value.number}
                  </span>
                  <h3 className="heading-sm text-foreground mb-3">{value.title}</h3>
                  <p className="text-foreground-muted leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* ── CTA ─────────────────────────────────────── */}
      <section className="section bg-background-strong text-white relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern-fade opacity-15" />
        <Container className="relative text-center max-w-3xl">
          <FadeIn>
            <h2 className="heading-lg mb-6 text-white">
              Ready to work together?
            </h2>
            <p className="text-lg md:text-xl text-white/70 mb-10 leading-relaxed">
              If your communications need to project confidence at board, investor,
              and market level, we should talk.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 bg-white text-background-strong px-8 py-4 text-sm font-semibold rounded-lg hover:bg-accent hover:text-white transition-all"
            >
              Start a Conversation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
