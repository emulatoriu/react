"use client"
import { useContext } from "react";
import Button from "../atoms/button";
import TextField from "../atoms/textfield";
import { JokeContext } from "@/app/(pages)/add-joke/page";

export default function AddJokeForm({buttonText}) {
    const {joke} = useContext(JokeContext)
    return <div>
        <label>Joke: <TextField name="jokeText" text={joke.jokeText}/></label>
        <label>Name: <TextField name="name" text={joke.name}/></label>
        <Button buttonText={buttonText} />
    </div>
}