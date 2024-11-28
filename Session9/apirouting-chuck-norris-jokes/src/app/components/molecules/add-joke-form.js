"use client"
import Button from "../atoms/button";
import TextField from "../atoms/textfield";

export default function AddJokeForm({labelText, buttonText}) {
    return <div>
        <label>{labelText + ":  "} <TextField /></label>
        <Button buttonText={buttonText} />
    </div>
}