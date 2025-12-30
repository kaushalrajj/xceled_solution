import { Link } from "react-router-dom";
import {
  Laptop,
  School,
  GraduationCap,
  Users,
  ClipboardList,
  Package,
  FlaskConical,
} from "lucide-react";

/* ================= IMAGE IMPORTS ================= */

import online from "../../assets/images/services/online skill image.webp";
import campus from "../../assets/images/services/on campus training.webp";
import training from "../../assets/images/services/Career-Mentoring-Career-Counseling-Blog-Post.webp";
import manpower from "../../assets/images/services/pro.webp";
import stationery from "../../assets/images/services/certificate.webp";
import kits from "../../assets/images/services/aptitude.webp";
import labkits from "../../assets/images/services/insti.webp";

/* ================= SERVICES DATA (EKWIK ONLY) ================= */

const services = [
  {
    title: "Online Exams",
    description:
      "Secure and scalable online examination solutions with monitoring, assessment, and result processing.",
    icon: Laptop,
    image: online,
    path: "/services/online-exams",
  },
  {
    title: "Offline Proctor-Based Exams",
    description:
      "On-site, supervised examinations conducted with strict compliance and institutional standards.",
    icon: School,
    image: campus,
    path: "/services/offline-exams",
  },
  {
    title: "Educational Training",
    description:
      "Structured academic and skill-based training programs for students, institutions, and organizations.",
    icon: GraduationCap,
    image: training,
    path: "/services/educational-training",
  },
  {
    title: "Manpower Provider",
    description:
      "Qualified manpower solutions for educational institutions, examinations, and operational needs.",
    icon: Users,
    image: manpower,
    path: "/services/manpower-provider",
  },
  {
    title: "Stationery & Uniforms",
    description:
      "Supply of standardized stationery items and uniforms tailored for educational institutions.",
    icon: ClipboardList,
    image: stationery,
    path: "/services/stationery-uniforms",
  },
  {
    title: "Educational Kits",
    description:
      "Ready-to-use educational kits designed to support structured learning and curriculum needs.",
    icon: Package,
    image: kits,
    path: "/services/educational-kits",
  },
  {
    title: "School Lab Kits",
    description:
      "Laboratory kits for schools supporting practical learning in science and technical subjects.",
    icon: FlaskConical,
    image: labkits,
    path: "/services/school-lab-kits",
  },
];

/* ================= COMPONENT ================= */

const Services = () => {
  return (
    <section className="w-full bg-sky-50 py-24 sm:py-28 md:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">

        {/* HEADER */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <p className="uppercase tracking-[0.35em] text-sky-600 text-xs font-bold mb-4">
            Services
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-900 mb-6">
            Solutions Delivered with Precision & Trust
          </h1>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Our services are designed to support educational institutions,
            examinations, training, and operational requirements with reliability
            and professionalism.
          </p>
        </div>

        {/* GRID */}
        <div className="grid gap-8 sm:gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isLast = index === services.length - 1;

            return (
              <Link
                key={index}
                to={service.path}
                className={`
                  group block bg-white rounded-3xl overflow-hidden
                  border border-slate-100 shadow-sm
                  transition-all duration-500
                  hover:-translate-y-2 hover:shadow-xl
                  ${isLast ? "lg:col-start-2" : ""}
                `}
              >
                {/* IMAGE */}
                <div className="relative h-44 sm:h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    className="
                      w-full h-full object-cover
                      transition-transform duration-700
                      group-hover:scale-110
                    "
                  />
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition" />
                </div>

                {/* CONTENT */}
                <div className="p-6 sm:p-8">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="p-3 rounded-xl bg-sky-100">
                      <Icon className="w-6 h-6 text-sky-600" />
                    </div>
                  </div>

                  <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-3">
                    {service.title}
                  </h3>

                  <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                    {service.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Services;
