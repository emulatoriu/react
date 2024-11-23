"use client"
import { useContext } from "react"
import loginStyles from "../../styles/styles.module.css"
import { LoginContext } from "@/app/layout"

export default function Switch() {
    const context = useContext(LoginContext)

    return <label className={loginStyles.switch}>
        <input type="checkbox" checked={!context.isLogin} onChange={context.handleChange}/>
        <span className={`${loginStyles.slider} ${loginStyles.round}`}></span>
    </label>
}