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
              Good Company Senior Concierge Services LLC ("Good Company," "we," "us," or "our") operates the goodcompanyscs.com website. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services.
            </p>
          </div>

          <div>
            <h2 style={{ color: 'var(--sage)' }}>Information We Collect</h2>
            <p className="mb-4">
              We collect information you provide directly to us, such as:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Name, email address, and phone number</li>
              <li>ZIP code and service area information</li>
              <li>Messages and inquiries you submit through our website</li>
              <li>Your preferred contact method</li>
            </ul>
          </div>

          <div>
            <h2 style={{ color: 'var(--sage)' }}>How We Use Your Information</h2>
            <p className="mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Respond to your inquiries and schedule free visits</li>
              <li>Provide our services to you</li>
              <li>Send confirmations and service-related communications</li>
              <li>Improve our website and services</li>
            </ul>
          </div>

          <div>
            <h2 style={{ color: 'var(--sage)' }}>Information Sharing</h2>
            <p>
              We do not sell, trade, or rent your personal information. We may share information only when necessary to provide our services or when required by law.
            </p>
          </div>

          <div>
            <h2 style={{ color: 'var(--sage)' }}>Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, or destruction.
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
