import { Link } from "react-router-dom";
import logo from "../../assets/images/hero/logo.jpeg";

const Footer = () => {
  return (
    <footer className="w-full mt-2 relative overflow-hidden">

      {/* animated top accent */}
      <div className="absolute top-0 left-0 w-full h-[2px]
        bg-gradient-to-r from-transparent via-sky-400 to-transparent
        animate-pulse opacity-60" />

      {/* footer body */}
      <div
        className="
          w-full
          bg-gradient-to-b from-sky-50/90 via-white to-sky-50/70
          backdrop-blur-md
          py-12
        "
      >
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">

            {/* Brand */}
            <div className="space-y-4 group">
              <div className="flex items-center gap-3">
                <img
                  src={logo}
                  alt="Xceled Solutions"
                  className="
                    h-10 w-auto object-contain
                    transition-all duration-500 ease-out
                    group-hover:scale-110
                  "
                />
                <div className="leading-tight">
                  <h3 className="text-lg font-bold tracking-wide text-sky-600">
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
            <div className="space-y-3">
              <h4 className="text-xs font-semibold tracking-widest text-sky-500 uppercase">
                Contact
              </h4>

              <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm text-slate-600">
                <span className="hover:text-sky-600 transition-colors">
                  📞 +91 76691 56969
                </span>
              </div>

              <p className="text-sm text-slate-600 hover:text-sky-600 transition-colors">
                ✉️ sales@xceledsolutions.com
              </p>
{/* 
              <p className="text-sm text-slate-600">
                📍 Lane No – 3, Aryasamaj Road, Patna – 801503
              </p> */}

              <p className="text-sm text-slate-600">
                A-20, Gurunanak Pura, Laxmi Nagar, New Delhi – 110092
              </p>
            </div>

            {/* CTA */}
            <div className="flex md:justify-end">
              <Link
                to="/contact"
                className="
                  relative inline-flex items-center gap-3
                  px-7 py-3 rounded-full
                  text-sky-600 font-medium text-sm
                  bg-white/70 backdrop-blur
                  border border-sky-400/60
                  shadow-sm
                  hover:shadow-md
                  hover:border-sky-500
                  hover:gap-4
                  transition-all duration-300 ease-out
                "
              >
                Connect With Us
                <span className="text-base">→</span>
              </Link>
            </div>

          </div>

          {/* bottom */}
          <div className="mt-10 pt-5 border-t border-sky-100 text-center">
            <p className="text-[11px] text-slate-500">
              © {new Date().getFullYear()} Xceled Solutions. All rights reserved.
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
