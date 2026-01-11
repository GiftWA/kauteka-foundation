import Image from "next/image";

export default function ContactPage() {
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
              We’d love to hear from you. Reach out to Kauteka Foundation (KAFO)
              for partnerships, support, or any inquiries about our work.
            </p>

            {/* Contact Info */}
            <div className="mt-8 space-y-4 text-gray-800">
              <p>
                📍 <span className="font-medium">Location:</span> Enukweni & Mzuzu, Malawi
              </p>
              <p>
                📞 <span className="font-medium">Phone:</span> +265 884 11 54 62
              </p>
              <p>
                ✉️ <span className="font-medium">Email:</span> kauteka.kafo@gmail.com
              </p>
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

          <form className="grid grid-cols-1 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-600"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-600"
            />

            <textarea
              placeholder="Your Message"
              rows={5}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-600"
            />

            <button
              type="submit"
              className="bg-emerald-700 text-white px-6 py-3 rounded-lg hover:bg-emerald-800 transition duration-300 w-fit"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

    </main>
  );
}
