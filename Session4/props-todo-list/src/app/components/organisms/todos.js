import Checkbox from "../atoms/checkbox"
import ToDo from "../molecules/todo"

export default function ToDos({ todos, onHandleCheckboxClicked }) {
    const listItems = todos.map((todo, index) => {
        const checkbox = <Checkbox index={index} onHandleChange={onHandleCheckboxClicked} />
        return <ToDo key={index} todo={todo} index={index} checkbox={checkbox} />
    })

    return <div style={{
        display: "flex",
        flexDirection: "column",
        width: "100%"
    }}>
        {listItems}
    </div>
}