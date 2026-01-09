import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section
      className="
        relative w-full
        mt-24 sm:mt-28 md:mt-32
        pb-32 sm:pb-36 md:pb-44
      "
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">

        <div
          className="
            relative overflow-hidden
            bg-gradient-to-br from-sky-50 via-white to-sky-100/60
            border border-sky-200
            rounded-3xl
            px-7 sm:px-12 md:px-24
            py-18 sm:py-22 md:py-26
            shadow-md
          "
        >
          {/* ================= DECORATIVE BACKDROPS ================= */}
          <div className="absolute -top-20 -right-20 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-sky-300/40 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-28 -left-28 w-80 h-80 sm:w-96 sm:h-96 md:w-[28rem] md:h-[28rem] bg-sky-200/50 rounded-full blur-3xl pointer-events-none" />

          {/* ================= CONTENT ================= */}
          <div className="relative z-10 max-w-3xl">

            {/* MARKER */}
            <div className="flex items-center gap-4 mb-6">
              <span className="block w-11 h-[3px] bg-sky-500 rounded-full" />
              <p
                className="
                  uppercase tracking-[0.38em]
                  text-[0.75rem]
                  font-semibold
                  text-sky-700
                "
              >
                Take the Next Step
              </p>
            </div>

            {/* HEADING */}
            <h2
              className="
                font-bold tracking-tight
                text-slate-900
                text-[clamp(2.15rem,4.8vw,3.05rem)]
                leading-[1.18]
              "
            >
              Let’s Take the Next Step Together
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                text-slate-700
                mt-6 sm:mt-7
                text-[1.05rem] sm:text-[1.1rem]
                leading-[1.8]
                max-w-2xl
              "
            >
              Whether you are a student, an institution, or a learner seeking
              structured guidance, we support meaningful skill development
              with clarity, purpose, and long-term impact.
            </p>

            {/* ================= CTAs ================= */}
            <div className="mt-12 sm:mt-14 md:mt-16 flex flex-wrap gap-5 sm:gap-7">

              {/* PRIMARY CTA */}
              <Link
                to="/services"
                className="
                  group inline-flex items-center gap-3
                  px-9 sm:px-11
                  py-4 sm:py-4.5
                  rounded-full
                  bg-sky-700 text-white
                  font-semibold text-[1rem]
                  shadow-lg sm:shadow-xl
                  transition-all duration-300 ease-out
                  hover:bg-sky-800
                  hover:-translate-y-0.5 hover:shadow-2xl
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
                  px-9 sm:px-11
                  py-4 sm:py-4.5
                  rounded-full
                  border border-sky-400
                  text-sky-700
                  font-semibold text-[1rem]
                  bg-white
                  shadow-sm sm:shadow-md
                  transition-all duration-300 ease-out
                  hover:bg-sky-50
                  hover:-translate-y-0.5 hover:shadow-lg
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
