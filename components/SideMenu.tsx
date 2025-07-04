import React from "react";
import classes from "./asideMenu.module.css";
import Image from "next/image";
import Link from "next/link";

function SideMenu() {
  return (
    <aside className={classes.aside}>
      <section className={classes.texts}>
        <h1>Menu</h1>
        <button>
          <Image
            src={"/align-justify.svg"}
            alt="close-btn"
            width={24}
            height={24}
          ></Image>
        </button>
      </section>
      <div className={classes.asideMargin}>
        <section className={classes.search}>
          <input type="search" placeholder="Search..." />
        </section>

        <section className={classes.tasks}>
          <h3>Tasks</h3>
          <ul>
            <li>
              <Link href="/tasks/upcoming">Upcoming</Link>
            </li>
            <li>
              <Link href="/tasks/today">Today</Link>
            </li>
            <li>
              <Link href="/tasks/calendar">Calendar</Link>
            </li>
          </ul>
        </section>

        <section className={classes.tasks}>
          <h3>Lists</h3>
          <ul className={classes.lists}>
            <li>Work</li>
            <li>Personal</li>
            <li>Study</li>
          </ul>
        </section>
      </div>
    </aside>
  );
}

export default SideMenu;
