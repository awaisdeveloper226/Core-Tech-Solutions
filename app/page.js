import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import WorkWithUs from "@/components/WorkWithUs";
import Services from "@/components/Services";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import About from "@/components/About";
import BlogSection from "@/components/Blog";


export default function Home() {
  return (
    <>
   <HeroSection/>
   <About/>
   <WorkWithUs/>
   <Services/>
   <BlogSection/>
   <CTA/>
   <FAQ/>
   <Contact />

    </>
  );
}
