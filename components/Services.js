"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

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
  {
    id: "automation",
    title: "Automation Tools & Scripts",
    summary:
      "Automate repetitive tasks and optimize workflows with custom automation tools and scripts designed to save time and reduce errors.",
    href: "/services/automation",
    image: "/images/automation.png",
  },
];

const Services = () => {
  return (
    <section
      className="py-28 bg-gradient-to-b from-white via-blue-50 to-white"
      id="services"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <h2 className="text-4xl font-bold md:text-5xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="mt-4 text-lg text-black/70 max-w-2xl mx-auto">
            End-to-end digital solutions designed to help your business thrive in a competitive market.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {data.map((item, i) => (
            <motion.a
              key={item.id}
              href={item.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.03 }}
              className="group flex flex-col justify-between overflow-hidden rounded-2xl bg-white/80 backdrop-blur-md border border-white/20 shadow-md hover:shadow-xl transition-all"
            >
              {/* Image */}
              <div className="relative aspect-video w-full overflow-hidden rounded-t-2xl">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover object-center transition duration-500 group-hover:scale-105"
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 rounded-t-2xl" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="mb-3 text-xl font-semibold text-black">{item.title}</h3>
                <p className="mb-6 text-black/70 text-sm leading-relaxed line-clamp-3">
                  {item.summary}
                </p>
                <div className="flex items-center text-sm font-medium text-blue-600">
                  Read more
                  <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
