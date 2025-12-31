// import { useEffect, useRef } from "react";

// /* ================= IMAGES ================= */
// import heroImg from "../../../assets/images/services/k2.webp";
// import whyImg from "../../../assets/images/services/k3.webp";

// /* ================= ICONS ================= */
// import {
//   FlaskConical,
//   Cpu,
//   Calculator,
//   Palette,
//   BookOpen,
//   GraduationCap,
//   FileText,
//   ShieldCheck,
//   Users,
//   Award,
//   CheckCircle,
// } from "lucide-react";

// const EducationalKits = () => {
//   const sectionRefs = useRef([]);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add("opacity-100", "translate-y-0");
//           }
//         });
//       },
//       { threshold: 0.25 }
//     );

//     sectionRefs.current.forEach((el) => el && observer.observe(el));
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <div className="w-full bg-gradient-to-b from-sky-50 via-white to-white">

//       {/* ================= HERO ================= */}
//       <section
//         className="relative pt-32 pb-28"
//         style={{
//           backgroundImage: `linear-gradient(rgba(15,23,42,0.65), rgba(15,23,42,0.65)), url(${heroImg})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       >
//         <div className="max-w-7xl mx-auto px-6 text-center text-white">
//           <h1 className="text-4xl md:text-5xl font-bold mb-6">
//             Educational Kits
//           </h1>
//           <p className="max-w-3xl mx-auto text-lg text-slate-200">
//             Empowering learning through hands-on, experiential educational kits
//             designed to spark curiosity, creativity, and conceptual clarity.
//           </p>
//         </div>
//       </section>

//       {/* ================= INTRO ================= */}
//       <section
//         ref={(el) => (sectionRefs.current[0] = el)}
//         className="max-w-7xl mx-auto px-6 py-24 opacity-0 translate-y-10 transition-all duration-1000"
//       >
//         <div className="bg-sky-50 rounded-3xl px-10 py-16 text-center">
//           <h2 className="text-2xl font-semibold text-slate-900 mb-6">
//             Empowering Learning Through Hands-On Experience
//           </h2>
//           <p className="max-w-4xl mx-auto text-slate-600 leading-relaxed">
//             At Xcelled Solutions, we believe that experiential learning is the
//             key to fostering curiosity and innovation among students. Our
//             meticulously designed Educational Kits provide practical tools that
//             complement theoretical knowledge, enabling learners to explore,
//             experiment, and excel in various subjects.
//           </p>
//         </div>
//       </section>

//       {/* ================= OUR EDUCATIONAL KITS ================= */}
//       <section
//         ref={(el) => (sectionRefs.current[1] = el)}
//         className="max-w-7xl mx-auto px-6 pb-28 opacity-0 translate-y-10 transition-all duration-1000"
//       >
//         <h2 className="text-2xl font-semibold text-center mb-14">
//           Our Educational Kits
//         </h2>

//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {[
//             {
//               icon: FlaskConical,
//               title: "Science Exploration Kits",
//               points: [
//                 "Interactive experiments covering physics, chemistry, and biology",
//                 "Safe and durable materials",
//                 "Real-world application projects",
//               ],
//             },
//             {
//               icon: Cpu,
//               title: "Robotics and IoT Kits",
//               points: [
//                 "Introduction to automation and connectivity",
//                 "Basic to advanced robotics components",
//                 "Programming guides and tools",
//               ],
//             },
//             {
//               icon: Calculator,
//               title: "Mathematics Learning Kits",
//               points: [
//                 "Hands-on activities for abstract concepts",
//                 "Problem-solving manipulatives",
//                 "Visual aids for complex topics",
//               ],
//             },
//             {
//               icon: Palette,
//               title: "Art and Creativity Kits",
//               points: [
//                 "Encourages artistic expression",
//                 "Wide variety of art supplies",
//                 "Cross-subject integration",
//               ],
//             },
//           ].map((item, i) => (
//             <div
//               key={i}
//               className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
//             >
//               <item.icon className="w-10 h-10 text-sky-600 mb-5" />
//               <h3 className="font-semibold text-lg mb-4">{item.title}</h3>
//               <ul className="space-y-2 text-sm text-slate-600">
//                 {item.points.map((p, idx) => (
//                   <li key={idx} className="flex gap-2">
//                     <CheckCircle className="w-4 h-4 text-sky-500 mt-0.5" />
//                     {p}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* ================= KEY FEATURES ================= */}
//       <section
//         ref={(el) => (sectionRefs.current[2] = el)}
//         className="bg-slate-50 py-24 opacity-0 translate-y-10 transition-all duration-1000"
//       >
//         <div className="max-w-7xl mx-auto px-6">
//           <h2 className="text-2xl font-semibold text-center mb-14">
//             Key Features
//           </h2>

//           <div className="grid md:grid-cols-4 gap-10 text-center">
//             {[
//               { icon: BookOpen, title: "Curriculum-Aligned" },
//               { icon: GraduationCap, title: "Age-Appropriate Design" },
//               { icon: FileText, title: "Comprehensive Resources" },
//               { icon: ShieldCheck, title: "Quality Assurance" },
//             ].map((f, i) => (
//               <div key={i}>
//                 <f.icon className="w-10 h-10 text-sky-600 mx-auto mb-4" />
//                 <h4 className="font-medium text-slate-800">{f.title}</h4>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ================= WHY CHOOSE US ================= */}
//       <section
//         ref={(el) => (sectionRefs.current[3] = el)}
//         className="max-w-7xl mx-auto px-6 py-28 opacity-0 translate-y-10 transition-all duration-1000"
//       >
//         <div className="grid lg:grid-cols-2 gap-16 items-center">
//           <div>
//             <h2 className="text-2xl font-semibold mb-8">
//               Why Choose Xcelled Solutions?
//             </h2>

//             <div className="space-y-6 text-slate-600">
//               <p className="flex gap-3">
//                 <Award className="text-sky-600" /> Expertly crafted by educators
//                 and industry professionals
//               </p>
//               <p className="flex gap-3">
//                 <Users className="text-sky-600" /> Suitable for classrooms,
//                 workshops, and home learning
//               </p>
//               <p className="flex gap-3">
//                 <CheckCircle className="text-sky-600" /> Promotes active
//                 participation and critical thinking
//               </p>
//               <p className="flex gap-3">
//                 <ShieldCheck className="text-sky-600" /> Training sessions and
//                 ongoing support available
//               </p>
//             </div>
//           </div>

//           <div className="relative">
//             <img
//               src={whyImg}
//               alt="Educational kits in use"
//               className="rounded-2xl shadow-xl hover:scale-[1.02] transition-transform duration-300"
//             />
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default EducationalKits;

import React from 'react'

const EducationalKits = () => {
  return (
    <div>
      
    </div>
  )
}

export default EducationalKits

