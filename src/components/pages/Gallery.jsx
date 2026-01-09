import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

/* ================= UPDATED GALLERY IMAGES (1200 × 900) ================= */
import img1 from "../../assets/images/gallery/1.webp";
import img2 from "../../assets/images/gallery/2.webp";
import img3 from "../../assets/images/gallery/3.webp";
import img4 from "../../assets/images/gallery/4.webp";
import img5 from "../../assets/images/gallery/5.webp";
import img6 from "../../assets/images/gallery/6.webp";
import img7 from "../../assets/images/gallery/7.webp";
import img8 from "../../assets/images/gallery/8.webp";
import img9 from "../../assets/images/gallery/9.webp";
import img10 from "../../assets/images/gallery/10.webp";
import img11 from "../../assets/images/gallery/11.webp";

/* ================= DATA ================= */
const galleryItems = [
  { title: "Institutional Training Session", image: img1 },
  { title: "Student Engagement Workshop", image: img2 },
  { title: "Hands-on Learning Program", image: img3 },
  { title: "Classroom Interaction", image: img4 },
  { title: "Skill Development Session", image: img5 },
  { title: "Educational Outreach Program", image: img6 },
  { title: "Collaborative Learning Activity", image: img7 },
  { title: "Training & Mentorship", image: img8 },
  { title: "On-Ground Program Highlights", image: img9 },
  { title: "Institutional Group Interaction", image: img10 },
  { title: "Program Completion Snapshot", image: img11 },
];

/* ================= COMPONENT ================= */
const Gallery = () => {
  const [activeImage, setActiveImage] = useState(null);

  /* ESC key closes fullscreen */
  useEffect(() => {
    const escHandler = (e) => e.key === "Escape" && setActiveImage(null);
    window.addEventListener("keydown", escHandler);
    return () => window.removeEventListener("keydown", escHandler);
  }, []);

  return (
    <>
      {/* ================= PAGE ================= */}
      <section className="w-full pt-36 pb-32 bg-gradient-to-b from-sky-50/40 via-white to-white">
        <div className="max-w-7xl mx-auto px-6">

          {/* HEADER */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mb-24 max-w-3xl"
          >
            <h1 className="text-5xl md:text-6xl font-semibold text-sky-800 mb-7">
              Gallery
            </h1>
            <div className="w-20 h-[2px] bg-sky-500 mb-7 rounded-full" />
            <p className="text-slate-600 text-xl leading-relaxed">
              A professional visual showcase highlighting our institutional
              programs, student engagement activities, and on-ground training
              initiatives across multiple regions.
            </p>
          </motion.div>

          {/* GRID */}
          <h2 className="text-3xl font-semibold text-slate-800 mb-14">
            Program Highlights
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {galleryItems.map((item, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, ease: "easeOut" }}
                whileHover={{
                  y: -6,
                  boxShadow: "0 28px 55px rgba(0,0,0,0.10)",
                }}
                onClick={() => setActiveImage(item)}
                className="cursor-zoom-in bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden transition-all"
              >
                {/* IMAGE */}
                <div className="aspect-[4/3] bg-slate-50 flex items-center justify-center overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.04]"
                  />
                </div>

                {/* TITLE */}
                <div className="px-6 py-5 border-t border-slate-100">
                  <h3 className="font-medium text-lg text-slate-800 tracking-wide">
                    {item.title}
                  </h3>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FULLSCREEN VIEW ================= */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-24 bottom-8 z-[9999]
                       bg-black/90 flex items-center justify-center px-6"
            onClick={() => setActiveImage(null)}
          >
            {/* CLOSE BUTTON */}
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-6 right-6 z-50
                         bg-black/60 hover:bg-black/80
                         text-white p-3 rounded-full transition"
              aria-label="Close image"
            >
              <X className="w-6 h-6" />
            </button>

            {/* FULL IMAGE */}
            <motion.img
              src={activeImage.image}
              alt={activeImage.title}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="max-w-[94%] max-h-[90%] object-contain rounded-xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Gallery;
