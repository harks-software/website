"use client";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./explore-slideshow.css";

// Import Icons
import { Navigation, Pagination } from "swiper/modules";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

export type Item = {
  url: string;
  thumbnailUrl: string;
};

export interface Props {
  items: Array<Item>;
}

export const ExploreSlideshowMI = ({ items }: Props) => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      navigation={true}
      slidesPerView={1}
      initialSlide={0}
      pagination={{ clickable: true }}
      className="exploreSwiper"
      spaceBetween={0}
      breakpoints={{
        700: {
          slidesPerView: 2,
        },
        1100: {
          slidesPerView: 3,
        },
      }}
    >
      <div className="px-12">
        {items.map((item) => (
          <SwiperSlide key={item.url}>
            <a
              className="flex h-[320px] w-[300px] flex-col rounded-md bg-[#18181873]"
              href={item.url}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className="group h-[350px] w-full rounded-md"
                style={{
                  background: `url('${item.thumbnailUrl}') no-repeat center center /cover`,
                }}
              ></div>
              {/* Item title and description */}
            </a>
          </SwiperSlide>
        ))}
      </div>
    </Swiper>
  );
};
