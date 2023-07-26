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
  title: string;
  description: string;
  thumbnailUrl: string;
};

export interface Props {
  items: Array<Item>;
}

export const ExploreSlideshow = ({ items }: Props) => {
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
              className="flex h-[318px] w-[300px] flex-col rounded-md bg-[#18181873]"
              href={item.url}
            >
              <div
                className="group h-[197px] w-full rounded-md"
                style={{
                  background: `url(${item.thumbnailUrl}) no-repeat center center /cover`,
                  filter: "drop-shadow(0px 4px 20px rgba(0, 0, 0, 0.25))",
                }}
              ></div>
              {/* Item title and description */}
              <div
                className="mt-5 h-[198px] cursor-pointer px-2 text-center text-white"
                style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
              >
                <h1 className="text-lg font-bold">{item.title}</h1>
                <p className="mt-3 truncate whitespace-normal text-base font-medium">
                  {item.description}
                </p>
              </div>
            </a>
          </SwiperSlide>
        ))}
      </div>
    </Swiper>
  );
};
