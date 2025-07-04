"use client";
import React from "react";
import classes from "@/app/page.module.css";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
function Header() {
  const pathName = usePathname();
  
  return (
    <>
      <header className={classes.header}>
        <ul>
          <li className={classes.todo}>Todo App</li>
          <div className={classes.menus}>
            <li>
              <Link href="/">Главное Меню</Link>
            </li>
            <li>
              <Link href="/tasks">Задачи</Link>
            </li>
            <li>
              <Link href="/about">О нас</Link>
            </li>
          </div>
        </ul>
      </header>
      {pathName === "/" && (
        <aside className={classes.sidebar}>
          {pathName === "/" && (
            <Image src={"/Frame 2.svg"} alt="todo_image" fill></Image>
          )}
        </aside>
      )}
    </>
  );
}

export default Header;
