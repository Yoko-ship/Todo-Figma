'use client'
import React from 'react'
import classes from "./page.module.css"
import Today from '@/components/Tasks'
import { useState,useEffect} from 'react'

type Todo = {
  id: number;
  completed: boolean;
  todo: string;
  userId: number;
};

function page() {

  const [todo,setTodo] = useState<Todo[]>()

  useEffect(() => {
    const getTodo = async () => {
      const response = await fetch(
        "https://dummyjson.com/todos?limit=3&skip=10"
      );
      const data = await response.json();
      setTodo(data.todos);
    };
    getTodo();
  }, []);

  return (
    <main className={classes.main}>
      <h1>Today</h1>
      <Today title='Today' data={todo!}/>
    </main>
  )
}

export default page