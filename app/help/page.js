export default function HelpCenter() {
  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-gray-800">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900">Help Center</h1>
        <p className="mt-4 text-lg text-gray-600">
          We're here when you need us. Whether it's a technical issue or an urgent situation, you can reach
          out to us quickly using the options below.
        </p>
      </div>

      <div className="grid gap-10 md:grid-cols-2">
        {/* Emergency Contact */}
        <div className="p-6 border rounded-xl shadow-sm bg-white">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            🚨 Urgent or Emergency Support
          </h2>
          <p className="text-gray-700 mb-4">
            If your website, app, or dashboard is down or experiencing critical issues, please contact us
            immediately.
          </p>
          <ul className="text-gray-700 space-y-2">
            <li>
              <strong>Email:</strong>{' '}
              <a href="mailto:support@coretechsolutions.com" className="text-blue-600 hover:underline">
                support@coretechsolutions.com
              </a>
            </li>
            <li>
              <strong>Phone:</strong>{' '}
              <span className="text-gray-800">+92-XXX-XXXXXXX</span>
            </li>
            <li>
              <strong>Availability:</strong> 9:00 AM – 11:00 PM PKT, 7 days a week
            </li>
            <li>
              <strong>Priority Response Time:</strong> Under 1 hour for paid support clients
            </li>
          </ul>
        </div>

        {/* Ongoing Support / Tickets */}
        <div className="p-6 border rounded-xl shadow-sm bg-white">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">🛠 Ongoing Support & Requests</h2>
          <p className="text-gray-700 mb-4">
            For general issues, content updates, bug fixes, or new feature requests, submit a support ticket
            and our team will follow up promptly.
          </p>
          <a
            href="/contact"
            className="inline-block mt-4 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
          >
            Submit a Request
          </a>
        </div>

        {/* Service-Specific Resources */}
        <div className="p-6 border rounded-xl shadow-sm bg-white">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">📘 Self-Service Resources</h2>
          <p className="text-gray-700 mb-4">
            Explore our guides, best practices, and blog content to troubleshoot issues or understand your
            system better.
          </p>
          <ul className="list-disc ml-6 text-blue-600 space-y-2">
            <li>
              <a href="/blog/why-every-business-needs-a-website-2025" className="hover:underline">
                Why Every Business Needs a Website
              </a>
            </li>
            <li>
              <a href="/blog/seo-basics-business-owners" className="hover:underline">
                SEO Basics for Business Owners
              </a>
            </li>
            <li>
              <a href="/blog/data-into-decisions" className="hover:underline">
                Using Data to Drive Growth
              </a>
            </li>
          </ul>
        </div>

        {/* Support Policy */}
        <div className="p-6 border rounded-xl shadow-sm bg-white">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">📄 Support Policy</h2>
          <p className="text-gray-700">
            We provide technical support as part of your service agreement. If you're not under an active
            plan, we still offer ad-hoc or hourly assistance. Read more about response times and coverage in
            our Terms of Service.
          </p>
          <a
            href="/terms-of-service"
            className="inline-block mt-4 text-blue-600 font-medium hover:underline"
          >
            View Terms of Service →
          </a>
        </div>
      </div>

      {/* Final CTA */}
      <div className="text-center mt-20">
        <h3 className="text-2xl font-semibold mb-2">Need urgent assistance?</h3>
        <p className="text-gray-600 mb-6">
          Call or email us right now. We're here to support you when it matters most.
        </p>
        <a
          href="mailto:support@coretechsolutions.com"
          className="inline-block px-6 py-3 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition"
        >
          Email Emergency Support
        </a>
      </div>
    </section>
  );
}
