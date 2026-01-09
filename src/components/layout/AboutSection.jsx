import { Link } from "react-router-dom";
import aboutImg from "../../assets/images/hero/about.webp";

const AboutSection = () => {
  return (
    <section
      className="
        w-full
        mt-24 sm:mt-32 md:mt-40
        pb-24 sm:pb-28 md:pb-36
        relative z-10
      "
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* ================= TEXT ================= */}
          <div className="space-y-8 flex flex-col justify-center relative z-20 max-w-xl">

            {/* SECTION MARKER */}
            <div className="flex items-center gap-4">
              <span className="block w-10 h-[3px] bg-sky-500 rounded-full" />
              <p
                className="
                  uppercase tracking-[0.38em]
                  text-[0.7rem] sm:text-[0.75rem]
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
                leading-[1.18]
                text-[clamp(2.1rem,4.2vw,2.9rem)]
              "
            >
              Building Skills That Translate Into Real Opportunity
            </h2>

            {/* BODY */}
            <p
              className="
                text-slate-600
                text-[1.02rem]
                leading-[1.8]
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
                text-[0.98rem]
                leading-[1.75]
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
                text-[0.9rem]
                flex flex-wrap gap-x-8 gap-y-2 pt-3
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
                inline-flex items-center justify-center gap-3
                mt-8 w-full sm:w-fit
                px-8 py-4
                rounded-full
                border border-sky-400/50
                text-sky-700 font-medium text-[0.95rem]
                bg-white
                shadow-sm
                hover:bg-sky-50 hover:border-sky-500
                active:scale-[0.98]
                transition-all duration-300 ease-out
              "
            >
              Learn More About Our Approach
              <span className="text-lg">→</span>
            </Link>

          </div>

          {/* ================= IMAGE ================= */}
          <div className="relative z-0">
            <div
              className="
                relative max-h-[24rem] sm:max-h-[26rem]
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
                w-32 h-32 sm:w-36 sm:h-36
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
