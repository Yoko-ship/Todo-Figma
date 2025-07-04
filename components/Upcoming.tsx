"use client";
import React, { useEffect, useState } from "react";
import classes from "@/app/tasks/upcoming/page.module.css"
import Today from "./Tasks";
import { useAppDispatch,useAppSelect } from "@/store/hooks";
import { addTodo } from "@/store/data";

function Upcoming() {
  const dispatch = useAppDispatch()
  const todoData = useAppSelect((state) => state.todo.todo)
  console.log(todoData)

  useEffect(() => {
    const getTodo = async () => {
      const response = await fetch(
        "https://dummyjson.com/todos?limit=3&skip=10"
      );
      const data = await response.json();
      dispatch(addTodo(data.todos))
    };
    getTodo();
  }, []);

  return (
    <div className={classes.grids}>
      <Today title="Today"/>
      <Today title={"Tomorrow"}/>
      <Today title="This Week"/>
    </div>
  );
}

export default Upcoming;
