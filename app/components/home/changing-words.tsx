"use client";
import { useEffect, useState } from "react";
import { Bebas_Neue } from "next/font/google";

interface Props {
  className: string;
}

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas-neue",
  display: "block",
});

const text = [
  "HARKS",
  "CHANGE",
  "GLOBAL",
  "CHARITY",
  "ENCOURAGE",
  "UPLIFTING",
  "SPIRITUALITY",
  "COMMUNITY",
  "SPIRIT",
  "CONNECTIVITY",
  "HUSSAIN",
  "INNOVATE",
  "FAITH",
  "ACCESSIBILITY",
  "ISLAM",
  "FOSTER",
  "LOVE",
  "LIFE",
  "LEADERSHIP",
  "FUTURE",
  "SALVATION",
  "AHLULBAYT",
  "EXPANDING",
  "HUB",
  "UNIQUE",
  "INITIATIVES",
  "REALITY",
  "ARK",
  "MEDIA",
  "VARIETY",
  "CONTENT",
  "COLLABORATION",
  "PLATFORM",
  "OPPORTUNITY",
  "YOUTH",
  "SERVICE",
  "SOCIAL",
  "SKILLS",
  "PASSION",
  "HOLY",
  "QURAN",
  "INSPIRING",
  "TECHNOLOGY",
  "ALLAH",
  "GUIDANCE",
  "IDEAS",
  "DRIVE",
  "IMAM",
  "MAHDI (AS)",
  "VIRTUAL",
  "PRACTICAL",
  "ENGAGING",
  "GROWTH",
  "SPARK",
];

export const ChangingWordsLarge = ({ className }: Props) => {
  const [show, setShow] = useState(
    text.slice(0, 20).map((t) => ({
      content: t,
      fontSize: Math.floor(Math.random() * 100 + 30),
      opacity: parseFloat(Math.random().toFixed(2)),
    })),
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const indexToReplace = Math.floor(Math.random() * show.length);
      const copied = [...show];
      let newTextIndex = Math.floor(
        Math.random() * text.length,
      ) as keyof typeof text;
      let usedText = copied.find((t) => t.content === text[newTextIndex]);

      while (usedText) {
        const newIndex = Math.floor(Math.random() * text.length);
        newTextIndex = newIndex;
        usedText = copied.find((t) => t.content === text[newIndex]);
      }

      copied[indexToReplace] = {
        content: text[newTextIndex] as string,
        fontSize: Math.floor(Math.random() * 100 + 30),
        opacity: parseFloat(Math.random().toFixed(2)),
      };
      setShow(copied);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [show]);

  return (
    <div
      className={`flex w-full flex-row flex-wrap justify-around md:justify-between ${className} ${bebasNeue.className}`}
    >
      {show.map((textObject, i) => {
        return (
          <p
            className="animate-fade15 py-0 font-light leading-[70px] text-white"
            style={{
              fontSize: `${textObject.fontSize}px`,
              color: `rgba(255, 255, 255, ${textObject.opacity})`,
            }}
            key={`${textObject.content}.${i}`}
          >
            {textObject.content}
          </p>
        );
      })}
    </div>
  );
};

export const ChangingWordsSmall = ({ className }: Props) => {
  const [show, setShow] = useState(
    text.slice(0, 13).map((t) => ({
      content: t,
      fontSize: Math.floor(Math.random() * 60 + 10),
      opacity: parseFloat(Math.random().toFixed(2)),
    })),
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const indexToReplace = Math.floor(Math.random() * show.length);
      const copied = [...show];
      let newTextIndex = Math.floor(
        Math.random() * text.length,
      ) as keyof typeof text;
      let usedText = copied.find((t) => t.content === text[newTextIndex]);

      while (usedText) {
        const newIndex = Math.floor(Math.random() * text.length);
        newTextIndex = newIndex;
        usedText = copied.find((t) => t.content === text[newIndex]);
      }

      copied[indexToReplace] = {
        content: text[newTextIndex] as string,
        fontSize: Math.floor(Math.random() * 60 + 10),
        opacity: parseFloat(Math.random().toFixed(2)),
      };
      setShow(copied);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [show]);

  return (
    <div
      className={`flex w-full flex-row flex-wrap justify-around md:justify-between ${className} ${bebasNeue.className}`}
    >
      {show.map((textObject, i) => {
        return (
          <p
            className="animate-fade15 py-0 font-light leading-[50px] text-white"
            style={{
              fontSize: `${textObject.fontSize}px`,
              color: `rgba(255, 255, 255, ${textObject.opacity})`,
            }}
            key={`${textObject.content}.${i}`}
          >
            {textObject.content}
          </p>
        );
      })}
    </div>
  );
};
