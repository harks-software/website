import Image from "next/image";
import { ParallaxTransparentBackground } from "../components/parallax-transparent-background";
import { BsFillCameraFill } from "react-icons/bs";
import { FaMicrophone } from "react-icons/fa";
import { MainLayout } from "../layouts/main";
import { oswald } from "../utils/fonts";

export default function VirtualMajlisService() {
    return (
        <MainLayout bottomPadding title="Virtual Majlis Service">
            <>
                <ParallaxTransparentBackground image="/assets/VMS/karbala-footer.png">
                    <div className="px-4 pt-40 text-center">
                        <div
                            className={`text-2xl ${oswald.className} font-bold text-white lg:text-3xl xl:text-4xl`}
                        >
                            Virtual Majlis Service
                        </div>
                        <div className="mt-12 font-sans sm:text-lg font-medium text-white md:text-xl">
                            We are offering you the opportunity to use our platform and support to
                            host an online private majlis. These can vary based on what you would
                            like to host, ranging from an Isaale Sawaab Majlis to a majlis in
                            celebration or commemoration of the AhlulBayt (A.S).
                        </div>
                    </div>
                </ParallaxTransparentBackground>
                <div className="mx-auto flex max-w-6xl flex-col gap-2">
                    <h2 className="m-4 py-3 text-center text-3xl font-bold">What do we offer</h2>
                    <div className="flex flex-wrap justify-center">
                        <div className="m-6 flex w-60 flex-col items-center justify-center rounded-3xl bg-slate-50 shadow-lg hover:bg-slate-100 hover:shadow-xl">
                            <div className="m-4 flex h-60 items-center">
                                <Image
                                    width={144}
                                    height={144}
                                    className="mx-5"
                                    src={require("../public/assets/VMS/youtube.svg")}
                                    alt="YouTube Logo"
                                />
                            </div>
                            <div className="m-4 text-center text-xl">Live streaming to YouTube</div>
                        </div>

                        <div className="m-6 flex w-60 flex-col items-center justify-center rounded-3xl bg-slate-50 shadow-lg hover:bg-slate-100 hover:shadow-xl">
                            <div className="m-4 flex h-60 items-center">
                                <Image
                                    width={144}
                                    height={144}
                                    className="mx-5"
                                    src={require("../public/assets/VMS/zoom.svg")}
                                    alt="Zoom Logo"
                                />
                            </div>
                            <div className="m-4 text-center text-xl">
                                Zoom Pro (Max 100 participants)
                            </div>
                        </div>

                        <div className="m-6 flex w-60 flex-col items-center justify-center rounded-3xl bg-slate-50 shadow-lg hover:bg-slate-100 hover:shadow-xl">
                            <FaMicrophone size={60} />
                            <div className="m-4 text-center text-xl">Coordination & Streaming</div>
                        </div>

                        <div className="m-6 flex w-60 flex-col items-center justify-center rounded-3xl bg-slate-50 shadow-lg hover:bg-slate-100 hover:shadow-xl">
                            <BsFillCameraFill size={60} />

                            <div className="m-4 text-center text-xl">Coordination & Streaming</div>
                        </div>
                    </div>
                </div>

                <div className="m-7 flex items-stretch justify-center bg-yellow.500">
                    <div className="hidden lg:block">
                        <div>
                            <Image
                                width={128}
                                height={128}
                                src={require("../public/assets/VMS/laptop.png")}
                                className="m-16 my-4 mr-20 rounded-full"
                                alt="Laptop"
                            />
                        </div>
                        <div>
                            <Image
                                width={128}
                                height={128}
                                src={require("../public/assets/VMS/whatsapp.png")}
                                className="m-16 my-10 mr-20 rounded-full"
                                alt="Whatsapp Logo"
                            />
                        </div>
                        <div>
                            <Image
                                width={128}
                                height={128}
                                src={require("../public/assets/VMS/paypal.png")}
                                className="m-16 my-10 mr-20  rounded-full"
                                alt="Paypal Logo"
                            />
                        </div>
                    </div>
                    <div className="flex items-center lg:ml-36">
                        <div>
                            <h2 className="m-9 text-center text-3xl font-bold">
                                How does it work?
                            </h2>
                            <ol className="text-left text-xl">
                                <li className="m-4">
                                    1. Fill out the form below with your requirements & majlis
                                    details.
                                </li>
                                <li className="m-4">
                                    2. A team member will reach out as a Point of Contact (POC).
                                </li>
                                <li className="m-4">
                                    2. Discuss requirements, details and costs with the POC.
                                </li>
                                <li className="m-4">4.The Majlis is run as planned.</li>
                                <li className="m-4">
                                    5. An Invoice of the price agreed upon will be sent via email
                                    from your assigned POC after the majlis.
                                </li>
                            </ol>

                            <h2 className="mt-16 text-center text-3xl font-bold">
                                How much will it cost?
                            </h2>
                            <p className="m-4 text-center text-xl">
                                £20 (price can vary based on requirements)
                            </p>
                        </div>
                    </div>

                    <div className="hidden w-80 lg:visible"></div>
                </div>
                <div className="mx-auto max-w-2xl">
                    <h3 className="text-center text-2xl font-bold">After Completing the Form</h3>
                    <p className="pt-8 text-center text-lg">
                        We kindly ask you to complete the event registration form in advance. We can
                        not guarantee any late requests. We will, however, make every effort to
                        accommodate.
                    </p>
                    <iframe
                        src="https://docs.google.com/forms/d/e/1FAIpQLSfWnJ1XkSFyqEZpUc5-KAGhZFrHVZkM0q60QwjKBQHj7VvzGg/viewform?embedded=true"
                        className="mt-24 h-[700px] w-full rounded-md shadow-md"
                    ></iframe>
                </div>
            </>
        </MainLayout>
    );
}
