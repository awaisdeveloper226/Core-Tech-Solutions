"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function HeroSection() {
  const router = useRouter();

  const handleRedirect = (path) => {
    router.push(path);
  };

  return (
    <section
      className="relative py-28 lg:py-40 bg-fixed bg-cover bg-center"
      style={{ backgroundImage: "url('/images/hero.jpeg')" }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80 z-0"></div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl text-center mx-auto"
        >
          <h1 className="scroll-m-20 text-5xl font-extrabold tracking-tight text-white leading-tight lg:text-6xl mb-6">
            Empowering{" "}
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Digital Innovation
            </span>{" "}
            for Your Business
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="mt-4 text-lg lg:text-xl text-white/90"
          >
            From cutting-edge web and mobile app development to strategic data
            analytics, CoreTech Solutions equips your business with scalable,
            efficient, and future-ready digital solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mt-10 flex flex-wrap justify-center gap-4"
          >
            <button
              className="px-8 py-3 text-white bg-blue-600 rounded-full shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              onClick={() => handleRedirect("/#contact")}
            >
              Start Your Project
            </button>
            <button
              className="px-8 py-3 text-blue-600 bg-white rounded-full shadow-lg border border-blue-600 hover:bg-blue-50 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              onClick={() => handleRedirect("/#work-with-us")}
            >
              Why Work With Us
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
