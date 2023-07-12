import { useState } from "react";
import { MainLayout } from "../layouts/main";
import { montserrat } from "../utils/fonts";
import DonateComponent from "../components/donate";
import { PreviousWork } from "../components/donate/previous-work";
import { CounterNumericDisplay } from "../components/home/counter";
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
    <MainLayout title="Donate">
      <PreviousWork items={PREVIOUS_WORK_IMAGES} />
      <div className="tabs -mt-12">
        <a
          className="tab z-30 -ml-2 tab-xs sm:tab-lg tab-lifted rounded-tr-xl bg-cream border-none"
          onClick={() => {
            setTab(0);
          }}
        >
          <span className="from-red.500 to-mustard bg-gradient-to-r sm:text-sm text-xs md:text-xl bg-clip-text text-transparent font-bold px-2 lg:px-8">
            DONATE NOW
          </span>
        </a>
        <a
          className="tab z-20 -ml-2 tab-xs sm:tab-lg tab-lifted bg-mustard border-none"
          onClick={() => {
            setTab(1);
          }}
        >
          <span className="text-white bg-gradient-to-r sm:text-sm text-xs md:text-xl bg-clip-text text-transparent font-bold px-2 lg:px-8">
            UK BANK TRANSFER
          </span>
        </a>

        <a
          className="tab z-10 -ml-2 tab-xs sm:tab-lg tab-lifted bg-red.500 border-none"
          onClick={() => {
            setTab(2);
          }}
        >
          <span className="text-white bg-gradient-to-r text-xs sm:text-sm md:w-auto md:text-xl bg-clip-text text-transparent font-bold px-2 lg:px-8">
            CANADA BANK TRANSFER
          </span>
        </a>
      </div>
      {/* tabbed sections */}
      {tab === 0 ? (
        <div className="w-full flex justify-center items-center mt-0 h-[500px] bg-cream">
          <DonateComponent />
        </div>
      ) : (
        <></>
      )}
      {tab === 1 ? (
        <div
          className={`w-full p-8 text-sm md:p-16 md:text-xl font-medium bg-mustard ${montserrat.className} text-white`}
        >
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
        <div
          className={`w-full p-8 text-sm md:p-16 md:text-xl font-medium bg-red.500 ${montserrat.className} text-white`}
        >
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
        className={`flex flex-wrap items-center justify-evenly py-16 ${montserrat.className} bg-center bg-cover md:flex-row md:items-start md:pb-12 lg:px-64 lg:flex-nowrap bg-black/80`}
        style={{ backgroundImage: "url(./assets/about-us/caligraphy.png" }}
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
    </MainLayout>
  );
}
