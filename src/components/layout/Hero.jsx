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
    <section
      className="
        relative w-screen
        min-h-[65svh] sm:min-h-[75svh] lg:min-h-[85svh]
        overflow-hidden
      "
    >
      {/* ================= BACKGROUND IMAGE ================= */}
      <div className="absolute inset-0">
        <img
          src={slides[current].image}
          alt=""
          className={`
            w-full h-full
            object-cover object-center
            transition-all duration-[2800ms] ease-[cubic-bezier(.16,1,.3,1)]
            ${visible ? "opacity-100 scale-100" : "opacity-0 scale-[1.05]"}
          `}
        />
      </div>

      {/* ================= OVERLAY ================= */}
      <div className="absolute inset-0 bg-gradient-to-r from-sky-950/90 via-sky-900/65 to-transparent" />

      {/* ================= CONTENT ================= */}
      <div
        className="
          relative z-10
          min-h-[65svh] sm:min-h-[75svh] lg:min-h-[85svh]
          flex items-center
        "
      >
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-8">
          <div className="max-w-[38rem] space-y-4 sm:space-y-5">

            <p
              className={`
                uppercase tracking-[0.34em]
                text-sky-100/70 text-[0.7rem]
                transition-all duration-600
                ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}
              `}
            >
              XCELED SOLUTIONS
            </p>

            <h1
              className={`
                font-extrabold tracking-tight leading-[1.08]
                text-white
                text-[clamp(1.85rem,4.8vw,3.3rem)]
                transition-all duration-800 delay-75
                ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
              `}
            >
              {slides[current].heading}
            </h1>

            <p
              className={`
                text-sky-50 leading-[1.6]
                text-[0.95rem]
                transition-all duration-800 delay-150
                ${visible ? "opacity-90 translate-y-0" : "opacity-0 translate-y-3"}
              `}
            >
              {slides[current].text}
            </p>

            <p
              className={`
                text-sky-100 leading-[1.6]
                text-[0.88rem]
                transition-all duration-800 delay-250
                ${visible ? "opacity-80 translate-y-0" : "opacity-0 translate-y-3"}
              `}
            >
              {slides[current].subtext}
            </p>

            {/* ================= CTA ================= */}
            <div
              className={`
                flex flex-wrap gap-3 pt-5
                transition-all duration-800 delay-350
                ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}
              `}
            >
              <Link to="/services">
                <button className="px-7 py-3 rounded-full bg-white/15 border border-white/30 text-white">
                  View Our Programs
                </button>
              </Link>

              <Link to="/contact">
                <button className="px-7 py-3 rounded-full bg-white text-sky-900">
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
