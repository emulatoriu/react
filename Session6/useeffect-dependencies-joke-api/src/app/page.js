"use client"

import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";

export default function Home() {

  const [joke, setJoke] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [selectedValue, setSelectedValue] = useState("Programming")


  useEffect(() => {
    const fetchJoke = async () => {
      setIsLoading(true)
      const response = await fetch("https://v2.jokeapi.dev/joke/"+selectedValue+"?type=single")
      const data = await response.json()
      setJoke(data.joke)
      setIsLoading(false)
    }
    fetchJoke()
  }, [selectedValue])

  function handleChange(e) {
    const value = e.target.value
    setSelectedValue(value)
  }


  return (
    <div className={styles.page}>
      <select value={selectedValue} onChange={handleChange}>
          <option value={"Programming"}>Programming</option>
          <option value={"Dark"}>Dark</option>
          <option value={"Misc"}>Misc</option>
          <option value={"Pun"}>Pun</option>
        </select>
      <main className={styles.main}>
        {isLoading?  <ClipLoader /> : <h1>{joke}</h1>}
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