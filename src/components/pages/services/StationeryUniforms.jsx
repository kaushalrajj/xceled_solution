import { Link } from "react-router-dom";
import ServiceLayout from "./ServiceLayout";

/* ================= ICONS ================= */
import {
  PenTool,
  Shirt,
  Backpack,
  CheckCircle,
  Settings,
  BadgeCheck,
  Truck,
  Headphones,
} from "lucide-react";

/* ================= IMAGE ================= */
import u2 from "../../../assets/images/services/u2.webp";

const StationeryUniforms = () => {
  return (
    <ServiceLayout
      title="Stationery & Uniforms"
      subtitle="Your trusted partner for educational essentials, delivering quality, consistency, and reliability at scale."
    >
      {/* ================= HERO ================= */}
      <section className="mb-36">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* TEXT */}
          <div>
            <h2 className="text-2xl font-semibold text-slate-900 mb-6">
              Your Trusted Partner for Educational Essentials
            </h2>

            <p className="text-slate-700 leading-relaxed mb-4">
              Xceled Solutions provides high-quality stationery and uniform
              solutions tailored to educational institutions, ensuring
              consistency, affordability, and long-term durability.
            </p>

            <p className="text-slate-700 leading-relaxed mb-6">
              From daily classroom essentials to standardized school uniforms,
              our procurement and supply systems are designed to support
              institutions with timely delivery and assured quality.
            </p>

            <Link
              to="/contact"
              className="
                inline-flex items-center gap-2
                px-8 py-4 rounded-xl
                bg-sky-600 text-white font-semibold
                transition-all duration-300
                hover:bg-sky-700 hover:-translate-y-1 hover:shadow-xl
              "
            >
              Talk to Our Experts →
            </Link>
          </div>

          {/* IMAGE */}
          <div className="flex justify-center">
            <div className="bg-sky-50 p-5 rounded-3xl shadow-xl transition-all duration-300 hover:shadow-2xl">
              <img
                src={u2}
                alt="School Uniforms"
                className="w-full max-w-[460px] rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= OUR OFFERINGS ================= */}
      <section className="mb-36">
        <h2 className="text-2xl font-semibold text-slate-900 mb-14">
          Our Offerings
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Card 1 */}
          <div className="group bg-sky-50 border border-slate-200 rounded-3xl p-8 transition-all duration-300 hover:bg-white hover:-translate-y-2 hover:shadow-2xl">
            <PenTool className="h-8 w-8 text-sky-600 mb-4 group-hover:scale-110 transition" />
            <h3 className="text-lg font-semibold text-slate-900 mb-3">
              School Stationery Supplies
            </h3>
            <p className="text-slate-700 text-sm leading-relaxed">
              Comprehensive range of daily-use stationery including notebooks,
              writing instruments, examination materials, art supplies, and
              classroom essentials.
            </p>
          </div>

          {/* Card 2 */}
          <div className="group bg-sky-50 border border-slate-200 rounded-3xl p-8 transition-all duration-300 hover:bg-white hover:-translate-y-2 hover:shadow-2xl">
            <Shirt className="h-8 w-8 text-sky-600 mb-4 group-hover:scale-110 transition" />
            <h3 className="text-lg font-semibold text-slate-900 mb-3">
              School Uniforms
            </h3>
            <p className="text-slate-700 text-sm leading-relaxed">
              Standardized school uniforms designed for comfort, durability, and
              uniformity, available in multiple sizes and fabric options.
            </p>
          </div>

          {/* Card 3 */}
          <div className="group bg-sky-50 border border-slate-200 rounded-3xl p-8 transition-all duration-300 hover:bg-white hover:-translate-y-2 hover:shadow-2xl">
            <Backpack className="h-8 w-8 text-sky-600 mb-4 group-hover:scale-110 transition" />
            <h3 className="text-lg font-semibold text-slate-900 mb-3">
              Accessories & Additional Items
            </h3>
            <p className="text-slate-700 text-sm leading-relaxed">
              School bags, ID cards, belts, ties, badges, and other accessories
              required for complete student kits.
            </p>
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="mb-36">
        <h2 className="text-2xl font-semibold text-slate-900 mb-14">
          Why Choose Xceled Solutions
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="bg-white border border-slate-200 rounded-3xl p-7 transition hover:-translate-y-1 hover:shadow-xl">
            <CheckCircle className="h-7 w-7 text-sky-600 mb-3" />
            <h4 className="font-semibold text-slate-900 mb-2">
              Quality Assurance
            </h4>
            <p className="text-sm text-slate-700">
              Strict quality checks to ensure products meet institutional
              standards.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-3xl p-7 transition hover:-translate-y-1 hover:shadow-xl">
            <Settings className="h-7 w-7 text-sky-600 mb-3" />
            <h4 className="font-semibold text-slate-900 mb-2">
              Customization
            </h4>
            <p className="text-sm text-slate-700">
              Tailored solutions aligned with institutional requirements.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-3xl p-7 transition hover:-translate-y-1 hover:shadow-xl">
            <BadgeCheck className="h-7 w-7 text-sky-600 mb-3" />
            <h4 className="font-semibold text-slate-900 mb-2">
              Competitive Pricing
            </h4>
            <p className="text-sm text-slate-700">
              Cost-effective pricing without compromising quality.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-3xl p-7 transition hover:-translate-y-1 hover:shadow-xl">
            <Truck className="h-7 w-7 text-sky-600 mb-3" />
            <h4 className="font-semibold text-slate-900 mb-2">
              Timely Delivery
            </h4>
            <p className="text-sm text-slate-700">
              Reliable logistics ensuring on-time supply across locations.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-3xl p-7 transition hover:-translate-y-1 hover:shadow-xl">
            <Headphones className="h-7 w-7 text-sky-600 mb-3" />
            <h4 className="font-semibold text-slate-900 mb-2">
              Customer Support
            </h4>
            <p className="text-sm text-slate-700">
              Dedicated support team for order management and assistance.
            </p>
          </div>
        </div>
      </section>
    </ServiceLayout>
  );
};

export default StationeryUniforms;
