// Import Swiper React components
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { A11y, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

export type ImageFile = {
  url: string;
  title: string;
};

export interface Props {
  images: Array<ImageFile>;
}

export const ImageSlideshow = ({ images }: Props) => (
  <Swiper
    className="imageSwiper"
    modules={[Navigation, A11y]}
    navigation={true}
    spaceBetween={20}
    slidesPerView={"auto"}
    initialSlide={0}
  >
    {images.map((image) => (
      <SwiperSlide key={image.url}>
        <div
          className="group h-[219.487px] w-[164.487px] cursor-pointer rounded-lg active:rounded-lg md:h-[350.667px] md:w-[263px]"
          style={{
            background: `url(${image.url}) no-repeat center center /cover`,
          }}
        >
          <div className="image-cover absolute top-0 left-0 z-0 h-full w-full rounded-lg">
            <div className="absolute bottom-0 z-10 hidden group-hover:block group-active:block">
              <h1 className="px-5 pb-5 font-bold text-white md:text-2xl">
                {image.title}
              </h1>
            </div>
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
);
