import { Link } from "react-router-dom";
import { Check, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";

const Services = () => {
  return (
    <Layout>
      <section className="pt-20 pb-12 px-4 bg-brand-50">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-tight mb-6">
            Clear Pricing. Expert Guidance.
          </h1>
          <p className="text-xl text-muted-foreground">
            Enterprise-grade accessibility auditing sized and priced for small business realities.
          </p>
        </div>
      </section>

      {/* Process — numbered typography, no cards */}
      <section className="px-4 bg-background" style={{ paddingTop: 'var(--space-section)', paddingBottom: 'var(--space-section)' }}>
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Our Process</h2>
            <p className="text-lg text-muted-foreground">How we move you from exposed to protected.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { num: "1", title: "You tell us what happened", desc: "Demand letter, customer complaint, or proactive protection." },
              { num: "2", title: "We audit your site", desc: "Automated scanning + screen reader + keyboard testing + expert review." },
              { num: "3", title: "You get a playbook", desc: "Prioritized, step-by-step with screenshots and platform instructions." },
              { num: "4", title: "You fix it", desc: "With our support — weekly check-ins, prioritization, and legal documentation." },
            ].map((step) => (
              <div key={step.num}>
                <div className="text-6xl font-serif font-bold text-brand-200 mb-4">{step.num}</div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="px-4 bg-muted/30 border-y border-border" style={{ paddingTop: 'var(--space-section)', paddingBottom: 'var(--space-section)' }}>
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 — Panic Button */}
            <div className="rounded-2xl p-8 bg-background border border-border flex flex-col">
              <h3 className="text-2xl font-bold">Panic Button</h3>
              <div className="text-3xl font-serif mt-2 text-foreground">$2,500</div>
              <p className="text-accent-red font-medium text-sm mt-3">Best for: demand letter received this week</p>
              <p className="text-muted-foreground text-sm mt-1">Timeline: 7 business days</p>
              <ul className="mt-6 space-y-3 flex-1">
                {[
                  "Audit of 5–10 critical pages",
                  "Top 20 issues prioritized by legal risk",
                  "Quick-fix instructions",
                  "Compliance posture statement",
                  "1 check-in call",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-brand-600 shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-sm text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-6 border-t border-border">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center w-full font-medium border border-border bg-background h-12 rounded-md hover:bg-muted transition-colors"
                >
                  Select Plan
                </Link>
              </div>
            </div>

            {/* Card 2 — Fix It Right (highlighted) */}
            <div className="rounded-2xl p-8 bg-background border-2 border-primary shadow-md flex flex-col relative">
              <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium whitespace-nowrap">
                Most Popular
              </span>
              <h3 className="text-2xl font-bold">Fix It Right</h3>
              <div className="text-3xl font-serif mt-2 text-foreground">$5,000</div>
              <p className="font-medium text-sm mt-3">Best for: fix accessibility properly</p>
              <p className="text-muted-foreground text-sm mt-1">Timeline: 8-week engagement</p>
              <ul className="mt-6 space-y-3 flex-1">
                {[
                  "Audit of up to 30 pages (automated + NVDA/JAWS + keyboard + manual)",
                  "Full remediation playbook with annotated screenshots",
                  "Prioritized roadmap",
                  "Weekly check-in calls (8 total)",
                  "Compliance documentation package",
                  "Overlay assessment and removal plan",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-brand-600 shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-sm text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-6 border-t border-border">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center w-full font-medium bg-primary text-primary-foreground h-12 rounded-md hover:bg-brand-700 transition-colors"
                >
                  Select Plan
                </Link>
              </div>
            </div>

            {/* Card 3 — Stay Protected */}
            <div className="rounded-2xl p-8 bg-background border border-border flex flex-col">
              <h3 className="text-2xl font-bold">Stay Protected</h3>
              <div className="text-3xl font-serif mt-2 text-foreground">$8,000</div>
              <p className="text-accent-red font-medium text-sm mt-3">Best for: sued before or staying ahead</p>
              <p className="text-muted-foreground text-sm mt-1">Timeline: 12-week + 1-year health check</p>
              <ul className="mt-6 space-y-3 flex-1">
                {[
                  "Everything in Fix It Right + 50 pages",
                  "iOS VoiceOver mobile testing",
                  "Design-level recommendations",
                  "Post-remediation QA audit",
                  "1-year follow-up health check",
                  "Ongoing compliance documentation",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-brand-600 shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-sm text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-6 border-t border-border">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center w-full font-medium border border-border bg-background h-12 rounded-md hover:bg-muted transition-colors"
                >
                  Select Plan
                </Link>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center font-medium bg-primary text-primary-foreground h-12 px-8 rounded-md hover:bg-brand-700 transition-colors"
            >
              Select a Plan
            </Link>
          </div>

          {/* Add-On */}
          <div className="mt-12 border-t-2 border-brand-300 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 max-w-4xl mx-auto">
            <div>
              <h3 className="text-lg font-bold flex items-center gap-2">
                Add-On: Overlay Removal <span className="text-muted-foreground font-normal ml-2">$1,500</span>
              </h3>
              <p className="text-sm text-muted-foreground mt-2 max-w-xl">
                Systematic removal of accessiBe/UserWay/similar, re-audit revealing what overlay was hiding, before/after documentation, and remediation guidance for masked issues.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 text-sm font-medium border border-border bg-background h-10 px-4 rounded-md hover:bg-muted transition-colors shrink-0"
            >
              Add to Plan
            </Link>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="px-4 bg-background" style={{ paddingTop: 'var(--space-section)', paddingBottom: 'var(--space-section)' }}>
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold mb-4">What You Actually Get</h2>
            <p className="text-lg text-muted-foreground">Deliverables designed for action, not just a list of errors.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[
              { title: "Executive Summary", desc: "60-second read: how many issues, how serious, what to fix first." },
              { title: "Prioritized Issue List", desc: "Every issue ranked by legal risk and severity, not just WCAG codes." },
              { title: "Remediation Playbook", desc: "Step-by-step fix instructions with screenshots for Shopify/WooCommerce/Squarespace." },
              { title: "Compliance Posture Statement", desc: "Language your attorney can use to demonstrate good-faith remediation." },
            ].map((item) => (
              <div key={item.title} className="pt-4 border-t border-brand-200">
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-4 bg-brand-900 text-brand-50 text-center" style={{ paddingTop: 'var(--space-section-dramatic)', paddingBottom: 'var(--space-section-dramatic)' }}>
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-brand-50">
            Not sure which tier you need?
          </h2>
          <p className="text-xl text-brand-200 mb-8">
            Reach out and we'll help you figure it out.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 font-medium bg-brand-50 text-brand-900 h-14 px-8 text-lg rounded-md hover:bg-brand-100 transition-colors"
          >
            Get in Touch
            <ArrowRight className="ml-2 w-5 h-5" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
