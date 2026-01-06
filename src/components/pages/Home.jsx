import Hero from "../layout/Hero";
import AboutSection from "../layout/AboutSection";
import ServicesSection from "../layout/ServicesSection";
import ImpactSection from "../layout/ImpactSection";
import TrustSection from "../layout/TrustSection";
import CTASection from "../layout/CTASection";
import Footer from "../layout/Footer";

const Home = () => {
  return (
    // OFFSET CONTENT BELOW FIXED NAVBAR
    <main className="pt-14 sm:pt-16">
      <Hero />
      <AboutSection />
      <ServicesSection />
      <ImpactSection />
      <TrustSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Home;
