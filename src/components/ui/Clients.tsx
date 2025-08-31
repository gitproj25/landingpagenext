"use client";
import Image from "next/image";

const logos = [
  "/logo1.png",
  "/logo2.png",
  "/logo3.png",
  "/logo4.png",
  "/logo5.png",
  "/logo6.png",
];

export default function ClientsSection() {
  return (
    <section className="w-full bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
          Our Clients
        </h2>
        <p className="text-gray-500 mt-2 text-sm md:text-base">
          We have been working with some Fortune 500+ clients
        </p>

        {/* Logos */}
        <div className="mt-8 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 items-center justify-items-center">
          {logos.map((logo, idx) => (
            <div key={idx} className="relative w-20 h-10 grayscale opacity-80 hover:opacity-100">
              <Image src={logo} alt={`Client ${idx + 1}`} fill className="object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
