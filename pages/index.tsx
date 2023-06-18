import Image from "next/image";
import { ChangingWordsLarge, ChangingWordsSmall } from "@/components/home/changing-words";
import { CounterNumericDisplay } from "@/components/home/counter";
import { ExploreSlideshow } from "@/components/home/explore-slideshow";
import { ExploreSlideshowMI } from "@/components/home/explore-slideshow-mi";
import { MainLayout } from "@/layouts/main";
import { montserrat } from "@/utils/fonts";
import Link from "next/link";
import { Testimonials } from "../components/testimonials";
import { CalendarEvents } from "../components/home/calendar-events";

export default function Index() {
    return (
        <MainLayout bottomPadding={false} title="Home">
            <section
                className="flex min-h-[1000px] w-full flex-col bg-cover bg-center bg-no-repeat pt-36 lg:px-24"
                style={{ backgroundImage: "url('/assets/home/section-1-background.png')" }}
            >
                <div className="flex justify-center px-4 lg:justify-start">
                    <div className={`flex-1 ${montserrat.className} text-white md:flex-[0.7]`}>
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
                                <br className="block md:hidden" /> communities get closer to Allah
                                (S.W.T)
                                <br className="hidden md:block" /> through the Holy Qur&apos;an and
                                <br className="block md:hidden" /> the AhlulBayt (A.S)
                            </p>
                            <Link href="/about-us" className="pt-6 md:pt-0">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    className="h-12 w-12 transition-all duration-300 hover:opacity-50 md:h-14 md:w-14"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    ></path>
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
                <div
                    className={`flex flex-wrap items-center justify-evenly pt-36 pb-14 ${montserrat.className} md:flex-row md:items-start md:pb-12 lg:flex-nowrap lg:justify-start`}
                >
                    <div className="flex flex-col items-center px-6 pb-4 text-white lg:px-0 lg:pb-0">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="h-14 w-14"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z"
                                clip-rule="evenodd"
                            ></path>
                            <path d="M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z"></path>
                        </svg>
                        <CounterNumericDisplay
                            to={40}
                            className="text-xl font-semibold md:py-2 md:text-4xl "
                        />
                        <span className="font-medium md:text-base">VOLUNTEERS</span>
                    </div>
                    <div className="flex flex-col items-center px-6 pb-4 text-white lg:px-0 lg:pb-0 lg:pl-24">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="h-14 w-14"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM6.262 6.072a8.25 8.25 0 1010.562-.766 4.5 4.5 0 01-1.318 1.357L14.25 7.5l.165.33a.809.809 0 01-1.086 1.085l-.604-.302a1.125 1.125 0 00-1.298.21l-.132.131c-.439.44-.439 1.152 0 1.591l.296.296c.256.257.622.374.98.314l1.17-.195c.323-.054.654.036.905.245l1.33 1.108c.32.267.46.694.358 1.1a8.7 8.7 0 01-2.288 4.04l-.723.724a1.125 1.125 0 01-1.298.21l-.153-.076a1.125 1.125 0 01-.622-1.006v-1.089c0-.298-.119-.585-.33-.796l-1.347-1.347a1.125 1.125 0 01-.21-1.298L9.75 12l-1.64-1.64a6 6 0 01-1.676-3.257l-.172-1.03z"
                                clip-rule="evenodd"
                            ></path>
                        </svg>

                        <CounterNumericDisplay
                            to={7}
                            className="text-xl font-semibold md:py-2 md:text-4xl"
                        />
                        <span className="font-medium leading-8 md:text-lg">COUNTRIES</span>
                    </div>
                    <div className="flex flex-col items-center px-6 pb-4 text-white lg:px-0 lg:pb-0 lg:pl-24">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="h-14 w-14"
                        >
                            <path d="M12 .75a8.25 8.25 0 00-4.135 15.39c.686.398 1.115 1.008 1.134 1.623a.75.75 0 00.577.706c.352.083.71.148 1.074.195.323.041.6-.218.6-.544v-4.661a6.714 6.714 0 01-.937-.171.75.75 0 11.374-1.453 5.261 5.261 0 002.626 0 .75.75 0 11.374 1.452 6.712 6.712 0 01-.937.172v4.66c0 .327.277.586.6.545.364-.047.722-.112 1.074-.195a.75.75 0 00.577-.706c.02-.615.448-1.225 1.134-1.623A8.25 8.25 0 0012 .75z"></path>
                            <path
                                fill-rule="evenodd"
                                d="M9.013 19.9a.75.75 0 01.877-.597 11.319 11.319 0 004.22 0 .75.75 0 11.28 1.473 12.819 12.819 0 01-4.78 0 .75.75 0 01-.597-.876zM9.754 22.344a.75.75 0 01.824-.668 13.682 13.682 0 002.844 0 .75.75 0 11.156 1.492 15.156 15.156 0 01-3.156 0 .75.75 0 01-.668-.824z"
                                clip-rule="evenodd"
                            ></path>
                        </svg>

                        <CounterNumericDisplay
                            to={5}
                            className="text-xl font-semibold md:py-2 md:text-4xl"
                        />
                        <span className="font-medium leading-8 md:text-lg">PROJECTS</span>
                    </div>
                    <div className="flex flex-col items-center px-6 pb-4 text-white lg:px-0 lg:pb-0 lg:pl-24">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="h-14 w-14"
                        >
                            <path d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 00-1.032-.211 50.89 50.89 0 00-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 002.433 3.984L7.28 21.53A.75.75 0 016 21v-4.03a48.527 48.527 0 01-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979z"></path>
                            <path d="M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 001.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0015.75 7.5z"></path>
                        </svg>

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
                        “Verily <span className="text-[#BE1E2D]">Hussain</span> is the shining{" "}
                        <span className="text-[#D29923]">light of guidance</span>
                        <br /> and the <span className="text-[#BE1E2D]">ark of salvation.</span>”
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
                    USING DIGITAL INNOVATION TO STRENGTHEN OUR FAITH AND SERVE COMMUNITIES AROUND
                    THE GLOBE
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
