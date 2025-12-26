import { useEffect, useState } from "react";

import slide1 from "../../assets/images/hero/slider1.webp";
import slide2 from "../../assets/images/hero/slider2.webp";
import slide3 from "../../assets/images/hero/slider3.webp";
import slide4 from "../../assets/images/hero/slider4.webp";

const slides = [
  {
    image: slide1,
    heading: "Learning Today, Leading Tomorrow",
    text: "A PMEGP-backed, women-led initiative empowering learners through skills and confidence.",
    subtext:
      "Focused on skill development, vocational training, and career-oriented education.",
  },
  {
    image: slide2,
    heading: "Education With Purpose",
    text: "We believe education is a service to the nation — not a business.",
    subtext:
      "Delivering value-driven learning programs that build self-reliance and clarity.",
  },
  {
    image: slide3,
    heading: "Skills That Build Futures",
    text: "Practical training, mentorship, and innovation designed for real-world impact.",
    subtext:
      "Programs aligned with schools, institutions, and emerging industry needs.",
  },
  {
    image: slide4,
    heading: "Shaping a Self-Reliant India",
    text: "Creating confident individuals ready to contribute, lead, and grow.",
    subtext:
      "Supporting national skill missions through education, innovation, and guidance.",
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);

      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
        setVisible(true);
      }, 900); // smoother fade duration
    }, 6500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full mt-32">
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="relative min-h-[70vh] rounded-2xl overflow-hidden shadow-sm">
          {/* Background Image */}
          <div
            className={`absolute inset-0 bg-cover bg-center transition-all duration-[2600ms] ease-out ${
              visible ? "opacity-100 scale-100" : "opacity-0 scale-[1.03]"
            }`}
            style={{ backgroundImage: `url(${slides[current].image})` }}
          />

          {/* Overlay – slightly stronger for readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-sky-900/70 via-sky-800/55 to-transparent" />

          {/* Content */}
          <div className="relative z-10 h-full flex items-center">
            <div className="max-w-2xl px-8 space-y-6">
              <p className="text-sm tracking-widest text-sky-100 opacity-90">
                XCELED SOLUTIONS
              </p>

              <h1
                className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-tight
                text-white transition-opacity duration-700 ${
                  visible ? "opacity-100" : "opacity-0"
                }`}
              >
                {slides[current].heading}
              </h1>

              <p
                className={`text-lg md:text-xl leading-relaxed
                text-sky-50 transition-opacity duration-700 ${
                  visible ? "opacity-95" : "opacity-0"
                }`}
              >
                {slides[current].text}
              </p>

              <p
                className={`text-base md:text-lg leading-relaxed
                text-sky-100 transition-opacity duration-700 ${
                  visible ? "opacity-90" : "opacity-0"
                }`}
              >
                {slides[current].subtext}
              </p>

              <p className="text-sm text-sky-200 tracking-wide opacity-80">
                PMEGP Supported • MSME Registered • Women-Led Initiative
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
