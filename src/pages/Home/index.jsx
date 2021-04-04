import React, { useContext } from "react";
import Page from '../../components/Page';
import PokemonList from '../../components/Pokemon/PokemonList';
import AppContext from "../../AppContext";

import { ClayPaginationWithBasicItems } from "@clayui/pagination";
import { useHistory } from "react-router";
import ClayLayout from "@clayui/layout";
import { ClayInput } from "@clayui/form";

const Pokemons = () => {
  const [{ pokemons, pagination }, dispatch] = useContext(AppContext);
  
  const history = useHistory();

  const onPageChange = (page) => {
    dispatch({
      type: "SET_PAGINATION",
      payload: { ...pagination, currentPage: page },
    });

    history.replace(`/?page=${page}`);
  };

  const onChangeValue = ({ target: { value } }) => {
    dispatch({
      type: "SET_PAGINATION",
      payload: { ...pagination, search: value },
    });
  };
  
  return (
    <Page title="Pokemon List">
      <PokemonList pokemons={pokemons} />
    </Page>
  );
};

export default Pokemons;
