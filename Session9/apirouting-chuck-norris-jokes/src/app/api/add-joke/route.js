import { addJoke } from "../repository"

export async function POST(request) {
    const {joke} = await request.json()
    addJoke(joke)
    return Response.json({ status: 200 });
} 