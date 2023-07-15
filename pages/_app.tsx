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
import { Montserrat } from "@next/font/google";
import Script from "next/script";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-XQL7DBF32L"
      ></Script>
      <Script strategy="afterInteractive" id="google-analytics">
        {`  window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-XQL7DBF32L');
        `}
      </Script>
      <main className={montserrat.className}>
        <Component {...pageProps} />
      </main>
    </>
  );
}
