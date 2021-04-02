import React, { useContext } from 'react';
import AppContext from '../../AppContext';
import PokemonCard from './PokemonCard';
import ClayLayout from '@clayui/layout';

const getPOkemonId = ({ url }) => {
    return url.replace("https://pokeapi.co/api/v2/pokemon/", "").replace("/", "");
};


export default function PokemonList() {
    const [{ pokemons }] = useContext(AppContext);

    return (
        <ClayLayout.Row>
            {pokemons.map((pokemon, index) => (
                <ClayLayout.Col>
                    <PokemonCard key={index} name={pokemon.name} image_url={`https://pokeres.bastionbot.org/images/pokemon/${getPOkemonId(pokemon)}.png`} />
                </ClayLayout.Col>
            ))}
        </ClayLayout.Row>

    )
}
