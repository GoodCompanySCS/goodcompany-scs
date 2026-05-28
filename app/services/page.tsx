export default function Services() {
  return (
    <>
      <section style={{ backgroundColor: 'var(--cream)' }} className="section-padding">
        <div className="container-max">
          <h1 className="mb-8">Our Services</h1>
          <p className="text-lg mb-12 max-w-3xl">
            Every client is different, and the services below are just some of the ways we help. If you don't see exactly what you're looking for, just ask. We'll work with you to find the right support for your situation.
          </p>

          {/* Technology Assistance */}
          <div id="technology" className="mb-8 pb-8 border-b border-gray-200">
            <h2 style={{ color: 'var(--sage)' }} className="mb-4">Technology Assistance</h2>
            <p className="text-lg mb-6">Technology can be frustrating. We're here to help make it easier.</p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <span style={{ color: 'var(--terracotta)' }} className="font-bold mr-3">•</span>
                <span><strong>Device Setup & Support:</strong> Phone, tablet, and smart TV setup and support.</span>
              </li>
              <li className="flex items-start">
                <span style={{ color: 'var(--terracotta)' }} className="font-bold mr-3">•</span>
                <span><strong>Everyday Technology Help:</strong> Help with video calls, email, texting, and everyday technology questions.</span>
              </li>
              <li className="flex items-start">
                <span style={{ color: 'var(--terracotta)' }} className="font-bold mr-3">•</span>
                <span><strong>Specialist Coordination:</strong> If a problem requires a specialist, we'll help coordinate the right support and be there when they arrive.</span>
              </li>
            </ul>
          </div>

          {/* Meals & Nutrition */}
          <div id="meals" className="mb-8 pb-8 border-b border-gray-200">
            <h2 style={{ color: 'var(--terracotta)' }} className="mb-4">Meals & Nutrition</h2>
            <p className="text-lg mb-6">Good food should be simple, satisfying, and easy to enjoy.</p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <span style={{ color: 'var(--sage)' }} className="font-bold mr-3">•</span>
                <span><strong>Meal Preparation:</strong> Washing, cutting, portioning, and batch cooking to make eating well easier.</span>
              </li>
              <li className="flex items-start">
                <span style={{ color: 'var(--sage)' }} className="font-bold mr-3">•</span>
                <span><strong>Nutrition Guidance:</strong> Help understanding dietary needs and meal options that fit your preferences and lifestyle.</span>
              </li>
              <li className="flex items-start">
                <span style={{ color: 'var(--sage)' }} className="font-bold mr-3">•</span>
                <span><strong>Grocery List Planning & Shopping:</strong> Building thoughtful grocery lists and shopping with or without you.</span>
              </li>
            </ul>
          </div>

          {/* Companionship & Check-Ins */}
          <div id="companion" className="mb-8 pb-8 border-b border-gray-200">
            <h2 style={{ color: 'var(--sage)' }} className="mb-4">Companionship & Check-Ins</h2>
            <p className="text-lg mb-6">Sometimes the best support is simply having someone alongside you.</p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <span style={{ color: 'var(--terracotta)' }} className="font-bold mr-3">•</span>
                <span><strong>Companion Visits:</strong> Friendly, familiar visits at home for conversation, connection, and peace of mind.</span>
              </li>
              <li className="flex items-start">
                <span style={{ color: 'var(--terracotta)' }} className="font-bold mr-3">•</span>
                <span><strong>Companion Walks:</strong> Walking together for conversation, exercise, and fresh air.</span>
              </li>
              <li className="flex items-start">
                <span style={{ color: 'var(--terracotta)' }} className="font-bold mr-3">•</span>
                <span><strong>Wellness Check-Ins:</strong> Regular check-ins for added peace of mind for you and your family.</span>
              </li>
              <li className="flex items-start">
                <span style={{ color: 'var(--terracotta)' }} className="font-bold mr-3">•</span>
                <span><strong>Appointment Accompaniment:</strong> Transportation, waiting room support, and an extra set of ears during appointments.</span>
              </li>
            </ul>
          </div>

          {/* Errands & Transportation */}
          <div id="errands" className="mb-8 pb-8 border-b border-gray-200">
            <h2 style={{ color: 'var(--terracotta)' }} className="mb-4">Errands & Transportation</h2>
            <p className="text-lg mb-6">Reliable help getting where you need to go and taking care of everyday tasks.</p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <span style={{ color: 'var(--sage)' }} className="font-bold mr-3">•</span>
                <span><strong>Grocery Shopping & Delivery:</strong> Personalized shopping based on your list and preferences, delivered right to you.</span>
              </li>
              <li className="flex items-start">
                <span style={{ color: 'var(--sage)' }} className="font-bold mr-3">•</span>
                <span><strong>Prescription Pickup:</strong> Reliable pharmacy runs so you never have to worry about running out.</span>
              </li>
            </ul>
          </div>

          {/* Home & Yard */}
          <div id="home" className="mb-8 pb-8 border-b border-gray-200">
            <h2 style={{ color: 'var(--sage)' }} className="mb-4">Home & Yard Services</h2>
            <p className="text-lg mb-6">Helping keep your home comfortable, organized, and well cared for.</p>
            <ul className="space-y-3 mb-4">
              <li className="flex items-start">
                <span style={{ color: 'var(--terracotta)' }} className="font-bold mr-3">•</span>
                <span><strong>Light Housekeeping:</strong> General tidying, dusting, and keeping common areas comfortable and functional.</span>
              </li>
              <li className="flex items-start">
                <span style={{ color: 'var(--terracotta)' }} className="font-bold mr-3">•</span>
                <span><strong>Laundry & Dishes:</strong> Help with everyday household tasks that can become tiring or time-consuming.</span>
              </li>
              <li className="flex items-start">
                <span style={{ color: 'var(--terracotta)' }} className="font-bold mr-3">•</span>
                <span><strong>Plant & Garden Care:</strong> Watering, tending, and keeping your plants and garden looking their best.</span>
              </li>
              <li className="flex items-start">
                <span style={{ color: 'var(--terracotta)' }} className="font-bold mr-3">•</span>
                <span><strong>Seasonal Yard Cleanup:</strong> Light outdoor maintenance to keep your yard neat, safe, and accessible throughout the year.</span>
              </li>
            </ul>
            <p className="text-sm text-gray-600 italic">Please note: We provide light housekeeping and routine upkeep. We do not handle deep cleaning, biohazard situations, or hoarding scenarios.</p>
          </div>

          {/* Vehicle Support */}
          <div id="vehicle" className="mb-8 pb-8 border-b border-gray-200">
            <h2 style={{ color: 'var(--terracotta)' }} className="mb-4">Vehicle Support</h2>
            <p className="text-lg mb-6">A little help keeping your vehicle clean, fueled, and ready to go.</p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <span style={{ color: 'var(--sage)' }} className="font-bold mr-3">•</span>
                <span><strong>Car Washing & Light Detailing:</strong> Keeping your vehicle clean and well maintained.</span>
              </li>
              <li className="flex items-start">
                <span style={{ color: 'var(--sage)' }} className="font-bold mr-3">•</span>
                <span><strong>Fuel Runs:</strong> We'll take your car and fill it up so you don't have to.</span>
              </li>
              <li className="flex items-start">
                <span style={{ color: 'var(--sage)' }} className="font-bold mr-3">•</span>
                <span><strong>Service Appointment Coordination:</strong> Help scheduling and coordinating routine maintenance, plus transportation to and from the shop when needed.</span>
              </li>
            </ul>
          </div>

          {/* Pet Care */}
          <div id="pet" className="mb-8 pb-8 border-b border-gray-200">
            <h2 style={{ color: 'var(--sage)' }} className="mb-4">Pet Care</h2>
            <p className="text-lg mb-6">Helping you care for the pets that mean so much.</p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <span style={{ color: 'var(--terracotta)' }} className="font-bold mr-3">•</span>
                <span><strong>Dog Walks:</strong> Solo or companion dog walks to keep your pet active, exercised, and happy.</span>
              </li>
              <li className="flex items-start">
                <span style={{ color: 'var(--terracotta)' }} className="font-bold mr-3">•</span>
                <span><strong>General Pet Care:</strong> Feeding, fresh water, and everyday care for common household pets.</span>
              </li>
              <li className="flex items-start">
                <span style={{ color: 'var(--terracotta)' }} className="font-bold mr-3">•</span>
                <span><strong>Pet Check-Ins:</strong> Visits to care for your pets while you're away or temporarily out of town.</span>
              </li>
              <li className="flex items-start">
                <span style={{ color: 'var(--terracotta)' }} className="font-bold mr-3">•</span>
                <span><strong>Pet Area Cleanup:</strong> Dog yard cleanup and pet area maintenance to keep spaces tidy and manageable.</span>
              </li>
            </ul>
          </div>

          {/* Paperwork & Safety Support */}
          <div id="paperwork" className="mb-8 pb-8 border-b border-gray-200">
            <h2 style={{ color: 'var(--terracotta)' }} className="mb-4">Paperwork & Safety Support</h2>
            <p className="text-lg mb-6">Extra help with the details that can sometimes feel overwhelming.</p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <span style={{ color: 'var(--sage)' }} className="font-bold mr-3">•</span>
                <span><strong>Mail & Paperwork Assistance:</strong> Sorting mail, organizing documents, and working through paperwork together.</span>
              </li>
              <li className="flex items-start">
                <span style={{ color: 'var(--sage)' }} className="font-bold mr-3">•</span>
                <span><strong>Online Forms & Applications:</strong> Help completing online forms and applications that can be difficult to navigate alone.</span>
              </li>
              <li className="flex items-start">
                <span style={{ color: 'var(--sage)' }} className="font-bold mr-3">•</span>
                <span><strong>Scam & Fraud Awareness:</strong> Check-ins to review suspicious mail, calls, or emails and help you stay protected.</span>
              </li>
              <li className="flex items-start">
                <span style={{ color: 'var(--sage)' }} className="font-bold mr-3">•</span>
                <span><strong>Letter Writing & Correspondence:</strong> Help writing letters, greeting cards, and staying connected with the people who matter.</span>
              </li>
            </ul>
          </div>

          {/* Family Caregiver Relief */}
          <div id="caregiver" className="mb-8">
            <h2 style={{ color: 'var(--sage)' }} className="mb-4">Family Caregiver Relief</h2>
            <p className="text-lg mb-6">Dependable support when family caregivers need time to rest, work, or recharge.</p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <span style={{ color: 'var(--terracotta)' }} className="font-bold mr-3">•</span>
                <span><strong>Trusted Coverage:</strong> Reliable support for your loved one while family members are away or need a break.</span>
              </li>
              <li className="flex items-start">
                <span style={{ color: 'var(--terracotta)' }} className="font-bold mr-3">•</span>
                <span><strong>Companionship & Practical Assistance:</strong> Meaningful visits that include conversation, support, and help with everyday needs.</span>
              </li>
              <li className="flex items-start">
                <span style={{ color: 'var(--terracotta)' }} className="font-bold mr-3">•</span>
                <span><strong>Flexible Scheduling:</strong> We work around your family's needs and adjust as things change.</span>
              </li>
              <li className="flex items-start">
                <span style={{ color: 'var(--terracotta)' }} className="font-bold mr-3">•</span>
                <span><strong>Someone You Know & Trust:</strong> Consistent, reliable help from a familiar face your loved one is comfortable with.</span>
              </li>
            </ul>
          </div>

          {/* Closing note */}
          <div style={{ backgroundColor: 'var(--sage)', color: 'white' }} className="p-8 rounded-lg text-center">
            <p className="text-lg font-semibold mb-2" style={{ color: 'white' }}>Don't see exactly what you need?</p>
            <p className="text-lg" style={{ color: 'white' }}>Give us a call. We'd be happy to talk through your situation and see how we can help.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-4 text-lg font-semibold">
              <a href="tel:5862172898" style={{ color: 'white' }} className="underline">586-217-2898</a>
              <span className="hidden sm:inline" style={{ color: 'white' }}>|</span>
              <a href="mailto:hello@goodcompanyscs.com" style={{ color: 'white' }} className="underline">hello@goodcompanyscs.com</a>
            </div>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: 'var(--terracotta)', color: 'white' }} className="section-padding">
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
