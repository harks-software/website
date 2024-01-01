"use client";
import { useState } from "react";
import DonateComponent from "app/components/donate";
import { CounterNumericDisplay } from "app/components/home/counter";
import {
  UserGroupIcon,
  GlobeAmericasIcon,
  LightBulbIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/solid";
import { Testimonials } from "../components/testimonials";
import Link from "next/link";

export default function Donate() {
  return (
    <div className="bg-cream">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          <div className="col-span-2 p-6">
            <h1 className="mt-6 text-2xl font-bold text-gray.800 lg:text-3xl">
              Donate Now
            </h1>
            <span className="mt-6 text-lg font-medium text-gray.800">
              Explore the initiatives your donation would help support. Visit
              the about us page to learn more.
            </span>
            <div className="flex flex-wrap items-center justify-evenly py-16 md:flex-row md:items-start md:pb-12 lg:flex-nowrap lg:px-64">
              <div className="flex flex-col items-center px-6 pb-4 text-white lg:px-0 lg:pb-0">
                <UserGroupIcon className="h-14 w-14 text-gray.800" />
                <CounterNumericDisplay
                  to={40}
                  className="text-xl font-semibold text-gray.800 md:py-2 md:text-4xl"
                />
                <span className="font-medium text-gray.800 md:text-base">
                  VOLUNTEERS
                </span>
              </div>
              <div className="flex flex-col items-center px-6 pb-4 text-white lg:px-0 lg:pb-0 lg:pl-16 xl:pl-24">
                <GlobeAmericasIcon className="h-14 w-14 text-gray.800" />
                <CounterNumericDisplay
                  to={7}
                  className="text-xl font-semibold text-gray.800 md:py-2 md:text-4xl"
                />
                <span className="font-medium leading-8 text-gray.800 md:text-lg">
                  COUNTRIES
                </span>
              </div>
              <div className="flex flex-col items-center px-6 pb-4 text-white lg:px-0 lg:pb-0 lg:pl-16 xl:pl-24">
                <LightBulbIcon className="h-14 w-14 text-gray.800" />
                <CounterNumericDisplay
                  to={5}
                  className="text-xl font-semibold text-gray.800 md:py-2 md:text-4xl"
                />
                <span className="font-medium leading-8 text-gray.800 md:text-lg">
                  PROJECTS
                </span>
              </div>
              <div className="flex flex-col items-center px-6 pb-4 text-white lg:px-0 lg:pb-0 lg:pl-16 xl:pl-24">
                <ChatBubbleLeftRightIcon className="h-14 w-14 text-gray.800" />
                <CounterNumericDisplay
                  to={10}
                  className="text-xl font-semibold text-gray.800 md:py-2 md:text-4xl"
                />
                <span className="font-medium leading-8 text-gray.800 md:text-lg">
                  COLLABS
                </span>
              </div>
            </div>
            {/** Lifted from ExploreSlideshow component (without the slideshow feature) */}
            <div className="grid justify-items-center gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col rounded-md bg-[#18181873]">
                <a href={"/digital-hub/virtual-majlis-service"}>
                  <div
                    className="group h-[197px] w-full rounded-md"
                    style={{
                      background: `url("/assets/home/explore/vms.png") no-repeat center center /cover`,
                      filter: "drop-shadow(0px 4px 20px rgba(0, 0, 0, 0.25))",
                    }}
                  ></div>
                  {/* Item title and description */}
                  <div
                    className="my-5 cursor-pointer px-2 text-center text-white"
                    style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
                  >
                    <h1 className="text-lg font-bold">
                      Virtual Majlis Service
                    </h1>
                    <p className="mt-3 truncate whitespace-normal text-base font-medium">
                      Providing you the opportunity to use our platform and
                      support to host an online event.
                    </p>
                  </div>
                </a>
              </div>
              <div className="flex flex-col rounded-md bg-[#18181873]">
                <a href={"/podcast"}>
                  <div
                    className="group h-[197px] w-full rounded-md"
                    style={{
                      background: `url("/assets/home/explore/podcast.png") no-repeat center center /cover`,
                      filter: "drop-shadow(0px 4px 20px rgba(0, 0, 0, 0.25))",
                    }}
                  ></div>
                  {/* Item title and description */}
                  <div
                    className="my-5 cursor-pointer px-2 text-center text-white"
                    style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
                  >
                    <h1 className="text-lg font-bold">The HARKS Podcast</h1>
                    <p className="mt-3 truncate whitespace-normal text-base font-medium">
                      Notable speakers and young individuals to discuss how to
                      tackle the current issues faced by today's youth.
                    </p>
                  </div>
                </a>
              </div>
              <div className="flex flex-col rounded-md bg-[#18181873]">
                <a href={"/initiatives/youth-day"}>
                  <div
                    className="group h-[197px] w-full rounded-md"
                    style={{
                      background: `url("/assets/home/explore/youthday.jpg") no-repeat center center /cover`,
                      filter: "drop-shadow(0px 4px 20px rgba(0, 0, 0, 0.25))",
                    }}
                  ></div>
                  {/* Item title and description */}
                  <div
                    className="my-5 cursor-pointer px-2 text-center text-white"
                    style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
                  >
                    <h1 className="text-lg font-bold">Youth Day</h1>
                    <p className="mt-3 truncate whitespace-normal text-base font-medium">
                      An annual event to celebrate the youth in honour of Hazrat
                      Ali Akbar (A.S).
                    </p>
                  </div>
                </a>
              </div>
            </div>
            <section className="flex w-full px-4 pt-12">
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
                    img: "servants-of-zahra.jpg",
                  },
                ]}
              />
            </section>
          </div>
          <div className="col-span-2 mb-6 p-6 lg:col-span-1">
            <div className="mt-0 w-full items-center justify-center bg-cream">
              <DonateComponent />
            </div>
            <div className="my-4 rounded-lg bg-white/70 shadow-lg">
              <div className="flex h-full w-full flex-row">
                <div className="w-4 rounded-l-lg bg-[#E7AD36]"></div>
                <div className="w-full p-4 pr-0">
                  <div className="flex w-full">
                    <h4 className="text-2xl font-semibold text-black sm:text-3xl">
                      Bank Transfer
                    </h4>
                    <Link href="/contact-us" className="ml-auto">
                      <button
                        className="ml-auto rounded-l-lg bg-[#E7AD36] p-1 text-sm font-semibold text-white transition-all duration-200 hover:opacity-80 sm:p-3 sm:text-base"
                        style={{
                          textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                        }}
                      >
                        EMAIL US
                      </button>
                    </Link>
                  </div>
                  <p className="w-full pt-2 sm:w-3/4">
                    Please reach out to us via{" "}
                    <a
                      href="mailto:hussainark@gmail.com"
                      className="font-bold underline"
                    >
                      hussainark@gmail.com
                    </a>{" "}
                    if you wish to make a donation through a bank transfer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
