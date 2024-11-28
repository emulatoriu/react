import { getJokes } from "../repository";

export async function GET(req) {
    return Response.json({ jokes: getJokes() }, { status: 200 });
}