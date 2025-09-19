"use client";

import Image from "next/image";

const testimonials = [
  {
    name: "Ahmed Nawaz",
    role: "CEO, FifthGen",
    company: "FifthGen",
    photo: "/images/man.jpg",
    feedback:
      "CoreTech Solutions transformed our outdated website into a sleek, modern platform. Their web development and SEO expertise significantly boosted our online presence and sales.",
  },
  {
    name: "Maria Ali",
    role: "Founder",
    company: "Scout",
    photo: "/images/woman.jpg",
    feedback:
      "The team's app development and automation services helped us streamline our workflows and launch a highly intuitive mobile app. Communication was seamless throughout the project.",
  },
  {
    name: "Victor",
    role: "Marketing Head",
    company: "Buckers Auction",
    photo: "/images/man.jpg",
    feedback:
      "Thanks to CoreTech's SEO services, our organic traffic doubled within months. Their strategic approach and attention to detail are unmatched.",
  },
];

const Testimonials = () => {
  // Create multiple copies for seamless infinite scroll
  const extendedTestimonials = [
    ...testimonials,
    ...testimonials,
    ...testimonials,
  ];

  return (
    <section
      id="testimonials"
      className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-cyan-500 overflow-hidden"
      aria-label="Client testimonials"
    >
      <div className="container mx-auto max-w-5xl px-4 sm:px-6 text-center text-white mb-8 md:mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">What Our Clients Say</h2>
        <p className="text-base md:text-lg max-w-3xl mx-auto opacity-90">
          Discover how CoreTech Solutions' Web Development, App Development, SEO
          Services, and Automation have helped businesses like yours thrive.
        </p>
      </div>

      <div className="relative">
        {/* Gradient overlays for smooth fade effect */}
        <div className="absolute left-0 top-0 w-16 md:w-32 h-full bg-gradient-to-r from-blue-600 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 w-16 md:w-32 h-full bg-gradient-to-l from-cyan-500 to-transparent z-10 pointer-events-none"></div>
        
        <div className="testimonials-container">
          <div className="testimonials-track">
            {extendedTestimonials.map((testimonial, index) => (
              <article
                key={index}
                className="testimonial-card bg-white bg-opacity-10 backdrop-blur-sm rounded-xl md:rounded-3xl p-6 md:p-8 shadow-lg text-left text-white mx-2 md:mx-0"
                aria-label={`Testimonial by ${testimonial.name}, ${testimonial.role} at ${testimonial.company}`}
              >
                <p className="text-base md:text-xl italic mb-4 md:mb-6 leading-relaxed">
                  &quot;{testimonial.feedback}&quot;
                </p>
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="relative w-12 h-12 md:w-16 md:h-16 rounded-full border-2 md:border-4 border-white shadow-md overflow-hidden flex-shrink-0">
                    <Image
                      src={testimonial.photo}
                      alt={testimonial.name}
                      fill
                      sizes="(max-width: 768px) 48px, 64px"
                      className="object-cover"
                      priority={index < 3}
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-base md:text-lg">{testimonial.name}</p>
                    <p className="text-xs md:text-sm opacity-80">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .testimonials-container {
          overflow: hidden;
          width: 100%;
          position: relative;
        }

        .testimonials-track {
          display: flex;
          gap: 1rem;
          animation: scroll-smooth 30s linear infinite;
          width: max-content;
          padding: 0 1rem;
        }

        .testimonial-card {
          width: 300px;
          min-width: 300px;
          flex-shrink: 0;
        }

        @keyframes scroll-smooth {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-33.333% - 0.333rem));
          }
        }

        /* Ensure smooth performance */
        .testimonials-track {
          will-change: transform;
          backface-visibility: hidden;
          perspective: 1000px;
        }

        /* Hide scrollbars */
        .testimonials-container::-webkit-scrollbar {
          display: none;
        }
        
        .testimonials-container {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        /* Mobile adjustments */
        @media (max-width: 640px) {
          .testimonial-card {
            width: 280px;
            min-width: 280px;
          }
          
          .testimonials-track {
            gap: 0.75rem;
            padding: 0 0.5rem;
          }
          
          @keyframes scroll-smooth {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(calc(-33.333% - 0.25rem));
            }
          }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;