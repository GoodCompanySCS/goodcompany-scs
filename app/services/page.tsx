export default function Services() {
  return (
    <>
      <section style={{ backgroundColor: 'var(--cream)' }} className="section-padding">
        <div className="container-max">
          <h1 className="mb-8">Our Services</h1>
          <p className="text-lg mb-12 max-w-3xl">
            We offer personalized support designed to help seniors stay home, stay independent, and stay themselves. Whether you’re looking for regular weekly help or occasional support, we’re here to make everyday life feel a little easier.
The services below are some of the most common ways we help. If there’s something you need that isn’t listed, just ask. We’re happy to build a plan around what works best for you and your family.
          </p>

          {/* Companion Services */}
          <div id="companion" className="mb-12 pb-12 border-b border-gray-200">
            <h2 style={{ color: 'var(--sage)' }} className="mb-6">Companion Services</h2>
            <p className="text-lg mb-6">
              Our signature service, because many things feel easier with someone alongside you.
<div className="h-6"></div>
Whether it’s a walk around the neighborhood, a trip to the store, or simply a regular check-in, companion services provide support, conversation, and peace of mind while helping seniors maintain their routines and independence.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <span style={{ color: 'var(--terracotta)' }} className="font-bold mr-3">•</span>
                <span><strong>Companion Walks:</strong> We walk alongside seniors for safe, comfortable walks that encourage movement, confidence, fresh air, and connection.</span>
              </li>
              <li className="flex items-start">
                <span style={{ color: 'var(--terracotta)' }} className="font-bold mr-3">•</span>
                <span><strong>Companion Errand Runs:</strong> Trips to the grocery store, pharmacy, appointments, or other errands are easier when you don’t have to go alone.</span>
              </li>
              <li className="flex items-start">
                <span style={{ color: 'var(--terracotta)' }} className="font-bold mr-3">•</span>
                <span><strong>Wellness Check-Ins:</strong> Friendly visits to chat, check in, and make sure everything is going smoothly at home.</span>
              </li>
            </ul>
          </div>

          {/* Pet Services */}
          <div id="pet" className="mb-4 pb-4 border-b border-gray-200">
            <h2 style={{ color: 'var(--terracotta)' }} className="mb-6">Pet Services</h2>
            <p className="text-lg mb-6">
              Pets are family, and we help seniors continue enjoying the companionship and routine that pets bring.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <span style={{ color: 'var(--sage)' }} className="font-bold mr-3">•</span>
                <span><strong>Solo Dog Walks:</strong> We walk small to medium dogs (up to 60 lbs) to help keep pets active, exercised, and happy.</span>
              </li>
              <li className="flex items-start">
                <span style={{ color: 'var(--sage)' }} className="font-bold mr-3">•</span>
                <span><strong>Dog Yard or Kitty Litter Cleanup:</strong> Routine cleanup services help keep outdoor spaces and litter areas tidy, clean, and manageable.</span>
              </li>
              <li className="flex items-start">
                <span style={{ color: 'var(--sage)' }} className="font-bold mr-3">•</span>
                <span><strong>Reliable feeding and check-in visits while clients are away at appointments, traveling, or simply needing an extra hand.</strong></span>
              </li>
            </ul>
          </div>

          {/* Housekeeping */}
          <div id="housekeeping" className="mb-4 pb-4 border-b border-gray-200">
            <h2 style={{ color: 'var(--sage)' }} className="mb-6">Housekeeping & Meal Prep</h2>
            <p className="text-lg mb-6">
              A comfortable home makes everyday life easier. We help with routine upkeep so seniors can focus on enjoying their home, not struggling to maintain it.
            </p>
            <ul className="space-y-3 mb-4">
              <li className="flex items-start">
                <span style={{ color: 'var(--terracotta)' }} className="font-bold mr-3">•</span>
                <span><strong>General Tidying:</strong> Organizing, dusting, straightening, and keeping common areas comfortable and functional.</span>
              </li>
              <li className="flex items-start">
                <span style={{ color: 'var(--terracotta)' }} className="font-bold mr-3">•</span>
                <span><strong>Dishes & Laundry:</strong> Help with everyday household tasks that can become tiring or time-consuming.</span>
              </li>
              <li className="flex items-start">
                <span style={{ color: 'var(--terracotta)' }} className="font-bold mr-3">•</span>
                <span><strong>Meal Preparation:</strong> Simple, thoughtful meal prep that makes eating well easier. Services may include washing and preparing fruits and vegetables, pre-cooking meats, portioning meals, and basic kitchen prep. </span>
              </li>
              <li className="flex items-start">
                <span style={{ color: 'var(--terracotta)' }} className="font-bold mr-3">•</span>
                <span><strong>Surface Cleaning:</strong> Keeping kitchens and bathrooms fresh, tidy, and hygienic through routine upkeep.</span>
              </li>
            </ul>
            <p className="text-sm text-gray-600 italic">Please Note: We provide light housekeeping and routine upkeep services. We do not handle deep cleaning, biohazard situations, or hoarding scenarios.</p>
          </div>

          {/* Errands */}
          <div id="errands" className="mb-16 pb-16 border-b border-gray-200">
            <h2 style={{ color: 'var(--terracotta)' }} className="mb-6">Errand Services</h2>
            <p className="text-lg mb-6">
              Reliable help with the everyday tasks that are easier with an extra set of hands.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <span style={{ color: 'var(--sage)' }} className="font-bold mr-3">•</span>
                <span><strong>Grocery Shopping:</strong> Personalized grocery shopping and delivery based on individual preferences and lists (within a 3-mile radius).</span>
              </li>
              <li className="flex items-start">
                <span style={{ color: 'var(--sage)' }} className="font-bold mr-3">•</span>
                <span><strong>Prescription Pickup:</strong> Reliable pharmacy pickup services to help avoid extra trips and stress.</span>
              </li>
              <li className="flex items-start">
                <span style={{ color: 'var(--sage)' }} className="font-bold mr-3">•</span>
                <span><strong>Local Errands:</strong> Help with trips to the post office, bank, dry cleaner, and other nearby errands within our service area.</span>
              </li>
            </ul>
          </div>

          {/* Yard Work */}
          <div id="yard" className="mb-16">
            <h2 style={{ color: 'var(--sage)' }} className="mb-6">Seasonal Yard Work</h2>
            <p className="text-lg mb-6">
             Helping keep outdoor spaces neat, accessible, and welcoming throughout the year.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span style={{ color: 'var(--terracotta)' }} className="font-bold mr-3">•</span>
                <span><strong>Spring & Fall Cleanups:</strong> Seasonal yard tidying to help keep properties safe, manageable, and looking their best.</span>
              </li>
              <li className="flex items-start">
                <span style={{ color: 'var(--terracotta)' }} className="font-bold mr-3">•</span>
                <span><strong>Leaf Removal:</strong> Fall cleanup services so leaves and debris don’t become a burden or safety concern.</span>
              </li>
              <li className="flex items-start">
                <span style={{ color: 'var(--terracotta)' }} className="font-bold mr-3">•</span>
                <span><strong>Light Bush Trimming & Lawn Mowing:</strong> Routine outdoor upkeep to help maintain a tidy and accessible yard.</span>
              </li>
              <li className="flex items-start">
                <span style={{ color: 'var(--terracotta)' }} className="font-bold mr-3">•</span>
                <span><strong>Driveway and Sidewalk Power Washing:</strong> Refreshing outdoor surfaces while helping improve appearance and safety.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: 'var(--sage)', color: 'white' }} className="section-padding">
        <div className="container-max text-center">
          <h2 style={{ color: 'white' }} className="mb-6">Ready to get started?</h2>
          <p className="text-lg mb-8">
            Schedule a free visit to talk about what Good Company can do for you.
          </p>
          <a href="/#schedule" className="btn-secondary">
            Schedule Free Visit
          </a>
        </div>
      </section>
    </>
  );
}
