import Link from "next/link";
import { Bullet } from "../components/bullet";
import { MainLayout } from "../layouts/main";
import { oswald } from "../utils/fonts";

export default function WhatsAppBroadcasting() {
  return (
    <MainLayout title="WhatsApp Broadcasting">
      <div className="py-32 flex flex-col gap-8">
        <h1
          className={`text-center ${oswald.className} text-3xl text-gray-600`}
        >
          Whatsapp Broadcasting
        </h1>
        <div className="mx-auto my-0 w-full max-w-5xl rounded-xl px-5 py-10 shadow-[0px_0px_10px_0px_rgba(0,0,0,0.1)]">
          <h2 className="mx-auto w-full text-center text-xl font-bold md:w-[75%]">
            Join our Whatsapp free broadcasting list and recieve live updates.
            Please follow the steps below:
          </h2>
          <ul className="mx-auto w-fit px-5 py-10">
            <li className="mb-5 flex">
              <Bullet colour="fill-gray-600" />
              <span>
                Add our number "<strong>+44 7784 313 786</strong>" to your
                contacts & save it as "Hussain's Ark of Salvation".
              </span>
            </li>
            <li className="mb-5 flex">
              <Bullet colour="fill-gray-400" />
              <span>
                Reply with "SUBSCRIBE" followed by your full name. For example:
                SUBSCRIBE Hussain Ali.
              </span>
            </li>
            <li className="flex">
              <Bullet colour="fill-gray-300" />
              <span>
                You will then get updates of our{" "}
                <strong>LIVE events & programs</strong> as well as any other
                announcements.
              </span>
            </li>
          </ul>
          <div className="flex w-full justify-center">
            <button className="rounded-3xl bg-black font-semibold text-white shadow-buttonShadow transition-all duration-300 hover:bg-green-600 hover:shadow-greenHover">
              <Link
                className="flex h-full w-full px-10 pt-2"
                href="https://wa.me/message/OCOEPD7LFODMA1"
              >
                <span className="mr-2">Join Our Whatsapp</span>
                <svg
                  className="-mt-3 fill-white p-0"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="45"
                  height="45"
                >
                  <g>
                    <path d="M17,8a1,1,0,0,0-1,1v5.59L7.71,6.29A1,1,0,0,0,6.29,7.71L14.59,16H9a1,1,0,0,0,0,2h8a1,1,0,0,0,1-1V9A1,1,0,0,0,17,8Z"></path>
                  </g>
                </svg>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
