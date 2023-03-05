import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import "react-phone-number-input/style.css";
import { Person, Telephone, PinMap, Calendar2X } from "react-bootstrap-icons";
import { Chart } from "react-google-charts";
import { Calendar, dayjsLocalizer, momentLocalizer } from "react-big-calendar";
import moment from "moment/moment";
const calendar = () => {
  const localizer = momentLocalizer(moment);

  const myEvents = [
    {
      title: "Қазақ тілі",
      start: new Date(2023, 2, 3, 9, 0),
      end: new Date(2023, 2, 3, 11, 0),
      color: "#3366CC",
    },
    {
      title: "Математика",
      start: new Date(2023, 2, 3, 11, 30),
      end: new Date(2023, 2, 3, 13, 30),
      color: "#DC3912",
    },
    {
      title: "Қазақстан тарихы",
      start: new Date(2023, 2, 3, 14, 20),
      end: new Date(2023, 2, 3, 16, 30),
      color: "#FF9900",
    },
    {
      title: "Ағылшын тілі",
      start: new Date(2023, 2, 4, 12, 0),
      end: new Date(2023, 2, 4, 14, 0),
      color: "#109618",
    },
  ];

  return (
    <>
      <Card className="static-card profile-access-denied-card">
        <Card.Body>
          <Calendar
            selectable
            localizer={localizer}
            events={myEvents}
            startAccessor="start"
            endAccessor="end"
            eventPropGetter={(myEventsList) => {
              const backgroundColor = myEventsList.color;

              return { style: { backgroundColor } };
            }}
            style={{ height: 800 }}
          />
        </Card.Body>
      </Card>
    </>
  );
};

export default calendar;
