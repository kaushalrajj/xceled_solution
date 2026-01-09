import { useEffect, useState } from "react";

const Carrer = () => {
  const [fileName, setFileName] = useState("No file selected");
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
  });

  /* Restore saved data + detect success */
  useEffect(() => {
    const saved = localStorage.getItem("careerForm");
    if (saved) {
      setFormData(JSON.parse(saved));
    }

    const params = new URLSearchParams(window.location.search);
    if (params.get("success") === "true") {
      setShowSuccess(true);
      localStorage.removeItem("careerForm");
      setTimeout(() => setShowSuccess(false), 4000);
    }
  }, []);

  /* Persist form data */
  useEffect(() => {
    localStorage.setItem("careerForm", JSON.stringify(formData));
  }, [formData]);

  return (
    <section className="w-full pt-36 pb-28 bg-sky-50/40">
      {/* Success Message */}
      {showSuccess && (
        <div className="fixed top-24 right-6 z-50">
          <div className="bg-white border border-green-200 shadow-lg rounded-xl px-7 py-5">
            <p className="text-green-700 font-semibold text-lg">
              Application submitted successfully
            </p>
            <p className="text-base text-slate-600">
              Our team will contact you if shortlisted.
            </p>
          </div>
        </div>
      )}

      {/* Page Heading */}
      <div className="max-w-7xl mx-auto px-6 mb-18">
        <h1 className="text-5xl font-semibold text-sky-700 mb-4">
          Careers at Xcelled
        </h1>
        <p className="text-slate-600 text-lg max-w-3xl">
          Join a team that builds practical, scalable solutions for education
          and institutions. We value ownership, clarity, and real-world impact.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

        {/* WHY WORK WITH XCELLED (6 CARDS) */}
        <div className="bg-white rounded-2xl p-12 border border-sky-100 shadow-sm">
          <h2 className="text-3xl font-semibold text-sky-700 mb-10">
            Why Work With Xcelled?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
            {[
              "Collaborative and growth-focused work environment",
              "Exposure to real institutional and educational projects",
              "Transparent culture with learning-first mindset",
              "Responsibility, ownership, and long-term growth",
              "Opportunity to work on scalable, impact-driven solutions",
              "Continuous learning through hands-on problem solving",
            ].map((item, index) => (
              <div
                key={index}
                className="
                  flex gap-4 p-6 rounded-xl
                  bg-sky-50/70
                  border border-sky-100
                  hover:shadow-md
                  transition-shadow
                "
              >
                <span className="text-sky-600 font-semibold text-lg">✔</span>
                <p className="text-slate-700 text-base leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* FORM (UNCHANGED) */}
        <form
          action="https://formsubmit.co/sales@xceledsolutions.com"
          method="POST"
          encType="multipart/form-data"
          onSubmit={() => setIsSubmitting(true)}
          className="bg-white rounded-2xl p-12 shadow-xl border border-slate-100"
        >
          <input type="hidden" name="_captcha" value="false" />
          <input
            type="hidden"
            name="_subject"
            value="New Career Application – Xcelled Solutions"
          />
          <input
            type="hidden"
            name="_autoresponse"
            value="Thank you for applying at Xcelled Solutions. We have received your application and will contact you if shortlisted."
          />
          <input
            type="hidden"
            name="_next"
            value={`${window.location.pathname}?success=true`}
          />

          <label className="label text-base">Full Name *</label>
          <input
            name="name"
            required
            placeholder="Enter your full name"
            className="input text-lg"
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
          />

          <label className="label text-base">Email Address *</label>
          <input
            type="email"
            name="email"
            required
            placeholder="Enter your email address"
            className="input text-lg"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />

          <label className="label text-base">Phone Number *</label>
          <div className="flex gap-3 mb-5">
            <span className="px-4 py-3 border rounded-lg bg-slate-50 text-slate-700 text-base">
              +91
            </span>
            <input
              name="phone"
              required
              pattern="[0-9]{10}"
              placeholder="10-digit mobile number"
              className="input flex-1 mb-0 text-lg"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
            />
          </div>

          <label className="label text-base">Position Applied For *</label>
          <input
            name="role"
            required
            placeholder="e.g. Frontend Developer, Lab Technician"
            className="input text-lg"
            value={formData.role}
            onChange={(e) =>
              setFormData({ ...formData, role: e.target.value })
            }
          />

          <label className="label text-base">Resume *</label>
          <div className="flex items-center gap-4 mb-7">
            <label
              htmlFor="resume"
              className="px-6 py-3 rounded-lg bg-sky-600 text-white text-base font-medium cursor-pointer hover:bg-sky-700 transition-colors"
            >
              Browse Documents
            </label>
            <span className="text-base text-slate-600 truncate max-w-[260px]">
              {fileName}
            </span>
          </div>

          <input
            id="resume"
            type="file"
            name="resume"
            required
            accept=".pdf,.doc,.docx"
            className="hidden"
            onChange={(e) =>
              setFileName(
                e.target.files?.[0]?.name || "No file selected"
              )
            }
          />

          <button
            type="submit"
            disabled={isSubmitting}
            className={`
              w-full mt-5 py-4 rounded-xl font-semibold tracking-wide text-lg
              transition-all duration-150
              ${
                isSubmitting
                  ? "bg-sky-400 text-white cursor-wait"
                  : "bg-sky-600 text-white hover:bg-sky-700 active:scale-[0.97]"
              }
            `}
          >
            {isSubmitting ? "Submitting..." : "Submit Application"}
          </button>
        </form>
      </div>

      <style>{`
        .label {
          display: block;
          margin-bottom: 6px;
          font-weight: 500;
          color: #374151;
        }
        .input {
          width: 100%;
          padding: 14px 16px;
          margin-bottom: 18px;
          border: 1px solid #d1d5db;
          border-radius: 10px;
          background-color: #f9fafb;
          outline: none;
          transition: border-color 0.2s, background-color 0.2s;
        }
        .input:focus {
          border-color: #38bdf8;
          background-color: #ffffff;
        }
      `}</style>
    </section>
  );
};

export default Carrer;
