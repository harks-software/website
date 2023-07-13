import { VideoFile } from "@/components/video-slideshow";
import { ImageFile } from "@/components/image-slideshow";
import { MainLayout } from "./main";

import { ImageSlideshow } from "@/components/image-slideshow";
import { VideoSlideshow } from "@/components/video-slideshow";

import Image from "next/image";

import { oswald } from "@/utils/fonts";
import { ReactElement } from "react";

interface VideosLayoutProps {
  children?: ReactElement | ReactElement[];
  category: string;
  heading: string;
  backgroundStyle: Object;
  description?: string;
  plus: {
    videos: boolean;
    guests: boolean;
  };
  imagesHeading: string;
  images: Array<ImageFile>;
  videos: Array<VideoFile>;
  quote?: string;
  quoteFrom?: string;
}

export function VideosLayout(props: VideosLayoutProps) {
  return (
    <MainLayout title={props.heading}>
      <div
        className="block min-w-full py-5 text-white md:py-10"
        style={props.backgroundStyle}
      >
        <h2
          className={`mt-10 px-5 ${oswald.className} text-xs font-bold italic tracking-[0.5em] text-white md:mt-28 md:px-10 md:text-base`}
        >
          {props.category.toUpperCase()}
        </h2>
        <h2 className="mt-3 px-5 text-xl font-thin text-white md:mt-5 md:px-10 md:text-4xl">
          <strong className={`${oswald.className}`}>{props.heading}</strong> on
          <Image
            className="ml-2 inline-block h-[1.75rem] w-[1.75rem] md:h-[2.5rem] md:w-[2.5rem]"
            src={require("/public/assets/youtube.png")}
            alt="YouTube"
          />
        </h2>
        <p
          className={`mt-3 px-5 md:mt-5 md:px-10 ${
            props.description ? "" : "hidden"
          }`}
        >
          {props.description}
        </p>
        <div className="mt-5 flex items-center px-5 md:mt-8 md:px-10">
          <div className="rounded-xl p-2 text-center md:p-4 bg-[rgba(255,255,255,0.25)]">
            <p className="">Videos</p>
            <p className="font-bold">{`${props.videos.length}${
              props.plus.videos ? "+" : ""
            }`}</p>
          </div>
          <div className="ml-5 rounded-xl p-2 text-center md:p-4 bg-[rgba(255,255,255,0.25)]">
            <p className="">Guests</p>
            <p className="font-bold">{`${props.images.length}${
              props.plus.guests ? "+" : ""
            }`}</p>
          </div>
        </div>
        <div className="mt-5 px-5 py-3 md:mt-12 md:px-10">
          <VideoSlideshow videos={props.videos} title={props.heading} />
        </div>
      </div>
      <h1 className="mt-8 text-center text-xl font-bold md:text-3xl">
        {props.imagesHeading}
      </h1>
      <div className="mx-auto mt-5 h-[10px] w-[72px] bg-red-700"></div>
      <div className="mt-8 px-5 md:mt-12 md:px-10">
        <ImageSlideshow images={props.images} />
      </div>
      <div
        className={`mx-auto my-8 w-full max-w-2xl px-3 md:my-12 ${
          props.quote ? "" : "hidden"
        }`}
      >
        <p className="text-center">"{props.quote}"</p>
        <p
          className={`text-center font-bold ${props.quoteFrom ? "" : "hidden"}`}
        >
          - {props.quoteFrom}
        </p>
      </div>
      <div>{props.children}</div>
    </MainLayout>
  );
}
