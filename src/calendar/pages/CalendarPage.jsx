import { useState } from "react";
import { Calendar } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { addHours } from "date-fns";

import { CalendarEvent, CalendarModal, Navbar } from "../components";
import { getMessagesES, localizer } from "../../helpers";

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

const storageNames = {
  view: "defaultView",
};

export const CalendarPage = () => {
  const [defaultView, setDefaultView] = useState(
    sessionStorage.getItem(storageNames.view) || "week"
  );

  const eventStyleGetter = (event, start, end, isSelected) => {
    const style = {
      backgroundColor: "#347VDF7",
      borderRadius: "0px",
      opacity: 0.8,
      color: "white",
    };

    return {
      style,
    };
  };

  const handleDoubleClick = (event) => {
    console.log("doble click", event);
  };

  const handleSelect = (event) => {
    console.log("Select", event);
  };

  const handleViewChanged = (event) => {
    sessionStorage.setItem(storageNames.view, event);
    setDefaultView(event);
  };

  return (
    <>
      <Navbar />

      <Calendar
        culture="es"
        localizer={localizer}
        events={events}
        defaultView={defaultView}
        startAccessor="start"
        endAccessor="end"
        style={{ height: "calc( 100vh - 80px )" }}
        messages={getMessagesES()}
        eventPropGetter={eventStyleGetter}
        components={{ event: CalendarEvent }}
        onDoubleClickEvent={handleDoubleClick}
        onSelectEvent={handleSelect}
        onView={handleViewChanged}
      />

      <CalendarModal />
    </>
  );
};
