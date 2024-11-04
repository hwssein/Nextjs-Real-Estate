"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function HomePageSlide() {
  const cities = [
    "تهران",
    "مشهد",
    "رشت",
    "اصفهان",
    "شیراز",
    "تبریز",
    "اهواز",
    "همدان",
    "ساری",
    "سنندج",
  ];

  return (
    <>
      <div className="w-full bg-[url(/image/homepage-banner2.jpg)] bg-center bg-no-repeat bg-cover p-4 rounded flex flex-col items-center justify-start gap-10 sm:py-6 sm:gap-12">
        <div className="w-full">
          <h2 className="w-full text-center text-darkPrimary font-bold text-2xl">
            یک ایران شما را می بیند
          </h2>
          <p className="w-full text-center text-darkPrimary mt-2">
            از شمال تا جنوب، هرجا که باشید، بهترین فرصت‌ها در دسترس شماست
          </p>
        </div>

        <Swiper
          className="w-full flex items-center justify-start"
          spaceBetween={20}
          slidesPerView={4}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          loop={true}
          speed={1500}
          breakpoints={{
            640: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 5,
            },
          }}
          modules={[Autoplay]}
        >
          {cities.map((item) => (
            <SwiperSlide
              key={item}
              className="bg-bgMain text-secondary text-center rounded p-1"
            >
              {item}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default HomePageSlide;
