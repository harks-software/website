import dayjs from "dayjs";
import { calendar_v3 } from "googleapis";
import advancedFormat from "dayjs/plugin/advancedFormat";

dayjs.extend(advancedFormat);

export function CalendarEvents({ data }: { data: calendar_v3.Schema$Event[] }) {
  return (
    <div className="flex w-[300px] flex-col py-4 sm:w-[450px] lg:w-full">
      {data.map((event, i) => {
        const date = dayjs(event.start?.date);
        return (
          <div
            key={`calendar_event_${i}`}
            className="my-4 flex h-[92px] w-full rounded-lg bg-white"
          >
            <div className="flex h-full flex-[0.2] flex-col rounded-l-lg bg-[#242424BF] p-1 font-bold sm:p-2">
              <span className="text-base text-beige.200 sm:text-lg uppercase">
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
