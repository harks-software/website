import Image from "next/image";
import {
  ChangingWordsLarge,
  ChangingWordsSmall,
} from "@/app/components/home/changing-words";
import { CounterNumericDisplay } from "@/app/components/home/counter";
import { ExploreSlideshow } from "@/app/components/home/explore-slideshow";
import { ExploreSlideshowMI } from "@/app/components/home/explore-slideshow-mi";
import Link from "next/link";
import { Testimonials } from "./components/testimonials";
import { CalendarEvents } from "./components/home/calendar-events";
import {
  ChatBubbleLeftRightIcon,
  GlobeAmericasIcon,
  LightBulbIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
import {
  ArrowRightCircleIcon,
  CalendarDaysIcon,
} from "@heroicons/react/24/outline";
import { UserGroupIcon as UserGroupOutlineIcon } from "@heroicons/react/24/outline";
import Chat from "public/assets/home/chat-3d.png";
import Puzzle from "public/assets/home/puzzle-3d.png";

export default function Index() {
  return (
    <>
      <section
        className="flex min-h-[1000px] w-full flex-col bg-cover bg-center bg-no-repeat pt-36 lg:px-24"
        style={{
          backgroundImage: "url('/assets/home/section-1-background.png')",
        }}
      >
        <div className="flex justify-center px-4 lg:justify-start">
          <div className="flex-1 text-white md:flex-[0.7]">
            <h2 className="pb-6 text-3xl font-bold md:pb-0 md:text-4xl">
              Establishing a <br className="block md:hidden" /> digital hub &
              <br className="hidden md:block" /> engaging the
              <br className="block md:hidden" /> global community
              <br className="hidden md:block" />
              in a fast changing world
            </h2>
            <div className="flex flex-row flex-wrap items-center pt-4 md:flex-nowrap md:pt-16">
              <p className="pr-3 text-base font-medium md:text-lg">
                We&apos;re a global youth-led organization{" "}
                <br className="block md:hidden" />
                that aims to help
                <br className="hidden md:block" /> individuals and{" "}
                <br className="block md:hidden" /> communities get closer to
                Allah (S.W.T)
                <br className="hidden md:block" /> through the Holy Qur&apos;an
                and
                <br className="block md:hidden" /> the AhlulBayt (A.S)
              </p>
              <Link href="/about-us" className="pt-6 md:pt-0">
                <ArrowRightCircleIcon className="h-12 w-12" />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-evenly pb-14 pt-36 md:flex-row md:items-start md:pb-12 lg:flex-nowrap lg:justify-start">
          <div className="flex flex-col items-center px-6 pb-4 text-white lg:px-0 lg:pb-0">
            <UserGroupIcon className="h-14 w-14" />
            <CounterNumericDisplay
              to={40}
              className="text-xl font-semibold md:py-2 md:text-4xl "
            />
            <span className="font-medium md:text-base">VOLUNTEERS</span>
          </div>
          <div className="flex flex-col items-center px-6 pb-4 text-white lg:px-0 lg:pb-0 lg:pl-24">
            <GlobeAmericasIcon className="h-14 w-14" />
            <CounterNumericDisplay
              to={7}
              className="text-xl font-semibold md:py-2 md:text-4xl"
            />
            <span className="font-medium leading-8 md:text-lg">COUNTRIES</span>
          </div>
          <div className="flex flex-col items-center px-6 pb-4 text-white lg:px-0 lg:pb-0 lg:pl-24">
            <LightBulbIcon className="h-14 w-14" />
            <CounterNumericDisplay
              to={5}
              className="text-xl font-semibold md:py-2 md:text-4xl"
            />
            <span className="font-medium leading-8 md:text-lg">PROJECTS</span>
          </div>
          <div className="flex flex-col items-center px-6 pb-4 text-white lg:px-0 lg:pb-0 lg:pl-24">
            <ChatBubbleLeftRightIcon className="h-14 w-14" />
            <CounterNumericDisplay
              to={10}
              className="text-xl font-semibold md:py-2 md:text-4xl "
            />
            <span className="font-medium leading-8 md:text-lg">COLLABS</span>
          </div>
        </div>
        <div className="mt-6 flex w-full flex-1 flex-col justify-center py-12 md:mt-12">
          <div
            className="mx-auto text-center text-xl font-bold uppercase leading-[30px] text-white lg:text-3xl lg:leading-[60px]"
            style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
          >
            “Verily <span className="text-[#BE1E2D]">Hussain</span> is the
            shining <span className="text-[#D29923]">light of guidance</span>
            <br /> and the{" "}
            <span className="text-[#BE1E2D]">ark of salvation.</span>”
          </div>
          <div className="mx-auto mt-12 w-max border-4 p-4 text-lg font-bold text-[#D29923] sm:text-xl md:mt-8 md:text-xl lg:text-2xl">
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
          className="flex w-full items-center justify-center bg-white py-2 text-center text-base font-bold"
          style={{ boxShadow: "0px 6px 6px rgba(0, 0, 0, 0.25)" }}
        >
          USING DIGITAL INNOVATION TO STRENGTHEN OUR FAITH AND SERVE COMMUNITIES
          AROUND THE GLOBE
        </div>
        <div className="relative w-full py-8">
          <div className="px-16">
            <h3 className="pb-2 text-center text-xl font-bold text-white opacity-80 md:text-left">
              EXPLORE
            </h3>
            <h2 className="text-center text-3xl font-bold text-white md:text-left">
              PROJECTS
            </h2>
          </div>
          <Image
            src={Chat}
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
                  url: "/youth-day",
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
            <h3 className="pb-2 text-center text-xl font-bold text-white opacity-80 md:text-left">
              EXPLORE
            </h3>
            <h2 className="text-center text-3xl font-bold text-white md:text-left">
              MONTHLY INITIATIVES
            </h2>
          </div>
          <Image
            src={Puzzle}
            className="absolute -left-10 bottom-40 mix-blend-overlay"
            width={undefined}
            height={undefined}
            alt="background image"
          />
          <div className="pb-4 pt-12">
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
      <section className="flex w-full flex-col items-center bg-beige.300 px-0 md:py-14 lg:flex-row lg:items-start lg:px-8 xl:px-24">
        <div className="flex flex-col lg:flex-[0.6]">
          <div className="flex flex-row items-center">
            <h2 className="mt-6 pr-2 text-3xl font-bold text-gray.800 sm:pr-4 sm:text-4xl md:mt-0">
              Get Involved
            </h2>
            <UserGroupOutlineIcon
              className="mt-6 h-10 w-10 md:mt-0"
              style={{ filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))" }}
            />
          </div>

          <div className="flex flex-col py-4">
            <div className="my-4 h-[175px] w-[300px] rounded-lg bg-white/70 shadow-lg sm:w-[472px]">
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
            <div className="my-4 h-[175px] w-[300px] rounded-lg bg-white/70 shadow-lg sm:w-[472px]">
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
            <div className="my-4 h-[175px] w-[300px] rounded-lg bg-white/70 shadow-lg sm:w-[472px]">
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
        <div className="flex flex-col lg:flex-[0.4]">
          <div className="mt-8 flex flex-row items-center lg:mt-0">
            <h2 className="pr-2 text-3xl font-bold text-gray.800 sm:pr-4 sm:text-4xl">
              Up Next
            </h2>
            <CalendarDaysIcon
              className="h-10 w-10"
              style={{ filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))" }}
            />
          </div>
          <CalendarEvents />
        </div>
      </section>
      <p className="w-full bg-beige.300 text-center text-2xl font-semibold text-[rgba(0,0,0,0.5)] md:text-4xl">
        . . .
      </p>
      <section className="flex w-full bg-beige.300 px-4 py-12 lg:px-8 xl:px-24">
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
    </>
  );
}
