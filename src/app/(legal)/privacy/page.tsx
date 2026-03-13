"use client";

import Link from "next/link";
import { FadeIn } from "@/components/animations/fade-in";
import { SITE_CONFIG } from "@/lib/constants";

export default function PrivacyPage() {
  return (
    <FadeIn>
      <h1 className="heading-lg text-foreground mb-2">Privacy Policy</h1>
      <p className="text-foreground-muted mb-12">
        Effective date: January 1, 2025
      </p>

      <div className="prose prose-neutral dark:prose-invert max-w-none space-y-10">
        <section>
          <h2 className="heading-sm text-foreground mb-4">
            Information We Collect
          </h2>
          <p className="text-foreground-muted leading-relaxed">
            We collect information you provide directly, such as when you
            contact us, request a visibility audit, or subscribe to our
            communications. This may include your name, email address, company
            name, phone number, and any other details you choose to share. We
            also collect information automatically when you visit our website,
            including IP address, browser type, and pages viewed.
          </p>
        </section>

        <section>
          <h2 className="heading-sm text-foreground mb-4">
            How We Use It
          </h2>
          <p className="text-foreground-muted leading-relaxed">
            We use the information we collect to respond to your inquiries,
            deliver requested services, improve our website and services, send
            relevant communications (with your consent), and comply with legal
            obligations. We do not sell your personal information to third
            parties.
          </p>
        </section>

        <section>
          <h2 className="heading-sm text-foreground mb-4">Consent</h2>
          <p className="text-foreground-muted leading-relaxed">
            By providing your information, you consent to its collection and use
            as described in this policy. You may withdraw consent at any time by
            contacting us. Withdrawal of consent does not affect the lawfulness
            of processing based on consent before its withdrawal.
          </p>
        </section>

        <section>
          <h2 className="heading-sm text-foreground mb-4">Disclosure</h2>
          <p className="text-foreground-muted leading-relaxed">
            We may disclose your information to service providers who assist us
            in operating our business, to comply with legal requirements, or to
            protect our rights and safety. We require such parties to maintain
            the confidentiality of your information.
          </p>
        </section>

        <section>
          <h2 className="heading-sm text-foreground mb-4">Contact</h2>
          <p className="text-foreground-muted leading-relaxed">
            For questions about this Privacy Policy or to exercise your privacy
            rights, please contact us at{" "}
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
