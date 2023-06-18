import { VideosLayout } from "@/layouts/videos";

const images = [
  {
    url: "/assets/majlis-shorts/sheikh-javad-shomali.png",
    title: "Sheikh Javad Shomali",
  },
  {
    url: "/assets/majlis-shorts/maulana-rizvi.png",
    title: "Sayed Muhammad Rizvi",
  },
  {
    url: "/assets/majlis-shorts/sheikh-azhar-nasser.png",
    title: "Sheikh Azhar Nasser",
  },
];
const videos = [
  {
    title:
      "Showing People God's Love - Sheikh Javad Shomali | HARKS Majlis Shorts",
    description:
      "Sheikh Javad Shomali Talks about showing people God's love in his lecture on Milad Un Nabi which you can watch now!",
    url: "https://www.youtube.com/embed/lziHecW07EY",
    thumbnailUrl: "/assets/majlis-shorts/thumbnails/short1.png",
  },
  {
    title:
      "Bibi Zainab (S.A): Initiation of Hussainiya - Sheikh Nuru Mohammed | HARKS Majlis Shorts",
    description:
      "Sheikh Nuru Mohammed talks about Bibi Zainab (S.A) and the critical role she played after the Battle of Karbala.",
    url: "https://www.youtube.com/embed/PeZG2doc-No",
    thumbnailUrl: "/assets/majlis-shorts/thumbnails/short2.png",
  },
  {
    title:
      "Farazdaq's Poem About Imam Sajjad (A.S) - Sheikh Azhar Nasser | HARKS Majlis Shorts",
    description:
      "It is reported that once Hisham ibn Abdul Malik went to Makkah at the same time as the 4th Imam (A.S). Hisham entered Masjidul Haram but was unable to wade through the crowd of people even as the caliph of the time. Sometime later, Imam Sajjad (A.S) entered the haram, the crowd parted for him and he was able to perform Tawaf and kiss Hajar al-Aswad. Hisham was burning with jealousy, so when someone asked him who the Imam was, he pretended not to know Imam (A.S). Farazdaq was standing there, and when he heard that, he addressed Hisham with lines of poetry that will live on forever.",
    url: "https://www.youtube.com/embed/voLjm-mRo2o",
    thumbnailUrl: "/assets/majlis-shorts/thumbnails/short3.png",
  },
  {
    title:
      "Preparing for the Holy Month of Ramadhan - Syed Muhammad Rizvi | HARKS Majlis Shorts",
    description:
      "Syed Muhammad Rizvi gives practical tips and advice to prepare for the Holy Month of Ramadhan.",
    url: "https://www.youtube.com/embed/N9f5UGz6HrE",
    thumbnailUrl: "/assets/majlis-shorts/thumbnails/short4.png",
  },
  {
    title: "Shafa'at in the Quran - Syed Muhammad Rizvi | HARKS Majlis Shorts",
    description:
      "Syed Muhammad Rizvi talks to us about Shafa'at (intersession) in the Quran and explains the importance of Shafa'at.",
    url: "https://www.youtube.com/embed/Zx3Cx1CjD8M",
    thumbnailUrl: "/assets/majlis-shorts/thumbnails/short5.png",
  },
  {
    title:
      "How Imam Ali (A.S) Describes God - Syed Mohammed Baqer Al-Qazwini | HARKS Majlis Shorts",
    description:
      "Syed Mohammed Baqer Al-Qazwini talks to us about how Imam Ali (A.S) describes God.",
    url: "https://www.youtube.com/embed/hTIx1DQ25Lk",
    thumbnailUrl: "/assets/majlis-shorts/thumbnails/short6.png",
  },
  {
    title:
      "Imam al-Sadiq - Cradle of Knowledge - Sayed Saleh Qazwini | HARKS Majlis Shorts",
    description:
      "Sayed Saleh Qazwini talks to us about the vast knowledge of Imam al-Sadiq not only in regard to Islam but also in matters concerning astronomy, medicine and physics.",
    url: "https://www.youtube.com/embed/Sfl4BJ0I3To",
    thumbnailUrl: "/assets/majlis-shorts/thumbnails/short7.png",
  },
  {
    title:
      "Converse with Allah (S.W.T) Through Dua - Sheikh Azhar Nasser | HARKS Majlis Shorts",
    description:
      "In this continuation of the 'Majlis Shorts' initiative by HARKS, Sheikh Azhar Nasser elucidates the beautiful connection that is forged between a soul and its Creator through supplication.",
    url: "https://www.youtube.com/embed/5JvNc8kfd-o",
    thumbnailUrl: "/assets/majlis-shorts/thumbnails/short8.png",
  },
  {
    title: "Shield from Shaytan - Sheikh Shabbar Mehdi | HARKS Majlis Shorts",
    description:
      "Sheikh Shabbar Mehdi talks to us about how we are protected from Shaytan.",
    url: "https://www.youtube.com/embed/dkMmDn2lNrY",
    thumbnailUrl: "/assets/majlis-shorts/thumbnails/short9.png",
  },
  {
    title:
      "Etiquette of Direct Communication with Allah (S.W.T) - Shaykh Mahdi Rastani | HARKS Majlis Shorts",
    description: "Shaykh Mahdi Rastani explains how to communicate with Allah.",
    url: "https://www.youtube.com/embed/smB2Dhfwylw",
    thumbnailUrl: "/assets/majlis-shorts/thumbnails/short10.png",
  },
];

export default function MajlisShorts() {
  return (
    <VideosLayout
      category="Spirituality"
      heading="Majlis Shorts"
      backgroundStyle={{
        background:
          "linear-gradient(90deg, hsla(219, 100%, 14%, 0.7), hsla(0, 0%, 0%, 0.6)), url('/assets/majlis-shorts/background.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      description="Posting short clips by amazing speakers on a wide range of crucial topics!"
      plus={{ videos: false, guests: true }}
      imagesHeading="Appearances"
      images={images}
      videos={videos}
      quote="Be as loving as possible towards a person who hurt you. Because whoever goes towards God has to absorb a huge volume of love and energy from God, that they should then bring it and share it with people."
      quoteFrom="Sheikh Javad Shomali"
    />
  );
}
