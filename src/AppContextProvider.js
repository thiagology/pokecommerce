import React, { useReducer, useEffect }from 'react';
import AppContext, {reducer, initialState} from './AppContext';

const AppContextProvider = ({children}) => {
    
    const [state, dispatch] = useReducer(reducer, initialState); 

    const fetchPokemons = async () => {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=9');
        const data = await response.json();
        console.log(data);
        dispatch({type: 'SET_POKEMON', payload: data.results});
    }

    useEffect(() => {
        fetchPokemons();
    }, []);

    return <AppContext.Provider value={[state, dispatch]}>
        {children}
    </AppContext.Provider>
}

export default AppContextProvider;