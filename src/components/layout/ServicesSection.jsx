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
    <section className="w-full mt-30 pb-36">
      <div className="max-w-7xl mx-auto px-6">

        {/* Soft Section Container */}
        <div
          className="
            relative
            bg-sky-50/50 backdrop-blur-sm
            rounded-3xl px-8 md:px-14 py-20
            border border-sky-100
          "
        >
          {/* Heading */}
          <div className="max-w-2xl mb-16">
            <p className="uppercase tracking-[0.3em] text-xs text-sky-500 font-medium">
              What We Enable
            </p>

            <h2 className="text-[30px] md:text-[36px] lg:text-[42px] font-semibold text-slate-800 mt-3 leading-tight">
              Focus Areas That Create Impact
            </h2>

            <p className="text-slate-600 mt-4 leading-relaxed text-[15.5px]">
              Our work spans a few focused areas where structured learning, guidance,
              and innovation create long-term value for learners and institutions.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <div
                  key={index}
                  className="
                    group relative
                    p-8 rounded-2xl
                    bg-white/70 backdrop-blur-sm
                    border border-slate-100
                    shadow-sm
                    transition-all duration-500 ease-out
                    hover:-translate-y-1.5
                    hover:shadow-md
                  "
                >
                  {/* soft hover glow */}
                  <div
                    className="
                      absolute inset-0 rounded-2xl
                      bg-gradient-to-br from-sky-100/40 via-transparent to-transparent
                      opacity-0 group-hover:opacity-100
                      transition-opacity duration-500
                      pointer-events-none
                    "
                  />

                  <Icon
                    className="
                      h-10 w-10 text-sky-500 mb-6 relative z-10
                      transition-transform duration-700 ease-out
                      group-hover:-translate-y-0.5
                    "
                  />

                  <h3 className="text-[17px] font-semibold text-slate-800 mb-2 relative z-10">
                    {service.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed relative z-10">
                    {service.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <Link
              to="/services"
              className="
                inline-flex items-center gap-3
                px-8 py-3 rounded-full
                border border-sky-400/60
                text-sky-600 font-medium
                bg-sky-50/60
                hover:bg-sky-100/70
                hover:border-sky-500
                shadow-sm hover:shadow-md
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
