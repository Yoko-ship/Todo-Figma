'use client'
import React, { useEffect } from 'react'
import { Calendar,momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import classes from "@/app/tasks/calendar/page.module.css"
import 'react-big-calendar/lib/css/react-big-calendar.css'
const localizer = momentLocalizer(moment)
import { useAppSelect } from '@/store/hooks'


function MyCalendar() {
    const data = useAppSelect((state) => state.todo.todo).map(event => ({
      ...event,
      start:new Date(event.start),
      end:new Date(event.end)
    }))

    
    console.log(data)
  return (
    <div className={classes.calendar}>
        <Calendar
            localizer={localizer}
            events={data}
            startAccessor={"start"}
            endAccessor={"end"}
            style={{height:500}}
        />
    </div>
  )
}

export default MyCalendar