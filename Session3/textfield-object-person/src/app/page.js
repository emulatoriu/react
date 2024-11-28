"use client"

import styles from "./page.module.css";
import { useState } from "react";

export default function Home() {

  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    message: ""
  })

  function handleTextInput(e) {
    const key = e.target.name
    const value = e.target.value
    setForm(previous => {
      return {
        ...previous,
        [key]: value
      }
    })
  }
  

  function handlePress() {
    console.log("Firstname: " + form.firstname)
    console.log("Lastname: " + form.lastname)
    console.log("Message: " + form.message)
  }

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Contact Form</h1>
        <label>Firstname: </label>
        <input type="text" value={form.firstname} name="firstname" onChange={handleTextInput} />
        <label>Lastname: </label>
        <input type="text" value={form.lastname} name="lastname" onChange={handleTextInput} />
        <label>Message: </label>
        <textarea rows={4} value={form.message} name="message" onChange={handleTextInput} />
        <button onClick={handlePress}>Send</button>
      </main>
    </div>
  );
}