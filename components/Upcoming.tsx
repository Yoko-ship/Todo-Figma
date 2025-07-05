"use client";
import React, { SetStateAction, useEffect, useState } from "react";
import classes from "@/app/tasks/upcoming/page.module.css";
import Today from "./Tasks";
import { useAppDispatch, useAppSelect } from "@/store/hooks";
import {pushTodo } from "@/store/data";
import { Todo } from "@/store/data";
import { usePathname } from "next/navigation";
function Upcoming() {
  const dispatch = useAppDispatch();
  const todoData = useAppSelect((state) => state.todo.todo);
  const [today, setToday] = useState<string>("");
  const [tomorrow, setTomorrow] = useState<string>("");
  const [week, setWeek] = useState<string>("");
  const [todoTodayData, setTodoTodayData] = useState<Todo[]>();
  const [todoTomorrowData, setTodoTomorrowData] = useState<Todo[]>();
  const [todoWeekData, setTodoWeekData] = useState<Todo[]>();
  const pathname = usePathname();

  const dayHanlder = (
    e: React.MouseEvent<HTMLButtonElement>,
    todoDate: string,
    setTodoDate: React.Dispatch<SetStateAction<string>>,
    dayNumber: number
  ) => {
    e.preventDefault();
    const id = new Date().getTime();
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    const time = date.getHours();
    const minute = date.getMinutes();
    let today;
    let tomorrow;
    let week;

    if (dayNumber === 0) {
      today = true;
    }
    if (dayNumber === 1) {
      tomorrow = true;
    }
    if (dayNumber === 3) {
      week = true;
    }

    if (todoDate) {
      const objected = {
        id,
        title: todoDate,
        start: new Date(
          year,
          month,
          day + dayNumber,
          time,
          minute
        ).toISOString(),
        end: new Date(
          year,
          month,
          day + dayNumber,
          time + 1,
          minute
        ).toISOString(),
        today,
        tomorrow,
        week,
      };

      dispatch(pushTodo(objected));
      setTodoDate("");
    }
  };

  useEffect(() => {
    const todayFiltered = todoData.filter((todo) => todo.today === true);
    const tomorrowFiltered = todoData.filter((todo) => todo.tomorrow === true);
    const weekFiltered = todoData.filter((todo) => todo.week === true);
    setTodoTodayData(todayFiltered);
    setTodoTomorrowData(tomorrowFiltered);
    setTodoWeekData(weekFiltered);
  }, [todoData]);

  return (
    <div className={classes.grids}>
      <Today
        title="Today"
        setDay={setToday}
        dayHanlder={(e) => dayHanlder(e, today, setToday, 0)}
        day={today}
        data={todoTodayData!}
      />
      {pathname === "/tasks/upcoming" && (
        <>
          <Today
            title={"Tomorrow"}
            day={tomorrow}
            setDay={setTomorrow}
            dayHanlder={(e) => dayHanlder(e, tomorrow, setTomorrow, 1)}
            data={todoTomorrowData!}
          />
          <Today
            title="This Week"
            day={week}
            setDay={setWeek}
            dayHanlder={(e) => dayHanlder(e, week, setWeek, 3)}
            data={todoWeekData!}
          />
        </>
      )}
    </div>
  );
}

export default Upcoming;
