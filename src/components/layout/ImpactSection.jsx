import impactEducation from "../../assets/images/hero/i1.webp";
import impactClassroom from "../../assets/images/hero/i2.webp";
import impactTeaching from "../../assets/images/hero/i4.webp";
import impactWorkshop from "../../assets/images/hero/i3.webp";

/* ================= DATA ================= */
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

/* ================= COMPONENT ================= */
const ImpactSection = () => {
  return (
    <section className="relative w-full mt-15 pb-40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* ================= HEADER ================= */}
        <header className="max-w-2xl mb-24 space-y-6">
          <div className="flex items-center gap-4">
            <span className="block w-10 h-[3px] bg-sky-500 rounded-full" />
            <p className="uppercase tracking-[0.32em] text-xs sm:text-sm font-bold text-sky-600">
              Our Impact
            </p>
          </div>

          <h2 className="font-bold tracking-tight text-slate-800 text-[clamp(1.9rem,3.6vw,2.7rem)] leading-tight">
            Learning That Extends Beyond the Classroom
          </h2>

          <p className="text-slate-600 leading-[1.75] text-[0.95rem] sm:text-[1rem]">
            Through hands-on programs, institutional collaboration, and guided learning,
            we focus on building capability, confidence, and practical understanding.
          </p>
        </header>

        {/* ================= GRID ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-14 gap-y-20">
          {impacts.map((item, index) => (
            <article
              key={index}
              className="
                group relative
                transition-transform duration-700 ease-out
                hover:-translate-y-2
                will-change-transform
              "
            >
              {/* ================= IMAGE ================= */}
              <div className="relative overflow-hidden rounded-3xl aspect-[4/3]">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                  sizes="(max-width: 640px) 100vw,
                         (max-width: 1024px) 50vw,
                         25vw"
                  className="
                    w-full h-full
                    object-cover object-center
                    transition-transform duration-[1600ms] ease-out
                    group-hover:scale-[1.06]
                  "
                />

                {/* Depth Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent opacity-60" />
              </div>

              {/* ================= CONTENT ================= */}
              <div className="pt-6">
                <h3 className="text-[16.5px] font-semibold text-slate-800 mb-2">
                  {item.title}
                </h3>

                <p className="text-slate-600 text-[0.9rem] leading-[1.7]">
                  {item.desc}
                </p>
              </div>

              {/* ================= BRAND ACCENT ================= */}
              <span
                className="
                  absolute -bottom-4 left-0
                  h-[3px] w-0
                  bg-sky-500
                  transition-all duration-700
                  group-hover:w-14
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
