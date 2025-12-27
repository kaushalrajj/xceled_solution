import Navbar from "./components/layout/Navbar";
import Hero from "./components/layout/Hero";
import AboutSection from "./components/layout/AboutSection";
import ServicesSection from "./components/layout/ServicesSection";
import TrustSection from "./components/layout/TrustSection";
import ImpactSection from "./components/layout/ImpactSection";
import CTASection from "./components/layout/CTASection";

const App = () => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-sky-50 via-white to-white text-slate-800 antialiased">
      {/* Background Decorative Blobs */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-sky-200/40 rounded-full blur-3xl"></div>
      <div className="absolute top-1/3 -right-40 w-[420px] h-[420px] bg-yellow-200/40 rounded-full blur-3xl"></div>

      {/* Fixed Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="relative z-10">
        <Hero />
        <AboutSection />
        <ServicesSection />
        <ImpactSection />

        <TrustSection />
        <CTASection />

     
        {/* Footer */}
      </main>
    </div>
  );
};

export default App;
