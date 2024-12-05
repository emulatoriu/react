const jokes = [
    { id: 0, text: "Chuck Norris counted to infinity. Twice.", name: "Me" },
]

export const getJokes = () => jokes
export const addJoke = (joke) => {
        jokes.push({id: jokes.length, text: joke.jokeText, name: joke.name})
}
