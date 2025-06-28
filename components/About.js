import { CircleArrowRight, Files, Settings } from "lucide-react";

const About = () => {
  return (
    <section className="py-32 bg-white"  id="about">
      <div className="container mx-auto flex flex-col gap-28 px-4">
        {/* Hero */}
        <div className="flex flex-col gap-7 text-center md:text-left items-center md:items-start">
          <h1 className="text-4xl font-extrabold text-black md:text-6xl leading-tight">
            Bringing Web, App & Data Power to Your Business
          </h1>
          <p className="max-w-2xl text-xl text-black/90">
            We streamline the creation of customer portals, mobile apps,
            internal tools, and analytics dashboards—in days, not months.
          </p>
        </div>

        {/* Mission with Image */}
        <div className="grid gap-10 md:grid-cols-2 items-center">
          <img
            src="/images/hero2.jpeg"
            alt="Tech collaboration team"
            className="w-full h-[400px] rounded-2xl object-cover shadow-2xl"
          />
          <div className="flex flex-col gap-6 bg-white/10 p-10 rounded-2xl backdrop-blur-sm border border-white/20">
            <p className="text-sm uppercase tracking-wide text-black/70">
              Our Mission
            </p>
            <h3 className="text-2xl font-semibold text-black leading-snug">
              Empowering Businesses Through Scalable & Future-Ready Digital
              Solutions
            </h3>
            <p className="text-black/80">
              At CoreTech Solutions, we’re on a mission to simplify technology
              for businesses—building lightning-fast websites, powerful apps,
              and data-driven tools that solve real problems. From strategy to
              execution, we deliver innovation that drives measurable results.
            </p>
            <p className="text-black/80">
              Whether you're a startup or scaling enterprise, we equip you with
              the tools, support, and expertise needed to grow confidently in
              today’s digital-first world.
            </p>
          </div>
        </div>

        {/* Culture & Values */}
        <div className="flex flex-col gap-12">
          <div className="text-center md:text-left max-w-2xl">
            <h2 className="text-4xl font-bold text-black md:text-5xl mb-4">
              How We Empower Innovation
            </h2>
            <p className="text-lg text-black/80">
              We’ve helped dozens of companies deliver impactful digital
              products efficiently. Here’s what drives us:
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon:  Files,
                title: "Openness",
                desc: "Transparent, feedback-driven collaboration with clarity and honesty.",
              },
              {
                icon: CircleArrowRight,
                title: "Results‑Driven",
                desc: "Focused on real outcomes, not vanity metrics. We iterate fast.",
              },
              {
                icon: Settings,
                title: "Empowerment",
                desc: "We hand you tools & knowledge, not dependency.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center gap-4 p-6 bg-blue-100 rounded-xl backdrop-blur-md border border-white/20"
              >
                <item.icon className="size-12  text-blue-600 p-3 rounded-full" />
                <h3 className="text-xl font-semibold text-black">
                  {item.title}
                </h3>
                <p className="text-black/80">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
