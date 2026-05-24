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

            {/* Base Rate Card */}
            <div style={{ backgroundColor: 'white', borderColor: 'var(--sage)', borderWidth: '2px' }} className="p-8 rounded-lg mb-8">
              <div className="flex items-baseline gap-4 mb-4">
                <span style={{ color: 'var(--sage)', fontSize: '3rem', fontWeight: '700', fontFamily: 'Fraunces' }}>$40</span>
                <span className="text-lg text-gray-600">/ hour &nbsp;·&nbsp; General labor rate for most services</span>
              </div>
              <p className="text-gray-600 mb-6">
                This covers light housekeeping, meal prep, technology help, paperwork support, yard work, pet care, nutrition guidance, vehicle support, and more. 1-hour minimum applies.
              </p>

              <div style={{ borderTopColor: 'var(--cream)', borderTopWidth: '2px' }} className="pt-6">
                <p className="font-semibold mb-4" style={{ color: 'var(--sage)' }}>Flat-rate exceptions:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">

                  {[
                    { name: 'Solo dog walk', note: '30 min', price: '$25' },
                    { name: 'Companion walk', note: '45 min', price: '$30' },
                    { name: 'Wellness check-in', note: '30 min', price: '$25' },
                    { name: 'Grocery run', note: '+ receipt', price: '$35' },
                    { name: 'Prescription pickup', note: '+ receipt', price: '$20' },
                    { name: 'Local ride', note: 'drop-off only', price: '$25' },
                    { name: 'Ride with wait', note: 'up to 1 hour', price: '$40' },
                    { name: 'Ride with wait', note: '1–2 hours', price: '$55' },
                    { name: 'Extended ride', note: '10–25 miles', price: '$50 + $1/mi' },
                    { name: 'Dog yard cleanup', note: 'per visit', price: '$20' },
                    { name: 'Pet check-in', note: 'while away', price: '$25' },
                    { name: 'Car wash run', note: '+ cost of wash', price: '$20' },
                    { name: 'Outdoor power wash', note: 'quoted by job', price: 'From $75' },
                    { name: 'Fuel run', note: 'flat rate', price: '$20' },
                    { name: 'Scam & fraud check-in', note: 'per visit', price: '$25' },
                  ].map((item, i) => (
                    <div
                      key={i}
                      style={{ backgroundColor: 'var(--cream)', borderRadius: '8px' }}
                      className="flex justify-between items-center px-4 py-3"
                    >
                      <div>
                        <span className="font-medium">{item.name}</span>
                        <span className="text-sm text-gray-500 ml-2">{item.note}</span>
                      </div>
                      <span className="font-bold ml-4 whitespace-nowrap" style={{ color: 'var(--sage)' }}>{item.price}</span>
                    </div>
                  ))}

                </div>
              </div>
            </div>
          </div>

          {/* Bundle Examples */}
          <div className="mb-16">
            <h2 style={{ color: 'var(--sage)' }} className="mb-2">Bundle Examples</h2>
            <p className="text-lg mb-6">Save when you commit to regular service. These are sample bundles — yours will be built around what works for you.</p>

            {/* Disclaimer */}
            <div style={{ backgroundColor: 'white', borderColor: 'var(--terracotta)', borderWidth: '1px', borderRadius: '8px' }} className="p-4 mb-8">
              <p className="text-sm" style={{ color: 'var(--terracotta)' }}>
                <strong>Every bundle is custom.</strong> The examples below show what a typical bundle might look like and what it could cost. Your actual bundle and price will be based on the specific services you choose. Call us and we'll build it together.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

              {/* Starter Bundle */}
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

              {/* Regular Support Bundle */}
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

              {/* Comprehensive Bundle */}
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
            <div style={{ backgroundColor: 'white', borderColor: '#e5e7eb', borderWidth: '1px' }} className="rounded-lg overflow-hidden">
              {[
                { label: 'À la carte', value: 'One-time services, billed after completion.' },
                { label: 'Bundles', value: 'Billed monthly. Cancel anytime with 7 days\' notice.' },
                { label: 'Payment', value: 'Check, Venmo, Zelle, Square, or cash. We keep it simple.' },
                { label: 'No hidden fees', value: 'What you see is what you pay.' },
              ].map((row, i, arr) => (
                <div
                  key={i}
                  style={{ borderBottomColor: '#f3f4f6', borderBottomWidth: i < arr.length - 1 ? '1px' : '0' }}
                  className="flex justify-between items-center px-6 py-4"
                >
                  <span className="font-semibold" style={{ color: 'var(--sage)' }}>{row.label}</span>
                  <span className="text-gray-600 text-right ml-4">{row.value}</span>
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
