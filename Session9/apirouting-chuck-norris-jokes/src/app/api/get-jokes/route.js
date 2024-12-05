import { getJokes } from "../repository";

export async function GET(req) {
    console.log(JSON.stringify(getJokes()))
    return Response.json({ jokes: getJokes() }, { status: 200 });
}