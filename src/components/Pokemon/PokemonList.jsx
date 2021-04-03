import React, { useContext } from 'react';
import AppContext from '../../AppContext';
import PokemonCard from './PokemonCard';
import ClayLayout from '@clayui/layout';

import axios from "../../utils/api";

const getPOkemonId = ({ url }) => {
    return url.replace("https://pokeapi.co/api/v2/pokemon/", "").replace("/", "");
};

const onClickFavorite = async (pokemon) => {
    const response = await axios.post("/wishlist", { pokemonId: pokemon._id });

    dispatch({ type: "SET_WISHLIST", payload: response.data.data });
};


export default function PokemonList({ pokemons }) {
    const [{ whishlist }, dispatch] = useContext(AppContext);

    return (
        <ClayLayout.Row>
            {pokemons.map((pokemon, index) => {
                return (
                    <ClayLayout.Col key={index} size={4}>
                        <PokemonCard
                            types={pokemon.types}
                            onClickFavorite={() => onClickFavorite(pokemon.id)}
                            favoriteSymbol={
                                wishlist.includes(pokemon.id) ? "heart-full" : "heart"
                            }
                            name={pokemon.name}
                            image_url={`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`} />
                    </ClayLayout.Col>
                );
            })}
        </ClayLayout.Row>

    )
}
