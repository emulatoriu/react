import { Password } from "../atoms/passwordfield";

export default function LabelPassword({label}) {
    return <label>{label + ":   "} <Password /></label>
}