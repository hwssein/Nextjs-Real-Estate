"use client";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Zoom } from "swiper/modules";
import "swiper/css";
import "swiper/css/zoom";
import "swiper/css/pagination";
import "swiper/css/navigation";

function PostDetailsImage({ data }) {
  return (
    <>
      <Swiper
        className="w-full rounded"
        zoom={true}
        pagination={{ dynamicBullets: true }}
        modules={[Pagination, Zoom]}
      >
        {data?.map((item, index) => (
          <SwiperSlide key={index} className="w-full">
            <div className="swiper-zoom-container">
              <Image
                src={item}
                width={500}
                height={400}
                alt={`${index}-post-image`}
                className="w-full h-auto"
                priority={true}
                layout="responsive"
              ></Image>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default PostDetailsImage;
