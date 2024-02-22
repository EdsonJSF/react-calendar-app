import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { addHours, format, getDay, parse, startOfWeek } from "date-fns";
import enUS from "date-fns/locale/en-US";

import { Navbar } from "../components";

const locales = {
  "en-US": enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const events = [
  {
    title: "title",
    notes: "notes",
    start: new Date(),
    end: addHours(new Date(), 2),
    bgColor: "bgColor",
    user: {
      id: "0001",
      name: "name",
    },
  },
];

export const CalendarPage = () => {
  return (
    <>
      <Navbar />

      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 'calc( 100vh - 80px )' }}
      />
    </>
  );
};
