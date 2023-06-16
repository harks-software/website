import { useState } from "react";
import { MainLayout } from "../layouts/main";
import { montserrat } from "../utils/fonts";
import DonateComponent from "../components/donate";
import { PreviousWork } from "../components/donate/previous-work";
import { CounterNumericDisplay } from "../components/home/counter";

const PREVIOUS_WORK_IMAGES = [
    { image: "./assets/donate/HARKS-naynawah.jpg" },
    { image: "./assets/donate/youthday-thumbnail.png" },
];

export default function Donate() {
    const [tab, setTab] = useState(0);

    return (
        <MainLayout bottomPadding={false} title="Donate">
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
                        <span className="font-bold">Account holder:</span> Hussain&apos;s Ark of
                        Salvation
                        <br />
                        <span className="font-bold">Sort code:</span> 23-14-70
                        <br />
                        <span className="font-bold">Account number:</span> 99955702
                        <br /> <span className="font-bold">IBAN:</span> GB75 TRWI 2314 7099 9557 02
                        <br /> <span className="font-bold">Wise&apos;s address:</span> 56 Shoreditch
                        High Street
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
                        <span className="font-bold">Account holder:</span> Hussain&apos;s Ark of
                        Salvation
                        <br /> <span className="font-bold">Institution number:</span> 621
                        <br /> <span className="font-bold">Account number:</span> 200110501750
                        <br /> <span className="font-bold">Transit number:</span> 16001
                        <br /> <span className="font-bold">Wise&apos;s address:</span> 99 Bank
                        Street, Suite 1420
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
        </MainLayout>
    );
}
