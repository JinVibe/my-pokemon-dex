import React, { useState } from 'react';
import styled from 'styled-components';
import PokemonList from '../components/PokemonList';
import Dashboard from '../components/Dashboard';
import MOCK_DATA from '../data/mock';

const DexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100vw;
  background-color: #f5f5f5;
`;

const Header = styled.header`
  background-color: #ff6b6b;
  color: white;
  padding: 1rem;
  text-align: center;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 2rem;
`;

function Dex() {
  const [selectedPokemons, setSelectedPokemons] = useState([]);

  const handleAddPokemon = (id) => {
    const pokemon = MOCK_DATA.find((p) => p.id === id);
    
    if (selectedPokemons.some((p) => p.id === id)) {
      alert('이미 선택된 포켓몬입니다.');
      return;
    }

    if (selectedPokemons.length >= 6) {
      alert('더 이상 선택할 수 없습니다.');
      return;
    }

    setSelectedPokemons([...selectedPokemons, pokemon]);
  };

  const handleRemovePokemon = (id) => {
    setSelectedPokemons(selectedPokemons.filter((pokemon) => pokemon.id !== id));
  };

  return (
    <DexContainer>
      <Header>
        <Title>포켓몬 도감</Title>
      </Header>
      <Dashboard
        selectedPokemons={selectedPokemons}
        onRemovePokemon={handleRemovePokemon}
      />
      <PokemonList
        pokemons={MOCK_DATA}
        onAddPokemon={handleAddPokemon}
      />
    </DexContainer>
  );
}

export default Dex; 