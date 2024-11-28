
const jokes = [
    { id: 1, text: "Chuck Norris counted to infinity. Twice." },
]

export const getJokes = () => jokes
export const addJoke = (joke) => {
        jokes.push({id: jokes.length + 1, text: joke})
}
