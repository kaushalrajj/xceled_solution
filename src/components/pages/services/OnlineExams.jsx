import { Link } from "react-router-dom";
import ServiceLayout from "./ServiceLayout";

/* ================= IMAGES ================= */
import mainImage from "../../../assets/images/services/online-exam-benefit.webp";

import jnv from "../../../assets/images/services/client-jnv.png";
import pmshri from "../../../assets/images/services/client-pmshri.png";
import skillIndia from "../../../assets/images/services/client-skill.png";
import career from "../../../assets/images/services/client-career.png";

const OnlineExams = () => {
  const offerings = [
    {
      title: "End-to-End Examination Management",
      text:
        "Complete handling of the examination lifecycle including planning, scheduling, execution, monitoring, evaluation, and result processing.",
    },
    {
      title: "Highly Secure Exam Infrastructure",
      text:
        "Encrypted question delivery, controlled access, secure data handling, and strict compliance protocols.",
    },
    {
      title: "Live Proctoring & Monitoring",
      text:
        "Technology-assisted and human-led invigilation to ensure transparency and exam integrity.",
    },
    {
      title: "Multi-Device Exam Access",
      text:
        "Candidates can attempt examinations on desktops, laptops, and approved devices using standard web browsers.",
    },
    {
      title: "Flexible Question Bank Support",
      text:
        "Support for objective, subjective, descriptive, and mixed-format question papers as per examination requirements.",
    },
    {
      title: "Multilingual Exam Enablement",
      text:
        "Assessment delivery configurable across multiple Indian languages to ensure accessibility for diverse candidate groups.",
    },
    {
      title: "Real-Time Analytics & Reporting",
      text:
        "Instant dashboards, attendance tracking, performance insights, and downloadable reports.",
    },
    {
      title: "Pan-India Operational Reach",
      text:
        "Capability to conduct examinations across metro cities, tier-2 towns, and remote regions.",
    },
  ];

  const clients = [jnv, pmshri, skillIndia, career];

  return (
    <ServiceLayout
      title="Online Examination Services"
      subtitle="Secure, scalable, and institution-ready online examination solutions delivered with operational excellence across India."
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
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 mb-6">
              Trusted Online Examination Platform
            </h2>

            <p className="text-slate-700 text-base sm:text-lg leading-relaxed mb-5">
              Xceled Solutions delivers reliable and secure online examination
              services designed for institutions that demand precision,
              transparency, and scalability.
            </p>

            <p className="text-slate-700 text-base sm:text-lg leading-relaxed mb-7 sm:mb-9">
              With proven experience in managing large-scale assessments, our
              solutions ensure seamless execution from candidate onboarding to
              post-exam reporting — backed by strict compliance and operational
              discipline.
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

          <div className="flex justify-center">
            <img
              src={mainImage}
              alt="Online Examination Setup"
              className="w-full max-w-[380px] sm:max-w-[420px] rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* ================= WHAT WE OFFER ================= */}
      <section className="mb-16 sm:mb-24 lg:mb-28">
        <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 mb-12 sm:mb-16">
          What We Offer
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {offerings.map((item, i) => (
            <div
              key={i}
              className="
                bg-sky-50/60
                p-7 sm:p-8
                rounded-3xl
                border border-slate-200
                transition-all duration-300
                hover:bg-white hover:-translate-y-2 hover:shadow-2xl
              "
            >
              <h3 className="text-xl font-semibold text-slate-900 mb-5">
                {item.title}
              </h3>

              <p className="text-base text-slate-700 leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= TRUSTED BY ================= */}
      <section className="mb-12 sm:mb-20 lg:mb-24">
        <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 mb-12 sm:mb-14">
          Trusted by Institutions
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-10">
          {clients.map((logo, i) => (
            <div
              key={i}
              className="
                flex justify-center items-center
                p-5 sm:p-6
                bg-slate-50
                rounded-2xl
                border
                transition-all duration-300
                hover:bg-white hover:-translate-y-1 hover:shadow-xl
              "
            >
              <img
                src={logo}
                alt="Client Logo"
                className="
                  max-h-12 sm:max-h-14
                  object-contain
                  grayscale transition-all duration-300
                  hover:grayscale-0
                "
              />
            </div>
          ))}
        </div>
      </section>
    </ServiceLayout>
  );
};

export default OnlineExams;
