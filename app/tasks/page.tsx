import React from "react";
import classes from "./page.module.css";
function page() {
  return (
    <main className={classes.main}>
        <h1>Wellcome to ToDo</h1>
        <div>
          <p>
            A to-do app is a simple, user-friendly digital tool designed to help
            individuals and teams organize tasks and manage their daily
            activities efficiently. Users can create, edit, and prioritize
            tasks, set deadlines or reminders, categorize items, and track their
            progress, all within an intuitive and accessible interface. These
            apps are essential for improving productivity, reducing stress, and
            ensuring that important responsibilities are not forgotten.
          </p>
        </div>
    </main>
  );
}

export default page;
