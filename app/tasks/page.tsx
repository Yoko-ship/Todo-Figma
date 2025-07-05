import React from "react";
import classes from "./page.module.css";
function page() {
  return (
    <main className={classes.main}>
      <h1>Wellcome to ToDo</h1>
      <div>
        <p>
          Данный проект создан в учебных целях. Он не использует базу данных,
          поэтому внесённые данные не сохраняются после обновления страницы.
          Дизайн макета был разработан в Figma и вручную реализован с
          использованием React.
        </p>
      </div>
    </main>
  );
}

export default page;
