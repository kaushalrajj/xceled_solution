import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import slide1 from "../../assets/images/hero/slider1.webp";
import slide2 from "../../assets/images/hero/slider2.webp";
import slide3 from "../../assets/images/hero/slider3.webp";
import slide4 from "../../assets/images/hero/slider4.webp";

const slides = [
  {
    image: slide1,
    heading: "Shaping Industry-Ready Professionals, Not Just Learners",
    text:
      "A PMEGP-backed, women-led initiative delivering structured, hands-on skill development aligned directly with real industry requirements.",
    subtext:
      "We don’t focus on certificates alone — we focus on competence, confidence, and long-term career sustainability.",
  },
  {
    image: slide2,
    heading: "Education Designed for Outcomes, Not Just Academics",
    text:
      "Our programs bridge the gap between classrooms and careers through practical learning, applied exposure, and guided mentorship.",
    subtext:
      "Every curriculum is outcome-driven, measurable, and aligned with employability and real-world performance.",
  },
  {
    image: slide3,
    heading: "Skills That Convert Potential Into Performance",
    text:
      "Through industry-relevant training, expert guidance, and structured learning paths, we prepare individuals to perform from day one.",
    subtext:
      "From emerging technologies to foundational skills, our approach stays aligned with evolving workforce demands.",
  },
  {
    image: slide4,
    heading: "Empowering a Skilled, Self-Reliant, Confident India",
    text:
      "We enable individuals to contribute meaningfully to the economy through responsible education and inclusive skill development.",
    subtext:
      "Aligned with national skill missions, our work focuses on scale, sustainability, and lasting social impact.",
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
    }, 7200);

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
            transition-all duration-[3200ms] ease-[cubic-bezier(.16,1,.3,1)]
            ${visible ? "opacity-100 scale-100" : "opacity-0 scale-[1.065]"}
          `}
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-sky-950/90 via-sky-900/70 to-transparent" />

      {/* Content */}
      <div className="relative z-10 min-h-[100svh] flex items-center">
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-8">
          <div className="max-w-[44rem] space-y-6">

            <p
              className={`
                uppercase tracking-[0.38em] text-sky-100/70 text-xs
                transition-all duration-700
                ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}
              `}
            >
              XCELED SOLUTIONS
            </p>

            <h1
              className={`
                font-extrabold tracking-tight leading-[1.1]
                text-white
                text-[clamp(2.2rem,5.4vw,3.9rem)]
                transition-all duration-900 delay-100
                ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
              `}
            >
              {slides[current].heading}
            </h1>

            <p
              className={`
                text-sky-50 leading-[1.7]
                text-[clamp(1rem,2.2vw,1.15rem)]
                transition-all duration-900 delay-200
                ${visible ? "opacity-90 translate-y-0" : "opacity-0 translate-y-5"}
              `}
            >
              {slides[current].text}
            </p>

            <p
              className={`
                text-sky-100 leading-[1.7] text-[0.95rem]
                transition-all duration-900 delay-300
                ${visible ? "opacity-85 translate-y-0" : "opacity-0 translate-y-4"}
              `}
            >
              {slides[current].subtext}
            </p>

            <div
              className={`
                flex flex-wrap gap-4 pt-8
                transition-all duration-900 delay-400
                ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
              `}
            >
              <Link to="/services" className="flex-1 sm:flex-none">
                <button
                  className="
                    w-full sm:w-auto
                    px-8 py-3.5 rounded-full
                    text-white font-medium
                    bg-white/15 backdrop-blur-md
                    border border-white/30
                    transition-all duration-300
                    hover:bg-white/25 hover:border-white/50
                    active:scale-[0.96]
                  "
                >
                  View Our Programs
                </button>
              </Link>

              <Link to="/contact" className="flex-1 sm:flex-none">
                <button
                  className="
                    w-full sm:w-auto
                    px-8 py-3.5 rounded-full
                    text-sky-900 font-medium
                    bg-white
                    transition-all duration-300
                    hover:bg-sky-100
                    active:scale-[0.96]
                  "
                >
                  Partner With Us
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
