import "swiper/css";

import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

interface IQuote {
  content: string;
  quoted: string;
  img: string;
}

interface ITestimonialsProps {
  list: IQuote[];
}

export function Testimonials({ list }: ITestimonialsProps) {
  return (
    <Swiper
      className="testimonials"
      spaceBetween={0}
      loop={true}
      centeredSlides={true}
      speed={500}
      autoplay={{
        delay: 10000,
        disableOnInteraction: false,
      }}
      slidesPerView={1}
      modules={[Autoplay]}
      draggable={false}
      allowTouchMove={false}
    >
      {list.map((item) => (
        <SwiperSlide key={item.content}>
          {/* mobile */}
          <div className="relative rounded-2xl bg-white py-6 px-4 md:hidden">
            <i className="fa-solid fa-quote-left absolute left-0 top-36 text-2xl text-[#E7AC37]"></i>
            <i className="fa-solid fa-quote-left absolute right-2 bottom-2 rotate-180 text-2xl text-[#E7AC37]"></i>
            <div className="flex w-full items-center">
              <div
                className="my-2 mr-4 flex h-24 w-24 items-center justify-center rounded-full"
                style={{
                  background:
                    "linear-gradient(180deg, #BE1E2D 0%, #D29923 100%)",
                }}
              >
                <div
                  className="h-[90px] w-[90px] rounded-full bg-white/70 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('/assets/home/testimonials/${item.img}')`,
                  }}
                ></div>
              </div>
              <div className="text-lg font-medium md:text-2xl">
                {item.quoted}
              </div>
            </div>

            <div className="mt-6 flex flex-1 flex-col text-center align-middle">
              <div className="px-2 text-center text-sm font-normal md:text-xl">
                {item.content}
              </div>
            </div>
          </div>
          {/* desktop */}
          <div className="items.center relative hidden content-evenly rounded-2xl bg-white py-6 px-4 md:flex">
            <i className="fa-solid fa-quote-left absolute top-0 left-28 text-5xl text-[#E7AC37]"></i>
            <i className="fa-solid fa-quote-left absolute bottom-0 rotate-180 text-5xl text-[#E7AC37] md:right-8 lg:right-28"></i>
            <div
              className="my-auto mr-4 flex h-24 w-24 items-center justify-center rounded-full"
              style={{
                background: "linear-gradient(180deg, #BE1E2D 0%, #D29923 100%)",
              }}
            >
              <div
                className="h-[90px] w-[90px] rounded-full bg-white/70 bg-cover bg-center"
                style={{
                  backgroundImage: `url('/assets/home/testimonials/${item.img}')`,
                }}
              ></div>
            </div>

            <div className="mt-6 flex flex-1 flex-col text-center align-middle">
              <div className="text-center text-sm font-normal md:text-xl">
                {item.content}
              </div>
              <div className="pt-4 text-lg font-medium md:text-2xl">
                {item.quoted}
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
