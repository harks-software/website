// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import Icons
import { Autoplay, Navigation, Pagination } from "swiper";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

export type Item = {
  image: string;
};

export interface Props {
  items: Array<Item>;
}

export const PreviousWork = ({ items }: Props) => {
  return (
    <Swiper
      modules={[Autoplay]}
      slidesPerView={1}
      initialSlide={0}
      spaceBetween={0}
      loop={true}
      centeredSlides={true}
      speed={500}
      autoplay={{
        delay: 10000,
        disableOnInteraction: false,
      }}
    >
      <div className="px-12">
        {items.map((item, i) => (
          <SwiperSlide key={`previous_work_${i}`}>
            <div
              className={`group h-96 !bg-cover !bg-no-repeat !bg-center`}
              style={{
                background: `url('${item.image}')`,
              }}
            >
              <div className="flex flex-col justify-center h-96 px-12 pb-8 bg-black/50">
                <h3 className="font-extrabold text-white text-xs sm:text-sm md:text-xl">
                  IT IS REPORTED THAT IMAM ALI (A.S) SAID:
                </h3>
                <p className="font-semibold text-white text-xs sm:text-sm md:text-xl py-4 lg:py-8 lg:w-[715px]">
                  &ldquo;Allah says: &apos;Paradise is forbidden for one who is
                  wealthy yet stingy; as well as for the backbiter, who is the
                  gossiper.&apos; Surely, whoever gives in charity, each silver
                  coin that he gives will be a blessing in Paradise, the weight
                  of each of which is like that of Mount Uhud.&rdquo;
                </p>
                <p className="font-medium text-white text-xs sm:text-sm md:text-xl">
                  [Al-Amālī of Saduq, The Sixty-Sixth Assembly]
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </div>
    </Swiper>
  );
};
