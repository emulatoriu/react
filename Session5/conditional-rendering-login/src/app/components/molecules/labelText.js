import { Textfield } from "../atoms/textfield";

export default function LabelText({label}) {
    return <label>{label + ":   "} <Textfield /></label>
}