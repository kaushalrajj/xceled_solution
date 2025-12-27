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
    <section className="w-full mt-32 pb-36">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="max-w-2xl mb-20">
          <p className="uppercase tracking-[0.3em] text-xs text-sky-500 font-medium">
            Our Impact
          </p>

          <h2 className="text-[30px] md:text-[36px] lg:text-[42px] font-semibold text-slate-800 mt-3 leading-tight">
            Learning That Extends Beyond the Classroom
          </h2>

          <p className="text-slate-600 mt-4 leading-relaxed text-[15.5px]">
            Through hands-on programs, institutional collaboration, and guided learning,
            we focus on building capability, confidence, and practical understanding.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {impacts.map((item, index) => (
            <div
              key={index}
              className="
                group bg-white/70 backdrop-blur-sm
                border border-slate-100
                rounded-2xl overflow-hidden
                shadow-sm
                transition-all duration-500 ease-out
                hover:-translate-y-2 hover:shadow-lg
              "
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="
                    w-full h-64 object-cover object-center
                    transition-transform duration-[1600ms] ease-out
                    group-hover:scale-[1.06]
                  "
                />

                <div
                  className="
                    absolute inset-0
                    bg-gradient-to-t from-black/10 to-transparent
                    opacity-0 group-hover:opacity-100
                    transition-opacity duration-500
                  "
                />
              </div>

              {/* Text */}
              <div className="p-6 space-y-2">
                <h3 className="text-[17px] font-semibold text-slate-800">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ImpactSection;
