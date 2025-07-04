import React from "react";
import classes from "./page.module.css";
import Upcoming from "@/components/Upcoming";

function page() {
  return (
    <main className={classes.main}>
      <h2>Upcoming</h2>
      <Upcoming/>
    </main>
  );
}

export default page;
