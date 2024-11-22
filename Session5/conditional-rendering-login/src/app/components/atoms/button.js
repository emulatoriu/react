import { useState } from "react";

export default function LoginLogout({isLoggedIn, onButtonClicked}) {
    return <button onClick={onButtonClicked}>{isLoggedIn? "Logout" : "Login"}</button>
}