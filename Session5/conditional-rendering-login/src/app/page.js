"use client"
import styles from "./page.module.css";
import Form from "./components/organisms/form";
import { useState } from "react";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

    const handleClick = () => {
        setIsLoggedIn(previous => !previous)
    }
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Form isLoggedIn={isLoggedIn} onButtonClick={handleClick}/>
      </main>
    </div>
  );
}
