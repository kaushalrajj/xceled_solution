import { Routes, Route } from "react-router-dom";

/* ===== Layout ===== */
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

/* ===== Main Pages ===== */
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Services from "./components/pages/Services";

/* ===== Service Detail Pages ===== */
import OnlineExams from "./components/pages/services/OnlineExams";
import OfflineExams from "./components/pages/services/OfflineExams";
import EducationalTraining from "./components/pages/services/EducationalTraining";
import ManpowerProvider from "./components/pages/services/ManpowerProvider";
import StationeryUniforms from "./components/pages/services/StationeryUniforms";
import EducationalKits from "./components/pages/services/EducationalKits";
import SchoolLabKits from "./components/pages/services/SchoolLabKits";

const App = () => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-sky-50 via-white to-white text-slate-800 antialiased">

      {/* Decorative blobs */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-sky-200/40 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/3 -right-40 w-[420px] h-[420px] bg-yellow-200/40 rounded-full blur-3xl pointer-events-none"></div>

      <Navbar />

      <main className="relative z-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />

          <Route path="/services/online-exams" element={<OnlineExams />} />
          <Route path="/services/offline-exams" element={<OfflineExams />} />
          <Route path="/services/educational-training" element={<EducationalTraining />} />
          <Route path="/services/manpower-provider" element={<ManpowerProvider />} />
          <Route path="/services/stationery-uniforms" element={<StationeryUniforms />} />
          <Route path="/services/educational-kits" element={<EducationalKits />} />
          <Route path="/services/school-lab-kits" element={<SchoolLabKits />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default App;
