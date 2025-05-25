import React, { useState } from 'react';
import styled from 'styled-components';
import PokemonList from '../components/PokemonList';
import Dashboard from '../components/Dashboard';
import MOCK_DATA from '../data/mock';

const DexContainer = styled.div`
  min-height: 100vh;
  width: 100vw;
  background-color: #faeb8b;
  padding: 0;
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