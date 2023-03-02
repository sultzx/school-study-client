import React from "react";
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { Calendar, dayjsLocalizer, momentLocalizer } from 'react-big-calendar'
import moment from "moment/moment";

import 'moment/locale/kk'

const Main = () => {

    const myEvents = [
        {
          title: "asd",
          start: new Date(2023, 2, 3, 12, 0),
          end: new Date(2023, 2, 6, 17, 30),
          color: 'green'
        },
        {
            title: "asd",
            start: new Date(2023, 2, 5, 12, 0),
            end: new Date(2023, 2, 8, 17, 30),
            color: 'red'
          },
          {
            title: "asd",
            start: new Date(2023, 2, 6, 12, 0),
            end: new Date(2023, 2, 12, 17, 30),
            color: 'blue'
          },
        // More events...
      ];

      const localizer = momentLocalizer(moment)

    return  <>
    <Calendar
    selectable
    
        localizer={localizer} 
        events={myEvents}      
        startAccessor="start"
        endAccessor="end"
        eventPropGetter={(myEventsList) => {
            const backgroundColor = myEventsList.color
            
            return { style: { backgroundColor } }
          }}
        style={{ height: 600 }} />
    </>
}

export default Main