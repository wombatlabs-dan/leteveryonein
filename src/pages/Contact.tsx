import { useState } from "react";
import Layout from "@/components/Layout";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mjgpzydl", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      if (response.ok) {
        setSubmitted(true);
        form.reset();
      }
    } catch {
      // silently handle
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Layout>
      <section className="pt-20 pb-12 px-4 bg-brand-50">
        <div className="container mx-auto max-w-3xl text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold tracking-tight mb-6">
            Get Help Now
          </h1>
          <p className="text-xl text-muted-foreground">
            Whether you just received a demand letter or want to get ahead of the risk, we're here to help.
          </p>
        </div>
      </section>

      <section className="px-4 bg-background" style={{ paddingTop: 'var(--space-section-tight)', paddingBottom: 'var(--space-section)' }}>
        <div className="container mx-auto max-w-2xl">
          <div className="border border-border rounded-md p-6 md:p-10 bg-card">
            {submitted ? (
              <div className="text-center py-12">
                <h2 className="text-2xl font-serif font-bold mb-4">Thank you.</h2>
                <p className="text-muted-foreground">We'll be in touch within one business day.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">Name *</label>
                    <input
                      id="name"
                      name="name"
                      required
                      placeholder="Jane Doe"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">Email *</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="jane@example.com"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium">Company</label>
                    <input
                      id="company"
                      name="company"
                      placeholder="Acme Inc."
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="websiteUrl" className="text-sm font-medium">Website URL *</label>
                    <input
                      id="websiteUrl"
                      name="websiteUrl"
                      type="url"
                      required
                      placeholder="https://"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="budget" className="text-sm font-medium">Budget Range</label>
                    <select
                      id="budget"
                      name="budget"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      <option value="">Select a range</option>
                      <option value="Under $2,500">Under $2,500</option>
                      <option value="$2,500–$5,000">$2,500–$5,000</option>
                      <option value="$5,000–$8,000">$5,000–$8,000</option>
                      <option value="$8,000+">$8,000+</option>
                      <option value="Not sure yet">Not sure yet</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="timeline" className="text-sm font-medium">Timeline</label>
                    <select
                      id="timeline"
                      name="timeline"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      <option value="">Select timeline</option>
                      <option value="Urgent — I have a demand letter">Urgent — I have a demand letter</option>
                      <option value="Within 30 days">Within 30 days</option>
                      <option value="Within 90 days">Within 90 days</option>
                      <option value="Just exploring">Just exploring</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">Tell us about your situation *</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    placeholder="What's going on? Received a demand letter? Customer complaint? Just want to get ahead of it? The more context you share, the better we can help."
                    className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring min-h-[150px]"
                  />
                </div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex items-center justify-center gap-2 font-medium bg-primary text-primary-foreground h-14 px-8 text-lg rounded-md w-full hover:bg-brand-700 transition-colors disabled:opacity-50"
                >
                  {submitting ? "Submitting..." : "Submit Inquiry"}
                </button>
              </form>
            )}
            <div className="mt-8 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground text-center md:text-left">
              <div>dan@LetEveryOneIn.com</div>
              <div>We respond within one business day.</div>
              <div>Your information is confidential.</div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
