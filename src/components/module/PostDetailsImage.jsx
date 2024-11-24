"use client";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";

function PostDetailsImage({ data }) {
  return (
    <>
      <Swiper
        className="w-full rounded"
        pagination={{ dynamicBullets: true }}
        modules={[Pagination]}
      >
        {data?.map((item, index) => (
          <SwiperSlide key={index} className="w-full">
            <Image
              src={item}
              width={500}
              height={400}
              alt={`${index}-post-image`}
              className="w-full h-auto"
              priority={true}
              layout="responsive"
            ></Image>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default PostDetailsImage;
