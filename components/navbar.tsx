import Image from "next/image";
import Link from "next/link";

export function Navbar() {
  return (
    <div className="fixed top-0 left-0 z-[10000] w-full">
      <div className="flex justify-center w-full p-2 pr-6 md:pr-8 drop-shadow-xl bg-[url('../public/assets/VMS/section1-bg.png')] bg-cover bg-no-repeat bg-center">
        <Link
          className="ml-2 text-sm text-white md:ml-4 text-center my-0 py-0 underline"
          href="/virtual-majlis-service"
        >
          Eid Mubarak! We're excited to announce the launch of our virtual
          majlis service!
        </Link>
      </div>
      {/* <div
        className="flow-root w-full p-2 pr-6 md:pr-8 drop-shadow-xl"
        style={{
          backgroundImage: "linear-gradient(0deg, #1A1A1A, #1A1A1A)",
        }}
      >
        <div className="float-left ml-2 text-sm text-white md:ml-4">
          Hussain&apos;s Ark of Salvation
        </div>
        <div className="float-right flex gap-3">
          <Link
            href="https://www.instagram.com/hussainsark"
            className="transition-all duration-200 hover:opacity-60"
            target="_blank"
          >
            <svg
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5"
              target="_blank"
            >
              <title>Instagram</title>
              <path
                d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"
                fill="white"
              />
            </svg>
          </Link>
          <Link
            href="https://facebook.com/hussainsark"
            className="transition-all duration-200 hover:opacity-60"
            target="_blank"
          >
            <svg
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 fill-white"
            >
              <title>Facebook</title>
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path>
            </svg>
          </Link>
          <Link
            href="https://www.youtube.com/@hussainsark"
            className="transition-all duration-200 hover:opacity-60"
            target="_blank"
          >
            <svg
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 fill-white"
            >
              <title>YouTube</title>
              <path
                d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z "
                fill="white"
              />
            </svg>
          </Link>
          <Link
            href="https://tiktok.com/@hussainsark"
            className="transition-all duration-200 hover:opacity-60"
            target="_blank"
          >
            <svg
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 fill-white"
            >
              <title>TikTok</title>
              <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"></path>
            </svg>
          </Link>
          <Link
            className="flex place-content-center text-xs italic transition-all duration-200 hover:opacity-60"
            href="https://linkedin.com/company/harks"
            target="_blank"
          >
            <svg
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 fill-white"
            >
              <title>LinkedIn</title>
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
            </svg>
          </Link>
          <Link
            className="flex place-content-center text-xs italic transition-all duration-200 hover:opacity-60"
            href="/whatsapp-broadcasting"
          >
            <svg
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 fill-white"
            >
              <title>WhatsApp</title>
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"></path>
            </svg>
          </Link>
        </div>
      </div> */}

      <div
        className="navbar min-h-0 bg-gradient-to-r from-red.500 via-orange.500 to-yellow.500 p-0 md:px-3 lg:py-1.5"
        style={{
          boxShadow: "0px 2px 20px 1px rgba(0,0,0,0.37)",
        }}
      >
        {/* MOBILE MENU */}
        <div className="flex-1 lg:hidden">
          <div className="dropdown">
            {/* HAMBURGER BUTTON */}
            <label tabIndex={0} className=" ml-2 lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                stroke-width="3"
                stroke="white"
                className="w-612 float-right m-2 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  fill="white"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="dropdown-end dropdown-content menu rounded-box menu-compact mt-16 w-52 bg-white p-2 font-extrabold text-black shadow"
            >
              <li className="cursor-pointer rounded-lg transition-all duration-300 hover:bg-gray-300">
                <Link href="/" className="justify-between">
                  HOME
                </Link>
              </li>
              <li className="cursor-pointer rounded-lg transition-all duration-300 hover:bg-gray-300">
                <Link href="/about-us">ABOUT US</Link>
              </li>
              <li
                tabIndex={0}
                className="cursor-pointer rounded-lg transition-all duration-300 hover:bg-gray-300"
              >
                <a className="justify-between">
                  INITIATIVES{" "}
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                  </svg>
                </a>
                <ul className="bg-white">
                  <li className="cursor-pointer rounded-lg transition-all duration-300 hover:bg-gray-300">
                    <Link href="/youth-day">Youth Day</Link>
                  </li>
                  <li className="cursor-pointer rounded-lg transition-all duration-300 hover:bg-gray-300">
                    <Link href="/majlis-shorts">Majlis Shorts</Link>
                  </li>
                </ul>
              </li>
              <li
                tabIndex={0}
                className="cursor-pointer rounded-lg transition-all duration-300 hover:bg-gray-300"
              >
                <a className="justify-between">
                  DIGITAL HUB
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                  </svg>
                </a>
                <ul className="w-44 bg-white">
                  <li className="cursor-pointer rounded-lg transition-all duration-300 hover:bg-gray-300">
                    <Link href="/virtual-majlis-service">
                      Virtual Majlis Service
                      <div className="badge badge-success">New</div>
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="cursor-pointer rounded-lg transition-all duration-300 hover:bg-gray-300">
                <Link href="/join-the-crew">JOIN THE CREW</Link>
              </li>
              <li className="cursor-pointer rounded-lg transition-all duration-300 hover:bg-gray-300">
                <Link href="/contact-us">CONTACT US</Link>
              </li>
            </ul>
          </div>
        </div>
        <Link
          href="/donate"
          className="my-2 mr-2 flex cursor-pointer rounded-3xl bg-white p-3 text-xs font-bold transition-all duration-200 hover:bg-zinc-400/60 lg:hidden"
        >
          DONATE
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="ml-1 w-4"
          >
            <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
          </svg>
        </Link>
        <Link className="mr-4 flex-none cursor-pointer lg:hidden" href="/">
          <Image
            height={48}
            width={48}
            src={require("../public/assets/harks-logo-circle.png")}
            alt="HARKS LOGO"
          />
        </Link>

        {/* MOBILE MENU END */}

        {/* DESKTOP MENU */}
        <div className="navbar-start ml-3 hidden w-3/4 text-sm lg:flex">
          <Link href="/">
            <Image
              height={40}
              width={40}
              src={require("../public/assets/harks-logo-circle.png")}
              className="mr-4"
              alt="HARKS LOGO"
            />
          </Link>

          <Link href="/" className="px-3">
            <label
              tabIndex={0}
              className="cursor-pointer pb-2 font-extrabold text-white transition-all duration-200 hover:opacity-60"
            >
              HOME
            </label>
          </Link>
          <Link href="/about-us" className="px-3">
            <label
              tabIndex={0}
              className="cursor-pointer whitespace-nowrap pb-2 font-extrabold text-white transition-all duration-200 hover:opacity-60"
            >
              ABOUT US
            </label>
          </Link>
          <div className="dropdown dropdown-hover px-3">
            <label
              tabIndex={0}
              className="flex cursor-pointer items-center whitespace-nowrap font-extrabold text-white transition-all duration-200 hover:opacity-60"
            >
              INITIATIVES{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6"
              >
                <path
                  fillRule="evenodd"
                  d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu rounded-box w-52 bg-white p-2 shadow"
            >
              <li className="cursor-pointer rounded-lg font-bold transition-all duration-300 hover:bg-gray-300">
                <Link href="/youth-day">Youth Day</Link>
              </li>
              <li className="cursor-pointer rounded-lg font-bold transition-all duration-300 hover:bg-gray-300">
                <Link href="/majlis-shorts">Majlis Shorts</Link>
              </li>
            </ul>
          </div>

          <div className="dropdown dropdown-hover px-3">
            <label
              tabIndex={0}
              className="flex cursor-pointer items-center whitespace-nowrap font-extrabold text-white transition-all duration-200 hover:opacity-60"
            >
              DIGITAL HUB{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6"
              >
                <path
                  fillRule="evenodd"
                  d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu rounded-box w-max bg-white p-2 shadow"
            >
              <li className="cursor-pointer rounded-lg font-bold transition-all duration-300 hover:bg-gray-300">
                <Link href="/virtual-majlis-service">
                  Virtual Majlis Service{" "}
                  <div className="badge bg-yellow.500">New</div>
                </Link>
              </li>
            </ul>
          </div>

          <Link href="/join-the-crew" className="px-3">
            <label
              tabIndex={0}
              className="cursor-pointer whitespace-nowrap pb-2 font-extrabold text-white transition-all duration-200 hover:opacity-60"
            >
              JOIN THE CREW
            </label>
          </Link>
          <Link href="/contact-us" className="px-3">
            <label
              tabIndex={0}
              className="cursor-pointer whitespace-nowrap pb-2 font-extrabold text-white transition-all duration-200 hover:opacity-60"
            >
              CONTACT US
            </label>
          </Link>
        </div>
        <div className="navbar-end hidden w-1/4 font-semibold lg:flex">
          <Link href="https://www.youtube.com/@hussainsark/live">
            <div className="mr-4 flex cursor-pointer whitespace-nowrap rounded-2xl bg-white py-2 px-4 font-bold shadow-md transition-all duration-200 hover:bg-zinc-400/60 md:text-[0.65rem] lg:text-xs ">
              WATCH LIVE
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2 w-4"
              >
                <title>YouTube</title>
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </div>
          </Link>
          <Link
            href="/donate"
            className="mr-4 flex cursor-pointer whitespace-nowrap rounded-2xl bg-white py-2 px-4 font-bold shadow-md transition-all duration-200 hover:bg-zinc-400/60 md:text-[0.65rem] lg:text-xs uppercase"
          >
            Donate
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="ml-2 w-4"
            >
              <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
