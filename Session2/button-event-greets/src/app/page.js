"use client"

import styles from "./page.module.css";

export default function Home() {

  function sayHello() {
    console.log("Hello")
  }

  function say(whatToSay) {
    console.log(whatToSay)
  }

  function tellButtonValue(e) {
    const buttonValue = e.target.value
    console.log(buttonValue)
  }

  function tellButtonValuePassed(buttonValue) {
    console.log(buttonValue)
  }

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <button onClick={sayHello}>Say Hello</button>
        <button onClick={() => say("I love")}>Say something</button>
        <button value={"React"} onClick={tellButtonValue}>Tell button value</button>
        <button value={"React"} onClick={(e) => {
          const buttonValue = e.target.value
          tellButtonValuePassed(buttonValue)
        }}>Tell button value passed</button>
      </main>
    </div>
  );
}
