import { ExploreSlideshow } from "app/components/home/explore-slideshow";
import { ExploreSlideshowMI } from "app/components/home/explore-slideshow-mi";

const PREVIOUS_WORK_IMAGES = [
  { image: "./assets/donate/HARKS-naynawah.jpg" },
  { image: "./assets/donate/youthday-thumbnail.png" },
];

export default function SuccessfulDonation() {
  return (
    <div className="bg-cream pt-24 text-center text-2xl font-bold">
      <p className="px-8 md:px-24">
        Thank you for your donation. Your support means a great deal to us, and
        we pray that Allah rewards you abundantly for your kindness. Below are
        some of the projects and initiatives that your donation supports.
      </p>
      <div className="w-full py-12 md:py-24">
        <ExploreSlideshow
          items={[
            {
              title: "The HARKS Podcast",
              description:
                "Notable speakers and young individuals to discuss how to tackle the current issues faced by today's youth.",
              url: "/",
              thumbnailUrl: "/assets/home/explore/podcast.png",
            },
            {
              title: "Youth Day",
              description:
                "An annual event to celebrate the youth in honour of Hazrat Ali Akbar (A.S).",
              url: "/initiatives/youth-day",
              thumbnailUrl: "/assets/home/explore/youthday.jpg",
            },
            {
              title: "Virtual Majlis Service",
              description:
                "Providing you the opportunity to use our platform and support to host an online event.",
              url: "/digital-hub/virtual-majlis-service",
              thumbnailUrl: "/assets/home/explore/vms.png",
            },
          ]}
        />
      </div>
      <div className="pb-4 pt-4 md:pt-12">
        <ExploreSlideshowMI
          items={[
            {
              url: "https://www.instagram.com/p/Cm4GlHMJHWQ/",
              thumbnailUrl:
                "/assets/home/explore/monthly-initiatives/dhikr.jpg",
            },
            {
              url: "https://www.instagram.com/p/CmuPHJ-pCDm/",
              thumbnailUrl:
                "/assets/home/explore/monthly-initiatives/bibi-fatima sa.jpg",
            },
            {
              url: "https://www.instagram.com/p/CmNNBs3hiNX/",
              thumbnailUrl:
                "/assets/home/explore/monthly-initiatives/fatimyyah-focus.jpg",
            },
            {
              url: "https://www.instagram.com/p/CmEkdRhowkd/",
              thumbnailUrl:
                "/assets/home/explore/monthly-initiatives/prep-disaster.jpeg",
            },
            {
              url: "https://www.instagram.com/p/CllmnFRoN37/",
              thumbnailUrl:
                "/assets/home/explore/monthly-initiatives/what-does-hijab-mean.jpg",
            },
            {
              url: "https://www.instagram.com/p/Cj2Hgr2IkkQ/",
              thumbnailUrl:
                "/assets/home/explore/monthly-initiatives/foods-from-holy-quran.jpg",
            },
            {
              url: "https://www.instagram.com/p/Cjswtc7IjHD/",
              thumbnailUrl:
                "/assets/home/explore/monthly-initiatives/advice-imam-sadiq-as.jpeg",
            },
            {
              url: "https://www.instagram.com/p/Ci7c3Rfo_4j/",
              thumbnailUrl:
                "/assets/home/explore/monthly-initiatives/lessons-from-the-prophe-(pbuh).jpeg",
            },
          ]}
        />
      </div>
    </div>
  );
}
