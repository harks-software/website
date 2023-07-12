import { VideosLayout } from "@/layouts/videos";
import { ImageSlideshow } from "@/components/image-slideshow";

const images = [
  {
    url: "/assets/youth-day/guest1.png",
    title: "Sayed Ammar Nakshawani",
  },
  {
    url: "/assets/youth-day/guest2.png",
    title: "Sheikh Javad Shomali",
  },
  {
    url: "/assets/youth-day/guest3.png",
    title: "Nouri Sardar",
  },
  {
    url: "/assets/youth-day/guest4.png",
    title: "Ali Fadhil",
  },
  {
    url: "/assets/youth-day/guest5.png",
    title: "Dr. Muhammad Abbas Khaki",
  },
  {
    url: "/assets/youth-day/guest6.png",
    title: "Muntazir Jaffer",
  },
];
const videos = [
  {
    title: "Youth Day 2021 - 25.03.21",
    description:
      "Hussain's Ark Presents... An Inspiring Festival of Celebration 🎉 In honour of the Wiladat of Hazrat Ali Akbar (A.S) Youth Day 2021 🟢 Thursday 25th March 2021",
    url: "https://www.youtube.com/embed/x4fAUGA-2qg",
    thumbnailUrl: "/assets/youth-day/thumbnail1.png",
  },
  {
    title: "Youth Day 2021 - Giveaway Entries",
    description:
      "A video compilation of all the giveaway entries received for the Hussain's Ark Youth Day 2021 program in honour of the Wiladat of Hazrat Ali Akbar (A.S).",
    url: "https://www.youtube.com/embed/65QsbInftcc",
    thumbnailUrl: "/assets/youth-day/thumbnail2.png",
  },
];

export default function YouthDay() {
  return (
    <VideosLayout
      category="Community"
      heading="Annual Youth Day"
      backgroundStyle={{
        background:
          "linear-gradient(90deg, hsla(178, 74%, 40%, 0.85), 25%, hsla(0, 0%, 0%, 0.8)), url('/assets/youth-day/background.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      plus={{ videos: false, guests: true }}
      description="An exciting live program with world renowned speakers exclusively on the Hussain's Ark of Salvation YouTube channel!"
      imagesHeading="Who's on the show?"
      images={images}
      videos={videos}
    >
      <div className="mt-12 w-full bg-black py-5 text-white md:py-10">
        <h1 className="text-center text-xl font-bold md:text-3xl">
          Giveaway Prizes
        </h1>
        <div className="mx-auto mt-5 h-[10px] w-[72px] bg-yellow-400"></div>
        <div className="mt-8 px-5 md:mt-12 md:px-10">
          <ImageSlideshow
            images={[
              {
                url: "/assets/youth-day/playstation.png",
                title: "Playstation 5",
              },
            ]}
          />
        </div>
      </div>
    </VideosLayout>
  );
}
