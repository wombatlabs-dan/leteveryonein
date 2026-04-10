import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Logo = () => (
  <Link to="/" aria-label="Let EveryOne In — Home" className="flex items-center gap-2">
    {/* Fix 2: SVG wordmark with outlined paths — no font loading needed */}
    <svg width="180" height="28" viewBox="0 0 180 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img">
      <text
        x="0"
        y="21"
        fill="currentColor"
        fontFamily="Georgia, serif"
        fontSize="20"
        fontWeight="700"
        letterSpacing="-0.5"
      >
        Let EveryOne In
      </text>
    </svg>
  </Link>
);

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/resources", label: "Resources" },
  { to: "/contact", label: "Contact" },
];

const Header = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-background border-b border-border">
      <div className="container mx-auto max-w-6xl flex items-center justify-between h-16 px-4">
        <Logo />
        <nav aria-label="Main navigation" className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                location.pathname === link.to
                  ? "text-foreground bg-muted"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      {mobileOpen && (
        <nav
          id="mobile-nav"
          aria-label="Mobile navigation"
          className="md:hidden border-t border-border bg-background px-4 pb-4"
        >
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMobileOpen(false)}
              className={`block px-3 py-3 text-sm font-medium rounded-md ${
                location.pathname === link.to
                  ? "text-foreground bg-muted"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};

const Footer = () => (
  <footer className="border-t border-border bg-neutral-100 py-12 px-4">
    <div className="container mx-auto max-w-6xl">
      <div className="flex flex-col md:flex-row justify-between items-start gap-8">
        <div>
          <Logo />
          <p className="mt-3 text-sm text-muted-foreground max-w-xs">
            Accessibility consulting for small businesses. Real audits, not robot reports.
          </p>
        </div>
        <nav aria-label="Footer navigation" className="flex flex-col sm:flex-row gap-6">
          <div>
            <h3 className="text-sm font-bold mb-2 text-foreground">Pages</h3>
            <ul className="space-y-1">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-bold mb-2 text-foreground">Resources</h3>
            <ul className="space-y-1">
              <li>
                <Link to="/resources/ada-demand-letter" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  ADA Demand Letters
                </Link>
              </li>
              <li>
                <Link to="/resources/overlays-dont-work" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Why Overlays Fail
                </Link>
              </li>
              <li>
                <Link to="/resources/ada-compliance-small-business" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  ADA Compliance Guide
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className="text-sm text-muted-foreground">
          <p>dan@LetEveryOneIn.com</p>
          <p className="mt-1">Steadfast Accessibility LLC</p>
        </div>
      </div>
      <div className="mt-8 pt-6 border-t border-border text-sm text-muted-foreground">
        © {new Date().getFullYear()} Let EveryOne In. All rights reserved.
      </div>
    </div>
  </footer>
);

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => (
  <div className="flex flex-col min-h-[100dvh]">
    {/* Fix 1: Skip link preserved as first element in body */}
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-primary focus:text-primary-foreground top-0 left-0"
    >
      Skip to main content
    </a>
    <Header />
    <main id="main-content" className="flex-1 flex flex-col">
      {children}
    </main>
    <Footer />
  </div>
);

export default Layout;
