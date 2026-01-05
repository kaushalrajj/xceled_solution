import ServiceLayout from "./ServiceLayout";

/* ================= IMAGES ================= */
import k1 from "../../../assets/images/services/k2.webp";
import k2 from "../../../assets/images/services/k3.webp";

/* ================= ICONS ================= */
import {
  Users,
  Briefcase,
  FileCheck,
  HardHat,
  Monitor,
  Factory,
  Hospital,
  ShoppingCart,
  Hotel,
  Plane,
  GraduationCap,
  Building2,
  CheckCircle,
  ShieldCheck,
  Layers,
  Headphones,
  Lightbulb,
} from "lucide-react";

const ManpowerServices = () => {
  return (
    <ServiceLayout
      title="Manpower & Staffing Solutions"
      subtitle="Connecting talent with opportunity through reliable, compliant, and industry-focused manpower solutions."
    >
      {/* ================= HERO / INTRO ================= */}
      <section className="mb-36">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* TEXT */}
          <div>
            <h2 className="text-2xl font-semibold text-slate-900 mb-6">
              Connecting Talent with Opportunity
            </h2>

            <p className="text-slate-700 leading-relaxed mb-4">
              At Ekwik Solution, we specialize in delivering tailored manpower
              solutions that align with the unique needs of businesses across
              various sectors.
            </p>

            <p className="text-slate-700 leading-relaxed">
              Our commitment to excellence ensures organizations receive
              competent, reliable personnel while job seekers find roles that
              match their skills and aspirations.
            </p>
          </div>

          {/* IMAGE */}
          <div className="flex justify-center">
            <div className="bg-sky-50 p-4 rounded-3xl shadow-xl overflow-hidden transition hover:shadow-2xl">
              <img
                src={k1}
                alt="Manpower Services"
                className="
                  w-full max-w-[460px] rounded-2xl object-cover
                  transition-transform duration-700 ease-out
                  hover:scale-110
                "
              />
            </div>
          </div>

        </div>
      </section>

      {/* ================= OUR SERVICES ================= */}
      <section className="mb-36">
        <h2 className="text-2xl font-semibold text-slate-900 mb-14">
          Our Comprehensive Services
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {[
            {
              icon: Users,
              title: "Temporary Staffing",
              points: [
                "Flexible staffing options for short-term projects",
                "Seasonal demand management",
                "Quick deployment of workforce",
                "Efficient and cost-effective solutions",
              ],
            },
            {
              icon: Briefcase,
              title: "Permanent Recruitment",
              points: [
                "Long-term workforce placement",
                "Cultural and skill-based fit",
                "Comprehensive screening",
                "Reliable talent acquisition",
              ],
            },
            {
              icon: FileCheck,
              title: "Contractual Staffing",
              points: [
                "Skilled professionals for defined durations",
                "Flexible contract terms",
                "Specialized skill deployment",
                "Compliance-managed workforce",
              ],
            },
            {
              icon: HardHat,
              title: "Skilled & Unskilled Labor",
              points: [
                "Industry-specific manpower",
                "Operational readiness",
                "Reliable workforce supply",
                "On-demand labor solutions",
              ],
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
              <item.icon className="h-8 w-8 text-sky-600 mb-5" />

              <h3 className="text-lg font-semibold text-slate-900 mb-4">
                {item.title}
              </h3>

              <ul className="space-y-2">
                {item.points.map((point, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 text-sm text-slate-700"
                  >
                    <CheckCircle className="h-4 w-4 text-sky-600 mt-0.5" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ================= INDUSTRIES ================= */}
      <section className="mb-36">
        <h2 className="text-2xl font-semibold text-slate-900 mb-14">
          Industries We Serve
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {[
            { icon: Monitor, title: "IT" },
            { icon: Factory, title: "Manufacturing" },
            { icon: Hospital, title: "Healthcare" },
            { icon: ShoppingCart, title: "Retail & E-commerce" },
            { icon: Hotel, title: "Hospitality" },
            { icon: Plane, title: "Tourism" },
            { icon: Building2, title: "Construction" },
            { icon: GraduationCap, title: "Education" },
          ].map((item, i) => (
            <div
              key={i}
              className="
                bg-white border border-slate-200
                rounded-3xl p-8 text-center
                transition-all duration-300
                hover:-translate-y-2 hover:shadow-2xl
              "
            >
              <item.icon className="h-8 w-8 text-sky-600 mx-auto mb-4" />
              <p className="text-sm font-medium text-slate-800">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= WHY CHOOSE ================= */}
      <section className="mb-28">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* TEXT */}
          <div>
            <h2 className="text-2xl font-semibold text-slate-900 mb-8">
              Why Choose Ekwik Solution?
            </h2>

            <div className="space-y-4 text-slate-700">
              <p className="flex items-start gap-3">
                <Lightbulb className="h-5 w-5 text-sky-600 mt-1" />
                Customized manpower solutions tailored to client needs.
              </p>
              <p className="flex items-start gap-3">
                <Layers className="h-5 w-5 text-sky-600 mt-1" />
                Extensive talent pool with quick and precise matching.
              </p>
              <p className="flex items-start gap-3">
                <ShieldCheck className="h-5 w-5 text-sky-600 mt-1" />
                Strict compliance with legal and ethical standards.
              </p>
              <p className="flex items-start gap-3">
                <Headphones className="h-5 w-5 text-sky-600 mt-1" />
                Continuous support for both clients and candidates.
              </p>
            </div>
          </div>

          {/* IMAGE */}
          <div className="flex justify-center">
            <div className="bg-sky-50 p-4 rounded-3xl shadow-xl overflow-hidden transition hover:shadow-2xl">
              <img
                src={k2}
                alt="Manpower Workforce"
                className="
                  w-full max-w-[460px] rounded-2xl object-cover
                  transition-transform duration-700 ease-out
                  hover:scale-110
                "
              />
            </div>
          </div>

        </div>
      </section>
    </ServiceLayout>
  );
};

export default ManpowerServices;
