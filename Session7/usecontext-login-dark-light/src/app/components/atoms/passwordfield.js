import loginStyles from "../../styles/styles.module.css"
export default function Passwordfield() {
    return <label className={loginStyles.textfield}>Password: <input type="password" /></label>
}