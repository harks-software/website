import Image from "next/image";
import { ParallaxTransparentBackground } from "../components/parallax-transparent-background";
import { BsFillCameraFill } from "react-icons/bs";
import { FaMicrophone } from "react-icons/fa";
import { MainLayout } from "../layouts/main";
import { montserrat, oswald } from "../utils/fonts";
import {
  ProcessSectionDesktop,
  ProcessSectionMobile,
} from "../components/vms/process-section";
import { PaymentItem } from "../components/vms/payment-components";

export default function VirtualMajlisService() {
  return (
    <MainLayout bottomPadding={false} title="Virtual Majlis Service">
      <section
        className={`bg-[url('../public/assets/VMS/section1-bg.png')] md:flex-row flex-col items-center bg-center bg-cover bg-no-repeat w-full flex px-10 py-16 md:py-24 md:px-20 ${montserrat.className}`}
      >
        <div className="flex flex-col flex-[0.4]">
          <Image
            src={require("../public/assets/VMS/vms-logo.png")}
            width={450}
            height={250}
            alt="Virtual Majlis Service"
          />
          <p className="text-white mb-6">
            We are offering you the opportunity to use our platform and support
            to host an online private majlis.
          </p>
          <a
            href="#"
            className="bg-vmsRed.500 hover:opacity-50 transition-all duration-200 px-10 py-6 max-w-[181px] rounded-2xl text-white text-center font-bold"
          >
            Get started
          </a>
        </div>
        <div className="flex flex-col items-end flex-[0.6]">
          <Image
            src={require("../public/assets/VMS/desktop-section-pictures.png")}
            width={390}
            height={345}
            alt="Majlis Pictures"
            className="md:block hidden"
          />
          <Image
            src={require("../public/assets/VMS/desktop-section-pictures.png")}
            width={293}
            height={239}
            alt="Majlis Pictures"
            className="md:hidden block mt-12"
          />
        </div>
      </section>
      <section
        className={`${montserrat.className} bg-vmsGrey.100 p-8 lg:py-14 lg:px-20`}
      >
        <h1 className="font-bold text-vmsGrey.500 text-xs lg:text-sm text-center w-full pb-2 lg:pb-8">
          PROCESS
        </h1>
        <h2 className="font-bold text-black text-xl lg:text-3xl text-center w-full">
          How does it work?
        </h2>
        <ProcessSectionDesktop />
        <ProcessSectionMobile />
      </section>
      <section
        className={`bg-[#0B0B0B] py-12 px-8 lg:py-24 lg:px-20 ${montserrat.className}`}
      >
        <h1 className="font-bold text-white text-xs lg:text-sm text-center w-full pb-4 lg:pb-8">
          PRICING
        </h1>
        <h2 className="text-white text-2xl lg:text-4xl text-center w-full">
          Pricing plans for our{" "}
          <span className="text-[#FECB06] font-semibold">
            Virtual Majlis Service
          </span>
        </h2>
        <p className="lg:py-6 py-12 text-white text-sm text-center w-full">
          You can select one of the three items below.
        </p>
        <p className="text-[#BBB] text-center text-sm w-full">
          All payments made are made to the Hussain's Ark of Salvation charity
        </p>
        <div className="flex justify-center items-center mt-6 flex-wrap">
          <PaymentItem
            title="VIDEO CONFERENCING"
            description="Starting from £15"
            image="/assets/VMS/confrencing-item.png"
          />
          <PaymentItem
            title="YOUTUBE LIVE"
            description="Starting from £25"
            image="/assets/VMS/youtube-item.png"
          />
          <PaymentItem
            title="CUSTOM"
            description="Starting from £30"
            image="/assets/VMS/custom-item.png"
          />
        </div>
        <h2 className="text-white font-bold mt-24 text-2xl lg:text-4xl text-center w-full">
          Add-Ons
        </h2>
        <p className="lg:py-6 py-12 text-white text-sm text-center w-full">
          You can additionally select one of the three add-ons below.
        </p>
        <div className="flex justify-center flex-wrap items-center lg:mt-6">
          <PaymentItem
            title="CUSTOM GRAPHICS"
            description="Two posters starting from £10"
            image="/assets/VMS/poster-addon.png"
          />
          <PaymentItem
            title="VIDEO PRODUCTION"
            description="One custom video starting from £15"
            image="/assets/VMS/video-addon.png"
          />
          <PaymentItem
            title="MARKETING"
            description="One @harksvms post starting from £5"
            image="/assets/VMS/marketing-addon.png"
          />
        </div>
      </section>
      <section
        className={`w-full flex-col flex items-center justify-center text-white ${montserrat.className} px-20 py-10 lg:py-20 lg:px-40 bg-center bg-cover bg-[url('/assets/VMS/custom-horizontal.png')]`}
      >
        <h1 className="font-bold text-white text-sm text-center w-full pb-8">
          CUSTOM
        </h1>
        <p className="text-white text-center w-full leading-8">
          In addition to the VMS items and add-ons, you can discuss additional
          customizations to your virtual majlis with our VMS coordinators!
        </p>
      </section>
      <section
        className={`${montserrat.className} lg:py-20 lg:px-24 py-10 px-12`}
      >
        <h1 className="font-bold text-vmsBrown.500 text-sm text-center w-full pb-8">
          FORM
        </h1>
        <p className="text-vmsBrown.500 text-center w-full leading-8">
          We kindly ask you to complete the event registration form in advance.
          We can not guarantee any late requests. We will, however, make every
          effort to accommodate.
        </p>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSfWnJ1XkSFyqEZpUc5-KAGhZFrHVZkM0q60QwjKBQHj7VvzGg/viewform?embedded=true"
          className="mx-auto mt-10 mb-4 h-[700px] w-full rounded-md shadow-md lg:w-6/12"
        >
          Loading…
        </iframe>
        <h2 className="font-bold mb-4 mt-24 text-vmsBrown.500 w-full text-lg lg:text-2xl text-center">
          Have any questions?
        </h2>
        <p className="text-center text-sm lg:text-base w-full">
          Reach out to us at{" "}
          <a
            href="mailto:vms@hussainsark.org"
            className="text-vmsRed.500 hover:underline"
          >
            vms@hussainsark.org
          </a>
        </p>
        <div className="flex w-full justify-center mt-6 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="51"
            height="51"
            viewBox="0 0 51 51"
            fill="none"
          >
            <path
              d="M48.2131 13.8763C47.6679 11.8234 46.0615 10.2065 44.0218 9.65782C40.3247 8.66077 25.5 8.66077 25.5 8.66077C25.5 8.66077 10.6753 8.66077 6.97821 9.65782C4.93854 10.2066 3.33212 11.8234 2.78689 13.8763C1.79627 17.5974 1.79627 25.3611 1.79627 25.3611C1.79627 25.3611 1.79627 33.1248 2.78689 36.8459C3.33212 38.8989 4.93854 40.4484 6.97821 40.9971C10.6753 41.9941 25.5 41.9941 25.5 41.9941C25.5 41.9941 40.3246 41.9941 44.0218 40.9971C46.0615 40.4484 47.6679 38.8989 48.2131 36.8459C49.2037 33.1248 49.2037 25.3611 49.2037 25.3611C49.2037 25.3611 49.2037 17.5974 48.2131 13.8763ZM20.6515 32.41V18.3122L33.042 25.3613L20.6515 32.41Z"
              fill="#D6112E"
            />
          </svg>
          <a
            href="https://www.youtube.com/@hussainsark"
            className="ml-2 text-vmsRed.500 hover:underline text-sm lg:text-base"
          >
            @harksvms
          </a>
        </div>
        <div className="flex w-full justify-center mt-4 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="44"
            height="44"
            viewBox="0 0 44 44"
            fill="none"
          >
            <path
              d="M22.0084 12.6692C16.667 12.6692 12.3586 16.9776 12.3586 22.319C12.3586 27.6604 16.667 31.9688 22.0084 31.9688C27.3498 31.9688 31.6582 27.6604 31.6582 22.319C31.6582 16.9776 27.3498 12.6692 22.0084 12.6692ZM22.0084 28.5927C18.5566 28.5927 15.7348 25.7792 15.7348 22.319C15.7348 18.8589 18.5482 16.0454 22.0084 16.0454C25.4686 16.0454 28.282 18.8589 28.282 22.319C28.282 25.7792 25.4602 28.5927 22.0084 28.5927ZM34.3037 12.2745C34.3037 13.5259 33.2959 14.5253 32.0529 14.5253C30.8016 14.5253 29.8021 13.5175 29.8021 12.2745C29.8021 11.0315 30.81 10.0237 32.0529 10.0237C33.2959 10.0237 34.3037 11.0315 34.3037 12.2745ZM40.6949 14.5589C40.5522 11.5438 39.8635 8.87314 37.6547 6.67275C35.4543 4.47236 32.7836 3.78369 29.7686 3.63252C26.6611 3.45615 17.3473 3.45615 14.2398 3.63252C11.2332 3.77529 8.5625 4.46396 6.35371 6.66436C4.14492 8.86475 3.46465 11.5354 3.31348 14.5505C3.13711 17.6579 3.13711 26.9718 3.31348 30.0792C3.45625 33.0942 4.14492 35.7649 6.35371 37.9653C8.5625 40.1657 11.2248 40.8544 14.2398 41.0056C17.3473 41.1819 26.6611 41.1819 29.7686 41.0056C32.7836 40.8628 35.4543 40.1741 37.6547 37.9653C39.8551 35.7649 40.5438 33.0942 40.6949 30.0792C40.8713 26.9718 40.8713 17.6663 40.6949 14.5589ZM36.6805 33.4134C36.0254 35.0595 34.7572 36.3276 33.1027 36.9911C30.6252 37.9737 24.7463 37.747 22.0084 37.747C19.2705 37.747 13.3832 37.9653 10.9141 36.9911C9.26797 36.336 7.99981 35.0679 7.33633 33.4134C6.35371 30.9358 6.58047 25.0569 6.58047 22.319C6.58047 19.5812 6.36211 13.6938 7.33633 11.2247C7.99141 9.57861 9.25957 8.31045 10.9141 7.64697C13.3916 6.66436 19.2705 6.89111 22.0084 6.89111C24.7463 6.89111 30.6336 6.67275 33.1027 7.64697C34.7488 8.30205 36.017 9.57021 36.6805 11.2247C37.6631 13.7022 37.4363 19.5812 37.4363 22.319C37.4363 25.0569 37.6631 30.9442 36.6805 33.4134Z"
              fill="black"
            />
          </svg>
          <a
            className="text-vmsRed.500 hover:underline ml-2 text-sm lg:text-base"
            href="https://www.instagram.com/hussainsark"
          >
            @harksvms
          </a>
        </div>
      </section>
    </MainLayout>
  );
}
