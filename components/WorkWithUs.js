"use client";
import { motion } from "framer-motion";
import {
  BarChartHorizontal,
  BatteryCharging,
  CircleHelp,
  Layers,
  WandSparkles,
  ZoomIn,
} from "lucide-react";

const reasons = [
  {
    title: "Quality-Driven",
    description:
      "We craft high-performance websites with Next.js—fast, secure, and built to deliver an exceptional user experience across all devices.",
    icon: ZoomIn,
    color: "from-blue-500 to-purple-500",
  },
  {
    title: "Proven Experience",
    description:
      "With over three years in web development, we've successfully delivered diverse digital projects that solve real business problems.",
    icon: BarChartHorizontal,
    color: "from-cyan-500 to-blue-500",
  },
  {
    title: "Reliable Support",
    description:
      "Our partnership doesn’t end at launch. We provide consistent updates, security patches, and technical support to keep you ahead.",
    icon: CircleHelp,
    color: "from-indigo-500 to-blue-500",
  },
  {
    title: "Innovative Solutions",
    description:
      "We leverage the latest technologies to build custom, forward-thinking digital products that help your brand stand out online.",
    icon: WandSparkles,
    color: "from-blue-500 to-teal-500",
  },
  {
    title: "Business-Focused Results",
    description:
      "Every line of code we write is aimed at real outcomes—boosting your speed, SEO rankings, and user engagement.",
    icon: Layers,
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Optimized Performance",
    description:
      "Our websites are engineered for speed, scalability, and conversion—helping you grow with confidence in a competitive market.",
    icon: BatteryCharging,
    color: "from-green-500 to-cyan-500",
  },
];

const WorkWithUs = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white via-blue-50 to-white" id="work-with-us">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Why Work With CoreTech Solutions?
          </h2>
          <p className="mt-4 text-lg md:text-xl text-black/80 max-w-2xl mx-auto">
            Partner with a team that combines technical expertise with a deep focus on business growth.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center bg-white/70 backdrop-blur-md p-8 rounded-2xl border border-white/30 shadow-md hover:shadow-2xl transition-all"
            >
              <div
                className={`mb-6 flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-tr ${reason.color} shadow-lg`}
              >
                <reason.icon className="size-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-center text-black">
                {reason.title}
              </h3>
              <p className="text-center text-black/70 mt-3">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkWithUs;
