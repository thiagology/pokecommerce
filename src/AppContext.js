import { createContext } from 'react';
import { parseJwt, tokenKey } from "./utils/util";

const AppContext = createContext();

const searchParams = new URLSearchParams(window.location.search);

const initialState = {
  pokemons: [],
  wishlist: [],
  cart: [],
  me: {
    purchasedPokemon: [],
  },
  loggedUser: parseJwt(localStorage.getItem(tokenKey)),
  pagination: {
    currentPage: searchParams.get("page") ?? 1,
    search: "",
    limit: 9,
    total: 0,
    totalPages: 0,
  },
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
    case "SET_PAGINATION": {
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
