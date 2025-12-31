import ServiceLayout from "./ServiceLayout";

/* ================= IMAGES ================= */
import k1 from "../../../assets/images/services/k2.webp";
import k2 from "../../../assets/images/services/k3.webp";

/* ================= ICONS ================= */
import {
  FlaskConical,
  Cpu,
  Calculator,
  Palette,
  BookOpen,
  GraduationCap,
  FileText,
  CheckCircle,
  Lightbulb,
  Layers,
  Headphones,
} from "lucide-react";

const EducationalKits = () => {
  return (
    <ServiceLayout
      title="Educational Kits"
      subtitle="Hands-on, curriculum-aligned educational kits designed to foster curiosity, innovation, and experiential learning across age groups."
    >
      {/* ================= HERO / INTRO (TEXT LEFT – IMAGE RIGHT) ================= */}
      <section className="mb-36">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* TEXT */}
          <div>
            <h2 className="text-2xl font-semibold text-slate-900 mb-6">
              Empowering Learning Through Hands-On Experience
            </h2>

            <p className="text-slate-700 leading-relaxed mb-4">
              At Xceled Solutions, we believe experiential learning is essential
              for nurturing curiosity, creativity, and innovation among students.
            </p>

            <p className="text-slate-700 leading-relaxed">
              Our educational kits combine practical tools with structured
              learning to complement academic curricula and encourage exploration,
              experimentation, and conceptual clarity.
            </p>
          </div>

          {/* IMAGE */}
          <div className="flex justify-center">
            <div className="bg-sky-50 p-4 rounded-3xl shadow-xl overflow-hidden transition hover:shadow-2xl">
              <img
                src={k1}
                alt="Educational Kits Learning"
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

      {/* ================= OUR EDUCATIONAL KITS ================= */}
      <section className="mb-36">
        <h2 className="text-2xl font-semibold text-slate-900 mb-14">
          Our Educational Kits
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {[
            {
              icon: FlaskConical,
              title: "Science Exploration Kits",
              points: [
                "Interactive experiments in physics, chemistry, and biology",
                "Safe and durable materials",
                "Real-world scientific applications",
                "Detailed instructional manuals",
              ],
            },
            {
              icon: Cpu,
              title: "Robotics & IoT Kits",
              points: [
                "Introduction to automation and programming",
                "Basic to advanced robotics concepts",
                "IoT modules and sensors",
                "Hands-on coding experience",
              ],
            },
            {
              icon: Calculator,
              title: "Mathematics Learning Kits",
              points: [
                "Hands-on mathematical reasoning",
                "Problem-solving activities",
                "Visual aids for complex concepts",
                "Conceptual clarity through practice",
              ],
            },
            {
              icon: Palette,
              title: "Art & Creativity Kits",
              points: [
                "Creative expression tools",
                "Cross-subject integration",
                "Project-based learning",
                "Skill development through art",
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

      {/* ================= KEY FEATURES ================= */}
      <section className="mb-36">
        <h2 className="text-2xl font-semibold text-slate-900 mb-14">
          Key Features
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {[
            {
              icon: BookOpen,
              title: "Curriculum-Aligned",
              text: "Developed in line with educational standards for relevance and effectiveness.",
            },
            {
              icon: GraduationCap,
              title: "Age-Appropriate Design",
              text: "Designed for learners from primary to higher secondary levels.",
            },
            {
              icon: FileText,
              title: "Comprehensive Resources",
              text: "Includes manuals, guides, and educator support material.",
            },
            {
              icon: CheckCircle,
              title: "Quality Assurance",
              text: "Durable, safe, and reliable materials for long-term usage.",
            },
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
              <item.icon className="h-8 w-8 text-sky-600 mx-auto mb-5" />
              <h3 className="text-lg font-semibold text-slate-900 mb-3">
                {item.title}
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= WHY CHOOSE (TEXT LEFT – IMAGE RIGHT) ================= */}
      <section className="mb-28">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* TEXT */}
          <div>
            <h2 className="text-2xl font-semibold text-slate-900 mb-8">
              Why Choose Xceled Solutions’ Educational Kits?
            </h2>

            <div className="space-y-4 text-slate-700">
              <p className="flex items-start gap-3">
                <Lightbulb className="h-5 w-5 text-sky-600 mt-1" />
                Expertly crafted by educators and industry professionals.
              </p>
              <p className="flex items-start gap-3">
                <Layers className="h-5 w-5 text-sky-600 mt-1" />
                Suitable for classrooms, workshops, and home learning.
              </p>
              <p className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-sky-600 mt-1" />
                Promotes hands-on learning and critical thinking.
              </p>
              <p className="flex items-start gap-3">
                <Headphones className="h-5 w-5 text-sky-600 mt-1" />
                Training sessions and dedicated customer support.
              </p>
            </div>
          </div>

          {/* IMAGE */}
          <div className="flex justify-center">
            <div className="bg-sky-50 p-4 rounded-3xl shadow-xl overflow-hidden transition hover:shadow-2xl">
              <img
                src={k2}
                alt="Hands-on Educational Kits"
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

export default EducationalKits;
