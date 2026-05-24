import BundleBuilder from '../components/BundleBuilder';

export default function Pricing() {

export default function Pricing() {
  return (
    <>
      <section style={{ backgroundColor: 'var(--cream)' }} className="section-padding">
        <div className="container-max">
          <h1 className="mb-4">Simple, honest pricing.</h1>
          <p className="text-lg mb-12 max-w-2xl">
            Every visit is backed by a bonded, insured, and background-checked local professional. All pricing is upfront — no surprises, no hidden fees. Bundles are built around you, so your price will vary based on the services you choose.
          </p>

          {/* À La Carte */}
          <div className="mb-16">
            <h2 style={{ color: 'var(--terracotta)' }} className="mb-2">À La Carte Services</h2>
            <p className="text-lg mb-8">Pay as you go. No commitment required.</p>

            {/* Base Rate */}
            <div style={{ backgroundColor: 'white', borderColor: 'var(--sage)', borderWidth: '2px' }} className="p-8 rounded-lg mb-8">
              <div className="flex items-baseline gap-4 mb-4">
                <span style={{ color: 'var(--sage)', fontSize: '3rem', fontWeight: '700', fontFamily: 'Fraunces' }}>$40</span>
                <span className="text-lg text-gray-600">/ hour &nbsp;·&nbsp; General labor rate for most services</span>
              </div>
              <p className="text-gray-600">
                This covers technology assistance, meal prep, nutrition guidance, light housekeeping, home & yard services, and family caregiver relief. 1-hour minimum applies.
              </p>
            </div>

            {/* Flat-Rate Categories */}
            <p className="font-semibold text-lg mb-4" style={{ color: 'var(--sage)' }}>Flat-rate services:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

              {/* Companionship & Wellness */}
              <div style={{ borderColor: 'var(--terracotta)', borderWidth: '1px' }} className="p-8 rounded-lg">
                <h3 className="mb-6">Companionship & Wellness</h3>
                <ul className="space-y-3">
                  <li className="flex justify-between">
                    <span>Companion walk <span className="text-sm text-gray-500">(45 min)</span></span>
                    <span className="font-semibold">$30</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Solo dog walk <span className="text-sm text-gray-500">(30 min)</span></span>
                    <span className="font-semibold">$25</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Wellness check-in <span className="text-sm text-gray-500">(30 min)</span></span>
                    <span className="font-semibold">$25</span>
                  </li>
                </ul>
              </div>

              {/* Errands & Transportation */}
              <div style={{ borderColor: 'var(--sage)', borderWidth: '1px' }} className="p-8 rounded-lg">
                <h3 className="mb-6">Errands & Transportation</h3>
                <ul className="space-y-3">
                  <li className="flex justify-between">
                    <span>Grocery run <span className="text-sm text-gray-500">(+ receipt)</span></span>
                    <span className="font-semibold">$35</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Prescription pickup <span className="text-sm text-gray-500">(+ receipt)</span></span>
                    <span className="font-semibold">$20</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Local ride <span className="text-sm text-gray-500">(drop-off only)</span></span>
                    <span className="font-semibold">$25</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Ride with wait <span className="text-sm text-gray-500">(up to 1 hour)</span></span>
                    <span className="font-semibold">$40</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Ride with wait <span className="text-sm text-gray-500">(1–2 hours)</span></span>
                    <span className="font-semibold">$55</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Extended ride <span className="text-sm text-gray-500">(10–25 miles)</span></span>
                    <span className="font-semibold">$50 + $1/mi over 10</span>
                  </li>
                  <li className="text-xs text-gray-500 italic mt-2">Rides include companionship throughout the appointment.</li>
                </ul>
              </div>

              {/* Pet Care */}
              <div style={{ borderColor: 'var(--terracotta)', borderWidth: '1px' }} className="p-8 rounded-lg">
                <h3 className="mb-6">Pet Care</h3>
                <ul className="space-y-3">
                  <li className="flex justify-between">
                    <span>Dog yard cleanup <span className="text-sm text-gray-500">(per visit)</span></span>
                    <span className="font-semibold">$20</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Pet check-in <span className="text-sm text-gray-500">(while away)</span></span>
                    <span className="font-semibold">$25</span>
                  </li>
                </ul>
              </div>

              {/* Vehicle Support */}
              <div style={{ borderColor: 'var(--sage)', borderWidth: '1px' }} className="p-8 rounded-lg">
                <h3 className="mb-6">Vehicle Support</h3>
                <ul className="space-y-3">
                  <li className="flex justify-between">
                    <span>Car wash run <span className="text-sm text-gray-500">(+ cost of wash)</span></span>
                    <span className="font-semibold">$20</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Fuel run <span className="text-sm text-gray-500">(flat rate)</span></span>
                    <span className="font-semibold">$20</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Outdoor power wash <span className="text-sm text-gray-500">(quoted by job)</span></span>
                    <span className="font-semibold">From $75</span>
                  </li>
                </ul>
              </div>

              {/* Paperwork & Safety Support */}
              <div style={{ borderColor: 'var(--terracotta)', borderWidth: '1px' }} className="p-8 rounded-lg">
                <h3 className="mb-6">Paperwork & Safety Support</h3>
                <ul className="space-y-3">
                  <li className="flex justify-between">
                    <span>Scam & fraud check-in <span className="text-sm text-gray-500">(per visit)</span></span>
                    <span className="font-semibold">$25</span>
                  </li>
                  <li className="text-xs text-gray-500 italic mt-2">Mail assistance, paperwork help, and letter writing are billed at the $40/hour general rate.</li>
                </ul>
              </div>

            </div>
          </div>

          {/* Bundle Builder */}
          <div className="mb-16">
            <h2 style={{ color: 'var(--terracotta)' }} className="mb-2">Build Your Own Bundle</h2>
            <p className="text-lg mb-8">Select the services you want and see your estimated monthly cost in real time.</p>
            <BundleBuilder />
          </div>

          {/* Bundle Examples */}
          <div className="mb-16">
            <h2 style={{ color: 'var(--sage)' }} className="mb-2">Bundle Examples</h2>
            <p className="text-lg mb-6">Save when you commit to regular service. These are sample bundles — yours will be built around what works for you.</p>

            <div style={{ backgroundColor: 'white', borderColor: 'var(--terracotta)', borderWidth: '1px', borderRadius: '8px' }} className="p-4 mb-8">
              <p className="text-sm" style={{ color: 'var(--terracotta)' }}>
                <strong>Every bundle is custom.</strong> The examples below show what a typical bundle might look like and what it could cost. Your actual bundle and price will be based on the specific services you choose. Call us and we'll build it together.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

              <div style={{ backgroundColor: 'white', borderColor: 'var(--terracotta)', borderWidth: '1px' }} className="p-6 rounded-lg">
                <div style={{ backgroundColor: 'var(--terracotta)', color: 'white' }} className="inline-block px-3 py-1 rounded text-xs font-semibold mb-4">
                  Light support
                </div>
                <h3 className="mb-1">Starter Bundle</h3>
                <p style={{ color: 'var(--terracotta)', fontSize: '1.75rem' }} className="font-bold mb-1">~$335</p>
                <p className="text-sm text-gray-500 mb-4">/ month &nbsp;·&nbsp; example only</p>
                <ul className="space-y-2 text-sm">
                  {[
                    '1 companion walk per week',
                    '2 errand or grocery runs per month',
                    '1 wellness check-in per week',
                    'Priority scheduling',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span style={{ color: 'var(--sage)' }} className="font-bold mt-0.5">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{ backgroundColor: 'white', borderColor: 'var(--sage)', borderWidth: '3px' }} className="p-6 rounded-lg">
                <div style={{ backgroundColor: 'var(--sage)', color: 'white' }} className="inline-block px-3 py-1 rounded text-xs font-semibold mb-4">
                  Most requested
                </div>
                <h3 className="mb-1">Regular Support Bundle</h3>
                <p style={{ color: 'var(--sage)', fontSize: '1.75rem' }} className="font-bold mb-1">~$565</p>
                <p className="text-sm text-gray-500 mb-4">/ month &nbsp;·&nbsp; example only</p>
                <ul className="space-y-2 text-sm">
                  {[
                    '3 companion walks per week',
                    '3 errand or grocery runs per month',
                    '2 wellness check-ins per week',
                    'Priority scheduling',
                    'Flexible monthly service adjustments',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span style={{ color: 'var(--sage)' }} className="font-bold mt-0.5">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{ backgroundColor: 'white', borderColor: 'var(--terracotta)', borderWidth: '1px' }} className="p-6 rounded-lg">
                <div style={{ backgroundColor: 'var(--terracotta)', color: 'white' }} className="inline-block px-3 py-1 rounded text-xs font-semibold mb-4">
                  Full support
                </div>
                <h3 className="mb-1">Comprehensive Bundle</h3>
                <p style={{ color: 'var(--terracotta)', fontSize: '1.75rem' }} className="font-bold mb-1">~$935</p>
                <p className="text-sm text-gray-500 mb-4">/ month &nbsp;·&nbsp; example only</p>
                <ul className="space-y-2 text-sm">
                  {[
                    '5 companion walks per week',
                    'Weekly errand or grocery support',
                    '2 wellness check-ins per week',
                    'Bi-weekly light housekeeping',
                    'Priority scheduling',
                    'Flexible monthly service adjustments',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span style={{ color: 'var(--sage)' }} className="font-bold mt-0.5">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>

          {/* How Pricing Works */}
          <div className="mb-16">
            <h2 style={{ color: 'var(--sage)' }} className="mb-6">How pricing works</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { label: 'À la carte', value: 'One-time services, billed after completion.' },
                { label: 'Bundles', value: 'Billed monthly. Cancel anytime with 7 days\' notice.' },
                { label: 'Payment', value: 'Check, Venmo, Zelle, Square, or cash. We keep it simple.' },
                { label: 'No hidden fees', value: 'What you see is what you pay.' },
              ].map((row, i) => (
                <div key={i} className="flex items-start gap-3 p-4">
                  <div>
                    <p className="font-semibold text-gray-800">{row.label}</p>
                    <p className="text-gray-600 text-sm mt-1">{row.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: 'var(--terracotta)', color: 'white' }} className="section-padding">
        <div className="container-max text-center">
          <h2 style={{ color: 'white' }} className="mb-6">Not sure where to start? That's okay.</h2>
          <p className="text-lg mb-8">
            The services listed on our website are just examples of the ways we help. If you're facing a unique situation or aren't sure what kind of support would be most helpful, give us a call or schedule your first free visit. We'll walk you through it together and find the right solution.
          </p>
          <a href="/#schedule" className="btn-primary">
            Schedule Free Visit
          </a>
        </div>
      </section>
    </>
  );
}
