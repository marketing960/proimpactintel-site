"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import { Container } from "@/components/layout/container";
import { FadeIn } from "@/components/animations/fade-in";

const solutions = [
  {
    tagline: "Institutional Credibility",
    title: "Investor Relations",
    description:
      "We help public issuers build and sustain relationships with institutional investors through strategic messaging, quarterly narratives, and market communications designed for boardroom clarity.",
    features: [
      "Quarterly earnings narrative development",
      "Board-ready investor presentations",
      "Roadshow and non-deal roadshow support",
      "Analyst and investor targeting strategy",
      "Compliance-first disclosure messaging",
      "Capital markets visibility programs",
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    imageAlt: "Professional investor relations",
    imageFirst: false,
  },
  {
    tagline: "Media & Visibility",
    title: "Media & PR",
    description:
      "Our media and public relations programs place your story in front of the right audiences. We craft press releases, manage media relationships, and coordinate coverage that builds credibility.",
    features: [
      "Press release drafting and distribution",
      "Media relationship development",
      "Earned media placement strategy",
      "Crisis communications preparedness",
      "Executive spokesperson training",
      "Industry and trade media engagement",
    ],
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80",
    imageAlt: "Media and PR strategy",
    imageFirst: true,
  },
  {
    tagline: "Strategic Messaging",
    title: "Corporate Communications",
    description:
      "From internal alignment to external positioning, we develop corporate communications frameworks that ensure your narrative is consistent, credible, and compelling across all touchpoints.",
    features: [
      "Corporate narrative development",
      "Internal communications programs",
      "Stakeholder messaging alignment",
      "ESG and sustainability communications",
      "M&A and transaction communications",
      "Executive thought leadership",
    ],
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
    imageAlt: "Corporate communications",
    imageFirst: false,
  },
  {
    tagline: "Digital Authority",
    title: "Digital & Brand Strategy",
    description:
      "We build digital and brand programs that convert visibility into confidence. From web presence to content strategy, we create systems that support your market positioning.",
    features: [
      "Website strategy and architecture",
      "Brand identity and positioning",
      "Content strategy and development",
      "Social media programs",
      "Thought leadership platforms",
      "Authority-driven SEO",
    ],
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
    imageAlt: "Digital and brand strategy",
    imageFirst: true,
  },
];

export default function SolutionsPage() {
  return (
    <>
      {/* ── HERO ────────────────────────────────────── */}
      <section className="section bg-background">
        <Container>
          <FadeIn className="max-w-3xl">
            <p className="label-caps text-accent mb-4">Solutions</p>
            <h1 className="heading-xl text-foreground mb-6">
              Comprehensive communications capabilities
            </h1>
            <p className="text-lg text-foreground-muted leading-relaxed">
              From investor relations to digital strategy, we deliver integrated
              communications programs built for public issuers and growth companies
              that must project confidence.
            </p>
          </FadeIn>
        </Container>
      </section>

      {/* ── SOLUTION SECTIONS ───────────────────────── */}
      {solutions.map((solution, index) => (
        <section
          key={solution.title}
          className={`section ${index % 2 === 0 ? "bg-background" : "bg-background-elevated"}`}
        >
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {solution.imageFirst ? (
                <>
                  <FadeIn direction="right">
                    <div className="aspect-4/3 relative overflow-hidden rounded-xl premium-panel">
                      <Image
                        src={solution.image}
                        alt={solution.imageAlt}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </FadeIn>
                  <FadeIn direction="left">
                    <SolutionContent solution={solution} />
                  </FadeIn>
                </>
              ) : (
                <>
                  <FadeIn direction="right">
                    <SolutionContent solution={solution} />
                  </FadeIn>
                  <FadeIn direction="left">
                    <div className="aspect-4/3 relative overflow-hidden rounded-xl premium-panel">
                      <Image
                        src={solution.image}
                        alt={solution.imageAlt}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </FadeIn>
                </>
              )}
            </div>
          </Container>
        </section>
      ))}

      {/* ── CTA ─────────────────────────────────────── */}
      <section className="section bg-background-strong text-white relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern-fade opacity-15" />
        <Container className="relative text-center max-w-3xl">
          <FadeIn>
            <h2 className="heading-lg mb-6 text-white">
              Ready to amplify your presence?
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

function SolutionContent({
  solution,
}: {
  solution: (typeof solutions)[0];
}) {
  return (
    <div>
      <p className="label-caps text-accent mb-4">{solution.tagline}</p>
      <h2 className="heading-lg text-foreground mb-6">{solution.title}</h2>
      <p className="text-foreground-muted text-lg leading-relaxed mb-8">
        {solution.description}
      </p>
      <ul className="space-y-3 mb-10">
        {solution.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <Check className="w-5 h-5 text-accent mt-0.5 shrink-0" />
            <span className="text-foreground-muted">{feature}</span>
          </li>
        ))}
      </ul>
      <Link
        href="/contact"
        className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all"
      >
        Discuss your needs
        <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
}
