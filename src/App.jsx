import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Footer from "./components/layout/Footer";
import Services from "./components/pages/Services";


const App = () => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-sky-50 via-white to-white text-slate-800 antialiased">
      {/* Background Decorative Blobs */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-sky-200/40 rounded-full blur-3xl"></div>
      <div className="absolute top-1/3 -right-40 w-[420px] h-[420px] bg-yellow-200/40 rounded-full blur-3xl"></div>

      {/* Fixed Navbar */}
      <Navbar />

      {/* Routes */}
      <main className="relative z-10">
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
