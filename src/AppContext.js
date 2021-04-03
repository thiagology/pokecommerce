import { createContext } from 'react';

const AppContext = createContext();

const initialState = {
  pokemons: [],
  wishlist: [],
  cart: [],
  loggedUser: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_POKEMON': {
      return {
        ...state,
        pokemons: action.payload,
      };
    }
    case 'SET_WISHLIST': {
      return {
        ...state,
        wishlist: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
export { initialState, reducer };

export default AppContext;
