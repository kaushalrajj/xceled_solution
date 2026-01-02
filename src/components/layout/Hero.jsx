import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import slide1 from "../../assets/images/hero/slider1.webp";
import slide2 from "../../assets/images/hero/slider2.webp";
import slide3 from "../../assets/images/hero/slider3.webp";
import slide4 from "../../assets/images/hero/slider4.webp";

const slides = [
  {
    image: slide1,
    heading: "Industry-Focused Skill Training for Tomorrow’s Leaders",
    text:
      "A PMEGP-backed, women-led initiative delivering practical skill development through structured, career-ready learning programs.",
    subtext:
      "We work with students, institutions, and communities to build confidence, capability, and long-term employability.",
  },
  {
    image: slide2,
    heading: "Education With Purpose That Creates Real Outcomes",
    text:
      "We believe education should go beyond theory and focus on hands-on learning that builds clarity, skills, and self-reliance.",
    subtext:
      "Our programs are designed to support vocational training, real-world exposure, and meaningful career pathways.",
  },
  {
    image: slide3,
    heading: "Skills That Translate Into Real-World Impact",
    text:
      "Practical training, guided mentorship, and structured learning designed to meet today’s evolving industry needs.",
    subtext:
      "From schools to institutions, we align education with emerging technologies and future-ready opportunities.",
  },
  {
    image: slide4,
    heading: "Building Confident Individuals for a Self-Reliant India",
    text:
      "We empower learners to contribute, lead, and grow through focused skill-based programs and responsible education.",
    subtext:
      "Supporting national skill missions with inclusive training, mentorship, and sustainable learning models.",
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
      }, 900);
    }, 6500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-screen min-h-[100svh] overflow-hidden">
      {/* BACKGROUND IMAGE */}
      <div
        className={`
          absolute inset-0 bg-cover bg-center bg-no-repeat
          transition-all duration-[2800ms] ease-[cubic-bezier(.16,1,.3,1)]
          ${visible ? "opacity-100 scale-100" : "opacity-0 scale-[1.04]"}
        `}
        style={{ backgroundImage: `url(${slides[current].image})` }}
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-sky-950/85 via-sky-900/65 to-transparent" />

      {/* CONTENT */}
      <div className="relative z-10 min-h-[100svh] flex items-center">
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-8">
          <div className="max-w-[760px] space-y-[clamp(18px,3vw,30px)]">
            
            {/* BRAND */}
            <p
              className="
                uppercase tracking-[0.35em]
                text-sky-100/70
                text-[clamp(10px,0.85vw,12px)]
              "
            >
              XCELED SOLUTIONS
            </p>

            {/* HEADING */}
            <h1
              className={`
                font-semibold tracking-tight leading-[1.15]
                text-white transition-opacity duration-700
                text-[clamp(30px,5vw,58px)]
                ${visible ? "opacity-100" : "opacity-0"}
              `}
            >
              {slides[current].heading}
            </h1>

            {/* MAIN TEXT */}
            <p
              className={`
                leading-[1.65]
                text-sky-50 transition-opacity duration-700
                text-[clamp(15px,2.3vw,18px)]
                ${visible ? "opacity-90" : "opacity-0"}
              `}
            >
              {slides[current].text}
            </p>

            {/* SUBTEXT */}
            <p
              className={`
                leading-[1.7]
                text-sky-100 transition-opacity duration-700
                text-[clamp(14px,2vw,16px)]
                ${visible ? "opacity-85" : "opacity-0"}
              `}
            >
              {slides[current].subtext}
            </p>

            {/* CTA */}
            <div
              className={`
                flex flex-row flex-wrap gap-4 pt-6
                transition-opacity duration-700
                ${visible ? "opacity-100" : "opacity-0"}
              `}
            >
              <Link to="/services" className="flex-1 sm:flex-none">
                <button
                  className="
                    w-full sm:w-auto
                    px-8 py-3.5 rounded-full
                    text-white font-medium
                    text-[clamp(14px,1.1vw,15px)]
                    bg-white/15 backdrop-blur-md
                    border border-white/30
                    transition-all duration-300
                    hover:bg-white/25 hover:border-white/50
                    active:scale-[0.97]
                  "
                >
                  Our Services
                </button>
              </Link>

              <Link to="/contact" className="flex-1 sm:flex-none">
                <button
                  className="
                    w-full sm:w-auto
                    px-8 py-3.5 rounded-full
                    text-sky-900 font-medium
                    text-[clamp(14px,1.1vw,15px)]
                    bg-white
                    transition-all duration-300
                    hover:bg-sky-100
                    active:scale-[0.97]
                  "
                >
                  Contact Us
                </button>
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
