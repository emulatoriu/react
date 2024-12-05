"use client"
import saveJoke from "@/app/api/add-joke/route"
import AddJokeForm from "@/app/components/molecules/add-joke-form"
import Navbar from "@/app/components/organisms/navbar"
import { createContext, useState } from "react"

export const JokeContext = createContext()

export default function AddJoke() {
    // const [text, setText] = useState("")
    // const [name, setName] = useState("")
    
    const [joke, setJoke] = useState({
        jokeText: "",
        name: ""
    })

    function onTextChange(event) {        
        const current = event.target.value
        const key = event.target.name
        setJoke(prev => {
            return {
                ...prev,
                [key]: current
            }
        })
    }

    async function onButtonClicked() {
        if(!joke.jokeText || !joke.name) return
        await fetch("api/add-joke", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({joke: joke})
        })
        setJoke({jokeText: "", name: ""})
    }

    return <JokeContext.Provider value={{ joke, onTextChange, onButtonClicked }}>
        <Navbar />
        <AddJokeForm labelText={"New Joke"} buttonText={"Add Joke"} />
    </JokeContext.Provider>
}