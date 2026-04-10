import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Layout from "@/components/Layout";

const OverlaysDontWork = () => {
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
            Why Accessibility Overlays Don't Protect You (And Can Make Things Worse)
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="lead text-xl text-muted-foreground mb-8">
              If you've researched website accessibility, you've likely seen ads for "overlays" or "widgets" (like accessiBe, UserWay, AudioEye) promising 100% ADA compliance with a single line of code for $49 a month. It sounds too good to be true. And it is.
            </p>

            <h2>What is an Overlay?</h2>
            <p>An overlay is a piece of JavaScript code that adds a widget to your website. Users can click the widget to change colors, enlarge text, or theoretically fix screen reader issues on the fly. The pitch is that it acts as a "filter" over your broken code, making it accessible to disabled users without you having to hire developers to fix the actual website.</p>

            <h2>The FTC Crackdown</h2>
            <p>In January 2025, the Federal Trade Commission (FTC) fined accessiBe $1 million for deceptive marketing practices. The FTC ruled that their claims of providing automatic ADA compliance were misleading. They sold a false sense of security to small businesses who were subsequently sued.</p>

            <h2>Why They Fail Technically</h2>
            <p>Overlays fail for a simple reason: they try to overwrite complex HTML and ARIA issues automatically.</p>
            <ul>
              <li><strong>They interfere with native assistive tech.</strong> Blind users already have screen readers (like JAWS or NVDA) configured exactly how they want them. Overlays often hijack these native tools, creating a confusing and broken experience.</li>
              <li><strong>They can't fix fundamental logic.</strong> An overlay cannot add meaningful alt text to an image if it doesn't understand the context of the image. It cannot fix a complex multi-step checkout form's error handling.</li>
              <li><strong>They flag your site to plaintiff attorneys.</strong> Many plaintiff law firms specifically use bots to search for websites running overlay code. To them, an overlay signals that the underlying code is broken and the owner is trying to cut corners.</li>
            </ul>

            <h2>The Legal Reality</h2>
            <p>Currently, over 25% of all ADA website lawsuits specifically cite the presence of an overlay widget as a barrier to access. In lawsuits like <em>Bloomsybox v. UserWay</em>, class-action litigation has been brought against the overlay providers themselves.</p>
            <p>Furthermore, over 600 certified accessibility professionals have signed the <a href="https://overlayfactsheet.com/" target="_blank" rel="noopener noreferrer">Overlay Fact Sheet</a>, a public statement condemning the use of overlays as a solution for digital accessibility.</p>

            <h2>The Real Solution</h2>
            <p>There are no shortcuts. To be compliant, your website's source code must be accessible. You need a comprehensive audit combining automated tools and manual testing by experts using actual assistive technology, followed by deliberate remediation of your code.</p>
          </div>

          <div className="mt-16 pt-8 border-t-2 border-brand-300">
            <h2 className="text-2xl font-serif font-bold mb-4">Have an overlay installed?</h2>
            <p className="text-muted-foreground mb-6">We offer a systematic overlay removal and re-audit service to uncover what the widget was hiding and fix it properly.</p>
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 text-sm font-medium bg-primary text-primary-foreground h-10 px-4 rounded-md hover:bg-brand-700 transition-colors"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default OverlaysDontWork;
