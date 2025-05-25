import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Card = styled.div`
  background: white;
  border-radius: 10px;
  padding: 1rem;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const PokemonImage = styled.img`
  width: 120px;
  height: 120px;
  object-fit: contain;
`;

const PokemonName = styled.h3`
  margin: 0.5rem 0;
  color: #333;
`;

const TypeContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
`;

const Type = styled.span`
  background: #f0f0f0;
  padding: 0.2rem 0.5rem;
  border-radius: 15px;
  font-size: 0.8rem;
`;

const AddButton = styled.button`
  width: 100%;
  padding: 0.5rem;
  background: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background: #45a049;
  }
`;

function PokemonCard({ id, name, image, types, onAdd }) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/detail?id=${id}`);
  };

  const handleAddClick = (e) => {
    e.stopPropagation();
    onAdd(id);
  };

  return (
    <Card onClick={handleCardClick}>
      <PokemonImage src={image} alt={name} />
      <PokemonName>{name}</PokemonName>
      <TypeContainer>
        {types.map((type) => (
          <Type key={type}>{type}</Type>
        ))}
      </TypeContainer>
      <AddButton onClick={handleAddClick}>추가</AddButton>
    </Card>
  );
}

export default PokemonCard; 