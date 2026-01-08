import React, { useState, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import {
  Target,
  Eye,
  Languages,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

/* ================= ASSETS ================= */
import aboutImg from "../../assets/images/hero/edit2.webp";
import directorImg from "../../assets/images/hero/director.webp";

/* ================= TEAM IMAGES ================= */
import team1 from "../../assets/images/gallery/team1.jpg";
import team2 from "../../assets/images/gallery/team2.jpg";
import team3 from "../../assets/images/gallery/team3.jpg";
import team4 from "../../assets/images/gallery/team4.jpg";
import team5 from "../../assets/images/gallery/team5.jpg";
import team6 from "../../assets/images/gallery/team6.jpg";
import team7 from "../../assets/images/gallery/team7.jpg";
import team8 from "../../assets/images/gallery/team8.jpg";
import team9 from "../../assets/images/gallery/team9.jpg";
import team10 from "../../assets/images/gallery/team10.jpg";
import team11 from "../../assets/images/gallery/team11.jpg";
import team12 from "../../assets/images/gallery/team12.jpg";
import team13 from "../../assets/images/gallery/team13.jpg";
import team14 from "../../assets/images/gallery/team14.jpg";
import team15 from "../../assets/images/gallery/team15.jpg";

/* ================= COMPONENT ================= */
const About = () => {
  const shouldReduceMotion = useReducedMotion();
  const cardRef = useRef(null);

  /* ================= ANIMATIONS ================= */
  const fadeUp = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: shouldReduceMotion ? 0 : 0.6, ease: "easeOut" },
    },
  };

  const softHover = shouldReduceMotion
    ? {}
    : {
        whileHover: {
          y: -4,
          boxShadow: "0 18px 40px rgba(0,0,0,0.08)",
          transition: { duration: 0.25 },
        },
      };

  /* ================= LANGUAGE STATES ================= */
  const [missionLang, setMissionLang] = useState("en");
  const [visionLang, setVisionLang] = useState("en");
  const [founderLang, setFounderLang] = useState("en");

  /* ================= CONTENT ================= */
  const mission = {
    en: `Our mission is to empower the youth of India through quality education,
skill-based training, and meaningful career guidance. We believe education
is not a business, but a service to the nation.

Driven by purpose rather than profit, our initiatives focus on nurturing
confidence, self-reliance, ethical values, and industry-relevant skills.
Through structured learning and practical exposure, we prepare individuals
to contribute responsibly to society and national development.`,
    hi: `हमारा उद्देश्य गुणवत्तापूर्ण शिक्षा, कौशल-आधारित प्रशिक्षण और
सार्थक करियर मार्गदर्शन के माध्यम से भारत के युवाओं को सशक्त बनाना है।
हम मानते हैं कि शिक्षा कोई व्यवसाय नहीं, बल्कि राष्ट्र की सेवा है।

लाभ के बजाय उद्देश्य से प्रेरित होकर, हमारी पहल आत्मविश्वास,
आत्मनिर्भरता, नैतिक मूल्यों और उद्योग-संबंधित कौशलों के विकास पर केंद्रित है।
संरचित शिक्षण और व्यावहारिक अनुभव के माध्यम से, हम व्यक्तियों को
समाज और राष्ट्रीय विकास में जिम्मेदारीपूर्वक योगदान देने के लिए तैयार करते हैं।`,
  };

  const vision = {
    en: `Our vision is to ensure that every learner who aspires to grow and
serve the nation receives access to the right training, mentorship,
and opportunities.

Aligned with the PMEGP framework, we work toward employment generation,
innovation, and self-reliance — building a future where skilled individuals
emerge as long-term contributors to India’s socio-economic progress.`,
    hi: `हमारा दृष्टिकोण यह सुनिश्चित करना है कि प्रत्येक शिक्षार्थी,
जो आगे बढ़ना चाहता है और राष्ट्र की सेवा करना चाहता है,
उसे उपयुक्त प्रशिक्षण, मार्गदर्शन और अवसरों तक पहुँच प्राप्त हो।

PMEGP ढांचे के अनुरूप, हम रोजगार सृजन, नवाचार और आत्मनिर्भरता की दिशा में कार्य करते हैं —
एक ऐसे भविष्य का निर्माण करते हुए जहाँ कुशल व्यक्ति
भारत की सामाजिक-आर्थिक प्रगति में दीर्घकालिक योगदानकर्ता बनें।`,
  };

  const founder = {
    en: `XCELED Solutions was founded with a clear objective — to bridge the gap
between talent and opportunity through structured, skill-based education.

Across India, many students possess potential but lack access to the right
guidance, exposure, and platforms. Our work focuses on clarity, confidence,
and real-world readiness through technical training, aptitude development,
career counseling, and creative learning.

Our collaborations with PM SHRI schools and Jawahar Navodaya Vidyalayas
reflect our commitment to inclusive growth, institutional trust, and
long-term national impact.`,
    hi: `XCELED Solutions की स्थापना एक स्पष्ट उद्देश्य के साथ की गई थी —
संरचित और कौशल-आधारित शिक्षा के माध्यम से प्रतिभा और अवसर के बीच की खाई को पाटना।

भारत भर में अनेक छात्र-छात्राओं में क्षमता होती है, लेकिन उन्हें
उचित मार्गदर्शन, व्यावहारिक अनुभव और सही मंचों तक पहुँच नहीं मिल पाती।
हमारा कार्य तकनीकी प्रशिक्षण, योग्यता विकास, करियर परामर्श
और रचनात्मक शिक्षण के माध्यम से स्पष्टता, आत्मविश्वास
और वास्तविक दुनिया की तैयारी पर केंद्रित है।

PM SHRI विद्यालयों और जवाहर नवोदय विद्यालयों के साथ हमारा सहयोग
समावेशी विकास, संस्थागत विश्वास और
दीर्घकालिक राष्ट्रीय प्रभाव के प्रति हमारी प्रतिबद्धता को दर्शाता है।`,
  };

  /* ================= TEAM DATA ================= */
  const teamMembers = [
    { name: "Team Member 1", role: "Training Lead", image: team1 },
    { name: "Team Member 2", role: "Academic Advisor", image: team2 },
    { name: "Team Member 3", role: "Operations", image: team3 },
    { name: "Team Member 4", role: "Program Manager", image: team4 },
    { name: "Team Member 5", role: "Coordinator", image: team5 },
    { name: "Team Member 6", role: "Technical Trainer", image: team6 },
    { name: "Team Member 7", role: "Mentor", image: team7 },
    { name: "Team Member 8", role: "Faculty Support", image: team8 },
    { name: "Team Member 9", role: "Outreach", image: team9 },
    { name: "Team Member 10", role: "Academic Support", image: team10 },
    { name: "Team Member 11", role: "Coordinator", image: team11 },
    { name: "Team Member 12", role: "Trainer", image: team12 },
    { name: "Team Member 13", role: "Advisor", image: team13 },
    { name: "Team Member 14", role: "Assistant Trainer", image: team14 },
    { name: "Team Member 15", role: "Support Staff", image: team15 },
  ];

  /* ================= TEAM SLIDER ================= */
  const [index, setIndex] = useState(0);

  const next = useCallback(
    () => setIndex((p) => (p + 1) % teamMembers.length),
    [teamMembers.length]
  );

  const prev = useCallback(
    () => setIndex((p) => (p === 0 ? teamMembers.length - 1 : p - 1)),
    [teamMembers.length]
  );

  const getTranslateX = () => {
    if (!cardRef.current) return 0;
    return index * (cardRef.current.offsetWidth + 40);
  };

  return (
    <section className="relative w-full pt-20 sm:pt-24 pb-20 sm:pb-24 bg-slate-50 text-slate-800">
      {/* ================= INTRO ================= */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="max-w-5xl mx-auto px-6 mb-16 sm:mb-24"
      >
        <div className="bg-white rounded-3xl px-8 sm:px-12 py-10 sm:py-14 text-center shadow-sm border border-slate-200">
          <p className="uppercase tracking-[0.3em] text-sm font-bold text-sky-600 mb-4 sm:mb-6">
            About Us
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            About <span className="text-sky-600">XCELED Solutions</span>
          </h1>
          <p className="text-sm sm:text-lg text-slate-600 max-w-3xl mx-auto leading-[1.7]">
            A PMEGP-supported, MSME-registered, women-led initiative dedicated
            to skill development, entrepreneurship, and employment-oriented
            education across India.
          </p>
        </div>
      </motion.div>

      {/* ================= WHO WE ARE ================= */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-8 sm:gap-16 items-center mb-12 sm:mb-24"
      >
        <div>
          <p className="uppercase tracking-widest text-sm font-bold text-sky-600 mb-3">
            Who We Are
          </p>
          <h2 className="text-xl sm:text-3xl font-bold mb-4 leading-snug">
            Bridging education with
            <span className="text-sky-600"> real-world employability</span>
          </h2>
          <p className="text-slate-600 leading-[1.65] mb-3">
            XCELED Solutions works at the intersection of education, skill
            development, and employability, collaborating with institutions and
            learners to convert academic learning into practical capability.
          </p>
          <p className="text-slate-600 leading-[1.65]">
            Our programs emphasize structured training, outcome-oriented
            learning, and long-term capability building aligned with
            institutional and national development frameworks.
          </p>
        </div>

        <motion.div {...softHover}>
          <img
            src={aboutImg}
            alt="XCELED environment"
            className="rounded-3xl shadow-lg w-full object-cover"
          />
        </motion.div>
      </motion.div>

      {/* ================= MISSION & VISION ================= */}
      {/* ONLY THIS SECTION SPACING IS FIXED FOR MOBILE */}
      <div className="bg-sky-50/60 py-12 sm:py-24 mb-12 sm:mb-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8 sm:gap-16">
          {[
            {
              title: "Our Mission",
              icon: <Target className="w-6 h-6 text-sky-600" />,
              text: mission,
              lang: missionLang,
              setLang: setMissionLang,
            },
            {
              title: "Our Vision",
              icon: <Eye className="w-6 h-6 text-sky-600" />,
              text: vision,
              lang: visionLang,
              setLang: setVisionLang,
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              {...softHover}
              className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-slate-200"
            >
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-3">
                  {item.icon}
                  <h3 className="text-2xl font-bold">{item.title}</h3>
                </div>
                <button
                  onClick={() =>
                    item.setLang((p) => (p === "en" ? "hi" : "en"))
                  }
                  className="flex items-center gap-2 text-sm px-4 py-1.5 rounded-full border border-slate-300 text-slate-600 hover:bg-slate-50 transition"
                >
                  <Languages className="w-4 h-4" />
                  {item.lang === "en" ? "हिंदी" : "EN"}
                </button>
              </div>
              <p className="text-slate-600 leading-[1.75] whitespace-pre-line">
                {item.text[item.lang]}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ================= FOUNDER MESSAGE ================= */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-12 sm:py-24 mb-12 sm:mb-24"
      >
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 sm:gap-16 items-center bg-white rounded-3xl p-10 sm:p-14 shadow-sm border border-slate-200">
          <motion.div {...softHover} className="flex justify-center">
            <img
              src={directorImg}
              alt="Founder"
              className="w-[280px] sm:w-[300px] h-[360px] sm:h-[400px] object-cover rounded-[2.5rem] shadow-lg"
            />
          </motion.div>
          <div>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl sm:text-3xl font-bold">
                Founder’s Message
              </h3>
              <button
                onClick={() =>
                  setFounderLang((p) => (p === "en" ? "hi" : "en"))
                }
                className="flex items-center gap-2 text-sm px-4 py-1.5 rounded-full border border-slate-300 text-slate-600 hover:bg-slate-50 transition"
              >
                <Languages className="w-4 h-4" />
                {founderLang === "en" ? "हिंदी" : "EN"}
              </button>
            </div>
            <p className="text-slate-600 leading-[1.8] whitespace-pre-line mb-6">
              {founder[founderLang]}
            </p>
            <div className="border-t pt-4">
              <p className="font-medium">Moni Kumari</p>
              <p className="text-sm text-slate-500">
                Founder & Director, XCELED Solutions
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* ================= TEAM ================= */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 mb-12 sm:mb-24"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-14">
          Our Team
        </h2>

        <div className="overflow-hidden">
          <motion.div
            animate={{ x: `-${getTranslateX()}px` }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="flex gap-6 sm:gap-10"
          >
            {teamMembers.map((m, i) => (
              <motion.div
                ref={i === 0 ? cardRef : null}
                key={i}
                {...softHover}
                className="min-w-[85vw] sm:min-w-[360px] bg-white rounded-3xl p-8 text-center shadow-sm border border-slate-200"
              >
                <div className="w-40 h-40 sm:w-44 sm:h-44 mx-auto mb-5 rounded-2xl overflow-hidden">
                  <img
                    src={m.image}
                    alt={m.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-lg font-semibold">{m.name}</h4>
                <p className="text-sm text-slate-500">{m.role}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="flex justify-center gap-6 mt-10 sm:mt-14">
          <button
            onClick={prev}
            className="p-3 rounded-full border border-slate-300 hover:bg-slate-100 transition"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={next}
            className="p-3 rounded-full border border-slate-300 hover:bg-slate-100 transition"
          >
            <ChevronRight />
          </button>
        </div>
      </motion.section>

      {/* ================= FINAL CTA ================= */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-5xl mx-auto px-6 text-center py-12 sm:py-16 bg-slate-100 rounded-3xl"
      >
        <h3 className="text-2xl sm:text-4xl font-bold mb-5">
          Empowering learners today,
          <br className="hidden md:block" />
          shaping responsible nation builders for tomorrow
        </h3>
        <p className="text-sm sm:text-lg text-slate-600 max-w-3xl mx-auto mb-8">
          Partner with us in creating meaningful, institution-aligned
          educational impact across India.
        </p>
        <div className="flex justify-center gap-4 sm:gap-5">
          <Link
            to="/services"
            className="px-8 py-3 rounded-full bg-sky-600 text-white hover:bg-sky-700 transition"
          >
            Explore Our Programs
          </Link>
          <Link
            to="/contact"
            className="px-8 py-3 rounded-full border border-sky-600 text-sky-600 hover:bg-sky-50 transition"
          >
            Partner With Us
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
