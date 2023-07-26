"use client";
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import { calendar_v3, google } from "googleapis";
import { useEffect, useState } from "react";

dayjs.extend(advancedFormat);

export function CalendarEvents() {
  const [events, setEvents] = useState<calendar_v3.Schema$Event[]>([]);
  useEffect(() => {
    async function fetchData() {
      const fetchEvents = await fetch("/api/events");
      const json = await fetchEvents.json();
      const events = json.events as calendar_v3.Schema$Event[];
      setEvents(events);
    }
    fetchData();
  }, []);

  return (
    <div className="flex w-[300px] flex-col py-4 sm:w-[450px] lg:w-full">
      {events?.map((event, i) => {
        const date = dayjs(event.start?.date);
        return (
          <div
            key={event.id}
            className="my-4 flex h-[92px] w-full rounded-lg bg-white"
          >
            <div className="flex h-full flex-[0.2] flex-col rounded-l-lg bg-[#242424BF] p-1 font-bold sm:p-2">
              <span className="text-base uppercase text-beige.200 sm:text-lg">
                {date.format("MMM")}
              </span>
              <span className="ml-auto text-xl text-beige.200 sm:text-3xl">
                {date.date()}
                <sup>{date.format("Do").slice(-2)}</sup>
              </span>
            </div>
            <div className="flex-1 flex-col p-4">
              <h2 className="text-base font-semibold text-gray.800">
                {date.format("dddd")}
              </h2>
              <h3 className="text-xl font-bold text-gray.800 sm:text-2xl">
                {event.summary?.replace(/ *\([^)]*\) */g, "")}
              </h3>
            </div>
          </div>
        );
      })}
    </div>
  );
}
