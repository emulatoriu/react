"use client"

import styles from "./page.module.css";
import { useState } from "react";

export default function Home() {
  const [firstname, setFirstName] = useState("")
  const [lastname, setLastName] = useState("")
  const [message, setMessage] = useState("")

  function handleTextInputFirstName(e) {
    const value = e.target.value
    setFirstName(value)
  }
  function handleTextInputLastName(e) {
    const value = e.target.value
    setLastName(value)
  }
  function handleTextInputMessage(e) {
    const value = e.target.value
    setMessage(value)
  }

  function handlePress() {
    console.log("Firstname: " + firstname)
    console.log("Lastname: " + lastname)
    console.log("Message: " + message)
  }

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Contact Form</h1>
        <label>Firstname: </label>
        <input type="text" value={firstname} name="firstname" onChange={handleTextInputFirstName} />
        <label>Lastname: </label>
        <input type="text" value={lastname} name="lastname" onChange={handleTextInputLastName} />
        <label>Message: </label>
        <textarea rows={4} value={message} name="message" onChange={handleTextInputMessage} />
        <button onClick={handlePress}>Send</button>
      </main>
    </div>
  );
}
