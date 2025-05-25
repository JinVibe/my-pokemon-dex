import React from 'react';
import styled from 'styled-components';

const DashboardContainer = styled.div`
  background: white;
  border-radius: 10px;
  padding: 1rem;
  margin: 1rem;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
`;

const Title = styled.h2`
  margin-bottom: 1rem;
  color: #333;
`;

const SelectedPokemonList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 1rem;
`;

const SelectedPokemon = styled.div`
  background: #f8f8f8;
  border-radius: 8px;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PokemonImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: contain;
`;

const PokemonName = styled.span`
  margin: 0.5rem 0;
  font-size: 0.9rem;
`;

const RemoveButton = styled.button`
  background: #ff4444;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.3rem 0.6rem;
  cursor: pointer;
  font-size: 0.8rem;

  &:hover {
    background: #cc0000;
  }
`;

function Dashboard({ selectedPokemons, onRemovePokemon }) {
  return (
    <DashboardContainer>
      <Title>선택된 포켓몬 ({selectedPokemons.length}/6)</Title>
      <SelectedPokemonList>
        {selectedPokemons.map((pokemon) => (
          <SelectedPokemon key={pokemon.id}>
            <PokemonImage src={pokemon.image} alt={pokemon.name} />
            <PokemonName>{pokemon.name}</PokemonName>
            <RemoveButton onClick={() => onRemovePokemon(pokemon.id)}>
              삭제
            </RemoveButton>
          </SelectedPokemon>
        ))}
      </SelectedPokemonList>
    </DashboardContainer>
  );
}

export default Dashboard; 