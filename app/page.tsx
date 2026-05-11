'use client';

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
      } else {
        setError('Something went wrong. Please try again.');
      }
    } catch (err) {
      setError('Error submitting form. Please try again.');
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section style={{ backgroundColor: 'var(--cream)' }} className="section-padding">
        <div className="container-max">
          <div className="max-w-3xl">
            <h1 className="mb-6" style={{ color: 'var(--sage)' }}>
              Stay home. Stay independent. Stay yourself.
            </h1>
            <p className="text-lg mb-8">
              Good Company helps seniors in Shelby Township and the surrounding area stay home longer with trusted, dignified support for the things they'd rather not do alone.
            </p>
            <a href="#schedule" className="btn-primary inline-block">
              Schedule a Free Visit
            </a>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding" style={{ backgroundColor: 'var(--cream)' }}>
        <div className="container-max">
          <h2 className="mb-12 text-center">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div style={{ borderLeftColor: 'var(--sage)', borderLeftWidth: '4px' }} className="pl-6">
              <h3 style={{ color: 'var(--sage)' }} className="mb-3">Companion Services</h3>
              <p>Examples of these services include walking outdoors alongside your loved one. Accompanying them to appointments, pharmacy, grocery, or other errands. Regular wellness check-ins to keep them connected.</p>
            </div>
            <div style={{ borderLeftColor: 'var(--terracotta)', borderLeftWidth: '4px' }} className="pl-6">
              <h3 style={{ color: 'var(--terracotta)' }} className="mb-3">Pet Services</h3>
              <p>Solo or companion dog walks, yard cleanup, other pet cleanup, and feeding check-ins. Keepin their bond with their pet strong while they're away.</p>
            </div>
            <div style={{ borderLeftColor: 'var(--sage)', borderLeftWidth: '4px' }} className="pl-6">
              <h3 style={{ color: 'var(--sage)' }} className="mb-3">Housekeeping & Meal Prep</h3>
              <p>General tidying, dishes, laundry, light meal preparation. Keeping their home comfortable and functional.</p>
            </div>
            <div style={{ borderLeftColor: 'var(--terracotta)', borderLeftWidth: '4px' }} className="pl-6">
              <h3 style={{ color: 'var(--terracotta)' }} className="mb-3">Seasonal Yard Work</h3>
              <p>Examples of these services include spring/fall cleanups, weed assistance, and power washing. Everything done with care.</p>
            </div>
          </div>
          <div className="mt-12 text-center">
            <a href="/services" className="btn-outline">
              See All Services
            </a>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="section-padding" style={{ backgroundColor: 'var(--sage)', color: 'white' }}>
        <div className="container-max">
          <h2 className="text-center mb-12" style={{ color: 'white' }}>You Can Trust Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">✓</div>
              <h3 style={{ color: 'white' }} className="mb-2">Bonded</h3>
              <p>Fully bonded for your peace of mind.</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">✓</div>
              <h3 style={{ color: 'white' }} className="mb-2">Insured</h3>
              <p>Comprehensive liability coverage.</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">✓</div>
              <h3 style={{ color: 'white' }} className="mb-2">Background Checked</h3>
              <p>Thorough screening for safety.</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">✓</div>
              <h3 style={{ color: 'white' }} className="mb-2">Locally Owned</h3>
              <p>Owned and operated right here.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Capture Form */}
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
