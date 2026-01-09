import {
  Phone,
  Mail,
  Send,
  MapPin,
  Loader2,
  X,
} from "lucide-react";
import { useState } from "react";

/* ================= CONSTANTS ================= */
const PHONE_NUMBER = "+91 76691 56969";
const EMAIL = "sales@xceledsolutions.com";

const GMAIL_COMPOSE_URL =
  "https://mail.google.com/mail/?view=cm&fs=1&to=sales@xceledsolutions.com&su=Inquiry from Xceled Website";

/* ================= COMPONENT ================= */
const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [shake, setShake] = useState(false);

  /* ================= VALIDATION ================= */
  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim())
      newErrors.name = "Name is required";

    if (!formData.email.trim())
      newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Enter a valid email address";

    if (!formData.message.trim())
      newErrors.message = "Message cannot be empty";

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      setShake(true);
      setTimeout(() => setShake(false), 400);
      return false;
    }

    return true;
  };

  /* ================= SUBMIT ================= */
  const handleSubmit = (e) => {
    if (!validate()) {
      e.preventDefault();
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setShowToast(true);
      setIsSubmitting(false);
    }, 1200);
  };

  return (
    <section className="relative w-full pt-32 pb-28 overflow-hidden bg-gradient-to-b from-sky-50 via-white to-white text-slate-800">
      {/* ================= TOAST ================= */}
      {showToast && (
        <div className="fixed top-6 right-6 z-50 animate-slide-in">
          <div className="flex items-start gap-4 bg-white border border-green-200 shadow-xl rounded-2xl px-6 py-4">
            <div>
              <p className="text-green-600 font-medium text-base">
                Message sent successfully!
              </p>
              <p className="text-base text-slate-500">
                Our team will contact you shortly.
              </p>
            </div>
            <button
              onClick={() => setShowToast(false)}
              className="text-slate-400 hover:text-slate-600"
            >
              <X size={18} />
            </button>
          </div>
        </div>
      )}

      {/* ================= HERO ================= */}
      <div className="max-w-7xl mx-auto px-6 text-center mb-20">
        <h1 className="text-5xl md:text-6xl font-semibold tracking-tight">
          Contact Us
        </h1>
        <p className="mt-6 text-xl text-slate-600 max-w-2xl mx-auto">
          Have a question or business inquiry?
          <br className="hidden sm:block" />
          Our team is always happy to connect.
        </p>
      </div>

      {/* ================= QUICK ACTIONS ================= */}
      <div className="max-w-5xl mx-auto px-6 mb-24">
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a
            href={`tel:${PHONE_NUMBER.replace(/\s+/g, "")}`}
            className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full
                       bg-sky-600 text-white font-medium text-lg
                       hover:bg-sky-700 transition"
          >
            <Phone size={20} />
            Call Now
          </a>

          <a
            href={GMAIL_COMPOSE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full
                       border border-sky-600 text-sky-600 font-medium text-lg bg-white
                       hover:bg-sky-50 transition"
          >
            <Mail size={20} />
            Mail Us
          </a>
        </div>
      </div>

      {/* ================= ADDRESS + MAP ================= */}
      <div className="max-w-7xl mx-auto px-6 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* ADDRESS CARD */}
          <div className="bg-white rounded-3xl border border-slate-200 p-12 shadow-sm">
            <MapPin className="text-sky-600 mb-4" size={22} />
            <h3 className="font-semibold text-xl mb-4">Our Office</h3>

            <p className="text-base text-slate-700 leading-relaxed">
              A-20, Gurunanak Pura,
              <br />
              Laxmi Nagar, New Delhi – 110092
            </p>

            <a
              href="https://www.openstreetmap.org/?mlat=28.6369&mlon=77.2773#map=17/28.6369/77.2773"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 text-base font-medium text-sky-600 hover:underline"
            >
              Open in Maps →
            </a>
          </div>

          {/* MAP CARD */}
          <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
            <iframe
              title="XCELED Solutions Location"
              src="https://www.openstreetmap.org/export/embed.html?bbox=77.270%2C28.632%2C77.284%2C28.641&layer=mapnik&marker=28.6369%2C77.2773"
              className="w-full h-full min-h-[320px]"
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
          onSubmit={handleSubmit}
          className={`space-y-8 bg-white rounded-[2.5rem] border border-slate-200 p-14 shadow-xl ${
            shake ? "animate-shake" : ""
          }`}
        >
          <input type="hidden" name="_captcha" value="false" />

          {/* NAME */}
          <div>
            <input
              name="Name"
              placeholder="Your name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className={`w-full rounded-2xl px-6 py-5 text-lg border ${
                errors.name ? "border-red-400" : "border-slate-300"
              } focus:ring-2 focus:ring-sky-500`}
            />
            {errors.name && (
              <p className="text-base text-red-500 mt-1">
                {errors.name}
              </p>
            )}
          </div>

          {/* EMAIL */}
          <div>
            <input
              type="email"
              name="Email"
              placeholder="Email address"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className={`w-full rounded-2xl px-6 py-5 text-lg border ${
                errors.email ? "border-red-400" : "border-slate-300"
              } focus:ring-2 focus:ring-sky-500`}
            />
            {errors.email && (
              <p className="text-base text-red-500 mt-1">
                {errors.email}
              </p>
            )}
          </div>

          {/* MESSAGE */}
          <div>
            <textarea
              name="Message"
              rows="5"
              placeholder="Your message"
              value={formData.message}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  message: e.target.value,
                })
              }
              className={`w-full rounded-2xl px-6 py-5 text-lg border resize-none ${
                errors.message ? "border-red-400" : "border-slate-300"
              } focus:ring-2 focus:ring-sky-500`}
            />
            {errors.message && (
              <p className="text-base text-red-500 mt-1">
                {errors.message}
              </p>
            )}
          </div>

          {/* SUBMIT */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center justify-center gap-3 px-14 py-5 rounded-full
                       bg-sky-600 text-white font-medium text-lg hover:bg-sky-700
                       transition disabled:opacity-70"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="animate-spin" size={20} />
                Sending
              </>
            ) : (
              <>
                <Send size={20} />
                Send Message
              </>
            )}
          </button>

          <p className="text-sm text-slate-500 text-center pt-2">
            We respect your privacy. Your data is never shared.
          </p>
        </form>
      </div>

      {/* ================= ANIMATIONS ================= */}
      <style>{`
        @keyframes shake {
          0%,100% { transform: translateX(0); }
          25% { transform: translateX(-6px); }
          75% { transform: translateX(6px); }
        }
        .animate-shake {
          animation: shake 0.4s;
        }
        @keyframes slide-in {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-in {
          animation: slide-in 0.4s ease-out;
        }
      `}</style>
    </section>
  );
};

export default Contact;
