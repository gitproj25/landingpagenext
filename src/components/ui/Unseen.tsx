"use client";
import Image from "next/image";

export default function UnseenSection() {
  return (
    <section className="w-full bg-white py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16">
        
        {/* Left: Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/unseen.svg"
            alt="Unseen Pixelgrade"
            width={500}
            height={400}
            className="w-full max-w-sm md:max-w-md"
            priority
          />
        </div>

        {/* Right: Text */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
            The unseen of spending three years at Pixelgrade
          </h2>
          <p className="mt-4 text-gray-600 text-sm md:text-base leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. 
            Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem 
            sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium 
            auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum 
            pulvinar odio.
          </p>

          <button className="mt-6 px-6 py-3 bg-green-600 text-white rounded-md shadow hover:bg-green-700 transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
