import loginStyles from "../../styles/styles.module.css"
import LoginHeader from "../atoms/loginHeader"
import Passwordfield from "../atoms/passwordfield"
import Textfield from "../atoms/textfield"

export default function Login() {
    return <div className={loginStyles.login}>
        <LoginHeader />
        <Textfield label={"Username"}/>
        <Passwordfield />
    </div>
}