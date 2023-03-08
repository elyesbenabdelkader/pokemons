import Pokemon from '../interfaces/Pokemon'
import Dialog from '@mui/material/Dialog'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'

interface PokemonDetailsProps {
    open: boolean
    pokemon?: Pokemon
    onClose: () => void
}

function PokemonDetails(props: PokemonDetailsProps) {
    const { open, pokemon, onClose } = props

    if (pokemon === undefined) {
        return null
    }

    return (
        <Dialog open={open} onClose={onClose}>
            <Card sx={{ maxWidth: 345 }}>
                <CardHeader
                    title={pokemon.name}
                />
                <CardMedia
                    component="img"
                    image={pokemon.sprites?.front_default ?? ''}
                />
                <CardContent>
                    <ul>
                        <li>Height: {pokemon.height} m</li>
                        <li>Weight: {pokemon.weight} kg</li>
                    </ul>
                </CardContent>
            </Card>
        </Dialog>
    )
}

export default PokemonDetails
