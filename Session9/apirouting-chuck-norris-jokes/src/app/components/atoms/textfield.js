"use client"

import { JokeContext } from "@/app/(pages)/add-joke/page"
import { useContext } from "react"

export default function TextField() {
    const {text, onTextChange} = useContext(JokeContext)
    return <input type="text" value={text} onChange={onTextChange} />
}