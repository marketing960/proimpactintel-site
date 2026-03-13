"use client";

import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { ArrowRight, CheckCircle2, TrendingUp, Shield, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";
import { Container } from "@/components/layout/container";
import { FadeIn } from "@/components/animations/fade-in";
import { SITE_CONFIG, ANIMATION } from "@/lib/constants";

const ParticleField = dynamic(
  () => import("@/components/animations/particle-field").then((m) => m.ParticleField),
  { ssr: false }
);

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: ANIMATION.duration, ease: ANIMATION.ease },
  },
};

const stagger = {
  visible: { transition: { staggerChildren: ANIMATION.stagger } },
};

const capabilities = [
  {
    icon: TrendingUp,
    title: "Investor Relations Strategy",
    description:
      "Board-ready messaging, quarterly narratives, and market communications built for institutional credibility.",
  },
  {
    icon: Shield,
    title: "Executive Communications",
    description:
      "Position leadership with precise, high-trust language across media, investors, and stakeholders.",
  },
  {
    icon: BarChart3,
    title: "Digital Authority Systems",
    description:
      "Premium web and content programs that convert visibility into confidence and qualified demand.",
  },
];

const proofMetrics = [
  { value: "150+", label: "Companies advised" },
  { value: "$2.5B", label: "Market cap supported" },
  { value: "500+", label: "Press releases crafted" },
  { value: "15 yrs", label: "Strategic track record" },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=85"
            alt="Modern corporate architecture"
            fill
            className="object-cover scale-[1.03]"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-r from-background/95 via-background/80 to-background/30" />
          <div className="absolute inset-0 grid-pattern-fade opacity-40" />
        </div>

        <ParticleField className="absolute inset-0 pointer-events-none opacity-60" />

        <Container className="relative z-10 pt-28 pb-20">
          <motion.div
            className="max-w-2xl"
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <motion.p
              className="label-caps text-accent mb-5"
              variants={fadeInUp}
            >
              Strategic Communications Advisory
            </motion.p>

            <motion.h1 className="heading-xl mb-8 text-foreground" variants={fadeInUp}>
              Build a market presence that looks unmistakably institutional.
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-foreground-muted mb-10 leading-relaxed max-w-xl"
              variants={fadeInUp}
            >
              We advise public issuers and growth companies on investor relations,
              executive messaging, and authority-driven digital communication.
            </motion.p>

            <motion.div className="flex flex-wrap items-center gap-4" variants={fadeInUp}>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 text-sm font-semibold rounded-lg hover:opacity-90 transition-all"
              >
                Start a Conversation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-3 border border-primary text-primary px-8 py-4 text-sm font-semibold rounded-lg hover:bg-primary hover:text-primary-foreground transition-all"
              >
                View Outcomes
              </Link>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* ── TRUSTED BY ──────────────────────────────── */}
      <section className="py-14 bg-background-elevated border-y border-border">
        <Container>
          <p className="label-caps text-foreground-subtle text-center mb-10">
            Trusted by Leadership Teams
          </p>
          <div className="flex justify-center items-center">
            <Link
              href="https://ptxmetals.com"
              target="_blank"
              rel="noopener noreferrer"
              className="premium-panel px-10 py-6 hover:-translate-y-0.5 transition-all"
            >
              <Image
                src="/logos/ptx-metals.png"
                alt="PTX Metals Inc."
                width={140}
                height={50}
                className="h-9 w-auto object-contain"
              />
            </Link>
          </div>
        </Container>
      </section>

      {/* ── ABOUT / POSITIONING ─────────────────────── */}
      <section className="section bg-background">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="right">
              <p className="label-caps text-accent mb-4">Market Positioning Partner</p>
              <h2 className="heading-lg mb-6 text-foreground">
                Strategic communications for companies that must lead, not follow.
              </h2>
              <div className="space-y-4 text-foreground-muted text-lg leading-relaxed">
                <p>
                  Pro Impact Intel delivers investor relations, corporate communications,
                  and strategic marketing support for public issuers and growth-stage
                  companies across North America.
                </p>
                <p>
                  We combine institutional rigor with modern execution so your narrative
                  earns trust from investors, media, and prospective stakeholders.
                </p>
              </div>
              <div className="mt-8 space-y-3">
                {[
                  "Compliance-first messaging standards",
                  "Senior-led strategy from discovery to delivery",
                  "Cross-channel execution under one advisory partner",
                ].map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                    <span className="text-foreground-muted">{point}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 mt-9 text-accent font-semibold hover:gap-3 transition-all"
              >
                Learn more about our firm <ArrowRight className="w-4 h-4" />
              </Link>
            </FadeIn>

            <FadeIn direction="left">
              <div className="aspect-4/5 relative overflow-hidden rounded-xl premium-panel">
                <Image
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=900&q=85"
                  alt="Professional executive"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* ── PROOF METRICS ───────────────────────────── */}
      <section className="py-24 bg-background-strong text-white">
        <Container>
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            {proofMetrics.map((stat) => (
              <motion.div key={stat.label} className="text-center" variants={fadeInUp}>
                <p className="font-display text-4xl md:text-5xl font-medium mb-2 text-accent">
                  {stat.value}
                </p>
                <p className="text-sm text-white/60 uppercase tracking-widest">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* ── CAPABILITIES ────────────────────────────── */}
      <section className="section bg-background-elevated">
        <Container>
          <FadeIn className="text-center mb-16">
            <p className="label-caps text-accent mb-4">Core Capabilities</p>
            <h2 className="heading-lg text-foreground">Services Engineered for Authority</h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {capabilities.map((service, i) => (
              <FadeIn key={service.title} delay={i * 0.08}>
                <div className="premium-panel p-8 h-full flex flex-col">
                  <div className="w-12 h-12 rounded-xl bg-accent-soft flex items-center justify-center mb-5">
                    <service.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="heading-sm mb-3 text-foreground">{service.title}</h3>
                  <p className="text-foreground-muted leading-relaxed mb-6 flex-1">
                    {service.description}
                  </p>
                  <Link
                    href="/solutions"
                    className="inline-flex items-center gap-2 text-sm text-accent font-semibold hover:gap-3 transition-all"
                  >
                    Explore service <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* ── CASE STUDY SPOTLIGHT ────────────────────── */}
      <section className="section bg-background">
        <Container>
          <FadeIn className="mb-12">
            <p className="label-caps text-accent mb-4">Featured Outcome</p>
            <h2 className="heading-lg text-foreground">Execution That Moves Perception</h2>
          </FadeIn>

          <FadeIn>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="aspect-4/3 relative overflow-hidden rounded-xl premium-panel">
                  <Image
                    src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=900&q=80"
                    alt="Mining operations"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute bottom-5 left-5 premium-panel px-4 py-3">
                  <Image
                    src="/logos/ptx-metals.png"
                    alt="PTX Metals"
                    width={110}
                    height={40}
                    className="h-8 w-auto"
                  />
                </div>
              </div>

              <div>
                <p className="label-caps text-foreground-subtle mb-4">Mining &middot; TSXV: PTX</p>
                <h3 className="heading-md mb-4 text-foreground">
                  Marketing plan and complete website redesign
                </h3>
                <p className="text-foreground-muted text-lg leading-relaxed mb-6">
                  We repositioned a TSXV-listed explorer with a full narrative refresh,
                  stronger investor-facing architecture, and an authority-first digital
                  platform built for credibility.
                </p>
                <Link
                  href="/case-studies"
                  className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all"
                >
                  Read case study <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* ── CTA ─────────────────────────────────────── */}
      <section className="py-24 bg-background-strong text-white relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern-fade opacity-15" />
        <Container className="relative text-center max-w-3xl">
          <FadeIn>
            <h2 className="heading-lg mb-6 text-white">
              Ready to look like the category leader?
            </h2>
            <p className="text-lg md:text-xl text-white/70 mb-10 leading-relaxed">
              If your communications need to project confidence at board, investor,
              and market level, we should talk.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 bg-white text-background-strong px-8 py-4 text-sm font-semibold rounded-lg hover:bg-accent hover:text-white transition-all"
            >
              Book a strategy call
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
