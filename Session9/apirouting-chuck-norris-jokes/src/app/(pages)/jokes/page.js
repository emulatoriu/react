"use client"
import Header from "@/app/components/atoms/header";
import { useEffect, useState } from "react";
import Navbar from "../../components/organisms/navbar";

export default function Jokes() {

    const [jokes, setJokes] = useState([])

    useEffect(() => {
        const fetchJokes = async () => {
            const response = await fetch("api/get-jokes")
            const fetchedJokes = await response.json()
            setJokes(fetchedJokes.jokes)
        }
        fetchJokes()
    }, [])

    const jokeElements = jokes.map((joke, index) => {
        return <p key={index}>{joke.text}</p>
    })

    return <div>
        <Navbar />
        <Header text={"Best Chuck Norris Jokes"} />
        {jokeElements}
    </div>
}