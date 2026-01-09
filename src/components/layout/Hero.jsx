import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import slide1 from "../../assets/images/hero/slider1.webp";
import slide2 from "../../assets/images/hero/slider2.webp";
import slide3 from "../../assets/images/hero/slider3.webp";
import slide4 from "../../assets/images/hero/slider4.webp";

/* ================= GOOGLE FONT ================= */
const FontLoader = () => (
  <style>
    {`
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
    `}
  </style>
);

const slides = [
  {
    image: slide1,
    heading: "Developing Industry-Ready Professionals",
    text:
      "A PMEGP-backed, women-led initiative delivering structured, hands-on skill development aligned with real industry needs.",
    subtext:
      "Our focus is long-term capability building — not short-term certification outcomes.",
  },
  {
    image: slide2,
    heading: "Outcome-Driven Education for Real Careers",
    text:
      "We bridge the gap between academic learning and workplace expectations through applied training and guided mentorship.",
    subtext:
      "Each program is measurable, practical, and aligned with employability benchmarks.",
  },
  {
    image: slide3,
    heading: "Turning Potential Into Workplace Performance",
    text:
      "Through industry-aligned curriculum and expert-led instruction, we prepare individuals to contribute from day one.",
    subtext:
      "Our training evolves continuously with changing workforce demands.",
  },
  {
    image: slide4,
    heading: "Building a Skilled and Self-Reliant India",
    text:
      "We enable inclusive and responsible skill development that supports economic participation and long-term impact.",
    subtext:
      "Our initiatives align with national missions and sustainable growth goals.",
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
    <>
      <FontLoader />

      <section
        style={{ fontFamily: "Inter, sans-serif" }}
        className="
          relative w-full
          min-h-[65svh] sm:min-h-[72svh] lg:min-h-[84svh]
          overflow-hidden
        "
      >
        {/* BACKGROUND IMAGE */}
        <div className="absolute inset-0">
          <img
            src={slides[current].image}
            alt=""
            className={`
              w-full h-full object-cover
              transition-all duration-[3000ms]
              ease-[cubic-bezier(.16,1,.3,1)]
              ${visible ? "opacity-100 scale-100" : "opacity-0 scale-[1.05]"}
            `}
          />
        </div>

        {/* OVERLAY */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-r
            from-sky-950/95
            via-sky-900/70
            to-sky-900/20
            sm:from-sky-950/90
            sm:via-sky-900/60
          "
        />

        {/* CONTENT */}
        <div
          className="
            relative z-10
            min-h-[65svh] sm:min-h-[72svh] lg:min-h-[84svh]
            flex items-center
          "
        >
          <div className="w-full max-w-7xl mx-auto px-5 sm:px-8">
            <div className="max-w-[40rem] space-y-5 sm:space-y-6">

              {/* Eyebrow */}
              <p
                className={`
                  uppercase tracking-[0.32em]
                  text-sky-200/75
                  text-[0.72rem] sm:text-[0.77rem]
                  font-medium
                  transition-all duration-500
                  ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}
                `}
              >
                XCELED SOLUTIONS
              </p>

              {/* Heading */}
              <h1
                className={`
                  font-bold tracking-tight
                  leading-[1.18]
                  text-white
                  text-[clamp(1.9rem,6.8vw,3.6rem)]
                  transition-all duration-700 delay-75
                  ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
                `}
              >
                {slides[current].heading}
              </h1>

              {/* Main Text */}
              <p
                className={`
                  text-sky-50/90
                  leading-[1.7]
                  text-[1.05rem] sm:text-[1.1rem]
                  max-w-[34rem]
                  transition-all duration-700 delay-150
                  ${visible ? "opacity-90 translate-y-0" : "opacity-0 translate-y-3"}
                `}
              >
                {slides[current].text}
              </p>

              {/* Sub Text */}
              <p
                className={`
                  text-sky-200/85
                  leading-[1.65]
                  text-[0.96rem] sm:text-[1rem]
                  max-w-[32rem]
                  transition-all duration-700 delay-250
                  ${visible ? "opacity-80 translate-y-0" : "opacity-0 translate-y-3"}
                `}
              >
                {slides[current].subtext}
              </p>

              {/* CTA */}
              <div
                className={`
                  flex flex-col sm:flex-row
                  gap-3 sm:gap-4
                  pt-6 sm:pt-7
                  transition-all duration-700 delay-350
                  ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}
                `}
              >
                <Link to="/services">
                  <button
                    className="
                      w-full sm:w-auto
                      px-7 py-3.5
                      rounded-full
                      bg-white/10 backdrop-blur
                      border border-white/25
                      text-white text-sm font-medium
                      hover:bg-white/20
                      transition
                    "
                  >
                    Our Programs
                  </button>
                </Link>

                <Link to="/contact">
                  <button
                    className="
                      w-full sm:w-auto
                      px-7 py-3.5
                      rounded-full
                      bg-white
                      text-sky-900 text-sm font-semibold
                      hover:bg-sky-100
                      transition
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
    </>
  );
};

export default Hero;
