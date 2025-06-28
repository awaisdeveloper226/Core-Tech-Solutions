"use client";

import { ArrowRight, ArrowUpRight } from "lucide-react";

const data = [
  {
    id: "app-dev",
    title: "App Development",
    summary:
      "We build scalable, secure, and modern mobile and web apps tailored to your business needs using cutting-edge frameworks and tools.",
    href: "/services/app-development",
    image: "/images/app.jpg",
  },
  {
    id: "web-dev",
    title: "Web Development",
    summary:
      "Our websites are lightning-fast, SEO-optimized, and conversion-focused—crafted with Next.js and React to deliver unmatched performance.",
    href: "/services/web-development",
    image: "/images/web.jpg",
  },
  {
    id: "seo",
    title: "SEO Optimization",
    summary:
      "Increase your visibility on Google and drive organic traffic with proven SEO strategies including keyword optimization, technical audits, and content enhancements.",
    href: "/services/seo",
    image: "/images/seo.jpg",
  },
];

const Services = () => {
  return (
    <section className="py-28 bg-white" id="services">
      <div className="container">
        {/* Header */}
        <div className="mb-14 flex justify-center text-center">
          <div>
            <h2 className="text-3xl font-bold text-black md:text-5xl">
              Our Services
            </h2>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {data.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className="group flex flex-col justify-between overflow-hidden rounded-xl border border-gray-200 bg-blue-100 shadow-md hover:shadow-xl transition duration-300"
            >
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover object-center transition duration-300 group-hover:scale-105 group-hover:brightness-110"
                />
              </div>
              <div className="p-6">
                <div className="mb-3 text-xl font-semibold text-black">
                  {item.title}
                </div>
                <p className="mb-6 text-black text-sm leading-relaxed line-clamp-3">
                  {item.summary}
                </p>
                <div className="flex items-center text-sm font-medium text-blue-600">
                  Read more
                  <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
