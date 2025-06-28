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
    icon: <ZoomIn className="size-6 text-blue-600" />,
  },
  {
    title: "Proven Experience",
    description:
      "With over three years in web development, we've successfully delivered diverse digital projects that solve real business problems.",
    icon: <BarChartHorizontal className="size-6 text-cyan-600" />,
  },
  {
    title: "Reliable Support",
    description:
      "Our partnership doesn’t end at launch. We provide consistent updates, security patches, and technical support to keep you ahead.",
    icon: <CircleHelp className="size-6 text-blue-500" />,
  },
  {
    title: "Innovative Solutions",
    description:
      "We leverage the latest technologies to build custom, forward-thinking digital products that help your brand stand out online.",
    icon: <WandSparkles className="size-6 text-cyan-500" />,
  },
  {
    title: "Business-Focused Results",
    description:
      "Every line of code we write is aimed at real outcomes—boosting your speed, SEO rankings, and user engagement.",
    icon: <Layers className="size-6 text-blue-400" />,
  },
  {
    title: "Optimized Performance",
    description:
      "Our websites are engineered for speed, scalability, and conversion—helping you grow with confidence in a competitive market.",
    icon: <BatteryCharging className="size-6 text-cyan-600" />,
  },
];

const WorkWithUs = () => {
  return (
    <section className="py-16 bg-white" id="work-with-us">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-black md:text-5xl">
            Why Work With CoreTech Solutions?
          </h2>
          <p className="mt-4 text-xl text-black opacity-90">
            Partner with a team that combines technical expertise with a deep
            focus on business growth.
          </p>
        </div>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, i) => (
            <div
              key={i}
              className="flex flex-col items-center bg-blue-100 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1"
            >
              <div className="mb-6 flex items-center justify-center w-16 h-16 rounded-full bg-blue-100">
                {reason.icon}
              </div>
              <h3 className="text-xl font-semibold text-center text-slate-800">
                {reason.title}
              </h3>
              <p className="text-center text-slate-600 mt-3">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkWithUs;
