"use client"
import { JokeContext } from "@/app/(pages)/add-joke/page"
import { useContext } from "react"

export default function Button({buttonText}) {
    const {onButtonClicked} = useContext(JokeContext)
    return <button onClick={onButtonClicked}>{buttonText}</button>
}