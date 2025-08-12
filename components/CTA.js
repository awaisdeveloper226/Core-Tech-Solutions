"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/#contact");
  };

  return (
    <section className="py-32 bg-gradient-to-r from-blue-600 to-cyan-500">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center rounded-2xl bg-white p-8 text-center shadow-xl md:rounded-2xl lg:p-16 border border-transparent bg-clip-padding relative before:absolute before:inset-0 before:rounded-2xl before:p-[2px]"
        >
          <h3 className="mb-3 max-w-3xl text-2xl font-bold text-slate-800 md:mb-4 md:text-4xl lg:mb-6">
            Let’s Build Something Great Together 🚀
          </h3>
          <p className="mb-8 max-w-3xl text-slate-600 lg:text-lg">
            Partner with us for expert Web Development, App Development, SEO, and Automation solutions that help your business grow faster, work smarter, and get real results. We turn your ideas into powerful digital tools that drive success. Let’s build something great together!
          </p>
          <div className="flex w-full flex-col justify-center gap-3 sm:flex-row max-w-md">
            <Button
              variant="outline"
              className="w-full sm:w-auto border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300"
            >
              Learn More
            </Button>
            <Button
              onClick={handleClick}
              className="w-full sm:w-auto bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 flex items-center gap-2 justify-center group"
            >
              Get Started
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
