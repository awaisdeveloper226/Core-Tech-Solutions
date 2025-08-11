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
      desc: "Focused on real outcomes, not vanity metrics. We iterate fast.",
    },
    {
      icon: Settings,
      title: "Empowerment",
      desc: "We hand you tools & knowledge, not dependency.",
    },
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-white via-blue-50 to-white" id="about">
      <div className="container mx-auto flex flex-col gap-28 px-4">

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-7 text-center md:text-left items-center md:items-start"
        >
          <h1 className="text-4xl font-extrabold md:text-6xl leading-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Bringing Web, App & Data Power to Your Business
          </h1>
          <p className="max-w-2xl text-lg md:text-xl text-black/80">
            We streamline the creation of customer portals, mobile apps, internal tools, 
            and analytics dashboards—in days, not months.
          </p>
        </motion.div>

        {/* Mission with Image */}
        <div className="grid gap-10 md:grid-cols-2 items-center">
          <motion.img
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            src="/images/hero2.jpeg"
            alt="Tech collaboration team"
            className="w-full h-[400px] rounded-2xl object-cover shadow-2xl"
          />
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6 bg-white/80 p-10 rounded-2xl backdrop-blur-md border border-white/20 shadow-lg"
          >
            <p className="text-sm uppercase tracking-widest text-blue-600 font-semibold">
              Our Mission
            </p>
            <h3 className="text-2xl md:text-3xl font-bold text-black leading-snug">
              Empowering Businesses Through Scalable & Future-Ready Digital Solutions
            </h3>
            <p className="text-black/80">
              At CoreTech Solutions, we’re on a mission to simplify technology for businesses—
              building lightning-fast websites, powerful apps, and data-driven tools that solve real problems.
            </p>
            <p className="text-black/80">
              Whether you're a startup or scaling enterprise, we equip you with the tools, 
              support, and expertise needed to grow confidently in today’s digital-first world.
            </p>
          </motion.div>
        </div>

        {/* Culture & Values */}
        <div className="flex flex-col gap-12">
          <div className="text-center md:text-left max-w-2xl mx-auto md:mx-0">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              How We Empower Innovation
            </h2>
            <p className="text-lg text-black/80">
              We’ve helped dozens of companies deliver impactful digital products efficiently. 
              Here’s what drives us:
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {values.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center text-center gap-4 p-6 bg-white/60 rounded-xl backdrop-blur-md border border-white/20 shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="p-4 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full text-white shadow-lg">
                  <item.icon className="size-8" />
                </div>
                <h3 className="text-xl font-semibold text-black">
                  {item.title}
                </h3>
                <p className="text-black/80">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
