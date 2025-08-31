'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

const slides = [
  {
    title: 'Lessons and insights',
    highlight: 'from 8 years',
    description:
      'Where to grow your business as a photographer: site or social media?',
    image: '/banner1.png',
    button: 'Register',
  },
  {
    title: 'Grow your audience',
    highlight: 'with smart tools',
    description:
      'Use advanced insights and analytics to scale your business fast.',
    image: '/banner2.png',
    button: 'Get Started',
  },
  {
    title: 'Boost your sales',
    highlight: 'with automation',
    description:
      'Streamline your workflow and increase revenue effortlessly.',
    image: '/banner3.png',
    button: 'Learn More',
  },
];

export default function BannerSlider() {
  return (
    <section className="w-full bg-gray-50 ">
       <div className="max-w-7xl mx-auto px-4">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop
          aria-label="Banner Slider"
        >
          {slides.map(({ title, highlight, description, image, button }, i) => (
            <SwiperSlide key={i}>
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                {/* Left Content */}
                <div className="max-w-lg text-center md:text-left">
                  <h2 className="text-3xl md:text-5xl font-bold text-gray-800">
                    {title} <span className="text-green-600">{highlight}</span>
                  </h2>
                  <p className="mt-4 text-gray-600">{description}</p>
                  <button className="mt-6 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition">
                    {button}
                  </button>
                </div>

                {/* Right Image */}
                <div className="relative w-full max-w-md h-[200px]">
                  <Image
                    src="image.svg"
                    alt={title}
                    fill
                    className="object-contain"
                    priority={i === 0} // only first slide loads with priority
                  />
                </div>
                
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
