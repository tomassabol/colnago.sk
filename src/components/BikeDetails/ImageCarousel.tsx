"use client";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Keyboard, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "~/assets/styles/swiper.css";
import { BikeDetailsGallery } from "~/db/schema";

export default function ImageCarousel({
  images,
}: {
  images: BikeDetailsGallery[];
}) {
  return (
    <div className="flex h-fit w-full lg:w-1/2">
      <Swiper
        className="rounded-xl border shadow-sm"
        modules={[Navigation, Pagination, Keyboard]}
        spaceBetween={50}
        slidesPerView={1}
        keyboard={true}
        pagination={{ clickable: true }}
        navigation={{ enabled: true }}
      >
        {images.map((image) => (
          <SwiperSlide key={image.id}>
            <Image
              src={image.imageUrl}
              alt="Bike Image"
              width={1920}
              height={1080}
              placeholder="blur"
              blurDataURL={image.imageUrl}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
