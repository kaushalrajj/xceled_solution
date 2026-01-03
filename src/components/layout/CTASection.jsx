import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="relative w-full mt-15 pb-36">
      <div className="max-w-7xl mx-auto px-6">

        <div
          className="
            relative overflow-hidden
            bg-sky-50/80 backdrop-blur-sm
            border border-sky-100
            rounded-3xl
            px-6 sm:px-10 md:px-16
            py-20
          "
        >
          {/* ================= DECORATIVE BACKDROPS ================= */}
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-sky-200/40 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-28 -left-28 w-80 h-80 bg-sky-100/60 rounded-full blur-3xl pointer-events-none" />

          {/* ================= CONTENT ================= */}
          <div className="relative z-10 max-w-3xl">

            <div className="flex items-center gap-4 mb-6">
              <span className="block w-10 h-[3px] bg-sky-500 rounded-full" />
              <p className="
                uppercase tracking-[0.32em]
                text-xs sm:text-sm
                font-bold text-sky-600
              ">
                Take the Next Step
              </p>
            </div>

            <h2 className="
              font-bold tracking-tight text-slate-800
              text-[clamp(2rem,4vw,2.75rem)]
              leading-tight
            ">
              Let’s Take the Next Step Together
            </h2>

            <p className="
              text-slate-600 mt-6
              text-[0.95rem] sm:text-[1rem]
              leading-relaxed
              max-w-2xl
            ">
              Whether you’re a student, institution, or learner seeking guidance,
              we’re here to support skill development with clarity and purpose.
            </p>

            {/* ================= CTAs ================= */}
            <div className="mt-12 flex flex-wrap gap-5">

              {/* PRIMARY CTA */}
              <Link
                to="/services"
                className="
                  group inline-flex items-center gap-3
                  px-9 py-3.5
                  rounded-full
                  bg-sky-600 text-white font-medium
                  shadow-lg
                  transition-all duration-300 ease-out
                  hover:bg-sky-700
                  hover:-translate-y-0.5 hover:shadow-xl
                  active:scale-[0.97]
                "
              >
                Explore Programs
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>

              {/* SECONDARY CTA */}
              <Link
                to="/contact"
                className="
                  group inline-flex items-center gap-3
                  px-9 py-3.5
                  rounded-full
                  border border-sky-400
                  text-sky-600 font-medium
                  bg-white/70
                  shadow-sm
                  transition-all duration-300 ease-out
                  hover:bg-sky-100
                  hover:-translate-y-0.5 hover:shadow-md
                  active:scale-[0.97]
                "
              >
                Contact Us
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default CTASection;
