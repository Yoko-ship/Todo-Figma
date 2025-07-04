"use client";
import React from "react";
import classes from "@/app/tasks/today/page.module.css";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useAppSelect } from "@/store/hooks";
const Today: React.FC<{ title: string}> = ({ title }) => {
  const pathname = usePathname()
  const data = useAppSelect((state) => state.todo.todo)
  return (
    <div className={`${classes.today} ${pathname === "/tasks/today" ? classes.fullSize : undefined}`}>
      <h1>{title}</h1>
      <section className={classes.addTodo}>
        <button>
          <Image
            src={"/plus-circle.svg"}
            alt="add-btn"
            width={20}
            height={20}
          ></Image>
        </button>
        <input type="text" placeholder="Add new task" />
      </section>
      <section className={classes.datas}>
        <ul>
          {data?.map((task) => (
            <React.Fragment key={task.id}>
              <div className={classes.checkbox}>
                <input type="checkbox" />
                <li>{task.todo}</li>
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
