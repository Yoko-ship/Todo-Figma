import React from "react";
import classes from "@/app/page.module.css"
import Link from "next/link";

function Main() {
  return (
    <>
      <main className={classes.main}>
        <section className={classes.titles}>
        <h1>Жизнь по чеклисту</h1>
        <p>Закрыл задачу - словил дофамин</p>
        <button><Link href="/tasks">Добавить Задачи</Link></button>
        </section>
      </main>
    </>
  );
}

export default Main;
