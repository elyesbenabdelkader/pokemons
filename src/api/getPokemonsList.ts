interface getPokemonsListResponse {
    count: number,
    next: string | null,
    previous: string | null,
    results: Array<{
        name: string,
        url: string
    }>
}

function getPokemonsList(page: number, pageSize: number): Promise<getPokemonsListResponse> {
    const url = `https://pokeapi.co/api/v2/pokemon/?limit=${pageSize}&offset=${pageSize * (page - 1)}`

    return fetch(url)
        .then(response => response.json())
}

export default getPokemonsList