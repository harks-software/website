import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "@/styles/explore-slideshow.css";
import "@/styles/testimonials.css";
import "@/styles/about-us.css";
import "@/styles/image-slideshow.css";
import "@/styles/video-slideshow.css";

import { openSans, oswald, archDaughter, bebasNeue, montserrat } from "../utils/fonts";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${openSans.className}`}>
      <Component {...pageProps} />
    </main>
  );
}
