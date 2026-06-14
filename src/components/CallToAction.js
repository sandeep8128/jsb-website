import React from "react";
import officeImg from "../assets/office.jpg";

export default function CallToAction() {
  return (
    <section className="relative my-16 rounded-2xl overflow-hidden">
     <img
            src={officeImg}
            alt="Directors Message"
            className="w-full object-cover"
          />
      <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center text-white px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-3">
          Ready to Grow with JSB Group?
        </h2>
        <p className="max-w-xl mb-6 text-sm md:text-base">
          Discover how our logistics expertise, trading services, and enterprise
          solutions can help your business succeed.
        </p>
        <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full font-semibold transition">
          Get in Touch
        </button>
      </div>
    </section>
  );
}
