import Header from "../atoms/header";
import Text from "../atoms/text";

export default function CertainJoke({joke, name}) {
    return <div>
        <Header text={"Selected Joke"} />
        <Text text={joke} />
        <Text text={name} />
    </div>
}