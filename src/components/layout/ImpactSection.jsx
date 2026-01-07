import impactEducation from "../../assets/images/hero/i1.webp";
import impactClassroom from "../../assets/images/hero/i2.webp";
import impactTeaching from "../../assets/images/hero/i4.webp";
import impactWorkshop from "../../assets/images/hero/i3.webp";

/* ================= DATA ================= */
const impacts = [
  {
    image: impactEducation,
    title: "Learner-Centered Engagement",
    desc: "Structured, hands-on learning environments that improve participation, confidence, and practical understanding.",
  },
  {
    image: impactClassroom,
    title: "Institutional Collaboration",
    desc: "Sustained collaboration with schools and institutions to deliver aligned, skill-focused educational programs.",
  },
  {
    image: impactWorkshop,
    title: "Applied Skill Development",
    desc: "Workshops that convert theoretical knowledge into real-world skills through guided practice.",
  },
  {
    image: impactTeaching,
    title: "Mentorship & Direction",
    desc: "Consistent mentorship that builds clarity, discipline, and informed academic and career decision-making.",
  },
];

/* ================= COMPONENT ================= */
const ImpactSection = () => {
  return (
    <section
      className="
        relative w-full
        mt-15
        pb-32 md:pb-36
        overflow-hidden
      "
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* ================= HEADER ================= */}
        <header className="max-w-2xl mb-20 md:mb-24 space-y-5">
          <div className="flex items-center gap-4">
            <span className="block w-9 h-[2.5px] bg-sky-500 rounded-full" />
            <p className="uppercase tracking-[0.34em] text-[0.7rem] font-semibold text-sky-600">
              Our Impact
            </p>
          </div>

          <h2
            className="
              font-semibold tracking-tight
              text-slate-800
              text-[clamp(1.85rem,3.4vw,2.5rem)]
              leading-[1.15]
            "
          >
            Measurable Learning. Meaningful Outcomes.
          </h2>

          <p
            className="
              text-slate-600
              leading-[1.7]
              text-[0.95rem]
            "
          >
            Our initiatives focus on delivering tangible educational outcomes
            through hands-on engagement, institutional collaboration, and guided
            skill development — extending learning beyond classrooms into
            real-world readiness.
          </p>
        </header>

        {/* ================= GRID ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-18">

          {impacts.map((item, index) => (
            <article
              key={index}
              className="
                group relative
                transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)]
                hover:-translate-y-1.5
                will-change-transform
              "
            >
              {/* IMAGE */}
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
                    group-hover:scale-[1.05]
                  "
                />

                {/* Depth overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent opacity-60" />
              </div>

              {/* CONTENT */}
              <div className="pt-5">
                <h3 className="text-[0.95rem] font-semibold text-slate-800 mb-1.5">
                  {item.title}
                </h3>

                <p className="text-slate-600 text-[0.88rem] leading-[1.65]">
                  {item.desc}
                </p>
              </div>

              {/* BRAND ACCENT */}
              <span
                className="
                  absolute -bottom-3 left-0
                  h-[2.5px] w-0
                  bg-sky-500
                  transition-all duration-500
                  group-hover:w-12
                "
              />
            </article>
          ))}

        </div>
      </div>

      {/* ================= DECORATIVE BACKDROP ================= */}
      <div className="absolute -top-32 -right-32 w-[360px] h-[360px] bg-sky-200/35 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
};

export default ImpactSection;
