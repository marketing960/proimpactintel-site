"use client";

import Link from "next/link";
import { FadeIn } from "@/components/animations/fade-in";
import { SITE_CONFIG } from "@/lib/constants";

export default function TermsPage() {
  return (
    <FadeIn>
      <h1 className="heading-lg text-foreground mb-2">Terms of Service</h1>
      <p className="text-foreground-muted mb-12">
        Effective date: January 1, 2025
      </p>

      <div className="prose prose-neutral dark:prose-invert max-w-none space-y-10">
        <section>
          <h2 className="heading-sm text-foreground mb-4">
            Company Overview
          </h2>
          <p className="text-foreground-muted leading-relaxed">
            Pro Impact Intel provides strategic marketing, corporate
            communications, and investor relations advisory services to public
            issuers and growth-stage companies across North America. These terms
            govern your use of our website and services.
          </p>
        </section>

        <section>
          <h2 className="heading-sm text-foreground mb-4">
            Services Provided
          </h2>
          <p className="text-foreground-muted leading-relaxed">
            Our services include strategic marketing, social media management,
            corporate communications, brand visibility, investor relations,
            compliance messaging, content strategy, and related advisory. The
            scope and terms of specific engagements are set forth in separate
            agreements.
          </p>
        </section>

        <section>
          <h2 className="heading-sm text-foreground mb-4">
            Compliance With Canadian Law
          </h2>
          <p className="text-foreground-muted leading-relaxed">
            We operate in compliance with applicable Canadian securities laws
            and regulations. Our communications and marketing services are
            designed to support issuers in meeting their disclosure and
            promotional obligations. Clients remain responsible for ensuring
            their own compliance with applicable laws.
          </p>
        </section>

        <section>
          <h2 className="heading-sm text-foreground mb-4">
            No Financial Advice
          </h2>
          <p className="text-foreground-muted leading-relaxed">
            Pro Impact Intel does not provide investment, financial, or legal
            advice. Our services are limited to marketing, communications, and
            advisory support. Nothing we provide constitutes a recommendation to
            buy, sell, or hold any security. Consult qualified professionals
            for investment and legal decisions.
          </p>
        </section>

        <section>
          <h2 className="heading-sm text-foreground mb-4">
            Limitation of Liability
          </h2>
          <p className="text-foreground-muted leading-relaxed">
            To the fullest extent permitted by law, Pro Impact Intel shall not be
            liable for any indirect, incidental, special, consequential, or
            punitive damages arising from your use of our services or website.
            Our total liability for any claim shall not exceed the fees paid by
            you for the relevant services in the twelve months preceding the
            claim.
          </p>
        </section>

        <section>
          <h2 className="heading-sm text-foreground mb-4">Contact</h2>
          <p className="text-foreground-muted leading-relaxed">
            For questions about these Terms of Service, please contact us at{" "}
            <Link
              href={`mailto:${SITE_CONFIG.email}`}
              className="text-accent hover:underline"
            >
              {SITE_CONFIG.email}
            </Link>
            .
          </p>
        </section>
      </div>
    </FadeIn>
  );
}
