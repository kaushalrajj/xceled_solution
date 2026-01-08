import { useEffect, useState } from "react";

/* ===== MAIN CARD IMAGES ===== */
import t0 from "../../assets/images/products/t0.webp";
import t1 from "../../assets/images/products/t1.webp";
import t2 from "../../assets/images/products/t2.webp";
import t3 from "../../assets/images/products/t3.webp";

/* ===== PRODUCT IMAGES ===== */
import coinTube from "../../assets/images/products/Coin-Tube.jpg";
import smdLed from "../../assets/images/products/SMD-LED.jpg";
import led3mm from "../../assets/images/products/3MM-LED.jpg";
import led5mm from "../../assets/images/products/5MM-LED.jpg";
import arudions from "../../assets/images/products/Arudions-Modules.jpg";
import charging from "../../assets/images/products/Charging-Modules.jpg";
import sensor from "../../assets/images/products/Sensor.jpg";
import motor from "../../assets/images/products/Motor-Accessories.jpg";
import wheels from "../../assets/images/products/Wheels.jpg";
import batteries from "../../assets/images/products/Batteries.jpg";
import drones from "../../assets/images/products/Drones.jpg";
import domComLed from "../../assets/images/products/DOM-COM-LED.jpg";

const products = [
  { img: led3mm, title: "3MM LED", desc: "LEDs for basic electronics learning." },
  { img: led5mm, title: "5MM LED", desc: "High brightness LEDs for experiments." },
  { img: smdLed, title: "SMD LED", desc: "Surface mount LEDs for PCB practice." },
  { img: arudions, title: "Arduino Modules", desc: "Microcontroller learning modules." },
  { img: batteries, title: "Batteries", desc: "Reliable power sources for kits." },
  { img: charging, title: "Charging Modules", desc: "Battery charging solutions." },
  { img: coinTube, title: "Coin Tubes", desc: "Component storage solutions." },
  { img: domComLed, title: "Discrete LEDs", desc: "Lab-grade LED components." },
  { img: motor, title: "Motors & Accessories", desc: "Mechanical components." },
  { img: wheels, title: "Wheels", desc: "Robotics motion systems." },
  { img: sensor, title: "Sensors", desc: "Real-world data acquisition." },
  { img: drones, title: "Educational Drones", desc: "Advanced STEM learning kits." },
];

const Products = () => {
  const [index, setIndex] = useState(0);

  /* ===== SLIDER ===== */
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % products.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-sky-50/60 via-white to-white">
      {/* Ambient background accent */}
      <div className="absolute top-1/4 -left-40 w-[420px] h-[420px] bg-sky-200/30 rounded-full blur-3xl pointer-events-none" />

      {/* ================= HERO ================= */}
      <div className="relative max-w-7xl mx-auto px-6 pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20 lg:pb-24">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-5 sm:mb-6">
          Educational Lab Kits
        </h1>

        <p className="text-base sm:text-lg text-slate-600 max-w-4xl leading-relaxed">
          Our Educational Lab Kits are thoughtfully designed STEM learning
          solutions that promote structured experimentation, conceptual clarity,
          and practical understanding across Robotics, Physics, Chemistry, and
          Biology disciplines.
        </p>

        <div className="mt-6 rounded-xl px-6 py-4 text-center bg-white/80 backdrop-blur-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
          <p className="text-sm font-semibold text-slate-800 mb-1">
            Bulk Orders • Customization • Installation Support
          </p>
          <p className="text-sm text-slate-600">
            info@ekwiksolution.com | www.ekwiksolution.com
          </p>
        </div>
      </div>

      {/* ================= LAB KIT CARDS ================= */}
      <section className="mb-16 sm:mb-24 lg:mb-28">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
          {[
            {
              img: t0,
              title: "Robotics & DIY Lab Kits",
              points: [
                "Bluetooth Controlled Car",
                "Obstacle Avoiding Robot",
                "Line Follower Robot",
                "Solar DIY Projects",
                "Reusable Components",
              ],
              best: "Classes 6–12, STEM Labs",
            },
            {
              img: t1,
              title: "Physics Lab Kits",
              points: [
                "Mechanics & Pulley Systems",
                "Optics Experiments",
                "Electricity & Magnetism",
                "Measurement Instruments",
              ],
              best: "Secondary & Senior Secondary",
            },
            {
              img: t2,
              title: "Chemistry Lab Kits",
              points: [
                "Glassware & Apparatus",
                "Titration Setups",
                "Safe Chemicals",
                "Lab Safety Gear",
              ],
              best: "Middle to Senior Secondary",
            },
            {
              img: t3,
              title: "Biology Lab Kits",
              points: [
                "Anatomy Models",
                "Prepared Slides",
                "Microscopes",
                "Plant Growth Kits",
              ],
              best: "Classes 6–12, NEET Foundation",
            },
          ].map((card, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl shadow-md transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
            >
              <div className="overflow-hidden rounded-t-3xl">
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-56 sm:h-60 object-cover transition-transform duration-700 hover:scale-[1.05]"
                />
              </div>

              <div className="p-6 sm:p-8">
                <h3 className="text-lg sm:text-xl font-semibold mb-4">
                  {card.title}
                </h3>

                <ul className="list-disc pl-5 text-slate-600 space-y-1 mb-4 text-sm">
                  {card.points.map((p, j) => (
                    <li key={j}>{p}</li>
                  ))}
                </ul>

                <p className="text-sm text-slate-500">
                  Best for: {card.best}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= COMPONENTS SLIDER ================= */}
      <section className="bg-sky-50/60 py-14 sm:py-20 lg:py-24 mb-16 sm:mb-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-8 sm:mb-12">
            Components & Accessories
          </h2>

          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${index * 320}px)` }}
            >
              {[...products, ...products].map((item, i) => (
                <div key={i} className="min-w-[280px] sm:min-w-[300px] mr-5 sm:mr-6">
                  <div className="bg-white rounded-2xl p-4 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-36 sm:h-40 object-cover rounded-lg mb-4 transition-transform duration-500 hover:scale-[1.05]"
                    />
                    <h3 className="font-semibold text-sm sm:text-base">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-600">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Products;
