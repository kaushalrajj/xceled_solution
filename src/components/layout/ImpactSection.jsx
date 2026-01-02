import impactEducation from "../../assets/images/hero/i1.webp";
import impactClassroom from "../../assets/images/hero/i2.webp";
import impactTeaching from "../../assets/images/hero/i3.webp";
import impactWorkshop from "../../assets/images/hero/i4.webp";

const impacts = [
  {
    image: impactEducation,
    title: "Learner-Centered Engagement",
    desc: "Hands-on learning environments that encourage curiosity, confidence, and active participation.",
  },
  {
    image: impactClassroom,
    title: "Institutional Collaboration",
    desc: "Working closely with schools and institutions to deliver structured, skill-focused programs.",
  },
  {
    image: impactWorkshop,
    title: "Applied Skill Development",
    desc: "Workshops designed to bridge theoretical understanding with real-world application.",
  },
  {
    image: impactTeaching,
    title: "Mentorship & Direction",
    desc: "Focused guidance that supports clarity, discipline, and long-term academic and career thinking.",
  },
];

const ImpactSection = () => {
  return (
    <section className="relative w-full mt-15 pb-40">
      <div className="max-w-7xl mx-auto px-6">

        {/* ================= HEADER ================= */}
        <div className="max-w-2xl mb-24 space-y-6">

          {/* SECTION MARKER — LOCKED SYSTEM */}
          <div className="flex items-center gap-4">
            <span className="block w-10 h-[3px] bg-sky-500 rounded-full"></span>
            <p className="uppercase tracking-[0.32em] text-[clamp(0.875rem,1.2vw,1rem)] font-bold text-sky-600">
              Our Impact
            </p>
          </div>

          <h2 className="text-[30px] md:text-[36px] lg:text-[42px] font-semibold text-slate-800 leading-tight">
            Learning That Extends Beyond the Classroom
          </h2>

          <p className="text-slate-600 leading-relaxed text-[15.5px]">
            Through hands-on programs, institutional collaboration, and guided learning,
            we focus on building capability, confidence, and practical understanding.
          </p>
        </div>

        {/* ================= IMPACT GRID ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-14 gap-y-24">
          {impacts.map((item, index) => (
            <article
              key={index}
              className="
                group relative
                transition-transform duration-700 ease-out
                hover:-translate-y-3
              "
            >
              {/* IMAGE */}
              <div className="relative overflow-hidden rounded-3xl">
                <img
                  src={item.image}
                  alt={item.title}
                  className="
                    w-full h-[300px] object-cover object-center
                    transition-transform duration-[1800ms] ease-out
                    group-hover:scale-[1.08]
                  "
                />

                {/* GRADIENT FOR DEPTH */}
                <div className="
                  absolute inset-0
                  bg-gradient-to-t from-black/35 via-black/10 to-transparent
                  opacity-60
                " />
              </div>

              {/* TEXT */}
              <div className="pt-6">
                <h3 className="text-[17px] font-semibold text-slate-800 mb-2">
                  {item.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* BRAND ACCENT */}
              <span
                className="
                  absolute -bottom-4 left-0
                  h-[3px] w-0
                  bg-sky-500
                  transition-all duration-700
                  group-hover:w-16
                "
              />
            </article>
          ))}
        </div>

      </div>

      {/* ================= DECORATIVE BACKDROP ================= */}
      <div className="absolute -top-40 -right-40 w-[420px] h-[420px] bg-sky-200/40 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
};

export default ImpactSection;
