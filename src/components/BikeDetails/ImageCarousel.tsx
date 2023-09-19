"use client";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Keyboard, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "~/assets/styles/swiper.css";

export default function ImageCarousel() {
  return (
    <>
      <div className="flex lg:w-1/2">
        <Swiper
          className="rounded-xl border shadow-sm"
          modules={[Navigation, Pagination, Keyboard]}
          spaceBetween={50}
          slidesPerView={1}
          keyboard={true}
          pagination={{ clickable: true }}
          navigation={{ enabled: true }}
        >
          <SwiperSlide className="p-10">
            <Image
              src="https://cdn.myshoptet.com/usr/www.colnago.cz/user/shop/detail/57-17_colnago-c68-bianc.jpg?6447d910"
              alt="c68"
              width={1920}
              height={1080}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="https://cdn.myshoptet.com/usr/www.colnago.cz/user/shop/detail/57-17_colnago-c68-bianc.jpg?6447d910"
              alt="c68"
              width={1920}
              height={1080}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="https://cdn.myshoptet.com/usr/www.colnago.cz/user/shop/detail/57-17_colnago-c68-bianc.jpg?6447d910"
              alt="c68"
              width={1920}
              height={1080}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="https://cdn.myshoptet.com/usr/www.colnago.cz/user/shop/detail/57-17_colnago-c68-bianc.jpg?6447d910"
              alt="c68"
              width={1920}
              height={1080}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
