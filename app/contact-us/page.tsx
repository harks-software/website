import Link from "next/link";
import { EnvelopeIcon } from "@heroicons/react/24/outline";

export default function ContactUs() {
  return (
    <div className="bg-beige.300 bg-contain">
      <div className="bg-[url('/assets/contact/overlay.png')] bg-no-repeat">
        <div className="mx-auto flex max-w-5xl flex-col gap-6 bg-contain px-4 py-6">
          <h1 className="bg-gradient-to-r from-red.500 to-gold.400 bg-clip-text text-center text-4xl font-bold uppercase text-transparent">
            Contact Us
          </h1>
          <p>
            Kindly fill out the form below if you have any queries at all, from
            questions to inquiries or concerns. You are also welcome to give us
            any feedback or ideas that you may have so we can continue to
            provide you with the best possible content and services
            Insha&apos;Allah!
          </p>
          <div className="md:flex">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLScfs7FyN62_tZFCb78anp3dbl2df4fANcM81gz8GR5WtDOW_A/viewform?embedded=true"
              width="100%"
              height="1200"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              className="flex-1"
            >
              Loading…
            </iframe>
            <div className="my-auto flex h-fit flex-col items-center justify-center gap-8 border-slate-500 py-8 md:ml-4 md:w-auto md:items-start md:border-l-2 md:pl-8">
              <Link href="/join-the-crew">
                <button className="btn w-[253px] border-none bg-red.500 text-xl text-white drop-shadow-md hover:bg-red.700 md:w-[273px] md:text-2xl">
                  Join the Crew
                </button>
              </Link>

              <Link href="/donate">
                <button className="btn w-[253px] border-none bg-gold.500 text-xl text-white drop-shadow-md hover:bg-yellow.700 md:w-[273px] md:text-2xl">
                  Donate Now
                </button>
              </Link>
              <a href="/whatsapp">
                <button className="btn w-[253px] border-none bg-gray.800 text-xl text-white drop-shadow-md hover:bg-black/95 md:w-[273px] md:text-2xl">
                  Stay In Touch
                </button>
              </a>
            </div>
          </div>
          <div className="flex w-fit gap-4 place-self-center rounded-xl border-2 border-black p-4">
            <EnvelopeIcon className="h-6 w-6" />
            <a
              href="mailto:info@hussainsark.org"
              className="link border-l border-black pl-4 text-lg"
            >
              info@hussainsark.org
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
