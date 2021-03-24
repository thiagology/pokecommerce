import React, { useContext } from 'react';
import AppContext from '../../AppContext';
import Page from '../../components/Page';


const Pokemons = () => {
    const [state, dispatch] = useContext(AppContext);

    console.log(state);

    return (
        <Page title='Pokémon List'>
            <ul>
                {state.pokemons.map((pokemon, index) => (
                    <li key={index}>{pokemon.name}</li>
                ))}
            </ul>
        </Page>
    )
}

export default Pokemons;