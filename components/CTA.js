import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-32 bg-gradient-to-r from-blue-600 to-cyan-500">
      <div className="container">
        <div className="flex flex-col items-center rounded-2xl bg-white p-8 text-center shadow-xl md:rounded-2xl lg:p-16">
          <h3 className="mb-3 max-w-3xl text-2xl font-bold text-slate-800 md:mb-4 md:text-4xl lg:mb-6">
            Let's Build Something Great Together
          </h3>
          <p className="mb-8 max-w-3xl text-slate-600 lg:text-lg">
            Partner with us for custom websites, mobile apps, and data-driven solutions
            that drive growth and deliver results. We turn ideas into digital success.
          </p>
          <div className="flex w-full flex-col justify-center gap-2 sm:flex-row">
            <Button
              variant="outline"
              className="w-full sm:w-auto border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300"
            >
              Learn More
            </Button>
            <Button className="w-full sm:w-auto bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
