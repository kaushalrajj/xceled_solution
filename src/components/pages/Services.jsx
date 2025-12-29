import {
  Laptop,
  School,
  Users,
  Briefcase,
  GraduationCap,
  ClipboardList,
  Award,
  Lightbulb,
  Hammer,
  Globe,
} from "lucide-react";

const services = [
  {
    title: "Online Skill Programs",
    description:
      "Structured online programs focused on practical skills, guided learning, and career readiness.",
    icon: Laptop,
    type: "Online",
  },
  {
    title: "Offline / On-Campus Training",
    description:
      "Instructor-led training programs delivered at institutions, schools, and partner campuses.",
    icon: School,
    type: "Offline",
  },
  {
    title: "Institutional Programs",
    description:
      "Long-term collaborations with schools and institutions for structured academic and vocational learning.",
    icon: Users,
    type: "Institutional",
  },
  {
    title: "Career Guidance & Mentorship",
    description:
      "Aptitude assessment, counseling, and mentorship to help learners make informed career decisions.",
    icon: Briefcase,
    type: "Guidance",
  },
  {
    title: "Internship & Placement Support",
    description:
      "Industry exposure, internship assistance, and employability-focused career support.",
    icon: GraduationCap,
    type: "Career",
  },
  {
    title: "Aptitude & Soft Skills Training",
    description:
      "Programs focused on communication, reasoning, confidence building, and workplace readiness.",
    icon: ClipboardList,
    type: "Training",
  },
  {
    title: "Certification Programs",
    description:
      "Skill certification programs aligned with industry requirements and institutional standards.",
    icon: Award,
    type: "Certification",
  },
  {
    title: "Workshops & Bootcamps",
    description:
      "Short-term intensive workshops and bootcamps focused on practical learning and innovation.",
    icon: Lightbulb,
    type: "Workshop",
  },
  {
    title: "Project-Based Learning",
    description:
      "Hands-on project work designed to bridge the gap between learning and real-world application.",
    icon: Hammer,
    type: "Projects",
  },
  {
    title: "Community & Outreach Programs",
    description:
      "Educational outreach initiatives supporting community development and inclusive learning.",
    icon: Globe,
    type: "Outreach",
  },
];

const ServicesCards = () => {
  return (
    <section className="w-full bg-sky-50 py-32">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="max-w-3xl mb-20">
          <p className="uppercase tracking-[0.35em] text-sky-600 text-xs mb-4">
            Our Services
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold text-slate-900 mb-6">
            Programs Designed for Real-World Impact
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            We offer a range of structured programs across online, offline,
            and institutional formats, focused on skills, employability,
            and long-term growth.
          </p>
        </div>

        {/* GRID */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="
                  group relative
                  bg-white rounded-3xl p-8
                  border border-slate-100
                  shadow-sm
                  transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
                  hover:-translate-y-2 hover:scale-[1.02]
                  hover:shadow-xl
                "
              >
                {/* soft glow */}
                <div
                  className="
                    absolute inset-0 rounded-3xl
                    ring-1 ring-transparent
                    group-hover:ring-sky-200
                    transition-all duration-500
                  "
                />

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className="
                        p-3 rounded-xl bg-sky-100
                        transition-transform duration-500
                        group-hover:scale-110
                      "
                    >
                      <Icon className="w-7 h-7 text-sky-600" />
                    </div>

                    <span className="text-xs font-medium uppercase tracking-wide text-sky-700 bg-sky-50 px-3 py-1 rounded-full">
                      {service.type}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-slate-900 mb-4">
                    {service.title}
                  </h3>

                  <p className="text-slate-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ServicesCards;
