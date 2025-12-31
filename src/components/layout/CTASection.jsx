import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="w-full mt-15 pb-32">
      <div className="max-w-7xl mx-auto px-6">

        <div
          className="
            relative
            bg-sky-50/70 backdrop-blur-sm
            border border-sky-100
            rounded-3xl
            px-10 md:px-16 py-16
            overflow-hidden
          "
        >
          {/* subtle background accents */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-sky-200/40 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-sky-100/50 rounded-full blur-3xl" />

          {/* Content */}
          <div className="relative z-10 max-w-3xl">
            <h2 className="text-[30px] md:text-[36px] lg:text-[42px] font-semibold text-slate-800 leading-tight">
              Let’s Take the Next Step Together
            </h2>

            <p className="text-slate-600 mt-5 text-[16.5px] leading-relaxed">
              Whether you’re a student, institution, or learner seeking guidance,
              we’re here to support skill development with clarity and purpose.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-wrap gap-5">

              {/* Primary CTA */}
              <Link
                to="/services"
                className="
                  group inline-flex items-center gap-2
                  px-9 py-3.5 rounded-full
                  bg-sky-600 text-white font-medium
                  shadow-md
                  transition-all duration-300 ease-out
                  hover:bg-sky-700
                  hover:-translate-y-1 hover:shadow-lg
                  active:translate-y-0 active:scale-[0.98]
                "
              >
                Explore Programs
                <span
                  className="
                    transition-transform duration-300
                    group-hover:translate-x-1
                  "
                >
                  →
                </span>
              </Link>

              {/* Secondary CTA */}
              <Link
                to="/contact"
                className="
                  group inline-flex items-center gap-2
                  px-9 py-3.5 rounded-full
                  border border-sky-400
                  text-sky-600 font-medium
                  bg-white/60
                  shadow-sm
                  transition-all duration-300 ease-out
                  hover:bg-sky-100
                  hover:-translate-y-1 hover:shadow-md
                  active:translate-y-0 active:scale-[0.98]
                "
              >
                Contact Us
                <span
                  className="
                    transition-transform duration-300
                    group-hover:translate-x-1
                  "
                >
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
