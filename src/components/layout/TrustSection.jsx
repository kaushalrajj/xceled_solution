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
        w-full
        mt-20 sm:mt-24 md:mt-15
        pb-24 sm:pb-28
      "
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">

        <div
          className="
            bg-sky-50
            border border-sky-200
            rounded-3xl
            px-6 sm:px-10 md:px-16
            py-12 sm:py-14 md:py-16
            shadow-sm
          "
        >
          {/* ================= HEADING ================= */}
          <div className="text-center mb-10 sm:mb-12 md:mb-14 space-y-5">

            <div className="flex items-center justify-center gap-4">
              <span className="block w-10 h-[3px] bg-sky-500 rounded-full" />
              <p
                className="
                  uppercase tracking-[0.36em]
                  text-[0.7rem] sm:text-[0.75rem]
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
                text-[clamp(1.6rem,3.5vw,2.3rem)]
              "
            >
              Government & Industry Affiliations
            </h2>

            <p
              className="
                text-[0.9rem] sm:text-[0.95rem]
                text-slate-700
                max-w-xl mx-auto
                leading-[1.75]
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
                flex items-center gap-12 sm:gap-16 md:gap-20
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
                    min-w-[120px] sm:min-w-[150px] md:min-w-[180px]
                    transition-transform duration-300 ease-out
                    hover:scale-[1.04]
                  "
                >
                  <img
                    src={logo}
                    alt="Affiliation Logo"
                    className="
                      h-14 sm:h-16 md:h-18 lg:h-20
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
