import React, { useCallback, useReducer, useEffect } from 'react';
import AppContext, { reducer, initialState } from './AppContext';
import axios from './utils/api';

const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchData = useCallback(async () => {
    const [responsePokemon, responseMe] = await Promise.all(
      [
        axios.get('/pokedex?page=1&limit=9'),
        axios.post('/me'),
      ],
    );

    dispatch({ type: 'SET_POKEMON', payload: responsePokemon.data.data });
    dispatch({ type: 'SET_WISHLIST', payload: responseMe.data.user.whishlist });
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData()]);

  return (
    <AppContext.Provider value={[state, dispatch]}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
