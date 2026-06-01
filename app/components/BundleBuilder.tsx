'use client';

import { useState } from 'react';

const serviceCategories = [
  {
    name: 'Companionship & Wellness',
    color: 'terracotta',
    services: [
      { id: 'companion_visit', name: 'Companion Visit', note: 'per hour', price: 35, unit: 'per visit' },
      { id: 'companion_walk', name: 'Companion Walk', note: '45 min', price: 25, unit: 'per walk' },
      { id: 'dog_walk', name: 'Solo Dog Walk', note: '30 min', price: 25, unit: 'per walk' },
      { id: 'wellness_checkin', name: 'Wellness Check-In', note: '30 min', price: 25, unit: 'per visit' },
    ],
  },
  {
    name: 'Errands',
    color: 'sage',
    services: [
      { id: 'grocery', name: 'Grocery Run', note: '+ receipt', price: 35, unit: 'per run' },
      { id: 'prescription', name: 'Prescription Pickup', note: '+ receipt', price: 20, unit: 'per pickup' },
    ],
  },
  {
    name: 'Home & Yard',
    color: 'terracotta',
    services: [
      { id: 'housekeeping', name: 'Light Housekeeping', note: 'per hour', price: 35, unit: 'per hour' },
      { id: 'meal_prep', name: 'Meal Prep', note: 'per hour', price: 35, unit: 'per hour' },
      { id: 'garden', name: 'Plant & Garden Care', note: 'per hour', price: 35, unit: 'per hour' },
      { id: 'yard', name: 'Yard Cleanup', note: 'per hour', price: 35, unit: 'per hour' },
    ],
  },
  {
    name: 'Pet Care',
    color: 'sage',
    services: [
      { id: 'dog_yard', name: 'Dog Yard Cleanup', note: '$25/visit + $12.50 per add\'l 30 min', price: 25, unit: 'per visit' },
      { id: 'pet_checkin', name: 'Pet Check-In', note: 'while away', price: 25, unit: 'per visit' },
      { id: 'pet_care', name: 'General Pet Care', note: 'per hour', price: 35, unit: 'per hour' },
    ],
  },
  {
    name: 'Technology & Paperwork',
    color: 'sage',
    services: [
      { id: 'tech', name: 'Technology Assistance', note: '$25/visit + $12.50 per add\'l 30 min', price: 25, unit: 'per visit' },
      { id: 'paperwork', name: 'Mail & Paperwork Assistance', note: 'per hour', price: 35, unit: 'per hour' },
      { id: 'fraud', name: 'Scam & Fraud Check-In', note: 'per visit', price: 25, unit: 'per visit' },
    ],
  },
];

export default function BundleBuilder() {
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const [openCategories, setOpenCategories] = useState<Record<string, boolean>>(
    Object.fromEntries(serviceCategories.map(c => [c.name, true]))
  );

  const updateQty = (id: string, value: number) => {
    setQuantities(prev => ({ ...prev, [id]: Math.max(0, value) }));
  };

  const toggleCategory = (name: string) => {
    setOpenCategories(prev => ({ ...prev, [name]: !prev[name] }));
  };

  const allServices = serviceCategories.flatMap(c => c.services);
  const selectedServices = allServices.filter(s => (quantities[s.id] || 0) > 0);
  const total = selectedServices.reduce((sum, s) => sum + s.price * (quantities[s.id] || 0), 0);
  const discounted10 = Math.round(total * 0.9 / 10) * 10;

  const sage = '#4e6b51';
  const terra = '#C9785B';
  const cream = '#F7F1E8';
  const charcoal = '#2d3d2e';

  return (
    <div style={{ fontFamily: 'inherit' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', alignItems: 'start' }}>

        {/* Left — Service Selector */}
        <div>
          {serviceCategories.map(cat => {
            const catColor = cat.color === 'sage' ? sage : terra;
            const isOpen = openCategories[cat.name];
            return (
              <div key={cat.name} style={{ marginBottom: '1rem', border: `1px solid ${catColor}30`, borderRadius: '10px', overflow: 'hidden' }}>
                <button
                  onClick={() => toggleCategory(cat.name)}
                  style={{
                    width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    padding: '0.875rem 1.25rem', background: `${catColor}10`, border: 'none', cursor: 'pointer',
                  }}
                >
                  <span style={{ fontWeight: '600', color: catColor, fontSize: '0.95rem' }}>{cat.name}</span>
                  <span style={{ color: catColor, fontSize: '1.1rem', transform: isOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}>▾</span>
                </button>

                {isOpen && (
                  <div style={{ padding: '0.5rem 0' }}>
                    {cat.services.map(svc => {
                      const qty = quantities[svc.id] || 0;
                      return (
                        <div
                          key={svc.id}
                          style={{
                            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                            padding: '0.6rem 1.25rem', background: qty > 0 ? `${catColor}08` : 'transparent',
                            borderBottom: `1px solid #f0f0f0`,
                          }}
                        >
                          <div style={{ flex: 1 }}>
                            <span style={{ fontSize: '0.9rem', color: charcoal, fontWeight: qty > 0 ? '600' : '400' }}>{svc.name}</span>
                            <span style={{ fontSize: '0.78rem', color: '#999', marginLeft: '6px' }}>{svc.note}</span>
                          </div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginLeft: '1rem' }}>
                            <span style={{ fontSize: '0.85rem', color: catColor, fontWeight: '600', minWidth: '40px', textAlign: 'right' }}>
                              ${svc.price}
                            </span>
                            <div style={{ display: 'flex', alignItems: 'center', border: `1px solid ${catColor}40`, borderRadius: '6px', overflow: 'hidden' }}>
                              <button
                                onClick={() => updateQty(svc.id, qty - 1)}
                                style={{ width: '28px', height: '28px', background: 'none', border: 'none', cursor: 'pointer', color: catColor, fontSize: '1rem', fontWeight: '700' }}
                              >−</button>
                              <input
                                type="number"
                                min="0"
                                value={qty === 0 ? '' : qty}
                                placeholder="0"
                                onChange={e => updateQty(svc.id, parseInt(e.target.value) || 0)}
                                style={{
                                  width: '36px', height: '28px', textAlign: 'center', border: 'none',
                                  fontSize: '0.85rem', fontWeight: '600', color: charcoal, background: 'white',
                                  outline: 'none',
                                }}
                              />
                              <button
                                onClick={() => updateQty(svc.id, qty + 1)}
                                style={{ width: '28px', height: '28px', background: 'none', border: 'none', cursor: 'pointer', color: catColor, fontSize: '1rem', fontWeight: '700' }}
                              >+</button>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Right — Summary */}
        <div style={{ position: 'sticky', top: '2rem' }}>
          <div style={{ background: 'white', border: `2px solid ${sage}`, borderRadius: '12px', overflow: 'hidden' }}>

            {/* Header */}
            <div style={{ background: sage, padding: '1.25rem 1.5rem' }}>
              <p style={{ color: 'white', fontSize: '0.8rem', fontWeight: '600', letterSpacing: '0.08em', textTransform: 'uppercase', margin: 0 }}>Your Estimate</p>
            </div>

            {/* Line items */}
            <div style={{ padding: '1rem 1.5rem', minHeight: '120px' }}>
              {selectedServices.length === 0 ? (
                <p style={{ color: '#aaa', fontSize: '0.875rem', fontStyle: 'italic', textAlign: 'center', padding: '1.5rem 0' }}>
                  Select services on the left to see your estimate.
                </p>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {selectedServices.map(svc => (
                    <div key={svc.id} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
                      <span style={{ color: charcoal }}>
                        {svc.name} <span style={{ color: '#999' }}>× {quantities[svc.id]}</span>
                      </span>
                      <span style={{ fontWeight: '600', color: charcoal }}>
                        ${svc.price * (quantities[svc.id] || 0)}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Totals */}
            <div style={{ borderTop: `1px solid #eee`, padding: '1rem 1.5rem', background: cream }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span style={{ fontSize: '0.85rem', color: '#666' }}>À la carte total</span>
                <span style={{ fontWeight: '700', color: charcoal, fontSize: '1rem' }}>${total}/mo</span>
              </div>

              {total > 0 && (
                <>
                  <div style={{ borderTop: `1px dashed #ddd`, margin: '0.75rem 0' }} />
                  <p style={{ fontSize: '0.75rem', color: '#888', marginBottom: '0.5rem' }}>Bundle savings estimate:</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.35rem' }}>
                    <span style={{ fontSize: '0.85rem', color: sage }}>10% bundle discount</span>
                    <span style={{ fontWeight: '700', color: sage }}>~${discounted10}/mo</span>
                  </div>
                </>
              )}
            </div>

            {/* CTA */}
            <div style={{ padding: '1rem 1.5rem', borderTop: `1px solid #eee` }}>
              <p style={{ fontSize: '0.75rem', color: '#999', fontStyle: 'italic', marginBottom: '0.75rem', lineHeight: '1.4' }}>
                This is an estimate based on your selections. Your actual bundle price will be confirmed when we build your plan together.
              </p>
              
                href="/contact"
                style={{
                  display: 'block', textAlign: 'center', background: 'transparent', color: sage,
                  padding: '0.6rem', borderRadius: '8px', fontWeight: '600', fontSize: '0.85rem',
                  textDecoration: 'none', marginTop: '0.5rem', border: `1px solid ${sage}`,
                }}
              >
                Schedule a Free Visit
              </a>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
