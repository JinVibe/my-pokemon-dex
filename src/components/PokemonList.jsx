import React from 'react';
import styled from 'styled-components';
import PokemonCard from './PokemonCard';

const OuterContainer = styled.div`
  background: rgb(240, 240, 240);
  border-radius: 20px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  max-width: 1200px;
  margin: 0 auto 2rem auto;
  padding: 2.5rem 2rem;
`;

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1.5rem;
`;

function PokemonList({ pokemons, onAddPokemon }) {
  return (
    <OuterContainer>
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
    </OuterContainer>
  );
}

export default PokemonList; 