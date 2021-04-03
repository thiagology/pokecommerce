import { createContext } from 'react';
import { parseJwt, tokenKey } from "./utils/util";

const AppContext = createContext();

const initialState = {
  pokemons: [],
  wishlist: [],
  cart: [],
  me: {
    purchasedPokemon: [],
  },
  loggedUser: parseJwt(localStorage.getItem(tokenKey)),
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
    case "SET_LOGGED_USER": {
      return {
        ...state,
        loggedUser: action.payload,
      };
    }

    case "SET_ME": {
      return {
        ...state,
        me: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
export { initialState, reducer };

export default AppContext;
