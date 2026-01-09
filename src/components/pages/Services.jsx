import { memo, useMemo } from "react";
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

/* ================= DATA ================= */
const SERVICES_DATA = [
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

/* ================= CARD ================= */
const ServiceCard = memo(({ service, isLast }) => {
  const Icon = service.icon;

  return (
    <Link
      to={service.path}
      aria-label={service.title}
      className={`group bg-white rounded-3xl overflow-hidden
        border border-slate-100
        shadow-[0_6px_24px_rgba(0,0,0,0.04)]
        transition-all duration-500 ease-[cubic-bezier(.16,1,.3,1)]
        hover:-translate-y-2 hover:shadow-[0_18px_48px_rgba(0,0,0,0.12)]
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500
        h-full
        ${isLast ? "lg:col-start-3 lg:row-start-1" : ""}`}
    >
      <div className="flex flex-col h-full">
        {/* IMAGE */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={service.image}
            alt={service.title}
            loading="lazy"
            decoding="async"
            sizes="(max-width: 640px) 100vw,
                   (max-width: 1024px) 50vw,
                   33vw"
            className="w-full h-full object-cover
                       transition-transform duration-700 ease-out
                       group-hover:scale-110"
          />
          <div
            className="absolute inset-0 bg-black/10 opacity-0
                       group-hover:opacity-100 transition-opacity duration-500"
          />
        </div>

        {/* CONTENT */}
        <div className="p-7 sm:p-9 flex flex-col flex-grow">
          <div className="mb-6">
            <span className="inline-flex p-3.5 rounded-xl bg-sky-100">
              <Icon className="w-7 h-7 text-sky-600" aria-hidden />
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-3">
            {service.title}
          </h3>

          <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
            {service.description}
          </p>
        </div>
      </div>
    </Link>
  );
});

/* ================= PAGE ================= */
const Services = () => {
  const services = useMemo(() => SERVICES_DATA, []);

  return (
    <section className="w-full bg-sky-50 py-28 sm:py-32 md:py-36">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        {/* HEADER */}
        <div className="max-w-3xl mb-18 sm:mb-22">
          <p className="uppercase tracking-[0.35em] text-base font-bold text-sky-600 mb-5">
            Services
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-slate-900 mb-7">
            Solutions Delivered with Precision & Trust
          </h1>

          <p className="text-slate-600 text-lg sm:text-xl leading-relaxed">
            Our services are designed to support educational institutions,
            examinations, training, and operational requirements with reliability
            and professionalism.
          </p>
        </div>

        {/* GRID */}
        <div className="grid gap-10 sm:gap-12 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
          {services.map((service, index) => (
            <ServiceCard
              key={service.path}
              service={service}
              isLast={index === services.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
