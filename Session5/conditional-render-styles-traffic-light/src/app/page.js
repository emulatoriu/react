"use client"

import Image from "next/image";
import styles from "./page.module.css";
import trafficStyles from "./styles/trafficLight.module.css"
import { useState } from "react";

export default function Home() {

  const [lightState, setLightState] = useState(0)

  function handleUpClicked() {
    setLightState(previous => previous == 0 ? 2 : --previous)
  }

  function handleDownClicked() {
    setLightState(previous => ++previous % 3)
    }


  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={trafficStyles.trafficLight}>
          <div className={trafficStyles.light} style={lightState === 0? { backgroundColor: "red" } : { backgroundColor: "rgba(255, 0, 0, 0.2)" }}></div>
          <div className={trafficStyles.light} style={lightState === 1? { backgroundColor: "yellow" } : { backgroundColor: "rgba(255, 255, 0, 0.2)" }}></div>
          <div className={trafficStyles.light} style={lightState === 2? { backgroundColor: "green" } : { backgroundColor: "rgba(0, 255, 0, 0.2)" }}></div>
        </div>
        <button onClick={handleUpClicked}><img src="/arrowUp.png" /></button>
        <button onClick={handleDownClicked}><img src="/arrowDown.png" /></button>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
