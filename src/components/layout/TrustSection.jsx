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
        mt-24 sm:mt-28 md:mt-32
        pb-28 sm:pb-32
      "
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">

        <div
          className="
            bg-sky-50
            border border-sky-200
            rounded-3xl
            px-7 sm:px-12 md:px-20
            py-14 sm:py-16 md:py-18
            shadow-sm
          "
        >
          {/* ================= HEADING ================= */}
          <div className="text-center mb-12 sm:mb-14 md:mb-16 space-y-6">

            <div className="flex items-center justify-center gap-4">
              <span className="block w-11 h-[3px] bg-sky-500 rounded-full" />
              <p
                className="
                  uppercase tracking-[0.38em]
                  text-[0.75rem] sm:text-[0.8rem]
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
                text-[clamp(1.85rem,3.8vw,2.6rem)]
              "
            >
              Government & Industry Affiliations
            </h2>

            <p
              className="
                text-[1rem] sm:text-[1.05rem]
                text-slate-700
                max-w-xl mx-auto
                leading-[1.8]
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
                flex items-center gap-14 sm:gap-18 md:gap-22
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
                    min-w-[130px] sm:min-w-[160px] md:min-w-[190px]
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
