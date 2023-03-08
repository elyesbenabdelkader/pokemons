import { useState, useEffect } from 'react'

import List from '@mui/material/List'
import Pagination from '@mui/material/Pagination'
import PokemonListItem from './PokemonListItem'
import Pokemon from '../interfaces/Pokemon'
import getPokemonsList from '../api/getPokemonsList'
import PokemonDetails from './PokemonDetails'

const PAGE_SIZE = 10

function PokemonList() {
    const [pagesCount, setPagesCount] = useState(1)
    const [currentPage, setCurrentPage] = useState(1)
    const [pokemonsList, setPokemonsList] = useState<Array<Pokemon>>([])
    const [isLoading, setIsLoading] = useState(false)
    const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | undefined>(undefined)

    useEffect(() => {
        setIsLoading(true)
        getPokemonsList(1, PAGE_SIZE)
            .then((response) => {
                setPagesCount(Math.ceil(response.count / PAGE_SIZE))
                setPokemonsList(response.results)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }, [])

    const showPokemonDetails = (pokemon: Pokemon) => {
        setSelectedPokemon(pokemon)
    }

    const hidePokemonDetails = () => {
        setSelectedPokemon(undefined)
    }

    return (
        <div>
            <List>
                {
                    pokemonsList.map((pokemon) => {
                        return (
                            <PokemonListItem
                                key={pokemon.name}
                                name={pokemon.name}
                                detailsUrl={pokemon.url}
                                isLoading={isLoading}
                                showPokemonDetails={showPokemonDetails} />
                        )
                    })
                }
            </List>
            <Pagination
                count={pagesCount}
                page={currentPage}
                onChange={(_, value) => {
                    setCurrentPage(value)
                    setIsLoading(true)
                    getPokemonsList(value, PAGE_SIZE)
                        .then((response) => {
                            setPokemonsList(response.results)
                        })
                        .finally(() => {
                            setIsLoading(false)
                        })
                }} />
            <PokemonDetails
                pokemon={selectedPokemon}
                open={selectedPokemon !== undefined}
                onClose={hidePokemonDetails} />
        </div>
    )
}

export default PokemonList
