import { LoginContext } from "@/app/layout"
import { useContext } from "react"

export default function LoginHeader() {
    const {isLogin} = useContext(LoginContext)
    return <h2 style={{ textAlign: "left", padding: "5px" }}>{isLogin? "Login" : "Register"}</h2>
}