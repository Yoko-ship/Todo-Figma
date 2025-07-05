"use client";
import React from "react";
import classes from "@/app/tasks/today/page.module.css";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Todo } from "@/store/data";
const Today: React.FC<{
  title: string;
  day: string;
  setDay: React.Dispatch<React.SetStateAction<string>>;
  dayHanlder: (e: React.MouseEvent<HTMLButtonElement>) => void;
  data: Todo[];
}> = ({ title, day, setDay, dayHanlder, data }) => {
  const pathname = usePathname();
  return (
    <div
      className={`${classes.today} ${
        pathname === "/tasks/today" ? classes.fullSize : undefined
      }`}
    >
      <h1>{title}</h1>
      <form className={classes.addTodo}>
        <button onClick={dayHanlder}>
          <Image
            src={"/plus-circle.svg"}
            alt="add-btn"
            width={20}
            height={20}
          ></Image>
        </button>
        <input
          type="text"
          placeholder="Add new task"
          onChange={(e) => setDay(e.target.value)}
          required
          value={day}
        />
      </form>
      <section className={classes.datas}>
        <ul>
          {data &&
            data.length > 0 &&
            data?.map((task) => (
              <React.Fragment key={task.id}>
                <div className={classes.checkbox}>
                  <input type="checkbox" />
                  <li>{task.title}</li>
                </div>
                <hr></hr>
              </React.Fragment>
            ))}
        </ul>
      </section>
    </div>
  );
};

export default Today;
