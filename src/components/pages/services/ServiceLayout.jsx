import { Link } from "react-router-dom";

const ServiceLayout = ({ title, subtitle, children }) => {
  return (
    <section className="w-full bg-white">

      {/* ================= PAGE HEADER ================= */}
      <header className="w-full pt-16 sm:pt-20 lg:pt-24 pb-10 sm:pb-14 lg:pb-16">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="max-w-4xl">
            <p
              className="
                uppercase
                tracking-[0.35em]
                text-xs
                font-semibold
                text-sky-600
                mb-4 sm:mb-6
              "
            >
              Our Services
            </p>

            <h1
              className="
                text-2xl
                sm:text-3xl
                md:text-[2.5rem]
                lg:text-[2.75rem]
                font-semibold
                text-slate-900
                leading-[1.15]
                mb-5 sm:mb-7 lg:mb-8
              "
            >
              {title}
            </h1>

            <p
              className="
                text-slate-600
                text-sm
                sm:text-base
                md:text-lg
                leading-relaxed
                max-w-[46rem]
              "
            >
              {subtitle}
            </p>
          </div>
        </div>
      </header>

      {/* ================= PAGE CONTENT ================= */}
      <main className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        {children}
      </main>

      {/* ================= CTA FOOTER ================= */}
      <footer className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-16 sm:py-20 lg:py-24">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
          <Link
            to="/contact"
            className="
              inline-flex justify-center items-center
              px-8 py-4 rounded-xl
              bg-sky-600 text-white font-semibold
              transition-all duration-300
              hover:bg-sky-700 hover:-translate-y-1 hover:shadow-xl
            "
          >
            Contact Us
          </Link>

          <Link
            to="/services"
            className="
              inline-flex justify-center items-center
              px-8 py-4 rounded-xl
              border border-slate-300
              text-slate-800 font-semibold
              transition-all duration-300
              hover:bg-slate-100
            "
          >
            Back to Services
          </Link>
        </div>
      </footer>

    </section>
  );
};

export default ServiceLayout;
