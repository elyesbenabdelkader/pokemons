import Pokemon from '../interfaces/Pokemon'

function getPokemonDetails(url: string): Promise<Pokemon> {
    return fetch(url)
        .then(response => response.json())
}

export default getPokemonDetails