interface CalendarData {
  dayNumber: number;
  suffix: string;
  day: string;
  title: string;
  month: string;
}

interface CalendarEventsProps {
  data: CalendarData[];
}

export function CalendarEvents({ data }: CalendarEventsProps) {
  return (
    <div className="flex w-[300px] flex-col py-4 sm:w-[450px] lg:w-full">
      {data.map((item, i) => (
        <div
          key={`calendar_event_${i}`}
          className="my-4 flex h-[92px] w-full rounded-lg bg-white"
        >
          <div className="flex h-full flex-[0.2] flex-col rounded-l-lg bg-[#242424BF] p-1 font-montserrat font-bold sm:p-2">
            <span className="text-base text-beige.200 sm:text-lg">
              {item.month}
            </span>
            <span className="ml-auto text-xl text-beige.200 sm:text-3xl">
              {item.dayNumber}
              <sup>{item.suffix}</sup>
            </span>
          </div>
          <div className="flex-1 flex-col p-4">
            <h2 className="text-base font-semibold text-gray.800">
              {item.day}
            </h2>
            <h3 className="text-xl font-bold text-gray.800 sm:text-2xl">
              {item.title}
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
}
