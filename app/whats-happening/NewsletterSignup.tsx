'use client';
import { useState } from 'react';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/newsletter-signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (response.ok) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <>
      {status === 'success' && (
        <div style={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white', padding: '12px 20px', borderRadius: '8px', marginBottom: '16px' }}>
          Thank you for signing up! We'll be in touch.
        </div>
      )}
      {status === 'error' && (
        <div style={{ backgroundColor: 'rgba(201,120,91,0.4)', color: 'white', padding: '12px 20px', borderRadius: '8px', marginBottom: '16px' }}>
          Something went wrong. Please try again.
        </div>
      )}
      {status === 'idle' && (
        <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '8px', maxWidth: '420px', margin: '0 auto' }}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="your@email.com"
            style={{ flex: 1, padding: '12px 16px', borderRadius: '8px', border: 'none', fontSize: '14px', backgroundColor: 'white' }}
          />
          <button
            type="submit"
            style={{ backgroundColor: 'var(--terracotta)', color: 'white', border: 'none', padding: '12px 20px', borderRadius: '8px', fontSize: '14px', fontWeight: '600', cursor: 'pointer', whiteSpace: 'nowrap' }}
          >
            Subscribe
          </button>
        </form>
      )}
    </>
  );
}

