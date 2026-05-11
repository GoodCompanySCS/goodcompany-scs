export default function About() {
  return (
    <>
      <section style={{ backgroundColor: 'var(--cream)' }} className="section-padding">
        <div className="container-max">
          <h1 className="mb-8">About Good Company</h1>

          <div className="max-w-3xl">
            <div className="mb-12">
              <h2 style={{ color: 'var(--sage)' }} className="mb-6">Our Mission</h2>
              <p className="text-lg mb-4">
                Good Company helps seniors stay home, stay independent, and stay themselves by being the trusted neighbor who shows up for the things they’d rather not do alone.
              </p>
              <p className="text-lg">
               We believe aging in place looks different for everyone. For some, it means keeping a familiar routine. For others, it means staying connected to their neighborhood, their pets, or the home they love. More than anything, it means having the freedom to continue living life on your own terms.
              </p>
              <div className="h-4"></div>
              <p className="text-lg">
               That’s why Good Company was built around practical support, dependable service, and treating every client with dignity and respect.
              </p>
            </div>

            <div className="mb-12 pb-12 border-b border-gray-200">
              <h2 style={{ color: 'var(--terracotta)' }} className="mb-6">Meet Natalie</h2>
              <p className="text-lg mb-6">
                Good Company is owned and operated by Natalie, a former U.S. Army Contract Specialist. For years, Natalie managed complex contracts and procurement for the federal government—work that required absolute precision, deep trust, and an unflinching commitment to doing things right.
              </p>
              <p className="text-lg mb-6">
                That same precision and integrity now goes into every service Good Company provides. Natalie brings a background of federal security clearance work and contract management to the business. She understands what it means to earn trust. She understands accountability.
              </p>
              <p className="text-lg mb-6">
                Natalie's background taught her that the best work is done with quiet professionalism and a deep respect for the people you serve. Those lessons shaped Good Company from day one.
              </p>
              <p className="text-lg">
                Today, Natalie manages every aspect of Good Company personally—from scheduling to quality assurance to answering your phone call. You're never just a case number. You're a neighbor.
              </p>
            </div>

            <div className="mb-12">
              <h2 style={{ color: 'var(--sage)' }} className="mb-6">Why We Do This</h2>
              <p className="text-lg mb-6">
                Aging well means more than staying healthy—it means staying connected, staying active, and staying in control of your own life. Too many seniors face a choice: either struggle to manage everything themselves, or give up their independence.
              </p>
              <p className="text-lg mb-6">
                We exist to offer a third way. We're not a replacement for family or medical care. We're the trusted help that lets someone keep doing the things that matter—walking the dog, getting to the store, keeping the house the way they like it—without having to do it all alone.
              </p>
              <p className="text-lg">
                A senior who can keep walking their dog with someone alongside them keeps their independence longer. That's what we're about.
              </p>
            </div>

            <div className="mb-12 pb-12 border-b border-gray-200">
              <h2 style={{ color: 'var(--terracotta)' }} className="mb-6">Our Standards</h2>
              <ul className="space-y-6">
                <li>
                  <h3 style={{ color: 'var(--charcoal)' }} className="font-semibold mb-2">Bonded & Insured</h3>
                  <p className="text-base">Full bonding and comprehensive liability insurance. Your peace of mind is non-negotiable.</p>
                </li>
                <li>
                  <h3 style={{ color: 'var(--charcoal)' }} className="font-semibold mb-2">Background Checked</h3>
                  <p className="text-base">Thorough screening and vetting. We wouldn't let anyone into our own family's home without it.</p>
                </li>
                <li>
                  <h3 style={{ color: 'var(--charcoal)' }} className="font-semibold mb-2">Owned & Operated Locally</h3>
                  <p className="text-base">This is Natalie's business, in her community. She knows the neighborhoods. She shows up personally.</p>
                </li>
                <li>
                  <h3 style={{ color: 'var(--charcoal)' }} className="font-semibold mb-2">Respect & Dignity</h3>
                  <p className="text-base">We never infantilize, never patronize, never make assumptions. Seniors are capable adults, and we treat them that way.</p>
                </li>
                <li>
                  <h3 style={{ color: 'var(--charcoal)' }} className="font-semibold mb-2">Reliability</h3>
                  <p className="text-base">We show up when we say we will. We do what we commit to. We're consistent, predictable, and dependable.</p>
                </li>
              </ul>
            </div>

            <div>
              <h2 style={{ color: 'var(--sage)' }} className="mb-6">Service Area</h2>
              <p className="text-lg mb-4">
                Good Company serves seniors in:
              </p>
              <ul className="space-y-2 text-lg">
                <li>Shelby Township</li>
                <li>Washington Township</li>
                <li>Rochester Hills, Michigan</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: 'var(--sage)', color: 'white' }} className="section-padding">
        <div className="container-max text-center">
          <h2 style={{ color: 'white' }} className="mb-6">Ready to talk?</h2>
          <p className="text-lg mb-8">
            Schedule a free visit. Meet Natalie. Discuss what Good Company can do for you.
          </p>
          <a href="/#schedule" className="btn-secondary">
            Schedule Free Visit
          </a>
        </div>
      </section>
    </>
  );
}
