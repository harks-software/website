
import { MainLayout } from "@/layouts/main";
import { montserrat } from "@/utils/fonts";
import Image from "next/image";
import { Testimonials } from "../components/testimonials";
export default function Index() {
    return (
        <MainLayout bottomPadding={false}>
            <div
    className={`flex w-full bg-beige.300 bg-[url('/assets/contact/overlay.png')] bg-no-repeat py-4 ${montserrat.className}`}
  >
    <div className="hidden w-[100px] lg:flex">
      <div
        className="flex h-[50px] origin-bottom-left rotate-90 whitespace-nowrap bg-gradient-to-r from-themeRed.500 via-themeNavOrange.1 to-themeYellow.500 bg-clip-text text-3xl font-bold uppercase text-transparent"
      >
        Join The Crew
      </div>
    </div>
    <div className="flex w-full flex-col">
      <div className="flex flex-col p-6">
        <h1
          className="mt-6 text-xl font-bold uppercase text-themeNavRed.1 lg:text-2xl"
        >
          Spark Change Around the Globe
        </h1>
        <div className="py-2">
          <Image
            className="float-right h-40 w-40 pl-2"
            src="/assets/join-the-crew/globe.gif"
            alt="picture of globe"
          />
          <div className="text-lg font-medium text-[#404040]">
            We want to provide an opportunity for youths all around the world to
            join us! Bring in fresh ideas, be a part of our vision, contribute
            your skills and get involved in a buzzing environment where we all
            work together to make a true difference in our communities around
            the globe!
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col items-center md:flex-row md:items-start ">
        <iframe
          width="352"
          height="626"
          src="https://www.youtube.com/embed/Us-VsOG2gUo"
          title="Join the HARKS Crew!"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
          className="md:mx-4"></iframe>
        <div
          className="mt-4 h-[500px] max-w-[725px] bg-[#404040] p-4 md:mt-0 md:ml-auto md:h-[400px]"
        >
          <h1
            className="pb-4 text-xl font-extrabold uppercase text-[#E7AD36] lg:text-2xl"
          >
            Global Youth Community
          </h1>
          <div className="text-lg text-white">
            We have an international crew consisting of passionate, committed
            and multi-talented youth working on a wide range of projects to
            support our mission. We believe in empowering the youth to become
            leaders and bring forward ideas that will bring individuals and
            communities closer to God with the love of the Holy Qur'an &
            AhlulBayt (A.S). We try to create an atmosphere which encourages
            team bonding, enhancing skills, networking, opportunities and
            exciting initiatives!
          </div>
        </div>
      </div>
    </div>
  </div>

  <div
    className={`flex w-full flex-col truncate bg-beige.300 py-8 pt-6 ${montserrat.className} text-lg font-bold uppercase text-[#28282833] lg:hidden`}
  >
    <div className="mb-3 select-none whitespace-nowrap">
      Planner • Social Media • islamic researcher • streamer • graphic Designer
      • video editor • animation creator • marketing • coordinator • uI designer
    </div>
    <div className="mb-3 select-none whitespace-nowrap">
      Streamer • graphic designer • video editor • animator • software developer
      • marketing • Administrator • Planner • Social Media • islamic researcher
      • streamer
    </div>
    <div className="mb-3 select-none whitespace-nowrap">
      graphic Designer • video editor • animation creator • marketing •
      coordinator • uI designer • Administrator • Planner • Social Media •
      islamic researcher
    </div>
    <div className="mb-3 select-none whitespace-nowrap">
      creator • marketing • coordinator • uI designer • software developer •
      content writer • Administrator • Planner • Social Media • islamic
      researcher • streamer
    </div>
  </div>

  <div
    className={`hidden w-full flex-col truncate bg-beige.300 py-8 ${montserrat.className} text-lg font-bold uppercase text-[#28282833] lg:flex lg:text-2xl`}
  >
    <div className="mb-3 select-none whitespace-nowrap">
      Planner • Social Media • islamic researcher • streamer • graphic Designer
      • video editor • animation creator • marketing • coordinator • uI designer
    </div>
    <div className="mb-3 select-none whitespace-nowrap">
      Streamer • graphic designer • video editor • animator • software developer
      • marketing • Administrator • Planner • Social Media • islamic researcher
      • streamer
    </div>
    <div className="mb-3 select-none whitespace-nowrap">
      graphic Designer • video editor • animation creator • marketing •
      coordinator • uI designer • Administrator • Planner • Social Media •
      islamic researcher
    </div>
    <div className="mb-3 select-none whitespace-nowrap">
      creator • marketing • coordinator • uI designer • software developer •
      content writer • Administrator • Planner • Social Media • islamic
      researcher • streamer
    </div>
  </div>

  <div
    className={`-mt-9 flex w-full flex-col p-4 pt-10 ${montserrat.className} lg:mt-0`}
    style={{backgroundImage: "linear-gradient(180deg, #282828 0%, rgba(40, 40, 40, 0.8) 100%)"}}
  >
    <div
      className="text-center text-2xl font-semibold uppercase leading-[60px] text-white md:text-3xl"
    >
      Are you <span className="text-3xl font-bold text-[#E7AD36] md:text-4xl"
        >passionate</span
      > about what we do?
    </div>

    <div
      className="mt-4 text-center text-2xl font-semibold uppercase text-white md:text-3xl"
    >
      Are you willing to <span
        className="text-3xl font-bold text-themeNavRed.1 md:text-4xl">commit</span
      >?
    </div>

    <div className="mt-2 text-center text-3xl font-bold uppercase text-white">
      .&nbsp;&nbsp;&nbsp;.&nbsp;&nbsp;&nbsp;.
    </div>
    <iframe
      src="https://docs.google.com/forms/d/e/1FAIpQLSducX3xxKefIeh5W5bBMm9AIdDkcKsd2phNL7D0sDpfzEZepQ/viewform?embedded=true"
      className="mx-auto mt-10 mb-4 h-[700px] w-full rounded-md shadow-md lg:w-6/12"
    ></iframe>
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
  </div>
        </MainLayout>
    );
}
