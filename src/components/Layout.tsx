import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Logo = () => (
  <Link to="/" aria-label="Let EveryOne In — Home" className="flex items-center gap-2 text-foreground">
    <svg viewBox="-22 -4 418 558" aria-hidden="true" fill="currentColor" style={{ height: '3em', width: 'auto', flexShrink: 0 }}>
      <path d="M0 0 C1.7 0.52 3.4 1.03 5.15 1.57 C6.97 2.13 8.79 2.69 10.67 3.27 C14.53 4.44 18.39 5.62 22.25 6.79 C24.24 7.4 26.23 8.01 28.29 8.64 C38.35 11.72 48.42 14.77 58.48 17.83 C60.35 18.4 62.21 18.97 64.14 19.55 C65.85 20.07 67.57 20.59 69.33 21.13 C70.85 21.59 72.37 22.05 73.93 22.53 C77.42 23.52 77.42 23.52 79.42 23.52 C80.29 21.7 81.15 19.89 82.05 18.02 C89.75 3.19 102.1 -3.59 118.55 -3.63 C119.52 -3.64 119.52 -3.64 124.38 -3.65 C126.5 -3.66 128.62 -3.66 130.8 -3.66 C131.91 -3.66 131.91 -3.66 137.54 -3.68 C144.93 -3.7 152.32 -3.71 159.7 -3.72 C162.22 -3.73 164.74 -3.73 167.34 -3.74 C179.29 -3.75 191.25 -3.77 203.2 -3.78 C217 -3.79 230.79 -3.81 244.58 -3.85 C256.53 -3.89 268.49 -3.9 280.44 -3.9 C285.52 -3.91 290.6 -3.92 295.68 -3.94 C302.79 -3.96 309.9 -3.96 317.01 -3.95 C319.11 -3.97 321.21 -3.98 323.38 -3.99 C345.68 -3.91 365.59 2.98 372.42 26.52 C373.69 35 373.57 43.46 373.57 52.02 C373.57 53.81 373.58 55.59 373.58 57.43 C373.59 63.43 373.6 69.43 373.6 75.43 C373.61 79.72 373.61 84.02 373.62 88.31 C373.64 99.99 373.65 111.66 373.65 123.34 C373.66 130.63 373.67 137.92 373.67 145.21 C373.69 168 373.71 190.79 373.71 213.58 C373.72 239.91 373.75 266.25 373.79 292.59 C373.82 312.93 373.84 333.27 373.84 353.61 C373.84 365.77 373.85 377.93 373.88 390.09 C373.9 401.52 373.9 412.94 373.89 424.37 C373.89 428.57 373.9 432.77 373.91 436.98 C373.93 442.7 373.92 448.42 373.91 454.14 C373.92 454.97 373.92 454.97 373.94 459.21 C373.85 475.56 373.85 475.56 366.42 480.52 C343.93 483.73 343.93 483.73 335.42 473.52 C334.94 467.69 334.76 462.16 334.8 456.34 C334.8 455.45 334.8 455.45 334.78 450.96 C334.77 444.99 334.79 439.01 334.81 433.04 C334.81 428.77 334.8 424.5 334.79 420.23 C334.78 411.02 334.78 401.81 334.8 392.6 C334.82 378.05 334.81 363.5 334.8 348.95 C334.77 323.33 334.78 297.71 334.79 272.09 C334.81 233.5 334.8 194.91 334.77 156.31 C334.76 141.84 334.76 127.36 334.78 112.88 C334.79 103.9 334.78 94.91 334.78 85.92 C334.78 81.74 334.78 77.56 334.79 73.37 C334.8 67.69 334.8 62 334.79 56.31 C334.8 54.64 334.8 52.96 334.81 51.23 C334.76 38.18 334.76 38.18 329.42 35.52 C326.7 35.42 323.97 35.38 321.24 35.38 C319.48 35.38 317.72 35.37 315.9 35.37 C313.95 35.37 312 35.37 310 35.37 C307.96 35.37 305.92 35.36 303.81 35.36 C297.03 35.35 290.25 35.35 283.46 35.35 C278.77 35.34 274.08 35.34 269.38 35.34 C259.53 35.33 249.68 35.33 239.82 35.33 C227.17 35.33 214.52 35.32 201.87 35.3 C192.17 35.29 182.47 35.29 172.78 35.29 C168.11 35.29 163.45 35.28 158.78 35.27 C152.27 35.26 145.75 35.27 139.24 35.27 C137.29 35.27 135.35 35.26 133.35 35.26 C131.58 35.26 129.81 35.26 127.98 35.27 C126.44 35.27 124.9 35.27 123.31 35.27 C115.29 35.78 115.29 35.78 113.42 39.52 C113.33 45.34 113.3 51.16 113.31 56.98 C113.31 60.78 113.31 64.58 113.31 68.38 C113.31 70.4 113.31 72.43 113.31 74.51 C113.32 85.17 113.29 95.82 113.27 106.47 C113.25 120.06 113.23 133.64 113.25 147.23 C113.26 158.18 113.24 169.13 113.2 180.09 C113.2 184.28 113.2 188.47 113.21 192.65 C113.23 198.5 113.21 204.34 113.18 210.18 C113.19 211.93 113.21 213.68 113.22 215.48 C113.11 227.4 113.11 227.4 106.42 228.52 C98.86 228.67 91.31 228.77 83.75 228.84 C68.74 230.22 60.45 237.38 57.42 252.52 C56.72 268.5 61.58 281.31 78.42 285.52 C85.55 285.78 92.67 285.96 99.8 286.12 C111.32 286.41 111.32 286.41 112.42 287.52 C112.53 293.1 112.58 298.67 112.58 304.26 C112.59 306.02 112.59 307.79 112.6 309.61 C112.61 315.49 112.62 321.37 112.62 327.25 C112.63 331.32 112.64 335.38 112.64 339.45 C112.65 347.99 112.66 356.53 112.66 365.08 C112.67 376.04 112.69 387 112.72 397.97 C112.74 406.37 112.74 414.78 112.75 423.18 C112.75 427.23 112.76 431.27 112.77 435.31 C112.79 440.96 112.78 446.61 112.78 452.26 C112.79 453.94 112.8 455.62 112.81 457.35 C112.74 476.74 103.26 477.48 86.41 481.83 C84.82 482.25 83.24 482.66 81.6 483.09 C76.5 484.43 71.4 485.75 66.3 487.08 C61.32 488.37 56.35 489.67 51.38 490.97 C48.07 491.84 44.76 492.7 41.44 493.56 C32.92 495.79 24.41 498.06 15.92 500.4 C14.23 500.86 12.55 501.33 10.81 501.81 C7.59 502.69 4.38 503.59 1.16 504.49 C-15.9 509.2 -15.9 509.2 -21.58 503.52 C-22.08 499.81 -22.08 499.81 -22.09 495.2 C-22.1 493.44 -22.11 491.69 -22.12 489.88 C-22.11 487.95 -22.11 486.01 -22.1 484.01 C-22.11 481.96 -22.11 479.91 -22.12 477.8 C-22.14 470.89 -22.14 463.97 -22.13 457.06 C-22.14 452.12 -22.15 447.18 -22.16 442.24 C-22.18 430.2 -22.19 418.15 -22.18 406.1 C-22.18 396.31 -22.18 386.52 -22.19 376.74 C-22.19 375.34 -22.19 373.95 -22.19 372.52 C-22.2 369.69 -22.2 366.87 -22.2 364.04 C-22.22 337.52 -22.22 311 -22.21 284.47 C-22.2 260.19 -22.22 235.9 -22.26 211.62 C-22.3 186.7 -22.31 161.79 -22.31 136.88 C-22.3 122.88 -22.31 108.89 -22.33 94.89 C-22.36 81.73 -22.36 68.58 -22.33 55.42 C-22.33 50.58 -22.33 45.74 -22.35 40.9 C-22.37 34.32 -22.35 27.73 -22.33 21.15 C-22.34 19.21 -22.36 17.28 -22.37 15.28 C-22.36 13.53 -22.34 11.77 -22.33 9.96 C-22.33 8.44 -22.33 6.92 -22.33 5.35 C-19.85 -7.35 -8.71 -2.67 0 0 Z" transform="translate(41.578125,23.484375)" />
      <path d="M0 0 C6.48 21 0.96 39.32 -16.88 52.62 C-37.59 63.14 -58.09 57.73 -72.94 40.69 C-84.92 20.06 -82.81 -1.05 -64.62 -17.12 C-41.72 -32.7 -11.8 -25.36 0 0 Z" transform="translate(297.9375,122.3125)" />
      <path d="M0 0 C2.08 -0.01 4.16 -0.01 6.3 -0.02 C41.28 0.12 62.01 10.61 78.75 41.44 C80.68 44.91 82.6 48.38 84.53 51.86 C86.49 55.37 88.44 58.89 90.39 62.41 C92.28 65.79 94.18 69.16 96.14 72.5 C101.43 82.15 98.98 95.55 98.99 106.33 C99 110.79 99.03 115.25 99.06 119.71 C99.07 122.54 99.07 125.38 99.08 128.21 C99.09 130.79 99.1 133.38 99.11 136.04 C98.47 147.48 93.3 152.92 82.75 156.44 C73.15 156.17 66.27 152.48 61.75 143.44 C61.62 139.98 61.55 136.52 61.5 133.06 C61.49 132 61.49 132 61.4 126.64 C61.34 122.16 61.29 117.68 61.23 113.19 C61.2 111.07 61.16 108.94 61.13 106.75 C61.1 104.8 61.08 102.84 61.05 100.83 C60.58 92.42 58.96 86.08 54.62 78.88 C53.35 76.75 52.07 74.63 50.75 72.44 C51.37 94.21 52.29 115.94 53.44 137.69 C53.52 139.28 53.6 140.88 53.69 142.52 C54.8 163.91 56.03 185.29 57.35 206.66 C57.48 208.88 57.62 211.09 57.76 213.37 C58.44 224.29 59.12 235.2 59.82 246.12 C60.07 250.16 60.33 254.2 60.58 258.24 C60.64 259.14 60.64 259.14 60.94 263.7 C61.52 273.07 61.93 282.44 62.14 291.82 C62.16 292.76 62.16 292.76 62.28 297.47 C61.2 307.62 55.56 311.48 45.75 313.44 C33.53 313.92 22.67 313.22 18.64 299.73 C17.72 295.29 17.01 290.88 16.39 286.39 C16.27 285.5 16.27 285.5 15.64 280.99 C15.38 279.08 15.12 277.16 14.85 275.19 C14.58 273.2 14.3 271.2 14.01 269.15 C13.13 262.77 12.25 256.38 11.38 250 C10.22 241.65 9.07 233.29 7.91 224.94 C7.64 222.95 7.36 220.95 7.08 218.9 C5.35 206.51 3.5 194.15 1.39 181.82 C0.75 177.44 0.75 177.44 0.75 171.44 C0.09 171.44 -0.57 171.44 -1.25 171.44 C-1.46 174.51 -1.67 177.57 -1.84 180.64 C-2.75 191.35 -4.7 201.95 -6.38 212.56 C-9.88 235.05 -13.11 257.56 -15.95 280.15 C-16.08 281.16 -16.08 281.16 -16.74 286.26 C-16.96 288.01 -17.18 289.77 -17.41 291.58 C-19.94 306.19 -24.93 312.71 -40 312.81 C-41.93 312.84 -43.87 312.87 -45.86 312.9 C-55.21 312.1 -59.1 308.74 -63.25 300.44 C-63.58 294.82 -63.58 294.82 -63.17 288.33 C-63.03 285.93 -62.9 283.52 -62.76 281.04 C-62.67 279.79 -62.67 279.79 -62.25 273.44 C-61.98 268.56 -61.72 263.69 -61.45 258.81 C-61.22 254.93 -60.99 251.05 -60.75 247.17 C-60.5 242.93 -60.25 238.68 -60 234.44 C-59.28 222.4 -58.56 210.36 -57.84 198.32 C-57.31 189.45 -56.78 180.58 -56.26 171.71 C-56.21 170.98 -56.21 170.98 -56 167.31 C-54.14 135.7 -52.65 104.07 -51.25 72.44 C-51.91 73.5 -52.57 74.57 -53.25 75.67 C-53.69 76.37 -53.69 76.37 -55.92 79.95 C-56.79 81.35 -57.66 82.74 -58.55 84.18 C-74.87 109.91 -90.41 108.88 -119 108.25 C-119.89 108.24 -119.89 108.24 -124.38 108.19 C-126.09 108.16 -127.79 108.12 -129.55 108.08 C-131.08 108.05 -132.61 108.03 -134.18 108 C-144.58 106.56 -149.03 99.37 -149.56 89.75 C-149.09 80.24 -146.99 75.42 -138.25 71.44 C-133.54 70.97 -133.54 70.97 -128.23 71 C-126.32 70.99 -124.41 70.98 -122.45 70.97 C-118.42 70.99 -114.4 71.01 -110.37 71.04 C-108.47 71.03 -106.57 71.02 -104.61 71 C-102.86 71.01 -101.11 71.02 -99.31 71.03 C-95.25 70.44 -95.25 70.44 -93.25 65.44 C-70.79 20.26 -52.1 -0.5 0 0 Z" transform="translate(259.25,191.5625)" />
    </svg>
    <svg width="160" height="32" viewBox="0 0 160 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <text
        x="0"
        y="24"
        fill="currentColor"
        fontFamily="Georgia, serif"
        fontSize="20"
        fontWeight="700"
        letterSpacing="-0.5"
      >
        LetEveryoneIn
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
