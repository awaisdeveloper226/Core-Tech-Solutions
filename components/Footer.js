import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const sections = [
  {
    title: "Services",
    links: [
      { name: "Web Development", href: "/services//web-development" },
      { name: "App Development", href: "/services/app-development" },
      { name: "SEO Optimization", href: "/services/seo" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About Us", href: "/#about" },
      { name: "Testimonials", href: "/testimonials" },
      { name: "Contact Us", href: "/#contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Blog", href: "/#blog" },
      { name: "Help Center", href: "/help" },
      { name: "FAQs", href: "/#faq" },
      
    ],
  },
];

const Footer = () => {
  return (
    <section className="bg-gray-900 text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <footer className="space-y-16">
          {/* Top Section */}
          <div className="flex flex-col lg:flex-row lg:justify-between gap-12">
            {/* Brand & Social */}
            <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
              <div className="flex items-center gap-4">
                <img
                  src="/favicon.ico"
                  alt="CoreTech Solutions"
                  className="h-12 w-12"
                />
                <p className="text-2xl font-semibold">CoreTech Solutions</p>
              </div>
              <p className="mt-4 text-sm text-gray-400 max-w-sm">
                Your go-to partner for web development, app development, and
                data analytics solutions.
              </p>
              <div className="flex gap-5 mt-6">
                <Link
                  href="https://www.instagram.com/coretechsolutions"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <FaInstagram className="text-2xl hover:text-white transition-colors" />
                </Link>
                <Link
                  href="https://www.facebook.com/coretechsolutions"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <FaFacebook className="text-2xl hover:text-white transition-colors" />
                </Link>
                <Link
                  href="https://twitter.com/coretechsolutions"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                >
                  <FaTwitter className="text-2xl hover:text-white transition-colors" />
                </Link>
                <Link
                  href="https://www.linkedin.com/company/coretechsolutions"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="text-2xl hover:text-white transition-colors" />
                </Link>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center sm:text-left">
              {sections.map((section, idx) => (
                <div key={idx}>
                  <h3 className="text-lg font-semibold text-gray-300 mb-4">
                    {section.title}
                  </h3>
                  <ul className="space-y-3 text-sm">
                    {section.links.map((link, i) => (
                      <li key={i}>
                        <Link
                          href={link.href}
                          className="text-gray-400 hover:text-white transition-colors"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-700 pt-6 text-sm text-gray-400 text-center sm:text-left flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex gap-6 flex-wrap justify-center sm:justify-start">
              <Link
                href="/terms-of-service"
                className="hover:text-white transition-colors"
              >
                Terms  of Service
              </Link>
              <Link
                href="/privacy-policy"
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
            </div>
            <p className="text-xs sm:text-sm">
              © 2025 CoreTech Solutions. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Footer;
