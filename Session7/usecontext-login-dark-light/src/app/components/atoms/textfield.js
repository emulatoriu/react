import loginStyles from "../../styles/styles.module.css"
export default function Textfield({label}) {
    return <label className={loginStyles.textfield}>{label} <input type="text" /></label>
}