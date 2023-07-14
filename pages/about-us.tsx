import Image from "next/image";
import Link from "next/link";
import { MainLayout } from "@/layouts/main";

export default function AboutUs() {
  return (
    <MainLayout title="About Us">
      <div className="w-full bg-cream">
        <p className="mx-auto w-full px-3 py-8 text-center text-xs font-semibold text-gray-800 md:max-w-[80%] md:pt-10 md:text-xl">
          Learn more about us and the scope of our mission in strengthening our
          bond between the AhlulBayt (A.S) and our beloved, your beloved Imam
          Hussain (A.S).
        </p>
        <div
          className="w-full"
          style={{
            background: "url('/assets/about-us/caligraphy5.png') center center",
            backgroundSize: "cover",
          }}
        >
          <div className="flex h-full w-full flex-col items-center">
            <p className="mt-[1px] text-center text-2xl font-semibold text-black/50 md:text-4xl">
              . . .
            </p>
            <p className="mt-3 px-3 text-center text-lg font-bold uppercase sm:max-w-[70%] md:mt-5 md:text-4xl md:leading-[50px] lg:max-w-[80%]">
              <span className="text-gray-800">&ldquo;Verily </span>
              <span className="text-red.500">Hussain </span>
              <span className="text-gray-800">is the shining </span>
              <span className="text-gold.500">light of guidance </span>
              <span className="text-gray-800">and the </span>
              <span className="text-red.500">ark of salvation</span>
              <span className="text-gray-800">.&rdquo;</span>
            </p>
            <p className="mt-4 mb-8 border-2 border-[#535353] py-1 px-2 text-center text-xs font-bold text-[#BA8415] md:mt-8 md:text-lg">
              Prophet Muhammad (PBUH)
            </p>
          </div>
        </div>
        <div className="mt-3 hidden bg-black py-3 sm:flex sm:flex-row sm:py-6">
          <div className="mr-3 flex basis-[5%] rotate-180 items-center justify-center bg-cream py-1 text-lg font-bold uppercase sm:mr-6 md:text-2xl lg:text-3xl">
            <p
              className="gradient-text-vertical"
              style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
            >
              Our Vision
            </p>
          </div>
          <div className="mr-3 flex basis-[40%] items-center justify-center bg-cream p-2 text-center text-xs font-bold text-[#282828] sm:mr-6 sm:p-5 md:text-lg lg:basis-[25%] lg:text-xl">
            To establish a digital hub and engage the global community to get
            closer to Allah (S.W.T) through the Holy Qur&lsquo;an and the
            AhlulBayt (A.S) in a fast changing world.
          </div>
          <div className="mr-3 basis-[35%] border-2 border-white sm:mr-6">
            <iframe
              className="aspect-video h-full w-full"
              src="https://www.youtube.com/embed/7b1oCwTPUE0"
              title="Hussain - The Symbol of Truth | HARKS Promo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div
            className="flex grow basis-[20%] items-center justify-center p-3 sm:p-5"
            style={{
              background:
                "-webkit-linear-gradient(0deg, rgba(40, 40, 40, 0.5) 0%, rgba(255, 204, 7, 0.25) 100%)",
            }}
          >
            <Image
              src={require("/public/assets/harks-logo-transparent.png")}
              className="h-auto w-4/5"
              style={{ imageRendering: "crisp-edges" }}
              alt="HARKS logo"
            />
          </div>
        </div>
        <div className="mt-3 sm:hidden">
          <div className="h-[36px] w-full bg-[#303030]"></div>
          <h1 className="gradient-text-horizontal mx-auto py-2 text-center text-lg font-bold uppercase md:text-2xl lg:text-3xl">
            Our Vision
          </h1>
          <div className="flex w-full bg-[#303030] pt-2">
            <div className="flex basis-[80%] items-center justify-center p-5 text-xs text-white">
              To establish a digital hub and engage the global community to get
              closer to Allah (S.W.T) through the Holy Qur&lsquo;an and the
              AhlulBayt (A.S) in a fast changing world.
            </div>
            <div
              className="mr-5 flex basis-[20%] items-center justify-center"
              style={{
                background:
                  "-webkit-linear-gradient(0deg, rgba(40, 40, 40, 0.5) 0%, rgba(255, 204, 7, 0.25) 100%)",
              }}
            >
              <Image
                src={require("/public/assets/about-us/logo.png")}
                alt="HARKS logo"
                className="h-auto w-4/5"
              />
            </div>
          </div>
          <div className="w-full bg-[#303030] p-5">
            <iframe
              className="aspect-video h-auto w-full border-2 border-white"
              src="https://www.youtube.com/embed/7b1oCwTPUE0"
              title="Hussain - The Symbol of Truth | HARKS Promo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="flex flex-row py-3 px-5 sm:py-8 lg:px-20">
          <div className="mr-5 basis-[95%] lg:mr-10">
            <p className="max-w-[80%] text-xs font-bold leading-5 text-[#282828] md:text-lg md:leading-10">
              Hussain&lsquo;s Ark of Salvation (HARKS) is a global youth-led
              organisation which aims to help individuals and communities get
              closer to God through the love and teachings of the Holy
              Qur&lsquo;an and the AhlulBayt (A.S).
            </p>
            <div className="mt-5 flex w-full flex-row">
              <div
                className="mb-5 h-max basis-[50%] bg-[#FFCC07] p-2 sm:mb-12 sm:p-5"
                style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
              >
                <div className="flex items-center">
                  <div className="mr-3 w-full md:w-[90%]">
                    <p className="font-semibold uppercase sm:text-lg md:text-2xl">
                      Initiatives
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <p className="mt-3 text-xs font-normal md:text-base">
                    Social Media has emerged as one of the most powerful
                    influencers in today&lsquo;s day and age. We strive to
                    introduce new and original ideas to change people&lsquo;s
                    lives through engaging content, in an ever-changing fast
                    environment.
                  </p>
                  <div className="ml-auto mr-0 hidden items-end self-end md:-mr-6 md:flex md:h-28 md:w-28">
                    <Image
                      src={require("/public/assets/about-us/bulb.png")}
                      alt="bulb"
                      className="!max-w-none md:h-28 md:w-28"
                    />
                  </div>
                </div>
              </div>
              <div
                className="ml-5 mt-5 basis-[50%] bg-[#F9BD43] p-2 sm:ml-12 sm:mt-12 sm:p-5"
                style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
              >
                <div className="flex items-center">
                  <div className="hidden md:-ml-4 md:block md:h-28 md:w-28">
                    <Image
                      src={require("/public/assets/about-us/globe.png")}
                      alt="globe"
                      className="h-auto w-full"
                    />
                  </div>
                  <div className="w-full md:mr-3 md:w-[90%]">
                    <p className="font-semibold uppercase sm:text-lg md:text-right md:text-2xl">
                      Digital Hub
                    </p>
                  </div>
                </div>
                <p className="mt-3 text-xs font-normal md:text-right md:text-base">
                  Living in a technology-driven world, we believe it is crucial
                  to use digital innovation to strengthen our faith and uplift
                  communities worldwide. Therefore, we aim to offer a range of
                  digital services and resources in order to establish a digital
                  hub.
                </p>
              </div>
            </div>
          </div>
          <div className="flex basis-[5%] flex-col items-center">
            <p
              className="gradient-text-vertical mb-3 shrink-0 text-lg font-bold uppercase md:text-2xl lg:text-3xl"
              style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
            >
              Our Mission
            </p>
            <div
              className="h-full w-[5px]"
              style={{
                background:
                  "-webkit-linear-gradient(270deg, rgba(40, 40, 40, 0.5) 0%, rgba(40, 40, 40, 0) 100%)",
              }}
            ></div>
          </div>
        </div>
        <div
          className="h-[10px] w-full"
          style={{
            background:
              "-webkit-linear-gradient(0deg, #BE1E2D 0%, #DF761A 50.32%, #FFCC07 100%)",
            boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.25)",
          }}
        ></div>
        <div className="flex items-center bg-[#303030] px-5 py-3 pr-0 text-xs text-cream sm:py-8 sm:pr-5 md:text-lg lg:px-20">
          <p className="basis-[70%] leading-10">
            We want to onboard the global community onto the Ark of Aba Abdillah
            (A.S) and sail towards the Almighty, in a modernistic world.
          </p>
          <div className="h-full basis-[30%]">
            <Image
              src={require("/public/assets/about-us/boat.png")}
              alt="boat"
              className="h-full w-full"
            />
          </div>
        </div>
        <h1 className="gradient-text-horizontal mx-auto py-3 text-center text-lg font-extrabold uppercase md:text-2xl lg:text-3xl">
          Our Purpose
        </h1>
        <div
          className="w-full bg-[#1A1A1A] bg-cover bg-center py-6 text-xs font-semibold sm:py-12 md:text-lg"
          style={{
            backgroundImage: "url('/assets/about-us/banner.png')",
            hyphens: "auto",
          }}
        >
          <div className="hidden sm:block">
            <div className="mb-4 flex w-full">
              <div className="mr-4 w-[5%] bg-white/80 p-1"></div>
              <label className="swap mr-4 w-[19%] items-center justify-center bg-white/80 p-2 text-center text-lg font-bold lg:text-2xl">
                <input type="checkbox" />
                <div
                  style={{ textShadow: "0px 4px 4px rgba(255, 255, 255, 0.5)" }}
                  className="swap-off"
                >
                  SPARK CHANGE AROUND THE WORLD
                </div>
                <div
                  style={{ textShadow: "0px 4px 4px rgba(255, 255, 255, 0.5)" }}
                  className="swap-on text-sm"
                >
                  With everything that we do, we aim to positively impact the
                  life of an individual or a community - all in service to Aba
                  Abdillah (A.S).
                </div>
              </label>
              <label className="swap mr-4 w-[19%] items-center justify-center bg-white/80 p-2 text-center text-lg font-bold lg:text-2xl">
                <input type="checkbox" />
                <div
                  style={{ textShadow: "0px 4px 4px rgba(255, 255, 255, 0.5)" }}
                  className="swap-off"
                >
                  UPLIFT SPIRITUALITY
                </div>
                <div
                  style={{ textShadow: "0px 4px 4px rgba(255, 255, 255, 0.5)" }}
                  className="swap-on text-sm"
                >
                  To ignite a spiritual spark in individuals, as well as
                  collective spirituality.
                </div>
              </label>
              <label className="swap mr-4 w-[19%] items-center justify-center bg-white/80 p-2 text-center text-lg font-bold lg:text-2xl">
                <input type="checkbox" />
                <div
                  className="swap-off"
                  style={{ textShadow: "0px 4px 4px rgba(255, 255, 255, 0.5)" }}
                >
                  COMMUNITY SPIRIT
                </div>
                <div
                  className="swap-on text-sm"
                  style={{ textShadow: "0px 4px 4px rgba(255, 255, 255, 0.5)" }}
                >
                  To strengthen the unity and bond that we have with one
                  another.
                </div>
              </label>
              <label className="swap mr-4 w-[19%] items-center justify-center bg-white/80 p-2 text-center text-lg font-bold lg:text-2xl">
                <input type="checkbox" />

                <div
                  style={{ textShadow: "0px 4px 4px rgba(255, 255, 255, 0.5)" }}
                  className="swap-off"
                >
                  ENCOURAGE CHARITY
                </div>
                <div
                  style={{ textShadow: "0px 4px 4px rgba(255, 255, 255, 0.5)" }}
                  className="swap-on text-sm"
                >
                  To help others around the world by encouraging charitable
                  acts.
                </div>
              </label>
              <div className="w-[19%] bg-white/80 p-2"></div>
            </div>
            <div className="mb-4 flex">
              <div className="bg-white/80 p-2 sm:mr-2 lg:w-[8%]"></div>
              <label className="swap mr-4 w-[25%] items-center justify-center bg-white/80 p-2 text-center text-lg font-bold lg:text-2xl">
                <input type="checkbox" />
                <div
                  style={{ textShadow: "0px 4px 4px rgba(255, 255, 255, 0.5)" }}
                  className="swap-off"
                >
                  CONNECTIVITY
                </div>
                <div
                  style={{ textShadow: "0px 4px 4px rgba(255, 255, 255, 0.5)" }}
                  className="swap-on text-sm"
                >
                  To use technology as a means of getting closer to Allah
                  (S.W.T).
                </div>
              </label>
              <label className="swap mr-4 w-[19%] items-center justify-center bg-white/80 p-2 text-center text-lg font-bold lg:text-2xl">
                <input type="checkbox" />
                <div
                  style={{ textShadow: "0px 4px 4px rgba(255, 255, 255, 0.5)" }}
                  className="swap-off"
                >
                  DRIVE DIGITAL INNOVATION
                </div>
                <div
                  style={{ textShadow: "0px 4px 4px rgba(255, 255, 255, 0.5)" }}
                  className="swap-on text-sm"
                >
                  To be at the forefront of driving innovative digital content
                  in our global community.
                </div>
              </label>
              <label className="swap mr-4 w-[22%] items-center justify-center bg-white/80 p-2 text-center text-lg font-bold lg:text-2xl">
                <input type="checkbox" />
                <div
                  style={{ textShadow: "0px 4px 4px rgba(255, 255, 255, 0.5)" }}
                  className="swap-off"
                >
                  ACCESSIBILITY
                </div>
                <div
                  style={{ textShadow: "0px 4px 4px rgba(255, 255, 255, 0.5)" }}
                  className="swap-on text-sm"
                >
                  To make faith more accessible from every corner of the world.
                </div>
              </label>
              <label className="swap flex-1 items-center justify-center bg-white/80 p-2 text-center text-lg font-bold sm:mr-4 lg:w-[19%] lg:text-2xl">
                <input type="checkbox" />
                <div
                  style={{ textShadow: "0px 4px 4px rgba(255, 255, 255, 0.5)" }}
                  className="swap-off"
                >
                  PROMOTING ISLAM
                </div>
                <div
                  style={{ textShadow: "0px 4px 4px rgba(255, 255, 255, 0.5)" }}
                  className="swap-on text-sm"
                >
                  To contribute towards promoting our faith digitally.
                </div>
              </label>
              <div className="bg-white/80 p-2 lg:w-[5%]"></div>
            </div>
            <div className="flex">
              <div className="mr-4 w-[5%] bg-white/80 p-2"></div>
              <label className="swap mr-4 w-[19%] items-center justify-center bg-white/80 p-2 text-center text-lg font-bold lg:text-2xl">
                <input type="checkbox" />
                <div
                  className="swap-off"
                  style={{ textShadow: "0px 4px 4px rgba(255, 255, 255, 0.5)" }}
                >
                  FOSTER GOD&apos;S LOVE
                </div>
                <div
                  className="swap-on text-sm"
                  style={{ textShadow: "0px 4px 4px rgba(255, 255, 255, 0.5)" }}
                >
                  To foster the love of Allah (S.W.T) in our worship and daily
                  actions.
                </div>
              </label>
              <label className="swap mr-4 w-[19%] items-center justify-center bg-white/80 p-2 text-center text-lg font-bold lg:text-2xl">
                <input type="checkbox" />
                <div
                  className="swap-off"
                  style={{ textShadow: "0px 4px 4px rgba(255, 255, 255, 0.5)" }}
                >
                  ISLAM - &ldquo;A WAY OF LIFE”
                </div>
                <div
                  className="swap-on text-sm"
                  style={{ textShadow: "0px 4px 4px rgba(255, 255, 255, 0.5)" }}
                >
                  To encourage Islam as a “way of life” guiding our day-to-day
                  activities.
                </div>
              </label>
              <label className="swap mr-4 w-[19%] items-center justify-center bg-white/80 p-2 text-center text-lg font-bold lg:text-2xl">
                <input type="checkbox" />

                <div
                  className="swap-off"
                  style={{ textShadow: "0px 4px 4px rgba(255, 255, 255, 0.5)" }}
                >
                  PREPARE FOR &ldquo;THE HUSSAIN OF OUR TIME&rdquo;
                </div>
                <div
                  className="swap-on text-sm"
                  style={{ textShadow: "0px 4px 4px rgba(255, 255, 255, 0.5)" }}
                >
                  To prepare for the arrival of Imam Mahdi (A.S).
                </div>
              </label>
              <label className="swap mr-4 w-[19%] items-center justify-center bg-white/80 p-2 text-center text-lg font-bold lg:text-2xl">
                <input type="checkbox" />
                <div
                  className="swap-off"
                  style={{ textShadow: "0px 4px 4px rgba(255, 255, 255, 0.5)" }}
                >
                  SHAPE FUTURE LEADERS
                </div>
                <div
                  className="swap-on text-sm"
                  style={{ textShadow: "0px 4px 4px rgba(255, 255, 255, 0.5)" }}
                >
                  To provide opportunities for the youth to bring forth unique
                  ideas, and to implement them using the resources and support
                  that we have.
                </div>
              </label>
              <div className="w-[19%] bg-white/80 p-2"></div>
            </div>
          </div>
          <div className="sm:hidden">
            <div className="mb-2 flex w-full">
              <label className="swap mr-2 w-[30%] items-center justify-center bg-white/80 p-1 text-center">
                <input type="checkbox" />
                <div
                  className="swap-off"
                  style={{ textShadow: "0px 4px 4px rgba(255, 255, 255, 0.5)" }}
                >
                  SPARK CHANGE AROUND THE WORLD
                </div>
                <div
                  className="swap-on text-[8px]"
                  style={{ textShadow: "0px 4px 4px rgba(255, 255, 255, 0.5)" }}
                >
                  With everything that we do, we aim to positively impact the
                  life of an individual or a community - all in service to Aba
                  Abdillah (A.S).
                </div>
              </label>
              <label className="swap mr-2 w-[40%] items-center justify-center bg-white/80 p-1 text-center">
                <input type="checkbox" />
                <div
                  className="swap-off"
                  style={{ textShadow: "0px 4px 4px rgba(255, 255, 255, 0.5)" }}
                >
                  UPLIFT SPIRITUALITY
                </div>
                <div
                  className="swap-on text-[8px]"
                  style={{ textShadow: "0px 4px 4px rgba(255, 255, 255, 0.5)" }}
                >
                  To ignite a spiritual spark in individuals, as well as
                  collective spirituality.
                </div>
              </label>
              <label className="swap mr-2 w-[30%] items-center justify-center bg-white/80 p-1 text-center">
                <input type="checkbox" />
                <div
                  className="swap-off"
                  style={{ textShadow: "0px 4px 4px rgba(255, 255, 255, 0.5)" }}
                >
                  COMMUNITY SPIRIT
                </div>
                <div
                  className="swap-on text-[8px]"
                  style={{ textShadow: "0px 4px 4px rgba(255, 255, 255, 0.5)" }}
                >
                  To strengthen the unity and bond that we have with one
                  another.
                </div>
              </label>
            </div>
            <div className="mb-2 flex">
              <label className="swap mr-2 w-[35%] items-center justify-center bg-white/80 p-1 text-center">
                <input type="checkbox" />
                <div
                  className="swap-off"
                  style={{ textShadow: "0px 4px 4px rgba(255, 255, 255, 0.5)" }}
                >
                  ENCOURAGE CHARITY
                </div>
                <div
                  className="swap-on text-[8px]"
                  style={{ textShadow: "0px 4px 4px rgba(255, 255, 255, 0.5)" }}
                >
                  To help others around the world by encouraging charitable
                  acts.
                </div>
              </label>
              <label className="swap mr-2 w-[30%] items-center justify-center bg-white/80 p-1 text-center">
                <input type="checkbox" />
                <div
                  className="swap-off"
                  style={{ textShadow: "0px 4px 4px rgba(255, 255, 255, 0.5)" }}
                >
                  CONNECTIVITY
                </div>
                <div
                  className="swap-on text-[8px]"
                  style={{ textShadow: "0px 4px 4px rgba(255, 255, 255, 0.5)" }}
                >
                  To use technology as a means of getting closer to Allah
                  (S.W.T).
                </div>
              </label>
              <label className="swap mr-2 w-[35%] items-center justify-center bg-white/80 p-1 text-center">
                <input type="checkbox" />
                <div
                  className="swap-off"
                  style={{ textShadow: "0px 4px 4px rgba(255, 255, 255, 0.5)" }}
                >
                  DRIVE DIGITAL INNOVATION
                </div>
                <div
                  className="swap-on text-[8px]"
                  style={{ textShadow: "0px 4px 4px rgba(255, 255, 255, 0.5)" }}
                >
                  To be at the forefront of driving innovative digital content
                  in our global community.
                </div>
              </label>
            </div>
            <div className="mb-2 flex w-full">
              <label className="swap mr-2 w-[35%] items-center justify-center bg-white/80 p-1 text-center">
                <input type="checkbox" />
                <div
                  className="swap-off"
                  style={{ textShadow: "0px 4px 4px rgba(255, 255, 255, 0.5)" }}
                >
                  ACCESSIBILITY
                </div>
                <div
                  className="swap-on text-[8px]"
                  style={{ textShadow: "0px 4px 4px rgba(255, 255, 255, 0.5)" }}
                >
                  To make faith more accessible from every corner of the world.
                </div>
              </label>
              <label className="swap mr-2 w-[40%] items-center justify-center bg-white/80 p-1 text-center">
                <input type="checkbox" />
                <div
                  className="swap-off"
                  style={{ textShadow: "0px 4px 4px rgba(255, 255, 255, 0.5)" }}
                >
                  PROMOTING ISLAM
                </div>
                <div
                  className="swap-on text-[8px]"
                  style={{ textShadow: "0px 4px 4px rgba(255, 255, 255, 0.5)" }}
                >
                  To contribute towards promoting our faith digitally.
                </div>
              </label>
              <label className="swap mr-2 w-[30%] items-center justify-center bg-white/80 p-1 text-center">
                <input type="checkbox" />
                <div
                  className="swap-off"
                  style={{ textShadow: "0px 4px 4px rgba(255, 255, 255, 0.5)" }}
                >
                  FOSTER GOD&apos;S LOVE
                </div>
                <div
                  className="swap-on text-[8px]"
                  style={{ textShadow: "0px 4px 4px rgba(255, 255, 255, 0.5)" }}
                >
                  To foster the love of Allah (S.W.T) in our worship and daily
                  actions.
                </div>
              </label>
            </div>
            <div className="flex w-full">
              <label className="swap mr-2 w-[35%] items-center justify-center bg-white/80 p-1 text-center">
                <input type="checkbox" />
                <div
                  className="swap-off"
                  style={{ textShadow: "0px 4px 4px rgba(255, 255, 255, 0.5)" }}
                >
                  ISLAM - “A WAY OF LIFE”
                </div>
                <div
                  className="swap-on text-[8px]"
                  style={{ textShadow: "0px 4px 4px rgba(255, 255, 255, 0.5)" }}
                >
                  To encourage Islam as a “way of life” guiding our day-to-day
                  activities.
                </div>
              </label>
              <label className="swap mr-2 w-[30%] items-center justify-center bg-white/80 p-1 text-center">
                <input type="checkbox" />
                <div
                  className="swap-off"
                  style={{ textShadow: "0px 4px 4px rgba(255, 255, 255, 0.5)" }}
                >
                  PREPARE FOR THE HUSSAIN OF OUR TIME&ldquo;
                </div>
                <div
                  className="swap-on text-[8px]"
                  style={{ textShadow: "0px 4px 4px rgba(255, 255, 255, 0.5)" }}
                >
                  To prepare for the arrival of Imam Mahdi (A.S).
                </div>
              </label>
              <label className="swap mr-2 w-[35%] items-center justify-center bg-white/80 p-1 text-center">
                <input type="checkbox" />
                <div
                  className="swap-off"
                  style={{ textShadow: "0px 4px 4px rgba(255, 255, 255, 0.5)" }}
                >
                  SHAPE FUTURE LEADERS
                </div>
                <div
                  className="swap-on text-[8px]"
                  style={{ textShadow: "0px 4px 4px rgba(255, 255, 255, 0.5)" }}
                >
                  To provide opportunities for the youth to bring forth unique
                  ideas, and to implement them using the resources and support
                  that we have.
                </div>
              </label>
            </div>
          </div>
        </div>
        <div className="h-[36px] w-full bg-[#303030]"></div>
        <h1 className="gradient-text-horizontal mx-auto py-3 text-center text-lg font-bold uppercase md:text-2xl lg:text-3xl">
          Goals & Objectives
        </h1>
        <div
          className="flex flex-col py-3 px-5 sm:py-8 lg:px-20"
          style={{
            background:
              "linear-gradient(180deg, #595959 0%, rgba(231, 173, 54, 0.5) 100%)",
          }}
        >
          <div className="w-full sm:max-w-[70%]">
            <div className="flex w-full">
              <div
                className="min-w-[5px] rounded-l-xl sm:min-w-[10px]"
                style={{
                  background:
                    "linear-gradient(180deg, #E7AD36 0%, #BE1E2D 100%)",
                }}
              ></div>
              <div
                className="flex flex-1 items-center justify-center rounded-r-xl bg-cream p-3 sm:pb-1"
                style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
              >
                <div className="mr-3 h-full w-[85%] text-xs sm:text-base">
                  <h1 className="gradient-text-horizontal mb-1 font-bold uppercase sm:mb-3">
                    An Expanding Digital Hub
                  </h1>
                  <span className="font-medium">
                    By creating a virtual hub that offers a variety of digital
                    services for the global community to use in a modern
                    technological world.
                  </span>
                </div>
                <div className="w-[15%]">
                  <Image
                    src={require("/public/assets/about-us/rocket.png")}
                    alt="rocket"
                    className="h-auto w-full"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="my-3 ml-auto mr-0 w-full sm:max-w-[70%]">
            <div className="flex w-full">
              <div
                className="flex flex-1 items-center justify-center rounded-l-xl bg-cream p-3 sm:pb-1"
                style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
              >
                <div className="w-[15%]">
                  <Image
                    src={require("/public/assets/about-us/puzzle.png")}
                    alt="puzzle"
                    className="h-auto w-full"
                  />
                </div>
                <div className="ml-3 h-full w-[85%] text-right text-xs sm:text-base">
                  <h1 className="gradient-text-horizontal-reversed mb-1 font-bold uppercase sm:mb-3">
                    Unique Initiatives
                  </h1>
                  <span className="font-medium">
                    By engaging the global community through various unique
                    initiatives using the latest trends and tools.
                  </span>
                </div>
              </div>
              <div
                className="min-w-[5px] rounded-r-xl sm:min-w-[10px]"
                style={{
                  background:
                    "linear-gradient(180deg, #E7AD36 0%, #BE1E2D 100%)",
                }}
              ></div>
            </div>
          </div>
          <div className="w-full sm:max-w-[70%]">
            <div className="flex w-full">
              <div
                className="min-w-[5px] rounded-l-xl sm:min-w-[10px]"
                style={{
                  background:
                    "linear-gradient(180deg, #E7AD36 0%, #BE1E2D 100%)",
                }}
              ></div>
              <div
                className="flex flex-1 items-center justify-center rounded-r-xl bg-cream p-3 sm:pb-1"
                style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
              >
                <div className="mr-3 h-full w-[85%] text-xs sm:text-base">
                  <h1 className="gradient-text-horizontal mb-1 font-bold uppercase sm:mb-3">
                    Addressing Reality
                  </h1>
                  <span className="font-medium">
                    By providing the youth with engaging content using social
                    media which addresses the hot topics and practical issues
                    that we face today.
                  </span>
                </div>
                <div className="w-[15%]">
                  <Image
                    src={require("/public/assets/about-us/quote.png")}
                    alt="quote"
                    className="h-auto w-full"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="my-3 ml-auto mr-0 w-full sm:w-[70%]">
            <div className="flex w-full">
              <div
                className="flex flex-1 items-center justify-center rounded-l-xl bg-cream p-3 sm:pb-1"
                style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
              >
                <div className="w-[15%]">
                  <Image
                    src={require("/public/assets/about-us/umbrella.png")}
                    alt="umbrella"
                    className="h-auto w-full"
                  />
                </div>
                <div className="ml-3 h-full w-[85%] text-right text-xs sm:text-base">
                  <h1 className="gradient-text-horizontal-reversed mb-1 font-bold uppercase sm:mb-3">
                    Collaborations
                  </h1>
                  <span className="font-medium">
                    By working with other organisations in various ways towards
                    a shared goal.
                  </span>
                </div>
              </div>
              <div
                className="min-w-[5px] rounded-r-xl sm:min-w-[10px]"
                style={{
                  background:
                    "linear-gradient(180deg, #E7AD36 0%, #BE1E2D 100%)",
                }}
              ></div>
            </div>
          </div>
          <div className="w-full sm:max-w-[70%]">
            <div className="flex w-full">
              <div
                className="min-w-[5px] rounded-l-xl sm:min-w-[10px]"
                style={{
                  background:
                    "linear-gradient(180deg, #E7AD36 0%, #BE1E2D 100%)",
                }}
              ></div>
              <div
                className="flex flex-1 items-center justify-center rounded-r-xl bg-cream p-3 sm:pb-1"
                style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
              >
                <div className="mr-3 h-full w-[85%] text-xs sm:text-base">
                  <h1 className="gradient-text-horizontal mb-1 font-bold uppercase sm:mb-3">
                    Practical Applications
                  </h1>
                  <span className="font-medium">
                    By applying the teachings of the Holy Qur&lsquo;an and the
                    AhlulBayt (A.S) to this era in our initiatives and services.
                  </span>
                </div>
                <div className="w-[15%]">
                  <Image
                    src={require("/public/assets/about-us/pen.png")}
                    alt="pen"
                    className="h-auto w-full"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="my-3 ml-auto mr-0 w-full sm:w-[70%]">
            <div className="flex w-full">
              <div
                className="flex flex-1 items-center justify-center rounded-l-xl bg-cream p-3 sm:pb-1"
                style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
              >
                <div className="w-[15%]">
                  <Image
                    src={require("/public/assets/about-us/wifi.png")}
                    alt="wifi"
                    className="h-auto w-full"
                  />
                </div>
                <div className="ml-3 h-full w-[85%] text-right text-xs sm:text-base">
                  <h1 className="gradient-text-horizontal-reversed mb-1 font-bold uppercase sm:mb-3">
                    Media Variety
                  </h1>
                  <span className="font-medium">
                    By using a wide range of formats to engage and serve the
                    global community. Eg. Reels, Live Streams, Apps, Websites,
                    Digital Resources etc.
                  </span>
                </div>
              </div>
              <div
                className="min-w-[5px] rounded-r-xl sm:min-w-[10px]"
                style={{
                  background:
                    "linear-gradient(180deg, #E7AD36 0%, #BE1E2D 100%)",
                }}
              ></div>
            </div>
          </div>
          <div className="w-full sm:max-w-[70%]">
            <div className="flex w-full">
              <div
                className="min-w-[5px] rounded-l-xl sm:min-w-[10px]"
                style={{
                  background:
                    "linear-gradient(180deg, #E7AD36 0%, #BE1E2D 100%)",
                }}
              ></div>
              <div
                className="flex flex-1 items-center justify-center rounded-r-xl bg-cream p-3 sm:pb-1"
                style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
              >
                <div className="mr-3 h-full w-[85%] text-xs sm:text-base">
                  <h1 className="gradient-text-horizontal mb-1 font-bold uppercase sm:mb-3">
                    Digital Platform
                  </h1>
                  <span className="font-medium">
                    By providing a space for the youth from around the world to
                    get involved in any capacity - contributing their skills,
                    collaborating, leading, and being a part of a community that
                    shares a passion to serve.
                  </span>
                </div>
                <div className="w-[15%]">
                  <Image
                    src={require("/public/assets/about-us/forward.png")}
                    alt="forward"
                    className="h-auto w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
