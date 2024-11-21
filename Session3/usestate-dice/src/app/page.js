"use client"

import styles from "./page.module.css";
import { useState } from "react";

export default function Home() {
  const [dice, setDice] = useState(1)

  function rollDice() {
    const diceThrow = randomNumber(7)
    setDice(diceThrow)
  }

  function randomNumber(maxNumberExcluded) {
    return Math.floor(Math.random() * maxNumberExcluded)
  }

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>{dice}</h1>
        <button onClick={rollDice}>Roll Dice</button>
      </main>
    </div>
  );
}
