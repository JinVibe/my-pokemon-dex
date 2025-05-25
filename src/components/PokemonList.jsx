import React from 'react';
import styled from 'styled-components';
import PokemonCard from './PokemonCard';

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1.5rem;
  padding: 1.5rem;
`;

function PokemonList({ pokemons, onAddPokemon }) {
  return (
    <ListContainer>
      {pokemons.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          id={pokemon.id}
          name={pokemon.korean_name}
          image={pokemon.img_url}
          types={pokemon.types}
          onAdd={onAddPokemon}
        />
      ))}
    </ListContainer>
  );
}

export default PokemonList; 