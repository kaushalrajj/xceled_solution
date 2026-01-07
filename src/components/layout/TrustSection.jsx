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
    <section
      className="
        w-full mt-15
        pb-28
      "
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      <div className="max-w-7xl mx-auto px-6">

        <div
          className="
            bg-sky-50
            border border-sky-200
            rounded-3xl
            px-8 sm:px-12 md:px-16
            py-16
            shadow-sm
          "
        >
          {/* ================= HEADING ================= */}
          <div className="text-center mb-14 space-y-5">

            <div className="flex items-center justify-center gap-4">
              <span className="block w-11 h-[3px] bg-sky-500 rounded-full" />
              <p
                className="
                  uppercase tracking-[0.36em]
                  text-[0.75rem]
                  text-sky-700 font-semibold
                "
              >
                Trusted & Recognized By
              </p>
            </div>

            <h2
              className="
                font-bold tracking-tight
                text-slate-900
                text-[clamp(1.65rem,3.2vw,2.3rem)]
              "
            >
              Government & Industry Affiliations
            </h2>

            <p
              className="
                text-[0.95rem]
                text-slate-700
                max-w-xl mx-auto
                leading-[1.7]
              "
            >
              Officially registered, certified, and recognized under
              Government of India and industry-backed initiatives that
              validate credibility, compliance, and operational trust.
            </p>
          </div>

          {/* ================= LOGO STRIP ================= */}
          <div className="relative overflow-hidden">
            <div
              className="
                flex items-center gap-16 sm:gap-20
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
                    min-w-[150px] sm:min-w-[170px] md:min-w-[190px]
                    transition-transform duration-300 ease-out
                    hover:scale-[1.05]
                  "
                >
                  <img
                    src={logo}
                    alt="Affiliation Logo"
                    className="
                      h-16 sm:h-18 md:h-20 lg:h-22
                      w-auto object-contain
                      opacity-85
                      grayscale
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
