import ServiceLayout from "./ServiceLayout";

/* ================= IMAGES ================= */
import e1 from "../../../assets/images/services/online-exam-benefit.webp";
import e2 from "../../../assets/images/services/e2.webp";

/* ================= ICONS ================= */
import {
  GraduationCap,
  BookOpen,
  FlaskConical,
  Brain,
  Users,
  BadgeCheck,
  CheckCircle,
  ShieldCheck,
  Award,
  Lightbulb,
  Layers,
} from "lucide-react";

const EducationalTraining = () => {
  return (
    <ServiceLayout
      title="Educational Training"
      subtitle="Skill-based, outcome-driven educational training programs designed to enhance learning, innovation, and employability across institutions and industries."
    >
      {/* ================= INTRO ================= */}
      <section className="mb-16 sm:mb-24 lg:mb-28">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center bg-sky-50 rounded-3xl px-6 sm:px-10 py-10 sm:py-16">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 mb-6">
              Empowering Future Innovators Through Skill-Based Learning
            </h2>

            <p className="text-slate-700 text-base sm:text-lg leading-relaxed mb-5">
              Xceled Solutions delivers structured, industry-aligned educational
              training programs designed to equip learners with practical skills
              and real-world readiness.
            </p>

            <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
              Our approach bridges academic learning and professional
              application through experiential training, innovation-driven
              methodologies, and outcome-focused program design.
            </p>
          </div>

          {/* IMAGE */}
          <div className="flex justify-center">
            <div className="p-3 sm:p-4 rounded-3xl shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl">
              <img
                src={e1}
                alt="Educational Training Environment"
                className="
                  w-full max-w-[420px] sm:max-w-[460px]
                  rounded-2xl object-cover
                  transition-transform duration-700 ease-out
                  hover:scale-110
                "
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= TRAINING PROGRAMS ================= */}
      <section className="mb-16 sm:mb-24 lg:mb-28">
        <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 mb-12 sm:mb-16">
          Our Comprehensive Training Programs
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {[
            {
              icon: GraduationCap,
              title: "Vocational Education & Training",
              points: [
                "Industry-aligned skill development programs",
                "Hands-on practical training modules",
                "Job-oriented curriculum design",
                "Certification and employability support",
              ],
            },
            {
              icon: BookOpen,
              title: "Learning Enhancement Programs (LEP)",
              points: [
                "Academic reinforcement initiatives",
                "Conceptual clarity and knowledge strengthening",
                "Performance improvement strategies",
                "Cognitive and analytical skill development",
              ],
            },
            {
              icon: FlaskConical,
              title: "Rashtriya Avishkar Abhiyan (RAA)",
              points: [
                "Scientific temper development",
                "Innovation-led experiential learning",
                "Problem-solving and experimentation",
                "Creativity and research mindset promotion",
              ],
            },
            {
              icon: Brain,
              title: "Aptitude Testing & Career Counseling",
              points: [
                "Psychometric and aptitude assessments",
                "Career mapping and guidance sessions",
                "Strength and interest analysis",
                "Informed career decision-making support",
              ],
            },
            {
              icon: Users,
              title: "Specialized Workshops & Training",
              points: [
                "Faculty development programs",
                "Institution-specific skill workshops",
                "Short-term intensive training sessions",
                "Customized learning interventions",
              ],
            },
            {
              icon: BadgeCheck,
              title: "Skill-Based Certification Programs",
              points: [
                "Employability-focused certifications",
                "Industry-recognized credentials",
                "Outcome-based skill validation",
                "Assessment-driven certification models",
              ],
            },
          ].map((item, i) => (
            <div
              key={i}
              className="
                bg-sky-50 border border-sky-100
                rounded-3xl p-7 sm:p-8
                transition-all duration-300
                hover:bg-white hover:-translate-y-2 hover:shadow-2xl
              "
            >
              <item.icon className="h-9 w-9 text-sky-600 mb-6 transition-transform duration-300 hover:scale-110" />

              <h3 className="text-xl font-semibold text-slate-900 mb-5">
                {item.title}
              </h3>

              <ul className="space-y-3">
                {item.points.map((point, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 text-base text-slate-700"
                  >
                    <CheckCircle className="h-5 w-5 text-sky-600 mt-0.5" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ================= WHO CAN BENEFIT ================= */}
      <section className="mb-16 sm:mb-24 lg:mb-28">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center bg-slate-50 rounded-3xl px-6 sm:px-10 py-10 sm:py-16">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 mb-7 sm:mb-9">
              Who Can Benefit?
            </h2>

            <div className="space-y-4 sm:space-y-6 text-slate-700 text-base sm:text-lg">
              <p><strong>Schools & Colleges:</strong> Academic enrichment and skill development.</p>
              <p><strong>Government Exam Institutes:</strong> National and state exam training.</p>
              <p><strong>Vocational Training Centers:</strong> Skill certification programs.</p>
              <p><strong>Recruitment Agencies:</strong> Candidate assessment and screening.</p>
              <p><strong>Corporate Organizations:</strong> Workforce upskilling programs.</p>
            </div>
          </div>

          {/* IMAGE */}
          <div className="flex justify-center">
            <div className="p-3 sm:p-4 rounded-3xl shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl">
              <img
                src={e2}
                alt="Training Session"
                className="
                  w-full max-w-[420px] sm:max-w-[460px]
                  rounded-2xl object-cover
                  transition-transform duration-700 ease-out
                  hover:scale-110
                "
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE ================= */}
      <section className="mb-12 sm:mb-20 lg:mb-24">
        <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 mb-12 sm:mb-16">
          Why Choose Xceled Solutions?
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {[
            { icon: ShieldCheck, title: "Government-Recognized", text: "Aligned with national frameworks." },
            { icon: Award, title: "Experienced Faculty", text: "Industry & academic experts." },
            { icon: Lightbulb, title: "Practical Learning", text: "Hands-on methodologies." },
            { icon: Layers, title: "Comprehensive Curriculum", text: "Future-ready programs." },
          ].map((item, i) => (
            <div
              key={i}
              className="
                bg-white border border-slate-200
                rounded-3xl p-7 sm:p-8 text-center
                transition-all duration-300
                hover:-translate-y-2 hover:shadow-2xl
              "
            >
              <item.icon className="h-9 w-9 text-sky-600 mx-auto mb-6 transition-transform duration-300 hover:scale-110" />
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                {item.title}
              </h3>
              <p className="text-base text-slate-700 leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>
    </ServiceLayout>
  );
};

export default EducationalTraining;
