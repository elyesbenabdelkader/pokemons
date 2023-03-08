interface BasicPokemon {
    name: string
    url: string
}

interface PokemonStats {
    base_stat: number
    effort: number
    stat: {
        name: string
        url: string
    }
}

interface PokemonSprite {
    back_default: string | null
    back_female: string | null
    back_shiny: string | null
    back_shiny_female: string | null
    front_default: string | null
    front_female: string | null
    front_shiny: string | null
    front_shiny_female: string | null
}

type PokemonDetails = Partial<
    {
        base_experience: number
        height: number
        id: number
        sprites: PokemonSprite
        stats: Array<PokemonStats>
        weight: number
    }>

type Pokemon = BasicPokemon & PokemonDetails

export default Pokemon