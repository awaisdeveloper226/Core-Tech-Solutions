"use client";
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
    title: "Web Development",
    description:
      "We build fast, scalable, and responsive websites tailored to your business goals using the latest tech.",
    icon: Layers,
    color: "from-blue-600 to-purple-600",
  },
  {
    title: "App Development",
    description:
      "Custom mobile and web applications designed to deliver seamless user experiences and drive engagement.",
    icon: BatteryCharging,
    color: "from-green-500 to-cyan-500",
  },
  {
    title: "SEO Optimization",
    description:
      "Improve your search engine rankings and increase organic traffic with data-driven SEO strategies.",
    icon: BarChartHorizontal,
    color: "from-cyan-500 to-blue-500",
  },
  {
    title: "Automation Solutions",
    description:
      "Streamline business operations with intelligent automation to save time and boost productivity.",
    icon: WandSparkles,
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Reliable Support",
    description:
      "Our team provides continuous updates, maintenance, and support to keep your systems running smoothly.",
    icon: CircleHelp,
    color: "from-indigo-500 to-blue-500",
  },
  {
    title: "Business-Focused Results",
    description:
      "We focus on delivering real outcomes — increasing speed, SEO rankings, user engagement, and ROI.",
    icon: ZoomIn,
    color: "from-purple-500 to-blue-500",
  },
];

const WorkWithUs = () => {
  return (
    <section
      className="py-24 bg-gradient-to-b from-white via-blue-50 to-white"
      id="work-with-us"
    >
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Why Work With CoreTech Solutions?
          </h2>
          <p className="mt-4 text-lg md:text-xl text-black/80 max-w-2xl mx-auto">
            Partner with a team that combines technical expertise with a deep focus on business growth.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, i) => (
            <div
              key={i}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkWithUs;