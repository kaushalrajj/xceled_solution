import ServiceLayout from "./ServiceLayout";

/* ================= IMAGE ================= */
import l1 from "../../../assets/images/services/l1.webp";

/* ================= ICONS ================= */
import {
  FlaskConical,
  TestTube,
  Dna,
  GraduationCap,
  Layers,
  ShieldCheck,
  SlidersHorizontal,
  UserCheck,
  Headset,
  BadgeIndianRupee,
  Truck,
  CheckCircle,
} from "lucide-react";

const SchoolLabKits = () => {
  return (
    <ServiceLayout
      title="School Lab Kits"
      subtitle="Comprehensive, curriculum-aligned laboratory kits designed to foster scientific curiosity, practical understanding, and hands-on learning in schools."
    >
      {/* ================= HERO / INTRO ================= */}
      <section className="mb-16 sm:mb-24 lg:mb-28">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center bg-sky-50 rounded-3xl px-6 sm:px-10 py-10 sm:py-14 lg:py-16">

          {/* TEXT */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 mb-6">
              Equipping Young Minds for Scientific Exploration
            </h2>

            <p className="text-slate-700 text-base sm:text-lg leading-relaxed mb-5">
              Xceled Solutions is committed to enriching school education by
              providing well-structured laboratory kits that enable students to
              learn science through real experimentation and observation.
            </p>

            <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
              Our School Lab Kits are meticulously designed to align with
              curriculum standards while ensuring safety, clarity, and
              effective concept building across core science disciplines.
            </p>
          </div>

          {/* IMAGE */}
          <div className="flex justify-center">
            <div className="p-3 sm:p-4 rounded-3xl shadow-xl overflow-hidden group">
              <img
                src={l1}
                alt="School Laboratory Kit"
                className="
                  w-full max-w-[420px] sm:max-w-[460px]
                  rounded-2xl object-cover
                  transition-transform duration-500 ease-out
                  group-hover:scale-[1.06]
                "
              />
            </div>
          </div>

        </div>
      </section>

      {/* ================= OUR OFFERINGS ================= */}
      <section className="mb-16 sm:mb-24 lg:mb-28">
        <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 mb-12 sm:mb-16">
          Our Offerings
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          
          {/* Physics */}
          <div className="bg-sky-50 border border-sky-100 rounded-3xl p-7 sm:p-8 transition-all duration-300 hover:bg-white hover:-translate-y-2 hover:shadow-2xl">
            <FlaskConical className="h-9 w-9 text-sky-600 mb-6" />
            <h3 className="text-xl font-semibold text-slate-900 mb-4">
              Physics Lab Kits
            </h3>
            <ul className="space-y-3 text-base text-slate-700">
              {[
                "Mechanics experiments",
                "Optics and light studies",
                "Electricity and magnetism",
                "Thermodynamics basics",
              ].map((item, i) => (
                <li key={i} className="flex gap-2">
                  <CheckCircle className="h-5 w-5 text-sky-600 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Chemistry */}
          <div className="bg-sky-50 border border-sky-100 rounded-3xl p-7 sm:p-8 transition-all duration-300 hover:bg-white hover:-translate-y-2 hover:shadow-2xl">
            <TestTube className="h-9 w-9 text-sky-600 mb-6" />
            <h3 className="text-xl font-semibold text-slate-900 mb-4">
              Chemistry Lab Kits
            </h3>
            <ul className="space-y-3 text-base text-slate-700">
              {[
                "Acid-base reactions",
                "Chemical handling practices",
                "Stoichiometry experiments",
                "Organic chemistry basics",
              ].map((item, i) => (
                <li key={i} className="flex gap-2">
                  <CheckCircle className="h-5 w-5 text-sky-600 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Biology */}
          <div className="bg-sky-50 border border-sky-100 rounded-3xl p-7 sm:p-8 transition-all duration-300 hover:bg-white hover:-translate-y-2 hover:shadow-2xl">
            <Dna className="h-9 w-9 text-sky-600 mb-6" />
            <h3 className="text-xl font-semibold text-slate-900 mb-4">
              Biology Lab Kits
            </h3>
            <ul className="space-y-3 text-base text-slate-700">
              {[
                "Microscopy observations",
                "Dissection models",
                "Genetics fundamentals",
                "Ecology and environment studies",
              ].map((item, i) => (
                <li key={i} className="flex gap-2">
                  <CheckCircle className="h-5 w-5 text-sky-600 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* ================= KEY FEATURES ================= */}
      <section className="mb-16 sm:mb-24 lg:mb-28">
        <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 mb-12 sm:mb-16">
          Key Features
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {[
            {
              icon: GraduationCap,
              title: "Curriculum-Aligned",
              text: "Designed in accordance with educational board standards.",
            },
            {
              icon: Layers,
              title: "Comprehensive Components",
              text: "Includes all required materials with clear instructions.",
            },
            {
              icon: ShieldCheck,
              title: "Quality Assurance",
              text: "High-quality, safe, and durable lab materials.",
            },
            {
              icon: SlidersHorizontal,
              title: "Customizable Solutions",
              text: "Tailored kits based on grade level and institution needs.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white border border-slate-200 rounded-3xl p-7 sm:p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <item.icon className="h-9 w-9 text-sky-600 mx-auto mb-6" />
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                {item.title}
              </h3>
              <p className="text-base text-slate-700">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= WHY CHOOSE XCELED ================= */}
      <section className="mb-12 sm:mb-20 lg:mb-24">
        <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 mb-12 sm:mb-16">
          Why Choose Xceled Solutions?
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {[
            { icon: UserCheck, text: "Expert educators and scientists" },
            { icon: Headset, text: "Training & implementation support" },
            { icon: BadgeIndianRupee, text: "Affordable pricing models" },
            { icon: Truck, text: "Reliable and timely delivery" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-sky-50 border border-sky-100 rounded-3xl p-7 sm:p-8 text-center transition-all duration-300 hover:bg-white hover:-translate-y-2 hover:shadow-2xl"
            >
              <item.icon className="h-9 w-9 text-sky-600 mx-auto mb-5" />
              <p className="text-base font-medium text-slate-800">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>
    </ServiceLayout>
  );
};

export default SchoolLabKits;
