'use client';
import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    zipCode: '',
    message: '',
    preferredContact: 'email',
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch('/api/submit-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

     if (response.ok) {
  setSubmitted(true);
  setFormData({ name: '', phone: '', email: '', zipCode: '', message: '', preferredContact: 'email' });
  setTimeout(() => setSubmitted(false), 5000);
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'generate_lead', {
      event_category: 'Contact Form',
      event_label: 'Schedule Free Visit',
    });
  }
} else {
  setError('Something went wrong. Please try again.');
}

  return (
    <>
    {/* Hero Section */}
<section style={{ backgroundColor: 'var(--cream)' }} className="pt-16 md:pt-24 pb-4 md:pb-8">
  <div className="container-max">
    <div className="flex flex-col md:flex-row items-center gap-12">
      <div className="max-w-xl">
        <h1 className="mb-6" style={{ color: 'var(--sage)' }}>
          Stay home.<br />
          Stay independent.<br />
          Stay yourself.
        </h1>
        <p className="text-lg mb-8">
          Good Company helps seniors in Shelby Township and the surrounding area stay independent at home with reliable support, practical help, and someone trustworthy alongside them.
        </p>
        <a href="#schedule" className="btn-primary inline-block">
          Schedule a Free Visit
        </a>
      </div>
      <div className="flex-shrink-0 md:w-96 lg:w-[480px]">
        <Image
          src="/images/Portrait_Realtor_Pose.jpg"
          alt="Natalie Perras, owner of Good COmpany Senior Concierge Services"
          width={480}
          height={320}
          className="w-full object-cover"
          style={{
            borderRadius: '2rem',
            border: '4px solid var(--sage)',
            boxShadow: '0 8px 32px rgba(78, 107, 81, 0.18)',
          }}
        />
      </div>
    </div>
  </div>
</section>

   {/* Services Overview */}
      <section className="pt-4 md:pt-8 pb-16 md:pb-24" style={{ backgroundColor: 'var(--cream)' }}>
        <div className="container-max">
          <h2 className="mb-4 text-center">What We Offer</h2>
          <p className="text-center text-lg mb-12 max-w-xl mx-auto" style={{ color: '#666' }}>
            Practical support tailored to your needs. Not sure if we cover something? Just ask.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            {[
              { label: 'Technology Assistance', color: 'var(--sage)' },
              { label: 'Meals & Nutrition', color: 'var(--sage)' },
              { label: 'Companionship & Wellness', color: 'var(--sage)' },
              { label: 'Errands', color: 'var(--terracotta)' },
              { label: 'Home & Yard', color: 'var(--terracotta)' },
              { label: 'Pet Care', color: 'var(--terracotta)' },
              { label: 'Paperwork & Safety', color: 'var(--sage)' },
              { label: 'Family Caregiver Relief', color: 'var(--terracotta)' },
            ].map((item, i) => (
              <div key={i} style={{ backgroundColor: 'white', borderRadius: '10px' }} className="flex items-center gap-3 p-4">
                <span style={{ color: item.color, fontSize: '1.1rem', fontWeight: '700' }}>✓</span>
                <span style={{ color: '#2d3d2e', fontWeight: '600', fontSize: '0.9rem' }}>{item.label}</span>
              </div>
            ))}
          </div>
          <div className="text-center">
            <a href="/services" className="btn-outline">See All Services</a>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="section-padding" style={{ backgroundColor: 'var(--sage)', color: 'white' }}>
        <div className="container-max">
          <h2 className="text-center mb-12" style={{ color: 'white' }}>Why Families Trust Good Company</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">✓</div>
              <h3 style={{ color: 'white' }} className="mb-2">Bonded</h3>
              <p>Fully bonded so families can feel confident and comfortable welcoming us into their home.</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">✓</div>
              <h3 style={{ color: 'white' }} className="mb-2">Insured</h3>
              <p>Comprehensive liability insurance for added peace of mind and protection.</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">✓</div>
              <h3 style={{ color: 'white' }} className="mb-2">Background Checked</h3>
              <p>Carefully screened and vetted because trust and safety matter.</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">✓</div>
              <h3 style={{ color: 'white' }} className="mb-2">Locally Owned</h3>
              <p>Owned and operated right here in the community we proudly serve.</p>
            </div>
          </div>
        </div>
      </section>
     
      <section className="bg-cream pt-20 md:pt-28 pb-4 md:pb-6">
        <div className="max-w-6xl mx-auto px-6 text-center">
            <p 
              className="font-serif italic tracking-wide leading-tight"
              style={{ 
              color: '#C9785B', 
              fontSize: '2rem',
              fontStyle: 'italic',
              fontWeight: '600',
              }}
            >
            You're in good company.
          </p>
        </div>
     </section>

      {/* Lead Capture Form*/}
      
      <section id="schedule" className="section-padding" style={{ backgroundColor: 'var(--cream)' }}>
        <div className="container-max max-w-2xl">
          <h2 className="text-center mb-4">Schedule Your Free First Visit</h2>
          <p className="text-center mb-8 text-lg">
            Let's talk about how Good Company can help. No obligation, no pressure.
          </p>

          {submitted && (
            <div style={{ backgroundColor: 'var(--sage)', color: 'white' }} className="p-6 rounded-lg mb-8 text-center">
              <p className="font-semibold mb-2">Thank you!</p>
              <p>We'll be in touch shortly to schedule your free visit.</p>
            </div>
          )}

          {error && (
            <div style={{ backgroundColor: 'var(--terracotta)', color: 'white' }} className="p-6 rounded-lg mb-8 text-center">
              <p>{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block font-semibold mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                  placeholder="Your name"
                  minLength={2}
                />
              </div>
              <div>
                <label htmlFor="phone" className="block font-semibold mb-2">
                  Phone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                  placeholder="(555) 123-4567"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block font-semibold mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="zipCode" className="block font-semibold mb-2">
                  ZIP Code *
                </label>
                <input
                  type="text"
                  id="zipCode"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                  placeholder="48316"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block font-semibold mb-2">
                Tell us a little about who we'd be helping
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                placeholder="Share a bit about your situation..."
                rows={4}
              />
            </div>

            <div>
              <label className="block font-semibold mb-3">Preferred contact method</label>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="preferredContact"
                    value="phone"
                    checked={formData.preferredContact === 'phone'}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  Phone
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="preferredContact"
                    value="text"
                    checked={formData.preferredContact === 'text'}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  Text
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="preferredContact"
                    value="email"
                    checked={formData.preferredContact === 'email'}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  Email
                </label>
              </div>
            </div>

            <button type="submit" className="btn-primary w-full py-4 text-lg">
              Schedule Free Visit
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
