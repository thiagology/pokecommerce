import React from 'react';
import Page from '../../components/Page';
import PokemonList from '../../components/Pokemon/PokemonList';

const Pokemons = () => {
    return (
        <Page title='Pokémon List'>
            <PokemonList/>
        </Page>
    )
}

export default Pokemons;