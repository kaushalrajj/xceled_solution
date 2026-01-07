import { Link } from "react-router-dom";
import aboutImg from "../../assets/images/hero/about.webp";

const AboutSection = () => {
  return (
    <section
      className="
        w-full
        mt-20 sm:mt-28 md:mt-36
        pb-20 sm:pb-24 md:pb-32
        relative z-10
      "
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* ================= TEXT ================= */}
          <div className="space-y-7 flex flex-col justify-center relative z-20 max-w-xl">

            {/* SECTION MARKER */}
            <div className="flex items-center gap-4">
              <span className="block w-9 h-[2.5px] bg-sky-500 rounded-full" />
              <p
                className="
                  uppercase tracking-[0.36em]
                  text-[0.65rem] sm:text-[0.7rem]
                  font-semibold text-sky-600
                "
              >
                Who We Are
              </p>
            </div>

            {/* HEADING */}
            <h2
              className="
                font-semibold tracking-tight
                text-slate-800
                leading-[1.2]
                text-[clamp(1.9rem,4vw,2.6rem)]
              "
            >
              Building Skills That Translate Into Real Opportunity
            </h2>

            {/* BODY */}
            <p
              className="
                text-slate-600
                text-[0.95rem]
                leading-[1.75]
              "
            >
              Xceled Solutions is a PMEGP-supported, women-led initiative dedicated
              to structured skill development and career-aligned education. We work
              closely with learners, institutions, and communities to deliver
              programs that build professional confidence, employability, and
              practical competence.
            </p>

            <p
              className="
                text-slate-600
                text-[0.92rem]
                leading-[1.7]
              "
            >
              Our focus remains clear — practical learning, measurable outcomes,
              and alignment with real industry and institutional requirements.
              Every initiative is designed to create long-term value, not short-term
              credentials.
            </p>

            {/* HIGHLIGHTS */}
            <div
              className="
                text-slate-700
                text-[0.83rem]
                flex flex-wrap gap-x-6 gap-y-2 pt-2
              "
            >
              <span>• PMEGP Supported Initiative</span>
              <span>• MSME Registered Organization</span>
              <span>• Outcome-Oriented Skill Programs</span>
            </div>

            {/* CTA */}
            <Link
              to="/about"
              className="
                inline-flex items-center justify-center gap-2.5
                mt-7 w-full sm:w-fit
                px-7 py-3.5
                rounded-full
                border border-sky-400/50
                text-sky-700 font-medium text-sm
                bg-white
                shadow-sm
                hover:bg-sky-50 hover:border-sky-500
                active:scale-[0.98]
                transition-all duration-300 ease-out
              "
            >
              Learn More About Our Approach
              <span className="text-base">→</span>
            </Link>

          </div>

          {/* ================= IMAGE ================= */}
          <div className="relative z-0">
            <div
              className="
                relative max-h-[22rem] sm:max-h-[24rem]
                overflow-hidden rounded-3xl
                shadow-md
              "
            >
              <img
                src={aboutImg}
                alt="Xceled Solutions skill development session"
                className="
                  w-full h-full object-cover
                  transition-transform duration-700 ease-out
                  hover:scale-[1.03]
                "
              />
            </div>

            {/* SUBTLE ACCENT */}
            <div
              className="
                absolute -bottom-6 -left-6
                w-28 h-28 sm:w-32 sm:h-32
                bg-sky-200/30
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
