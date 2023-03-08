import { useState, useEffect } from 'react'

import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Avatar from '@mui/material/Avatar'
import Skeleton from '@mui/material/Skeleton'
import getPokemonDetails from '../api/getPokemonDetails'
import Pokemon from '../interfaces/Pokemon'

interface PokemonListItemProps {
    name: string
    detailsUrl: string
    isLoading: boolean
    showPokemonDetails: (pokemon: Pokemon) => void
}

function PokemonListItem(props: PokemonListItemProps) {
    const { detailsUrl, isLoading, name, showPokemonDetails } = props
    const [pokemonDetails, setPokemonDetails] = useState<Pokemon | undefined>()

    useEffect(() => {
        getPokemonDetails(detailsUrl)
            .then((response) => {
                setPokemonDetails(response)
            })
    }, [])

    if (isLoading || pokemonDetails === undefined) {
        return <Skeleton variant="circular" width={40} height={40} />
    }

    return (
        <ListItem disablePadding>
            <ListItemButton onClick={() => {
                showPokemonDetails(pokemonDetails)
            }}>
                <ListItemAvatar>
                    <Avatar
                        alt={name}
                        src={pokemonDetails?.sprites?.front_default ?? ''}
                    />
                </ListItemAvatar>
                <ListItemText primary={name} />
            </ListItemButton>
        </ListItem>
    )
}

export default PokemonListItem
