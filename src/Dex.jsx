import React, { useState } from 'react';
import { MOCK_DATA } from './MOCK_DATA';
import Dashboard from './Dashboard';
import PokemonList from './PokemonList';

const Dex = () => {
  const [selectedPokemon, setSelectedPokemon] = useState([]);

  const handleAdd = (pokemon) => {
    if (selectedPokemon.find(p => p.id === pokemon.id)) {
      alert('이미 선택된 포켓몬입니다.');
      return;
    }
    if (selectedPokemon.length >= 6) {
      alert('더 이상 선택할 수 없습니다.');
      return;
    }
    setSelectedPokemon([...selectedPokemon, pokemon]);
  };

  const handleRemove = (id) => {
    setSelectedPokemon(selectedPokemon.filter(p => p.id !== id));
  };

  return (
    <div>
      <Dashboard selected={selectedPokemon} onRemove={handleRemove} />
      <PokemonList list={MOCK_DATA} onAdd={handleAdd} />
    </div>
  );
};

export default Dex;
