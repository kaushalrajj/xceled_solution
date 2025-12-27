import impactEducation from "../../assets/images/hero/i1.webp";
import impactClassroom from "../../assets/images/hero/i2.webp";
import impactTeaching from "../../assets/images/hero/i3.webp";
import impactWorkshop from "../../assets/images/hero/i4.webp";
const impacts = [
  {
    image: impactEducation,
    title: "Empowering Young Learners",
    desc: "Hands-on learning environments that encourage curiosity, confidence, and active participation.",
  },
  {
    image: impactClassroom,
    title: "Institutional Engagement",
    desc: "Active collaboration with schools and institutions to deliver structured skill-based programs.",
  },
  {
    image: impactWorkshop,
    title: "Practical Skill Development",
    desc: "Workshops designed to bridge the gap between theoretical concepts and real-world application.",
  },
  {
    image: impactTeaching,
    title: "Mentorship & Guidance",
    desc: "Focused mentoring that nurtures clarity, discipline, and long-term career thinking.",
  },
];

const ImpactSection = () => {
  return (
    <section className="w-full mt-32 pb-36">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="max-w-2xl mb-20">
          <p className="uppercase tracking-widest text-sm text-sky-500 font-medium">
            Our Impact
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-slate-800 mt-3">
            Creating Meaningful Learning Experiences
          </h2>
          <p className="text-slate-600 mt-4 leading-relaxed">
            Our initiatives focus on real engagement, practical exposure, and inclusive
            learning environments that help individuals grow with confidence.
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
              {/* Image wrapper */}
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

                {/* subtle overlay for depth */}
                <div className="
                  absolute inset-0
                  bg-gradient-to-t from-black/10 to-transparent
                  opacity-0 group-hover:opacity-100
                  transition-opacity duration-500
                " />
              </div>

              {/* Text */}
              <div className="p-6 space-y-2">
                <h3 className="text-lg font-semibold text-slate-800">
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
