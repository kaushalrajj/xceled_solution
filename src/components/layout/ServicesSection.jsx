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
    desc: "Hands-on programs focused on practical skills that build confidence and real-world capability.",
    icon: AcademicCapIcon,
  },
  {
    title: "Institutional Education",
    desc: "Structured initiatives designed in collaboration with schools and academic institutions.",
    icon: UserGroupIcon,
  },
  {
    title: "Career Clarity & Guidance",
    desc: "Aptitude assessment, mentorship, and guidance to help learners make informed academic and career choices.",
    icon: BriefcaseIcon,
  },
  {
    title: "Innovation & Community Programs",
    desc: "Workshops and outreach initiatives that encourage innovation, creativity, and learning beyond classrooms.",
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
              <p className="
                uppercase tracking-[0.32em]
                text-xs sm:text-sm
                font-bold text-sky-600
              ">
                What We Enable
              </p>
            </div>

            <h2 className="
              font-bold tracking-tight text-slate-800
              text-[clamp(1.9rem,3.6vw,2.7rem)]
              leading-tight
            ">
              Focus Areas That Create Impact
            </h2>

            <p className="text-slate-600 leading-[1.75] text-[0.95rem] sm:text-[1rem]">
              Our work spans a few focused areas where structured learning, guidance,
              and innovation create long-term value for learners and institutions.
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
                    transition-all duration-500 ease-out
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
              Explore Programs
              <span className="text-lg">→</span>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
