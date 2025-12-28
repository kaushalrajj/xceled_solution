import { useEffect, useState } from "react";

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
    <section className="w-full mt-32">
      <div className="relative max-w-7xl mx-auto px-6">

        {/* HERO */}
        <div
          className="
            relative w-full
            md:aspect-[21/9]
            min-h-[520px] sm:min-h-[460px] md:min-h-[480px]
            rounded-2xl overflow-hidden shadow-sm
          "
        >
          {/* Background */}
          <div
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat
              transition-all duration-[2600ms] ease-out
              ${visible ? "opacity-100 scale-100" : "opacity-0 scale-[1.02]"}
            `}
            style={{ backgroundImage: `url(${slides[current].image})` }}
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-sky-900/70 via-sky-800/55 to-transparent" />

          {/* CONTENT */}
          <div className="relative z-10 h-full flex items-start md:items-center pt-10 sm:pt-14 md:pt-0">
            <div
              className="
                w-[98%] sm:w-[94%] md:w-[65%] lg:w-[55%] xl:w-[50%]
                max-w-[720px]
                px-5 sm:px-6 md:px-8
                space-y-[clamp(14px,3vw,22px)]
              "
            >
              {/* Brand */}
              <p
                className="
                  uppercase tracking-[0.32em]
                  text-sky-100/70
                  text-[clamp(9px,calc(0.6vw+0.4vh),11px)]
                "
              >
                XCELED SOLUTIONS
              </p>

              {/* Heading */}
              <h1
                className={`font-semibold tracking-tight leading-[1.15]
                  text-white transition-opacity duration-700
                  text-[clamp(24px,calc(3.8vw+1.4vh),48px)]
                  ${visible ? "opacity-100" : "opacity-0"}
                `}
              >
                {slides[current].heading}
              </h1>

              {/* Main text */}
              <p
                className={`leading-[1.55]
                  text-sky-50 transition-opacity duration-700
                  text-[clamp(14px,calc(1.9vw+0.9vh),16px)]
                  ${visible ? "opacity-90" : "opacity-0"}
                `}
              >
                {slides[current].text}
              </p>

              {/* Subtext */}
              <p
                className={`leading-[1.6]
                  text-sky-100 transition-opacity duration-700
                  text-[clamp(13px,calc(1.6vw+0.8vh),15px)]
                  ${visible ? "opacity-85" : "opacity-0"}
                `}
              >
                {slides[current].subtext}
              </p>

              {/* CTA */}
              <div
                className={`flex flex-col sm:flex-row gap-4 pt-4 sm:pt-6 md:pt-[clamp(14px,3vw,26px)]
                  transition-opacity duration-700
                  ${visible ? "opacity-100" : "opacity-0"}
                `}
              >
                <button
                  className="
                    px-6 py-3 rounded-full
                    text-white font-medium
                    text-[clamp(13px,calc(1vw+0.4vh),14px)]
                    bg-white/15 backdrop-blur-md
                    border border-white/30
                    transition-all duration-300
                    hover:bg-white/25 hover:border-white/50
                  "
                >
                  Our Services
                </button>

                <button
                  className="
                    px-6 py-3 rounded-full
                    text-sky-900 font-medium
                    text-[clamp(13px,calc(1vw+0.4vh),14px)]
                    bg-white
                    transition-all duration-300
                    hover:bg-sky-100
                  "
                >
                  Contact Us
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
