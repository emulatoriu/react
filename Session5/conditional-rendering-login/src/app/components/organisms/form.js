
import LoginLogout from "../atoms/button";
import LabelPassword from "../molecules/labelPassword";
import LabelText from "../molecules/labelText";

export default function Form({isLoggedIn, onButtonClick}) { 
    return <div style={{display: "flex", flexDirection: "column"}}>
        {!isLoggedIn ? <><LabelText label={"Username"} />
        <LabelPassword label={"Password"} /></> : <h1>User is logged in</h1> }
        <LoginLogout isLoggedIn={isLoggedIn} onButtonClicked={onButtonClick}/>
    </div>
}