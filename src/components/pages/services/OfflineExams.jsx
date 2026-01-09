import { Link } from "react-router-dom";
import ServiceLayout from "./ServiceLayout";

/* ================= IMAGES ================= */
import off1 from "../../../assets/images/services/off1.webp";
import off2 from "../../../assets/images/services/off2.webp";
import off3 from "../../../assets/images/services/off3.webp";
import off4 from "../../../assets/images/services/off4.webp";
import off5 from "../../../assets/images/services/off5.webp";
import off6 from "../../../assets/images/services/off6.webp";

const OfflineExams = () => {
  const strengths = [
    {
      title: "Nationwide Reach",
      text: "Examination operations conducted across urban, semi-urban, and remote locations with centralized coordination.",
      image: off2,
    },
    {
      title: "Trained & Certified Invigilators",
      text: "Professionally trained manpower following standardized examination and compliance protocols.",
      image: off3,
    },
    {
      title: "Scalable Operations",
      text: "Capability to manage examinations ranging from small batches to large-scale multi-center deployments.",
      image: off4,
    },
    {
      title: "Seamless Coordination",
      text: "Centralized scheduling, reporting, attendance tracking, and compliance management.",
      image: off5,
    },
    {
      title: "Trusted by Institutions",
      text: "Experience with government bodies, academic institutions, recruitment drives, and scholarship examinations.",
      image: off6,
    },
  ];

  const formats = [
    "OMR-Based Examinations",
    "Pen & Paper Descriptive Exams",
    "Center-Based Offline Computer Exams",
  ];

  return (
    <ServiceLayout
      title="Offline Proctor-Based Examination Services"
      subtitle="Professionally managed offline invigilation services ensuring secure, standardized, and scalable examination execution across India."
    >
      {/* ================= INTRO ================= */}
      <section className="mb-16 sm:mb-24 lg:mb-28">
        <div
          className="
            grid lg:grid-cols-2
            gap-10 sm:gap-12 lg:gap-16
            items-center
            bg-sky-50/60
            rounded-3xl
            px-6 sm:px-10
            py-10 sm:py-14 lg:py-16
          "
        >
          {/* TEXT */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 mb-6">
              Reliable Exam Invigilation Services Across India
            </h2>

            <p className="text-slate-700 text-base sm:text-lg leading-relaxed mb-5">
              Xceled Solutions delivers end-to-end offline proctor-based
              examination services for government bodies, educational
              institutions, and private organizations.
            </p>

            <p className="text-slate-700 text-base sm:text-lg leading-relaxed mb-7 sm:mb-9">
              Our structured processes, trained manpower, and centralized
              coordination ensure secure, compliant, and standardized
              execution of offline examinations across diverse geographies.
            </p>

            <Link
              to="/contact"
              className="
                inline-flex items-center gap-2
                px-8 py-4 rounded-xl
                bg-sky-600 text-white font-semibold
                transition-all duration-300
                hover:bg-sky-700 hover:-translate-y-1 hover:shadow-xl
              "
            >
              Talk to Our Experts →
            </Link>
          </div>

          {/* IMAGE */}
          <div className="flex justify-center">
            <div
              className="
                bg-white/80 backdrop-blur
                p-3 sm:p-4
                rounded-3xl shadow-xl
                transition-all duration-300
                hover:shadow-2xl
              "
            >
              <img
                src={off1}
                alt="Offline Exam Invigilation"
                className="
                  w-full max-w-[420px] sm:max-w-[460px]
                  rounded-2xl object-cover
                  transition-transform duration-500
                  hover:scale-[1.03]
                "
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="mb-16 sm:mb-24 lg:mb-28">
        <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 mb-12 sm:mb-16">
          Why Choose Our Proctoring Team
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {strengths.map((item, i) => (
            <div
              key={i}
              className="
                bg-slate-50
                border border-slate-200
                rounded-3xl overflow-hidden
                transition-all duration-300
                hover:-translate-y-2 hover:shadow-2xl
              "
            >
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="
                    h-40 sm:h-44 w-full object-cover
                    transition-transform duration-500
                    hover:scale-[1.05]
                  "
                />
              </div>

              <div className="p-6 sm:p-7">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-base text-slate-700 leading-relaxed">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= EXAM FORMATS ================= */}
      <section className="mb-12 sm:mb-20 lg:mb-24">
        <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 mb-12 sm:mb-14">
          We Support Multiple Exam Formats
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {formats.map((format, i) => (
            <div
              key={i}
              className="
                bg-sky-50/70
                border border-slate-200
                rounded-2xl px-7 py-5 sm:px-8 sm:py-6
                text-center font-semibold text-base sm:text-lg text-slate-800
                transition-all duration-300
                hover:-translate-y-1 hover:shadow-lg
              "
            >
              {format}
            </div>
          ))}
        </div>
      </section>
    </ServiceLayout>
  );
};

export default OfflineExams;
