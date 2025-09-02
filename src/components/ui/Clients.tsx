// "use client";
// import Image from "next/image";

// const logos = [
//   "/logo1.png",
//   "/logo2.png",
//   "/logo3.png",
//   "/logo4.png",
//   "/logo5.png",
//   "/logo6.png",
// ];

// export default function ClientsSection() {
//   return (
//     <section className="w-full bg-white py-12">
//       <div className="max-w-7xl mx-auto px-4 text-center">
//         {/* Title */}
//         <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
//           Our Clients
//         </h2>
//         <p className="text-gray-500 mt-2 text-sm md:text-base">
//           We have been working with some Fortune 500+ clients
//         </p>

//         {/* Logos */}
//         <div className="mt-8 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 items-center justify-items-center">
//           {logos.map((logo, idx) => (
//             <div key={idx} className="relative w-20 h-10 grayscale opacity-80 hover:opacity-100">
//               <Image src={logo} alt={`Client ${idx + 1}`} fill className="object-contain" />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }




"use client";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const logos = [
  "/logo1.png",
  "/logo2.png",
  "/logo3.png",
  "/logo4.png",
  "/logo5.png",
  "/logo6.png",
  "/logo1.png",
  "/logo2.png",
];

export default function ClientsCarousel() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    slidesToShow: 5,
    slidesToScroll: 1,
    pauseOnHover: false,
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 480, settings: { slidesToShow: 2 } },
    ],
  };

  return (
    <section className="w-full bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
          Our Clients
        </h2>
        <p className="text-gray-500 mt-2 text-sm md:text-base">
          We have been working with some Fortune 500+ clients
        </p>

        {/* Carousel */}
        <div className="mt-8">
          <Slider {...settings}>
            {logos.map((logo, idx) => (
              <div key={idx} className="flex justify-center">
                <div className="relative w-24 h-12 grayscale opacity-80 hover:opacity-100">
                  <Image
                    src={logo}
                    alt={`Client ${idx + 1}`}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
