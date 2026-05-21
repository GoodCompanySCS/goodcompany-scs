export default function Pricing() {
  return (
    <>
      <section style={{ backgroundColor: 'var(--cream)' }} className="section-padding">
        <div className="container-max">
          <h1 className="mb-4">Pricing</h1>
          <p className="text-lg mb-12 max-w-2xl">
            Every visit is backed by a bonded, insured, and background-checked local business you can trust. The services listed here are simply examples 
            of how we help. Whether you're looking for ongoing weekly support or a little extra help while recovering from surgery, we'll take the time 
            to understand your needs and create a plan that works for you. Give us a call and let's talk.
          </p>

          {/* À La Carte */}
          <div className="mb-16">
            <h2 style={{ color: 'var(--sage)' }} className="mb-4">À La Carte Services</h2>
            <p className="text-lg mb-4">
              Pay as you go for individual services.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div style={{ borderColor: 'var(--terracotta)', borderWidth: '1px' }} className="p-8 rounded-lg">
                <h3 className="mb-6">Flat-Rate Services</h3>
                <ul className="space-y-3">
                  <li className="flex justify-between">
          <span>Solo dog walk (30 min)</span>
          <span className="font-semibold">$25</span>
        </li>
        <li className="flex justify-between">
          <span>Companion walk (45 min)</span>
          <span className="font-semibold">$30</span>
        </li>
        <li className="flex justify-between">
          <span>Weekly dog yard cleanup</span>
          <span className="font-semibold">$20</span>
        </li>
        <li className="flex justify-between">
          <span>Wellness check-in (30 min)</span>
          <span className="font-semibold">$25</span>
        </li>
        <li className="pt-4 mt-4 border-t border-gray-200">
            <h4 className="text-4xl font-semibold mb-3">General Services</h4>
        </li>
        <li className="flex justify-between">
          <span>General Household Support*</span>
          <span className="font-semibold">$40/hour</span>
        </li>
        <li className="text-sm text-gray-600">1-hour minimum</li>
        <li className="text-xs text-gray-500 italic mt-2">*For services not listed in our flat-rate options above.</li>
                </ul>
              </div>

            <div style={{ borderColor: 'var(--sage)', borderWidth: '1px' }} className="p-8 rounded-lg">
                  <h3 className="mb-6">Errands & Yard Work</h3>
              <ul className="space-y-3">
        <li className="flex justify-between">
            <span>Grocery run</span>
            <span className="font-semibold">$35 + receipt</span>
        </li>
        <li className="flex justify-between">
             <span>Prescription pickup</span>
            <span className="font-semibold">$20 + receipt</span>
       </li>
       <li className="flex justify-between">
             <span>Driveway power wash</span>
             <span className="font-semibold">$90</span>
       </li>
       <li className="flex justify-between">
             <span>Seasonal yard cleanup (small)</span>
             <span className="font-semibold">$90</span>
       </li>
       <li className="pt-4 mt-4 border-t border-gray-200">
                      <h4 className="text-4xl font-semibold mb-3">Transportation</h4>
       </li>
       <li className="flex justify-between">
                  <span>Local ride (drop-off only)</span>
                  <span className="font-semibold">$25</span>
      </li>
      <li className="flex justify-between">
                <span>Ride with wait (up to 1 hour)</span>
                <span className="font-semibold">$40</span>
      </li>
      <li className="flex justify-between">
                 <span>Ride with wait (1–2 hours)</span>
                 <span className="font-semibold">$55</span>
       </li>
       <li className="flex justify-between">
                  <span>Extended ride (10–25 miles)</span>
                  <span className="font-semibold">$50 + $1/mile over 10</span>
        </li>
       <li className="text-xs text-gray-500 italic mt-2">Rides include companionship throughout the appointment.</li>
            </ul>
          </div>
            </div>
          </div>

          {/* Monthly Packages */}
          <div className="mb-16">
            <h2 style={{ color: 'var(--terracotta)' }} className="mb-4">Monthly Packages</h2>
            <p className="text-lg mb-4">
              Save money with regular service. Lock in predictable costs.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div style={{ borderColor: 'var(--sage)', borderWidth: '2px' }} className="p-8 rounded-lg">
                <h3 className="mb-6">Companion Services</h3>
                <ul className="space-y-3">
                  <li className="flex justify-between">
                    <span>3 Companion Walks/Week</span>
                    <span className="font-bold" style={{ color: 'var(--sage)' }}>$320/month</span>
                  </li>
                  <li className="flex justify-between">
                    <span>5 Companion Walks/Week</span>
                    <span className="font-bold" style={{ color: 'var(--sage)' }}>$500/month</span>
                  </li>
                </ul>
              </div>

              <div style={{ borderColor: 'var(--terracotta)', borderWidth: '2px' }} className="p-8 rounded-lg">
                <h3 className="mb-6">Household & Wellness</h3>
                <ul className="space-y-3">
                  <li className="flex justify-between">
                    <span>Bi-weekly housekeeping</span>
                    <span className="font-bold" style={{ color: 'var(--terracotta)' }}>$150/month</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Weekly housekeeping</span>
                    <span className="font-bold" style={{ color: 'var(--terracotta)' }}>$290/month</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Weekly yard cleanup</span>
                    <span className="font-bold" style={{ color: 'var(--terracotta)' }}>$70/month</span>
                  </li>
                </ul>
              </div>

              <div style={{ borderColor: 'var(--sage)', borderWidth: '2px' }} className="p-8 rounded-lg">
                <h3 className="mb-6">Pet Care</h3>
                <ul className="space-y-3">
                  <li className="flex justify-between">
                    <span>Daily solo walks (20 walks/month)</span>
                    <span className="font-bold" style={{ color: 'var(--sage)' }}>$450/month</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* All-Inclusive Bundles */}
          <div className="mb-16">
            <h2 style={{ color: 'var(--sage)' }} className="mb-4">All-Inclusive Bundles*</h2>
           <p className="text-lg mb-4">One monthly bill. Everything included. Perfect for seniors who want to simplify.</p>
<p className="text-lg mb-4">*We understand that every household is different. Bundle services can be adjusted to fit individual routines and needs.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div style={{ borderColor: 'var(--terracotta)', borderWidth: '2px' }} className="p-8 rounded-lg">
                <div style={{ backgroundColor: 'var(--terracotta)', color: 'white' }} className="inline-block px-4 py-2 rounded mb-6 text-sm font-semibold">
                  Good for starting out
                </div>
                <h3 className="mb-2">Essentials Bundle</h3>
                <p className="text-lg mb-4 italic">Reliable support for the basics.</p>
                <p style={{ color: 'var(--terracotta)', fontSize: '1.5rem' }} className="font-bold mb-6">$295/month</p>
                <ul className="space-y-2 text-sm">
                  <li>✓ 1 companion walk per week</li>
                  <li>✓ 2 errand or grocery runs per month</li>
                  <li>✓ 1 wellness check-in per week</li>
                  <li>✓ Priority scheduling</li>
                </ul>
              </div>

              <div style={{ borderColor: 'var(--sage)', borderWidth: '4px' }} className="p-8 rounded-lg">
                <div style={{ backgroundColor: 'var(--sage)', color: 'white' }} className="inline-block px-4 py-2 rounded mb-6 text-sm font-semibold">
                  Most popular
                </div>
                <h3 className="mb-2">Companion Bundle</h3>
                <p className="text-lg mb-4 italic">Consistent weekly support and companionship.</p>
                <p style={{ color: 'var(--sage)', fontSize: '1.5rem' }} className="font-bold mb-6">$425/month</p>
                <ul className="space-y-2 text-sm">
                  <li>✓ 3 companion walks per week</li>
                  <li>✓ 3 errand or grocery runs per month</li>
                  <li>✓ 2 wellness check-ins per week</li>
                  <li>✓ Priority scheduling</li>
                  <li>✓ Flexible monthly service adjustments</li>
                </ul>
              </div>

              <div style={{ borderColor: 'var(--terracotta)', borderWidth: '2px' }} className="p-8 rounded-lg">
                <div style={{ backgroundColor: 'var(--terracotta)', color: 'white' }} className="inline-block px-4 py-2 rounded mb-6 text-sm font-semibold">
                  Comprehensive support
                </div>
                <h3 className="mb-2">Comprehensive Bundle</h3>
                <p className="text-lg mb-4 italic">Ongoing support for everyday living.</p>
                <p style={{ color: 'var(--terracotta)', fontSize: '1.5rem' }} className="font-bold mb-6">$695/month</p>
                <ul className="space-y-2 text-sm">
                  <li>✓ 5 companion walks per week</li>
                  <li>✓ Weekly errand or grocery support</li>
                  <li>✓ 2 wellness check-ins per week</li>
                  <li>✓ Bi-weekly light housekeeping</li>
                  <li>✓ Priority scheduling</li>
                  <li>✓ Flexible monthly service adjustments</li>
                </ul>
              </div>

              <div style={{ borderColor: 'var(--sage)', borderWidth: '2px' }} className="p-8 rounded-lg">
                <div style={{ backgroundColor: 'var(--sage)', color: 'white' }} className="inline-block px-4 py-2 rounded mb-6 text-sm font-semibold">
                  Full support
                </div>
                <h3 className="mb-2">Premier Bundle</h3>
                <p className="text-lg mb-4 italic">Full weekly support for home and routine.</p>
                <p style={{ color: 'var(--sage)', fontSize: '1.5rem' }} className="font-bold mb-6">$1095/month</p>
                <ul className="space-y-2 text-sm">
                  <li>✓ 5 companion walks per week</li>
                  <li>✓ Weekly grocery and errand support</li>
                  <li>✓ 3 wellness check-ins per week</li>
                  <li>✓ Weekly light housekeeping</li>
                  <li>✓ Weekly yard maintenance</li>
                  <li>✓ Priority scheduling</li>
                  <li>✓ Flexible monthly service adjustments</li>
                  <li>✓ Dedicated recurring visit schedule</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: 'var(--terracotta)', color: 'white' }} className="section-padding">
        <div className="container-max text-center">
          <h2 style={{ color: 'white' }} className="mb-6">Not where to start? That's okay</h2>
          <p className="text-lg mb-8">
            The services listed on our website are just examples of the ways we help. If you're facing a unique situation or aren't sure what kind of 
            support would be most helpful, give us a call or schedule your first free visit. We'll walk you through it together and find the right solution.
          </p>
          <a href="/#schedule" className="btn-primary">
            Schedule Free Visit
          </a>
        </div>
      </section>
    </>
  );
}
