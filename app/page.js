import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import WorkWithUs from "@/components/WorkWithUs";
import Services from "@/components/Services";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import About from "@/components/About";
import BlogSection from "@/components/Blog";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <HeroSection /> {/* Catch visitor's attention immediately */}
      <About /> {/* Build trust and introduce your company */}
      <Services /> {/* Showcase core services early on */}
      <WorkWithUs /> {/* Invite collaboration or partnership next */}
      <BlogSection /> {/* Share useful content to educate and engage */}
      <Testimonials /> {/* Social proof — show client success stories */}
      <FAQ /> {/* Address common questions to reduce friction */}
      <CTA /> {/* Strong call-to-action for conversions */}
      <Contact /> {/* Final opportunity to get in touch */}
 
    </>
  );
}
