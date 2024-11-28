"use client"

import { JokeContext } from "@/app/(pages)/add-joke/page"
import { useContext } from "react"

export default function TextField({name, text}) {
    const {onTextChange} = useContext(JokeContext)
    return <input type="text" name={name} value={text} onChange={onTextChange} />
}