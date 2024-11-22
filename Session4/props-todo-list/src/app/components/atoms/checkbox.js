export default function Checkbox({ index, onHandleChange }) {
    return <input
        type="checkbox"
        value={index}
        onChange={onHandleChange}
        checked={false} />
}