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

            <div className="mb-12">
              <h2 style={{ color: 'var(--terracotta)' }} className="mb-6">Meet Natalie</h2>

            <p className="text-lg mb-6">Good Company is owned and operated by Natalie, a former U.S. Army Contract Specialist with a background in federal procurement and contract management.</p>
            <p className="text-lg mb-6">For years, Natalie worked in roles that required professionalism, reliability, attention to detail, and strong communication. Those same values now shape every part of Good Company.</p>
            <p className="text-lg mb-6">The idea for Good Company came from something much more personal though. For the past two years, Natalie and her husband Chris have spent countless evenings walking the neighborhoods of Shelby Township for exercise. During those walks, they found themselves naturally stopping to help senior neighbors with everyday things that had quietly become difficult.</p>
            <p className="text-lg mb-6">Sometimes it was bringing trash cans back up to the garage after pickup day. Other times it meant helping someone who had fallen while walking their dog, getting the dog's harness back on, and helping them safely back onto their feet. One evening, Natalie and Chris came across a woman standing outside alone in the cold who appeared confused and disoriented. They stayed with her, helped contact medical assistance, and made sure she was safe.</p>
            <p className="text-lg mb-6">Those moments stuck with Natalie.</p>
            <p className="text-lg mb-6">She realized that many seniors are doing their best to remain independent, but sometimes an extra set of hands, a familiar face, or a little support can make a big difference. Not because they are incapable, but because everyday life is simply easier when someone dependable is alongside you.</p>
            <p className="text-lg mb-6">That realization became the foundation for Good Company.</p>
            <p className="text-lg mb-6">Natalie believes the best service is personal. It means showing up consistently, communicating clearly, and treating people the way you would want your own family treated.</p>
            <p className="text-lg mb-6">From scheduling and client communication to day-to-day visits, Natalie personally manages every aspect of the business. When you call Good Company, you are speaking directly with the person providing the service.</p>
            <p className="text-lg mb-6">You are never treated like a number. You are treated like a neighbor.</p>
            </div>

            <div className="mb-12">
              <h2 style={{ color: 'var(--sage)' }} className="mb-6">Why We Do This</h2>
              <p className="text-lg mb-6">
                Many seniors do not need medical care or major assistance. They simply need reliable support, practical help, and someone dependable alongside them for the things that feel harder alone.
              </p>
              <p className="text-lg mb-6">
                That is what Good Company is here to provide.
              </p>
            </div>

            <div className="mb-8 pb-8 border-b border-gray-200">
              <h2 style={{ color: 'var(--terracotta)' }} className="mb-6">Our Standards</h2>
              <ul className="space-y-6">
                <li>
                  <h3 style={{ color: 'var(--charcoal)' }} className="font-semibold mb-2">Bonded & Insured</h3>
                  <p className="text-base">Good Company is fully bonded and insured so families can feel confident and comfortable welcoming us into their home.</p>
                </li>
                <li>
                  <h3 style={{ color: 'var(--charcoal)' }} className="font-semibold mb-2">Background Checked</h3>
                  <p className="text-base">Trust matters. Every client deserves to feel safe knowing the person showing up at their door has been thoroughly screened and vetted.</p>
                </li>
                <li>
                  <h3 style={{ color: 'var(--charcoal)' }} className="font-semibold mb-2">Owned & Operated Locally</h3>
                  <p className="text-base">Good Company is owned and operated right here in the community we serve. We know the neighborhoods, value personal relationships, and believe local businesses should feel personal.</p>
                </li>
                <li>
                  <h3 style={{ color: 'var(--charcoal)' }} className="font-semibold mb-2">Respect & Dignity</h3>
                  <p className="text-base">We believe support should always feel respectful and empowering. Seniors are capable adults, and we treat every client with patience, kindness, and dignity.</p>
                </li>
                <li>
                  <h3 style={{ color: 'var(--charcoal)' }} className="font-semibold mb-2">Reliability</h3>
                  <p className="text-base">We show up when we say we will, communicate clearly, and provide dependable service families can count on.</p>
                </li>
              </ul>
            </div>

            <div className="mb-8 pb-8 border-b border-gray-200">
              <h2 style={{ color: 'var(--sage)' }} className="mb-6">Service Area</h2>
              <p className="text-lg mb-4">
                Good Company currently serves seniors in:
              </p>
              <ul className="space-y-1 text-lg">
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
