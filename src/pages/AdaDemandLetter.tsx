import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Layout from "@/components/Layout";

const AdaDemandLetter = () => {
  return (
    <Layout>
      <article className="px-4 bg-background" style={{ paddingTop: 'var(--space-section-tight)', paddingBottom: 'var(--space-section)' }}>
        <div className="container mx-auto max-w-[720px]">
          <Link
            to="/resources"
            className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-brand-600 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" aria-hidden="true" />
            Back to Resources
          </Link>

          <h1 className="text-4xl md:text-5xl font-serif font-bold tracking-tight mb-6">
            I Got an ADA Demand Letter About My Website — Now What?
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="lead text-xl text-muted-foreground mb-8">
              Getting an ADA demand letter is terrifying. It arrives via certified mail, threatens legal action, and demands a quick settlement. Before you panic, pay the settlement, or hire an expensive law firm, take a breath.
            </p>

            <h2>What is an ADA Demand Letter?</h2>
            <p>An ADA demand letter is a formal notice claiming your business's website violates Title III of the Americans with Disabilities Act. Title III requires places of "public accommodation" to be accessible to people with disabilities. Courts have increasingly interpreted websites as places of public accommodation.</p>
            <p>Typically, these letters are sent by a small group of plaintiff's law firms that use automated scanning tools to find thousands of non-compliant websites. They send boilerplate letters demanding a settlement (usually between $5,000 and $20,000) and attorney's fees.</p>

            <h2>Immediate Steps to Take</h2>
            <ol>
              <li><strong>Do not panic.</strong> This is a known, manageable issue. Thousands of businesses deal with this every year.</li>
              <li><strong>Do not ignore it.</strong> The problem will not go away. Ignoring the letter can lead to a formal lawsuit, which dramatically increases your legal costs.</li>
              <li><strong>Consult an attorney experienced in ADA website defense.</strong> Do not hire your cousin who does real estate law. You need someone who knows the players in this specific niche.</li>
              <li><strong>Do NOT install an accessibility overlay widget.</strong> Companies will try to sell you a $49/month widget (like accessiBe or UserWay) claiming it makes you compliant instantly. It doesn't. In fact, overlays are frequently cited as the <em>reason</em> for lawsuits.</li>
              <li><strong>Get an actual accessibility audit.</strong> You need to know exactly what is broken. Automated scanners only catch ~30% of issues. You need a manual audit by certified professionals.</li>
            </ol>

            <h2>Showing "Good Faith"</h2>
            <p>Courts and plaintiff's attorneys look for a "good faith effort" to remediate. If you can show that you have hired a credible accessibility consultant, conducted a manual audit, and have a roadmap for fixing the issues, you are in a vastly stronger negotiating position.</p>
            <p>A credible audit acts as your shield. It tells the plaintiff's attorney: "We know what's wrong, we are fixing it properly, and we won't be an easy target for a quick settlement."</p>
          </div>

          <div className="mt-16 pt-8 border-t-2 border-brand-300">
            <h2 className="text-2xl font-serif font-bold mb-4">Need help right now?</h2>
            <p className="text-muted-foreground mb-6">Our "Panic Button" service is designed exactly for this situation. We'll audit your top pages and give you a prioritized plan in 7 days.</p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 text-sm font-medium bg-primary text-primary-foreground h-10 px-4 rounded-md hover:bg-brand-700 transition-colors"
            >
              Get Help with Your Letter
            </Link>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default AdaDemandLetter;
