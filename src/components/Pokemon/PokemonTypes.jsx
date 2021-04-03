import React from "react";

const typesColors = {
  normal: '#A8A77A',
	fire: '#EE8130',
	water: '#6390F0',
	electric: '#F7D02C',
	grass: '#7AC74C',
	ice: '#96D9D6',
	fighting: '#C22E28',
	poison: '#A33EA1',
	ground: '#E2BF65',
	flying: '#A98FF3',
	psychic: '#F95587',
	bug: '#A6B91A',
	rock: '#B6A136',
	ghost: '#735797',
	dragon: '#6F35FC',
	dark: '#705746',
	steel: '#B7B7CE',
	fairy: '#D685AD',
  other: "#333",
};

export default function PokemonTypes({ types = [] }) {
  return (
    <div className="pokemon-types">
      {types.map((name) => {
        const backgroundColor =
          typesColors[name.toLowerCase()] || typesColors.other;

        return (
          <div
            key={name}
            style={{ backgroundColor }}
            className="pokemon-types__pokemon-type"
          >
            <img
              className="mr-2"
              alt={name}
              width={16}
              height={16}
              src={`/assets/${name.toLowerCase()}.svg`}
            />

            <span>{name}</span>
          </div>
        );
      })}
    </div>
  );
}
