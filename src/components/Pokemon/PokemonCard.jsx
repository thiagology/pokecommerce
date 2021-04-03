import React from 'react';
import ClayCard from '@clayui/card';

export default function PokemonCard({ name, image_url }) {
  return (
    <ClayCard>
      <center>
        <img
          draggable={false}
          width="50%"
          height="50%"
          alt={`${name}`}
          src={image_url}
        />
      </center>
      <ClayCard.Body>
        <ClayCard.Row>
          <ClayCard.Description displayType="title">
            {name.toUpperCase()}
          </ClayCard.Description>
        </ClayCard.Row>
      </ClayCard.Body>
    </ClayCard>
  );
}
