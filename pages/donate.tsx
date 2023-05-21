import { useState } from "react";
import { MainLayout } from "../layouts/main";
import { montserrat } from "../utils/fonts";
import DonateComponent from "../components/donate";

const TABS = [
    {
        text: "DONATE NOW",
        divStyle: "bg-cream",
        textStyle:
            "bg-[linear-gradient(90deg, #BE1E2D 0%, #E7AD36 96.83%)] bg-clip-text text-transparent",
    },
    {
        text: "UK BANK TRANSFER",
        divStyle: "bg-mustard",
        textStyle: "",
    },
    {
        text: "Canada BANK TRANSFER",
        divStyle: "bg-red.500",
        textStyle: "",
    },
];

export default function Donate() {
    const [tab, setTab] = useState(0);

    return (
        <MainLayout bottomPadding={false}>
            <div
                className={`${montserrat.className} flex flex-col justify-center h-96 bg-gray-400 px-12 pb-8`}
            >
                <h3 className="font-extrabold text-white text-xs sm:text-sm md:text-xl">
                    IT IS REPORTED THAT IMAM ALI (A.S) SAID:
                </h3>
                <p className="font-semibold text-white text-xs sm:text-sm md:text-xl py-4 lg:py-8 lg:w-[715px]">
                    &ldquo;Allah says: &apos;Paradise is forbidden for one who is wealthy yet
                    stingy; as well as for the backbiter, who is the gossiper.&apos; Surely, whoever
                    gives in charity, each silver coin that he gives will be a blessing in Paradise,
                    the weight of each of which is like that of Mount Uhud.&rdquo;
                </p>
                <p className="font-medium text-white text-xs sm:text-sm md:text-xl">
                    [Al-Amālī of Saduq, The Sixty-Sixth Assembly]
                </p>
            </div>
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
        </MainLayout>
    );
}
