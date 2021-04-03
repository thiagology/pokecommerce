import React, { useReducer, useEffect } from 'react';
import AppContext, { reducer, initialState } from './AppContext';
import axios from './utils/api';

const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { loggedUser } = state;

  const fetchPokemons = async () => {
    const responsePokemon = await axios.get('/pokedex');
    console.log(responsePokemon.data.data);

    dispatch({ type: "SET_POKEMON", payload: responsePokemon.data.data });
  };

  const fetchMe = async () => {
    const response = await axios.post("/me");

    dispatch({
      type: "SET_ME",
      payload: response.data.user,
    });
  };

  const fetchWishlist = async () => {
    const response = await axios.get("/wishlist");

    dispatch({ type: "SET_WISHLIST", payload: response.data.data });
  };

  useEffect(() => { //fetch Me
    fetchMe();
  }, []);

  useEffect(() => { //fetch Pokemons
    if (loggedUser) {
      fetchPokemons();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loggedUser]);

  useEffect(() => { //fetch wishlist
    if (loggedUser) {
      fetchWishlist();
    }
  }, [loggedUser]);

  return (
    <AppContext.Provider value={[state, dispatch]}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
