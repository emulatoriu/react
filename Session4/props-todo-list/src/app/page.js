"use client"

import Textfield from "./components/atoms/textfield";
import Title from "./components/atoms/title";
import Button from "./components/atoms/button";
import styles from "./page.module.css";
import { useState } from "react";
import ToDos from "./components/organisms/todos";

export default function Home() {
  const [todos, setTodos] = useState([])
  const [todoToAdd, setTodoToAdd] = useState("")

  function handleChange(e) {
    const currentValue = e.target.value
    setTodoToAdd(currentValue)
  }

  function handleClick() {
    setTodos(previous => {
      return [...previous, todoToAdd]
    })
    setTodoToAdd("")
  }

  function handleCheckboxClick(e) {
    const clickedIndex = parseInt(e.target.value)
    setTodos(previous => {
      return [...previous].filter((_, index) => index !== clickedIndex)
    })
  }

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Title title={"ToDo"} />
        <Textfield value={todoToAdd} onHandleChange={handleChange}/>
        <Button onHandleClick={handleClick} />
        <ToDos todos={todos} onHandleCheckboxClicked={handleCheckboxClick}/>
      </main>
    </div>
  );
}
