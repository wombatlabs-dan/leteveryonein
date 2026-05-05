import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

const About = () => {
  return (
    <Layout>
      <section className="pt-20 pb-12 px-4 bg-brand-50">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-tight mb-6">
            Expertise When You Need It Most
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Bringing enterprise-quality accessibility auditing to the small businesses that need it most.
          </p>
        </div>
      </section>

      <section className="px-4 bg-background" style={{ paddingTop: 'var(--space-section)', paddingBottom: 'var(--space-section)' }}>
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div>
              <div className="aspect-square rounded-md mb-8 border-4 border-brand-200 overflow-hidden">
                <img
                  alt="Dan Harrison, founder of LetEveryoneIn"
                  className="w-full h-full object-cover object-top"
                  src="/dan-harrison.png"
                />
              </div>
              {/* Credential badges removed pending exam completion in 2026.
                  Re-add each one only after passing the exam:
                    - DHS Trusted Tester v5 — exam scheduled June 2026
                    - IAAP CPACC — exam scheduled May 2026
                    - IAAP WAS — exam scheduled June/July 2026 */}
            </div>
            <div>
              <h2 className="text-3xl font-serif font-bold text-foreground mt-0 mb-6">Dan Harrison</h2>
              <div className="space-y-4 text-lg text-neutral-700">
                <p className="text-xl text-muted-foreground">
                  13 years as Executive Director of UX Design at JPMorgan Chase — led multi-disciplinary design teams across enterprise digital products held to WCAG and Section 508 conformance standards.
                </p>
                <p>
                  As a founding employee at Razorfish San Francisco during the first dot-com era, Dan has been building for the web since its early days. He is deeply embedded in the San Francisco AI and design community.
                </p>
                <p>
                  He founded LetEveryoneIn with a singular mission: to bring enterprise-quality accessibility auditing to small businesses that are facing a crisis.
                </p>
                <p>
                  <strong>Training:</strong> Deque University, WebAIM Virtual Training, Knowbility AccessU. <strong>Certifications in progress (2026):</strong> IAAP CPACC, IAAP WAS, DHS Trusted Tester v5.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 bg-brand-50 border-y border-border" style={{ paddingTop: 'var(--space-section)', paddingBottom: 'var(--space-section)' }}>
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Our Approach: Expert-Led Audits, Not Robot Reports
            </h2>
            <p className="text-xl text-muted-foreground">
              We test your site the same way a person with a disability would use it. Because that's what the ADA requires, and that's what holds up in a legal response.
            </p>
          </div>
          <div className="space-y-12">
            {[
              { num: "1", title: "Automated scanning catches ~30% of issues", desc: "The obvious ones rule-based tools reliably detect. It's a starting point, not a complete audit." },
              { num: "2", title: "Manual assistive technology testing catches 40–50% that scanners miss", desc: "Keyboard navigation, screen reader behavior, interactive components, mobile accessibility. This is where real risk lives." },
              { num: "3", title: "Expert review and plain-English translation", desc: "Turns raw findings into a remediation playbook a non-technical owner can actually follow." },
            ].map((step) => (
              <div key={step.num} className="flex gap-6">
                <div className="text-5xl font-serif font-bold text-brand-300 shrink-0 w-14">{step.num}</div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                  <p className="text-lg text-muted-foreground">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 bg-background text-center" style={{ paddingTop: 'var(--space-section)', paddingBottom: 'var(--space-section)' }}>
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-3xl font-serif font-bold mb-6">Ready to protect your business?</h2>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 font-medium bg-primary text-primary-foreground h-14 px-8 text-lg rounded-md w-full sm:w-auto hover:bg-brand-700 transition-colors"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default About;
