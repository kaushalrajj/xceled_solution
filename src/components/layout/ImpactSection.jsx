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
        mt-24 sm:mt-28 md:mt-32
        pb-28 sm:pb-36 md:pb-40
        overflow-hidden
      "
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">

        {/* ================= HEADER ================= */}
        <header className="max-w-2xl mb-18 sm:mb-22 md:mb-26 space-y-6">
          <div className="flex items-center gap-4">
            <span className="block w-10 h-[3px] bg-sky-500 rounded-full" />
            <p className="uppercase tracking-[0.38em] text-[0.7rem] sm:text-[0.75rem] font-semibold text-sky-600">
              Our Impact
            </p>
          </div>

          <h2
            className="
              font-semibold tracking-tight
              text-slate-800
              text-[clamp(2.1rem,4.3vw,2.85rem)]
              leading-[1.18]
            "
          >
            Measurable Learning. Meaningful Outcomes.
          </h2>

          <p
            className="
              text-slate-600
              leading-[1.8]
              text-[1.02rem]
            "
          >
            Our initiatives focus on delivering tangible educational outcomes
            through hands-on engagement, institutional collaboration, and guided
            skill development — extending learning beyond classrooms into
            real-world readiness.
          </p>
        </header>

        {/* ================= GRID ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-12 sm:gap-x-14 gap-y-16 sm:gap-y-20">

          {impacts.map((item, index) => (
            <article
              key={index}
              className="
                group relative
                transition-transform duration-300 ease-out
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
                    transition-transform duration-[1400ms] ease-out
                    group-hover:scale-[1.04]
                  "
                />

                {/* Depth overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent opacity-60" />
              </div>

              {/* CONTENT */}
              <div className="pt-5">
                <h3 className="text-[1.05rem] font-semibold text-slate-800 mb-2">
                  {item.title}
                </h3>

                <p className="text-slate-600 text-[0.97rem] leading-[1.75]">
                  {item.desc}
                </p>
              </div>

              {/* BRAND ACCENT */}
              <span
                className="
                  absolute -bottom-3 left-0
                  h-[3px] w-0
                  bg-sky-500
                  transition-all duration-500
                  group-hover:w-14
                "
              />
            </article>
          ))}

        </div>
      </div>

      {/* ================= DECORATIVE BACKDROP ================= */}
      <div className="absolute -top-24 -right-24 w-[320px] h-[320px] sm:w-[380px] sm:h-[380px] bg-sky-200/35 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
};

export default ImpactSection;
