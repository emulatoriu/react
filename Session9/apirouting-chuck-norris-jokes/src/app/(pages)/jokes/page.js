"use client"
import Header from "@/app/components/atoms/header";
import { useEffect, useState } from "react";
import Navbar from "../../components/organisms/navbar";
import CertainJoke from "@/app/components/molecules/certain-joke";

export default function Jokes() {

    const [jokes, setJokes] = useState([])
    const [certainJoke, setCertainJoke] = useState({
        text: "",
        name: "",
    })

    useEffect(() => {
        const fetchJokes = async () => {
            const response = await fetch("api/get-jokes")
            const fetchedJokes = await response.json()
            setJokes(fetchedJokes.jokes)
        }
        fetchJokes()
    }, [])

    async function handleDoubleClick(index) {
        const data = await fetch("/api/get-joke/"+index)
        const joke = await data.json()
        console.log(JSON.stringify(joke))
        setCertainJoke(joke.joke)
    }

    const jokeElements = jokes.map((joke, index) => {
        return <p key={index} onDoubleClick={async () => {
            await handleDoubleClick(index)
        }}>{joke.text}</p>
    })

    return <div>
        <Navbar />
        <Header text={"Best Chuck Norris Jokes"} />
        {jokeElements}
        {certainJoke.text? <CertainJoke joke={certainJoke.text} name={certainJoke.name} /> : <></> } 
    </div>
}