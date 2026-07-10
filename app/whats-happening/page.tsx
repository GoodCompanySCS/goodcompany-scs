import NewsletterSignup from './NewsletterSignup';

export default function WhatsHappening() {
  return (
    <div style={{ backgroundColor: 'var(--cream)' }} className="min-h-screen">

      {/* Page Header */}
      <section style={{ backgroundColor: 'var(--cream)' }} className="pt-16 md:pt-24 pb-8 text-center">
        <div className="container-max max-w-3xl">
          <h1 style={{ color: 'var(--sage)' }} className="mb-4">What's Happening</h1>
          <p style={{ color: '#7a7060' }} className="text-lg italic">Community appearances, events, and news from Good Company</p>
          <div style={{ width: '60px', height: '3px', backgroundColor: 'var(--terracotta)', margin: '1.5rem auto 0' }}></div>
        </div>
      </section>

      {/* Events List */}
      <section className="pb-16 md:pb-24">
        <div className="container-max max-w-3xl">
          <div className="space-y-6">

            {/* Packard Farmers Market — July 11 */}
            <div style={{ backgroundColor: 'white', borderRadius: '12px', border: '0.5px solid #d4c9b8', overflow: 'hidden' }}>
              <div style={{ backgroundColor: 'var(--sage)', padding: '8px 20px' }}>
                <span style={{ fontSize: '11px', fontWeight: '600', color: 'white', textTransform: 'uppercase', letterSpacing: '2px' }}>Upcoming Event</span>
              </div>
              <div style={{ padding: '1.5rem', display: 'flex', gap: '1.25rem' }}>
                <div style={{ backgroundColor: 'var(--cream)', borderRadius: '10px', width: '80px', height: '80px', flexShrink: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', border: '1px solid #d4c9b8' }}>
                  <span style={{ fontSize: '11px', fontWeight: '600', color: 'var(--terracotta)', textTransform: 'uppercase', letterSpacing: '1px' }}>Jul</span>
                  <span style={{ fontSize: '28px', fontWeight: '700', color: '#3a352e', lineHeight: '1' }}>11</span>
                  <span style={{ fontSize: '10px', color: '#7a7060' }}>Friday</span>
                </div>
                <div style={{ flex: 1 }}>
                  <h2 style={{ fontSize: '20px', fontWeight: '700', color: '#3a352e', marginBottom: '6px' }}>Packard Farmers Market</h2>
                  <p style={{ fontSize: '13px', color: '#7a7060', marginBottom: '10px' }}>9:00 AM – 2:00 PM &nbsp;|&nbsp; Shelby Township, MI</p>
                  <p style={{ fontSize: '14px', color: '#5a5248', lineHeight: '1.7', marginBottom: '12px' }}>
                    Come find us at our tent at the Packard Farmers Market! Stop by and enter for a chance to win Detroit Lions preseason tickets. We'd love to meet you and chat about how Good Company can help you or someone you love.
                  </p>
                  <span style={{ backgroundColor: 'var(--cream)', color: 'var(--terracotta)', fontSize: '11px', fontWeight: '600', padding: '3px 12px', borderRadius: '12px', border: '1px solid var(--terracotta)' }}>Free to attend</span>
                </div>
              </div>
            </div>

            {/* Packard Farmers Market — June 27 (past) */}
            <div style={{ backgroundColor: 'white', borderRadius: '12px', border: '0.5px solid #d4c9b8', overflow: 'hidden', opacity: 0.7 }}>
              <div style={{ backgroundColor: '#9a8f80', padding: '8px 20px' }}>
                <span style={{ fontSize: '11px', fontWeight: '600', color: 'white', textTransform: 'uppercase', letterSpacing: '2px' }}>Past Event</span>
              </div>
              <div style={{ padding: '1.5rem', display: 'flex', gap: '1.25rem' }}>
                <div style={{ backgroundColor: 'var(--cream)', borderRadius: '10px', width: '80px', height: '80px', flexShrink: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', border: '1px solid #d4c9b8' }}>
                  <span style={{ fontSize: '11px', fontWeight: '600', color: 'var(--terracotta)', textTransform: 'uppercase', letterSpacing: '1px' }}>Jun</span>
                  <span style={{ fontSize: '28px', fontWeight: '700', color: '#3a352e', lineHeight: '1' }}>27</span>
                  <span style={{ fontSize: '10px', color: '#7a7060' }}>Saturday</span>
                </div>
                <div style={{ flex: 1 }}>
                  <h2 style={{ fontSize: '20px', fontWeight: '700', color: '#3a352e', marginBottom: '6px' }}>Packard Farmers Market</h2>
                  <p style={{ fontSize: '13px', color: '#7a7060', marginBottom: '10px' }}>9:00 AM – 2:00 PM &nbsp;|&nbsp; Shelby Township, MI</p>
                  <p style={{ fontSize: '14px', color: '#5a5248', lineHeight: '1.7', marginBottom: '12px' }}>
                    Come find us at our tent at the Packard Farmers Market! Stop by for a free Grand Traverse Pie Company cookie and enter for a chance to win Detroit Lions preseason tickets. We'd love to meet you and chat about how Good Company can help you or someone you love.
                  </p>
                  <span style={{ backgroundColor: 'var(--cream)', color: '#9a8f80', fontSize: '11px', fontWeight: '600', padding: '3px 12px', borderRadius: '12px', border: '1px solid #9a8f80' }}>Past event</span>
                </div>
              </div>
            </div>

            {/* Launch Day */}
            <div style={{ backgroundColor: 'white', borderRadius: '12px', border: '0.5px solid #d4c9b8', overflow: 'hidden' }}>
              <div style={{ backgroundColor: 'var(--terracotta)', padding: '8px 20px' }}>
                <span style={{ fontSize: '11px', fontWeight: '600', color: 'white', textTransform: 'uppercase', letterSpacing: '2px' }}>News</span>
              </div>
              <div style={{ padding: '1.5rem', display: 'flex', gap: '1.25rem' }}>
                <div style={{ backgroundColor: 'var(--cream)', borderRadius: '10px', width: '80px', height: '80px', flexShrink: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', border: '1px solid #d4c9b8' }}>
                  <span style={{ fontSize: '11px', fontWeight: '600', color: 'var(--terracotta)', textTransform: 'uppercase', letterSpacing: '1px' }}>Jun</span>
                  <span style={{ fontSize: '28px', fontWeight: '700', color: '#3a352e', lineHeight: '1' }}>22</span>
                  <span style={{ fontSize: '10px', color: '#7a7060' }}>Sunday</span>
                </div>
                <div style={{ flex: 1 }}>
                  <h2 style={{ fontSize: '20px', fontWeight: '700', color: '#3a352e', marginBottom: '6px' }}>Good Company is officially open!</h2>
                  <p style={{ fontSize: '14px', color: '#5a5248', lineHeight: '1.7', marginBottom: '12px' }}>
                    Today marks the official launch of Good Company Senior Concierge Services. After months of preparation, we are so excited to begin serving seniors and their families in Shelby Township, Washington Township, and Rochester Hills. Your first visit is always free — reach out anytime.
                  </p>
                  <span style={{ backgroundColor: 'var(--cream)', color: 'var(--sage)', fontSize: '11px', fontWeight: '600', padding: '3px 12px', borderRadius: '12px', border: '1px solid var(--sage)' }}>Launch day</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section style={{ backgroundColor: 'var(--sage)' }} className="section-padding">
        <div className="container-max max-w-xl text-center">
          <h2 style={{ color: 'white' }} className="mb-4">Stay in the loop</h2>
          <p style={{ color: 'rgba(255,255,255,0.85)' }} className="mb-8 text-lg">Sign up for the Good Company newsletter to be the first to know about upcoming events and appearances.</p>
          <NewsletterSignup />
        </div>
      </section>

    </div>
  );
}
