"use client";

import { useRouter } from 'next/navigation';

export default function HeroSection() {
  const router = useRouter();

  const handleRedirect = (path) => {
    router.push(path);
  };

  return (
    <section className="relative py-24 lg:py-32 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/hero.jpeg')" }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>

      <div className="container relative z-10">
        <div className="max-w-3xl text-center mx-auto">
          <h1 className="scroll-m-20 text-5xl font-extrabold tracking-tight text-white leading-tight lg:text-6xl mb-4 hover:animate-bobble transition-all duration-500 transform hover:scale-105 cursor-pointer">
            Empowering Digital Innovation for Your Business
          </h1>
          <p className="mt-4 text-xl text-white opacity-90 hover:opacity-100 transition-opacity duration-300">
            From cutting-edge web and mobile app development to strategic data analytics, CoreTech Solutions equips your business with scalable, efficient, and future-ready digital solutions.
          </p>
          <div className="mt-8 space-x-4 flex justify-center">
            <button
              className="px-8 py-3 text-white bg-blue-600 rounded-full shadow-lg hover:bg-blue-800 transition-all duration-500 transform hover:scale-110 hover:shadow-xl"
              onClick={() => handleRedirect("/#contact")}
            >
              Start Your Project
            </button>
            <button
              className="px-8 py-3 text-white bg-blue-600 rounded-full shadow-lg hover:bg-blue-800 transition-all duration-500 transform hover:scale-110 hover:shadow-xl"
              onClick={() => handleRedirect("/#work-with-us")}
            >
              Why Work With Us
            </button>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes bobble {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .hover\\:animate-bobble:hover {
          animation: bobble 1.5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
