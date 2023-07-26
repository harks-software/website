import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import { google } from "googleapis";

dayjs.extend(advancedFormat);

async function getEvents() {
  const calendar = google.calendar({
    version: "v3",
    auth: process.env.GOOGLE_API_KEY,
  });
  const res = await calendar.events.list({
    calendarId:
      "c_1e18424b2d7858df66e3de351d24af817f5a2e7de037dc87131916da7d3a9689@group.calendar.google.com",
    timeMin: new Date().toISOString(),
    maxResults: 5,
    singleEvents: true,
    orderBy: "startTime",
  });
  const events = res.data.items;

  await new Promise((resolve) => setTimeout(resolve, 60000));

  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // // Recommendation: handle errors
  // if (!res.ok) {
  //   // This will activate the closest `error.js` Error Boundary
  //   throw new Error('Failed to fetch data')
  // }

  return events;
}

export async function CalendarEvents() {
  const events = await getEvents();
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
