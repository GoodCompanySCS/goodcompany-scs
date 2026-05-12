export default function Contact() {
  return (
    <>
      <section style={{ backgroundColor: 'var(--cream)' }} className="section-padding">
        <div className="container-max max-w-2xl">
          <h1 className="mb-8">Get In Touch</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            {/* Contact Info */}
            <div>
              <h2 style={{ color: 'var(--sage)' }} className="text-2xl mb-8">Contact Good Company</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2" style={{ color: 'var(--charcoal)' }}>Service Area</h3>
                  <p className="text-base">
                    Shelby Township<br />
                    Washington Township<br />
                    Rochester Hills, MI
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2" style={{ color: 'var(--charcoal)' }}>Email</h3>
                  <p className="text-base">
                    <a href="mailto:harleywal1980@gmail.com" className="text-sage hover:underline">
                      harleywal1980@gmail.com
                    </a>
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2" style={{ color: 'var(--charcoal)' }}>Business Hours</h3>
                  <p className="text-base">
                    Monday–Friday: 8:00 AM – 5:00 PM<br />
                    Saturday: By appointment<br />
                    Sunday: Closed
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2" style={{ color: 'var(--charcoal)' }}>Message</h3>
                  <p className="text-base">
                    Can't reach us by phone? Fill out the form on this page and we'll get back to you.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Info */}
            <div>
              <h2 style={{ color: 'var(--terracotta)' }} className="text-2xl mb-8">Why Schedule a Visit?</h2>
              <p className="text-base mb-6">
                The free first visit is a chance for us to get to know each other, talk through your needs, and answer any questions you may have. We’ll discuss what kind of support would be most helpful and whether Good Company feels like the right fit for you or your family.
              </p>
              <p className="text-base mb-6">
                If you decide to move forward, Natalie will also walk through a simple intake process to learn more about your routines, preferences, household needs, and anything important for providing reliable, personalized support.
              </p>
              <p className="text-base">
                There’s no pressure and no obligation. Just a comfortable conversation about how we may be able to help.
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
