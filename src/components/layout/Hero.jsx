import { useEffect, useState } from "react";

import slide1 from "../../assets/images/hero/slider1.webp";
import slide2 from "../../assets/images/hero/slider2.webp";
import slide3 from "../../assets/images/hero/slider3.webp";
import slide4 from "../../assets/images/hero/slider4.webp";

const slides = [
  {
    image: slide1,
    heading: "Industry-Focused Skill Training for Tomorrow’s Leaders",
    text: "A PMEGP-backed, women-led initiative delivering practical skill development and career-ready education.",
    subtext:
      "We work with students, institutions, and communities to build confidence, capability, and employability.",
  },
  {
    image: slide2,
    heading: "Education With Purpose, Not Just Promises",
    text: "We believe education should create real outcomes — skills, clarity, and self-reliance.",
    subtext:
      "Our programs focus on vocational training, hands-on learning, and meaningful career pathways.",
  },
  {
    image: slide3,
    heading: "Skills That Translate Into Real-World Impact",
    text: "Practical training, mentorship, and guided learning designed to meet today’s industry needs.",
    subtext:
      "From schools to institutions, we align education with emerging technologies and opportunities.",
  },
  {
    image: slide4,
    heading: "Building Confident Individuals for a Self-Reliant India",
    text: "We empower learners to contribute, lead, and grow through structured skill-based programs.",
    subtext:
      "Supporting national skill missions with responsible education and focused mentorship.",
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

        {/* HERO CONTAINER – FIXED ASPECT RATIO */}
        <div className="
          relative
          aspect-[16/9] md:aspect-[21/9]
          min-h-[420px] sm:min-h-[480px]
          w-full
          rounded-2xl overflow-hidden shadow-sm
        ">

          {/* Background Image */}
          <div
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat
              transition-all duration-[2600ms] ease-out
              ${visible ? "opacity-100 scale-100" : "opacity-0 scale-[1.03]"}
            `}
            style={{ backgroundImage: `url(${slides[current].image})` }}
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-sky-900/70 via-sky-800/55 to-transparent" />

          {/* Content */}
          <div className="relative z-10 h-full flex items-center">
            <div className="max-w-2xl px-8 space-y-6 md:space-y-7">

              {/* Brand */}
              <p className="text-[11px] tracking-[0.32em] text-sky-100/70 uppercase">
                XCELED SOLUTIONS
              </p>

              {/* Heading */}
              <h1
                className={`text-[38px] md:text-[48px] lg:text-[56px]
                  font-semibold leading-[1.15] tracking-tight
                  text-white transition-opacity duration-700
                  ${visible ? "opacity-100" : "opacity-0"}
                `}
              >
                {slides[current].heading}
              </h1>

              {/* Main Description */}
              <p
                className={`text-[17px] md:text-[18px]
                  leading-[1.7] max-w-xl
                  text-sky-50 transition-opacity duration-700
                  ${visible ? "opacity-90" : "opacity-0"}
                `}
              >
                {slides[current].text}
              </p>

              {/* Supporting Description */}
              <p
                className={`text-[15px] md:text-[16px]
                  leading-[1.75] max-w-xl
                  text-sky-100 transition-opacity duration-700
                  ${visible ? "opacity-85" : "opacity-0"}
                `}
              >
                {slides[current].subtext}
              </p>

              {/* Trust */}
              <p className="text-[12.5px] tracking-wide text-sky-200/80">
                PMEGP Supported • MSME Registered • Women-Led Initiative
              </p>

              {/* Soft CTA */}
              <p className="text-[13.5px] text-sky-100/85 pt-1">
                Explore our training programs for students, institutions, and emerging professionals.
              </p>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
