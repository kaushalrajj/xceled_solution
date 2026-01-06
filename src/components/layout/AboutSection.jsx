import { Link } from "react-router-dom";
import aboutImg from "../../assets/images/hero/about.webp";

const AboutSection = () => {
  return (
    <section className="w-full mt-15 md:mt-36 pb-24 md:pb-32 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* ================= TEXT ================= */}
          <div className="space-y-6 flex flex-col justify-center relative z-20 max-w-xl">

            {/* SECTION MARKER */}
            <div className="flex items-center gap-4">
              <span className="block w-10 h-[3px] bg-sky-500 rounded-full" />
              <p
                className="
                  uppercase tracking-[0.32em]
                  text-xs sm:text-sm
                  font-bold text-sky-600
                "
              >
                Who We Are
              </p>
            </div>

            <h2
              className="
                font-bold tracking-tight text-slate-800 leading-tight
                text-[clamp(1.95rem,3.6vw,2.7rem)]
              "
            >
              Building Skills That Translate Into Real Opportunity
            </h2>

            <p
              className="
                text-slate-600
                text-[0.95rem] sm:text-[1rem]
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
                text-[0.9rem] sm:text-[0.95rem]
                leading-[1.75]
              "
            >
              Our focus remains clear — practical learning, measurable outcomes,
              and alignment with real industry and institutional requirements.
              Every initiative is designed to create long-term value, not short-term
              credentials.
            </p>

            <div
              className="
                text-slate-700 text-[0.85rem]
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
                inline-flex items-center justify-center gap-3
                mt-6 w-full sm:w-fit
                px-8 py-3.5
                rounded-full
                border border-sky-400/60
                text-sky-600 font-medium
                bg-sky-50/80 backdrop-blur-sm
                shadow-md
                hover:bg-sky-100 hover:border-sky-500 hover:shadow-lg
                active:scale-[0.97]
                transition-all duration-300 ease-out
              "
            >
              Learn More About Our Approach
              <span className="text-lg transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>

          </div>

          {/* ================= IMAGE ================= */}
          <div className="relative z-0 pointer-events-none lg:pointer-events-auto">
            <div
              className="
                relative max-h-[26rem]
                overflow-hidden rounded-3xl
                shadow-sm
              "
            >
              <img
                src={aboutImg}
                alt="Xceled Solutions skill development session"
                className="
                  w-full h-full object-cover
                  transition-transform duration-700 ease-out
                  hover:scale-[1.04]
                "
              />
            </div>

            {/* Soft accent */}
            <div
              className="
                absolute -bottom-10 -left-10
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
