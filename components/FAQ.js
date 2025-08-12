"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";

const faqs = [
  {
    question: "Why does my business need a website?",
    answer:
      "A website is your online storefront — it helps customers find you anytime, anywhere. It builds trust, showcases your services, and allows you to reach a wider audience effectively.",
  },
  {
    question: "How long does it take to develop a web or mobile app?",
    answer:
      "Development time varies by project complexity. Simple websites or apps may take 1-3 weeks, while custom, feature-rich solutions typically take 4-8 weeks or more. We provide clear timelines upfront and keep you updated.",
  },
  {
    question: "What is included in your SEO services?",
    answer:
      "Our SEO services cover keyword research, on-page optimization, technical SEO audits, content strategy, and link-building to improve your search engine rankings and attract organic traffic.",
  },
  {
    question: "How can automation benefit my business?",
    answer:
      "Automation helps streamline repetitive tasks, improve accuracy, and increase efficiency — freeing your team to focus on higher-value work and accelerating growth across operations.",
  },
  {
    question: "Can I update my website or app content myself?",
    answer:
      "Yes! We build with easy-to-use content management systems (CMS) so you can update content, images, and other elements without technical help. We also offer training if needed.",
  },
  {
    question: "Will my website and app be mobile-friendly?",
    answer:
      "Absolutely! All our web and app solutions are designed to be fully responsive and work seamlessly across all devices — smartphones, tablets, and desktops.",
  },
  {
    question: "What ongoing support do you provide after launch?",
    answer:
      "We offer maintenance and support services including updates, security patches, performance monitoring, and feature enhancements to keep your website or app running smoothly.",
  },
  {
    question: "Can you integrate automation into my existing systems?",
    answer:
      "Yes, we can analyze your current workflows and integrate automation tools that connect with your existing software to optimize your business processes.",
  },
  {
    question: "How do you ensure the security of my website and apps?",
    answer:
      "We implement best practices including SSL encryption, secure hosting, regular updates, and vulnerability testing to protect your digital assets and customer data.",
  },
  {
    question: "Do I need to provide content and images for my website or app?",
    answer:
      "You can provide your own, or we can help create professional content and source high-quality images that fit your brand and messaging.",
  },
];

const FAQ = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleAnswer = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="py-32 bg-gradient-to-r from-gray-50 to-gray-200" id="faq">
      <div className="container mx-auto text-center">
        <Badge className="text-xs font-medium text-teal-500 uppercase">FAQ</Badge>
        <h1 className="mt-4 text-4xl font-semibold text-gray-800">Common Questions & Answers</h1>
        <p className="mt-6 font-medium text-gray-600">
          Find answers to the most frequently asked questions about our Web Development, App Development, SEO, and Automation services.
        </p>
      </div>
      <div className="mx-auto mt-14 max-w-4xl">
        {faqs.map((faq, index) => (
          <div key={index} className="mb-6">
            <div
              className={`flex justify-between items-center py-4 px-6 bg-white rounded-lg shadow-lg cursor-pointer transition-transform transform hover:scale-105 ${
                expandedIndex === index ? "bg-teal-50" : "bg-white"
              }`}
              onClick={() => toggleAnswer(index)}
            >
              <h3 className="text-lg font-semibold text-gray-700">{faq.question}</h3>
              <span className="text-sm text-gray-500">{expandedIndex === index ? "▲" : "▼"}</span>
            </div>
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                expandedIndex === index ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="py-4 px-6 text-sm text-gray-600 bg-teal-50 rounded-b-lg">
                <p>{faq.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
