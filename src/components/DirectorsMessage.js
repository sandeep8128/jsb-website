import React from "react"
import directorsImg from "../assets/directors.jpg";

export default function DirectorsMessage() {
  return (
    <section className="py-16 text-center bg-white">
      <h2 className="text-2xl font-semibold mb-6">
        Message from our directors
      </h2>
      <div className="flex justify-center">
        <div className="relative w-full max-w-3xl rounded-2xl overflow-hidden shadow-lg">
          <img src={directorsImg} alt="Directors Message" />
          
          <button className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white/80 p-4 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="black"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="black"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5.25 5.25v13.5L19.5 12 5.25 5.25z"
                />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
