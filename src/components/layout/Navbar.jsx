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
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

          {/* Logo → Home */}
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="group flex items-center gap-4 cursor-pointer transition-transform duration-500 ease-out hover:scale-[1.04]"
          >
            <img
              src={logo}
              alt="Xceled Solutions Logo"
              className="h-14 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
            />
            <div className="leading-tight transition-all duration-500">
              <h1 className="text-2xl font-bold tracking-wide text-sky-600 group-hover:tracking-wider">
                XCELED
              </h1>
              <p className="text-xs tracking-[0.35em] text-slate-500">
                SOLUTIONS
              </p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-9 text-base font-semibold text-slate-700">
            {navItems.map((item) => (
              <li key={item} className="relative group">

                {item === "Home" && (
                  <Link to="/" className="transition-all duration-300 group-hover:text-sky-600 group-hover:font-bold">
                    Home
                  </Link>
                )}

                {item === "About Us" && (
                  <Link to="/about" className="transition-all duration-300 group-hover:text-sky-600 group-hover:font-bold">
                    About Us
                  </Link>
                )}

                {item === "Services" && (
                  <Link to="/services" className="transition-all duration-300 group-hover:text-sky-600 group-hover:font-bold">
                    Services
                  </Link>
                )}

                {item === "Products" && (
                  <Link to="/products" className="transition-all duration-300 group-hover:text-sky-600 group-hover:font-bold">
                    Products
                  </Link>
                )}

                {item === "Career" && (
                  <Link to="/career" className="transition-all duration-300 group-hover:text-sky-600 group-hover:font-bold">
                    Career
                  </Link>
                )}

                {/* ✅ ONLY CHANGE: GALLERY ROUTE */}
                {item === "Gallery" && (
                  <Link
                    to="/gallery"
                    className="transition-all duration-300 group-hover:text-sky-600 group-hover:font-bold"
                  >
                    Gallery
                  </Link>
                )}

                <span className="absolute left-0 -bottom-2 h-[2px] w-0 bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex flex-col gap-[6px]"
            onClick={() => setMenuOpen(prev => !prev)}
            aria-label="Toggle Menu"
          >
            <span className="w-7 h-[2px] bg-slate-800"></span>
            <span className="w-7 h-[2px] bg-slate-800"></span>
            <span className="w-7 h-[2px] bg-slate-800"></span>
          </button>
        </div>
      </nav>

      {/* ================= MOBILE MENU ================= */}
      {menuOpen && (
        <div
          className="
            md:hidden
            fixed top-20 left-0 w-full
            bg-sky-50/95 backdrop-blur-md shadow-md
            z-50
          "
        >
          <ul className="flex flex-col items-center gap-8 py-10 text-lg font-semibold text-slate-700">
            {navItems.map((item) => (
              <li key={item} onClick={() => setMenuOpen(false)}>

                {item === "Home" && <Link to="/">Home</Link>}
                {item === "About Us" && <Link to="/about">About Us</Link>}
                {item === "Services" && <Link to="/services">Services</Link>}
                {item === "Products" && <Link to="/products">Products</Link>}
                {item === "Career" && <Link to="/career">Career</Link>}

                {/* ✅ ONLY CHANGE: GALLERY ROUTE */}
                {item === "Gallery" && <Link to="/gallery">Gallery</Link>}

              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
