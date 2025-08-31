"use client";
import Image from "next/image";

export default function BusinessInfo() {
  return (
    <section className="w-full bg-white py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10 md:gap-16">
        {/* Left: Illustration */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/unseen.svg" alt="Business illustration"
            width={400}
            height={400}
            className="w-full max-w-sm md:max-w-md"
            priority
          />
        </div>

        {/* Right: Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h3 className="text-xl md:text-2xl font-semibold text-gray-800">
            How to design your site footer like we did
          </h3>
          <p className="mt-4 text-gray-600 text-sm md:text-base leading-relaxed">
            Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt
            molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at
            libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at
            porta nisi facilisis finibus.
          </p>
          <button className="mt-6 px-6 py-3 bg-green-600 text-white rounded-md shadow hover:bg-green-700 transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
