"use client";

import Image from "next/image";

const testimonials = [
  {
    name: "Sarah Ahmed",
    role: "CEO, Tech Innovators",
    company: "Tech Innovators",
    photo: "/testimonials/sarah.jpg",
    feedback:
      "CoreTech Solutions transformed our outdated website into a sleek, modern platform. Their web development and SEO expertise significantly boosted our online presence and sales.",
  },
  {
    name: "Omar Khan",
    role: "Founder",
    company: "AppSolutions",
    photo: "/testimonials/omar.jpg",
    feedback:
      "The team's app development and automation services helped us streamline our workflows and launch a highly intuitive mobile app. Communication was seamless throughout the project.",
  },
  {
    name: "Ayesha Malik",
    role: "Marketing Head",
    company: "BrightMarketing",
    photo: "/testimonials/ayesha.jpg",
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
    ...testimonials,
  ];

  return (
    <section
      id="testimonials"
      className="py-24 bg-gradient-to-r from-blue-600 to-cyan-500 overflow-hidden"
      aria-label="Client testimonials"
    >
      <div className="container mx-auto max-w-5xl px-6 text-center text-white mb-12">
        <h2 className="text-4xl font-bold mb-6">What Our Clients Say</h2>
        <p className="mb-12 text-lg max-w-3xl mx-auto opacity-90">
          Discover how CoreTech Solutions' Web Development, App Development, SEO
          Services, and Automation have helped businesses like yours thrive.
        </p>
      </div>

      <div className="relative">
        {/* Gradient overlays for smooth fade effect */}
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-blue-600 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-cyan-500 to-transparent z-10 pointer-events-none"></div>
        
        <div className="testimonials-container">
          <div className="testimonials-track">
            {extendedTestimonials.map((testimonial, index) => (
              <article
                key={index}
                className="testimonial-card bg-white bg-opacity-10 backdrop-blur-sm rounded-3xl p-8 shadow-lg text-left text-white"
                aria-label={`Testimonial by ${testimonial.name}, ${testimonial.role} at ${testimonial.company}`}
              >
                <p className="text-xl italic mb-6 leading-relaxed">
                  &quot;{testimonial.feedback}&quot;
                </p>
                <div className="flex items-center gap-4">
                  <div className="relative w-16 h-16 rounded-full border-4 border-white shadow-md overflow-hidden flex-shrink-0">
                    <Image
                      src={testimonial.photo}
                      alt={testimonial.name}
                      fill
                      sizes="64px"
                      className="object-cover"
                      priority={index < 3}
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-lg">{testimonial.name}</p>
                    <p className="text-sm opacity-80">
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
          gap: 2.5rem;
          animation: scroll-smooth 40s linear infinite;
          width: max-content;
        }

        .testimonial-card {
          width: 380px;
          min-width: 380px;
          flex-shrink: 0;
          transition: transform 0.3s ease;
        }

        .testimonial-card:hover {
          transform: translateY(-8px);
        }

        @keyframes scroll-smooth {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-25% - 0.625rem));
          }
        }

        /* Pause animation on hover for better UX */
        .testimonials-track:hover {
          animation-play-state: paused;
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

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .testimonial-card {
            width: 320px;
            min-width: 320px;
          }
          
          .testimonials-track {
            gap: 1.5rem;
          }
          
          @keyframes scroll-smooth {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(calc(-25% - 0.375rem));
            }
          }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;