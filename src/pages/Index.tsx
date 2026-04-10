import { Link } from "react-router-dom";
import { ArrowRight, TriangleAlert, Check, ShieldAlert, CircleCheck } from "lucide-react";
import Layout from "@/components/Layout";

const Index = () => {
  return (
    <Layout>
      {/* Fix 5: Red alert bar — committed brand accent */}
      <div role="note" className="w-full bg-accent-red-light border-b border-accent-red/20 py-2.5 px-4">
        <div className="flex items-center justify-center gap-2 text-sm font-medium text-accent-red-dark">
          <TriangleAlert className="w-4 h-4 shrink-0" aria-hidden="true" />
          <span>5,100+ ADA website lawsuits filed in 2025. Is your business next?</span>
        </div>
      </div>

      {/* Fix 9: Hero — full-bleed edge-to-edge, breaking the max-w-5xl monotony */}
      <section className="px-4 bg-brand-50" style={{ paddingTop: 'var(--space-section-dramatic)', paddingBottom: 'var(--space-section-dramatic)' }}>
        <div className="container mx-auto max-w-5xl text-center">
          <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tight text-foreground mb-8 text-balance">
            Your Website Got You Sued.
            <br className="hidden md:block" /> We'll Help You Fix It.
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
            We find what's broken, tell you exactly how to fix it in plain English, and give you the documentation your attorney needs — at a price built for small business, not Fortune 500.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 font-medium bg-primary text-primary-foreground h-14 px-8 text-lg rounded-md w-full sm:w-auto hover:bg-brand-700 transition-colors"
            >
              Get Help Now
              <ArrowRight className="ml-2 w-5 h-5" aria-hidden="true" />
            </Link>
            <a
              href="#how-were-different"
              className="inline-flex items-center justify-center gap-2 font-medium border border-border bg-background h-14 px-8 text-lg rounded-md w-full sm:w-auto hover:bg-muted transition-colors"
            >
              See How We're Different
            </a>
          </div>
        </div>
      </section>

      {/* Fix 6 & 7: Stats — tight spacing, borderless cards with top rule divider */}
      <section className="px-4 bg-background" style={{ paddingTop: 'var(--space-section-tight)', paddingBottom: 'var(--space-section-tight)' }}>
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold tracking-tight mb-4">
              The Accessibility Crisis Hitting Small Business
            </h2>
            <p className="text-xl text-muted-foreground">
              The legal landscape has shifted. Small businesses are now the primary targets.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { num: "10", unit: " min", text: "Every 10 minutes, a small business receives an ADA demand letter — that's 50,000+ per year." },
              { num: "70", unit: "%", text: "64–70% of ADA website lawsuits target companies under $25M in revenue." },
              { num: "#1", unit: "", text: "Restaurants are the #1 most-sued category, accounting for 35% of all filings." },
              { num: "40", unit: "%", text: "40% of businesses that get sued get sued again." },
            ].map((stat, i) => (
              <div key={i} className="pt-6 border-t-2 border-brand-300">
                <div className="text-4xl font-bold text-brand-600 mb-4">
                  {stat.num}
                  {stat.unit && <span className="text-xl text-muted-foreground font-normal">{stat.unit}</span>}
                </div>
                <p className="text-foreground font-medium">{stat.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Overlays section — editorial list, not card */}
      <section className="px-4 bg-brand-900 text-brand-50" style={{ paddingTop: 'var(--space-section)', paddingBottom: 'var(--space-section)' }}>
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <ShieldAlert className="w-16 h-16 text-brand-300 mb-8" aria-hidden="true" />
              <h2 className="text-4xl md:text-5xl font-serif font-bold tracking-tight mb-6 text-balance text-brand-50">
                If Someone Told You to Install a Widget, Read This
              </h2>
              <p className="text-xl text-brand-200 leading-relaxed mb-8">
                Overlays are a band-aid on a broken bone. They modify how your site looks to assistive technology without fixing the underlying problems. That's why courts and regulators aren't buying it — and neither should you.
              </p>
              <Link
                to="/resources/overlays-dont-work"
                className="inline-flex items-center justify-center gap-2 text-sm font-medium bg-brand-50 text-brand-900 h-10 px-8 rounded-md hover:bg-brand-100 transition-colors"
              >
                Read the Full Report
              </Link>
            </div>
            {/* Fix 7: Editorial list, no card wrapper with rounded-2xl */}
            <div className="space-y-6">
              {[
                "The FTC fined accessiBe $1M in January 2025 for misleading accessibility claims.",
                "Overlays are cited as barriers in 25% of ADA lawsuits.",
                "UserWay is facing a class-action lawsuit for failing to provide actual accessibility.",
                "Over 600 accessibility professionals have signed a public statement against overlays.",
              ].map((fact, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-red mt-2.5 flex-shrink-0" />
                  <p className="text-lg text-brand-100">{fact}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How We're Different */}
      <section id="how-were-different" className="px-4 bg-muted/30" style={{ paddingTop: 'var(--space-section)', paddingBottom: 'var(--space-section)' }}>
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold tracking-tight mb-6">
              How We're Different
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The accessibility industry wasn't built for small businesses. We changed that.
            </p>
          </div>
          <div className="bg-background rounded-md border border-border overflow-hidden mb-12">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-muted">
                  <tr>
                    <th className="p-6 font-semibold text-foreground text-lg w-1/3">What's Out There</th>
                    <th className="p-6 font-semibold text-foreground text-lg w-2/3 border-l border-border">The Problem</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[
                    { what: "Overlay widgets", price: "$49–$350/mo", problem: "FTC-fined. Cited as barriers in lawsuits." },
                    { what: "Free scanners", price: "WAVE, Lighthouse", problem: "Only catch 30–40% of issues. Can't interpret the results." },
                    { what: "Freelance auditors", price: "$1,200–$2,700", problem: "Deliver a spreadsheet and disappear. No guidance." },
                    { what: "Enterprise firms", price: "$15K–$50K+", problem: "Built for Fortune 500. Won't take your call." },
                    { what: "Law firms", price: "$2K+/hour", problem: "Handle the legal threat. Don't fix the website." },
                  ].map((row, i) => (
                    <tr key={i}>
                      <td className="p-6 font-medium">
                        {row.what}<br />
                        <span className="text-muted-foreground text-sm font-normal">{row.price}</span>
                      </td>
                      <td className="p-6 text-muted-foreground border-l border-border">{row.problem}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="border-t-2 border-brand-400 pt-8 text-center max-w-3xl mx-auto">
            <CircleCheck className="w-12 h-12 text-brand-600 mx-auto mb-4" aria-hidden="true" />
            <h3 className="text-2xl font-bold mb-2">LetEveryoneIn fills the gap.</h3>
            <p className="text-lg text-muted-foreground">
              Comprehensive audit + plain-English remediation playbook + implementation support.
              <br />
              <strong className="text-foreground mt-2 inline-block">$2,500–$8,000.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Pricing — compact three-card layout */}
      <section className="px-4 bg-background" style={{ paddingTop: 'var(--space-section)', paddingBottom: 'var(--space-section)' }}>
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold tracking-tight mb-6">
              Three Ways We Can Help
            </h2>
            <p className="text-xl text-muted-foreground">
              Tailored solutions based on your urgency and needs.
            </p>
          </div>
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
        </div>
      </section>

      {/* Fix 10: Founder — pull-quote treatment, no border-l-4 */}
      <section className="px-4 bg-muted/30" style={{ paddingTop: 'var(--space-section)', paddingBottom: 'var(--space-section)' }}>
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-4 flex justify-center">
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-brand-200">
                <img
                  alt="Dan Harrison, founder of LetEveryoneIn"
                  className="w-full h-full object-cover"
                  src="https://leteveryonein.com/assets/300x300_1775608612304-n6_Vlqes.png"
                />
              </div>
            </div>
            <div className="md:col-span-8">
              <h2 className="text-3xl md:text-4xl font-serif font-bold tracking-tight mb-6">
                Expert-Led Audits, Not Robot Reports
              </h2>
              <div className="space-y-6 text-lg text-foreground">
                <p>
                  Led by <strong>Dan Harrison</strong> — 13 years as Executive Director of UX Design at JPMorgan Chase, where he led accessibility strategy across enterprise digital products.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-brand-100 text-brand-700 text-sm font-medium">
                    DHS Trusted Tester v5 Certified
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-brand-100 text-brand-700 text-sm font-medium">
                    IAAP CPACC
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-brand-100 text-brand-700 text-sm font-medium">
                    IAAP WAS
                  </span>
                </div>
                <p className="text-muted-foreground">
                  Trained by Deque University, WebAIM, and Knowbility AccessU.
                </p>
                {/* Fix 10: Pull-quote — larger Georgia, em-dash attribution, no left border */}
                <blockquote className="mt-8">
                  <p className="text-2xl md:text-3xl font-serif italic text-foreground leading-snug">
                    "We use real assistive technology — screen readers, keyboard testing, manual evaluation — not just automated scanners. Because that's what holds up in court."
                  </p>
                  <footer className="mt-4 text-base text-muted-foreground">
                    — Dan Harrison, Founder
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA — dramatic spacing, red accent rule */}
      <section className="px-4 bg-background border-t border-border" style={{ paddingTop: 'var(--space-section-dramatic)', paddingBottom: 'var(--space-section-dramatic)' }}>
        <div className="container mx-auto max-w-4xl text-center">
          {/* Fix 5: Red accent — intentional decorative rule */}
          <div className="w-16 h-1 bg-accent-red mx-auto mb-8" aria-hidden="true" />
          <h2 className="text-4xl md:text-5xl font-serif font-bold tracking-tight mb-6">
            Every Day You Wait Is Another Day You're Exposed
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12">
            A 15-minute call costs you nothing. A lawsuit costs you $60,000–$200,000+.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 font-medium bg-primary text-primary-foreground h-16 px-10 text-xl rounded-md w-full sm:w-auto hover:bg-brand-700 transition-colors"
          >
            Get Help Now
            <ArrowRight className="ml-2 w-6 h-6" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
