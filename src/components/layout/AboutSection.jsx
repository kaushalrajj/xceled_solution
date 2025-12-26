import { useEffect, useRef } from "react";
import aboutImg from "../../assets/images/hero/about.webp";

const AboutSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("opacity-100", "translate-y-0");
        }
      },
      { threshold: 0.35 }
    );

    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-full mt-40 pb-36">
      <div
        ref={sectionRef}
        className="
          max-w-7xl mx-auto px-6
          opacity-0 translate-y-10
          transition-all duration-1000 ease-out
        "
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* TEXT CONTENT */}
          <div className="space-y-7 flex flex-col justify-center">
            <p className="uppercase tracking-widest text-sm text-sky-500 font-medium">
              About Us
            </p>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold
              text-slate-800 leading-tight">
              Building Skills, Confidence, and Opportunity
            </h2>

            <p className="text-slate-600 text-lg leading-relaxed">
              Ekwik Solution is a PMEGP-supported, women-led enterprise dedicated
              to education, skill development, and innovation. We work closely
              with learners and institutions to deliver practical training,
              career-oriented programs, and structured guidance that build
              real-world capabilities.
            </p>

            <p className="text-slate-600 leading-relaxed">
              As an MSME-registered and ISO-certified organization, our focus
              remains on empowering individuals with confidence, self-reliance,
              and skills that contribute to long-term personal and national
              growth.
            </p>

            {/* CTA */}
            <a
              href="/about"
              className="
                inline-flex items-center gap-2
                mt-8 w-fit
                px-8 py-3.5
                rounded-full
                border border-sky-400/60
                text-sky-600
                bg-sky-50/60
                backdrop-blur-sm
                shadow-sm
                hover:bg-sky-100/70
                hover:border-sky-500
                hover:shadow-md
                transition-all duration-300 ease-out
              "
            >
              Know More
              <span className="text-lg">→</span>
            </a>
          </div>

          {/* IMAGE */}
          <div className="relative">
            <div className="relative max-h-[420px] overflow-hidden rounded-3xl shadow-sm">
              <img
                src={aboutImg}
                alt="About Ekwik Solution"
                className="
                  w-full h-full object-cover
                  animate-imageDrift
                  transition-transform duration-700 ease-out
                  hover:scale-105
                "
              />
            </div>

            {/* Soft decorative accent */}
            <div
              className="
                absolute -bottom-12 -left-12
                w-40 h-40
                bg-sky-200/40
                rounded-full blur-3xl
                -z-10
              "
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
