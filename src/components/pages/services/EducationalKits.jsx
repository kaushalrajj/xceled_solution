/* ================= IMAGES ================= */
import heroImg from "../../../assets/images/services/k2.webp";
import whyImg from "../../../assets/images/services/k3.webp";

/* ================= ICONS ================= */
import {
  FlaskConical,
  Cpu,
  Calculator,
  Palette,
  BookOpen,
  GraduationCap,
  FileText,
  ShieldCheck,
  Users,
  Award,
  CheckCircle,
} from "lucide-react";

const EducationalKits = () => {
  return (
    <div className="w-full bg-gradient-to-b from-sky-50 via-white to-white">
      {/* ================= HERO ================= */}
      <section
        className="relative pt-20 sm:pt-24 lg:pt-28 pb-10 sm:pb-16 lg:pb-24"
        style={{
          backgroundImage: `linear-gradient(rgba(15,23,42,0.65), rgba(15,23,42,0.65)), url(${heroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 text-center text-white">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Educational Kits
          </h1>
          <p className="max-w-3xl mx-auto text-sm sm:text-lg text-slate-200 leading-relaxed">
            Empowering learning through hands-on, experiential educational kits
            designed to spark curiosity, creativity, and conceptual clarity.
          </p>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="max-w-7xl mx-auto px-6 py-10 sm:py-16 lg:py-20">
        <div className="bg-sky-50 rounded-3xl px-7 sm:px-10 py-10 sm:py-14 text-center">
          <h2 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-4 sm:mb-6">
            Empowering Learning Through Hands-On Experience
          </h2>
          <p className="max-w-4xl mx-auto text-slate-600 leading-relaxed text-sm sm:text-base">
            At Xcelled Solutions, we believe that experiential learning is the
            key to fostering curiosity and innovation among students. Our
            meticulously designed Educational Kits provide practical tools that
            complement theoretical knowledge, enabling learners to explore,
            experiment, and excel in various subjects.
          </p>
        </div>
      </section>

      {/* ================= OUR EDUCATIONAL KITS ================= */}
      <section className="max-w-7xl mx-auto px-6 pb-10 sm:pb-16 lg:pb-20">
        <h2 className="text-xl sm:text-2xl font-semibold text-center mb-8 sm:mb-12">
          Our Educational Kits
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-7 lg:gap-8">
          {[
            {
              icon: FlaskConical,
              title: "Science Exploration Kits",
              points: [
                "Interactive experiments covering physics, chemistry, and biology",
                "Safe and durable materials",
                "Real-world application projects",
              ],
            },
            {
              icon: Cpu,
              title: "Robotics and IoT Kits",
              points: [
                "Introduction to automation and connectivity",
                "Basic to advanced robotics components",
                "Programming guides and tools",
              ],
            },
            {
              icon: Calculator,
              title: "Mathematics Learning Kits",
              points: [
                "Hands-on activities for abstract concepts",
                "Problem-solving manipulatives",
                "Visual aids for complex topics",
              ],
            },
            {
              icon: Palette,
              title: "Art and Creativity Kits",
              points: [
                "Encourages artistic expression",
                "Wide variety of art supplies",
                "Cross-subject integration",
              ],
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 sm:p-7 shadow-md
                         hover:shadow-xl hover:-translate-y-1
                         transition-all duration-300"
            >
              <item.icon className="w-9 h-9 text-sky-600 mb-4" />
              <h3 className="font-semibold text-base sm:text-lg mb-3">
                {item.title}
              </h3>
              <ul className="space-y-2 text-sm text-slate-600">
                {item.points.map((p, idx) => (
                  <li key={idx} className="flex gap-2">
                    <CheckCircle className="w-4 h-4 text-sky-500 mt-0.5" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ================= KEY FEATURES ================= */}
      <section className="bg-slate-50 py-10 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-xl sm:text-2xl font-semibold text-center mb-8 sm:mb-12">
            Key Features
          </h2>

          <div className="grid md:grid-cols-4 gap-6 sm:gap-8 text-center">
            {[
              { icon: BookOpen, title: "Curriculum-Aligned" },
              { icon: GraduationCap, title: "Age-Appropriate Design" },
              { icon: FileText, title: "Comprehensive Resources" },
              { icon: ShieldCheck, title: "Quality Assurance" },
            ].map((f, i) => (
              <div key={i}>
                <f.icon className="w-8 h-8 sm:w-9 sm:h-9 text-sky-600 mx-auto mb-3" />
                <h4 className="font-medium text-slate-800 text-sm sm:text-base">
                  {f.title}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="max-w-7xl mx-auto px-6 py-10 sm:py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-14 items-center">
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold mb-5 sm:mb-7">
              Why Choose Xcelled Solutions?
            </h2>

            <div className="space-y-3 sm:space-y-5 text-slate-600 text-sm sm:text-base">
              <p className="flex gap-3">
                <Award className="text-sky-600" /> Expertly crafted by educators
                and industry professionals
              </p>
              <p className="flex gap-3">
                <Users className="text-sky-600" /> Suitable for classrooms,
                workshops, and home learning
              </p>
              <p className="flex gap-3">
                <CheckCircle className="text-sky-600" /> Promotes active
                participation and critical thinking
              </p>
              <p className="flex gap-3">
                <ShieldCheck className="text-sky-600" /> Training sessions and
                ongoing support available
              </p>
            </div>
          </div>

          <div className="relative mt-6 lg:mt-0">
            <img
              src={whyImg}
              alt="Educational kits in use"
              className="rounded-2xl shadow-xl hover:scale-[1.02]
                         transition-transform duration-300"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default EducationalKits;
