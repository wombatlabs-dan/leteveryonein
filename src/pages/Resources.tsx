import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";

const articles = [
  {
    date: "Jan 15, 2026",
    title: "I Got an ADA Demand Letter About My Website — Now What?",
    slug: "ada-demand-letter",
    desc: "Don't panic. A practical guide on what an ADA demand letter means, immediate steps to take, and how to protect your business legally and technically.",
  },
  {
    date: "Feb 2, 2026",
    title: "Why Accessibility Overlays Don't Protect You (And Can Make Things Worse)",
    slug: "overlays-dont-work",
    desc: "The truth about accessiBe, UserWay, and other widgets. Why the FTC is fining them, and why courts consider them a barrier to access.",
  },
  {
    date: "Feb 28, 2026",
    title: "ADA Website Compliance for Small Business: What You Actually Need to Know",
    slug: "ada-compliance-small-business",
    desc: "An evergreen explainer of ADA Title III, WCAG 2.1 AA, and what a 'good faith effort' really looks like to a judge.",
  },
];

const Resources = () => {
  return (
    <Layout>
      <section className="pt-20 pb-12 px-4 bg-brand-50 border-b border-border">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold tracking-tight mb-6">
            Resources &amp; Guides
          </h1>
          <p className="text-xl text-muted-foreground">
            Clear, actionable advice for small business owners navigating the complex world of web accessibility law.
          </p>
        </div>
      </section>

      <section className="px-4 bg-background" style={{ paddingTop: 'var(--space-section)', paddingBottom: 'var(--space-section)' }}>
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-0 divide-y divide-border">
            {articles.map((article) => (
              <article key={article.slug} className="py-8 first:pt-0 last:pb-0">
                <div className="text-sm font-medium text-muted-foreground mb-2">{article.date}</div>
                <h2 className="text-2xl font-serif font-bold mb-3">
                  <Link to={`/resources/${article.slug}`} className="hover:text-brand-600 transition-colors">
                    {article.title}
                  </Link>
                </h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">{article.desc}</p>
                <Link
                  to={`/resources/${article.slug}`}
                  className="inline-flex items-center text-sm font-medium text-brand-600 hover:text-brand-700 transition-colors"
                >
                  Read Article
                  <ArrowRight className="ml-1 w-4 h-4" aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 bg-muted/30 border-t border-border text-center" style={{ paddingTop: 'var(--space-section)', paddingBottom: 'var(--space-section)' }}>
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-2xl font-serif font-bold mb-4">Have a specific question?</h2>
          <p className="text-muted-foreground mb-8">
            We're here to help you understand your legal exposure and technical options.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 text-sm font-medium bg-primary text-primary-foreground h-10 px-4 rounded-md hover:bg-brand-700 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Resources;
