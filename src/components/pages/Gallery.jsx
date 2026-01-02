import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

/* ================= INSTITUTIONAL GALLERY IMAGES ================= */
import alirajpur from "../../assets/images/gallery/JNV Alirajpur.jpg";
import arariya from "../../assets/images/gallery/JNV Arariya.jpg";
import bankura from "../../assets/images/gallery/Jnv Bankura.jpg";
import chatra from "../../assets/images/gallery/JNV Chatra.jpg";
import diu from "../../assets/images/gallery/Jnv Diu.jpg";
import eastKameng from "../../assets/images/gallery/JNV East Kameng.jpg";
import jaisalmer from "../../assets/images/gallery/JNV Jaisalmer.jpg";
import malkangiri from "../../assets/images/gallery/JNV Malkangiri.jpg";
import navsar from "../../assets/images/gallery/JNV Navsar.jpg";
import neemuch from "../../assets/images/gallery/JNV Neemuch.jpg";
import raygada from "../../assets/images/gallery/Jnv Raygada.jpg";
import garoHills from "../../assets/images/gallery/JNV South West Garo Hills.jpg";
import subansiri from "../../assets/images/gallery/JNV Upper Subansiri.jpg";

/* ================= DATA ================= */
const galleryItems = [
  { title: "JNV Alirajpur", image: alirajpur },
  { title: "JNV Arariya", image: arariya },
  { title: "JNV Bankura", image: bankura },
  { title: "JNV Chatra", image: chatra },
  { title: "JNV Diu", image: diu },
  { title: "JNV East Kameng", image: eastKameng },
  { title: "JNV Jaisalmer", image: jaisalmer },
  { title: "JNV Malkangiri", image: malkangiri },
  { title: "JNV Navsar", image: navsar },
  { title: "JNV Neemuch", image: neemuch },
  { title: "JNV Raygada", image: raygada },
  { title: "JNV South West Garo Hills", image: garoHills },
  { title: "JNV Upper Subansiri", image: subansiri },
];

/* ================= COMPONENT ================= */
const Gallery = () => {
  const [activeImage, setActiveImage] = useState(null);

  /* ESC to close fullscreen */
  useEffect(() => {
    const esc = (e) => e.key === "Escape" && setActiveImage(null);
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
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
            <h1 className="text-4xl md:text-5xl font-semibold text-sky-800 mb-6">
              Gallery
            </h1>
            <div className="w-20 h-[2px] bg-sky-500 mb-6 rounded-full" />
            <p className="text-slate-600 text-lg leading-relaxed">
              A curated visual journal capturing our institutional engagements,
              on-ground training programs, and educational initiatives across
              diverse regions of India.
            </p>
          </motion.div>

          {/* GRID */}
          <h2 className="text-2xl font-semibold text-slate-800 mb-12">
            Institutional Engagements
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {galleryItems.map((item, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, ease: "easeOut" }}
                whileHover={{
                  y: -6,
                  boxShadow: "0 22px 45px rgba(0,0,0,0.08)",
                }}
                onClick={() => setActiveImage(item)}
                className="cursor-zoom-in bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden"
              >
                <div className="aspect-[4/5] bg-slate-50 flex items-center justify-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="max-w-full max-h-full object-contain transition-transform duration-500 hover:scale-[1.02]"
                    loading="lazy"
                  />
                </div>

                <div className="px-5 py-4 border-t border-slate-100">
                  <h3 className="font-medium text-slate-800 tracking-wide">
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
                         text-white p-2 rounded-full
                         transition"
              aria-label="Close image"
            >
              <X className="w-5 h-5" />
            </button>

            {/* IMAGE */}
            <motion.img
              src={activeImage.image}
              alt={activeImage.title}
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="max-w-[92%] max-h-[88%] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Gallery;
