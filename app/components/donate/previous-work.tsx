// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import Icons
import { Autoplay } from "swiper/modules";
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
              className="group h-96 !bg-cover !bg-center !bg-no-repeat"
              style={{
                background: `url('${item.image}')`,
              }}
            >
              <div className="flex h-96 flex-col justify-center bg-black/50 px-12 pb-8">
                <h3 className="text-xs font-extrabold text-white sm:text-sm md:text-xl">
                  IT IS REPORTED THAT IMAM ALI (A.S) SAID:
                </h3>
                <p className="py-4 text-xs font-semibold text-white sm:text-sm md:text-xl lg:w-[715px] lg:py-8">
                  &ldquo;Allah says: &apos;Paradise is forbidden for one who is
                  wealthy yet stingy; as well as for the backbiter, who is the
                  gossiper.&apos; Surely, whoever gives in charity, each silver
                  coin that he gives will be a blessing in Paradise, the weight
                  of each of which is like that of Mount Uhud.&rdquo;
                </p>
                <p className="text-xs font-medium text-white sm:text-sm md:text-xl">
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
