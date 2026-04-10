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

      {/* Editorial claims — prose, not stats grid */}
      <section className="px-4 bg-background" style={{ paddingTop: 'var(--space-section-tight)', paddingBottom: 'var(--space-section-tight)' }}>
        <div className="container mx-auto max-w-3xl">
          <div className="space-y-12">
            <div>
              <p className="text-xl md:text-2xl font-bold text-foreground mb-3">
                Audits ship in ten business days, not six weeks.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Panic Button clients get their top-20 issue list and documentation for their attorney within ten business days of kickoff. Fix It Right is an eight-week engagement with weekly check-ins.
              </p>
            </div>
            <div>
              <p className="text-xl md:text-2xl font-bold text-foreground mb-3">
                Every client so far has been a small e-commerce shop or restaurant in NY, FL, CA, or IL.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                That's the profile ADA demand letters target — $500K to $25M in annual revenue, no in-house legal, running Shopify or WordPress or Squarespace. If that's you, we've seen your situation before.
              </p>
            </div>
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

      {/* Fix 8: Pricing — comparison table, not three identical cards */}
      <section className="px-4 bg-background" style={{ paddingTop: 'var(--space-section)', paddingBottom: 'var(--space-section)' }}>
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold tracking-tight mb-6">
              Three Ways We Can Help
            </h2>
            <p className="text-xl text-muted-foreground">
              Tailored solutions based on your urgency and needs.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border border-border text-left">
              <thead>
                <tr className="bg-muted">
                  <th className="p-6 text-sm font-medium text-muted-foreground uppercase tracking-wider border-r border-border w-1/4">Feature</th>
                  <th className="p-6 border-r border-border w-1/4">
                    <div className="text-xl font-bold text-foreground">Panic Button</div>
                    <div className="text-3xl font-serif mt-1 text-brand-600">$2,500</div>
                    <div className="text-sm text-muted-foreground mt-1">7 business days</div>
                  </th>
                  <th className="p-6 border-r border-border w-1/4 bg-brand-50">
                    <div className="text-xl font-bold text-foreground">Fix It Right</div>
                    <div className="text-3xl font-serif mt-1 text-brand-600">$5,000</div>
                    <div className="text-sm text-muted-foreground mt-1">8-week engagement</div>
                  </th>
                  <th className="p-6 w-1/4">
                    <div className="text-xl font-bold text-foreground">Stay Protected</div>
                    <div className="text-3xl font-serif mt-1 text-brand-600">$8,000</div>
                    <div className="text-sm text-muted-foreground mt-1">12 weeks + 1-year check</div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  { feature: "Pages audited", panic: "5–10 critical", fix: "Up to 30", stay: "Up to 50" },
                  { feature: "Automated scanning", panic: true, fix: true, stay: true },
                  { feature: "Screen reader testing (NVDA/JAWS)", panic: false, fix: true, stay: true },
                  { feature: "Keyboard testing", panic: false, fix: true, stay: true },
                  { feature: "iOS VoiceOver mobile testing", panic: false, fix: false, stay: true },
                  { feature: "Prioritized issue list", panic: "Top 20", fix: "Full", stay: "Full" },
                  { feature: "Remediation playbook", panic: "Quick-fix", fix: "Annotated screenshots", stay: "Annotated screenshots" },
                  { feature: "Design-level recommendations", panic: false, fix: false, stay: true },
                  { feature: "Check-in calls", panic: "1", fix: "8 weekly", stay: "12 weekly" },
                  { feature: "Compliance posture statement", panic: true, fix: true, stay: true },
                  { feature: "Post-remediation QA audit", panic: false, fix: false, stay: true },
                  { feature: "1-year follow-up health check", panic: false, fix: false, stay: true },
                  { feature: "Overlay assessment & removal plan", panic: false, fix: true, stay: true },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-muted/30">
                    <td className="p-4 text-sm font-medium text-foreground border-r border-border">{row.feature}</td>
                    {[row.panic, row.fix, row.stay].map((val, j) => (
                      <td key={j} className={`p-4 text-sm text-center border-r border-border last:border-r-0 ${j === 1 ? 'bg-brand-50/50' : ''}`}>
                        {val === true ? (
                          <Check className="w-5 h-5 text-brand-600 mx-auto" aria-label="Included" />
                        ) : val === false ? (
                          <span className="text-neutral-400" aria-label="Not included">—</span>
                        ) : (
                          <span className="text-foreground">{val}</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center font-medium bg-primary text-primary-foreground h-12 px-8 rounded-md hover:bg-brand-700 transition-colors"
            >
              Get Started
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center font-medium border border-border bg-background h-12 px-8 rounded-md hover:bg-muted transition-colors"
            >
              View Full Details
            </Link>
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
