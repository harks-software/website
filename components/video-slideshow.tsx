// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Image from "next/image";
// Import Icons
import {
  ArrowLeftIcon,
  PlayCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid/index";
import { useState } from "react";
import Modal from "react-modal";
import { A11y, Controller, Navigation, Pagination } from "swiper";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

export type VideoFile = {
  url: string;
  title: string;
  description: string;
  thumbnailUrl: string;
};

export interface Props {
  videos: Array<VideoFile>;
  title: string;
}

export const VideoSlideshow = ({ videos, title }: Props) => {
  // The fullscreen mode content will go inside the modal, which goes inside the body.
  Modal.setAppElement("body");

  // Set modal style to take up the entire screen.
  const modalStyle = {
    content: {
      top: "0",
      left: "0",
      bottom: "0",
      width: "100vw",
      color: "black",
      padding: "0",
      margin: "0",
      border: "0",
    },
    overlay: { zIndex: 10001 },
  };

  // whether to display fullscreen or regular content.
  const [fullScreen, setFullScreen] = useState(false);
  // the index of the video to play in fullscreen mode
  const [activeIndex, setActiveIndex] = useState(0);

  // the two swipers in non-mobile fullscreen mode
  const [bigSwiper, setBigSwiper]: any = useState(null);
  const [smallSwiper, setSmallSwiper]: any = useState(null);

  // toggle fullscreen view
  // if the new mode is fullscreen, set the playing video to clickedVideo
  const toggleFullScreen = (clickedVideo: any) => {
    document.body.style.overflow = fullScreen ? "auto" : "hidden";
    setActiveIndex(videos.indexOf(clickedVideo));
    setFullScreen(!fullScreen);
  };
  return (
    <div>
      <Modal isOpen={fullScreen} style={modalStyle}>
        <div className="z-[100001] w-full overflow-hidden sm:hidden">
          {/* Fullscreen content for mobile devices */}
          <div className="mobile-header flex items-center p-3 text-xl">
            {/* Mobile left arrow button for exiting fullscreen. */}
            <button
              className="mr-3"
              onClick={() => {
                toggleFullScreen(null);
              }}
            >
              <ArrowLeftIcon width="1.5rem" height="1.5rem" />
            </button>
            {/* Display title of the entire slideshow. */}
            <h2>{title}</h2>
          </div>
          {/* Display the video to play. */}
          <div className="relative w-full overflow-hidden pt-[56.25%]">
            <iframe
              className="absolute inset-0"
              src={videos[activeIndex]?.url}
              title={videos[activeIndex]?.title}
              loading="lazy"
              width="100%"
              height="100%"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          {/* The title and description of the video to play. */}
          <h1 className="w-[95%] px-5 py-3 text-lg font-bold">
            {videos[activeIndex]?.title}
          </h1>
          <p className="w-[95%] px-5">{videos[activeIndex]?.description}</p>
          {/* The "more video" section. */}
          <div className="mt-10 ml-5 w-10/12 border-b-2 border-b-gray-400 pb-1 text-gray-400">
            {`More ${title}`.toUpperCase()}
          </div>
          <ul className="w-full px-5">
            {/* A list of all the videos except the currently playing one.
                Clicking on a video will make it the currently playing one. */}
            {videos.map((v, i) => (
              <li
                className="my-3 flex w-full cursor-pointer items-center"
                key={i}
                onClick={() => {
                  setActiveIndex(i);
                  document.querySelector(".mobile-header")?.scrollIntoView();
                }}
              >
                <Image
                  className="h-1/6 w-1/4"
                  src={require(`../public${v.thumbnailUrl}`)}
                  alt={""}
                />
                <span className="w-[70%] pl-5 text-sm font-semibold">
                  {v.title}
                </span>
              </li>
            ))}
          </ul>
        </div>
        {/* Fullscreen content for non-mobile view. */}
        <div className="hidden h-full w-full bg-black text-white sm:block">
          {/* Title of the slideshow and "x" button to exit fullscreen. */}
          <div className="flex w-full p-5">
            <h2>{title}</h2>
            <button className="ml-auto" onClick={() => toggleFullScreen(null)}>
              <XMarkIcon width="1.75rem" height="1.75rem" />
            </button>
          </div>
          {/* The big fullscreen swiper. */}
          <Swiper
            modules={[Controller, Navigation]}
            initialSlide={activeIndex}
            slidesPerView={1}
            navigation
            className="bigSwiper mt-5 h-[60%]"
            onSwiper={setBigSwiper}
            onSlideChange={(swiper) => {
              setActiveIndex(swiper.activeIndex);
            }}
            controller={{ control: smallSwiper }}
          >
            {videos.map((video) => (
              <SwiperSlide key={video.url}>
                <iframe
                  className="aspect-video mx-auto h-full max-w-[80%]"
                  src={video.url}
                  title={video.title}
                  loading="lazy"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="smallSwiper text absolute bottom-0 left-0 flex w-full items-center">
            <div className="swiper-button-prev mx-3"></div>
            {/* The small fullscreen swiper at the bottom. */}
            <Swiper
              modules={[Controller, Navigation]}
              initialSlide={0}
              slidesPerView="auto"
              spaceBetween={0}
              navigation={{
                prevEl: ".smallSwiper .swiper-button-prev",
                nextEl: ".smallSwiper .swiper-button-next",
              }}
              autoHeight
              onSwiper={setSmallSwiper}
            >
              {videos.map((video, i) => (
                <SwiperSlide key={video.url}>
                  <div
                    className="group h-[11.25vw] w-[20vw]"
                    style={{
                      backgroundImage: `url(${video.thumbnailUrl})`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "contain",
                      backgroundPosition: "center",
                    }}
                    onClick={() => {
                      setActiveIndex(i);
                      bigSwiper.slideTo(i);
                    }}
                  >
                    <div
                      className={"group-active:flex sm:group-hover:flex flex-col items-center justify-center w-full h-full".concat(
                        activeIndex === i ? " flex" : " cursor-pointer hidden",
                      )}
                      style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
                    >
                      <div
                        className={
                          activeIndex === i ? "hidden text-sm" : "block text-sm"
                        }
                      >
                        <PlayCircleIcon
                          className="inline-block"
                          width="1.5rem"
                          height="1.5rem"
                        />{" "}
                        Play Video
                      </div>
                      <div
                        className={
                          activeIndex === i ? `block text-sm` : `hidden text-sm`
                        }
                      >
                        Now Playing
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="swiper-button-next mx-3"></div>
          </div>
        </div>
      </Modal>
      {/* Content on the main page (non fullscreen mode). */}
      <div className="videoSwiper flex items-center">
        <div className="swiper-button-prev mr-5"></div>
        {/* Swiper on the main page. */}
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          pagination={{ enabled: true }}
          navigation={{ enabled: false, prevEl: "", nextEl: "" }}
          slidesPerView={1}
          initialSlide={0}
          breakpoints={{
            640: {
              navigation: {
                enabled: true,
                prevEl: ".videoSwiper .swiper-button-prev",
                nextEl: ".videoSwiper .swiper-button-next",
              },
              pagination: { enabled: false },
              slidesPerView: "auto",
              spaceBetween: 20,
            },
          }}
        >
          {videos.map((video) => (
            <SwiperSlide key={video.url}>
              <div
                className="flex h-[250px] w-full items-center justify-center bg-black sm:block sm:h-[469.84px] sm:w-[588px] sm:bg-transparent"
                onClick={() => toggleFullScreen(video)}
              >
                {/* Video thumbnail */}
                <div
                  className="group h-[160px] w-full max-w-[550px] sm:h-[70%] sm:max-w-none"
                  style={{
                    background: `url(${video.thumbnailUrl}) no-repeat center center /cover`,
                  }}
                >
                  <div
                    className="flex h-full w-full cursor-pointer flex-col items-center justify-center sm:hidden sm:group-hover:flex sm:group-active:flex"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
                  >
                    <h1 className="p-3 text-center text-lg font-bold underline sm:hidden">
                      {video.title}
                    </h1>
                    <span className="pb-3 sm:text-xl">
                      <PlayCircleIcon
                        className="inline-block"
                        width="2.5rem"
                        height="2.5rem"
                      />{" "}
                      Play Video
                    </span>
                  </div>
                </div>
                {/* Video title and description */}
                <div
                  className="mt-5 hidden h-0 w-[90%] cursor-pointer hover:text-gray-400 sm:block sm:h-[30%]"
                  onClick={() => toggleFullScreen(video)}
                >
                  <h1 className="text-xl font-bold">{video.title}</h1>
                  <p className="mt-3 truncate whitespace-normal">
                    {video.description}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-button-next ml-5 hidden sm:block"></div>
      </div>
    </div>
  );
};
