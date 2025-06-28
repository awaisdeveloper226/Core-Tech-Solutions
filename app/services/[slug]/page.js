"use client";
import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  Check,
  Star,
  Users,
  Clock,
  Award,
  ChevronDown,
} from "lucide-react";
import { useRouter } from "next/navigation";

const serviceData = {
  "app-development": {
    title: "App Development",

    image:
      "/images/app.jpg",
    summary:
      "We build scalable, secure, and modern mobile and web apps tailored to your business needs using cutting-edge frameworks and tools.",
    details: [
      "Cross-platform development for iOS and Android.",
      "Robust backend with real-time capabilities.",
      "Sleek UI/UX tailored to user personas.",
      "Scalability baked in from the start.",
    ],
    cta: "Let's build your app today!",
    price: "Starting from $15,000",
    deliveryTime: "8-12 weeks",
    clientsServed: "50+",
    rating: "4.9",
    features: [
      "Native iOS & Android Development",
      "Progressive Web App (PWA)",
      "Real-time Backend Infrastructure",
      "Cloud Integration & Deployment",
      "Advanced Security Implementation",
      "Performance Optimization",
      "User Analytics & Insights",
      "Ongoing Maintenance & Support",
    ],
    testimonial: {
      text: "The team delivered an exceptional app that exceeded our expectations. The user interface is intuitive and the performance is outstanding.",
      author: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=150&q=80",
    },
  },
  "web-development": {
    title: "Website Development",

    image:
      "/images/web.jpg",
    summary:
      "Lightning-fast, SEO-optimized, and conversion-focused websites built using Next.js, React, and modern architecture.",
    details: [
      "Jamstack-based performance.",
      "Progressive Web App capabilities.",
      "Custom CMS integrations.",
      "Accessibility and mobile-first design.",
    ],
    cta: "Start your digital transformation with us!",
    price: "Starting from $8,000",
    deliveryTime: "4-8 weeks",
    clientsServed: "100+",
    rating: "4.8",
    features: [
      "Responsive Design & Mobile-First",
      "SEO Optimization & Core Web Vitals",
      "E-commerce Integration",
      "Content Management System",
      "SSL Security & Performance",
      "Analytics & Conversion Tracking",
      "Social Media Integration",
      "24/7 Technical Support",
    ],
    testimonial: {
      text: "Our website conversion rate increased by 300% after the redesign. The attention to detail and user experience is phenomenal.",
      author: "Michael Chen",
      role: "Marketing Director, GrowthCorp",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80",
    },
  },
  "seo": {
  title: "SEO Optimization",

  image: "/images/seo.jpg",
  summary:
    "Improve your search engine rankings and attract more organic traffic with on-page, off-page, and technical SEO strategies.",
  details: [
    "Comprehensive site audits and keyword research.",
    "Technical SEO optimization for faster indexing.",
    "On-page SEO and content strategy.",
    "Link-building and authority development.",
  ],
  cta: "Boost your visibility with expert SEO.",
  price: "Starting from $6,000",
  deliveryTime: "4-8 weeks",
  clientsServed: "100+",
  rating: "4.8",
  features: [
    "Keyword Research & Strategy",
    "Technical SEO Audits",
    "On-Page Optimization",
    "Backlink Building",
    "Content Optimization",
    "Mobile SEO & Core Web Vitals",
    "Local SEO Setup",
    "Monthly Performance Reports",
  ],
  testimonial: {
    text: "Thanks to their SEO expertise, our traffic has nearly doubled and we’re consistently ranking on the first page for our key terms.",
    author: "Liam Patel",
    role: "Marketing Director, BrightEdge Media",
    avatar:
      "https://images.unsplash.com/photo-1502767089025-6572583495b0?auto=format&fit=crop&w=150&q=80",
  },
}
,
};

export default function ServiceDetails({ params }) {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("overview");
  const [showAllFeatures, setShowAllFeatures] = useState(false);
  const slug = params?.slug;
  const service = serviceData[slug];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                <Star className="w-4 h-4 fill-current" />
                {service.rating} Rating • {service.clientsServed} Clients Served
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                {service.title}
              </h1>

              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                {service.summary}
              </p>

              {/* Key Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {[
                  {
                    icon: (
                      <Clock className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                    ),
                    value: service.deliveryTime,
                    label: "Delivery Time",
                  },
                  {
                    icon: (
                      <Users className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                    ),
                    value: service.clientsServed,
                    label: "Happy Clients",
                  },
                  {
                    icon: (
                      <Award className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                    ),
                    value: `${service.rating}/5`,
                    label: "Client Rating",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="text-center p-4 bg-white rounded-2xl shadow-sm border border-gray-100"
                  >
                    {item.icon}
                    <div className="text-2xl font-bold text-gray-900">
                      {item.value}
                    </div>
                    <div className="text-sm text-gray-500">{item.label}</div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => router.push("/contact")}
                  className="group relative overflow-hidden px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2 font-semibold">
                    Get Started Now
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </button>

                <button className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-2xl hover:border-blue-600 hover:text-blue-600 transition-all duration-300 font-semibold">
                  View Portfolio
                </button>
              </div>

              <div className="text-sm text-gray-500">
                💡 Free consultation included • No hidden fees • 30-day
                money-back guarantee
              </div>
            </div>

            {/* Image */}
            <div className="relative w-full">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl p-4 border border-gray-100">
                <div className="text-sm text-gray-500">Starting from</div>
                <div className="text-2xl font-bold text-blue-600">
                  {service.price}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center mb-12 overflow-x-auto -mx-4 sm:mx-0">
            <div className="bg-white rounded-2xl p-2 shadow-lg border border-gray-100 mx-4 sm:mx-0 min-w-max">
              <div className="flex gap-2 whitespace-nowrap">
                {[
                  { id: "overview", label: "Overview" },
                  { id: "features", label: "Features" },
                  { id: "testimonials", label: "Testimonials" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-4 sm:px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                      activeTab === tab.id
                        ? "bg-blue-600 text-white shadow-md"
                        : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 lg:p-12 border border-gray-100 overflow-hidden">
            {activeTab === "overview" && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">
                    What We Deliver
                  </h3>
                  <div className="space-y-4">
                    {service.details.map((point, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-4 p-4 bg-gray-50 rounded-2xl"
                      >
                        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                          <Check className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">
                            Key Deliverable {idx + 1}
                          </h4>
                          <p className="text-gray-600">{point}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">
                    Process Overview
                  </h3>
                  <div className="space-y-6">
                    {[
                      {
                        step: 1,
                        title: "Discovery & Planning",
                        desc: "We analyze your requirements and create a detailed project roadmap.",
                      },
                      {
                        step: 2,
                        title: "Design & Prototype",
                        desc: "Our team creates wireframes and interactive prototypes for your approval.",
                      },
                      {
                        step: 3,
                        title: "Development & Testing",
                        desc: "We build and rigorously test your solution using industry best practices.",
                      },
                      {
                        step: 4,
                        title: "Launch & Support",
                        desc: "We deploy your solution and provide ongoing maintenance and support.",
                      },
                    ].map((phase) => (
                      <div key={phase.step} className="flex gap-4">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white font-bold">
                          {phase.step}
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">
                            {phase.title}
                          </h4>
                          <p className="text-gray-600 text-sm">{phase.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === "features" && (
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                  Complete Feature Set
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {service.features
                    .slice(0, showAllFeatures ? undefined : 6)
                    .map((feature, idx) => (
                      <div
                        key={idx}
                        className="group p-6 bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl hover:shadow-lg transition-all duration-300 border border-gray-100"
                      >
                        <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                          <Check className="w-6 h-6 text-white" />
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-2">
                          {feature}
                        </h4>
                        <p className="text-sm text-gray-600">
                          Professional implementation with modern best practices
                          and optimization.
                        </p>
                      </div>
                    ))}
                </div>
                {service.features.length > 6 && (
                  <div className="text-center mt-8">
                    <button
                      onClick={() => setShowAllFeatures(!showAllFeatures)}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors"
                    >
                      {showAllFeatures ? "Show Less" : "Show All Features"}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          showAllFeatures ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </div>
                )}
              </div>
            )}

            {activeTab === "testimonials" && (
              <div className="text-center max-w-4xl mx-auto">
                <h3 className="text-3xl font-bold text-gray-900 mb-12">
                  What Our Clients Say
                </h3>
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 lg:p-12 border border-gray-100">
                  <div className="flex justify-center mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-6 h-6 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <blockquote className="text-2xl text-gray-700 font-medium mb-8 leading-relaxed">
                    "{service.testimonial.text}"
                  </blockquote>
                  <div className="flex items-center justify-center gap-4">
                    <img
                      src={service.testimonial.avatar}
                      alt={service.testimonial.author}
                      className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg"
                    />
                    <div className="text-left">
                      <div className="font-semibold text-gray-900">
                        {service.testimonial.author}
                      </div>
                      <div className="text-gray-600">
                        {service.testimonial.role}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Related Services Section — No horizontal scroll issues */}
      <section className="py-20 bg-gray-50">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">
              Explore Our Other Services
            </h3>
            <p className="text-xl text-gray-600">
              Comprehensive solutions for all your digital needs
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {Object.entries(serviceData)
              .filter(([id]) => id !== slug)
              .map(([id, item]) => (
                <Link
                  href={`/services/${id}`}
                  className="no-underline"
                  key={id}
                >
                  <div
                    key={id}
                    className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:scale-105"
                  >
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                        {item.price}
                      </div>
                    </div>

                    <div className="p-8">
                      <h4 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {item.summary}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {item.deliveryTime}
                          </span>
                          <span className="flex items-center gap-1">
                            <Star className="w-4 h-4 fill-current text-yellow-400" />
                            {item.rating}
                          </span>
                        </div>

                        <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold group-hover:gap-3 transition-all">
                          Learn More
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
