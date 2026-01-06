import { Link } from "react-router-dom";
import logo from "../../assets/images/hero/logo.jpeg";

const Footer = () => {
  return (
    <footer className="relative w-full overflow-hidden">

      {/* subtle animated accent */}
      <div className="
        absolute top-0 left-0 w-full h-[2px]
        bg-gradient-to-r from-transparent via-sky-400 to-transparent
        opacity-70 animate-pulse
      " />

      {/* soft background glow */}
      <div className="
        absolute inset-0
        bg-[radial-gradient(circle_at_bottom,_rgba(56,189,248,0.15),transparent_60%)]
        pointer-events-none
      " />

      {/* footer body */}
      <div
        className="
          relative
          w-full
          bg-gradient-to-b from-sky-50/90 via-white to-sky-50/80
          backdrop-blur-md
          py-14
        "
      >
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 items-start">

            {/* Brand */}
            <div className="space-y-5 group">
              <div className="flex items-center gap-3">
                <img
                  src={logo}
                  alt="Xceled Solutions"
                  className="
                    h-10 w-auto object-contain
                    transition-transform duration-500 ease-out
                    group-hover:scale-110
                  "
                />
                <div className="leading-tight">
                  <h3 className="text-lg font-extrabold tracking-wider text-sky-700">
                    XCELED
                  </h3>
                  <p className="text-[11px] tracking-[0.4em] text-slate-500">
                    SOLUTIONS
                  </p>
                </div>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed max-w-sm">
                A PMEGP-supported, women-led enterprise focused on skill
                development, education, and meaningful career guidance.
              </p>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h4 className="text-xs font-semibold tracking-widest text-sky-500 uppercase">
                Contact
              </h4>

              <div className="flex flex-col gap-2 text-sm text-slate-600">
                <span className="transition-colors hover:text-sky-600">
                  📞 +91 76691 56969
                </span>

                <span className="transition-colors hover:text-sky-600">
                  ✉️ sales@xceledsolutions.com
                </span>

                <span className="text-slate-600 leading-relaxed">
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
                  active:scale-[0.96]
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
          <div className="mt-12 pt-6 border-t border-sky-100 text-center">
            <p className="text-[11px] text-slate-500 tracking-wide">
              © {new Date().getFullYear()} Xceled Solutions. All rights reserved.
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
