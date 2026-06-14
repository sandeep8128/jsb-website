import React from "react";

export default function AboutUs() {
  const stats = [
    { number: "15+", label: "Years of business excellence" },
    { number: "100+", label: "Clients across industries" },
    { number: "24/7", label: "Customer Support" },
    { number: "4", label: "Strong Business Verticals" },
  ];

  return (
    <section className="py-20 px-6 bg-gray-50 text-center">
      {/* Title */}
      <h2 className="text-4xl font-extrabold mb-6">About Us</h2>
      <h3 className="text-lg font-semibold mb-4">
        JSB Group — A Legacy of Trust and Innovation
      </h3>

      {/* Paragraph */}
      <p className="max-w-3xl mx-auto text-gray-700 leading-relaxed mb-12">
        Founded with a vision to transform industries, JSB Group has grown into
        a diversified business leader with operations across logistics, trading,
        enterprise solutions, and community forums. We are committed to
        excellence, innovation, and long-term partnerships, enabling businesses
        to thrive in a fast-changing world.
      </p>

      {/* Stats Boxes */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
        {stats.map((item, i) => (
          <div
            key={i}
            className="rounded-2xl p-8 border border-red-100 bg-white text-black transition-all duration-300 hover:bg-black hover:text-white hover:scale-105"
          >
            <h3 className="text-3xl font-bold mb-2">{item.number}</h3>
            <p className="text-sm font-medium">{item.label}</p>
          </div>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-4">
        <button className="bg-red-600 text-white px-6 py-3 rounded-full font-medium hover:bg-red-700 transition">
          Get in Touch
        </button>
        <button className="border border-black px-6 py-3 rounded-full font-medium hover:bg-black hover:text-white transition">
          Know more about us
        </button>
      </div>
    </section>
  );
}
