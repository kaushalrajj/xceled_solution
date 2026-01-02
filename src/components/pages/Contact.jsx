import { Phone, Mail, Send, MapPin } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";

/* ================= CONSTANTS ================= */
const PHONE_NUMBER = "+91 76691 56969";
const EMAIL = "sales@xceledsolutions.com";

const GMAIL_COMPOSE_URL =
  "https://mail.google.com/mail/?view=cm&fs=1&to=sales@xceledsolutions.com&su=Inquiry from Xceled Website";

const Contact = () => {
  const [searchParams] = useSearchParams();
  const isSuccess = searchParams.get("success") === "true";
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <section className="relative w-full pt-32 pb-28 overflow-hidden bg-gradient-to-b from-sky-50 via-white to-white text-slate-800">

      {/* ================= BACKGROUND BLOBS ================= */}
      <div className="absolute -top-40 -left-40 w-[520px] h-[520px] bg-sky-300/30 rounded-full blur-3xl"></div>
      <div className="absolute top-1/3 -right-40 w-[460px] h-[460px] bg-blue-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/3 w-[380px] h-[380px] bg-indigo-200/20 rounded-full blur-3xl"></div>

      <div className="relative z-10">

        {/* ================= HERO ================= */}
        <div className="max-w-7xl mx-auto px-6 text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Contact Us
          </h1>
          <p className="mt-5 text-lg text-slate-600 max-w-2xl mx-auto">
            Have a question or business inquiry?  
            Our team is always happy to connect.
          </p>
        </div>

        {/* ================= SUCCESS MESSAGE ================= */}
        {isSuccess && (
          <div className="max-w-3xl mx-auto mb-14 px-6">
            <div className="rounded-2xl border border-green-200 bg-green-50 px-6 py-4 text-green-700 text-center shadow-sm">
              Your message has been sent successfully.  
              Our team will contact you shortly.
            </div>
          </div>
        )}

        {/* ================= QUICK ACTION BUTTONS ================= */}
        <div className="max-w-5xl mx-auto px-6 mb-24">
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href={`tel:${PHONE_NUMBER.replace(/\s+/g, "")}`}
              className="inline-flex items-center justify-center gap-2 px-9 py-4 rounded-full
                         bg-sky-600 text-white font-medium
                         shadow-lg shadow-sky-200/50
                         hover:bg-sky-700 hover:-translate-y-0.5
                         active:translate-y-0 transition-all"
            >
              <Phone size={18} />
              Call Now
            </a>

            <a
              href={GMAIL_COMPOSE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-9 py-4 rounded-full
                         border border-sky-600 text-sky-600 font-medium bg-white
                         hover:bg-sky-50 hover:-translate-y-0.5
                         active:translate-y-0 transition-all"
            >
              <Mail size={18} />
              Mail Us
            </a>
          </div>
        </div>

        {/* ================= ADDRESS + MAP ================= */}
        <div className="max-w-7xl mx-auto px-6 mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

            {/* ADDRESS CARD */}
            <div className="bg-white rounded-3xl border border-slate-200 p-10
                            shadow-sm hover:shadow-xl hover:-translate-y-1
                            transition-all">
              <MapPin className="text-sky-600 mb-4" />
              <h3 className="font-semibold text-lg mb-4">Our Office</h3>

              <p className="text-sm text-slate-700 leading-relaxed">
                A-20, Gurunanak Pura,<br />
                Laxmi Nagar, New Delhi – 110092
              </p>

              <a
                href="https://www.openstreetmap.org/?mlat=28.6369&mlon=77.2773#map=17/28.6369/77.2773"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-6 text-sm font-medium text-sky-600 hover:underline"
              >
                Open in Maps →
              </a>
            </div>

            {/* MAP CARD */}
            <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden
                            shadow-sm hover:shadow-xl transition-all">
              <iframe
                title="XCELED Solutions Location"
                src="https://www.openstreetmap.org/export/embed.html?bbox=77.270%2C28.632%2C77.284%2C28.641&layer=mapnik&marker=28.6369%2C77.2773"
                className="w-full h-full min-h-[300px]"
                loading="lazy"
              />
            </div>

          </div>
        </div>

        {/* ================= CONTACT FORM ================= */}
        <div className="max-w-4xl mx-auto px-6">
          <form
            action={`https://formsubmit.co/${EMAIL}`}
            method="POST"
            onSubmit={() => setIsSubmitting(true)}
            className="space-y-7 bg-white rounded-[2.5rem] border border-slate-200
                       p-12 shadow-xl"
          >
            <input type="hidden" name="_captcha" value="false" />
            <input
              type="hidden"
              name="_next"
              value="https://xceled-solution.vercel.app/contact?success=true"
            />

            <input
              required
              name="Name"
              placeholder="Your name"
              className="w-full border border-slate-300 rounded-2xl px-5 py-4
                         focus:ring-2 focus:ring-sky-500 focus:outline-none
                         transition"
            />

            <input
              required
              type="email"
              name="Email"
              placeholder="Email address"
              className="w-full border border-slate-300 rounded-2xl px-5 py-4
                         focus:ring-2 focus:ring-sky-500 focus:outline-none
                         transition"
            />

            <textarea
              required
              name="Message"
              rows="5"
              placeholder="Your message"
              className="w-full border border-slate-300 rounded-2xl px-5 py-4
                         focus:ring-2 focus:ring-sky-500 focus:outline-none
                         resize-none transition"
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className={`inline-flex items-center justify-center gap-2 px-12 py-4
                rounded-full font-medium transition-all
                ${
                  isSubmitting
                    ? "bg-sky-400 cursor-not-allowed text-white"
                    : "bg-sky-600 hover:bg-sky-700 hover:-translate-y-0.5 text-white shadow-lg shadow-sky-200/50"
                }`}
            >
              {isSubmitting ? "Sending…" : (
                <>
                  <Send size={18} />
                  Send Message
                </>
              )}
            </button>

            <p className="text-xs text-slate-500 text-center pt-2">
              We respect your privacy. Your data is never shared.
            </p>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;
