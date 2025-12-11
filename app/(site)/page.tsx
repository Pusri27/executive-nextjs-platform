import Navbar from "@/app/(site)/components/Navbar";
import Hero from "@/app/(site)/components/Hero";
import ValueHighlights from "@/app/(site)/components/ValueHighlights";
import AboutSection from "@/app/(site)/components/AboutSection";
import Services from "@/app/(site)/components/Services";
import Industries from "@/app/(site)/components/Industries";
import CaseStudies from "@/app/(site)/components/CaseStudies";
import Testimonials from "@/app/(site)/components/Testimonials";
import Insights from "@/app/(site)/components/Insights";
import CTASection from "@/app/(site)/components/CTASection";
import ContactForm from "@/app/(site)/components/ContactForm";
import Footer from "@/app/(site)/components/Footer";

export default function Home() {
  return (
    <main className="bg-navy-900 min-h-screen relative flex flex-col">
      <Navbar />
      <Hero />
      <ValueHighlights />
      <AboutSection />
      <Services />
      <Industries />
      <CaseStudies />
      <Testimonials />
      <Insights />
      <CTASection />
      <ContactForm />
      <Footer />
    </main>
  );
}
