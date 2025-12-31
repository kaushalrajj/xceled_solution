import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
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
    <section className="w-full mt-15 md:mt-36 pb-24 md:pb-32 relative z-10">
      <div
        ref={sectionRef}
        className="
          max-w-7xl mx-auto px-6
          opacity-0 translate-y-10
          transition-all duration-1000 ease-out
        "
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

          {/* ================= TEXT CONTENT ================= */}
          <div className="space-y-5 flex flex-col justify-center relative z-20">

            <p className="uppercase tracking-[0.3em] text-xs text-sky-500 font-medium">
              Who We Are
            </p>

            <h2 className="
              text-[28px] sm:text-[32px] md:text-[36px] lg:text-[42px]
              font-semibold text-slate-800
              leading-tight
            ">
              Building Skills That Lead to Real Opportunity
            </h2>

            <p className="text-slate-600 text-[15px] sm:text-[16px] leading-[1.7] max-w-xl">
              Xceled Solutions is a PMEGP-supported, women-led initiative focused on
              practical skill development and career-oriented education. We work with
              learners and institutions to deliver structured programs that build
              confidence, employability, and real-world capability.
            </p>

            <p className="text-slate-600 text-[14px] sm:text-[15px] leading-[1.7] max-w-xl">
              Our approach emphasizes hands-on learning, clear outcomes, and alignment
              with real industry and institutional needs.
            </p>

            <div className="text-slate-700 text-sm flex flex-wrap gap-x-6 gap-y-2 pt-1">
              <span>• PMEGP Supported</span>
              <span>• MSME Registered</span>
              <span>• Outcome-Driven Training</span>
            </div>

            {/* ================= CTA (ABSOLUTE PRIORITY) ================= */}
            <Link
              to="/about"
              className="
                relative
                z-[999]
                pointer-events-auto
                inline-flex items-center justify-center gap-2
                mt-6
                w-full sm:w-fit
                px-7 py-3
                rounded-full
                border border-sky-400/60
                text-sky-600
                bg-sky-50/80
                backdrop-blur-sm
                shadow-md
                hover:bg-sky-100/90
                hover:border-sky-500
                hover:shadow-lg
                active:scale-95
                transition-all duration-300 ease-out
              "
            >
              Learn More About Xceled
              <span className="text-lg">→</span>
            </Link>

          </div>

          {/* ================= IMAGE ================= */}
          <div className="relative z-0 pointer-events-none lg:pointer-events-auto">
            <div className="relative max-h-[420px] overflow-hidden rounded-3xl shadow-sm">
              <img
                src={aboutImg}
                alt="Xceled Solutions training session"
                className="
                  w-full h-full object-cover
                  animate-imageDrift
                  transition-transform duration-700 ease-out
                  hover:scale-105
                "
              />
            </div>

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
