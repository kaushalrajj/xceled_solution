import { Link } from "react-router-dom";
import {
  AcademicCapIcon,
  UserGroupIcon,
  BriefcaseIcon,
  LightBulbIcon,
} from "@heroicons/react/24/outline";

const services = [
  {
    title: "Skill-Based Learning",
    desc: "Outcome-oriented programs focused on practical skills that build confidence, competence, and real-world readiness.",
    icon: AcademicCapIcon,
  },
  {
    title: "Institutional Education",
    desc: "Collaborative initiatives with schools and institutions to deliver structured, industry-aligned learning experiences.",
    icon: UserGroupIcon,
  },
  {
    title: "Career Clarity & Guidance",
    desc: "Structured assessment, mentorship, and guidance enabling informed academic and career decisions.",
    icon: BriefcaseIcon,
  },
  {
    title: "Innovation & Community Programs",
    desc: "Workshops and outreach initiatives that encourage innovation, creativity, and applied learning.",
    icon: LightBulbIcon,
  },
];

const ServicesSection = () => {
  return (
    <section
      className="
        w-full py-24 md:py-28
        bg-gradient-to-b from-sky-50 via-white to-sky-50
      "
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-16">

        {/* ================= HEADING ================= */}
        <div className="max-w-2xl mb-18 md:mb-20 space-y-5">

          <div className="flex items-center gap-4">
            <span className="block w-9 h-[2.5px] bg-sky-500 rounded-full" />
            <p className="uppercase tracking-[0.34em] text-[0.7rem] font-semibold text-sky-600">
              What We Enable
            </p>
          </div>

          <h2
            className="
              font-semibold tracking-tight
              text-slate-900
              text-[clamp(1.9rem,3.4vw,2.6rem)]
              leading-[1.15]
            "
          >
            Focus Areas Designed for Measurable Outcomes
          </h2>

          <p
            className="
              text-slate-600
              leading-[1.7]
              text-[0.95rem]
            "
          >
            Our services focus on clearly defined capability areas where
            structured learning, mentorship, and innovation translate into
            measurable academic and career impact.
          </p>
        </div>

        {/* ================= SERVICES GRID ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-14">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="
                  group relative
                  transition-all duration-400 ease-[cubic-bezier(.16,1,.3,1)]
                  hover:-translate-y-1
                "
              >
                {/* underline accent */}
                <div
                  className="
                    absolute inset-x-0 -bottom-3
                    h-[2px]
                    bg-gradient-to-r from-sky-400 to-sky-500
                    scale-x-0 origin-left
                    transition-transform duration-500
                    group-hover:scale-x-100
                  "
                />

                <Icon className="h-9 w-9 text-sky-500 mb-4" />

                <h3 className="text-[0.95rem] font-semibold text-slate-800 mb-2">
                  {service.title}
                </h3>

                <p className="text-slate-600 text-[0.88rem] leading-[1.65]">
                  {service.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* ================= CTA ================= */}
        <div className="mt-18 md:mt-20 text-center">
          <Link
            to="/services"
            className="
              inline-flex items-center gap-2.5
              px-8 py-3
              rounded-full
              border border-sky-400/60
              text-sky-700 font-medium text-sm
              bg-white
              shadow-sm
              hover:bg-sky-50 hover:border-sky-500
              active:scale-[0.98]
              transition-all duration-300 ease-out
            "
          >
            Explore Our Programs
            <span className="text-base">→</span>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
