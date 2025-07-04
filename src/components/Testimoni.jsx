// components/TestimonialSlider.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import { Autoplay } from "swiper/modules";

const testimonials = [
  {
    id: 1,
    text: "Metodenya unik dan asyik, waktu belajar pun tidak terasa saking asyiknya",
    name: "Airin"
  },
  {
    id: 2,
    text: "Belajar dengan cara ini jadi lebih gampang dan menyenangkan!",
    name: "Budi"
  },
  {
    id: 3,
    text: "Fleksibel sekali, bisa belajar kapan saja dan di mana saja.",
    name: "Citra"
  }
];

const TestimonialSlider = () => {
  return (
    <section
      id="testimoniSection"
      className="max-w-5xl mx-auto px-6 py-16 mb-20 text-center h-full"
    >
      <h2 className="text-3xl font-semibold text-yellow-500 mb-8">Testimoni</h2>

      <Swiper
        modules={[Autoplay]}
        centeredSlides={true}
        slidesPerView={1.3}
        spaceBetween={20}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          waitForTransition: true
        }}
        speed={800}
        className="testimonial-swiper"
      >
        {testimonials.map(({ id, text, name }) => (
          <SwiperSlide key={id}>
            <div className="relative rounded-lg shadow-lg overflow-hidden outline-1 outline-yellow-400 mb-5">
              <div className="absolute inset-x-0 top-0 h-3 bg-yellow-400 rounded-t-lg"></div>

              <div className="bg-white pt-16 pb-8 px-8 min-h-[220px] flex flex-col justify-center">
                {/* Quotation marks and text */}
                <p className="text-gray-700 text-sm md:text-lg leading-relaxed mb-12 relative px-8">
                  <span className="text-yellow-400 text-4xl font-bold absolute left-4 top-0 -translate-y-1/2">
                    &ldquo;
                  </span>
                  {text}
                  <span className="text-yellow-400 text-4xl font-bold absolute right-4 bottom-0 translate-y-1/2">
                    &rdquo;
                  </span>
                </p>

                {/* Image and name */}
                <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex flex-col items-center w-full">
                  <span className="mt-4 text-white font-semibold text-lg bg-yellow-400 rounded-xl px-6 py-2 shadow-lg">
                    {name}
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default TestimonialSlider;
