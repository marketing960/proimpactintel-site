"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { FadeIn } from "@/components/animations/fade-in";
import { Badge } from "@/components/ui/badge";

const INSIGHTS = [
  {
    category: "Investor Relations",
    title: "Building Credibility in Quarterly Narratives",
    excerpt:
      "How public issuers can craft board-ready messaging that resonates with institutional investors and builds lasting trust.",
    date: "March 10, 2025",
  },
  {
    category: "Digital Strategy",
    title: "Authority-First Website Architecture for Public Companies",
    excerpt:
      "A framework for structuring corporate sites that convert visibility into investor confidence and qualified stakeholder engagement.",
    date: "March 5, 2025",
  },
  {
    category: "Corporate Communications",
    title: "Executive Positioning in High-Stakes Markets",
    excerpt:
      "Positioning leadership with precise, high-trust language across media, investors, and stakeholders in regulated industries.",
    date: "February 28, 2025",
  },
  {
    category: "Market Analysis",
    title: "Capital Markets Exposure Without the Noise",
    excerpt:
      "Strategies for gaining meaningful visibility among the right audiences while avoiding the pitfalls of spray-and-pray outreach.",
    date: "February 20, 2025",
  },
  {
    category: "Brand Authority",
    title: "From Compliance to Conviction: Messaging That Moves Perception",
    excerpt:
      "How to elevate compliance-first communications into narratives that differentiate and drive stakeholder conviction.",
    date: "February 12, 2025",
  },
  {
    category: "Crisis Management",
    title: "Rapid Response Frameworks for Public Issuers",
    excerpt:
      "Preparing your communications team for high-pressure scenarios with clear protocols and stakeholder-ready messaging.",
    date: "February 5, 2025",
  },
];

export default function InsightsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-20 bg-background">
        <Container>
          <FadeIn className="text-center max-w-2xl mx-auto">
            <p className="label-caps text-accent mb-4">Insights</p>
            <h1 className="heading-xl text-foreground mb-6">
              Strategic thinking for market leaders
            </h1>
            <p className="text-lg text-foreground-muted leading-relaxed">
              Perspectives on investor relations, corporate communications, and
              authority-driven marketing for public issuers and growth companies.
            </p>
          </FadeIn>
        </Container>
      </section>

      {/* Article grid */}
      <section className="section bg-background-elevated">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {INSIGHTS.map((article, i) => (
              <FadeIn key={article.title} delay={i * 0.08}>
                <article className="premium-panel p-6 h-full flex flex-col">
                  <Badge
                    variant="outline"
                    className="w-fit mb-4 text-foreground-muted border-border"
                  >
                    {article.category}
                  </Badge>
                  <h2 className="heading-sm text-foreground mb-3">{article.title}</h2>
                  <p className="text-foreground-muted text-sm leading-relaxed mb-5 flex-1 line-clamp-2">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-foreground-subtle">{article.date}</span>
                    <Link
                      href="#"
                      className="inline-flex items-center gap-2 text-sm text-accent font-semibold hover:gap-3 transition-all"
                    >
                      Read more
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
