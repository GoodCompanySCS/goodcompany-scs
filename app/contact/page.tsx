export default function Contact() {
  return (
    <>
      <section style={{ backgroundColor: 'var(--cream)' }} className="section-padding">
        <div className="container-max max-w-4xl">
          
        {/* Header + Warm Intro */}
<div className="mb-16">
  <h1 className="text-center mb-4">Get In Touch</h1>
  <div className="flex justify-center mb-8">
    <div style={{ backgroundColor: 'var(--sage)', height: '2px', width: '180px' }}></div>
  </div>
  <p className="text-lg" style={{ color: 'var(--charcoal)' }}>
    The free first visit is a chance for us to get to know each other, talk through your needs, and answer any questions you may have. We'll discuss what kind of support would be most helpful and whether Good Company feels like the right fit for you or your family. No pressure, no obligation.
  </p>
</div>
          
          {/* Contact Details — Two Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            
            {/* Left Column: Contact Info */}
            <div>
              <h3 className="font-semibold mb-3" style={{ color: 'var(--charcoal)' }}>Phone</h3>
              <p className="text-base mb-6">
                <a href="tel:2488209111" className="hover:underline" style={{ color: 'var(--sage)' }}>
                  (248) 820-9111
                </a>
              </p>

              <h3 className="font-semibold mb-3" style={{ color: 'var(--charcoal)' }}>Email</h3>
              <p className="text-base mb-6">
                <a href="mailto:hello@goodcompanyscs.com" className="hover:underline" style={{ color: 'var(--sage)' }}>
                  hello@goodcompanyscs.com
                </a>
              </p>

              <h3 className="font-semibold mb-3" style={{ color: 'var(--charcoal)' }}>Service Area</h3>
              <p className="text-base">
                Shelby Township<br />
                Washington Township<br />
                Rochester Hills, MI
              </p>
            </div>

            {/* Right Column: Hours */}
            <div>
              <h3 className="font-semibold mb-3" style={{ color: 'var(--charcoal)' }}>Business Hours</h3>
              <p className="text-base">
                Monday–Friday: 8:00 AM – 5:00 PM<br />
                Saturday: By appointment<br />
                Sunday: Closed
              </p>
            </div>
          </div>

          {/* Trust Signals */}
          <div className="mb-16 p-8 rounded-lg" style={{ backgroundColor: 'var(--sage)', color: 'white' }}>
            <h3 style={{ color: 'white' }} className="mb-6 text-xl">You Can Trust Good Company</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="font-bold mr-3">✓</span>
                <span><strong>Bonded:</strong> Full bonding for your protection.</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold mr-3">✓</span>
                <span><strong>Insured:</strong> Comprehensive liability coverage.</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold mr-3">✓</span>
                <span><strong>Background Checked:</strong> Thorough vetting.</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold mr-3">✓</span>
                <span><strong>Locally Owned:</strong> Natalie owns and operates this business in your community.</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold mr-3">✓</span>
                <span><strong>Transparent Pricing:</strong> No hidden fees. Pay for what you use.</span>
              </li>
            </ul>
          </div>

          {/* Schedule CTA */}
          <div className="text-center">
            <a href="/#schedule" className="btn-primary inline-block">
              Schedule Your Free Visit
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
