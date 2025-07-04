import React from "react";
import classes from "./page.module.css";
import MyCalendar from "@/components/Calendar";
function page() {
  return (
    <main className={classes.main}>
      <MyCalendar/>
    </main>
  );
}

export default page;
