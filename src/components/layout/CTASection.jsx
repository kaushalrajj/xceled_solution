import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section
      className="
        relative w-full
        mt-20 sm:mt-24 md:mt-15
        pb-28 sm:pb-32 md:pb-40
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
            px-6 sm:px-10 md:px-20
            py-16 sm:py-20 md:py-24
            shadow-md
          "
        >
          {/* ================= DECORATIVE BACKDROPS ================= */}
          <div className="absolute -top-20 -right-20 w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 bg-sky-300/40 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-sky-200/50 rounded-full blur-3xl pointer-events-none" />

          {/* ================= CONTENT ================= */}
          <div className="relative z-10 max-w-3xl">

            {/* MARKER */}
            <div className="flex items-center gap-4 mb-5">
              <span className="block w-10 h-[3px] bg-sky-500 rounded-full" />
              <p
                className="
                  uppercase tracking-[0.36em]
                  text-[0.7rem]
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
                text-[clamp(1.85rem,4.5vw,2.85rem)]
                leading-[1.2]
              "
            >
              Let’s Take the Next Step Together
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                text-slate-700
                mt-5 sm:mt-6
                text-[0.95rem] sm:text-[1rem]
                leading-[1.75]
                max-w-2xl
              "
            >
              Whether you are a student, an institution, or a learner seeking
              structured guidance, we support meaningful skill development
              with clarity, purpose, and long-term impact.
            </p>

            {/* ================= CTAs ================= */}
            <div className="mt-10 sm:mt-12 md:mt-14 flex flex-wrap gap-4 sm:gap-6">

              {/* PRIMARY CTA */}
              <Link
                to="/services"
                className="
                  group inline-flex items-center gap-3
                  px-8 sm:px-10
                  py-3.5 sm:py-4
                  rounded-full
                  bg-sky-700 text-white
                  font-semibold
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
                  px-8 sm:px-10
                  py-3.5 sm:py-4
                  rounded-full
                  border border-sky-400
                  text-sky-700
                  font-semibold
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
