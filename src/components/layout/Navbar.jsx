import { useState } from "react";
import logo from "../../assets/images/hero/logo.jpeg";

const navItems = [
  "Home",
  "About Us",
  "Services",
  "Products",
  "Career",
  "Gallery",
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      
      {/* Full-width navbar background */}
      <nav className="w-full bg-sky-50/70 backdrop-blur-md shadow-sm transition-colors duration-300">
        
        {/* Centered content */}
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

          {/* Logo + Brand */}
          <div className="group flex items-center gap-4 cursor-pointer transition-transform duration-500 ease-out hover:scale-[1.04]">
            <img
              src={logo}
              alt="Xceled Solutions Logo"
              className="
                h-14 w-auto object-contain
                transition-transform duration-500 ease-out
                group-hover:scale-105
              "
            />
            <div className="leading-tight transition-all duration-500 ease-out">
              <h1
                className="
                  text-2xl font-bold tracking-wide text-sky-600
                  transition-all duration-500
                  group-hover:tracking-wider
                  group-hover:text-sky-700
                "
              >
                XCELED
              </h1>
              <p
                className="
                  text-xs tracking-[0.35em] text-slate-500
                  transition-all duration-500
                  group-hover:tracking-[0.45em]
                "
              >
                SOLUTIONS
              </p>
            </div>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-9 text-base font-semibold text-slate-700">
            {navItems.map((item) => (
              <li
                key={item}
                className="relative cursor-pointer group"
              >
                <span className="transition-all duration-300 group-hover:text-sky-600 group-hover:font-bold">
                  {item}
                </span>

                {/* underline */}
                <span className="absolute left-0 -bottom-2 h-[2px] w-0 bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex flex-col gap-[6px]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            <span className="w-7 h-[2px] bg-slate-800"></span>
            <span className="w-7 h-[2px] bg-slate-800"></span>
            <span className="w-7 h-[2px] bg-slate-800"></span>
          </button>

        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden w-full bg-sky-50/95 backdrop-blur-md shadow-sm transition-all duration-300
          ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3 pointer-events-none"}`}
      >
        <ul className="flex flex-col items-center gap-8 py-10 text-lg font-semibold text-slate-700">
          {navItems.map((item) => (
            <li
              key={item}
              className="cursor-pointer transition-all duration-300 hover:text-sky-600 hover:font-bold"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
