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
      
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={slides[current].image}
          alt=""
          className={`
            w-full h-full object-cover object-top
            transition-all duration-[2600ms] ease-[cubic-bezier(.16,1,.3,1)]
            ${visible ? "opacity-100 scale-100" : "opacity-0 scale-[1.035]"}
          `}
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-sky-950/85 via-sky-900/65 to-transparent" />

      {/* Content */}
      <div className="relative z-10 min-h-[100svh] flex items-center">
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-8">
          <div className="max-w-[44rem] space-y-6">

            <p className="uppercase tracking-[0.38em] text-sky-100/70 text-xs">
              XCELED SOLUTIONS
            </p>

            <h1
              className={`
                font-extrabold tracking-tight leading-[1.1]
                text-white
                text-[clamp(2.2rem,5.4vw,3.9rem)]
                transition-opacity duration-700
                ${visible ? "opacity-100" : "opacity-0"}
              `}
            >
              {slides[current].heading}
            </h1>

            <p
              className={`
                text-sky-50
                leading-[1.7]
                text-[clamp(1rem,2.2vw,1.15rem)]
                transition-opacity duration-700
                ${visible ? "opacity-90" : "opacity-0"}
              `}
            >
              {slides[current].text}
            </p>

            <p
              className={`
                text-sky-100
                leading-[1.7]
                text-[0.95rem]
                transition-opacity duration-700
                ${visible ? "opacity-85" : "opacity-0"}
              `}
            >
              {slides[current].subtext}
            </p>

            <div
              className={`
                flex flex-wrap gap-4 pt-8
                transition-opacity duration-700
                ${visible ? "opacity-100" : "opacity-0"}
              `}
            >
              <Link to="/services" className="flex-1 sm:flex-none">
                <button className="
                  w-full sm:w-auto
                  px-8 py-3.5 rounded-full
                  text-white font-medium
                  bg-white/15 backdrop-blur-md
                  border border-white/30
                  transition-all duration-300
                  hover:bg-white/25 hover:border-white/50
                  active:scale-[0.97]
                ">
                  Our Services
                </button>
              </Link>

              <Link to="/contact" className="flex-1 sm:flex-none">
                <button className="
                  w-full sm:w-auto
                  px-8 py-3.5 rounded-full
                  text-sky-900 font-medium
                  bg-white
                  transition-all duration-300
                  hover:bg-sky-100
                  active:scale-[0.97]
                ">
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
