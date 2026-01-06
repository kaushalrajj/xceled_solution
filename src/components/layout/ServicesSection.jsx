import { Link } from "react-router-dom";
import {
  AcademicCapIcon,
  UserGroupIcon,
  BriefcaseIcon,
  LightBulbIcon,
} from "@heroicons/react/24/outline";

/* ================= SERVICES DATA ================= */
const services = [
  {
    title: "Skill-Based Learning",
    desc: "Outcome-oriented programs focused on practical skills that improve confidence, competence, and real-world readiness.",
    icon: AcademicCapIcon,
  },
  {
    title: "Institutional Education",
    desc: "Collaborative initiatives with schools and institutions to deliver structured, industry-aligned learning experiences.",
    icon: UserGroupIcon,
  },
  {
    title: "Career Clarity & Guidance",
    desc: "Structured assessment, mentorship, and guidance that help learners make informed academic and career decisions.",
    icon: BriefcaseIcon,
  },
  {
    title: "Innovation & Community Programs",
    desc: "Workshops and outreach initiatives that foster innovation, creativity, and applied learning beyond traditional classrooms.",
    icon: LightBulbIcon,
  },
];

const ServicesSection = () => {
  return (
    /* ===== FULL-WIDTH BLUE BACKGROUND ===== */
    <section className="w-full bg-sky-50/60 py-24">

      {/* OUTER PADDING (FULL WIDTH) */}
      <div className="w-full px-6 lg:px-16">

        {/* CONTENT WIDTH CONTROL */}
        <div className="max-w-7xl mx-auto">

          {/* ================= HEADING ================= */}
          <div className="max-w-2xl mb-16 space-y-5">

            <div className="flex items-center gap-4">
              <span className="block w-10 h-[3px] bg-sky-500 rounded-full" />
              <p className="uppercase tracking-[0.32em] text-xs sm:text-sm font-semibold text-sky-600">
                What We Enable
              </p>
            </div>

            <h2 className="font-bold tracking-tight text-slate-900 text-[clamp(2rem,3.6vw,2.75rem)] leading-tight">
              Focus Areas Designed for Real Outcomes
            </h2>

            <p className="text-slate-600 leading-[1.75] text-[0.95rem] sm:text-[1rem]">
              Our services focus on clearly defined capabilities where structured
              learning, mentorship, and innovation translate into measurable
              academic and career impact.
            </p>
          </div>

          {/* ================= SERVICES GRID ================= */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <div
                  key={index}
                  className="
                    group relative
                    transition-all duration-500 ease-[cubic-bezier(.16,1,.3,1)]
                    hover:-translate-y-1
                  "
                >
                  {/* hover underline */}
                  <div
                    className="
                      absolute inset-x-0 -bottom-4
                      h-[2px]
                      bg-gradient-to-r from-sky-400 to-sky-500
                      scale-x-0 origin-left
                      transition-transform duration-500
                      group-hover:scale-x-100
                    "
                  />

                  <Icon className="h-10 w-10 text-sky-500 mb-5" />

                  <h3 className="text-[16.5px] font-semibold text-slate-800 mb-2">
                    {service.title}
                  </h3>

                  <p className="text-slate-600 text-[0.9rem] leading-[1.7]">
                    {service.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* ================= CTA ================= */}
          <div className="mt-16 text-center">
            <Link
              to="/services"
              className="
                inline-flex items-center gap-3
                px-9 py-3.5
                rounded-full
                border border-sky-400/70
                text-sky-600 font-medium
                bg-white
                hover:bg-sky-100
                hover:border-sky-500
                shadow-sm hover:shadow-md
                active:scale-[0.97]
                transition-all duration-300 ease-out
              "
            >
              Explore Our Programs
              <span className="text-lg">→</span>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
