"use client";

import { MapPin, Phone, Mail } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSent(false);

    if (!form.name || !form.email || !form.message) {
      setError("Please fill in all fields.");
      return;
    }

    if (!validateEmail(form.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setLoading(true);

    // Simulated send (can be replaced with real email service later)
    setTimeout(() => {
      setLoading(false);
      setSent(true);
      setForm({ name: "", email: "", message: "" });
    }, 1200);
  };

  return (
    <main className="bg-[#F6EACB] min-h-screen">
      
      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 pt-20 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Text */}
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-emerald-900 mb-6">
              Contact Us
            </h1>
            <p className="mt-6 text-lg text-gray-700 max-w-xl">
              We would love to hear from you. Reach out to Kauteka Foundation (KAFO)
              for partnerships, support, or any inquiries about our work.
            </p>

            {/* Contact Info */}
            <div className="mt-8 space-y-5 text-gray-800">
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-emerald-700 mt-1" />
                <p>
                  <span className="font-medium">Location:</span><br />
                  Enukweni & Mzuzu, Malawi
                </p>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 text-emerald-700 mt-1" />
                <p>
                  <span className="font-medium">Phone:</span><br />
                  +265 884 11 54 62
                </p>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 text-emerald-700 mt-1" />
                <p>
                  <span className="font-medium">Email:</span><br />
                  kauteka.kafo@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FORM */}
      <section className="max-w-4xl mx-auto px-6 pb-24">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Send Us a Message
          </h2>

          {error && (
            <div className="mb-4 rounded-lg bg-red-50 border border-red-200 p-4 text-red-700">
              {error}
            </div>
          )}

          {sent && (
            <div className="mb-4 rounded-lg bg-emerald-50 border border-emerald-200 p-4 text-emerald-700">
              ✅ Message sent successfully. We’ll get back to you soon.
            </div>
          )}

          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-emerald-600 outline-none"
            />

            <input
              name="email"
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-emerald-600 outline-none"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-emerald-600 outline-none"
            />

            <button
              type="submit"
              disabled={loading}
              className="bg-emerald-700 text-white px-6 py-3 rounded-lg hover:bg-emerald-800 transition w-fit disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
