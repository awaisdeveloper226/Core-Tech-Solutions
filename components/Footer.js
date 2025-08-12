import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const sections = [
  {
    title: "Services",
    links: [
      { name: "Web Development", href: "/services/web-development" },
      { name: "App Development", href: "/services/app-development" },
      { name: "SEO Services", href: "/services/seo" },
      { name: "Automation", href: "/services/automation" },
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
    <section className="bg-gray-900 text-white py-16 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto">
        <footer className="space-y-20">
          {/* Top Section */}
          <div className="flex flex-col lg:flex-row lg:justify-between gap-14 lg:gap-24">
            {/* Brand & Social */}
            <div className="text-center lg:text-left flex flex-col items-center lg:items-start max-w-sm mx-auto lg:mx-0">
              <div className="flex items-center gap-4 mb-3">
                <img
                  src="/favicon.ico"
                  alt="CoreTech Solutions"
                  className="h-12 w-12"
                />
                <p className="text-3xl font-bold tracking-wide">CoreTech Solutions</p>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Your trusted partner for Web Development, App Development, SEO Services, and Automation solutions — tailored for your business growth.
              </p>
              <div className="flex gap-7 mt-8">
                <Link
                  href="https://www.instagram.com/coretechsolutions"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <FaInstagram size={26} />
                </Link>
                <Link
                  href="https://www.facebook.com/coretechsolutions"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <FaFacebook size={26} />
                </Link>
                <Link
                  href="https://twitter.com/coretechsolutions"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <FaTwitter size={26} />
                </Link>
                <Link
                  href="https://www.linkedin.com/company/coretechsolutions"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <FaLinkedin size={26} />
                </Link>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 text-center sm:text-left max-w-4xl mx-auto lg:mx-0">
              {sections.map((section, idx) => (
                <div key={idx}>
                  <h3 className="text-lg font-semibold text-gray-300 mb-6 tracking-wide">
                    {section.title}
                  </h3>
                  <ul className="space-y-4 text-sm">
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
          <div className="border-t border-gray-700 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-gray-400 text-xs sm:text-sm">
            <div className="flex gap-8 flex-wrap justify-center sm:justify-start">
              <Link
                href="/terms-of-service"
                className="hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/privacy-policy"
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
            </div>
            <p className="select-none">© 2025 CoreTech Solutions. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Footer;
