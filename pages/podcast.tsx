import { MainLayout } from "../layouts/main";
import { BsSpotify } from "react-icons/bs";
import { SiApplemusic, SiGooglepodcasts } from "react-icons/si";

export default function Podcast() {
  return (
    <MainLayout bottomPadding title="Podcast">
      <>
        <section className="m-0 flex h-[700px] w-full flex-col items-center justify-center bg-cover bg-fixed bg-center bg-no-repeat bg-[url('/assets/podcast/podcast-background.jpg')]">
          <div className="flex h-full w-full flex-col items-center justify-center bg-black py-14 opacity-80 md:flex-row md:py-0 md:px-24">
            <div className="flex-[0.25] justify-center pb-12 text-center opacity-100 md:flex-[0.5] md:text-left">
              <h5 className="mb-4 text-lg font-medium text-yellow.500">
                Sheikh Nabil Awan - Episode 1
              </h5>
              <h1 className="mb-4 text-2xl font-bold text-white md:text-4xl">
                The Hussaini Lifestyle
              </h1>
              <div className="flex">
                <a
                  className="mr-2"
                  href="https://open.spotify.com/episode/0hIJaZAuYeHYvLkPA0iOqZ?si=hIjyQFs5TKutnv3JN96zrQ&utm_source=whatsapp&nd=1"
                >
                  <BsSpotify className="text-white" size={30} />
                </a>
                <a
                  href="https://podcasts.apple.com/us/podcast/the-harks-podcast/id1640660155"
                  className="mx-2"
                >
                  <SiApplemusic className="text-white" size={30} />
                </a>
                <a
                  href="https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy9hMGQ2MDI3Yy9wb2RjYXN0L3Jzcw"
                  className="ml-2"
                >
                  <SiGooglepodcasts className="text-white" size={30} />
                </a>
              </div>
            </div>
            <div className="flex-[0.25] px-6 opacity-100 md:flex-[0.5]">
              <p className="text-white md:text-lg">
                The HARKS Podcast is a new initiative by Hussain&apos;s Ark of
                Salvation where we get guests from all over the world to tackle
                issues and talk about topics related to the youth. For our first
                season we will be posting multiple episodes over the course of
                the Islamic year and we have an amazing guest-list lined up for
                you so make sure to stay tuned.
              </p>
            </div>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            style={{ isolation: "isolate" }}
            viewBox="0 0 500 146.4"
            width="100%"
            height="40%"
            preserveAspectRatio="none"
            className="z-10 hidden md:block"
          >
            <defs>
              <clipPath id="_clipPath_8eNOVcZNUqYICU97fZcYhB9NyFlsTzF6">
                <rect width="500" height="146.4"></rect>
              </clipPath>
            </defs>
            <g clipPath="url(#_clipPath_8eNOVcZNUqYICU97fZcYhB9NyFlsTzF6)">
              <rect
                width="500"
                height="146.4"
                style={{ fill: "rgb(0, 0, 0)" }}
                fill-opacity="0.8"
              ></rect>
              <path
                d=" M 500 0 L 500 146.443 L 0 146.443 L 0 0 C 55.434 78.894 146.783 130.443 250 130.443 C 353.217 130.443 444.566 78.894 500 0 Z "
                fillRule="evenodd"
                fill="rgb(255,255,255)"
              ></path>
            </g>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            style={{ isolation: "isolate" }}
            viewBox="0 0 375 146.4"
            width="100%"
            height="40%"
            preserveAspectRatio="none"
            className="z-10 m-0 md:hidden"
          >
            <defs>
              <clipPath id="_clipPath_GwNCYQO4y3sYZ5EatLzT0uGmVO4iHjTd">
                <rect width="375" height="146.4"></rect>
              </clipPath>
            </defs>
            <g clipPath="url(#_clipPath_GwNCYQO4y3sYZ5EatLzT0uGmVO4iHjTd)">
              <rect
                width="375"
                height="146.4"
                style={{ fill: "rgb(0, 0, 0)" }}
                fill-opacity="0.8"
              ></rect>
              <path
                d=" M 375 -0.043 L 375 146.4 L 0 146.4 L 0 -0.043 C 41.576 78.851 110.088 130.4 187.5 130.4 C 264.912 130.4 333.424 78.851 375 -0.043 Z "
                fillRule="evenodd"
                fill="rgb(255,255,255)"
              ></path>
            </g>
          </svg>
        </section>
        <section className="z-50 -mt-48 flex justify-center md:-mt-72">
          <iframe
            width="760"
            height="427.5"
            src="https://www.youtube.com/embed/StYqnF6onLM"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            className="z-50 hidden md:block"
            allowFullScreen
          ></iframe>
          <iframe
            width="80%"
            height="300"
            src="https://www.youtube.com/embed/StYqnF6onLM"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            className="z-50 block md:hidden"
            allowFullScreen
          ></iframe>
        </section>
      </>
    </MainLayout>
  );
}
