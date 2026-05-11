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
          <div id="companion" className="mb-16 pb-16 border-b border-gray-200">
            <h2 style={{ color: 'var(--sage)' }} className="mb-6">Companion Services</h2>
            <p className="text-lg mb-6">
              Our signature service -- because many things feel easier with someone alongside you.

<br/><br/>Whether it’s a walk around the neighborhood, a trip to the store, or simply a regular check-in, companion services provide support, conversation, and peace of mind while helping seniors maintain their routines and independence.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <span style={{ color: 'var(--terracotta)' }} className="font-bold mr-3">•</span>
                <span><strong>Companion Walks:</strong> We will walk alongside you or your senior loved one, which provides safety, connection, and exercise all at once.</span>
              </li>
              <li className="flex items-start">
                <span style={{ color: 'var(--terracotta)' }} className="font-bold mr-3">•</span>
                <span><strong>Companion Errand Runs:</strong> Accompanying you or your senior loved one to the pharmacy, grocery store, appointments, or anywhere else. No need to go alone.</span>
              </li>
              <li className="flex items-start">
                <span style={{ color: 'var(--terracotta)' }} className="font-bold mr-3">•</span>
                <span><strong>Wellness Check-Ins:</strong> Regular visits to chat, check in, and make sure everything's okay.</span>
              </li>
            </ul>
          </div>

          {/* Pet Services */}
          <div id="pet" className="mb-16 pb-16 border-b border-gray-200">
            <h2 style={{ color: 'var(--terracotta)' }} className="mb-6">Pet Services</h2>
            <p className="text-lg mb-6">
              Keeps the senior's bond with their pet strong, even when they can't do it all themselves.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <span style={{ color: 'var(--sage)' }} className="font-bold mr-3">•</span>
                <span><strong>Solo Dog Walks:</strong> We walk small to medium dogs (up to 60 lbs) so they get their exercise and outdoor time.</span>
              </li>
              <li className="flex items-start">
                <span style={{ color: 'var(--sage)' }} className="font-bold mr-3">•</span>
                <span><strong>Dog Yard or Kitty Litter Cleanup:</strong> Weekly cleanup service keeps your or your senior loved one's yard tidy and safe.</span>
              </li>
              <li className="flex items-start">
                <span style={{ color: 'var(--sage)' }} className="font-bold mr-3">•</span>
                <span><strong>Pet Feeding & Check-Ins:</strong> We feed and check on pets while you or your senior loved one are away.</span>
              </li>
            </ul>
          </div>

          {/* Housekeeping */}
          <div id="housekeeping" className="mb-16 pb-16 border-b border-gray-200">
            <h2 style={{ color: 'var(--sage)' }} className="mb-6">Housekeeping & Meal Prep</h2>
            <p className="text-lg mb-6">
              Keeping the home comfortable and functional so you or your senior loved one can focus on living.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <span style={{ color: 'var(--terracotta)' }} className="font-bold mr-3">•</span>
                <span><strong>General Tidying:</strong> Dusting, straightening, keeping common areas organized.</span>
              </li>
              <li className="flex items-start">
                <span style={{ color: 'var(--terracotta)' }} className="font-bold mr-3">•</span>
                <span><strong>Dishes & Laundry:</strong> Help with everyday chores that take time and energy that may not be available to your or your senior loved one.</span>
              </li>
              <li className="flex items-start">
                <span style={{ color: 'var(--terracotta)' }} className="font-bold mr-3">•</span>
                <span><strong>Meal Preparation:</strong> Simple, nutritious meal prep to make eating well easier. Includes services such as vegetable and fruit washing, cutting and storing; meat preparation and pre-cooking; other meal prep services. </span>
              </li>
              <li className="flex items-start">
                <span style={{ color: 'var(--terracotta)' }} className="font-bold mr-3">•</span>
                <span><strong>Surface Cleaning:</strong> Keeping kitchens and bathrooms fresh and hygienic.</span>
              </li>
            </ul>
            <p className="text-sm text-gray-600 italic">Please Note: We focus on tidying and routine upkeep. We don't handle biohazard situations or hoarding scenarios.</p>
          </div>

          {/* Errands */}
          <div id="errands" className="mb-16 pb-16 border-b border-gray-200">
            <h2 style={{ color: 'var(--terracotta)' }} className="mb-6">Errand Services</h2>
            <p className="text-lg mb-6">
              Take care of the things that are harder to do alone.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <span style={{ color: 'var(--sage)' }} className="font-bold mr-3">•</span>
                <span><strong>Grocery Shopping:</strong> We shop from a individually-tailored list and deliver groceries home (within 3-mile radius).</span>
              </li>
              <li className="flex items-start">
                <span style={{ color: 'var(--sage)' }} className="font-bold mr-3">•</span>
                <span><strong>Prescription Pickup:</strong> Fast, reliable pharmacy runs.</span>
              </li>
              <li className="flex items-start">
                <span style={{ color: 'var(--sage)' }} className="font-bold mr-3">•</span>
                <span><strong>Local Errands:</strong> Post office, dry cleaning, banks, and more within our service area.</span>
              </li>
            </ul>
          </div>

          {/* Yard Work */}
          <div id="yard" className="mb-16">
            <h2 style={{ color: 'var(--sage)' }} className="mb-6">Seasonal Yard Work</h2>
            <p className="text-lg mb-6">
              Keep your or your senior loved one's outdoor space neat, safe, and accessible throughout the year.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span style={{ color: 'var(--terracotta)' }} className="font-bold mr-3">•</span>
                <span><strong>Spring & Fall Cleanups:</strong> Seasonal tidying to keep the property in good shape.</span>
              </li>
              <li className="flex items-start">
                <span style={{ color: 'var(--terracotta)' }} className="font-bold mr-3">•</span>
                <span><strong>Leaf Removal:</strong> We handle fall cleanup so you or your senior loved one doesn't have to.</span>
              </li>
              <li className="flex items-start">
                <span style={{ color: 'var(--terracotta)' }} className="font-bold mr-3">•</span>
                <span><strong>Light Bush Trimming & Lawn Mowing:</strong> Keep the yard accessible and tidy.</span>
              </li>
              <li className="flex items-start">
                <span style={{ color: 'var(--terracotta)' }} className="font-bold mr-3">•</span>
                <span><strong>Driveway and Sidewalk Power Washing:</strong> Keeps driveways safe and looking fresh.</span>
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
