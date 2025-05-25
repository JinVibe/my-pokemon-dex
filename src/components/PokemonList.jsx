import React from 'react';
import styled from 'styled-components';
import PokemonCard from './PokemonCard';

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 2rem;
  max-width: 1100px;
  margin: 0 auto;
`;

function PokemonList({ pokemons, onAddPokemon }) {
  return (
    <ListContainer>
      {pokemons.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          id={pokemon.id}
          name={pokemon.name}
          image={pokemon.image}
          onAdd={onAddPokemon}
        />
      ))}
    </ListContainer>
  );
}

export default PokemonList;