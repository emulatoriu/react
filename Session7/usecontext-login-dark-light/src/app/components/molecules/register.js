import loginStyles from "../../styles/styles.module.css"
import LoginRegisterHeader from "../atoms/loginHeader"
import Passwordfield from "../atoms/passwordfield"
import Textfield from "../atoms/textfield"

export default function Register() {
    return <div className={loginStyles.login}>
        <LoginRegisterHeader />
        <Textfield label={"Username"}/>
        <Textfield label={"Firstname"}/>
        <Textfield label={"Lastname"}/>
        <Passwordfield />
    </div>
}