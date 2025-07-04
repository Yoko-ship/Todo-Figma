'use client'
import React from 'react'
import { Calendar,momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import classes from "@/app/tasks/calendar/page.module.css"
import 'react-big-calendar/lib/css/react-big-calendar.css'
const localizer = momentLocalizer(moment)


const events = [
    {
      title: 'Встреча',
      start: new Date(2025, 6, 4, 10, 0),
      end: new Date(2025, 6, 4, 11, 0),
    },
]

function MyCalendar() {
    
  return (
    <div className={classes.calendar}>
        <Calendar
            localizer={localizer}
            events={events}
            startAccessor={"start"}
            endAccessor={"end"}
            style={{height:500}}
        />
    </div>
  )
}

export default MyCalendar