import Image from "next/image";
import {
  ChangingWordsLarge,
  ChangingWordsSmall,
} from "@/components/home/changing-words";
import { CounterNumericDisplay } from "@/components/home/counter";
import { ExploreSlideshow } from "@/components/home/explore-slideshow";
import { ExploreSlideshowMI } from "@/components/home/explore-slideshow-mi";
import { MainLayout } from "@/layouts/main";
import { montserrat } from "@/utils/fonts";
import Link from "next/link";
import { Testimonials } from "../components/testimonials";
import { CalendarEvents } from "../components/home/calendar-events";
import {
  ChatBubbleLeftRightIcon,
  GlobeAmericasIcon,
  LightBulbIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";

export default function Index() {
  return (
    <MainLayout bottomPadding={false} title="Home">
      <section
        className="flex min-h-[1000px] w-full flex-col gap-16 bg-cover bg-center bg-no-repeat lg:px-24 py-16"
        style={{
          backgroundImage: "url('/assets/home/section-1-background.png')",
        }}
      >
        <div
          className={`flex flex-col gap-8 ${montserrat.className} text-white md:flex-[0.7] flex justify-center px-4 lg:justify-start max-w-2xl`}
        >
          <h2 className="text-3xl font-bold md:pb-0 md:text-4xl">
            Establishing a digital hub & engaging the global community in a fast
            changing world
          </h2>
          <p className="text-base font-medium md:text-lg">
            We&apos;re a global youth-led organization that aims to help
            individuals and communities get closer to Allah (S.W.T) through the
            Holy Qur&apos;an and the AhlulBayt (A.S)
          </p>
          <Link
            className="text-black flex cursor-pointer w-fit rounded-lg bg-white p-3 text-xs font-bold transition-all duration-200 hover:bg-zinc-400/60 uppercase hover:text-white"
            href="/about-us"
          >
            About Us
          </Link>
        </div>
        <div
          className={`flex flex-wrap items-center justify-evenly pb-14 ${montserrat.className} md:flex-row md:items-start md:pb-12 lg:flex-nowrap lg:justify-start`}
        >
          <div className="flex flex-col items-center px-6 pb-4 text-white lg:px-0 lg:pb-0">
            <UserGroupIcon className="w-14 h-14" />
            <CounterNumericDisplay
              to={40}
              className="text-xl font-semibold md:py-2 md:text-4xl "
            />
            <span className="font-medium md:text-base">VOLUNTEERS</span>
          </div>
          <div className="flex flex-col items-center px-6 pb-4 text-white lg:px-0 lg:pb-0 lg:pl-24">
            <GlobeAmericasIcon className="w-14 h-14" />
            <CounterNumericDisplay
              to={7}
              className="text-xl font-semibold md:py-2 md:text-4xl"
            />
            <span className="font-medium leading-8 md:text-lg">COUNTRIES</span>
          </div>
          <div className="flex flex-col items-center px-6 pb-4 text-white lg:px-0 lg:pb-0 lg:pl-24">
            <LightBulbIcon className="w-14 h-14" />
            <CounterNumericDisplay
              to={5}
              className="text-xl font-semibold md:py-2 md:text-4xl"
            />
            <span className="font-medium leading-8 md:text-lg">PROJECTS</span>
          </div>
          <div className="flex flex-col items-center px-6 pb-4 text-white lg:px-0 lg:pb-0 lg:pl-24">
            <ChatBubbleLeftRightIcon className="w-14 h-14" />
            <CounterNumericDisplay
              to={10}
              className="text-xl font-semibold md:py-2 md:text-4xl "
            />
            <span className="font-medium leading-8 md:text-lg">COLLABS</span>
          </div>
        </div>
        <div className="mt-6 flex w-full flex-1 flex-col justify-center py-12 md:mt-12">
          <div
            className={`mx-auto text-center ${montserrat.className} text-xl font-bold uppercase leading-[30px] text-white lg:text-3xl lg:leading-[60px]`}
            style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
          >
            “Verily <span className="text-[#BE1E2D]">Hussain</span> is the
            shining <span className="text-[#D29923]">light of guidance</span>
            <br /> and the{" "}
            <span className="text-[#BE1E2D]">ark of salvation.</span>”
          </div>
          <div
            className={`w-max mx-auto mt-12 border-4 p-4 ${montserrat.className} text-lg font-bold text-[#D29923] sm:text-xl md:mt-8 md:text-xl lg:text-2xl`}
          >
            Prophet Muhammad (PBUH)
          </div>
        </div>
      </section>
      <section className="flex h-[350px] items-center overflow-hidden bg-[#282828] md:py-12">
        <ChangingWordsLarge className="hidden md:flex" />
        <ChangingWordsSmall className="flex md:hidden" />
      </section>
      <section
        className="w-full pt-2"
        style={{
          backgroundImage:
            "linear-gradient(180deg, #BE1E2D 0%, #D36732 65.1%, #E7AD36 100%)",
        }}
      >
        <div
          className={`flex w-full items-center justify-center bg-white py-2 text-center ${montserrat.className} text-base font-bold`}
          style={{ boxShadow: "0px 6px 6px rgba(0, 0, 0, 0.25)" }}
        >
          USING DIGITAL INNOVATION TO STRENGTHEN OUR FAITH AND SERVE COMMUNITIES
          AROUND THE GLOBE
        </div>
        <div className="relative w-full py-8">
          <div className="px-16">
            <h3
              className={`pb-2 text-center ${montserrat.className} text-xl font-bold text-white opacity-80 md:text-left`}
            >
              EXPLORE
            </h3>
            <h2
              className={`text-center ${montserrat.className} text-3xl font-bold text-white md:text-left`}
            >
              PROJECTS
            </h2>
          </div>
          <Image
            src={require("/public/assets/home/chat-3d.png")}
            className="absolute mix-blend-overlay md:right-0"
            width={undefined}
            height={undefined}
            alt="background image"
          />
          <div className="w-full py-6">
            <ExploreSlideshow
              items={[
                {
                  title: "The HARKS Podcast",
                  description:
                    "Notable speakers and young individuals to discuss how to tackle the current issues faced by today's youth.",
                  url: "/podcast",
                  thumbnailUrl: "assets/home/explore/podcast.png",
                },
                {
                  title: "Youth Day",
                  description:
                    "An annual event to celebrate the youth in honour of Hazrat Ali Akbar (A.S).",
                  url: "https://youthday.hussainsark.com",
                  thumbnailUrl: "/assets/home/explore/youthday.jpg",
                },
                {
                  title: "Virtual Majlis Service",
                  description:
                    "Providing you the opportunity to use our platform and support to host an online event.",
                  url: "/virtual-majlis-service",
                  thumbnailUrl: "assets/home/explore/vms.png",
                },
              ]}
            />
          </div>
          <div className="px-16">
            <h3
              className={`pb-2 text-center ${montserrat.className} text-xl font-bold text-white opacity-80 md:text-left`}
            >
              EXPLORE
            </h3>
            <h2
              className={`text-center ${montserrat.className} text-3xl font-bold text-white md:text-left`}
            >
              MONTHLY INITIATIVES
            </h2>
          </div>
          <Image
            src={require("/public/assets/home/puzzle-3d.png")}
            className="absolute -left-10 bottom-40 mix-blend-overlay"
            width={undefined}
            height={undefined}
            alt="background image"
          />
          <div className="pt-12 pb-4">
            <ExploreSlideshowMI
              items={[
                {
                  url: "https://www.instagram.com/p/Cm4GlHMJHWQ/",
                  thumbnailUrl:
                    "/assets/home/explore/monthly-initiatives/dhikr.jpg",
                },
                {
                  url: "https://www.instagram.com/p/CmuPHJ-pCDm/",
                  thumbnailUrl:
                    "/assets/home/explore/monthly-initiatives/bibi-fatima sa.jpg",
                },
                {
                  url: "https://www.instagram.com/p/CmNNBs3hiNX/",
                  thumbnailUrl:
                    "/assets/home/explore/monthly-initiatives/fatimyyah-focus.jpg",
                },
                {
                  url: "https://www.instagram.com/p/CmEkdRhowkd/",
                  thumbnailUrl:
                    "/assets/home/explore/monthly-initiatives/prep-disaster.jpeg",
                },
                {
                  url: "https://www.instagram.com/p/CllmnFRoN37/",
                  thumbnailUrl:
                    "/assets/home/explore/monthly-initiatives/what-does-hijab-mean.jpg",
                },
                {
                  url: "https://www.instagram.com/p/Cj2Hgr2IkkQ/",
                  thumbnailUrl:
                    "/assets/home/explore/monthly-initiatives/foods-from-holy-quran.jpg",
                },
                {
                  url: "https://www.instagram.com/p/Cjswtc7IjHD/",
                  thumbnailUrl:
                    "/assets/home/explore/monthly-initiatives/advice-imam-sadiq-as.jpeg",
                },
                {
                  url: "https://www.instagram.com/p/Ci7c3Rfo_4j/",
                  thumbnailUrl:
                    "/assets/home/explore/monthly-initiatives/lessons-from-the-prophe-(pbuh).jpeg",
                },
              ]}
            />
          </div>
        </div>
      </section>
      <section
        className={`flex w-full flex-col items-center bg-beige.300 px-0 ${montserrat.className} md:py-14 lg:flex-row lg:items-start lg:px-8 xl:px-24`}
      >
        <div className="flex flex-col lg:flex-[0.6]">
          <div className="flex flex-row items-center">
            <h2 className="mt-6 pr-2 text-3xl font-bold text-gray.800 sm:pr-4 sm:text-4xl md:mt-0">
              Get Involved
            </h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="mt-6 h-10 w-10 text-gray.800 sm:h-10 sm:w-10 md:mt-0"
              style={{ filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))" }}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
              ></path>
            </svg>
          </div>

          <div className="flex flex-col py-4">
            <div className="my-4 h-[175px] w-[300px] rounded-lg shadow-lg sm:w-[472px] bg-white/70">
              <div className="flex h-full w-full flex-row">
                <div className="h-[175px] w-4 rounded-l-lg bg-red.500"></div>
                <div className="w-full p-4 pr-0">
                  <div className="flex w-full">
                    <h4 className="whitespace-nowrap pr-1 text-2xl font-semibold text-black sm:text-3xl">
                      Join The Crew
                    </h4>
                    <Link href="/join-the-crew" className="ml-auto">
                      <button
                        className="ml-auto whitespace-nowrap rounded-l-lg bg-red.500 p-1 text-sm font-semibold text-white transition-all duration-200 hover:opacity-80 sm:p-3 sm:text-base"
                        style={{
                          textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                        }}
                      >
                        CLICK HERE
                      </button>
                    </Link>
                  </div>
                  <p className="w-full pt-2 sm:w-3/4">
                    Do what you do best, bring in fresh ideas and be a part of
                    our global crew so we can make a true difference!
                  </p>
                </div>
              </div>
            </div>
            <div className="my-4 h-[175px] w-[300px] rounded-lg shadow-lg sm:w-[472px] bg-white/70">
              <div className="flex h-full w-full flex-row">
                <div className="h-[175px] w-4 rounded-l-lg bg-[#E7AD36]"></div>
                <div className="w-full p-4 pr-0">
                  <div className="flex w-full">
                    <h4 className="text-2xl font-semibold text-black sm:text-3xl">
                      Contact Us
                    </h4>
                    <Link href="/contact-us" className="ml-auto">
                      <button
                        className="ml-auto rounded-l-lg bg-[#E7AD36] p-1 text-sm font-semibold text-white transition-all duration-200 hover:opacity-80 sm:p-3 sm:text-base"
                        style={{
                          textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                        }}
                      >
                        CLICK HERE
                      </button>
                    </Link>
                  </div>
                  <p className="w-full pt-2 sm:w-3/4">
                    Got any ideas, feedback or queries? Feel free to reach out
                    to us and we hope to be of service!
                  </p>
                </div>
              </div>
            </div>
            <div className="my-4 h-[175px] w-[300px] rounded-lg shadow-lg sm:w-[472px] bg-white/70">
              <div className="flex h-full w-full flex-row">
                <div className="h-[175px] w-4 rounded-l-lg bg-black/80"></div>
                <div className="w-full p-4 pr-0">
                  <div className="flex w-full">
                    <h4 className="text-2xl font-semibold text-black sm:text-3xl">
                      Stay In Touch
                    </h4>
                    <Link href="/whatsapp-broadcasting" className="ml-auto">
                      <button
                        className="ml-auto rounded-l-lg bg-black/80 p-1 text-sm font-semibold text-white transition-all duration-200 hover:opacity-80 sm:p-3 sm:text-base"
                        style={{
                          textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                        }}
                      >
                        CLICK HERE
                      </button>
                    </Link>
                  </div>
                  <p className="w-full pt-2 sm:w-3/4">
                    Want to receive the latest updates from us? Subscribe to our
                    WhatsApp Broadcasting Service!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`flex flex-col ${montserrat.className} lg:flex-[0.4]`}>
          <div className="mt-8 flex flex-row items-center lg:mt-0">
            <h2 className="pr-2 text-3xl font-bold text-gray.800 sm:pr-4 sm:text-4xl">
              Up Next
            </h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="h-10 w-10 text-gray.800"
              style={{ filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))" }}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
              ></path>
            </svg>
          </div>

          <CalendarEvents
            data={[
              {
                dayNumber: 23,
                suffix: "rd",
                day: "Friday",
                title: "Friday Inspiration",
                month: "JUN",
              },
              {
                dayNumber: 25,
                suffix: "th",
                day: "Sunday",
                title: "Sunday Quiz",
                month: "JUN",
              },
              {
                dayNumber: 30,
                suffix: "th",
                day: "Friday",
                title: "Friday Inspiration",
                month: "JUN",
              },
              {
                dayNumber: 2,
                suffix: "nd",
                day: "Sunday",
                title: "Sunday Quiz",
                month: "JUL",
              },
              {
                dayNumber: 7,
                suffix: "th",
                day: "Friday",
                title: "Friday Inspiration",
                month: "JUL",
              },
            ]}
          />
        </div>
      </section>
      <p className="w-full bg-beige.300 text-center text-2xl font-semibold text-[rgba(0,0,0,0.5)] md:text-4xl">
        . . .
      </p>
      <section className="flex w-full bg-beige.300 py-12 px-4 lg:px-8 xl:px-24">
        <Testimonials
          list={[
            {
              content:
                "HARKS is a youth driven initiative. They strive for excellence in what they do. They serve the cause of the AhlulBayt (A.S) by debunking myths and sharing inspirations digitally. I encourage our youth to join the crew as they strive to empower the leaders of tomorrow.",
              quoted: "Sheikh Nuru Muhammad",
              img: "sheikh-nuru.jpg",
            },
            {
              content:
                "HARKS is an amazing initiative that inspires and attracts the youth of our community towards the path of Allah (swt) and the Ahlul Bayt (as). Their events are impactful and innovative and we look forward to seeing them continue to grow and develop the future of our community.",
              quoted: "Servants of Zahra",
              img: "servents-of-zahra.jpg",
            },
          ]}
        />
      </section>
    </MainLayout>
  );
}
