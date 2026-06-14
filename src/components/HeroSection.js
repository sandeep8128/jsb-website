import React from 'react';
import containers from '../assets/containers.jpg';

export default function HeroSection() {
  return (
    <section
      className="relative flex flex-col items-center justify-center text-center text-white h-screen bg-cover bg-center m-0"
      style={{ backgroundImage: `url(${containers})` }}
    >
      {/* Overlay for dark tint */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Text content */}
      <div className="relative z-10 px-6 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Driving Growth Through <span className="text-red-500">Logistics</span>
        </h1>
        <p className="text-gray-200 mb-8">
          JSB Group is a trusted business conglomerate offering logistics solutions,
          trading expertise, enterprise services, and community forums. With a legacy
          of excellence and innovation, we connect businesses, empower growth, and
          deliver results.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full text-base">
            Get in Touch
          </button>
          <button className="border border-white text-white px-8 py-3 rounded-full text-base hover:bg-white hover:text-black">
            Explore Our Businesses
          </button>
        </div>
      </div>
    </section>
  );
}
