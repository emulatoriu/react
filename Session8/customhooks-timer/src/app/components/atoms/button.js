export default function Button({buttonText, onButtonClicked}) {
    return <button onClick={onButtonClicked}>{buttonText}</button>
}