export default function Textfield({ value, onHandleChange }) {
    return <input type="text" value={value} name="todo" onChange={onHandleChange} />
}