import { Link } from "react-router-dom";
import ServiceLayout from "./ServiceLayout";

/* ================= IMAGES ================= */
import m1 from "../../../assets/images/services/m1.webp";
import m2 from "../../../assets/images/services/m2.webp";

/* ================= ICONS (LUCIDE) ================= */
import {
  Users,
  UserCheck,
  Briefcase,
  ShieldCheck,
  Scale,
  Headset,
  Factory,
  Hospital,
  HardHat,
  GraduationCap,
  Truck,
  ShoppingCart,
} from "lucide-react";

const ManpowerProvider = () => {
  return (
    <ServiceLayout
      title="Manpower Provider Services"
      subtitle="Connecting skilled, semi-skilled, and unskilled manpower with organizations through structured recruitment, compliance-driven processes, and scalable workforce solutions."
    >

      {/* ================= INTRO ================= */}
      <section className="mb-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* TEXT */}
          <div>
            <h2 className="text-2xl font-semibold text-slate-900 mb-6">
              Connecting Talent with Opportunity
            </h2>

            <p className="text-slate-700 leading-relaxed mb-4">
              Xceled Solutions provides end-to-end manpower services tailored to
              meet the dynamic workforce requirements of businesses across
              industries. Our structured hiring processes ensure access to
              reliable, job-ready personnel aligned with operational needs.
            </p>

            <p className="text-slate-700 leading-relaxed mb-8">
              From short-term staffing to long-term workforce deployment, we
              focus on quality, compliance, and workforce continuity—ensuring
              organizations scale efficiently without operational disruptions.
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
            <div className="bg-sky-50 p-4 rounded-3xl shadow-xl">
              <img
                src={m1}
                alt="Workforce Deployment"
                className="rounded-2xl w-full max-w-[460px] object-cover transition-transform duration-300 hover:scale-[1.02]"
              />
            </div>
          </div>

        </div>
      </section>

      {/* ================= OUR COMPREHENSIVE SERVICES ================= */}
      <section className="mb-36">
        <h2 className="text-2xl font-semibold text-slate-900 mb-14">
          Our Comprehensive Services
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {[
            {
              icon: <Users />,
              title: "Temporary Staffing",
              text:
                "Flexible workforce solutions for seasonal demands, short-term projects, and immediate staffing requirements.",
            },
            {
              icon: <UserCheck />,
              title: "Permanent Recruitment",
              text:
                "End-to-end hiring support to identify, screen, and onboard long-term employees aligned with organizational culture.",
            },
            {
              icon: <Briefcase />,
              title: "Contractual Staffing",
              text:
                "Contract-based workforce deployment with compliance-managed contracts and structured workforce governance.",
            },
            {
              icon: <ShieldCheck />,
              title: "Skilled & Unskilled Labor",
              text:
                "Deployment of trained personnel across technical, non-technical, skilled, and general workforce roles.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="
                bg-sky-50 border border-sky-100
                rounded-3xl p-8
                transition-all duration-300
                hover:bg-white hover:-translate-y-2 hover:shadow-2xl
              "
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-sky-100 text-sky-600 mb-5">
                {item.icon}
              </div>

              <h3 className="text-lg font-semibold text-slate-900 mb-3">
                {item.title}
              </h3>

              <p className="text-slate-700 text-sm leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= INDUSTRIES WE SERVE ================= */}
      <section className="mb-36 bg-sky-50 rounded-3xl p-12">
        <h2 className="text-2xl font-semibold text-slate-900 mb-10">
          Industries We Serve
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {[
            { icon: <Factory />, label: "Manufacturing" },
            { icon: <Hospital />, label: "Healthcare" },
            { icon: <HardHat />, label: "Construction" },
            { icon: <ShoppingCart />, label: "Retail & E-commerce" },
            { icon: <Truck />, label: "Logistics & Warehousing" },
            { icon: <GraduationCap />, label: "Education" },
          ].map((item, i) => (
            <div
              key={i}
              className="
                bg-white border border-slate-200
                rounded-xl px-6 py-4
                flex items-center gap-3
                transition-all duration-300
                hover:-translate-y-1 hover:shadow-lg
              "
            >
              <span className="text-sky-600">{item.icon}</span>
              <span className="font-semibold text-slate-800">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ================= WHY CHOOSE US (SIDE BY SIDE) ================= */}
      <section className="mb-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-2xl font-semibold text-slate-900 mb-8">
              Why Choose Xceled Solutions
            </h2>

            <div className="grid sm:grid-cols-2 gap-6">
              {[
                {
                  icon: <Scale />,
                  title: "Compliance & Ethics",
                  text:
                    "Strict adherence to labor laws, safety regulations, and ethical hiring practices.",
                },
                {
                  icon: <Users />,
                  title: "Extensive Talent Pool",
                  text:
                    "Access to verified and job-ready candidates across multiple regions.",
                },
                {
                  icon: <ShieldCheck />,
                  title: "Quality Assurance",
                  text:
                    "Structured screening, training, and performance monitoring standards.",
                },
                {
                  icon: <Headset />,
                  title: "Continuous Support",
                  text:
                    "Dedicated coordination and post-deployment workforce management.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="
                    bg-sky-50 border border-sky-100
                    rounded-2xl p-6
                    transition-all duration-300
                    hover:bg-white hover:shadow-lg
                  "
                >
                  <div className="text-sky-600 mb-3">{item.icon}</div>
                  <h4 className="font-semibold text-slate-900 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center">
            <div className="bg-sky-50 p-4 rounded-3xl shadow-xl">
              <img
                src={m2}
                alt="Industrial Workforce"
                className="rounded-2xl w-full max-w-[460px] object-cover transition-transform duration-300 hover:scale-[1.02]"
              />
            </div>
          </div>

        </div>
      </section>

    </ServiceLayout>
  );
};

export default ManpowerProvider;
