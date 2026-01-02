import msme from "../../assets/images/hero/msme.png";
import gem from "../../assets/images/hero/gem.png";
import startupindia from "../../assets/images/hero/startupindia.png";
import khadiindia from "../../assets/images/hero/khadiindia.png";
import iso from "../../assets/images/hero/iso-9001-2015.png";
import udami from "../../assets/images/hero/udami.png";

const logos = [
  msme,
  gem,
  startupindia,
  khadiindia,
  iso,
  udami,
];

const TrustSection = () => {
  return (
    <section className="w-full mt-15 pb-24">
      <div className="max-w-7xl mx-auto px-6">

        <div
          className="
            bg-sky-50/60
            border border-sky-100
            rounded-3xl
            px-8 md:px-14 py-14
          "
        >
          {/* ================= HEADING ================= */}
          <div className="text-center mb-12 space-y-4">

            {/* STRONG SECTION MARKER (TEXT UNCHANGED) */}
            <div className="flex items-center justify-center gap-4">
              <span className="block w-10 h-[3px] bg-sky-500 rounded-full"></span>
              <p className="uppercase tracking-widest text-sm text-sky-500 font-medium">
                Trusted & Recognized By
              </p>
            </div>

            <h2 className="text-2xl md:text-3xl font-semibold text-slate-800">
              Government & Industry Affiliations
            </h2>

            <p className="text-sm text-slate-600 max-w-xl mx-auto">
              Registered, certified, and recognized under various Government of India
              and industry initiatives.
            </p>
          </div>

          {/* ================= LOGO STRIP ================= */}
          <div className="relative overflow-hidden">
            <div
              className="
                flex items-center gap-20
                animate-logoScroll
                hover:[animation-play-state:paused]
                w-max
              "
            >
              {[...logos, ...logos].map((logo, index) => (
                <div
                  key={index}
                  className="
                    flex items-center justify-center
                    min-w-[180px]
                    transition-transform duration-300 ease-out
                    hover:scale-105
                  "
                >
                  <img
                    src={logo}
                    alt="Affiliation Logo"
                    className="
                      h-16 md:h-18 lg:h-20
                      w-auto object-contain
                      opacity-80 grayscale
                      transition-all duration-300
                      hover:opacity-100 hover:grayscale-0
                    "
                  />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TrustSection;
