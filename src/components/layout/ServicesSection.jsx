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
    <section className="w-full mt-15 pb-36">
      <div className="max-w-7xl mx-auto px-6">

        {/* Soft Section Container */}
        <div
          className="
            relative
            bg-sky-50/50 backdrop-blur-sm
            rounded-3xl
            px-6 sm:px-10 md:px-14
            py-20
            border border-sky-100
          "
        >
          {/* ================= HEADING ================= */}
          <div className="max-w-2xl mb-16 space-y-5">

            <div className="flex items-center gap-4">
              <span className="block w-10 h-[3px] bg-sky-500 rounded-full" />
              <p
                className="
                  uppercase tracking-[0.32em]
                  text-xs sm:text-sm
                  font-bold text-sky-600
                "
              >
                What We Enable
              </p>
            </div>

            <h2
              className="
                font-bold tracking-tight text-slate-800
                text-[clamp(1.95rem,3.6vw,2.7rem)]
                leading-tight
              "
            >
              Focus Areas Designed for Real Outcomes
            </h2>

            <p className="text-slate-600 leading-[1.75] text-[0.95rem] sm:text-[1rem]">
              Our services are built around a few focused capabilities where structured
              learning, mentorship, and innovation translate directly into measurable
              educational and career outcomes.
            </p>
          </div>

          {/* ================= SERVICES ================= */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <div
                  key={index}
                  className="
                    group relative
                    transition-all duration-500 ease-[cubic-bezier(.16,1,.3,1)]
                    hover:-translate-y-1.5
                  "
                >
                  {/* subtle hover accent */}
                  <div
                    className="
                      absolute inset-x-0 -bottom-4
                      h-[2px]
                      bg-sky-400
                      scale-x-0 origin-left
                      transition-transform duration-500
                      group-hover:scale-x-100
                    "
                  />

                  <Icon
                    className="
                      h-10 w-10 text-sky-500 mb-5
                      transition-transform duration-700 ease-out
                      group-hover:-translate-y-0.5
                    "
                  />

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
                border border-sky-400/60
                text-sky-600 font-medium
                bg-sky-50/60
                hover:bg-sky-100/70
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
