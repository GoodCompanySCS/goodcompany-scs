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
      <div className="container-max py-6">
      <div className="flex items-center justify-between w-full gap-4">
          <a href="/" className="no-underline hover:no-underline">
           <div className="flex items-center gap-7">
  <img
    src="/logo.png"
    alt="Good Company Logo"
    className="h-20 md:h-28 w-auto" 
  />
  <div>
    <h1 className="text-2xl font-bold" style={{ fontFamily: "Fraunces", color: "#87A878" }}>Good Company</h1>
    <p className="text-xs tracking-widest" style={{ color: "#000000", opacity: 0.6, paddingLeft: "4px" }}>SENIOR CONCIERGE SERVICES</p>
  </div>
</div>
          </a>
          <nav className="flex gap-2 md:gap-8 items-center flex-wrap md:flex-nowrap justify-center md:justify-start w-full md:w-auto mt-3 md:mt-0">
            <a href="/services" style={{ color: '#000000', opacity: 0.7 }} className="font-semibold hover:opacity-70">
              Services
            </a>
            <a href="/pricing" style={{ color: '#000000', opacity: 0.7 }} className="font-semibold hover:opacity-70">
              Pricing
            </a>
            <a href="/about" style={{ color: '#000000', opacity: 0.7 }} className="font-semibold hover:opacity-70">
              About
            </a>
            <a href="/contact" className="btn-primary">
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
              <li><a href="/services#companion" className="text-cream hover:text-honey">Companion Services</a></li>
              <li><a href="/services#pet" className="text-cream hover:text-honey">Pet Services</a></li>
              <li><a href="/services#housekeeping" className="text-cream hover:text-honey">Housekeeping</a></li>
              <li><a href="/services#errands" className="text-cream hover:text-honey">Errands</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-cream mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="text-cream hover:text-honey">About Us</a></li>
              <li><a href="/contact" className="text-cream hover:text-honey">Contact</a></li>
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
        <div style={{ borderTopColor: "rgba(199, 241, 232, 0.2)" }} className="border-t pt-8 text-center text-cream text-sm">
          <p>&copy; {currentYear} Good Company Senior Concierge Services LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
