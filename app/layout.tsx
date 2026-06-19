import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Good Company | Senior Concierge Services",
  description: "Non-medical in-home support for seniors in Shelby Township, Washington Township, and Rochester Hills, Michigan. Companion services, pet care, light housekeeping, and more.",
  openGraph: {
    type: "website",
    url: "https://goodcompanyscs.com",
    title: "Good Company | Senior Concierge Services",
    description: "In-home senior support you can trust. Companion services, pet care, housekeeping, and errands.",
    images: [
      {
        url: "https://goodcompanyscs.com/logo.png",
        width: 400,
        height: 400,
        alt: "Good Company Logo",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-LSC35890EF"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-LSC35890EF');
          `}
        </Script>
        <Script
          src="https://macombcountychamber.chambermaster.com/Content/Script/Member.js"
          strategy="afterInteractive"
        />
        <Script id="chamber-badge" strategy="afterInteractive">
          {`
            (function tryInit() {
              if (window.MNI && window.MNI.Widgets && window.MNI.Widgets.Member) {
                new window.MNI.Widgets.Member('mni-membership-639174709150268212', {
                  member: 945626,
                  styleTemplate: '#@id{text-align:center;position:relative}#@id .mn-widget-member-name{font-weight:700}#@id .mn-widget-member-logo{max-width:100%}'
                }).create();
              } else {
                setTimeout(tryInit, 300);
              }
            })();
          `}
        </Script>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

function Header() {
  return (
    <header style={{ borderBottomColor: "var(--terracotta)" }} className="border-b-4">
      <div className="container-max py-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full gap-3">
          <a href="/" className="no-underline hover:no-underline">
            <div className="flex items-center gap-4">
              <img
                src="/logo.png"
                alt="Good Company Logo"
                className="h-16 md:h-24 w-auto"
              />
              <div>
                <h1 className="text-xl md:text-2xl font-bold" style={{ fontFamily: "Fraunces", color: "#87A878" }}>Good Company</h1>
                <p className="text-xs tracking-widest" style={{ color: "#000000", opacity: 0.6, paddingLeft: "4px" }}>SENIOR CONCIERGE SERVICES</p>
              </div>
            </div>
          </a>
          <nav className="flex gap-4 md:gap-8 items-center">
            <a href="/services" style={{ color: '#000000', opacity: 0.7 }} className="font-semibold hover:opacity-70 text-sm md:text-base">
              Services
            </a>
            <a href="/pricing" style={{ color: '#000000', opacity: 0.7 }} className="font-semibold hover:opacity-70 text-sm md:text-base">
              Pricing
            </a>
            <a href="/about" style={{ color: '#000000', opacity: 0.7 }} className="font-semibold hover:opacity-70 text-sm md:text-base">
              About
            </a>
            <a href="/faq" style={{ color: '#000000', opacity: 0.7 }} className="font-semibold hover:opacity-70 text-sm md:text-base">
              FAQ
            </a>
            <a href="/contact" className="btn-primary text-sm md:text-base">
              Get Started
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer style={{ backgroundColor: "var(--charcoal)" }} className="text-cream py-12">
      <div className="container-max">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-cream mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="/services#technology" className="text-cream hover:text-honey">Technology Assistance</a></li>
              <li><a href="/services#meals" className="text-cream hover:text-honey">Meals & Nutrition</a></li>
              <li><a href="/services#companion" className="text-cream hover:text-honey">Companionship & Check-Ins</a></li>
              <li><a href="/services#errands" className="text-cream hover:text-honey">Errands</a></li>
              <li><a href="/services#home" className="text-cream hover:text-honey">Home & Yard Services</a></li>
              <li><a href="/services#pet" className="text-cream hover:text-honey">Pet Care</a></li>
              <li><a href="/services#paperwork" className="text-cream hover:text-honey">Paperwork & Safety Support</a></li>
              <li><a href="/services#caregiver" className="text-cream hover:text-honey">Family Caregiver Relief</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-cream mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="text-cream hover:text-honey">About Us</a></li>
              <li><a href="/contact" className="text-cream hover:text-honey">Contact</a></li>
              <li><a href="/faq" className="text-cream hover:text-honey">FAQ</a></li>
              <li><a href="/privacy" className="text-cream hover:text-honey">Privacy Policy</a></li>
              <li><a href="/terms" className="text-cream hover:text-honey">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-cream mb-4">Service Area</h3>
            <p className="text-cream">
              Shelby Township<br />
              Washington Township<br />
              Rochester Hills, MI
            </p>
          </div>
        </div>

        {/* Macomb County Chamber of Commerce Badge */}
        <div style={{ borderTopColor: "rgba(199, 241, 232, 0.2)" }} className="border-t pt-8 mb-6 text-center">
          <div id="mni-membership-639174709150268212"></div>
        </div>

        <div className="text-center text-cream text-sm">
          <p>&copy; {currentYear} Good Company Senior Concierge Services LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
