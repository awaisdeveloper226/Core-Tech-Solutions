"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function HeroSection() {
  const router = useRouter();

  const handleRedirect = (path) => {
    router.push(path);
  };

  return (
    // Inside your component:
    <section
      className="relative min-h-screen overflow-hidden flex items-center"
      style={{ paddingTop: "4rem" }}
    >
      {/* Optimized Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero.jpeg"
          alt="Background hero image"
          fill
          priority
          quality={80}
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
          sizes="100vw"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>
      </div>

      <div className="container relative z-10 px-4 flex flex-col justify-center">
        <div className="max-w-3xl text-center mx-auto">
          <h1 className="scroll-m-20 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight mb-4">
            Powering{" "}
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Digital Growth & Automation
            </span>{" "}
            for Your Business
          </h1>

          <p className="mt-4 text-base sm:text-lg md:text-xl text-white/90">
            From custom web and mobile apps to AI-driven automation tools,
            scripts, and SEO services — CoreTech Solutions delivers scalable,
            efficient, and future-ready digital solutions that save time, reduce
            costs, and accelerate growth.
          </p>

          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <button
              className="px-6 sm:px-8 py-3 text-white bg-blue-600 rounded-full shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              onClick={() => handleRedirect("/#contact")}
            >
              Get Your Custom Solution
            </button>
            <button
              className="px-6 sm:px-8 py-3 text-blue-600 bg-white rounded-full shadow-lg border border-blue-600 hover:bg-blue-50 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              onClick={() => handleRedirect("/services/automation")}
            >
              Explore Automation Tools
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
