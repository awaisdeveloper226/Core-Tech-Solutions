"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";

const faqs = [
  {
    question: "Why do I need a website for my business?",
    answer:
      "Having a website is essential for establishing an online presence. It helps potential customers find you, learn more about your services or products, and engage with your brand. A website also enhances your credibility, provides a platform for online sales or lead generation, and can help you stand out from your competitors.",
  },
  {
    question: "How long will it take to build my website?",
    answer:
      "The timeline for building a website depends on the complexity and features required. A basic website can take anywhere from a few days to a couple of weeks, while more complex websites with custom features may take a month or more. We’ll provide you with a clear timeline and keep you updated throughout the process.",
  },
  {
    question: "How much will a website cost?",
    answer:
      "The cost of building a website depends on factors such as design, features, and complexity. We offer flexible pricing based on your specific needs. After understanding your requirements, we will provide a customized quote that fits your budget and goals.",
  },
  {
    question: "Will my website be mobile-friendly?",
    answer:
      "Yes, all websites we build are fully responsive, meaning they will look great and function well on mobile phones, tablets, and desktop computers. This ensures that your customers have a seamless experience no matter what device they use.",
  },
  {
    question: "Can I update the website myself after it's built?",
    answer:
      "Yes! We build websites with user-friendly content management systems (CMS), so you can easily update content, add blog posts, update images, and more. If needed, we’ll also provide you with simple tutorials or training to manage your website.",
  },
  {
    question: "What happens if my website stops working or I need changes after it’s live?",
    answer:
      "We provide ongoing support and maintenance for your website. Whether you need minor updates, fixes, or troubleshooting, we're here to help. You can contact us anytime if you need assistance, and we’ll ensure your website is running smoothly.",
  },
  {
    question: "Will my website be secure?",
    answer:
      "Yes, we take security seriously. We implement industry-standard security measures to protect your website from unauthorized access, data breaches, and other online threats. This includes SSL certificates, secure hosting, and regular updates to ensure your site stays safe.",
  },
  {
    question: "Can you help me with SEO (Search Engine Optimization)?",
    answer:
      "Absolutely! We build websites with SEO best practices in mind to help you rank higher on search engines like Google. This includes optimizing your content, using the right keywords, and ensuring that your site loads quickly and functions properly. We can also offer additional SEO services to boost your online visibility even more.",
  },
  {
    question: "Do I need to provide my own content or images?",
    answer:
      "We can help you with both content and images. If you already have your own content, we can incorporate it into your website. If not, we can assist with creating content or sourcing high-quality stock images that reflect your brand.",
  },
  {
    question: "Can I add an online store to my website?",
    answer:
      "Yes, we can integrate an online store into your website, allowing you to sell products or services directly through your site. We’ll work with you to set up an easy-to-use e-commerce platform, including product pages, payment processing, and shipping options.",
  },
];

const FAQ = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleAnswer = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="py-32 bg-gradient-to-r from-gray-50 to-gray-200" id="faq">
      <div className="container mx-auto text-center" >
        <Badge className="text-xs font-medium text-teal-500 uppercase">FAQ</Badge>
        <h1 className="mt-4 text-4xl font-semibold text-gray-800">Common Questions & Answers</h1>
        <p className="mt-6 font-medium text-gray-600">
          Find answers to the most frequently asked questions and learn more about our services.
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
