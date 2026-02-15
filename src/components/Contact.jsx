import React from "react";
export default function Contact() {
  return (
    <section id="contact" className="py-20 text-center">
     <h2 className="text-5xl font-bold text-center mb-16">
        Contact<span className="text-green-600">Me!</span>
      </h2>

      <form className="max-w-xl mx-auto space-y-4 px-6">
        <input
          type="text"
          placeholder="Name"
          className="w-full border border-[#ccc] p-3 rounded-lg
          outline-none focus:ring-2 focus:ring-green-600 transition"
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full border border-[#ccc] p-3 rounded-lg
          outline-none focus:ring-2 focus:ring-green-600 transition"
        />

        <textarea
          placeholder="Message"
          rows="4"
          className="w-full border border-[#ccc] p-3 rounded-lg
          outline-none focus:ring-2 focus:ring-green-600 transition"
        />

        <button className="bg-green-600 cursor-pointer hover:bg-black transition text-white px-6 py-3 rounded-full">
          Send Message
        </button>
      </form>
    </section>
  );
}
