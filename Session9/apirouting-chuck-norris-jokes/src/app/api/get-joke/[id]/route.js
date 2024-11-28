import { getJokes } from "../../repository"

export async function GET(request, { params }) {
    const jokes = getJokes()
    const id = (await params).id
    console.log(id)
    const joke = jokes.find((joke, index) => joke.id === parseInt(id) + 1)
    console.log(JSON.stringify(jokes))
    console.log(joke)
    return Response.json({ joke: joke }, { status: 200 })
}