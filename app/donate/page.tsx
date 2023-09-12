"use client";
import { useState } from "react";
import DonateComponent from "app/components/donate";
import { PreviousWork } from "app/components/donate/previous-work";
import { CounterNumericDisplay } from "app/components/home/counter";
import {
  UserGroupIcon,
  GlobeAmericasIcon,
  LightBulbIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/solid";

const PREVIOUS_WORK_IMAGES = [
  { image: "./assets/donate/HARKS-naynawah.jpg" },
  { image: "./assets/donate/youthday-thumbnail.png" },
];

export default function Donate() {
  const [tab, setTab] = useState(0);

  return (
    <>
      <PreviousWork items={PREVIOUS_WORK_IMAGES} />
      <div className="tabs -mt-12">
        <a
          className="tab tab-lifted tab-xs z-30 -ml-2 rounded-tr-xl border-none bg-cream sm:tab-lg"
          onClick={() => {
            setTab(0);
          }}
        >
          <span className="bg-gradient-to-r from-red-500 to-mustard bg-clip-text px-2 text-xs font-bold text-transparent sm:text-sm md:text-xl lg:px-8">
            DONATE NOW
          </span>
        </a>
        <a
          className="tab tab-lifted tab-xs z-20 -ml-2 border-none bg-mustard sm:tab-lg"
          onClick={() => {
            setTab(1);
          }}
        >
          <span className="bg-gradient-to-r bg-clip-text px-2 text-xs font-bold text-transparent text-white sm:text-sm md:text-xl lg:px-8">
            UK BANK TRANSFER
          </span>
        </a>

        <a
          className="tab tab-lifted tab-xs z-10 -ml-2 border-none bg-red-500 sm:tab-lg"
          onClick={() => {
            setTab(2);
          }}
        >
          <span className="bg-gradient-to-r bg-clip-text px-2 text-xs font-bold text-transparent text-white sm:text-sm md:w-auto md:text-xl lg:px-8">
            CANADA BANK TRANSFER
          </span>
        </a>
      </div>
      {/* tabbed sections */}
      {tab === 0 ? (
        <div className="mt-0 flex h-[500px] w-full items-center justify-center bg-cream">
          <DonateComponent />
        </div>
      ) : (
        <></>
      )}
      {tab === 1 ? (
        <div className="w-full bg-mustard p-8 text-sm font-medium text-white md:p-16 md:text-xl">
          <p>
            <span className="font-bold">Account holder:</span> Hussain&apos;s
            Ark of Salvation
            <br />
            <span className="font-bold">Sort code:</span> 23-14-70
            <br />
            <span className="font-bold">Account number:</span> 99955702
            <br /> <span className="font-bold">IBAN:</span> GB75 TRWI 2314 7099
            9557 02
            <br /> <span className="font-bold">Wise&apos;s address:</span> 56
            Shoreditch High Street
            <br /> London
            <br /> E1 6JJ
            <br /> United Kingdom
          </p>
        </div>
      ) : (
        <></>
      )}
      {tab === 2 ? (
        <div className="w-full bg-red-500 p-8 text-sm font-medium text-white md:p-16 md:text-xl">
          <p>
            <span className="font-bold">Account holder:</span> Hussain&apos;s
            Ark of Salvation
            <br /> <span className="font-bold">Institution number:</span> 621
            <br /> <span className="font-bold">Account number:</span>{" "}
            200110501750
            <br /> <span className="font-bold">Transit number:</span> 16001
            <br /> <span className="font-bold">Wise&apos;s address:</span> 99
            Bank Street, Suite 1420
            <br /> Ottawa ON K1P 1H4
            <br /> Canada
          </p>
        </div>
      ) : (
        <></>
      )}
      <div
        className="flex flex-wrap items-center justify-evenly bg-black/80 bg-cover bg-center py-16 md:flex-row md:items-start md:pb-12 lg:flex-nowrap lg:px-64"
        style={{ backgroundImage: "url(./assets/about-us/caligraphy.png" }}
      >
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
    </>
  );
}
