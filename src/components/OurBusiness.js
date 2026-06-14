import React from "react";
import ship1 from "../assets/ship1.jpg";
import ship2 from "../assets/ship2.jpg";
import cupcakes from "../assets/cupcakes.jpg";
import farm from "../assets/farm.jpg";

export default function OurBusiness() {
  const businesses = [
    {
      title: "JSB Logistics",
      desc: "Trucking, freight forwarding and customs clearance",
      img: ship1,
      button: true,
    },
    {
      title: "DVEX (NVOCC — Dubai)",
      desc: "NVOCC services ensuring global trade connectivity.",
      img: ship2,
      button: true,
    },
    {
      title: "RJ Enterprise",
      desc: "Expanding into FMCG with mineral water and bakery products.",
      img: cupcakes,
      button: true,
    },
    {
      title: "JSB Farms",
      desc: "A wellness-focused venture providing natural and holistic lifestyle solutions.",
      img: farm,
      button: true,
    },
  ];

  return (
    <section className="py-20 px-6 bg-white text-center">
      <h2 className="text-5xl font-extrabold mb-12">OUR BUSINESS</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {businesses.map((item, i) => (
          <div
            key={i}
            className="relative rounded-2xl overflow-hidden shadow-lg group"
          >
            {/* Background Image */}
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center text-white px-4">
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-sm mb-4 max-w-xs">{item.desc}</p>

              {item.button && (
                <button className="bg-white text-black font-medium px-5 py-2 rounded-full flex items-center gap-2 hover:bg-gray-200 transition">
                  Know more →
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
