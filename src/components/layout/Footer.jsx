import { Link } from "react-router-dom";
import logo from "../../assets/images/hero/logo.jpeg";

const Footer = () => {
  return (
    <footer className="w-full mt-2 relative overflow-hidden group">

      {/* top accent */}
      <div
        className="
          absolute top-0 left-0 w-full h-[2px]
          bg-gradient-to-r from-transparent via-sky-400 to-transparent
          opacity-50
          transition-opacity duration-300
          group-hover:opacity-90
        "
      />

      {/* footer body */}
      <div
        className="
          w-full
          bg-gradient-to-b from-sky-50/85 via-white to-sky-50/70
          backdrop-blur-md
          py-12
          transition-all duration-300 ease-out
          group-hover:shadow-[0_-8px_40px_-14px_rgba(56,189,248,0.35)]
        "
      >
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start md:items-center">

            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 group/logo">

                {/* Logo */}
                <div className="relative transition-all duration-300 group-hover/logo:-translate-y-[1px]">
                  <img
                    src={logo}
                    alt="Xceled Solutions"
                    className="
                      h-10 w-auto object-contain
                      transition-transform duration-300
                      group-hover/logo:scale-110
                    "
                  />

                  {/* logo glow */}
                  <span
                    className="
                      absolute inset-0 -z-10
                      bg-sky-400/20 blur-lg
                      opacity-0
                      transition-opacity duration-300
                      group-hover/logo:opacity-100
                    "
                  />
                </div>

                {/* Brand text */}
                <div className="leading-tight">
                  <h3
                    className="
                      text-lg font-extrabold tracking-wider text-sky-700
                      transition-all duration-300
                      group-hover:text-sky-800
                      group-hover:-translate-y-[1px]
                    "
                  >
                    XCELED
                  </h3>
                  <p
                    className="
                      text-[11px] tracking-[0.4em] text-slate-500
                      transition-all duration-300
                      group-hover:text-slate-600
                      group-hover:tracking-[0.45em]
                    "
                  >
                    SOLUTIONS
                  </p>
                </div>
              </div>

              <p
                className="
                  text-sm text-slate-600 leading-relaxed max-w-sm
                  transition-colors duration-300
                  group-hover:text-slate-700
                "
              >
                A PMEGP-supported, women-led enterprise focused on skill
                development, education, and meaningful career guidance.
              </p>
            </div>

            {/* Contact */}
            <div className="space-y-3">
              <h4
                className="
                  text-xs font-semibold tracking-widest text-sky-500 uppercase
                  transition-colors duration-300
                  group-hover:text-sky-600
                "
              >
                Contact
              </h4>

              <div className="flex flex-col gap-1 text-sm text-slate-600">

                <span className="transition-all hover:text-sky-600 hover:tracking-wide">
                  📞 +91 76691 56969
                </span>

                <span className="transition-all hover:text-sky-600 hover:tracking-wide">
                  ✉️ sales@xceledsolutions.com
                </span>

                {/* Address — enhanced */}
                <span
                  className="
                    leading-relaxed
                    transition-all duration-300
                    group-hover:text-slate-700
                    group-hover:tracking-[0.015em]
                  "
                >
                  A-20, Gurunanak Pura, Laxmi Nagar, New Delhi – 110092
                </span>

              </div>
            </div>

            {/* CTA */}
            <div className="flex md:justify-end">
              <Link
                to="/contact"
                className="
                  inline-flex items-center gap-3
                  px-8 py-3 rounded-full
                  text-sky-600 font-medium text-sm
                  bg-white/80 backdrop-blur
                  border border-sky-400/60
                  shadow-sm
                  transition-all duration-300 ease-out
                  hover:shadow-lg hover:border-sky-500 hover:-translate-y-[1px]
                  active:scale-[0.97]
                "
              >
                Connect With Us
                <span className="text-base transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>

          </div>

          {/* bottom */}
          <div className="mt-10 pt-5 border-t border-sky-100 text-center">
            <p
              className="
                text-[11px] text-slate-500 tracking-wide
                transition-colors duration-300
                group-hover:text-slate-600
              "
            >
              © {new Date().getFullYear()} Xceled Solutions. All rights reserved.
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
