import React from "react";
import classes from "./page.module.css";
import Upcoming from "@/components/Upcoming";


function page() {
  return (
    <main className={classes.main}>
      <h1>Today</h1>
      <Upcoming />
    </main>
  );
}

export default page;
