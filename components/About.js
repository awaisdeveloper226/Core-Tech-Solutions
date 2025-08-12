"use client";
import { motion } from "framer-motion";
import { CircleArrowRight, Files, Settings } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Files,
      title: "Openness",
      desc: "Transparent, feedback-driven collaboration with clarity and honesty.",
    },
    {
      icon: CircleArrowRight,
      title: "Results-Driven",
      desc: "Focused on real growth through web, app, SEO, and automation solutions.",
    },
    {
      icon: Settings,
      title: "Empowerment",
      desc: "We equip you with tools and knowledge to automate and optimize independently.",
    },
  ];

  return (
    <section
      className="py-20 sm:py-28 md:py-32 bg-gradient-to-b from-white via-blue-50 to-white"
      id="about"
    >
      <div className="container mx-auto flex flex-col gap-20 sm:gap-24 md:gap-28 px-4">

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-5 text-center md:text-left items-center md:items-start"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Powering Your Business with Web, App, SEO & Automation
          </h1>
          <p className="max-w-2xl text-base sm:text-lg md:text-xl text-black/80">
            We build scalable customer portals, mobile apps, and deliver impactful SEO strategies alongside AI-driven automation tools that save time and drive growth.
          </p>
        </motion.div>

        {/* Mission with Image */}
        <div className="grid gap-8 sm:gap-10 md:gap-12 md:grid-cols-2 items-center">
          <motion.img
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            src="/images/hero2.jpeg"
            alt="Tech collaboration team"
            className="w-full h-64 sm:h-80 md:h-[400px] rounded-2xl object-cover shadow-2xl"
          />
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-4 sm:gap-5 md:gap-6 bg-white/80 p-6 sm:p-8 md:p-10 rounded-2xl backdrop-blur-md border border-white/20 shadow-lg"
          >
            <p className="text-xs sm:text-sm uppercase tracking-widest text-blue-600 font-semibold">
              Our Mission
            </p>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-black leading-snug">
              Empowering Businesses with Comprehensive Digital Solutions
            </h3>
            <p className="text-black/80 text-sm sm:text-base">
              At CoreTech Solutions, we combine cutting-edge web and app development with expert SEO strategies and powerful automation tools, delivering scalable and future-ready solutions.
            </p>
            <p className="text-black/80 text-sm sm:text-base">
              From startups to enterprises, we provide the technology and expertise to optimize your online presence, streamline operations, and accelerate growth.
            </p>
          </motion.div>
        </div>

        {/* Culture & Values */}
        <div className="flex flex-col gap-8 sm:gap-10 md:gap-12">
          <div className="text-center md:text-left max-w-2xl mx-auto md:mx-0">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              How We Empower Innovation
            </h2>
            <p className="text-base sm:text-lg text-black/80">
              We’ve helped numerous businesses grow by delivering impactful digital solutions across web, app, SEO, and automation. Here’s what drives us:
            </p>
          </div>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
            {values.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center text-center gap-3 sm:gap-4 p-5 sm:p-6 bg-white/60 rounded-xl backdrop-blur-md border border-white/20 shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="p-3 sm:p-4 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full text-white shadow-lg">
                  <item.icon className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-black">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-black/80">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
