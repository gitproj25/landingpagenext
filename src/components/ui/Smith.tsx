"use client";
import Image from "next/image";
import Link from "next/link";

export default function Testimonial() {
  return (
    <section className="w-full bg-gray-50 py-10 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Left: Logo / Image */}
        <div className="w-full md:w-1/3 flex justify-center">
          <Image
            src="/smith.svg"
            alt="Tesla logo"
            width={180}
            height={180}
            className="rounded-xl shadow-md"
            priority
          />
        </div>

        {/* Right: Testimonial content */}
        <div className="w-full md:w-2/3">
          <p className="text-gray-700 text-sm md:text-base leading-relaxed">
            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel
            rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare,
            tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi
            laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed
            augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis
            vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat
            ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id.
            Curabitur id nibh id sem dignissim finibus ac sit amet magna.
          </p>

          {/* Name and title */}
          <div className="mt-4">
            <p className="text-green-600 font-semibold">Tim Smith</p>
            <p className="text-gray-500 text-sm">
              British Dragon Boat Racing Association
            </p>
          </div>

          {/* Logos */}
          <div className="flex items-center gap-6 mt-6 flex-wrap">
            <Image
              src="/logo1.png"
              alt="logo1"
              width={40}
              height={40}
            />
            <Image
              src="/logo2.png"
              alt="logo2"
              width={40}
              height={40}
            />
            <Image
              src="/logo3.png"
              alt="logo3"
              width={40}
              height={40}
            />
            <Image
              src="/logo4.png"
              alt="logo4"
              width={40}
              height={40}
            />
            <Image
              src="/logo5.png"
              alt="logo5"
              width={40}
              height={40}
            />

            {/* Link */}
            <Link
              href="#"
              className="text-green-600 font-medium text-sm flex items-center gap-1 hover:underline"
            >
              Meet all customers →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
