export default function FAQ() {
  const faqs = [
    {
      category: "About Our Services",
      color: "sage",
      questions: [
        {
          q: "What exactly is a senior concierge service?",
          a: "A senior concierge service provides practical, non-medical support to help older adults live comfortably and independently at home. Think of us as a trusted helping hand for the everyday tasks that become more difficult or time-consuming, from errands and companionship to pet care, housekeeping, and more."
        },
        {
          q: "Do you provide medical care or help with medications?",
          a: "No. Good Company is a non-medical service. We do not administer medications, provide medical advice, or provide clinical care. If medical support is needed, we're happy to help connect you with the appropriate healthcare resources."
        },
        {
          q: "What areas do you serve?",
          a: "We currently serve Shelby Township, Washington Township, and Rochester Hills. If you're located nearby but outside our service area, give us a call. We'll be happy to discuss your situation."
        },
        {
          q: "How is this different from a home health aide?",
          a: "Home health aides provide medical and personal care services. Good Company focuses on the practical support that helps make everyday life easier, including companionship, errands, housekeeping, pet care, meal preparation, and technology assistance. Families can use both services together, relying on a home health aide for medical needs and Good Company for everything else."
        },
         {
          q: "Do you offer one-time or short-term help, or is this a long-term commitment?",
          a: "Good Company is built around flexibility.\n\nSome clients may call us for a single visit, whether it's an errand, a companion visit, or help while family members are away. Others may need short-term support during a recovery period or while a caregiver is traveling. While others may choose ongoing visits as part of a regular routine.\n\nThere is no long-term commitment required. If you'd like recurring support, our monthly bundle plans provide a predictable schedule and a 10% discount off standard rates. Plans can be changed or canceled with just 7 days' notice.\n\nWe'll work with you to create a plan that fits your needs, whether that's one visit or ongoing support."
        },
      ]
    },
    {
      category: "About Us",
      color: "terracotta",
      questions: [
        {
          q: "Who will be coming to my home?",
          a: "At this time, Natalie, the owner of Good Company, personally provides all services and manages every client relationship. When you call Good Company, you're speaking directly with the person who will be showing up at your door. You'll always see the same familiar face. If that ever changes, you'll be informed in advance and introduced to anyone who may be providing services in your home. You'll never be surprised by an unfamiliar face at your door."
        },
        {
          q: "Are you bonded, insured, and background checked?",
          a: "Yes. Good Company is fully bonded, insured, and background checked, so families can feel confident and comfortable welcoming us into their home."
        },
        {
          q: "Are you licensed?",
          a: "Good Company is a registered LLC in the state of Michigan. As a non-medical concierge service, we are not required to hold a medical, clinical, or any other type of professional license."
        },
        {
          q: "How do I know I can trust someone coming into my home?",
          a: "Trust is at the heart of everything we do. Natalie is fully background checked, bonded, and insured. More importantly, Good Company was built on years of helping neighbors right here in Shelby Township. Every client is treated with the same care, respect, and attention we would want for our own family members."
        },
      ]
    },
    {
      category: "Getting Started",
      color: "sage",
      questions: [
        {
          q: "How do I get started?",
          a: "Getting started is easy. Schedule a free first visit by calling 586-217-2898, emailing hello@goodcompanyscs.com, or filling out the contact form on our website. We'll set up a time to meet, learn more about your situation, and discuss how we may be able to help. There's no pressure and no obligation."
        },
        {
          q: "What happens during the free first visit?",
          a: "The free first visit is simply a chance for us to get to know each other. We'll meet in your home, talk about your needs, answer any questions you may have, and discuss which services might be helpful. If you'd like to move forward, we can create a plan together. If you'd rather take some time to think about it, that's perfectly fine too."
        },
        {
          q: "Do you work with families or just the senior directly?",
          a: "Both. We work with adult children and other family members who help coordinate support for a loved one. We're happy to keep family members informed, coordinate schedules, and serve as a trusted local point of contact when needed."
        },
      ]
    },
    {
      category: "Scheduling & Cancellations",
      color: "terracotta",
      questions: [
        {
          q: "How far in advance do I need to book?",
          a: "As much notice as possible is always appreciated, but we'll do our best to accommodate your schedule whenever we can. Clients with recurring services are placed on a regular schedule, so their visits are reserved in advance."
        },
        {
          q: "What if I need to cancel or reschedule?",
          a: "We understand that plans change. Just give us a call or send us a message as soon as possible and we'll work with you to reschedule (subject to our timeline and cancellation policy.)"
        },
        {
          q: "Can I get the same person every time?",
          a: "At this time, yes. Natalie personally provides all services, so you'll see the same familiar face at each visit. As Good Company grows, clients who prefer to work with the same caregiver will continue to have that option whenever possible. If another team member is ever assigned to your visits, you'll be notified in advance and introduced before services begin. You'll always know who is coming to your home."
        },
      ]
    },
    {
      category: "Pricing & Billing",
      color: "sage",
      questions: [
        {
          q: "Do I have to sign a contract?",
          a: "No long-term contracts are required. À la carte services are billed after each visit. Bundle plans can be changed or canceled with 7 days' notice."
        },
        {
          q: "How do I pay for services?",
          a: "À la carte services are billed after each visit, while bundle plans are billed monthly. We accept check, credit card, cash, Venmo, and Square, so you can choose whichever payment method is most convenient for you."
        },
        {
          q: "How do bundles work?",
          a: "Bundles combine multiple services into one predictable monthly plan. Bundle clients receive a 10% discount off standard à la carte pricing and enjoy a recurring schedule built around their routine. Services can be adjusted from month to month, and plans can be changed or canceled with 7 days' notice. You can also use the bundle builder on our pricing page to explore options and estimate costs."
        },
        {
          q: "What if something goes wrong during a visit?",
          a: "Good Company carries full liability insurance for added peace of mind. If something unexpected happens, we'll communicate openly, address the situation promptly, and handle it professionally."
        },
      ]
    },
  ];

  return (
    <>
      <section style={{ backgroundColor: 'var(--cream)' }} className="section-padding">
        <div className="container-max">
          <h1 className="mb-4">Frequently Asked Questions</h1>
          <p className="text-lg mb-12 max-w-2xl">
            Have a question that's not covered below? Give us a call at 586-217-2898 or email hello@goodcompanyscs.com. We'll be happy to talk it through with you.
          </p>

          <div className="space-y-16">
            {faqs.map((section, si) => (
              <div key={si}>
                <h2
                  style={{ color: section.color === 'sage' ? 'var(--sage)' : 'var(--terracotta)' }}
                  className="mb-8"
                >
                  {section.category}
                </h2>
                <div className="space-y-6">
                  {section.questions.map((item, qi) => (
                    <div
                      key={qi}
                      style={{ borderLeftColor: section.color === 'sage' ? 'var(--sage)' : 'var(--terracotta)', borderLeftWidth: '3px' }}
                      className="pl-6"
                    >
                      <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--charcoal)' }}>
                        {item.q}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">{item.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: 'var(--sage)', color: 'white' }} className="section-padding">
        <div className="container-max text-center">
          <h2 style={{ color: 'white' }} className="mb-6">Still have questions?</h2>
          <p className="text-lg mb-8" style={{ color: 'white' }}>
            We're happy to talk through anything. Schedule a free first visit and we'll answer every question in person.
          </p>
          <a href="/#schedule" className="btn-secondary">
            Schedule Free Visit
          </a>
        </div>
      </section>
    </>
  );
}
