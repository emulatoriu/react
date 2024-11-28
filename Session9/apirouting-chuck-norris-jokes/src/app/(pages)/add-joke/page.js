"use client"
import AddJokeForm from "@/app/components/molecules/add-joke-form"
import Navbar from "@/app/components/organisms/navbar"
import { createContext, useState } from "react"

export const JokeContext = createContext()

export default function AddJoke() {
    const [text, setText] = useState("")
    
    function onTextChange(event) {        
        const current = event.target.value
        setText(current)
    }
    async function onButtonClicked() {
        if(text === "") return
        await fetch("api/add-joke", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({joke: text})
        })
        setText("")
    }

    return <JokeContext.Provider value={{ text, onTextChange, onButtonClicked }}>
        <Navbar />
        <AddJokeForm labelText={"New Joke"} buttonText={"Add Joke"} />
    </JokeContext.Provider>
}