import { useState } from "react";
import { Link } from "react-router-dom";
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
      {/* ================= NAVBAR ================= */}
      <nav className="w-full bg-sky-50/70 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-[72px] flex items-center justify-between">

          {/* Logo */}
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="group flex items-center gap-3 transition-transform duration-300 hover:scale-[1.03]"
          >
            <img
              src={logo}
              alt="Xceled Solutions Logo"
              className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <div className="leading-tight">
              <h1 className="text-xl font-bold tracking-wide text-sky-600 group-hover:tracking-wider transition-all">
                XCELED
              </h1>
              <p className="text-[10px] tracking-[0.35em] text-slate-500">
                SOLUTIONS
              </p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-9 text-[15px] font-medium text-slate-700">
            {navItems.map((item) => (
              <li key={item} className="relative group">

                {item === "Home" && <Link to="/">Home</Link>}
                {item === "About Us" && <Link to="/about">About Us</Link>}
                {item === "Services" && <Link to="/services">Services</Link>}
                {item === "Products" && <Link to="/products">Products</Link>}
                {item === "Career" && <Link to="/career">Career</Link>}
                {item === "Gallery" && <Link to="/gallery">Gallery</Link>}

                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex flex-col gap-[7px]"
            onClick={() => setMenuOpen(prev => !prev)}
            aria-label="Toggle Menu"
          >
            <span className="w-7 h-[2.5px] bg-slate-800"></span>
            <span className="w-7 h-[2.5px] bg-slate-800"></span>
            <span className="w-7 h-[2.5px] bg-slate-800"></span>
          </button>
        </div>
      </nav>

      {/* ================= MOBILE MENU ================= */}
      <div
        className={`
          md:hidden fixed top-[72px] left-0 w-full
          bg-sky-50/95 backdrop-blur-md shadow-md
          transition-all duration-300 ease-out
          ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"}
        `}
      >
        <ul className="flex flex-col items-center gap-8 py-10 text-lg font-semibold text-slate-700">
          {navItems.map((item) => (
            <li key={item} onClick={() => setMenuOpen(false)}>
              {item === "Home" && <Link to="/">Home</Link>}
              {item === "About Us" && <Link to="/about">About Us</Link>}
              {item === "Services" && <Link to="/services">Services</Link>}
              {item === "Products" && <Link to="/products">Products</Link>}
              {item === "Career" && <Link to="/career">Career</Link>}
              {item === "Gallery" && <Link to="/gallery">Gallery</Link>}
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
