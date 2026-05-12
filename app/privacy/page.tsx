export default function Privacy() {
  return (
    <section style={{ backgroundColor: 'var(--cream)' }} className="section-padding">
      <div className="container-max max-w-3xl">
        <h1 className="mb-4">Privacy Policy</h1>
        <p className="text-sm text-gray-600 mb-12">Last updated: May 2026</p>

        <div className="space-y-8">
          <div>
            <h2 style={{ color: 'var(--sage)' }}>Introduction</h2>
            <p>
              Good Company Senior Concierge Services LLC ("Good Company," "we," "us," or "our") operates the goodcompanyscs.com website. This Privacy Policy explains how we collect, use, and protect the information you provide when using our website or contacting us about services.
            </p>
          </div>

          <div>
            <h2 style={{ color: 'var(--sage)' }}>Information We Collect</h2>
            <p className="mb-4">
              We may collect information you provide directly to us, including:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>ZIP code and service area information</li>
              <li>Messages and inquiries you submit through our website</li>
              <li>Preferred contact method</li>
            </ul>
          </div>

          <div>
            <h2 style={{ color: 'var(--sage)' }}>How We Use Your Information</h2>
            <p className="mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Respond to inquiries and schedule visits</li>
              <li>Communicate about our services and appointments</li>
              <li>Provide customer support</li>
              <li>Improve our website and services</li>
            </ul>
          </div>

          <div>
            <h2 style={{ color: 'var(--sage)' }}>Information Sharing</h2>
            <p>
              We do not sell, trade, or rent your personal information. Information may be shared only when necessary to operate our business, provide requested services, or comply with legal obligations.
            </p>
          </div>

          <div>
            <h2 style={{ color: 'var(--sage)' }}>Security</h2>
            <p>
              We take reasonable measures to help protect the personal information submitted through our website and communication forms.
            </p>
          </div>

          <div>
            <h2 style={{ color: 'var(--sage)' }}>Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, please contact us at <a href="mailto:harleywal1980@gmail.com" className="text-sage hover:underline">harleywal1980@gmail.com</a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
